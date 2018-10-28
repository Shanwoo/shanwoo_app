<template>
  <div class="wrap">
    <div class="row">
      <div class="col-auto">
        <span>WOO/USDT ≈ {{exchangeRate["USDT"]["price"]}}</span>
      </div>
      <div class="col-auto">
        <span>{{exchangeRate["USDT"]["price_percent"]}}</span>
      </div>
      <div class="col-auto">
        <span>high: {{exchangeRate["USDT"].high}}</span>
      </div>
      <div class="col-auto">
        <span>low: {{exchangeRate["USDT"].low}}</span>
      </div>
    </div>
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
.row {
  margin-bottom: 10px;
  margin-left: 5px;
}
.col-auto {
  width: auto;
  padding-bottom: 10px;
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
@media screen and (max-width: 767px) {
  .table-responsive > .table > tbody > tr > td {
    white-space: nowrap;
  }
}
</style>
