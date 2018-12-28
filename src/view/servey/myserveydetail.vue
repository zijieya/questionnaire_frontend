<template>
    <card title="serveytitle" style="width:800">
        <p>共有N个人作答&nbsp;&nbsp;&nbsp;&nbsp;截止日期xxxx-xx-xx xx:xx:xx</p>
        <!--第一版先显示每个问题的答题次数 柱状图 扇形图-->
        <card title="题目的标题">
             <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-pie style="height: 300px;" :value="pieData" text="答案分布"></chart-pie>
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="barData" text="答案分布"/>
        </Card>
      </i-col>
    </Row>
        </card>
    </card>
</template>
<script>
import { ChartPie, ChartBar } from '_c/charts'
export default {
  components: {
    ChartPie,
    ChartBar
  },
  data () {
    return {
      pieData: [
        { value: 335, name: '答案A' },
        { value: 310, name: '答案B' },
        { value: 234, name: '答案C' },
        { value: 135, name: '答案D' },
        { value: 1548, name: '答案E' }
      ],
      barData: {
        答案A: 13253,
        答案B: 34235,
        答案C: 26321,
        答案D: 12340,
        答案E: 24643
      }
    }
  }
}
</script>
<style>

</style>
