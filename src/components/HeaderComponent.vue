<template>
<!-- Header Starts -->
    <header>
            <router-link to="#main" class="skip-link">Skip To Content</router-link>
            <div class="wrapper relativeColumnBox">
                <div class="flexBox navBox">
                    <nav>
                        <ul class="mainNavList">
                            <li class="col1">
                                <router-link class="navLink" to="/" :class="navBarColor">Home</router-link>
                            </li>
                            <li class="col2">
                                <router-link class="navLink aboutLink" to="/about" :class="navBarColor">About</router-link>
                            </li>
                            <li class="col3">
                                <router-link class="navLink projectsLink" to="/projects" :class="navBarColor">Projects</router-link>
                            </li>
                            <li class="col1">
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
    }
  }
}
</script>
