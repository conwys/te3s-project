import { pool } from "../db/index.js";

// async function to get by name
async function getMembers() {
  const results = await pool.query(
    `SELECT * FROM members`
  );
  const rows = results.rows;
  return rows;
}

async function getProfilePicture() {
  const fetch = await fetch(" http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=08C9A90F110303FA18703DC07B9BE975&steamids=76561199062092795")
  const fetchData = await fetch.json();
  console.log(fetchData);
}

export { getMembers, getProfilePicture };
