<template>
  <div>
    <head-component></head-component>
    <div class="container">
      <div class="content">
        <h1>{{ $t('about') }}</h1>
      </div>
    </div>
    <partner></partner>
    <foot-component></foot-component>
  </div>
</template>

<script>
import HeadComponent from '@/components/HeadComponent'
import Partner from '@/components/Partner'
import FootComponent from '@/components/FootComponent'

export default {
  name: 'About',
  components: { HeadComponent, Partner, FootComponent }
}
</script>

<style scoped>
</style>
