<script>
import Card from '../components/Card.vue'

export default {
    name: 'Projects',
	components: {
		Card
	},
	data() {
		return {
			card1: "Knowte",
			cardbody1: "A notes app, built for learning Django and for fun!",
			cardLink1: "https://knowtes.herokuapp.com",
			
			card2: "Paradime",
			cardbody2: "A programming FAQ webapp for minimalists",
			cardLink2: "https://paradime.herokuapp.com",

			card3: "kreativ.",
			cardhead3: "A startup landing page made with Vue3",
			cardLink3: "https://kreativdemo.netlify.app",
		}
	}
}

</script>

<template>
<div id="projects">
	<h1 class="section-title">My Projects</h1>
	<div class="cards">
		<div class="card">
			<Card :head="card1" :body="cardbody1" :linkToProject="cardLink1"/>
		</div>
		<div class="card">
			<Card :head="card2" :body="cardbody2" :linkToProject="cardLink2"/>
		</div>
		<div class="card">
			<Card :head="card3" :body="cardhead3" :linkToProject="cardLink3"/>
		</div>
	</div>
</div>
</template>

<style scoped>
@import '../assets/main.css';

#projects {
	width: 100%;
	overflow: hidden;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.cards {
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin-bottom: 5vh;
}
.card {
	margin: 2em;
	min-width: 25vw;
	max-width: 25vw;
}

@media only screen and (max-width: 600px) {
	.cards {
		flex-direction: column;
		width: 100vw;
	}

	.card {
		min-width: 80vw;
	}
}

</style>
