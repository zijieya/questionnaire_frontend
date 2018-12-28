<template>
<card style="width:500px">
    <Form :model="servey" ref="formDynamic" label-position="left" :label-width="80" >
        <FormItem label="标题">
            <Input v-model="servey.title"/>
        </FormItem>
        <FormItem   v-for="(item, index) in servey.items"
                v-if="item.status"
                :key="index"
                :label="'问题 ' + item.index"
                :prop="'items.' + index + '.value'">
             <FormItem label="问题">
            <Input v-model="item.question"/>
        </FormItem>
                     <FormItem label="答案A">
            <Input v-model="item.answerA"/>
        </FormItem>
                     <FormItem label="答案B">
            <Input v-model="item.answerB"/>
        </FormItem>
                     <FormItem label="答案C">
            <Input v-model="item.answerC"/>
        </FormItem>
                     <FormItem label="答案D">
            <Input v-model="item.answerD"/>
        </FormItem>
                     <FormItem label="答案E">
            <Input v-model="item.answerE"/>
        </FormItem>
        <FormItem label="答案F">
            <Input v-model="item.answerF"/>
        </FormItem>
        <FormItem label="答案G">
            <Input v-model="item.answerG"/>
        </FormItem>
        </FormItem>
          <FormItem>
            <Row>
                <Col span="12">
                    <Button type="dashed" long @click="handleAdd" icon="md-add">增加题目</Button>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="标签">
            <Input v-model="servey.tag"/>
        </FormItem>
         <FormItem label="备注">
            <Input v-model="servey.mark"/>
        </FormItem>
        <FormItem label="过期时间">
             <Row>
                <Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="过期时间" v-model="servey.overdue"></DatePicker>
                    </FormItem>
                </Col>
             </Row>
        </FormItem>
         <FormItem>
            <Button type="primary">提交</Button>
        </FormItem>
    </Form>
</card>
</template>
<script>
export default {
  data () {
    return {
      index: 1,
      servey: {
        title: '',
        tag: '',
        mark: '',
        overdue: '',
        vertical: '',
        items: [
          {
            index: 1,
            status: 1,
            question: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            answerE: '',
            answerF: '',
            answerG: ''
          }
        ]
      }
    }
  },
  methods: {
    handleAdd () {
      this.index++
      this.servey.items.push({
        index: this.index,
        question: '',
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        answerE: '',
        answerF: '',
        answerG: '',
        status: 1
      })
    }
  }
}
</script>
<style>

</style>
