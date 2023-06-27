import bodyParser from "body-parser";

export default async function ({ app }) {
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());
}
