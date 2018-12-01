<template>
  <div class="wrap">
    <div class="row justify-content-between title">
      <div class="col-auto">
        <span><h2>最新股权公示</h2></span>
      </div>
      <div class="col-auto">
        <span>已有{{amount}}人购买
          <button type="button" class="btn btn-outline-primary btn-sm">
            <router-link :to="{name:'Transaction'}">去购买</router-link>
          </button>
        </span>
      </div>
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
          <tr v-for="(item, index) in equityList" :key="index">
            <td class="img-tag"><img :src="item.pic"></td>
            <td>
              <p>{{ item.name }}</p>
              <p>{{ item.slogan }}</p>
              <p>{{ item.intro }}</p>
            </td>
            <td>
              <p>注册资本:&nbsp; {{ item.capital }}</p>
              <p>出让股份:&nbsp; {{ item.shares }}</p>
              <p>占股比例:&nbsp; {{ item.ratio }}</p>
            </td>
            <td>
              <p>哈希: {{ item.hash }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="getmore" v-if="show">
      <button type="button" class="btn btn-link getmore" @click="getMore">
        更多<i class="fas fa-caret-down fa-lg" style="margin-left: 7px;"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EquityList',
  props: ['equities'],
  data () {
    return {
      amount: 20000,
      showNum: 4,
      equityList: [],
      show: true
    }
  },
  created () {
    this.equityList = this.equities.slice(0, this.showNum)
  },
  methods: {
    getMore () {
      this.showNum += this.showNum
      this.equityList = this.equities.slice(0, this.showNum)
      if (this.equityList.length === this.equities.length) {
        this.show = false
      }
    }
  }
}
</script>

<style scoped>
.wrap {
  background: #f7fcff;
}
.title {
  padding: 20px 5px;
}
.btn-outline-primary {
  margin-left: 20px;
}
.btn-outline-primary a {
  color: #343434;
}
.btn-outline-primary a:hover {
  text-decoration: none;
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
.getmore {
  margin-top: 10px;
  text-align: center;
}
@media screen and (max-width: 992px) {
  .table-responsive > .table > tbody > tr > td {
    white-space: nowrap;
  }
}
</style>
