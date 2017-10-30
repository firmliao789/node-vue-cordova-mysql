<style scope lang="scss">
  .title {
    text-align: center;
    margin-top: 20px;
  }
</style>
<template>
  <div>
    <app-header title="注册"></app-header>
    <app-content hasHeader="true">
      <h1 class="title margin">欢迎注册我的系统</h1>
      <form>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" :attr="{ maxlength: 11}" v-model="mobile"></mt-field>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="name" :attr="{ maxlength: 8}"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" :attr="{ maxlength: 16,minlength:6}"
                  v-model="passwd"></mt-field>
        <mt-field label="确认密码" placeholder="请再次输入密码" :attr="{ maxlength: 16,minlength:6}" type="password"
                  v-model="confirmPasswd"></mt-field>

      </form>
      <mt-button @click="submit" type="primary" calss="margin-top" size="large">注册</mt-button>
      <p class="margin text-center">
        已有账号，前往
        <router-link to="login">登录</router-link>
      </p>

    </app-content>
  </div>

</template>

<script type="text/ecmascript-6">
  import AppHeader from '../../../components/AppHeader'
  import AppContent from '../../../components/AppContent'
  import {Field, Button, Toast} from 'mint-ui'
  import {http} from '../../../common/script/http'
  import * as localStorage  from '../../../common/script/localStorage'
  export default {
    //定义模版数据
    data(){
      let name, email, passwd, mobile, confirmPasswd
      return {
        name,
        email,
        passwd,
        mobile,
        confirmPasswd
      }
    },
    //计算属性
    computed: {},
    components: {
      AppHeader,
      AppContent,
      mtField: Field,
      mtButton: Button,
      Toast
    },
    //主件被加载完成
    mounted: function () {
      this.init();
    },
    //定义事件方法
    methods: {
      init: function () {
        const form = localStorage.getObject('register_form') || {};
        this.name = form.name
        this.email = form.email
        this.passwd = form.passwd
        this.mobile = form.mobile
        this.confirmPasswd = form.confirmPasswd
      },
      submit: async function () {

        console.log(this);
        const form = {
          name: this.name,
          passwd: this.passwd,
          mobile: this.mobile,
          confirmPasswd: this.confirmPasswd,
          email: this.email
        }
        localStorage.setObject('register_form', form)
        const result = await
          http('user/register', form);
        if (result.code == 200) {
          console.log('注册成功');
          Toast({
            message: '注册成功',
            iconClass: 'icon icon-success',
            duration: 500
          });
          this.$router.push('/login')
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

