<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont">&#xe602;</span>
		</div>
		<div class="header-search">
			<span class="iconfont">&#xe623;</span>
			输入城市/景点/游玩主题

		</div>
		<div class="header-right" @click='toCity'>
				北京<span class="iconfont">&#xe606;</span>
		</div>
	</div>
</template>
<script>

export default {
	methods: {
		toCity () {
			this.$router.push('/city')
		}
	}
}

</script>
<style scoped lang='stylus'>

@import '~@css/var.styl'
	
.header {
	width: 100%;
	line-height: .44rem;
	font-size: .14rem;
	background: $bgColor;
	color: $textColor;
	display: flex;
}
.header-search {
	flex: 1;
	background: #fff;
	height: .32rem;
	line-height: .32rem;
	margin: .06rem 0;
	padding: 0 .1rem;
	border-radius: .05rem;
	color: #e4e7ea;
}
.header-left {
	width: .2rem;
	padding: 0 .1rem;
	font-size: .18rem;
	text-align: center;
	font-weight: bold;
}
.header-right {
	padding: 0 .1rem;
}

</style>
