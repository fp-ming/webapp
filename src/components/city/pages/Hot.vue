<template>
	
<div class="city-hot">
	<div class="city-hot-title">
		热门城市
	</div>
	<ul class="city-hot-list">
		<li class="city-hot-item">北京</li>
		<li class="city-hot-item">上海</li>
		<li class="city-hot-item">广东</li>
		<li class="city-hot-item">北京</li>
		<li class="city-hot-item">上海</li>
		<li class="city-hot-item">广东</li>
		<li class="city-hot-item">北京</li>
		<li class="city-hot-item">上海</li>
		<li class="city-hot-item">广东</li>
		<li class="city-hot-item">北京</li>
		<li class="city-hot-item">上海</li>
		<li class="city-hot-item">广东</li>
		<li class="city-hot-item">上海</li>
	</ul>
</div>

</template>

<style scoped> 

.city-hot {
	font-size: .14rem;
}

.city-hot-title {
	padding: .1rem .2rem;
}

.city-hot-list {
	background: #fff;
	font-size: .16rem;
	color: #212121;
}

/*.city-hot-list:before {
	content: " ";
	width: 33.333%;
	height: 100%;
	position: absolute;
	left: 33.333%;
	border-left: .01rem solid #ddd;
	border-right: .01rem solid #ddd;

}*/

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

</style>