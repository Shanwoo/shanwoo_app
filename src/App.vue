<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  //   created () {
  //     this.$store.dispatch('getPartners')
  //     this.$store.dispatch('getMarkets')
  //     this.$store.dispatch('getExchangeRate')
  //     this.$store.dispatch('getTransactions')
  //   }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #3498db;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  font-family: "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI",
    "Microsoft YaHei", "微软雅黑", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 900px;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.wrap {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 60px;
  width: 100%;
}
@media (min-width: 1200px) {
  .wrap {
    padding: 70px 120px;
  }
}
/* @media (min-width: 992px) {
  .container {
    width: 970px;
  }
} */
</style>
