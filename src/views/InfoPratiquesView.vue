<template>
    <h2>• Voici où ça nous arrive de jouer :</h2>
    <div class="infos-container">
        <PlaceDescripton nom="MaPS" adresse="399 Rue du Doyen André Guinier, 91440 Bures-sur-Yvette" transport="RER B, Bures-sur-Yvette" filename="maps.webp"/>
        <PlaceDescripton nom="Scène de Recherche" adresse="4 Av. des Sciences, 91190 Gif-sur-Yvette" transport="Bus 9/91-06/7" filename="sdr.webp"/>
        <PlaceDescripton nom="Amphi Cartan" adresse="426-428 Rue du Doyen Georges Poitou, 91400 Orsay" transport="RER B, Orsay-Ville" filename="cartan.webp"/>
    </div>
    <h2>• Un problème pour trouver ton cours ?</h2>
    <div class="infos-container">

    </div>
    <ContactInfo />
</template>

<script>
import ContactInfo from '@/components/ContactInfo.vue';
import PlaceDescripton from '@/components/PlaceDescripton.vue';

export default {
    name: 'InfoPratiquesView',
    components: {
        ContactInfo,
        PlaceDescripton
    }
}
</script>

<style scoped>
h2 {
    position: relative;
    padding-top: 10vh;
    text-align: left;
}

/* .infos-container {
  border: solid;
  border-radius: 10px;
  border-color: #e8a62c;
  margin-left: 8vw;
  margin-right: 8vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  padding-bottom: 1vh;
} */
</style>