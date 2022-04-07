<template>
    <div
        class="colorContainer"
        v-bind:class="{
            darkModeOn: darkOn,
            heightVh: $route.path === '/',
            noBackground: $route.path === '/' && !darkOn,
        }"
        ref="colorContainer"
    >
        <HeaderComponent
            :darkOn="darkOn"
            :main="this.$refs.main"
            :noTransition="noTransition"
            :themeLabel="themeLabel"
            :themeSwitchAria="themeSwitchAria"
            :toggleColor="toggleColor"
            :toggleIcon="toggleIcon"
        />
        <main
            id="main"
            ref="main"
            tabindex="0"
            :class="{
                mainH: $route.path === '/',
                mainA: $route.path === '/about',
                mainP: $route.path === '/projects',
                mainS: $route.path === '/skills',
                mainE: $route.path === '/page-not-found',
            }"
        >
            <router-view :noTransition="noTransition" />
        </main>
        <FooterComponent :noTransition="noTransition" :darkOn="darkOn" />
    </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  data () {
    return {
      darkOn: true,
      toggleIcon: '',
      themeLabel: '',
      themeSwitchAria: '',
      safariCheck:
                navigator.userAgent.includes('Safari') &&
                !navigator.userAgent.includes('OPR') &&
                !navigator.userAgent.includes('Chrome') &&
                !navigator.userAgent.includes('Android'),
      noTransition: false
    }
  },
  provide () {
    return {
      safari: this.safariCheck
    }
  },
  methods: {
    toggleColor () {
      this.noTransition = true
      if (!this.darkOn) {
        this.toggleDark()
      } else if (this.darkOn) {
        this.toggleLight()
      } else {
        this.toggleDark()
      }
      setTimeout(() => {
        this.noTransition = false
      }, 500)
    },
    toggleDark () {
      this.darkOn = true
      this.toggleIcon = 'moon'
      this.themeLabel = 'Dark On'
      this.themeSwitchAria = 'Dark Mode On'
    },
    toggleLight () {
      this.darkOn = false
      this.toggleIcon = 'sun'
      this.themeLabel = 'Dark Off'
      this.themeSwitchAria = 'Dark Mode Off'
      localStorage.setItem('toggle', 'sun')
    }
  },
  created () {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.showUpdateUI = true
      })
    }
  },
  mounted () {
    if (localStorage.toggleIcon) {
      this.toggleIcon = localStorage.toggleIcon
    } else {
      this.toggleIcon = 'moon'
    }
  },
  watch: {
    toggleIcon (faIcon) {
      localStorage.toggleIcon = faIcon
      if (this.toggleIcon === 'moon') {
        this.toggleDark()
      } else if (this.toggleIcon === 'sun') {
        this.toggleLight()
      }
    }
  },
  async accept () {
    this.showUpdateUI = false
    await this.$workbox.messageSW({ type: 'SKIP_WAITING' })
  }
}
</script>
