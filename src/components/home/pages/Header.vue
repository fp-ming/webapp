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
			<span class="header-right-content">{{city}}</span> 
			<span class="iconfont header-right-iconfont">&#xe606;</span>
		</div>
	</div>
</template>
<script>

import {mapState} from 'vuex'

export default {
	methods: {
		toCity () {
			this.$router.push('/city')
		}
	},
	computed: {
		...mapState(['city']),
	}
}

</script>
<style scoped lang='stylus'>

@import '~@css/var.styl'
@import '~@css/common.styl'
	
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
	padding: 0 .05rem 0 .1rem;
	width: .6rem;
	font-size: .13rem;
}
.header-right-content {
	display: block;
	width: .4rem;
	text-align: right;
	padding-right: .04rem;
	font-weight: bold;
	textOverflow();
	float: left;
}
.header-right-iconfont {
	display: block;
	float: left;
}

</style>
