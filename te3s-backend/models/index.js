import { pool } from "../db/index.js";

// async function to get by name
async function getMembers() {
  const results = await pool.query(
    `SELECT * FROM members`
  );
  const rows = results.rows;
  return rows;
}

export { getMembers };
