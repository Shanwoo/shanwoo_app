<template>
  <div>
    <head-component></head-component>
    <div class="container"><img :src='lastetsCoporators[0].pic'></div>
    <div class="wrap">
      <h2>ShanWoo最新动态</h2>
      <el-row style="margin-top: 30px">
        <el-col :span="3">
          <div>09/30</div>
          <div class="year">2018</div>
          <div class="line"></div>
          <div>09/30</div>
          <div class="year">2018</div>
          <div class="line"></div>
          <div>09/30</div>
          <div class="year">2018</div>
          <div class="line"></div>
          <div>09/30</div>
          <div class="year">2018</div>
        </el-col>
        <el-col :span="15">
          <div class="word">ShanWoo V1.4正式上线</div>
          <div class="word">ShanWoo V1.3正式上线</div>
          <div class="word">ShanWoo V1.2正式上线</div>
          <div class="word">ShanWoo V1.0正式上线</div>
        </el-col>
        <el-col :span="6">
          <div class="process"><img src="static/blockchain.jpg" /></div>
          <div class="process"><img src="static/blockchain.jpg" /></div>
          <div class="process"><img src="static/blockchain.jpg" /></div>
          <div class="process"><img src="static/blockchain.jpg" /></div>
        </el-col>
      </el-row>
    </div>
    <div class="wrap">
      <el-row>
        <el-col :span="12">
          <div class="intro"><img src="static/blockchain.jpg" /></div>
        </el-col>
        <el-col :span="12" style="padding-left: 20px;">
          <h1>ShanWoo?</h1>
          <p>去中心化股权交易平台，专业区块链技术团队</p>
        </el-col>
      </el-row>
    </div>
    <div class="wrap">
      <el-row>
        <h2 style="padding-left: 11px">ShanWoo So Strong?</h2>
        <el-col :span="8"><div class="advantage"><h1>专业团队</h1></div></el-col>
        <el-col :span="8"><div class="advantage"><h1>先进技术</h1></div></el-col>
        <el-col :span="8"><div class="advantage"><h1>师资强大</h1></div></el-col>
      </el-row>
    </div>
    <div class="wrap">
      <h2>发展规划</h2>
      <el-row>
        <el-col :span="4" class="blueprint">
          <img src="static/blockchain.jpg" />
        </el-col>
        <el-col :span="2" class="caret-right"><i class="fa fa-caret-right fa-2x"></i></el-col>
        <el-col :span="4" class="blueprint">
          <img src="static/blockchain.jpg" />
        </el-col>
        <el-col :span="2" class="caret-right"><i class="fa fa-caret-right fa-2x"></i></el-col>
        <el-col :span="4" class="blueprint">
          <img src="static/blockchain.jpg" />
        </el-col>
        <el-col :span="2" class="caret-right"><i class="fa fa-caret-right fa-2x"></i></el-col>
        <el-col :span="4" class="blueprint">
          <img src="static/blockchain.jpg" />
        </el-col>
      </el-row>
      <div class="joinus"><el-button @click="joinUs">加入我们</el-button></div>
    </div>
    <partner></partner>
    <foot-component></foot-component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeadComponent from '@/components/HeadComponent'
import Partner from '@/components/Partner'
import FootComponent from '@/components/FootComponent'

export default {
  name: 'About',
  components: { HeadComponent, Partner, FootComponent },
  computed: {
    ...mapGetters(['lastetsCoporators'])
  }
}
</script>

<style scoped>
.container {
  height: 200px;
  line-height: 200px;
  background: #1a160d;
  text-align: center;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 90%;
  vertical-align: middle;
}
.wrap {
  border-bottom: 1px solid #c0c4cc;
}
.year {
  padding-left: 5px;
  color: #666;
}
.line {
  border-left: 1px solid #c0c4cc;
  height: 56px;
  margin-left: 23px;
}
.word {
  height: 90px;
  padding-top: 10px;
}
.process {
  height: 100px;
}
.intro {
  width: 400px;
}
.advantage {
  margin: 10px;
  border: 1px solid #c0c4cc;
  height: 250px;
  line-height: 210px;
  text-align: center;
  background: #f8f8f8;
}
.blueprint {
  width: 200;
  height: 200;
}
.caret-right {
  text-align: center;
  line-height: 100px;
}
.joinus {
  text-align: center;
  margin-top: 20px;
}
</style>
