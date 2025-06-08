const express = require('express');
const cors = require('cors');
const { Low, JSONFile } = require('lowdb');
const path = require('path');

const app = express();
app.use(cors());

const dbFile = process.env.DB_FILE || path.join(__dirname, 'db.json');
const adapter = new JSONFile(dbFile);
const db = new Low(adapter);

async function init() {
  await db.read();
  db.data ||= { visits: 0 };
  await db.write();
}

init();

app.get('/visits', async (req, res) => {
  await db.read();
  res.json({ visits: db.data.visits });
});

app.post('/visit', async (req, res) => {
  await db.read();
  db.data.visits += 1;
  await db.write();
  res.json({ visits: db.data.visits });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Visitor API running on port ${PORT}`);
});
