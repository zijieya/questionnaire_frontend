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
import { login } from '@/api/common'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ password, userName }) {
      login({ password, userName }).then(res => {
        this.successful = res.successful
        this.then(res => {
          if (this.successful === true) {
            this.$router.push({
              name: this.$config.homeName
            })
          } else {
            console.log('登录失败')
          }
        })
      })
    }
  }
}
</script>

<style>

</style>
