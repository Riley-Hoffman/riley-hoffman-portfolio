<template>
    <header
        class="flexBox"
        v-bind:class="{
            absoluteHeader:
                (scrolledToFooter && $route.path === '/projects') ||
                (scrolledToFooter &&
                    ($route.path === '/about' ||
                        $route.path === '/skills' ||
                        $route.path === '/page-not-found')),
        }"
    >
        <button class="skip-link" :class="focusOutline" @click="main.focus()">
            Skip To Content
        </button>
        <router-link
            class="favLink"
            to="/"
            :class="[favLinkHide, focusOutline]"
            v-if="!scrolledToMain"
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
                    <Slide
                        right
                        v-bind:class="{
                            aboutNav: $route.path === '/about',
                            skillsNav: $route.path === '/skills',
                            blackBackground:
                                darkOn &&
                                $route.path != '/about' &&
                                $route.path != '/skills',
                            whiteBackground:
                                !darkOn ||
                                $route.path === '/about' ||
                                $route.path === '/skills',
                        }"
                        v-if="scrolledToMain"
                    >
                        <NavContentComponent
                            :darkOn="darkOn"
                            :noTransition="noTransition"
                            :scrolledToFooter="scrolledToFooter"
                            :scrolledToMain="scrolledToMain"
                            :themeLabel="themeLabel"
                            :themeSwitchAria="themeSwitchAria"
                            :toggleColor="toggleColor"
                            :toggleIcon="toggleIcon"
                        />
                    </Slide>
                <nav
                    v-bind:class="{
                        aboutNav: $route.path === '/about',
                        skillsNav: $route.path === '/skills',
                    }"
                    v-if="!scrolledToMain && !scrolledToFooter"
                >
                    <NavContentComponent
                        :darkOn="darkOn"
                        :noTransition="noTransition"
                        :scrolledToFooter="scrolledToFooter"
                        :scrolledToMain="scrolledToMain"
                        :themeLabel="themeLabel"
                        :themeSwitchAria="themeSwitchAria"
                        :toggleColor="toggleColor"
                        :toggleIcon="toggleIcon"
                    />
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
    'themeLabel',
    'themeSwitchAria',
    'toggleColor',
    'toggleIcon'
  ],
  computed: {
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
  }
}
</script>
