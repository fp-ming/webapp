<template>
  <!-- 城市列表页面头部 -->
  <div class="city-header">
    <span 
      class="iconfont city-header-return" 
      @click="toHome"
    >
      &#xe602;
    </span>
    <span class="city-header-title">城市选择</span>
  </div>
</template>

<script>
	
export default {
	methods: {
		toHome () {
      // 跳转到根路由
			this.$router.push('/');
		}
	}
}

</script>

<style scoped lang="stylus"> /* 使用stylus框架 */
/* 在css部分导入外部css文件 */
@import '~@css/var.styl'	
.city-header {
	width: 100%;
	height: .44rem;
	line-height: .44rem;
	font-size: .18rem;
	text-align: center;
	color: $textColor;
	background: $bgColor;
	position: relative;
}
.city-header-return {
	position: absolute;
	left: .1rem;
}
.city-header-title { 
}

</style>
