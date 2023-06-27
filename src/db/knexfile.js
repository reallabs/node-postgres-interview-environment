export default {
  local: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    searchPath: ["knex", "public"],
    pool: {
      min: 1,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds/local",
    },
  },
};
