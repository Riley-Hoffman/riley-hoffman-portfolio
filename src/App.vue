<template>
    <div
        class="colorContainer"
        v-bind:class="{ darkModeOn: darkOn }"
        ref="colorContainer"
    >
        <HeaderComponent
            :main="this.$refs.main"
            :toggleColor="toggleColor"
            :darkOn="darkOn"
            :toggle="toggle"
            :lightDarkLabel="lightDarkLabel"
            @toggling="themeSwitching()"
            @blur="handleToggleBlur()"
            :noTransition="noTransition"
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
        <FooterComponent :noTransition="noTransition" />
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
      toggle: '',
      lightDarkLabel: '',
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
      if (!this.darkOn) {
        this.toggleDark()
      } else if (this.darkOn) {
        this.toggleLight()
      } else {
        this.toggleDark()
      }
    },
    toggleDark () {
      this.darkOn = true
      this.toggle = 'moon'
      this.lightDarkLabel = 'Dark Mode Selected'
    },
    toggleLight () {
      this.darkOn = false
      this.toggle = 'sun'
      this.lightDarkLabel = 'Light Mode Selected'
      localStorage.setItem('toggle', 'sun')
    },
    themeSwitching () {
      this.noTransition = true
      setTimeout(() => {
        this.noTransition = false
      }, 1000)
    },
    handleToggleBlur () {
      this.noTransition = false
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
    if (localStorage.toggle) {
      this.toggle = localStorage.toggle
    }
  },
  watch: {
    toggle (toggleIcon) {
      localStorage.toggle = toggleIcon
      if (this.toggle === 'moon') {
        this.toggleDark()
      } else if (this.toggle === 'sun') {
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
