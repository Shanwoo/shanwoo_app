<template>
  <div class="wrap">
    <div class="title">
      <h2>合作股权交易所</h2>
    </div>
    <div class="table-responsive">
      <table class="table table-hover">
        <!-- <caption>响应式表格布局</caption> -->
        <!-- <thead>
          <tr>
            <th>时间</th>
            <th>交易地址</th>
            <th>购买方</th>
            <th>售卖方</th>
            <th>交易金额</th>
          </tr>
        </thead> -->
        <tbody>
          <tr v-for="(item, index) in markets" :key="index">
            <td class="img-tag"><img :src="item.pic"></td>
            <td>
              <p>{{ item.name }}</p>
              <p>{{ item.board }}</p>
              <p>{{ item.intro }}</p>
            </td>
            <td>
              <p>注册资本:&nbsp; {{ item.capital }}</p>
              <p>挂牌标准:&nbsp; {{ item.listing_standard }}</p>
              <p>挂牌周期:&nbsp; {{ item.listing_period }}</p>
            </td>
            <td>
              <button type="button" class="btn btn-outline-primary btn-sm">
                <a :href="item.domain" target="_blank">去查看</a>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EquityList',
  props: ['markets'],
  data () {
    return {
      amount: 20000
    }
  }
}
</script>

<style scoped>
.wrap {
  background: #f7fcff;
}
.title {
  width: 100%;
  display: table;
  display: table;
  padding: 20px 5px;
  border-bottom: 1px solid #aaa;
}
.title h2 {
  display: table-cell;
}
.title span {
  display: table-cell;
  vertical-align: middle;
  text-align: right;
}
.table td,
.table th {
  vertical-align: middle;
}
.img-tag {
  width: 200px;
  padding: 0;
}
.img-tag img {
  width: 100%;
}
.btn-outline-primary a {
  color: #343434;
  font-size: 15px;
}
.btn-outline-primary a:hover {
  text-decoration: none;
}
@media screen and (max-width: 992px) {
  .table-responsive > .table > tbody > tr > td {
    white-space: nowrap;
  }
}
</style>
