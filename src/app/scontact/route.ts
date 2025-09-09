import { ContactosMailerService } from "@/services/ContactoMailerService";
import { DatosContacto } from "@/services/DatosContacto";
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

export async function GET() {
  const t: Token = {
    token: Math.random().toString(16).substring(2),
    expiration: Date.now() + EXPIRATION_MINUTES * 60 * 1000,
  };

  tokens.push(t);

  return Response.json(t.token);
}

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    console.log("Spam detectado, request sin token");
    return Response.json({ error: "Invalid request x" }, {
      status: 401,
    } as any);
  }

  if (!isValid(token)) {
    console.log("Spam detectado, token inválido");
    return Response.json({ error: "Invalid request y" }, { status: 401 });
  }
  const contacto = (await request.json()) as DatosContacto;

  if (contacto.comentario) {
    console.log("Spam detectado, campo comentario con datos");
    return Response.json(
      {
        message: "Error",
      },
      { status: 400 } as any
    );
  }

  if (!(contacto && contacto.nombre && contacto.email))
    return Response.json(
      {
        message: "Datos inválidos " + contacto?.nombre?.length,
      },
      { status: 400 } as any
    );

  try {
    const mailer = new ContactosMailerService(contacto);
    await mailer.enviar();

    return Response.json(contacto);
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 } as any);
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
