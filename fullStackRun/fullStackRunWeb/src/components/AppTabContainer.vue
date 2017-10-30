
<style scope lang="scss">
  .mint-tab-container{bottom: 55px;}
</style>
<template>

  <div>

    <mt-tab-container v-model="active">
      <mt-tab-container-item v-for=" item in containers" :key="item.id" :id="item.id">
        <slot :name="item.id"></slot>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>

</template>

<script type="text/ecmascript-6">
  import {TabContainer, TabContainerItem} from 'mint-ui'
  export default {
    //定义模版数据
    data(){
      let active = '';
      return {
        active
      }
    },
    components: {
      mtTabContainer: TabContainer,
      mtTabContainerItem: TabContainerItem
    },
    props: [
      "containers"
    ],
    //计算属性
    computed: {},
    //主件被加载完成
    mounted: function () {
      EventHub.$on('change', (data) => { //Hub接收事件
        console.log(data);
        this.active = data;
      });
    },
    //定义事件方法
    methods: {},
    //监听模版变量
    watch: {}

  }
</script>

