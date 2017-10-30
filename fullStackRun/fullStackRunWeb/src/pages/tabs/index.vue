<template>

  <div>
    <AppTabContainer :containers="tabs" active="home" >
      <home slot="home"></home>
      <find slot="find"></find>
      <follow slot="follow"></follow>
      <mine slot="mine"></mine>
    </AppTabContainer>
    <app-tabbar selected="home" :containers="tabs"></app-tabbar>

  </div>

</template>

<script type="text/ecmascript-6">
  import AppTabbar from '../../components/AppTabbar'
  import AppTabContainer from '../../components/AppTabContainer'
  import Home from './home/'
  import Find from './find/'
  import Follow from './follow/'
  import Mine from './mine/'
  export default {
    //定义模版数据
    data(){
      let tabs = [
        {
          id: 'home',
          title: '首页',
          icon: 'iconfont icon-home',
          selected: true
        },
        {
          id: 'follow',
          icon: 'iconfont icon-follow',
          title: '关注'
        },
        {
          id: 'find',
          icon: 'iconfont icon-find',
          title: '发现'
        },
        {
          id: 'mine',
          icon: 'iconfont icon-weibiaoti3',
          title: '我的'
        }
      ];
      return {
        tabs
      }
    },
    components: {
      AppTabbar,
      AppTabContainer,
      Home,
      Find,
      Follow,
      Mine
    },
    //计算属性
    computed: {},
    //主件被加载完成
    mounted: function () {

    },
    //定义事件方法
    methods: {},
    //监听模版变量
    watch: {}

  }
</script>

<style>

</style>
