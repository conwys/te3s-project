import { createTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await createTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
