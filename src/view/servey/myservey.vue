<template>
  <div>
    <Card>
      <tables ref="tables" searchable  v-model="tableData" :columns="columns"/>
          <Page :total="100" show-sizer />
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getTableData } from '@/api/data'
export default {
  name: 'myservey',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        { title: '问卷序列号', key: 'surveyserialid' },
        { title: '创建者', key: 'creator' },
        { title: '标题', key: 'title' },
        { title: '标签', key: 'tag' },
        { title: '作答次数', key: 'total' }
      ],
      tableData: []
    }
  },
  methods: {
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res.data
    })
  }
}
</script>

<style>

</style>
