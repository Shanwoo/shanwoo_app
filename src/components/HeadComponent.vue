<template>
  <div class="header">
    <div class="content sm-header">
      <nav class="navbar navbar-expand-md navbar-light bg-white">
        <router-link :to="{ name:'Home' }" class="navbar-brand nav-title">
          <img class="logo" src="static/logo.png"/>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name:'Home' }">{{ $t('home') }}<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name:'Enterprise' }">{{ $t('enterprise') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name:'Market' }">{{ $t('market') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name:'About' }">{{ $t('about') }}</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ language }}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" @click="handleCommand('zh')">简体中文</a>
                <a class="dropdown-item" @click="handleCommand('en')">English</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
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
  margin-top: 15px;
}
.content {
  margin-bottom: 10px;
  padding: 0;
}
@media screen and (min-width: 576px) {
  .content {
    padding: 0 20px;
  }
}
@media screen and (min-width: 768px) {
  /* .content {
    padding: 0 20px;
  } */
}
@media screen and (min-width: 992px) {
  .content {
    padding: 0 60px;
  }
}
@media screen and (min-width: 1200px) {
  .content {
    padding: 0 100px;
  }
}
.navbar-nav .router-link-exact-active {
  color: #000000;
}
/* .navbar-header .nav-title:hover {
  background: #fff;
  color: #000;
}
.navbar-collapse .navbar-nav li a:hover,
.navbar-collapse .navbar-nav li a:focus {
  color: #000;
  background: #fff;
} */
/* .navbar-default .navbar-toggle {
  border-color: #ddd;
} */
/* .navbar-toggle {
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
} */
/* .nav > li > a {
  color: #303133;
  padding: 0 10px 14px 10px;
}
.nav > li > a:hover {
  color: #0056b3;
  text-decoration: none;
}
.nav > .cative > .router-link-exact-active {
  border-bottom: 2px solid #409eff;
} */
/* .nav {
  font-size: 17px;
  padding: 0 15px;
  font-weight: 400;
  color: #303133;
  vertical-align: inherit;
  height: 60px;
  line-height: 60px;
}
.nav > li > .dropdown-toggle {
  color: #606266;
} */
</style>
