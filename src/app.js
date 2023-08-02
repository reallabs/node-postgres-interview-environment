import express from "express";
import { sequelize, User, Post, Follow, Like } from "./models/index.js";
import sql from './db.js'

// Constants
const PORT = process.env.PORT ?? 8080;
const HOST = process.env.HOST ?? '0.0.0.0';
await sequelize.sync()

const app = express();
app.use(express.json())
app.get("/hello_db", async (req, res) => {
  try {
    await sequelize.authenticate();
    const data = await sql`SELECT * FROM users`;
    res.send(JSON.stringify(data));
  } catch (error) {
    res.status(500).send('Unable to connect to the database:', error);
  }
});

// posta posta
app.post("/posts", async (req, res) => {
  const payload = req.body
  try {
    const post = await Post.create(payload)
    res.status(200).send(post)
  } catch (e) {
    res.status(500).send(`something went wrong: ${e}`)
  }

})

// fetch posts for a users
// userId -> Posts[]
// userId -> who they are following -> posts
app.get("/posts", async (req, res) => {
  const userId = req.query.userId
  // fetch user followees
  // foreach followee -> fetch post
  // fold [[x]] -> [x]

  //sequelize

  try {
    const u = await User.findOne({ where: { id: userId } })
    const fUsers = await u.getFollowees()
    const posts = await Post.findAll({
      where: { userId: [u, ...fUsers].map(x => x.id) },
      order: [['createdAt', 'DESC']]
    })

    res.status(200).send(posts)
  } catch (e) {
    res.status(500).send(`something went wrong: ${e}`)
  }

})

// follow a user
// followerId, followeeId
app.post("/follows", async (req, res) => {
  const payload = req.body
  try {
    const follow = await Follow.create(payload)
    res.status(200).send(follow)
  } catch (e) {
    res.status(500).send(`something went wrong: ${e}`)
  }

})

// like a post
app.post("/likes", async (req, res) => {
  const payload = req.body
  try {
    const like = await Like.create(payload)
    res.status(200).send(like)
  } catch (e) {
    res.status(500).send(`something went wrong: ${e}`)
  }

})

app.listen(PORT, HOST, async () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
