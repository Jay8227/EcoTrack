<template>
  <div class="dashboard">
    <h1>Carbon Footprint Calculator</h1>

    <div class="form-section">
      <label>Electricity Usage (kWh/day):</label>
      <input type="number" v-model="electricity" placeholder="Enter electricity usage" />

      <label>Travel Distance (km/day):</label>
      <input type="number" v-model="travel" placeholder="Enter travel distance" />

      <button @click="calculateFootprint">Calculate</button>
    </div>

    <div v-if="footprint" class="result">
      <h2>Your Daily CO₂ Footprint: {{ footprint }} kg</h2>
    </div>

    <div class="chart-section">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Chart.js imports
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import { Bar } from "vue-chartjs";

// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const electricity = ref(0);
const travel = ref(0);
const footprint = ref(null);

// Chart data
const chartData = ref({
  labels: ["Electricity", "Travel"],
  datasets: [
    {
      label: "CO₂ Emissions (kg/day)",
      backgroundColor: ["#2d6a4f", "#95d5b2"],
      data: [0, 0]
    }
  ]
});

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Your Daily CO₂ Breakdown" }
  }
};

function calculateFootprint() {
  const co2FromElectricity = electricity.value * 0.9; // 0.9 kg/kWh
  const co2FromTravel = travel.value * 0.12; // 0.12 kg/km
  footprint.value = (co2FromElectricity + co2FromTravel).toFixed(2);

  // Update chart data
  chartData.value.datasets[0].data = [co2FromElectricity, co2FromTravel];
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  text-align: center;
}

.form-section {
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  padding: 10px;
  background-color: #2d6a4f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #1b4332;
}

.result {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

.chart-section {
  margin-top: 30px;
}
</style>
