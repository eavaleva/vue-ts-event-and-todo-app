<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'EventList' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'About' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: monospace, ui-monospace, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 10 20px;
}

nav {
  position: fixed;
  top: 0;

  left: 0;
  display: flex;
  padding: 10px 20px;
  background-color: white;
  /* Optional: Add a background color for better visibility */
  border-bottom: 1px solid #ddd;
  /* Optional: Add a border to separate the nav from the content */
  width: 100%;
  /* Ensure the nav stretches across the entire width */
}

nav a {
  color: #2c3e50;
  margin: 0 10px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
  margin: 0;
  padding: 0;
}

#flashMessage {
  color: #2c3e50;
  padding: 1px;
  margin: 1px 0;
  border-radius: 4px;
  animation-name: greenFade;
  animation-duration: 4s;
}

@keyframes greenFade {
  from {
    background: #edeb8261;
  }

  to {
    background: transparent;
  }
}
</style>
