<template>
  <!-- Footer Starts -->
    <footer class="wrapper" :class="splashFooter" id="contact">
        <div class="wrapper flexBox contactWrapper contactComponent">
            <h2>Contact</h2>
            <a href="mailto:riley.n.hoffman@gmail.com">riley.n.hoffman@gmail.com</a>
            <SocialComponent />
        </div>
        <!-- contactWrapper Wrapper Ends -->
        <div class="wrapper flexBox bottom">
            <p>Riley Hoffman <span aria-hidden="true">| </span>Web Developer</p>
        </div>
        <!-- Bottom Wrapper Ends -->
    </footer>
    <!-- Footers Ends -->
</template>
<script>
import SocialComponent from '@/components/SocialComponent.vue'
export default {
  data () {
    return {
      preferDark: window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },
  components: {
    SocialComponent
  },
  computed: {
    splashFooter () {
      if (this.$route.path === '/') {
        return 'splashFooter'
      }
      return 'pageFooter'
    }
  }
}
</script>
