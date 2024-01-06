
import nodemailer from 'nodemailer';
// 2. Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
            user:'shubham.kb888@gmail.com',
            pass: 'oehw wveu evqz rrry',
  },
});

// 3. Function to send an email
export async function sendMail(to, subject, text) {
  // 2. Configure email content 
  const mailOption = {
    from: 'shubham.kb888@gmail.com',
    to: to,
    subject: subject,
    text: text,
  };

  // 3. Send the email.
  try {
    const result = await transporter.sendMail(mailOption);
    console.log('Email sent successfully');
  } catch (err) {
    console.log('Email send failed with error: ' + err);
  }
}
