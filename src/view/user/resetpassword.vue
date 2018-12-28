<template>
    <card title="修改密码" style="width:500px">
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
    </card>
</template>
<script>
export default {
  name: 'resetpassword',
  data () {
    return {
      user: {
        password: '',
        password2: ''
      }
    }
  }
}
</script>
<style>

</style>
