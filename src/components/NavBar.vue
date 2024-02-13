<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/actu_tips">l'actu de la TIPS</router-link> |
        <router-link to="/informations_cours">espace cours</router-link> |
        <router-link to="/informations_pratiques">infos pratiques</router-link> |
        <router-link to="/login">mon compte</router-link> |
        <a href="#anchor">contact</a>
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
  position: sticky;
  padding: 10px;
  margin-left: 2vw;
  margin-right: 2vw;
  border-radius: 2vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background-color: rgb(45, 8, 87);
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
