<template>
  <div class="page-container">
    <div class="header-container">
      <img alt="logo UPS" class="logo" src="../assets/LogoUPSaclay.png">

      <h1 class="white">{{ "TIPS" }}</h1>

      <img alt="logo TIPS" class="logo" src="../assets/logo.svg" width="125" height="125">
    </div>
  
    <img alt="photo match d'improvisation" class="photo-impro" src="../assets/photoImpro1.webp">
    <div class="quiSommesNous">
      <h2 class="text">Qui sommes nous ?</h2>
      <p class="text">
        La Troupe d'Improvisation de Paris Saclay (TIPS) est une troupe d'improvisation étudiante. Nous organisons des cours avec l'université Paris Saclay et organisons matchs et cabarets d'improvisation en région parisienne. Pour venir nous voir. Pour <a href="#contact-anchor">nous contacter</a>.
      </p> 
    </div>
    <img alt="photo cabaret d'improvisation" class="photo-impro" src="../assets/photoImpro2.webp">
    <ContactInfo />
  </div>
</template>

<script>
import ContactInfo from '@/components/ContactInfo.vue'

export default {
  name: 'HomeView',
  components: {
    ContactInfo
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 6rem;
  position: relative;
  top: -10px;
}

img {
  max-width: 90vw;
  max-height: 90vh;
}

.text {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
  text-align: justify;
}

.page-container {
  display: flex;
  flex-flow: column nowrap;
}

.header-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;
}

.logo {
  margin: auto;
}

.photo-impro {
  margin: auto;
}
</style>
