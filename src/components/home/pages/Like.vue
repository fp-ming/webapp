<template>

<div class="home-like">
	<div class="like-top">
		<img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
		<span>猜你喜欢</span>
	</div>
	<div class="like-list">
		<div 
			class="like-item border-bottom"
			v-for="item in likeList"
			:key="item.id"
		>
			<div class="like-item-img">
				<img :src="item.imgUrl" alt="">
			</div>
			<div class="like-item-right">
				<div class="like-item-title">
					{{item.title}}
				</div>
				<div class="like-item-msg">
					{{item.msg}}条评论
				</div>
				<div class="like-item-map">
					<span class="price">￥<b>{{item.pre}}</b></span>起
					<span class="map">{{item.map}}</span>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>

export default {
	data () {
		return {
			"likeList":[
				{
					"id":"01",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg",
					"title":"金海湖风景区",
					"msg":"1341",
					"pre":"18.8",
					"map":"平谷区"
				},
				{
					"id":"02",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg",
					"title":"北京国际鲜花港",
					"msg":"1900",
					"pre":"28.8",
					"map":"顺义区"
				}
			],
		}
	}
}

</script>

<style scoped lang="stylus">

@import '~@css/common.styl'

.home-like {
	margin-top: .1rem;
	background: #fff;
	font-size: .14rem;
}

.like-top {
	font-size: .16rem;
	padding: .1rem;
}
.like-top img{
	width: .15rem;
	height: .15rem;
}

.like-item {
	position: relative;
	padding: .1rem 0;
	width: 100%;
	height: auto;
	display: flex;
}

.like-item-img {
	margin: 0 .1rem;
}
.like-item-img img {
	width: 1rem;
	height: 1rem;
}
.like-item-right {
	flex: 1;
}
.like-item-title {
	font-size: .18rem;
	color: #212121;
	margin-top: .15rem;
}
.like-item-msg {
	font-size: .14rem;
	color: #616161;
	margin-top: .15rem;
}
.like-item-map {
	font-size: .14rem;
	margin-top: .15rem;
	position: relative;
}
.price {
	color:#ff8300;
}
.price b {
	font-size: .2rem;
}
.map {
	position: absolute;
	width: 1rem;
	top: .04rem;
	right: 0;
	text-align: right;
	margin-right: .15rem;
	textOverflow();
}

</style>