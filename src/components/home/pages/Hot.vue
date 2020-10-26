<template>
	<div class="home-hot">
		<div class="hot-top">
			<div class="top-left">
				<img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
				<span>本周热门榜单</span>
			</div>
			<div class="top-right">
				<span>全部榜单</span>
				<span class="iconfont">&#xe65a;</span>
			</div>
		</div>

		<div class="hot-list">
			<div 
				class="hot-item" 
				v-for="item in hotList"
				:key="item.id"
			>
				<img :src="item.imgUrl">
				<p>{{item.title}}</p>
				<p>
					<span class="hot-mark">￥<b>{{item.mark}}</b></span>&nbsp;起
				</p>
			</div>
			
		</div>
	</div>
</template>

<script>
	
export default {
	props:['hotList'],
}

</script>

<style scoped lang="stylus">

@import '~@css/common.styl'
	
.home-hot {
	margin-top: .1rem;
	background: #fff;
	position: relative;
}
.hot-top{
	padding: .2rem 0;
}
.hot-top .top-left {
	font-size: .18rem;
	color: #212121;
	position: absolute;
	left: .1rem;
	top: .1rem;
}
.hot-top .top-left img {
	width: .15rem;
	height: .15rem;
}
.hot-top .top-right {
	font-size: .15rem;
	color: #616161;
	position: absolute;
	right: .1rem;
	top: .1rem;
}

.hot-list {
	height: 1.5rem;
	padding: 0 .1rem;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	font-size: 0;
}
.hot-list::-webkit-scrollbar{
    display: none;
}
.hot-list .hot-item {
	display: inline-block;
	font-size: 0;
	padding:.05rem .1rem;
	width: 1rem;
	height: 1rem;
}
.hot-list .hot-item img{
	width: 100%;
	height: 100%;
}
.hot-list .hot-item p{
	margin-top: .05rem;
	font-size: .14rem;
	text-align: center;
	textOverflow();
}
.hot-list .hot-item .hot-mark{
	font-size: .14rem;
	color: #ff8300;
}
.hot-list .hot-item .hot-mark b{
	font-size: .18rem;
}

</style>