<script>
export default {
	props: {
		name: String,
		description: String
	},
	data() {
		return {
			FirstName: this.name || "Kavin",
			description: this.description
		}
	}
}

</script>

<template>
<div id="home">
	<kinesis-container class="container" event="move">

		<kinesis-element :strength="-20">
			<div class="circle one"></div>
		</kinesis-element>

		<kinesis-element :strength="15">
			<div class="circle two"></div>
		</kinesis-element>

		<kinesis-element :strength="20">
			<div class="circle three"></div>
		</kinesis-element>

		<kinesis-element :strength="30" class="header">
			<!-- added circle class, since circle contains the default properties -->
			<div class="circle img-container">
				<img src="../assets/mebw.jpg" alt="" class="mebw-pp">
			</div>
			<div class="name">
				<span class="intro">Hi, I am</span>
				<span class="first">
					{{ FirstName}}
				</span>
				<span class="desc">{{ description }}</span>
			</div>
		</kinesis-element>
	</kinesis-container>
</div>
</template>

<style scoped>
@import '../assets/main.css';

.container {
	width: 100%;
	max-width: 1900px;
	height: 100vh;
	overflow: hidden;
}

kinesis-element {
	background-color: transparent;
}

.circle {
	background-color: var(--accent);
	position: absolute;
	border-radius: 50vh;
}

.one {
	top: 10rem;
	left: 50rem;
	width: 10rem;
	height: 10rem;
	opacity: 0.6;
	border:12px solid var(--secondary);
	background-color: var(--background);
}

.two {
	top: 15rem;
	left: 10rem;
	width: 20rem;
	height: 20rem;
	opacity: 0.4;
	background-color: var(--secondary);
}

.three {
	width: 100px;
	height: 100px;
	top: 30vw;
	left: 100vh;
}

.header {
	background-color: transparent;
	top: 8vw;
	left: 8vh;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
	margin: auto;
}
.name {
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	background-color: transparent;
}

.intro,
.desc {
	font-size: 1.3em;
	background-color: transparent;
	color: var(--white);
}
.first {
	color: var(--accent);
	background-color: transparent;
	font-family: 'Cedarville Cursive', cursive;
	font-size: 4em;
}

.mebw-pp {
	width: 18em;
	height: 26em;
}

.img-container {
	background-color: transparent;
	position: relative;
}

.img-container::before {
	content: '';
	display: inline-block;
	width: 20em;
	height: 26em;
	position: absolute;
	top: 100;
	left: 100;
	background-color: transparent;
	border-right: 10px solid var(--accent);
	border-bottom: 10px solid var(--accent);
}

@media only screen and (max-width: 700px) {

	.header {
		margin: 0px;
		display: flex;
		flex-direction: column;
		gap: 50em;
		justify-content: space-evenly;
		width: 100%;
		position: relative;
		margin-top: 10vh;
		top: 0;
		left: 2.5vh;
	}

	.img-container {
		top: 0;
		left: 0;
		margin: 0px;
	}

	.img-container::before {
		width: 80vw;
		height: 49vh;
	}
	.name {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		justify-content: center;
		min-height: 100vh;
		margin-top: 40vw;
	}

	.intro,
	.first,
	.desc {
		margin: 0px !important;
		padding: 0px !important;
	}
}

</style>
