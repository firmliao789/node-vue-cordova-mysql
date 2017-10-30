<style scope lang="scss">
  @import "../common/style/mixins.scss";

  .app-content {
    position: absolute;
    width: 100%;
  @extend .full;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .app-content.hasHeader {
    top: 44px;
  }

  .app-content.hasFooter, .app-content.hasTabbar {
    bottom: 44px;
  }
</style>
<template>

  <div class="app-content" :class="{hasHeader:hasHeader,
  hasFooter:hasFooter,overScroll:scroll,hasTabbar:hasTabbar}">
    <slot></slot>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    //定义模版数据
    data(){
      let data
      return {
        data
      }
    },
    props: [
      "hasHeader",
      "hasFooter",
      "hasTabbar",
      "scroll"
    ],
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
