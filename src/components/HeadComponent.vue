<template>
  <el-container>
    <el-aside width="200px">
      <router-link :to="{name:'Home'}">
        <img class="logo" src="static/logo.png"/>
      </router-link>
    </el-aside>
    <el-main>
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router>
        <el-menu-item index="/">{{ $t('home') }}</el-menu-item>
        <el-menu-item index="/enterprise">{{ $t('enterprise') }}</el-menu-item>
        <el-menu-item index="/market">{{ $t('market') }}</el-menu-item>
        <el-menu-item index="/about">{{ $t('about') }}</el-menu-item>
        <li class="el-menu-item lang-item" index="0">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              {{ language }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh">简体中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </el-menu>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'HeadComponent',
  data () {
    return {
      language: ''
    }
  },
  created () {
    let locale = this.$i18n.locale
    locale === 'zh' ? this.language = '简体中文' : this.language = 'English'
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleCommand (command) {
      this.$i18n.locale = command
      command === 'zh' ? this.language = '简体中文' : this.language = 'English'
    }
  }
}
</script>

<style scoped>
.logo {
  width: 200px;
  margin-top: 25px;
}
.el-container {
  padding: 0 60px;
  margin-bottom: 10px;
}
@media (min-width: 1200px) {
  .el-container {
    padding: 0 100px;
  }
}
.el-main {
  padding: 0 20px;
}
.el-menu {
  float: right;
}
.el-menu-item {
  font-size: 17px;
  padding: 0 15px;
  font-weight: 400;
  color: #303133;
  vertical-align: inherit;
}
.el-menu--horizontal {
  border-bottom: none;
  margin-top: 12px;
  background-color: transparent;
}
</style>
