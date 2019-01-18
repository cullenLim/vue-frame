<template>
	<div class="wrap">
		<!-- <el-input v-model="num" placeholder="请输入内容"></el-input> -->
		<span>{{count}}</span>
		<el-button type="primary" @click="add()">ADD</el-button>
		<el-button type="primary" @click="jian()">MINUS</el-button>
		<el-button type="primary" @click="random()">RANDOM</el-button>
	</div>
</template>

<script>
	import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
	import serviceApi from '@/service/serviceApi'
	export default{
		name: 'vuexTest1',
		data(){
			return {
				
			}
		},
		computed: mapState({
			count: state => state.addTest.count
		}),
		methods:{
			...mapMutations(['increase','minus']),
			...mapActions(['testActions']),
			add(){
				this.increase({n:1})
			},
			jian(){
				this.minus(1);
			},
			random(){
				this.testActions();
			}
		},
		mounted(){
			let _this = this;
			
		}
	}

</script>