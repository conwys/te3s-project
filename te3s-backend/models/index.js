import { pool } from "../db/index.js";

// async function to get by name
async function getByName(name) {
  const results = await pool.query(
    `SELECT * FROM cards
    WHERE LOWER(CONCAT(first_name,' ', last_name)) LIKE LOWER('%'||$1||'%') 
    ORDER BY last_name; `,
    [name]
  );
  const rows = results.rows;
  return rows;
}

export { getByName };
