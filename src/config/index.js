export default {
  app: {
    env: process.env.APP_ENV ?? "local",
    port: process.env.PORT,
    host: process.env.HOST,
  },
};
