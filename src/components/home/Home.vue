<template>
	<div class="home">
		<HomeHeader />
		<HomeSwiper />
		<HomeIcons />
		<HomeLocation />
		<HomeActivity />
		<HomeHot />
		<HomeLike />
		<HomeVacation />
	</div>
</template>
<script>

import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLocation from './pages/Location'
import HomeActivity from './pages/Activity'
import HomeHot from './pages/Hot'
import HomeLike from './pages/Like'
import HomeVacation from './pages/Vacation'
export default {
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeLocation,
		HomeActivity,
		HomeHot,
		HomeLike,
		HomeVacation
	}
}

</script>
<style scoped>

.home {
	background: #f0f0f0;
	width: 100%;
	overflow: hidden;
	padding-bottom: 2rem;
}

</style>
