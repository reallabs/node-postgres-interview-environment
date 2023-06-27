import express from "express";
import * as _controller from "../controller";

export async function routes({
  router = express.Router(),
  controller = _controller,
} = {}) {
  router.post("/posts", await controller.createPostController());

  return router;
}
