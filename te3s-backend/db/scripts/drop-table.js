import { dropTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await dropTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
