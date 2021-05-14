import express from "express";
import {
  detailController,
  listController,
  editController,
  writeController,
} from "../controllers/boardController";
import { dbConnectionHandler } from "../middleware/midleware";

const boardRouter = express.Router();

boardRouter.get("/list", dbConnectionHandler, listController);
boardRouter.get("/detail", dbConnectionHandler, detailController);
boardRouter.get("/edit", editController);
boardRouter.get("/write", writeController);

export default boardRouter;
