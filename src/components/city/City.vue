<template>
	
<div class="city">
		<CityHeader />
		<CityList :hotCities='hotCities' :cities='cities'  />
</div>

</template>

<script>
	
import CityHeader from './pages/Header'
import CityList from './pages/List'

export default {
	components: {
		CityHeader,
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