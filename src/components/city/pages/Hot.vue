<template>
	
<div class="city-hot">
	<div class="city-hot-title">
		热门城市
	</div>
	<ul class="city-hot-list">
		<li 
			class="city-hot-item"
			v-for="city in hotCities"
			:key="city.id"
		>
			{{city.name}}
		</li>
		<div class="clear"></div>
	</ul>
</div>

</template>

<script>

export default {
	props:['hotCities'],
}

</script>

<style scoped> 

.city-hot {
	font-size: .14rem;
}

.city-hot-title {
	padding:.2rem;
}

.city-hot-list {
	background: #fff;
	font-size: .16rem;
	color: #212121;
}
.city-hot-item {
	width: 33.111%;
	height: .5rem;
	line-height: .5rem;
	text-align: center;
	float: left;
	border-bottom: .01rem solid #ddd;
	position: relative;
}
.city-hot-item:not(:nth-child(3n)) {
	border-right: .01111rem solid #ddd;
}
.clear {
	clear: both;
}
</style>