<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/actu_tips">l'actu de la TIPS</router-link> |
        <router-link to="/informations_cours">espace cours</router-link> |
        <router-link to="/informations_pratiques">infos pratiques</router-link> |
        <router-link to="/login">mon compte</router-link> |
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
  padding: 10px;
  margin-left: 2vw;
  margin-right: 2vw;
  border-radius: 2vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background: rgb(232,166,44);
  background: linear-gradient(62deg, rgba(232,166,44,1) 0%, rgba(86,41,138,1) 53%);
}

nav a {
  font-weight: bold;
  color: white;
  border: 0.5px solid;
  border-radius: 15%;

}

nav a.router-link-exact-active {
  color: red;
}
</style>
