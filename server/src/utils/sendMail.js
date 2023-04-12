const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, link) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_NAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_NAME,
      to: email,
      subject,
      html: `
        <h3 style="color: #ff6464">You have a request to reset password</h3>
        <p>Click here: ${link}</p>
      `,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
