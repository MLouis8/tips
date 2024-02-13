<template>
    <div class="column-container" id="anchor">
        <div class="row-container">
            <img alt="logo discord" class="logoD" src="../assets/discord.webp">
            <img alt="logo TIPS" class="logoT" src="../assets/logo.svg">
            <img alt="logo facebook" class="logoF" src="../assets/facebook.webp">
        </div>
        <button @click="toClipboard('impro.orsay@gmail.com')" class="email">impro.orsay@gmail.com</button>
    </div>
</template>

<script setup>
    function toClipboard(text) {
        navigator.clipboard.writeText(text);
        alert("email copied!");
    }
</script>

<script>
    export default {
        name: 'ContactInfo'
    }
</script>

<style scoped>
.row-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-end;
}

.column-container {
    background-color: rgb(45, 8, 87);
    padding: 2vh;
    margin: 2.5vw;
    border-radius: 1vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.logoD {
    height: 4.9vh;
    width: auto;
}

.logoF {
    height: 4.4vh;
    width: auto;
    
}

.logoT {
    width: 15vw;
    height: auto;
}

.email {
    text-decoration: underline;
}

</style>
