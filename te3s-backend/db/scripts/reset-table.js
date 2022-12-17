import { pool } from "../index.js";
import { resetTable } from "../helpers.js";

try {
  await resetTable();
  console.log("table reset")
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}