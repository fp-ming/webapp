<template>
	<div class="home">
		<HomeHeader />
		<HomeSwiper />
		<HomeIcons />
		<HomeLocation />
		<HomeActivity />
		<HomeHot />
	</div>
</template>
<script>

import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLocation from './pages/Location'
import HomeActivity from './pages/Activity'
import HomeHot from './pages/Hot'
export default {
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeLocation,
		HomeActivity,
		HomeHot
	}
}

</script>
<style scoped>

.home {
	background: #f0f0f0;
	width: 100%;
	overflow: hidden;
}

</style>
