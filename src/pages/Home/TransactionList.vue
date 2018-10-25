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
    <div class="table-responsive">
      <table class="table table-hover table-striped">
        <!-- <caption>响应式表格布局</caption> -->
        <thead>
          <tr>
            <th>时间</th>
            <th>交易地址</th>
            <th>购买方</th>
            <th>售卖方</th>
            <th>交易金额</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in transactions" :key="index">
            <td class="datetime-tag">{{ item.datetime }}</td>
            <td><span class="address-tag">
              <a :href='"https://etherscan.io/tx/" + item.txhash' target="_blank">
                {{ item.txhash }}
              </a>
            </span></td>
            <td><span class="address-tag">
              <a :href='"https://etherscan.io/address/" + item.from' target="_blank">
                {{ item.from }}
              </a>
            </span></td>
            <td><span class="address-tag">
              <a :href='"https://etherscan.io/address/" + item.to' target="_blank">
                {{ item.to }}
              </a>
            </span></td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transaction',
  props: ['exchangeRate', 'transactions']
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .table-responsive > .table > tbody > tr > td {
    white-space: nowrap;
  }
}
.table-responsive > .table > tbody > tr > td {
  font-size: 14px;
  padding-left: 6px;
  padding-right: 6px;
}
.datetime-tag {
  width: 150px;
}
.address-tag {
  width: 125px;
  display: inline-block;
  vertical-align: bottom;
  text-overflow: ellipsis;
  overflow: hidden;
}
.el-row {
  margin-bottom: 20px;
  font-size: 17px;
  line-height: 45px;
}
</style>
