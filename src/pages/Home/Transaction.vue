<template>
  <div class="wrap">
    <el-row :gutter="20">
      <el-col :span="6">
        <span>WOO/USDT ≈ {{exchangeRate["USDT"]["price"]}}</span>
      </el-col>
      <el-col :span="3">
        <span>{{exchangeRate["USDT"]["price_percent"]}}</span>
      </el-col>
      <el-col :span="5">
        <span>high: {{exchangeRate["USDT"].high}}</span>
      </el-col>
      <el-col :span="5">
        <span>low: {{exchangeRate["USDT"].low}}</span>
     </el-col>
      <el-col :span="5">
        <span>24H: {{exchangeRate["USDT"]["24H"]}}</span>
      </el-col>
    </el-row>
    <el-table :data="transactions" stripe style="width: 100%">
      <el-table-column label="时间" min-width="100px">
        <template slot-scope="scope">
          <span>{{ scope.row.datetime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="交易地址" min-width="100px">
        <template slot-scope="scope">
          <span><a :href='"https://etherscan.io/tx/" + scope.row.txhash' target="_blank">
            {{ scope.row.txhash }}
          </a></span>
        </template>
      </el-table-column>
      <el-table-column label="购买方" min-width="100px">
        <template slot-scope="scope">
          <span><a :href='"https://etherscan.io/address/" + scope.row.from' target="_blank">
            {{ scope.row.from }}
          </a></span>
        </template>
      </el-table-column>
      <el-table-column label="售卖方" min-width="100px">
        <template slot-scope="scope">
          <span><a :href='"https://etherscan.io/address/" + scope.row.to' target="_blank">
            {{ scope.row.to }}
          </a></span>
        </template>
      </el-table-column>
      <el-table-column label="交易金额" min-width="100px">
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Transaction',
  props: ['exchangeRate', 'transactions']
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  font-size: 17px;
  line-height: 45px;
}
.el-table {
  color: #333;
  border-top: 2px solid #d3d3d3;
}
.el-table thead {
  color: #333 !important;
}
</style>
