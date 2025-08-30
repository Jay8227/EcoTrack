<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

// Register Chart.js modules
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Props from parent
defineProps({
  electricity: Number,
  travel: Number
})

// Chart data
const chartData = computed(() => ({
  labels: ['Electricity', 'Travel'],
  datasets: [
    {
      label: 'CO₂ Emissions (kg/day)',
      data: [props.electricity, props.travel],
      backgroundColor: ['#4CAF50', '#2196F3']
    }
  ]
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: true },
    title: { display: true, text: 'Your Daily CO₂ Breakdown' }
  }
}
</script>

<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>
