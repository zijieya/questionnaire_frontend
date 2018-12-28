<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎注册" :bordered="false">
       <Form :model="user" :label-width="80" >
             <FormItem label="用户名">
            <Input type="text" v-model="user.username"></input>
             </FormItem>
            <FormItem label="邮箱">
            <Input type="text" v-model="user.email"></input>
        </FormItem>
          <FormItem label="密码">
            <Input type="password" v-model="user.password"></input>
        </FormItem>
              <FormItem>
            <Button type="primary">确认</Button>
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
        username: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>

</style>
