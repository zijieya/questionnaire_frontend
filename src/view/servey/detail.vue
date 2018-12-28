<template>
    <card title="问卷名" style="width:500px">
        <p> 作者:&nbsp;&nbsp;&nbsp;&nbsp;截止日期:&nbsp;&nbsp;&nbsp;&nbsp;共有n个人回答了此问卷 </p>
         <Form :model="servey" label-position="left" :label-width="80" >
        <FormItem>
            <p>问题</p>
        <RadioGroup v-model="answer" vertical>
        <Radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
        </FormItem>
         <FormItem>
            <Button type="primary">提交</Button>
        </FormItem>
    </Form>
     <Tag type="dot" closable color="primary">标签一</Tag>
     <Tag type="dot" closable color="primary">标签二</Tag>
    </card>
</template>
<script>
export default {
  data () {
    return {
      answer: ''
    }
  }
}
</script>
<style>

</style>
