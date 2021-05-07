import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import boardRouter from "./routers/boardRouter";

// body-parser -> 미들웨어이고, 미들웨어는 핸들러(컨트롤러)로 들어가기전에 꼭 body-parser에 들렸다가 간다는 뜻이다.
// body-parser -> post 방식으로 암호화가 되어 전송할때 필요

const app = express();

const PORT = 7000;

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//  제이슨 형태에서 암호화가 되어 온다.

app.use("/", globalRouter);
app.use("/board", boardRouter);

app.listen(PORT, () => {
  console.log(`🍀 LOL_BOARD WEB PROJECT - http://localhost:${PORT}`);
});
