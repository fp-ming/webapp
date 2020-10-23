<template>

<div class="header-swiper">
	<swiper ref="mySwiper" :options="swiperOptions">
	    <swiper-slide>
	    	<img src="@img/swiper1.jpg" alt="">
	    </swiper-slide>
	    <swiper-slide>
	    	<img src="@img/swiper2.jpg" alt="">
	    </swiper-slide>
      <swiper-slide>
        <img src="@img/swiper3.jpg" alt="">
      </swiper-slide>
	    
	    <div class="swiper-pagination" slot="pagination"></div>
  	</swiper>
</div>

</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        }
      }
    }
  }
</script>

<style scoped>

.header-swiper {
  width: 100%;
  height: 0;
  padding-bottom: 26.67%;
}

.header-swiper img{
  width: 100%;
  height: 100%;
}

</style>

