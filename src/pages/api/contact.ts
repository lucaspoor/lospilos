import { ContactosMailerService } from "@/services/ContactoMailerService";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

type Token = {
  token: string;
  expiration: number;
};
let tokens: Array<Token> = [];

const EXPIRATION_MINUTES = 15;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token)
      return res.status(401).json({ error: "Invalid request x" } as any);

    if (!isValid(token))
      return res.status(401).json({ error: "Invalid request y" } as any);

    const contacto = req.body;

    if (contacto.comentario) return res.status(400);

    if (!(contacto && contacto.nombre && contacto.email && contacto.nombre))
      return res.status(400).send({
        message: "Datos inválidos " + contacto?.nombre?.length,
      });

    try {
      const mailer = new ContactosMailerService(contacto);
      await mailer.enviar();

      res.send(contacto);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  } else {
    const t: Token = {
      token: Math.random().toString(16).substring(2),
      expiration: Date.now() + EXPIRATION_MINUTES * 60 * 1000,
    };

    tokens.push(t);
    res.status(200).json(t.token);
  }
}
function isValid(token: string) {
  const t = tokens.find((t) => t.token === token);
  if (!t) {
    console.log(`Token no encontrado: ${token}`);
    return false;
  }
  if (t.expiration < Date.now()) {
    console.log(`Token expirado: ${token}: ${t.expiration} < ${Date.now()}`);
    return false;
  }
  return true;
}
