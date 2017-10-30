<style scope lang="scss">
  .home {
    background-color: #f8f8f8
  }

  .list_item {
    padding: 10px;
    margin: 10px 0;
    line-height: 1.5em;

  h1 {
    font-size: 14px;
  }

  div {
    font-size: 12px;
  }

  .time {
    text-align: right;
    color: #999;
  }

  }
  ul {
    /*height: 100%;*/
    /*overflow-y: scroll;*/
  }
</style>
<template>

  <div slot="home">
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false">
      <li v-for="vm in news_list" :key="vm.id" class="list_item">
        <h1>{{vm.title}}</h1>
        <div v-html="vm.description"></div>
        <div v-html="vm.summary"></div>
        <div class="time">{{vm.createdAt | dateCus('yyyy-MM-dd')}}</div>
      </li>
    </ul>
  </div>

</template>

<script type="text/ecmascript-6">
  import {http} from '../../../common/script/http'
  import {InfiniteScroll} from 'mint-ui';
  import Vue from 'vue'

  Vue.use(InfiniteScroll)
  export default {
    //定义模版数据
    data(){
      let pageNo = 1, pageSize = 10, news_list = [], loading = false;
      return {
        pageNo,
        pageSize,
        news_list,
        loading
      }
    },
    //计算属性
    computed: {},
    components: {},
    //主件被加载完成
    mounted: function () {
      this.getNews();
    },
    //定义事件方法
    methods: {
      getNews: async function () {
        var form = {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
        const result = await http('news/news_list', '', 'GET', form);
        if (result.code == 99) {
          this.pageSize++;
          this.news_list = result.data;
          return result.data;
        }
        else
          return '';
      },
      loadMore: async function () {
        const result = await this.getNews();
        if (!result || result.length < this.pageSize)
          this.loading = true;
        if (result) {
          this.news_list.concat(result);
        }
      }
    },
    //监听模版变量
    watch: {}

  }
</script>
