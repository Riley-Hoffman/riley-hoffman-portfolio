<template>
    <div
        class="colorContainer"
        :class="{
            darkModeOn: darkOn,
            heightVh: $route.path === '/',
            noBackground: $route.path === '/' && !darkOn,
            sideNav: scrolledToMain && !scrolledToTop,
        }"
        ref="colorContainer"
    >
        <Transition>
            <HeaderComponent
                :darkOn="darkOn"
                :main="this.$refs.main"
                :noTransition="noTransition"
                :scrolledToFooter="scrolledToFooter"
                :scrolledToMain="scrolledToMain"
                :scrolledToTop="scrolledToTop"
                :themeLabel="themeLabel"
                :themeSwitchAria="themeSwitchAria"
                :toggleColor="toggleColor"
                :toggleIcon="toggleIcon"
            />
        </Transition>
        <main
            id="main"
            ref="main"
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
        <FooterComponent
            :noTransition="noTransition"
            :darkOn="darkOn"
            ref="footer"
        />
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
      noTransition: false,
      safariCheck:
                navigator.userAgent.includes('Safari') &&
                !navigator.userAgent.includes('OPR') &&
                !navigator.userAgent.includes('Chrome') &&
                !navigator.userAgent.includes('Android'),
      scrolledToFooter: false,
      scrolledToMain: false,
      scrolledToTop: true,
      themeLabel: '',
      themeSwitchAria: '',
      toggleIcon: ''
    }
  },
  provide () {
    return {
      safari: this.safariCheck
    }
  },
  methods: {
    handleScroll () {
      const scrollWithFooter =
                window.scrollY + this.$refs.footer.$el.scrollHeight
      if (window.scrollY > 40) {
        this.scrolledToMain = true
      } else if (window.scrollY < 40) {
        this.scrolledToMain = false
      }
      if (scrollWithFooter >= this.$refs.footer.$el.offsetTop + 400) {
        this.scrolledToFooter = true
      } else {
        this.scrolledToFooter = false
      }
      if (window.scrollY < 40) {
        this.scrolledToTop = true
      } else {
        this.scrolledToTop = false
      }
    },
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
    window.addEventListener('scroll', this.handleScroll)
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
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
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
    await this.$workbox.messageSW({
      type: 'SKIP_WAITING'
    })
  }
}
</script>
