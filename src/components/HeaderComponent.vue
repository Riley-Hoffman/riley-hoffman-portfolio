<template>
    <header class="flexBox">
      <router-link to="#main" class="skip-link" :class="focusOutline">Skip To Content</router-link>
      <router-link class="favLink" to="/" :class="[favLinkHide, focusOutline]">
      <img src="../assets/img/android-chrome-512x512.png" alt="A black letter R in a teal circle." title="Favicon" />
      </router-link>
        <div class="wrapper relativeColumnBox">
          <div class="flexBox navBox">
            <nav>
              <ul class="mainNavList">
                <li>
                  <router-link class="navLink" to="/" :class="navBarColor">Home</router-link>
                </li>
                <li class="col2">
                  <router-link class="navLink aboutLink" to="/about" :class="navBarColor">About</router-link>
                </li>
                <li>
                  <router-link class="navLink projectsLink" to="/projects" :class="navBarColor">Projects</router-link>
                </li>
                <li class="col2">
                  <router-link class="navLink" to="/skills" :class="navBarColor">Skills</router-link>
                  </li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
</template>
<script>
export default {
  data () {
    return {
      preferDark: window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },
  computed: {
    navBarColor () {
      if (!this.preferDark) {
        return 'black'
      } else if ((this.$route.path === '/about' || this.$route.path === '/skills') && (this.preferDark)) {
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
      if ((this.$route.path === '/about' || this.$route.path === '/skills') && (this.preferDark)) {
        return 'blackOutline'
      } else if ((this.$route.path === '/' || this.$route.path === '/projects' || this.$route.path === '/page-not-found') && (this.preferDark)) {
        return 'whiteOutline'
      }
      return 'blackOutline'
    }
  }
}
</script>
