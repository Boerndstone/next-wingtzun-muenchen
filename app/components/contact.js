import nodemailer from "nodemailer";

export default async function (req, res) {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com", // replace with your email provider's SMTP server
    port: 587,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailData = {
    from: email,
    to: "your-email@example.com",
    subject: `New Message From ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
