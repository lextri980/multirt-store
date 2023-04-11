const nodemailer = require("nodemailer");
const { env } = require("process");

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_NAME,
        password: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_NAME,
      to: email,
      subject,
      text,
    });
  } catch (error) {
    console.log(error)
  }
};

module.exports = sendEmail;
