export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { electricity, distance } = req.body;
    const electricityCO2 = electricity * 0.85;
    const travelCO2 = distance * 0.17;
    const total = electricityCO2 + travelCO2;
    return res.status(200).json({ electricityCO2, travelCO2, total });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
