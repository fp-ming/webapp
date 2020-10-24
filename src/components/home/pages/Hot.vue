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
					<span class="hot-mark">{{item.mark}}</span>起
				</p>
			</div>
			
		</div>
	</div>
</template>

<script>
	
export default {
	data () {
		return {
			hotList:[
				{
					"id":"01",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg",
					"title":"故宫",
					"mark":"20"
				},
				{
					"id":"02",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/1704/d6/d62a708bc69472f5a3.img.jpg_150x150_54ba6c62.jpg",
					"title":"十渡聚龙湾玻璃栈道",
					"mark":"35"
				},
				{
					"id":"03",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg",
					"title":"八达岭长城",
					"mark":"25"
				},
				{
					"id":"04",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg",
					"title":"水立方",
					"mark":"14"
				},
				{
					"id":"05",
					"imgUrl":"http://img1.qunarzz.com/sight/p0/201405/30/63494597d8a8346abd77cc9e1cd2ee79.jpg_150x150_7037ca72.jpg",
					"title":"定陵",
					"mark":"50"
				}
			]
		}
	}
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
	font-size: .16rem;
	color: #212121;
	position: absolute;
	left: .1rem;
}
.hot-top .top-left img {
	width: .15rem;
	height: .15rem;
}
.hot-top .top-right {
	font-size: .14rem;
	color: #616161;
	position: absolute;
	right: .1rem;
}

.hot-list {
	height: 1.5rem;
	padding: 0 .1rem;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	font-size: 0;
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
	font-size: .16rem;
	color: #ff8300;
}

</style>