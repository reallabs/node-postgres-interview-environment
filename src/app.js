import express from "express";
import {sequelize, User, Post, Follow} from "./models/index.js";

// Constants
const PORT = process.env.PORT ?? 8080;
const HOST = process.env.HOST ?? '0.0.0.0';

const app = express();

app.get("/hello_db", async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send('Database connected!');
    } catch (error) {
        res.status(500).send('Unable to connect to the database:', error);
    }
});

app.listen(PORT, HOST, async () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});