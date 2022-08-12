<script>
export default {}
</script>

<template>
<div id="navbar">
    <ul class="navlinks">
        <li><a class="navlink" href="#home">Home</a></li>
        <li><a class="navlink" href="#projects">Projects</a></li>
        <li><a class="navlink" href="#about">About</a></li>
        <li><a class="navlink" href="#display">Work</a></li>
        <li><a class="navlink" href="#contact">Contact</a></li>
        <li><a class="navlink" href="https://github.com/cipherDOT" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a></li>
    </ul>
</div>
</template>

<style scoped>
@import '../assets/main.css';

#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    z-index: 200;
    background-color: transparent;
}

.navlinks {
    list-style: none;
    display: flex;
    flex-direction: row;
    width: fit-content;
    margin: 0.8em;
    margin-left: auto;
    background-color: transparent;
}

.navlink {
    color: var(--white);
    text-decoration: none;
    padding: 1em;
    transition: 200ms ease;
    background-color: transparent;
}

li {
    background-color: transparent;
}

.navlink:hover {
    color: var(--accent);
}

#github {
    color: var(--white);
    font-size: 1em;
    transition: 200ms ease;
}

#github:hover {
    color: var(--accent);
}

@media only screen and (max-width: 700px) {
    #navbar {
        font-size: 70%;
        float: right;
        background-color: var(--background);
    }
}


</style>