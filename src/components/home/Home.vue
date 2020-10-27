<template>
	<div class="home">
		<HomeHeader />
		<HomeSwiper :swiperList='swiperList' />
		<HomeIcons :iconsList='iconsList' />
		<HomeLocation />
		<HomeActivity />
		<HomeHot :hotList='hotList' />
		<HomeLike :likeList='likeList' />
		<HomeVacation :vacationList='vacationList' />
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
	},
	data () {
		return {
			swiperList:[],
			iconsList:[],
			hotList:[],
			likeList:[],
			vacationList:[],
		}
	},
	mounted() {
		this.axios.get('/api/dataHome.json')
			.then((res) => {
				const data = res.data.data[0]
				this.swiperList = data.swiperList;
				this.iconsList = data.iconsList;
				this.hotList = data.hotList;
				this.likeList = data.likeList;
				this.vacationList = data.vacationList;

			})
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
