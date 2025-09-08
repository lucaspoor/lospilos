import React from "react";

import { EmaiSolicitante } from "./EmaiSolicitante";
import { EmailOrganizacion } from "./EmailOrganizacion";
import { render } from "@react-email/render";
import { DatosContacto } from "./DatosContacto";
import { NodeMailer } from "./NodeMailer";
import { SendMailArgs } from "./Mailer";

export class ContactosMailerService {
  async enviar() {
    await this.notificarSolicitante();
    await this.sendEmailOrganizacion();
  }
  mailer = new NodeMailer();
  constructor(public __contacto: DatosContacto) {}

  async notificarSolicitante() {
    if (!this.__contacto.email) {
      console.log("Contacto anónima, cancelando email contactonte");
      return;
    }

    const params: SendMailArgs = {
      from: process.env.SMTP_USER || "contacto@lospilos.cl",
      to: this.__contacto.email,
      subject: `Contacto ha sido ingresada correctamente`,
      html: await render(<EmaiSolicitante contacto={this.__contacto} />),
      text: "habilitar html por favor",
    };
    console.log("Enviando email a solicitante", params);
    return await this.mailer.send(params);
  }

  async sendEmailOrganizacion(): Promise<string[]> {
    const emails = [process.env.CONTACTO_EMAIL || "lospiloscaburgua@gmail.com"];

    if (emails.length === 0)
      throw Error(`Organización No hay a quien enviar el email`);

    const params: SendMailArgs = {
      from: process.env.SMTP_USER || "contacto@lospilos.cl",
      to: emails.join(", "),
      subject: `Se ha ingresado un nuevo contacto`,
      html: await render(<EmailOrganizacion contacto={this.__contacto} />),
      text: "habilitar html por favor",
    };
    console.log("Enviando email ornanización", params);
    await this.mailer.send(params);

    return emails;
  }
}
