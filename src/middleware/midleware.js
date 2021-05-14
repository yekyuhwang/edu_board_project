import mysql from "mysql2";

// 라우터 -> 미들웨어 -> 컨트롤러
// next -> req, res 다음으로 넘어가라는 뜻
export const dbConnectionHandler = (req, res, next) => {
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3307",
    user: "root",
    password: "fourleaf0309",
    database: "edu",
  });

  console.log(connection);

  //on -> connection을 바라보고 있고 에러를 호출하겠다.
  connection.on("error", (error) => {
    console.log(error);
    console.log("DB Connection Failed! Re Try Connection!");

    setTimeout(() => {
      dbConnectionHandler();
    }, 3000);
  });

  req.body.connection = connection;

  next();
};
