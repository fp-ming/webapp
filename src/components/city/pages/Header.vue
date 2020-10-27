<template>
	
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
			this.$router.push('/');
		}
	}
}

</script>

<style scoped lang="stylus">

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