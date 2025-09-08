import * as nodemailer from "nodemailer";
import { Mailer, SendMailArgs } from "./Mailer";

export class NodeMailer implements Mailer {
  transporter: any;
  constructor() {
    const smtpParams: any = {
      host: process.env.SMTP_SERVER || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    };
    this.transporter = nodemailer.createTransport(smtpParams);
    console.log(smtpParams);
    this.transporter.logger = {
      debug: (s: any) => {
        console.log(s);
      },
      error: (s: any) => {
        console.log(s);
      },
    };
    this.transporter.verify().then(console.log).catch(console.error);
  }
  send(args: SendMailArgs) {
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(args, function (error: any, info: any) {
        if (error) {
          reject(error);
        } else {
          resolve("Email sent: " + info.response);
        }
      });
    });
  }
}
