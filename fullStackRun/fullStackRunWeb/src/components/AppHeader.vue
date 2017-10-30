<style scope lang="scss">
  .mint-header-title {
    text-align: center
  }
</style>
<template>

  <div>
    <mt-header :title="title" :fixed="true">
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button icon="more" slot="right" v-if="right"></mt-button>
    </mt-header>
  </div>

</template>

<script type="text/ecmascript-6">
  import {Header, Button} from 'mint-ui'
  export default {
    //定义模版数据
    data(){
      let data
      return {
        data
      }
    },
    props: [
      "title",
      "right"
    ],
    //计算属性
    computed: {},
    components: {
      mtHeader: Header,
      mtButton: Button
    },
    //主件被加载完成
    mounted: function () {

    },
    //定义事件方法
    methods: {
      goBack: function () {
        this.$router.go(-1)
      }
    },
    //监听模版变量
    watch: {}

  }
</script>


