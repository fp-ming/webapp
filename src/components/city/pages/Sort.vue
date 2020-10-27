<template>
	
<div class="city-sort">
	<div class="city-sort-title">
		字母顺序
	</div>
	<ul class="city-sort-list">
		<li 
			class="city-sort-item"
			v-for="(item,key) in cities"
			:key="key"
		>
			{{key}}
		</li>
		<div class="clear"></div>
	</ul>
</div>

</template>

<script>
	
export default {
	props:['cities']
}

</script>

<style scoped>
	
.city-sort {
	font-size: .14rem;
}

.city-sort-title {
	padding: .2rem;
}

.city-sort-list {
	font-size: .16rem;
	color: #212121;
	background: #fff;
}
.city-sort-item {
	width: 16.666%;
	height: .4rem;
	line-height: .4rem;
	text-align: center;
	float: left;
}

.clear {
	clear: both;
}

</style>