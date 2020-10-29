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
	    			@click="toDetail"
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
	props:["iconsList"],
	data () {
		return {
			swiperOptions: {
        	}
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
	},
	methods: {
		toDetail() {
			this.$router.push('/detail');
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