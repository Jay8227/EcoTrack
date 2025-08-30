<script setup>
import { ref, watch } from 'vue'
import {
  Chart as ChartJS,
  Title, Tooltip, Legend,
  BarElement, CategoryScale, LinearScale,
  ArcElement
} from 'chart.js'
import { Bar, Pie } from 'vue-chartjs'

// ✅ Register Chart.js modules
ChartJS.register(
  Title, Tooltip, Legend,
  BarElement, CategoryScale, LinearScale,
  ArcElement
)

// ✅ Reactive state
const electricity = ref(0)
const distance = ref(0)
const co2Footprint = ref(0)

const barChartData = ref(null)
const pieChartData = ref(null)

const chartOptions = {
  responsive: true,
  animation: { duration: 1000, easing: 'easeInOutQuart' },
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Your Daily CO₂ Breakdown' }
  }
}

// ✅ Call backend API
async function calculate() {
  try {
    const res = await fetch('http://localhost:5000/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        electricity: electricity.value,
        distance: distance.value
      })
    })

    const data = await res.json()

    co2Footprint.value = data.total

    // Update charts
    barChartData.value = {
      labels: ['Electricity', 'Travel'],
      datasets: [
        {
          label: 'CO₂ Emissions (kg/day)',
          backgroundColor: ['#4CAF50', '#2196F3'],
          data: [data.electricityCO2, data.travelCO2]
        }
      ]
    }

    pieChartData.value = {
      labels: ['Electricity', 'Travel'],
      datasets: [
        {
          backgroundColor: ['#4CAF50', '#2196F3'],
          data: [data.electricityCO2, data.travelCO2]
        }
      ]
    }
  } catch (err) {
    console.error('❌ Backend error:', err)
  }
}

// ✅ Automatically recalc when input changes
watch([electricity, distance], calculate, { immediate: true })
</script>

<template>
  <div class="calculator">
    <h2>Carbon Footprint Calculator</h2>

    <label>Electricity Usage (kWh/day):</label>
    <input type="number" v-model.number="electricity" min="0" step="any" />

    <label>Travel Distance (km/day):</label>
    <input type="number" v-model.number="distance" min="0" step="any" />

    <h3 v-if="co2Footprint">
      Your Daily CO₂ Footprint: {{ co2Footprint.toFixed(2) }} kg
    </h3>

    <Bar v-if="barChartData" :data="barChartData" :options="chartOptions" class="my-4" />
    <Pie v-if="pieChartData" :data="pieChartData" :options="chartOptions" class="my-4" />
  </div>
</template>

<style scoped>
.calculator {
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem;
}
.my-4 {
  margin: 1rem 0;
}
input {
  display: block;
  margin: 0.5rem auto;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>
