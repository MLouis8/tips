<template class="box">
    <img src=img>
    <div class="text-info">
        {{ adress }}
    </div>
</template>

<script>
export default {
    name: 'PlaceDescription',
    props: {
        nom: String,
        adress: String,
        transport: String,
        img: String
    }
}
</script>

<style scoped>
.box {
    display: flex;
    flex-flow: row nowrap;
}

.text-info {
    display: flex;
    flex-flow: column wrap;
}
</style>