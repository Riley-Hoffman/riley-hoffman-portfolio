<template>
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
    <label
        class="toggle-wrapper"
        :class="{ safariToggle: safari }"
        for="themeInput"
    >
        <div class="themeToggleWrapper">
            <span class="mode flexBox">
                <span
                    :class="{
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
                :class="{
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
                    @click="toggleColor"
                    @keydown="enterToggle"
                />
                <span class="flexBox target">
                    <span
                        class="show"
                        :class="{
                            lightsOff: darkOn,
                            lightsOn: !darkOn,
                        }"
                    >
                        <font-awesome-icon
                            :icon="['fa-solid', `${toggleIcon}`]"
                            aria-hidden="true"
                        />
                    </span>
                </span>
            </div>
        </div>
    </label>
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
