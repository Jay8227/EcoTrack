<template>
  <section class="contact-container">
    <h1>Contact Us</h1>
    <p>We’d love to hear from you! Reach out to us through the following links:</p>

    <h2>Our Team on GitHub</h2>
    <ul>
      <li><a href="https://github.com/Jay8227" target="_blank">Jayesh More (Lead Member)</a></li>
      <li><a href="https://github.com/aryaabhilash7-lgtm" target="_blank">Arya Abhilash</a></li>
      <li><a href="https://github.com/prabhakardrishti3" target="_blank">Drishti Prabhakar</a></li>
      <li><a href="https://github.com/parthsatarkar16" target="_blank">Parth Satarkar</a></li>
    </ul>

    <h2>Connect on Instagram</h2>
    <p>
      <a href="https://www.instagram.com/jayeshmore_10" target="_blank" class="instagram-link">
        @TerraSpectra
      </a>
    </p>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  line-height: 1.6;
}

.contact-container h1 {
  color: #2d6a4f;
  font-size: 2rem;
  margin-bottom: 15px;
}

.contact-container h2 {
  margin-top: 20px;
  color: #1b4332;
}

.contact-container ul {
  list-style-type: none;
  padding-left: 0;
}

.contact-container ul li {
  margin-bottom: 8px;
}

.contact-container a {
  color: #1b4332;
  text-decoration: none;
  font-weight: bold;
}

.contact-container a:hover {
  text-decoration: underline;
}

.instagram-link {
  color: #d6336c;
}
</style>
