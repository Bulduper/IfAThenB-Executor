const config = {
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE == "true" ? true : false,
  requireTLS: process.env.SMTP_REQUIRE_TLS == "true" ? true : false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  logger: true,
};

export default config;
