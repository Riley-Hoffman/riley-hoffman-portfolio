<template>
  <HeaderComponent />
  <router-view />
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
