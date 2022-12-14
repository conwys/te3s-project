import { refillTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await refillTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
