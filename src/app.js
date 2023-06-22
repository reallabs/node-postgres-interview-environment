import express from "express";
import {Sequelize} from "sequelize";

// Constants
const PORT = process.env.PORT ?? 8080;
const HOST = process.env.HOST ?? '0.0.0.0';

// TODO: switch to postgres connection
const sequelize = new Sequelize(process.env.DATABASE_URL);

const app = express();

app.get("/hello_db", async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send('Database connected!');
    } catch (error) {
        res.status(500).send('Unable to connect to the database:', error);
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});