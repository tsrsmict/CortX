import twilio from "twilio";

const sendMessage = (accountSid, authToken, to, body) => {
  const client = twilio(accountSid, authToken);
  client.messages
    .create({
      body: body,
      from: "whatsapp:+14155238886",
      to: to,
    })
    .then((message) => console.log(message.sid))
    .done();
};
export default sendMessage;
