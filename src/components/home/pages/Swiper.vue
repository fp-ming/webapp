<template>

<div class="header-swiper">
	<swiper ref="mySwiper" :options="swiperOptions">
	    <swiper-slide
        v-for="item in swiperList"
        :key="item.id"
      >
	    	<img :src="item.imgUrl" alt="">
	    </swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
  	</swiper>
</div>

</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperList'],
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        }
      }
    },
    mounted() {
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

