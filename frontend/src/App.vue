<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <!-- Main Content -->
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script setup>
// Routes are loaded via router
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 20px;
  background: #2d6a4f;
  padding: 10px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar a.router-link-exact-active {
  text-decoration: underline;
}

.page {
  padding: 20px;
}
</style>
