module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
       contentSecurityPolicy:false,// {
      //   directives: {
      //     "connect-src": ["'self'", "http://localhost:1337", "http://172.16.33.206:3000"],
      //     "img-src": ["'self'", "data:", "blob:", "http://172.16.33.206:3000"],
      //     "media-src": ["'self'", "data:", "blob:", "http://172.16.33.206:3000"],
      //     upgradeInsecureRequests: null,
      //   },
      // },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: "*", // Added your frontend IP
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
