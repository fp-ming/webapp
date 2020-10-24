<template>
	
<div class="home-icons">
	
	<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide
				v-for="(val,key) in pages" 
				:key="key"
			>
	    		<div class="icons-item"
	    			v-for="icon in val" 
	    			:key="icon.id"
	    		>
	    			<img :src="icon.imgUrl" alt="">
	    			<p>{{icon.title}}</p>
	    		</div>
	    		
	    	</swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
  	</swiper>
			
</div>

</template>

<script>
	
export default {
	data () {
		return {
			swiperOptions: {
	          	pagination: {
	            	el: '.swiper-pagination'
	          	}
        	},
			iconsList:[
				{
					"id":"01",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
					"title":"景点门票"
				},
				{
					"id":"02",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
					"title":"必游榜单"
				},
				{
					"id":"03",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
					"title":"夏日玩水"
				},
				{
					"id":"04",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
					"title":"主题乐园"
				},
				{
					"id":"05",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
					"title":"动植物园"
				},
				{
					"id":"06",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
					"title":"故宫"
				},
				{
					"id":"07",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
					"title":"一日游"
				},
				{
					"id":"08",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
					"title":"公园"
				},
				{
					"id":"09",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
					"title":"游乐场"
				},
				{
					"id":"10",
					"imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
					"title":"全部玩乐"
				}
			]
		}
	},
	computed : {
		pages () {
			let pages = [];

			this.iconsList.forEach((item,index) => {
				let idx = Math.floor(index/8);
				if(!pages[idx]) pages[idx] = [];
				pages[idx].push(item);
			})

			return pages
		}
	}
}

</script>

<style scoped lang="stylus">

@import '~@css/common.styl'

.home-icons {
	background: #fff;
}

.icons-item {
	width: 25%;
	height: 0;
	padding-bottom: 25%;
	float: left;
}
.icons-item img {
	width: .55rem;
	height: .55rem;
	margin: 0 auto;
	display: block;
	padding: .1rem 0 .05rem;
}
.icons-item p{
	font-size: .14rem;
	text-align: center;
	color: #212121;
	textOverflow();
}

</style>