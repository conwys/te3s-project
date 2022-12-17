import { pool } from "./index.js";

// function to create table
async function createTable() {
  return await pool.query(
    `CREATE TABLE members 
      (
        uid INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name TEXT,
        yt TEXT,
        st TEXT,
        ds TEXT,
        steam64 TEXT
      );`
  );
}

// drop table if exists
async function dropTable() {
  return await pool.query("DROP TABLE IF EXISTS members;");
}

// refill table with our data
async function refillTable() {
  return await pool.query(
    `INSERT INTO
    members (name, yt, st, ds, steam64)
    VALUES
      (
        'uxi',
        'https://youtube.com/@xetro',
        'https://steamcommunity.com/id/uxi',
        'xetro#6108',
        '76561197961918582'
      ),
      (
        'roman',
        'https://youtube.com/@FFVII',
        'https://steamcommunity.com/id/romanesque',
        'romanesque#6715',
        '76561198139149949'
      ),
      (
        'conwy',
        'https://youtube.com/@conwys',
        'https://steamcommunity.com/id/buo',
        'bem#0001',
        '76561199062092795'
      ),
      (
        'eve',
        'https://youtube.com/@dgjeans',
        'https://steamcommunity.com/id/kissheels',
        'IzzyLover123#0733',
        '76561199402863087'
      ),
      (
        'akidra',
        'https://youtube.com/@akidra',
        'https://steamcommunity.com/id/akidra',
        'akidra#8144',
        '76561198873629095'
      );`
  );
}

// reset the database
async function resetTable() {
  return [await dropTable(), await createTable(), await refillTable()];
}

export { createTable, dropTable, refillTable, resetTable };
