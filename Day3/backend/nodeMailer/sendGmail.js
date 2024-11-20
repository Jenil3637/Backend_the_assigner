import nodemailer from 'nodemailer';

const sendMail = async (toEmail, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: toEmail, 
      subject: 'Your OTP Code', 
      text: `Your OTP code is: ${otp}`, 
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendMail;
