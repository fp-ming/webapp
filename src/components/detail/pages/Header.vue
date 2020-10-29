<template>
	
<div class="detail-header">
	<div 
		class="detail-header-return"
		v-show="showTop"
		@click="toHome"
	>
		<span class="iconfont">&#xe602;</span>
	</div>
	<div 
		class="detail-header-top" 
		v-show="!showTop" 
		:style="styleOpacity"
	>
		<div class="detail-header-top-container">
			<span 
				class="iconfont detail-header-top-left"
				@click="toHome"
			>
				&#xe602;
			</span>
			北京国际鲜花港
		</div>
	</div>
</div>

</template>

<script>
	
export default {
	data () {
		return {
			showTop: true,
			styleOpacity: {opacity:0}
		}
	},
	methods: {
		toHome() {
			this.$router.push('/');
		},
		scroll() {
			let that = this;
			window.addEventListener('scroll',() => {
				let top = document.documentElement.scrollTop;
				let opacity = top / 130;
				opacity = opacity > 1 ? 1 : opacity;
				if(top > 45) {
					that.showTop = false;
					this.styleOpacity = {
						opacity
					}
				} else {
					that.showTop = true;
				}
			})
		}
	},
	mounted() {
		this.scroll();
	}
}

</script>

<style scoped lang="stylus">

@import '~@css/var.styl'
	
.detail-header {
	font-size: .18rem;
	color: $textColor;
}
.detail-header-return {
	width: .32rem;
	height: .32rem;
	line-height: .32rem;
	text-align: center;
	background: rgba(0,0,0,.5);
	border-radius: 50%;
	font-weight: bold;
	position: absolute;
	left: .1rem;
	top: .1rem;;
}
.detail-header-top {
	width: 100%;
	height: .4rem;
	position: fixed;
	left: 0;
	top: 0;
}
.detail-header-top-container {
	width: 100%;
	height: 100%;
	line-height: .4rem;
	background: $bgColor;
	text-align: center;
	position: relative;
}
.detail-header-top-left {
	position: absolute;
	left: .15rem;
}

</style>