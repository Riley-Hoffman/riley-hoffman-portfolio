<template>
    <header class="flexBox">
        <router-link to="#main" class="skip-link" :class="focusOutline"
            >Skip To Content</router-link
        >
        <router-link
            class="favLink"
            to="/"
            :class="[favLinkHide, focusOutline]"
        >
            <img
                src="../assets/img/android-chrome-512x512.png"
                alt="A black letter R in a teal circle."
                title="Favicon"
            />
        </router-link>
        <div class="wrapper relativeColumnBox">
            <div class="flexBox navBox">
                <nav
                    v-bind:class="{
                        aboutNav: $route.path === '/about',
                        skillsNav: $route.path === '/skills',
                    }"
                >
                    <ul class="mainNavList">
                        <NavLiComponent
                            v-for="(navRoute, index) in navRoutes"
                            :key="index"
                            :path="navRoute.path"
                            :name="navRoute.name"
                            :navBarColor="navBarColor"
                        />
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
import routes from '../router'
import NavLiComponent from './NavLiComponent.vue'
export default {
  data () {
    return {
      preferDark: window.matchMedia('(prefers-color-scheme: dark)')
        .matches,
      navRoutes: routes.options.routes
    }
  },
  components: {
    NavLiComponent
  },
  computed: {
    navBarColor () {
      if (!this.preferDark) {
        return 'black'
      } else if (
        (this.$route.path === '/about' ||
                    this.$route.path === '/skills') &&
                this.preferDark
      ) {
        return 'black'
      }
      return 'white'
    },
    favLinkHide () {
      if (this.$route.path === '/') {
        return 'hide'
      }
      return 'show'
    },
    focusOutline () {
      if (
        (this.$route.path === '/about' ||
                    this.$route.path === '/skills') &&
                this.preferDark
      ) {
        return 'blackOutline'
      } else if (
        (this.$route.path === '/' ||
                    this.$route.path === '/projects' ||
                    this.$route.path === '/page-not-found') &&
                this.preferDark
      ) {
        return 'whiteOutline'
      }
      return 'blackOutline'
    }
  }
}
</script>
