<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎注册" :bordered="false">
      <Form ref="formInline" :model="email" inline>
        <FormItem >
            <Input type="text" v-model="email.email" placeholder="邮箱">
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary">确认</Button>
        </FormItem>
    </Form>
 <Form ref="formInline" :model="code" inline>
        <FormItem >
            <Input type="text" v-model="code.code" placeholder="验证码">
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary">验证</Button>
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
      email: {
        email: ''
      },
      password: {
        password: ''
      }
    }
  }
}
</script>

<style>

</style>
