const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// ✅ Use Render/Heroku's dynamic port OR default to 5000 locally
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example calculation API
app.post('/calculate', (req, res) => {
  const { electricity, distance } = req.body;

  // Simple formula (same as frontend)
  const electricityCO2 = electricity * 0.85;
  const travelCO2 = distance * 0.17;
  const total = electricityCO2 + travelCO2;

  res.json({
    electricityCO2,
    travelCO2,
    total
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
