<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/actu_tips">l'actu de la TIPS</router-link>
        <router-link to="/informations_cours">espace cours</router-link>
        <router-link to="/informations_pratiques">infos pratiques</router-link>
        <router-link to="/login">mon compte</router-link>
        <a href="#contact-anchor">contact</a>
    </nav>
    <router-view/>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
nav {
  position: fixed;
  padding: 10px;
  left: 10vw;
  right: 10vw;
  border-radius: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  background: rgb(232,166,44);
  background: linear-gradient(62deg, rgba(232,166,44,1) 0%, rgba(86,41,138,1) 53%);
  z-index: 10;
}

nav a {
  font-weight: bold;
  color: white;
  border-radius: 20px;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  background-color: rgba(0, 0, 0, 0.3);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: gold;
}
</style>
