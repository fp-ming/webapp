<template>
  <div class="detail-banner">
    <div @click="showSwiper">
      <div class="detail-banner-img"> 
        <img src="http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg">
      </div>
      <div class="detail-banner-title">
        金海湖风景区（AAA景区
      </div>
    </div>
    <div 
      class="detail-banner-swiper"
      v-show="swiper"
      @click="hideSwiper"
    >
      <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide
              v-for="ban in bannerList"
              :key="ban.id"
            >
          <img :src="ban.imgUrl" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
	
export default {
	data () {
		return {
			swiper:false,
      /* 用于渲染页面的数据 */
			bannerList:[
				{
					id:"01",
					imgUrl:"http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg"
				},
				{
					id:"02",
					imgUrl:"http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg"
				},
				{
					id:"03",
					imgUrl:"http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg"
				}
			],
			swiperOptions: {
	          pagination: {
	            el: '.swiper-pagination'
	          },
	          loop: true
	        }
		}
	},
	methods: {
		showSwiper() {
			this.swiper = true;
		},
		hideSwiper() {
			this.swiper = false;
		}
	}
}

</script>

<style scoped>
	
.detail-banner {
	font-size: .14rem;
	position: relative;
}
.detail-banner-img {
	width: 100%;
	height: 0;
	padding-bottom: 55%;
	overflow: hidden;
}
.detail-banner-img img {
	width: 100%;
}
.detail-banner-title {
	position: absolute;
	left: .2rem;
	bottom: .1rem;
	color: #fff;
	font-size: .18rem;
}
.detail-banner-swiper {
	z-index: 99;
	background: #000;
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.detail-banner-swiper img {
	width: 100%;
}

</style>
