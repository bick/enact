import { type GetTestResponse } from "@enact/types";
import { Router } from "express";

const testRouter = Router();

testRouter.get("/", function (_, res) {
  const testJson: GetTestResponse = {
    message: "Hello from Express API!",
  };
  res.json(testJson);
});

export default testRouter;
