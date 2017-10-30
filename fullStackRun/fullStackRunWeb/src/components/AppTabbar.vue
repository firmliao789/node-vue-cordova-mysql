<style scope lang="scss">
  [class^='mint-tab-item'],.mint-tab-item-icon i {
    text-align: center;
  }
</style>

<template>

  <div>
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item :id="item.id" v-for="item in containers" :key="item.id">
        <i slot="icon" :class="item.icon"></i>
        {{item.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>

</template>

<script type="text/ecmascript-6">
  import {Tabbar, TabItem} from 'mint-ui'
  export default {
    //定义模版数据
    data(){
      let selected;
      return {
        selected
      }
    },
    props: [
      "containers"
    ],
    components: {
      mtTabbar: Tabbar,
      mtTabItem: TabItem
    },
    //计算属性
    computed: {},
    //主件被加载完成
    mounted: function () {
      this.init();
    },
    //定义事件方法
    methods: {
      init: function () {
        for (let key in this.containers)
          if (this.containers[key].selected)
            this.selected = this.containers[key].id;
      }
    },
    //监听模版变量
    watch: {
      selected: function () {
        EventHub.$emit('change', this.selected); //Hub触发事件
      }
    }

  }
</script>

