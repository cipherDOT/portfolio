<script>

export default {
    name: 'Contact',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        add() {
            this.email = ''
        }
    }
}

</script>

<template>
<div id="contact">
    <img src="../assets/Plane.svg" alt="" id="plane" class="section-title">
    <div class="form-container">
        <input type="text" placeholder="enter your email" class="email-input" v-model="email"> 
        <button class="btn" @click.prevent="add">Submit</button>
    </div>
        <div class="socials">
            <a href="https://github.com/cipherDOT" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a href="https://www.instagram.com/kavin_bharathii/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="https://twitter.com/kavin_bharathii" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        </div>
</div>
</template>

<style scoped>
@import '../assets/main.css';

#contact {
	width: 100%;
	overflow: hidden;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

#plane {
    background: none;
    width: 5em;
    height: 5em;
}

.form-container {
    background-color: var(--secondary-trans);
    border-radius: 10px;
    width: 50%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

.btn {
    background: none;
    outline: none;
    border: none;
    color: var(--accent);
    padding: 2px 10px;
    margin: 5px;
    border-radius: 50vh;
    transition: 200ms ease;
}

.btn:hover {
    background-color: var(--secondary);
}

.email-input  {
    height: 2em;
    width: 50%;
    outline: none;
    border: none;
    background: none;
    border-bottom: 2px solid var(--accent);
    display: flex;
    justify-content: center;
}

.socials {
    display: flex;
    gap: 2em;
    margin: 1em auto;
}

#github:hover {
  color: rgb(255, 255, 255);
}

#instagram:hover {
  color: rgb(223, 95, 255);
}

#twitter:hover {
  color: rgb(12, 130, 233);
}


@media only screen and (max-width: 600px) {
	.form-container {
        width: 90%;
        flex-direction: column;
        gap: 2em;
    }

    .email-input {
        width: 90%;
    }
}

</style>
