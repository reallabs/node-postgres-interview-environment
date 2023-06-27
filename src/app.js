import "dotenv/config";

import _express from "express";
import _knex from "knex";
import _knexConfig from "./db/knexfile";
import { routes as _postRoutes } from "./api/posts/routes";
import * as url from "node:url";
import _config from "./config";
import _middleware from "./middleware";

export async function build({
  express = _express,
  knex = _knex,
  knexConfig = _knexConfig,
  config = _config,
  postRoutes = _postRoutes,
  middleware = _middleware,
} = {}) {
  // create db
  const db = knex(knexConfig[config.app.env]);

  // validate sql connection (this can be done in a knex hook)
  await db.raw("select 1+1");

  // create app
  const app = express();

  // load middleware
  await middleware({ app });

  // load routes
  app.use(await postRoutes());

  // return built app
  return app;
}

/**
 * Auto start/listen if this file is called directly
 */
if (import.meta.url.startsWith("file:")) {
  const modulePath = url.fileURLToPath(import.meta.url);
  if (process.argv[1] === modulePath) {
    const {
      app: { port, host },
    } = _config;
    const app = await build();
    app.listen(port, host, (error) => {
      if (error != null) {
        console.error("Error starting app.", error);
        process.exit(1);
      }
      -console.log(`Running on http://${host}:
      ${port}`);
    });
  }
}
