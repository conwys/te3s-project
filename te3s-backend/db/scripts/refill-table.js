import { refillTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await refillTable();
  console.log("table filled")
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
