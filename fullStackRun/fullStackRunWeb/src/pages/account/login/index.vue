<template>

  <div>
    <app-header title="登录"></app-header>
    <app-content hasHeader="true">
      <form>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" :attr="{ maxlength: 11}" v-model="mobile"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" :attr="{ maxlength: 16,minlength:6}"
                  v-model="passwd"></mt-field>
      </form>

      <mt-button @click="submit" type="primary" calss="margin-top" size="large">登录</mt-button>
      <p class="margin text-center">
        没有账号，前往
        <router-link to="register">注册</router-link>
      </p>

    </app-content>

  </div>

</template>

<script type="text/ecmascript-6">
  import AppHeader from '../../../components/AppHeader'
  import AppContent from '../../../components/AppContent'
  import {Field, Button, Toast} from 'mint-ui'
  import {http} from '../../../common/script/http'
  import * as localStorage from '../../../common/script/localStorage'
  export default {
    //定义模版数据
    data(){
      let mobile, passwd
      return {
        mobile,
        passwd
      }
    },
    components: {
      AppHeader,
      AppContent,
      mtField: Field,
      mtButton: Button,
      Toast
    },
    //计算属性
    computed: {},
    //主件被加载完成
    mounted: function () {
      this.init()
    },
    //定义事件方法
    methods: {
      init: function () {
        const form = localStorage.getObject('login_form') || {};
        this.mobile = form.mobile;
        this.passwd = form.passwd
      },
      submit: async function () {
        const form = {
          mobile: this.mobile,
          passwd: this.passwd
        }
        localStorage.setObject('login_form', form);
        const result = await http('user/login', form)
        if (result && result.code == 200) {
          Toast({
            message: '登录成功',
            position: 'top',
            duration: 500
          });
          this.$router.push('/tabs')
        }
        else {
          Toast({
            message: result.info,
            position: 'top',
            duration: 500
          });
        }
      }
    },
    //监听模版变量
    watch: {}

  }
</script>

<style>

</style>
