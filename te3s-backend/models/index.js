import { pool } from "../db/index.js";

// async function to get by name
async function getMembers() {
  const results = await pool.query(
    `SELECT * FROM members`
  );
  const rows = results.rows;
  return rows;
}

async function getProfilePicture(steamID) {
  const pfpFetch = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.API_KEY}&steamids=${steamID}`)
  const pfpFetchData = await pfpFetch.json();
  return pfpFetchData;
}

export { getMembers, getProfilePicture };
