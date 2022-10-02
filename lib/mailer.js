import nodemailer from "nodemailer";

async function mailer() {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "joyce.nikolaus@ethereal.email",
      pass: "Wd5ygyRUWkhNYbUxyx",
    },
  });
  let info = await transporter.sendMail({
    from: '"Healthcare app" <joyce.nikolaus@ethereal.email>', // sender address
    to: "", // list of receivers
    subject: "Hello World", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

export default mailer;
