// module.exports = ({ env }) => ({
//     email: {
//       config: {
//         provider: 'nodemailer',
//         providerOptions: {
//           host: 'smtp.gmail.com',
//           port: 465,
//           secure: true,
//           auth: {
//             user: env('SMTP_USER'), // Your Gmail
//             pass: env('SMTP_PASS'), // Your App Password
//           },
//         },
//         settings: {
//           defaultFrom: 'your-email@gmail.com',
//           defaultReplyTo: 'your-email@gmail.com',
//         },
//       },
//     },
//   });
  
module.exports = () => ({});