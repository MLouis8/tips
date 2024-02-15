<template>
    <div class="box">
        <img :src="require(`@/assets/${filename}`)">
        <div class="text-info">
            {{ adress }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlaceDescription',
    props: {
        nom: String,
        adress: String,
        transport: String,
        filename: String
    }
}
</script>

<style scoped>

img {
    max-width: 100%;
}

.box {
    display: flex;
    flex-flow: row nowrap;
    width: 20vw;
    height: auto;
    border: ;
}

.text-info {
    display: flex;
    flex-flow: column wrap;
}
</style>