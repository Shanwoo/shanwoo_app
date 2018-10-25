<template>
  <div class="header">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-light bg-white">
        <div class="navbar-header">
            <router-link :to="{ name:'Home' }" class="navbar-brand nav-title">
              <img class="logo" src="static/logo.png"/>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li> -->
            <li class="nav-item active">
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
                <!-- <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a> -->
              </div>
            </li>
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> -->
        </div>
      </nav>
    </div>
    <!-- <nav class="navbar navbar-expand-md navbar-defaul" role="navigation">
      <div class="container">
        <div class="navbar-header">
            <router-link :to="{ name:'Home' }" class="navbar-brand nav-title">
              <img class="logo" src="static/logo.png"/>
            </router-link>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                <i class="fa fa-bars fa-lg"></i>
            </button>
        </div>
        <div id="menu" class="collapse navbar-collapse navbar-right is-collapse">
          <ul class="nav navbar-nav">
                <li class="cative"><router-link :to="{ name:'Home' }">{{ $t('home') }}</router-link></li>
                <li class="cative"><router-link :to="{ name:'Enterprise' }">{{ $t('enterprise') }}</router-link></li>
                <li class="cative"><router-link :to="{ name:'Market' }">{{ $t('market') }}</router-link></li>
                <li class="cative"><router-link :to="{ name:'About' }">{{ $t('about') }}</router-link></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  {{ language }}<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li @click="handleCommand('zh')">简体中文</li>
                        <li @click="handleCommand('en')">English</li>
                    </ul>
                </li>
            </ul>
        </div>
      </div>
    </nav> -->
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
.container {
  margin-bottom: 10px;
}
@media screen and (min-width: 768px) {
  .container {
    padding: 0 10px;
  }
  .navbar-toggle {
    display: none;
  }
}
@media screen and (min-width: 992px) {
  .container {
    padding: 0 60px;
  }
  .el-menu {
    float: right;
  }
}
@media screen and (min-width: 1200px) {
  .container {
    padding: 0 100px;
  }
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
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-toggle {
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
}
.nav > li > a {
  color: #303133;
  padding: 0 10px 14px 10px;
}
.nav > li > a:hover {
  color: #0056b3;
  text-decoration: none;
}
.nav > .cative > .router-link-exact-active {
  border-bottom: 2px solid #409eff;
}
.nav {
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
}
</style>
