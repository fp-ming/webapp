<template>

<div class="header-swiper">
	<swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
    	<img src="@img/1.jpg" alt="dsad">
    </swiper-slide>
    <swiper-slide>
    	<img src="@img/2.jpg" alt="dasd">
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
          loop: true,
        }
      }
    }
  }
</script>

<style scoped>

.header-swiper {
  width: 100%;
  height: 1rem;
}

.header-swiper img{
  width: 3.75rem;
  height: 1rem;
}

</style>

