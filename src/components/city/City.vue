<template>
	
<div class="city">
	<CityHeader />
	<CityHot :hotCities='hotCities' />
	<CitySort :cities='cities' />
	<CityList :cities='cities' />
</div>

</template>

<script>
	
import CityHeader from './pages/Header'
import CityHot from './pages/Hot'
import CitySort from './pages/Sort'
import CityList from './pages/List'

export default {
	components: {
		CityHeader,
		CityHot,
		CitySort,
		CityList
	},
	data () {
		return {
			hotCities:[],
			cities:{},
		}
	},
	mounted () {
		this.http();
	},
	methods: {
		http () {
			this.axios.get('/api/city.json')
			.then(res => {
				const data = res.data.data;
				this.hotCities = data.hotCities;
				this.cities = data.cities;
			})
		}
	}
}

</script>

<style scoped>

.city {
	background: #f5f5f5;
}

</style>