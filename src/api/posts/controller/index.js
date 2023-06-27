import * as _postService from "../service";

export async function createPostController({
  postService = _postService,
} = {}) {
  return async (req, res) => {
    try {
      const { body } = req;
      // do validation on body (JSON Schema, Zod, Joi, etc)
      const someResponse = await postService.createPost({ input: body });

      return res.status(200).send(someResponse);
    } catch (error) {
      // do validation on error to determine status code
      return res.status(500).send(new Error("some error"));
    }
  };
}
