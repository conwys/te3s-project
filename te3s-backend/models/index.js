import { pool } from "../db/index.js";

// async function to get by name
async function getMembers() {
  const results = await pool.query(
    `SELECT * FROM cards`
  );
  const rows = results.rows;
  return rows;
}

export { getByName };
