<template>

<div class="home-vacation">

	<div class="home-vacation-top">
		周末去哪里
	</div>

	<div class="home-vacation-list">
		<div 
			class="home-vacation-item"
			v-for="item in vacationList"
			:key="item.id"
		>
			<div class="home-vacation-item-img">
				<img :src="item.imgUrl">
			</div>
			<div class="home-vacation-item-title">{{item.title}}</div>
			<div class="home-vacation-item-msg">{{item.msg}}</div>
		</div>
	</div>
	
</div>

</template>

<script>
	
export default {
	props:['vacationList'],
}

</script>

<style scoped> 

.home-vacation {
	margin-top: .15rem;
	background: #fff;
}
.home-vacation-top {
	font-size: .16rem;
	padding: 0 0 .15rem .15rem;
	color: #212121;
	background: #f0f0f0;
}

.home-vacation-list {
	font-size: .14rem;
	width: 100%;
}
.home-vacation-item {
	padding-bottom: .2rem;
}
.home-vacation-item-img {
	width: 100%;
	height: 0;
	padding-bottom: 1.5rem;
}
.home-vacation-item-img img{
	width: 100%;
	height: 1.5rem;
}
.home-vacation-item-title {
	color: #212121;
	font-size: .16rem;
	margin-top: .15rem;
	padding-left: .15rem;
}
.home-vacation-item-msg {
	padding-left: .15rem;
	color: #616161;
	margin-top: .15rem;
}

</style>