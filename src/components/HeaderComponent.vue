<template>
    <header class="flexBox">
        <button class="skip-link" :class="focusOutline" @click="main.focus()">
            Skip To Content
        </button>
        <router-link
            class="favLink"
            to="/"
            :class="[favLinkHide, focusOutline]"
        >
            <img
                alt="A black letter R in a teal circle."
                src="../assets/img/android-chrome-512x512.png"
                title="Favicon"
            />
        </router-link>
        <div
            class="wrapper relativeColumnBox"
            v-bind:class="{
                homeRelColBox: $route.path === '/',
                aboutRelColBox: $route.path === '/about',
                projectsRelColBox: $route.path === '/projects',
                skillsRelColBox: $route.path === '/skills',
                errorRelColBox: $route.path === '/page-not-found',
            }"
        >
            <div
                aria-label="Navigation and Colors."
                class="flexBox navBox"
                role="toolbar"
            >
                <nav
                    v-bind:class="{
                        aboutNav: $route.path === '/about',
                        skillsNav: $route.path === '/skills',
                    }"
                >
                    <ul class="mainNavList">
                        <NavLiComponent
                            :key="index"
                            :name="navRoute.name"
                            :navBarColor="navBarColor"
                            :noTransition="noTransition"
                            :path="navRoute.path"
                            v-for="(navRoute, index) in navRoutes"
                        />
                    </ul>
                </nav>
                <label class="toggle-wrapper" v-bind:class="{safariToggle: safari}" for="themeInput">
                    <div class="themeToggleWrapper">
                        <span class="mode flexBox">
                            <span
                                v-bind:class="{
                                    black:
                                        $route.path === '/about' ||
                                        $route.path === '/skills',
                                }"
                                aria-hidden="true"
                                >{{ themeLabel }}</span
                            >
                            <span class="sr-only">Choose Color Theme.</span>
                        </span>
                        <div
                            class="themeToggleBox"
                            v-bind:class="{
                                enabled: darkOn,
                                disabled: !darkOn,
                            }"
                        >
                            <input
                                aria-live="polite"
                                id="themeInput"
                                name="themeInput"
                                type="checkbox"
                                :aria-label="themeSwitchAria"
                                :checked="darkOn"
                                @click="toggleColor()"
                                @keydown="enterToggle"
                            />
                            <span class="flexBox target">
                                <span
                                    class="show"
                                    v-bind:class="{
                                        lightsOff: darkOn,
                                        lightsOn: !darkOn,
                                    }"
                                >
                                    <font-awesome-icon
                                        v-bind:icon="['fa-solid', `${toggleIcon}`]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </span>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </header>
</template>
<script>
import routes from '../router'
import NavLiComponent from './NavLiComponent.vue'
export default {
  components: {
    NavLiComponent
  },
  inject: ['safari'],
  props: [
    'darkOn',
    'main',
    'noTransition',
    'themeLabel',
    'themeSwitchAria',
    'toggleColor',
    'toggleIcon'
  ],
  data () {
    return {
      navRoutes: routes.options.routes
    }
  },
  computed: {
    navBarColor () {
      if (!this.darkOn) {
        return 'black'
      } else if (
        (this.$route.path === '/about' ||
                    this.$route.path === '/skills') &&
                this.darkOn
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
                this.darkOn
      ) {
        return 'blackOutline'
      } else if (
        (this.$route.path === '/' ||
                    this.$route.path === '/projects' ||
                    this.$route.path === '/page-not-found') &&
                this.darkOn
      ) {
        return 'whiteOutline'
      }
      return 'blackOutline'
    }
  },
  methods: {
    enterToggle (e) {
      if (e.keyCode === 13) {
        e.preventDefault()
        e.stopImmediatePropagation()
        this.toggleColor()
      }
    }
  }
}
</script>
