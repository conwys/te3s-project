import { pool } from "../index.js";
import { resetTable } from "../helpers.js";

try {
  await resetTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}