<template>
  <div class="page-container">
    <div class="header-container">
      <img alt="logo UPS" class="logo" src="../assets/LogoUPSaclay.png">

      <h1 class="white">{{ "TIPS" }}</h1>

      <img alt="logo TIPS" class="logo" src="../assets/logo.svg" width="125" height="125">
    </div>
    <div class="text-container">
      <h2 class="text">Qui sommes nous ?</h2>
      <p class="text">
        La TIPS est une troupe d'improvisation créée en 2005. Son objectif est de promouvoir et de former des étudiants ou externes venus de tout horizons aux techniques d'improvisation théâtrale. L'association organise régulièrement des représentations lors desquelles tous les membres ont la possibilité de monter sur scène.
      </p>
    </div>
    <img alt="photo match d'improvisation" class="photo-impro" src="../assets/photoImpro1.webp">
    <div class="text-container">
      <h2 class="text">Des représentations ?</h2>
      <p class="text">
        La TIPS organise des Matchs d'Improvisation, au cours desquels une équipe de 4 à 6 joueurs, provenants tous d'une autre troupe viennent affronter une de nos équipes durant 1h30 de spectacle, le tout rythmé par la présence de musiciens ainsi que d'un arbitre qui sera chargé de donner les thèmes qui serviront de moteur aux improvisations, et d'assurer le respect et la bienveillance de chacune des deux équipes.

        Sont aussi régulièrement organisés des "cabarets" d'improvisation, au bâtiment 399 (MaPS), dans lesquels aucune troupe n'est invitée, seule la TIPS joue, et les formules de spectacle qui sont jouées peuvent grandement varier d'un cabaret à l'autre.

        Pour venir nous voir. Pour <a href="#contact-anchor">nous contacter</a>.
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
  font: 'Pirou';
}

img {
  max-width: 90vw;
  max-height: 90vh;
}

.text-container {
  border: solid;
  border-radius: 10px;
  border-color: #56298a;
  margin-left: 8vw;
  margin-right: 8vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  padding-bottom: 1vh;
}

.text {
  padding-left: 2vw;
  padding-right: 2vw;
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
