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

// async function to get card by email
async function getByEmail(email) {
  const results = await pool.query(
    `SELECT * FROM cards
    WHERE LOWER(email) LIKE LOWER('%'||$1||'%'); `,
    [email]
  );
  const row = results.rows[0];
  return row;
}

// async function to add new card
async function addNewCard(card) {
  const results = await pool.query(
    `INSERT INTO cards 
    (first_name, last_name, image, profession, linkedin_username, github_username, email, phone, password) 
    VALUES
    ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    RETURNING *; `,
    [
      card.first_name,
      card.last_name,
      card.image,
      card.profession,
      card.linkedin_username,
      card.github_username,
      card.email,
      card.phone,
      card.password,
    ]
  );
  const rows = results.rows[0];
  return rows;
}

// edit by card_id
async function editById(id, updates) {
  const results = await pool.query(
    `UPDATE cards
    SET first_name = $1, 
    last_name = $2, 
    image = $3, 
    profession = $4, 
    linkedin_username = $5, 
    github_username = $6, 
    email = $7, 
    phone = $8
    WHERE card_id = $9
    RETURNING *`,
    [
      updates.first_name,
      updates.last_name,
      updates.image,
      updates.profession,
      updates.linkedin_username,
      updates.github_username,
      updates.email,
      updates.phone,
      id,
    ]
  );
  const rows = results.rows[0];
  return rows;
}

// delete by card_id
async function deleteById(id) {
  const results = await pool.query(
    `DELETE FROM cards
    WHERE card_id = $1
    RETURNING *`,
    [id]
  );
  const rows = results.rows[0];
  return rows;
}

export { getByName, getByEmail, addNewCard, deleteById, editById };
