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

import {mapState} from 'vuex'

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
			updateCity:'',
		}
	},
	mounted() {
		this.updateCity = this.city;
		this.http();
	},
	activated() {
		if(this.updateCity != this.city) {
			this.http();
			this.updateCity = this.city;
		}
	},
	methods: {
		http() {
			this.axios.get('/api/dataHome.json')
			.then((res) => {
				const data = res.data.data;
				data.forEach((val) => {
					if(val.city == this.city) {
						this.swiperList = val.swiperList;
						this.iconsList = val.iconsList;
						this.hotList = val.hotList;
						this.likeList = val.likeList;
						this.vacationList = val.vacationList;
					}
				})
				
			})
		}
	},
	computed: {
		...mapState(['city']),
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
