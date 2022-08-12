<script>
import Navbar from './views/Navbar.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import About from './views/About.vue'
import Display from './views/Display.vue'
import Contact from './views/Contact.vue'

export default {
	components: {
		Navbar,
		Home,
		Projects,
		About,
		Display,
		Contact,
	},
	data() {
		return {
			name: "Kavin Bharathi",
			desc: "A full stack web develper"
		}
	}
}
</script>

<template>
<Navbar />
<Home :name="name" :description="desc"/>
<Projects />
<About />
<Display />
<Contact />
</template>

<style scoped>
</style>
