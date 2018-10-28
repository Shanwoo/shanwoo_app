<template>
  <div class="footer">
    <div class="row justify-content-around">
      <div class="col-auto col-wrap">
        <div class="row">
          <div class="col-auto">
            <router-link :to="{name:'Home'}">
              <img class="logo" src="static/shanwoo.png"/>
            </router-link>
          </div>
          <div class="col-auto">
            <span class="title-en">ShanWoo Global</span>
          </div>
        </div>
        <div class="title-zh">玄武分布式企业联盟基金会</div>
        <div class="icon">
          <i class="fa fa-facebook fa-2x"></i>
          <i class="fa fa-twitter fa-2x"></i>
          <i class="fa fa-wechat fa-2x"></i>
        </div>
      </div>
      <div class="col-auto col-wrap">
        <div class="content">
          <h3>支持</h3>
          <p>新手帮助</p>
          <p>常见问题</p>
          <p>公告</p>
        </div>
      </div>
      <div class="col-auto col-wrap">
        <div class="content">
          <h3>条款</h3>
          <p>服务协议</p>
          <p>交易规则</p>
          <p>费用说明</p>
        </div>
      </div>
      <div class="col-auto col-wrap">
        <div class="content">
          <h3>客服</h3>
          <p>aries@shanwoo</p>
        </div>
      </div>
    </div>
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
.col-auto {
  max-width: 320px;
  width: auto;
}
.title-en {
  font-size: 25px;
  height: 60px;
  line-height: 60px;
  margin-left: -15px;
}
.title-zh {
  font-size: 23px;
  margin-top: 10px;
}
.icon {
  margin-top: 15px;
}
i {
  padding-right: 20px;
}
@media (max-width: 690px) {
  .col-wrap {
    margin-bottom: 15px;
  }
  .title-en {
    font-size: 21px;
  }
  .title-zh {
    font-size: 20px;
  }
  .icon {
    margin-bottom: 10px;
  }
}
</style>
