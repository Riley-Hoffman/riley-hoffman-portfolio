<template>
    <header
        ref="header"
        class="flexBox"
        :class="{
            homeHeader: $route.path === '/',
            blackBackground: darkOn,
            whiteBackground: !darkOn && $route.path != '/',
            relativeHeader: $route.path != '/',
            scrolledToMain: scrolledToMain && $route.path != '/projects',
            transitionOpacity: scrolledToFooter,
            transparent: scrolledToFooter && !scrolledToTop,
        }"
    >
        <button
            class="skip-link"
            :class="focusOutline"
            @click="main.querySelectorAll('a, button')[0].focus()"
        >
            Skip To Content
        </button>
        <router-link
            class="favLink"
            to="/"
            :class="[favLinkHide, focusOutline]"
            v-if="!scrolledToMain && $route.path != '/'"
        >
            <img
                alt="A black letter R in a teal circle."
                src="../assets/img/android-chrome-512x512.png"
                title="Favicon"
            />
        </router-link>
        <div
            class="wrapper relativeColumnBox"
            :class="{
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
                <Slide
                    right
                    ref="slide"
                    :closeOnNavigation="true"
                    :class="{
                        aboutNav: $route.path === '/about',
                        skillsNav: $route.path === '/skills',
                        darkBackground: darkOn,
                        lightBackground: !darkOn,
                    }"
                    v-if="scrolledToMain && !scrolledToTop"
                >
                    <NavContentComponent :="this.$props" />
                </Slide>
                <nav
                    :class="{
                        aboutNav: $route.path === '/about',
                        skillsNav: $route.path === '/skills',
                        transparent: scrolledToMain && !scrolledToTop,
                    }"
                    v-if="scrolledToTop || scrolledToFooter"
                >
                    <NavContentComponent :="this.$props" />
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
import { Slide } from 'vue3-burger-menu'
import NavContentComponent from './NavContentComponent'
export default {
  components: {
    Slide,
    NavContentComponent
  },
  inject: ['safari'],
  props: [
    'darkOn',
    'main',
    'noTransition',
    'scrolledToFooter',
    'scrolledToMain',
    'scrolledToTop',
    'themeLabel',
    'themeSwitchAria',
    'toggleColor',
    'toggleIcon'
  ],
  data () {
    return {
      menuOpen: false,
      closeMenu: Slide.methods.closeMenu,
      isClosed: Slide.components.Menu.props.width
    }
  },
  computed: {
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
  watch: {
    hideStripOnTopScroll () {
      if (window.scrollY < 40) {
        clickBody()
      }
      function clickBody () {
        if (window.scrollY > 40) {
          document.querySelector('body').click()
        }
      }
    }
  }
}
</script>
