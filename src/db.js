import { createPool } from "mysql2/promise";
import fs from "fs";
import { getDirname} from '../util/utils.js';
import {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE, DB_FILE_CA} from '../config.js'
//
const __dirname = getDirname(import.meta.url);
// console.log(__dirname + "/isrgrootx1.pem");
//
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
  ssl: {
    ca: fs.readFileSync( __dirname + "/"+ DB_FILE_CA),
  },
});

// pool.query('')
