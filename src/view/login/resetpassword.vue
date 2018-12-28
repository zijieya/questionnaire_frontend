<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎注册" :bordered="false">
        <Form :model="user" :label-width="80" >
        <FormItem label="新密码">
            <Input v-model="user.password"/>
        </FormItem>
        <FormItem label="确认密码">
            <Input v-model="user.password2"/>
        </FormItem>
         <FormItem>
            <Button type="primary">提交</Button>
        </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        password: '',
        password1: ''
      }
    }
  }
}
</script>

<style>

</style>
