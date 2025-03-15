'use strict';

/**
 * contact-message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController("api::contact-message.contact-message" );

// module.exports = createCoreController("api::contact-message.contact-message", ({ strapi }) => ({
//   async create(ctx) {
//     const { name, email, message } = ctx.request.body;

//     // Save contact message in Strapi
//     const newMessage = await strapi.entityService.create("api::contact-message.contact-message", {
//         data: { Name: name, Email: email, Message: message },
//     });

//     // Send email notification
//     try {
//       await strapi.plugins["email"].services.email.send({
//         to: "shinitks737@gmail.com",
//         from: "shinitks7@gmail.com",
//         subject: `New Contact Form Submission from ${name}`,
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       });
//       return ctx.send({ success: true, message: "Message sent successfully!" });
//     } catch (error) {
//       console.error("Email sending error:", error);
//       return ctx.badRequest("Email could not be sent.");
//     }
//   },
// }));
