import  mysql  from "mysql2/promise";
import { config } from "./config";

const connect = async () => {
  //  return await mysql.createConnection(config)
  const conn = await mysql.createConnection(config)

  const [rows] = await conn.query('SELECT * from tasks');

  console.log(rows);
};

connect();