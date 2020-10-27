<template>
	
<div class="city-list">
	<div
		v-for="(items,key) in cities"
		:key="key"
	>
		<div class="city-list-title">
			{{key}}
		</div>
		<ul class="city-list-list">
			<li 
				class="city-list-item"
				v-for="item in items"
				:key="item.id"
				@click="toHome(item.name)"
			>
				{{item.name}}
			</li>
			<div class="clear"></div>
		</ul>
	</div>
</div>

</template>

<script>

export default {
	props:['cities'],
	methods: {
		toHome (cityName) {
			this.$router.push('/');
			console.log(cityName)
		}
	}
}

</script>

<style scoped> 

.city-list {
	font-size: .14rem;
}

.city-list-title {
	padding:.2rem;
}

.city-list-list {
	background: #fff;
	font-size: .16rem;
	color: #212121;
}
.city-list-item {
	width: 24.8%;
	height: .5rem;
	line-height: .5rem;
	text-align: center;
	float: left;
	border-bottom: .01rem solid #ddd;
	position: relative;
}
.city-list-item:not(:nth-child(4n)) {
	border-right: .01rem solid #ddd;
}
.clear {
	clear: both;
}
</style>

</template>