import nodemailer from "nodemailer";

export class MailTransporter {
  constructor(host, port = 465, user, pass, secure = true) {
    this.host = host;
    this.port = port;
    this.user = user;
    this.pass = pass;
    this.secure = secure;

    this.nodemailerTransporter = nodemailer.createTransport({
      host: this.host,
      port: this.port,
      secure: this.secure,
      auth: {
        user: this.user,
        pass: this.pass,
      },
    });
  }

  async send(from, to, subject, text = undefined, html = undefined) {
    this.nodemailerTransporter.sendMail(
      {
        from: from,
        to: `${to.toString()}`,
        subject: subject,
        text: text,
        html: html,
      },
      (err, info) => {
        if (err) {
          console.log(err);
        }
        console.group("Mailer");
        console.log(info);
        console.groupEnd("Mailer");

        console.log(`Preview: ${nodemailer.getTestMessageUrl(info)}`);
      }
    );
  }
}
