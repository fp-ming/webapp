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
	data () {
		return {
			vacationList:[
				{
					"id":"01",
					"imgUrl":"http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg",
					"title":"漂流勇进，烧烤露营",
					"msg":"轻松水上漂，任我乐逍遥"
				},
				{
					"id":"02",
					"imgUrl":"http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg",
					"title":"北京清凉避暑胜地",
					"msg":"到大自然中享受“天然空调”的清凉"
				},
				{
					"id":"03",
					"imgUrl":"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
					"title":"北京必游TOP10",
					"msg":"来北京必去的景点非这些地方莫属"
				}
			]
		}
	}
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