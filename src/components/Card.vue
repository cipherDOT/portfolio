<script>

export default {
    props: {
        head: String,
        body: String,
        linkToProject: String,
        useSVG: Boolean,
        pathToSVG: String,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
<a :href="linkToProject" target="_blank">
    <kinesis-container>
        <kinesis-element v-if="useSVG" class="svg-container" :strength="-12" typeof="depth">
            <img :src=pathToSVG alt="jii" class="svg-icon">
        </kinesis-element>
        <kinesis-element class="card" :strength="-12" type="depth">
            <kinesis-element :strength="12" type="depth" class="card-text">
                <h3 class="card-text heading">{{ head }}</h3>
            </kinesis-element>
            <kinesis-element :strength="12" type="depth" class="card-text">
                <p class="card-text">{{ body }}</p>
            </kinesis-element>
            <kinesis-element :strength="12" type="rotate" class="card-bg">
    
            </kinesis-element>
        </kinesis-element>
    </kinesis-container>
</a>
</template>

<style scoped>
@import '../assets/main.css';

a {
    text-decoration: none;
}
.card {
    position: relative;
	font-size: 2em;
    max-width: 100%;
	height: 200px;
	background-color: var(--secondary-trans);
	border-radius: 10px;
    margin: 0.6em;
    padding: 0.5em;
    margin: auto;
}

.card-text {
    background-color: transparent;
    color: var(--white);
}
.heading {
    transition: 200ms ease;
}

.heading:hover {
    color: var(--accent);
}

.card-text p {
    font-size: 0.6em;
}

.card-bg {
    width: 90%;
    border-radius: 10px;
    height: inherit;
    background-color: var(--secondary-trans);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}


.svg-container {
    position: absolute;
    top: 60%;
    left: 70%;
    z-index: 10;
}

.svg-icon {
    width: 4em;
    height: 4em;
    position: absolute;
    z-index: 10;
    background: none;
    left: 90%;
}

</style>