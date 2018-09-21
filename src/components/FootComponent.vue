<template>
  <div class="footer">
    <el-row :gutter="20">
      <el-col :span="10">
        <el-container>
          <el-container style="display: table;">
            <el-aside>
              <router-link :to="{name:'Home'}">
                <img class="logo" src="static/shanwoo.png"/>
              </router-link>
            </el-aside>
            <el-main style="font-size: 25px;">ShanWoo Global</el-main>
          </el-container>
          <el-footer style="font-size: 23px;">玄武分布式企业联盟基金会</el-footer>
          <el-footer>
            <i class="fa fa-facebook fa-2x"></i>
            <i class="fa fa-twitter fa-2x"></i>
            <i class="fa fa-wechat fa-2x"></i>
          </el-footer>
        </el-container>
      </el-col>
      <el-col :span="5">
        <div class="content">
          <h3>支持</h3>
          <p>新手帮助</p>
          <p>常见问题</p>
          <p>公告</p>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="content">
          <h3>条款</h3>
          <p>服务协议</p>
          <p>交易规则</p>
          <p>费用说明</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="content">
          <h3>客服</h3>
          <p>aries@shanwoo</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'FootComponent'
}
</script>

<style scoped>
.footer {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px 60px;
  background: #1a160d;
  color: #fff;
  font-size: 14px;
}
@media (min-width: 1200px) {
  .footer {
    padding: 20px 120px;
  }
}
.logo {
  width: 60px;
  height: 60px;
  border-radius: 60px;
}
.el-aside {
  width: 70px !important;
  display: table-cell;
}
.el-main {
  display: table-cell;
  vertical-align: middle;
  padding: 5px;
}
.el-footer {
  padding: 0 10px;
}
.el-footer i {
  padding-right: 20px;
}
</style>
