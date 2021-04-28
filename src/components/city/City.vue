<template>
<!-- 城市列表 -->
<div class="city">
		<CityHeader />
    <!-- 传递数据hotCities和cities数据给子组件 -->
		<CityList :hotCities='hotCities' :cities='cities'  />
</div>

</template>

<script>

// 导入组件
import CityHeader from './pages/Header' 
import CityList from './pages/List'

export default {
  // 注册导入的组件
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
