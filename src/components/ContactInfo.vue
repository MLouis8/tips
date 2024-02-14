<template>
    <div class="column-container" id="contact-anchor">
        <img alt="logo TIPS" class="logoT" src="../assets/logo.svg" >
        <div class="row-container">
            <a href="https://www.facebook.com/tips.improparissaclay">
                <img alt="logo facebook" class="socials" src="../assets/facebook.webp">
            </a>
            <a href="https://discord.gg/ZPQJkrRhVb">
                <img alt="logo discord" class="socials" src="../assets/discord.webp">
            </a>
            <a href="https://www.instagram.com/impro.orsay/">
                <img alt="logo insta" class="socials" src="../assets/instagram.webp">
            </a>
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
    justify-content: space-evenly;
    align-items: center;
    width: 20vw;
}

.column-container {
    background: rgb(131,58,180);
    background: linear-gradient(
        90deg,
        rgba(131,58,180,1) 0%,
        rgba(155,3,31,1) 50%,
        rgba(252,176,69,1) 100%
    );
    padding: 1.5vh;
    margin-top: 2vw;
    margin-bottom: 2vw;
    margin-left: 8vw;
    margin-right: 8vw;
    border-radius: 1vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.socials {
    height: 3.5vh;
}

.logoT {
    width: 14vw;
    height: auto;
}

.email {
    color: white;
    font-size: medium;
    text-decoration: underline;
    background-color: transparent;
    border: 0;
}

</style>
