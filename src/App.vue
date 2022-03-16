<template>
    <HeaderComponent />
    <main
        id="main"
        :class="{
            mainH: $route.path === '/',
            mainA: $route.path === '/about',
            mainP: $route.path === '/projects',
            mainS: $route.path === '/skills',
            mainE: $route.path === '/page-not-found',
        }"
    >
        <router-view />
    </main>
    <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  created () {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.showUpdateUI = true
      })
    }
  },
  async accept () {
    this.showUpdateUI = false
    await this.$workbox.messageSW({ type: 'SKIP_WAITING' })
  }
}
</script>
