const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  const { electricity, distance } = req.body;
  const electricityCO2 = electricity * 0.85;
  const travelCO2 = distance * 0.17;
  const total = electricityCO2 + travelCO2;
  res.json({ electricityCO2, travelCO2, total });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
