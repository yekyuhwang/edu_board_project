import express from "express";
import {
  detailController,
  listController,
  editController,
  writeController,
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/list", listController);
boardRouter.get("/detail", detailController);
boardRouter.get("/edit", editController);
boardRouter.get("/write", writeController);

export default boardRouter;
