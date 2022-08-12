<script>
import Card from '../components/Card.vue'

export default {
    name: 'Display',
	components: {
		Card
	},
	data() {
		return {
			card1: "Web Develpment",
            path1: "./src/assets/htmlsvg.svg",
            body1: "A Full Stack developer",
			
			card2: "UI / UX",
            path2: "./src/assets/uiuxsvg.svg",
            body2: "UI / UX designer",

			card3: "Software",
            path3: "./src/assets/softsvg.svg",
            body3: "A passionate software develper",
		}
	}
}

</script>

<template>
<div id="display">
	<h1 class="section-title">What I Do</h1>
	<div class="cards">
		<div class="card">
			<Card :head="card1" :body="body1" :useSVG="true" :pathToSVG="path1" />
		</div>
		<div class="card">
			<Card :head="card2" :body="body2" :useSVG="true" :pathToSVG="path2" />
		</div>
		<div class="card">
			<Card :head="card3" :body="body3" :useSVG="true" :pathToSVG="path3" />
		</div>
	</div>
</div>
</template>

<style scoped>
@import '../assets/main.css';

#display {
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
