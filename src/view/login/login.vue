<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip"><a href="#">忘记密码</a>&nbsp;&nbsp;&nbsp;&nbsp; <a href="#">注册账号</a> </p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
import Cookies from 'js-cookie'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ password, username }) {
      const token = Cookies.get(TOKEN_KEY)
      // 如果已经登录
      if (token) {
        this.$router.push({
          name: this.$config.homeName
        })
      } else {
        this.handleLogin({ password, username }).then(res => {
          this.getUserInfo().then(res => {
            this.$router.push({
              name: this.$config.homeName
            })
          })
        })
      }
    }
  }
}
</script>

<style>

</style>
