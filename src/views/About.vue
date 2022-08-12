<script>

export default {
    name: 'About'
}
</script>

<template>
<div id="about">
    <h1 class="section-title">About me</h1>
    <kinesis-container>
        <kinesis-element>
            <div class="motto"> 
                Live a Life You'll Remember !
            </div>
        </kinesis-element>
    </kinesis-container>
</div>
</template>

<style scoped>
@import '../assets/main.css';

#about {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 100vw;
    max-height: 100vh;
    height: 100vh;
    background-color: transparent;
}

kinesis-element {
    background: none !important;
    z-index: 10;

}

.motto {
    font-size: 8em;
    background: none;
    color: var(--accent);
    width: fit-content;
    max-width: 80vw;
    margin: auto 1em;
    font-family: 'Cedarville Cursive', cursive;
    background-color: transparent;
    z-index: 3;
    transition: 200ms ease;
}

.motto::after {
    content: '';
    background-color: transparent;
    display: inline-block;
    width: 30vh;
    height: 30vh;
    position: absolute;
    top: 20%;
    left: 37%;
    border: 10px solid var(--secondary-trans);
    z-index: -1;
    transform: rotate(45deg);
    transition: 200ms ease;
}

@media only screen and (max-width: 700px) {
    .motto {
        font-size: 15vw;
    }
}
</style>
