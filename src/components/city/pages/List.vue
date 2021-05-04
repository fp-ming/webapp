<template>
	
<div class="wrapper">
	<div  class="content">
		<div ref="top"></div> 

		<!-- city-hot -->
		<div class="city-hot"> 
			<div class="city-hot-title">
				热门城市 
			</div> 
			<ul class="city-hot-list">
				<li 
					class="city-hot-item"
					v-for="city in hotCities"
					:key="city.id"
					@click="changeCityName(city.name)" 
				>
					{{city.name}}
				</li>
				<div class="clear"></div>
			</ul>
		</div>

		<!-- city-sort -->
		<div class="city-sort">
			<div class="city-sort-title">
				字母顺序
			</div>
			<ul class="city-sort-list">
				<li 
					class="city-sort-item"
					v-for="(item,key) in cities"
					:key="key"
					@click="scrollTo(key)"
				>
					{{key}}
				</li>
				<div class="clear"></div>
			</ul>
		</div>

		<!-- city-list -->
		<div class="city-list">
			<div
				v-for="(items,key) in cities"
				:key="key"
			>
				<div class="city-list-title" :ref="key">
					{{key}}
				</div>
				<ul class="city-list-list">
					<li 
						class="city-list-item"
						v-for="item in items"
						:key="item.id"
						@click="changeCityName(item.name)"
					>
						{{item.name}}
					</li>
					<div class="clear"></div>
				</ul>
			</div>
		</div>

	</div>

	<div 
		id="to-top"
		@click="scrollToTop"
	>
		回到顶部
	</div>

</div>

</template>

<script>

import BetterScroll from 'better-scroll'
import {mapMutations} from 'vuex'

export default {
	props:['cities','hotCities'],
	data () {
		return {
			bs:'',
			toTop:'',
		}
	},
	methods: {
		createBS () {
			this.bs = new BetterScroll(".wrapper",{
				cilick: true,
				probeType: 1
			});
			this.bs.on('scroll',(pos) => {
				if(Math.abs(pos.y) > 1000) {
					this.toTop.style.display = "block";
				}
				if(Math.abs(pos.y) <= 1000)
				{
					this.toTop.style.display = "none";
				}
			});
		},
		scrollTo(sort) {
			this.bs.scrollToElement(this.$refs[sort][0],2000);
			this.toTop.style.display = "block";
		},
		scrollToTop() {
			this.bs.scrollToElement(this.$refs["top"],2000);
			this.toTop.style.display = "none";
		},
		changeCityName(cityName) {
			this.$router.push('/');
			this.changeCity(cityName);
		},
		...mapMutations(['changeCity']),
	},
	mounted() {
		this.createBS();
		this.toTop = document.getElementById('to-top');
	},
	updated() {
		this.createBS();
	}

}

</script>

<style scoped> 

.wrapper {
	position: absolute;
	overflow: hidden;
	left: 0;
	right: 0;
	bottom: 0;
	top: .44rem;
	background: #f5f5f5;
}

.city-hot {
	font-size: .14rem;
}

.city-hot-title {
	padding:.2rem;
}

.city-hot-list {
	background: #fff;
	font-size: .16rem;
	color: #212121;
}
.city-hot-item {
	width: 33.111%;
	height: .5rem;
	line-height: .5rem;
	text-align: center;
	float: left;
	border-bottom: .01rem solid #ddd;
	position: relative;
}
.city-hot-item:not(:nth-child(3n)) {
	border-right: .01111rem solid #ddd;
}

.city-sort {
	font-size: .14rem;
}

.city-sort-title {
	padding: .2rem;
}

.city-sort-list {
	font-size: .16rem;
	color: #212121;
	background: #fff;
}
.city-sort-item {
	width: 16.666%;
	height: .4rem;
	line-height: .4rem;
	text-align: center;
	float: left;
}

.city-list {
	font-size: .14rem;
}

.city-list-title {
	padding:.2rem;
}

.city-list-list {
	background: #fff;
	font-size: .16rem;
	color: #212121;
}
.city-list-item {
	width: 24.8%;
	height: .5rem;
	line-height: .5rem;
	text-align: center;
	float: left;
	border-bottom: .01rem solid #ddd;
	position: relative;
}
.city-list-item:not(:nth-child(4n)) {
	border-right: .01rem solid #ddd;
}

.clear {
	clear: both;
}

#to-top {
	position: fixed;
	bottom: .2rem;
	right: 0;
	font-size: .14rem;
	width: .2rem;
	height: .8rem;
	padding-left: .1rem;
	padding-top: .2rem;
	border-radius: 50% 0 0 50%;
	text-align: center;
	background: #f4d133;
	display: none;
}

</style>
