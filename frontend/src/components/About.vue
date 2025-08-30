<template>
  <section class="about-container">
    <h1>About Carbon Footprint Calculator</h1>
    <p>
      The Carbon Footprint Calculator is a simple web app designed to help individuals and organizations
      measure their environmental impact. By entering key data such as electricity usage and travel distance,
      users can estimate the amount of CO₂ emissions they produce.
    </p>

    <p>
      This project was built using <strong>Vue 3</strong> and <strong>Vite</strong> to deliver a fast,
      lightweight, and interactive experience. Our goal is to raise awareness of personal carbon emissions
      and encourage sustainable practices.
    </p>

    <h2>Key Features</h2>
    <ul>
      <li>Calculate carbon footprint based on electricity consumption</li>
      <li>Estimate emissions from travel distances</li>
      <li>Visualize data using interactive charts</li>
      <li>Simple and user-friendly interface</li>
    </ul>

    <p>
      By understanding your environmental impact, you can take actionable steps toward reducing your carbon footprint.
      Together, we can contribute to a more sustainable future.
    </p>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  line-height: 1.6;
}

.about-container h1 {
  color: #2d6a4f;
  font-size: 2rem;
  margin-bottom: 15px;
}

.about-container h2 {
  margin-top: 20px;
  color: #1b4332;
}

.about-container ul {
  margin: 10px 0;
  padding-left: 20px;
}

.about-container ul li {
  margin-bottom: 8px;
}
</style>
