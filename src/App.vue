<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getPartners')
    this.$store.dispatch('getMarkets')
    this.$store.dispatch('getExchangeRate')
    this.$store.dispatch('getTransactions')
  }
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
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.wrap {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 30px 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}
@media screen and (min-width: 768px) {
  .wrap {
    padding: 30px;
    width: 750px;
  }
}
@media screen and (min-width: 992px) {
  .wrap {
    padding: 60px;
    width: 970px;
  }
}
@media screen and (min-width: 1200px) {
  .wrap {
    padding: 70px 120px;
    width: 1170px;
  }
}
/* @media (min-width: 992px) {
  .container {
    width: 970px;
  }
} */
</style>
