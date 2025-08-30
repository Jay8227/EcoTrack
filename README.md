EcoTrack – Carbon Footprint Tracker

Overview
EcoTrack is a lightweight web app that helps individuals track their daily carbon footprint (CO₂ emissions) based on electricity usage and travel distance.  
By raising awareness, EcoTrack empowers users to make sustainable choices in energy and mobility.

This project was built as a proof of concept MVP for a hackathon.  

Problem Statement
The climate crisis is accelerating, but most individuals are unaware of their personal environmental impact.  

For example:
Eating a beef burger emits ~3 kg CO₂ and consumes ~2,500 liters of water.  
A 5 km car ride emits ~1 kg CO₂ compared to 0 kg if cycled.  

Without awareness, daily personal choices keep adding up to global problems.  

Solution
EcoTrack provides a simple, interactive web app where users can:
1. Enter daily lifestyle inputs (electricity use, travel distance).  
2. Instantly see their carbon footprint in CO₂ (kg/day).  
3. View interactive bar & pie charts of their breakdown.  
4. Learn to take actionable steps toward a greener lifestyle.  

Tech Stack
Frontend: Vue 3 + Vite  
Charts: Chart.js (via vue-chartjs)  
Backend: Node.js + Express (calculation API)  
Styling: Vanilla CSS  

(Database integration planned in future versions)


Features (MVP)
Input daily electricity usage (kWh/day)  
Input daily travel distance (km/day)  
Backend API calculates estimated CO₂ footprint  
Dashboard with interactive charts (bar & pie)  
(Future) Add food choices & water footprint  
(Future) User login and database storage  

Getting Started

Clone Repository
```bash
git clone https://github.com/Jay8227/EcoTrack.git
cd EcoTrack

Backend setup
cd backend
npm install
npm start     # runs Express server at http://localhost:5000

Fronted setup
cd frontend
npm install
npm run dev   # runs Vite dev server at http://localhost:5173

Folder structure
EcoTrack/
│── backend/          # Node.js + Express API
│   ├── server.js
│   ├── package.json
│   └── ...
│
│── frontend/         # Vue 3 + Vite app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.vue
│   ├── package.json
│   └── ...
│
│── README.md         # Project documentation
│── LICENSE
└── .gitignore

Usage:
Enter daily electricity use (kWh/day) and travel distance (km/day).
Backend API calculates CO₂ footprint.
Results are shown in bar & pie charts instantly.

Contributors:
@Jay8227
@aryaabhilash7
@prabhakardrishti3
@parthsatarkar16


License
This project is licensed under the MIT License.
