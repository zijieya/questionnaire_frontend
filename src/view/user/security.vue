<template>
    <card title="邮箱验证" style="width:500px">
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
    </card>
</template>
<script>
export default {
  data () {
    return {
      email: {
        email: ''
      },
      code: {
        code: ''
      }
    }
  }
}
</script>
<style>

</style>
