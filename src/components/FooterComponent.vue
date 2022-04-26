<template>
    <footer class="flexBox transitionBorder" id="contact">
        <div
            class="wrapper flexBox contactWrapper contactComponent"
            v-if="$route.path != '/'"
        >
            <div class="flexBox contactBox">
                <h2 class="contactHeading">Contact</h2>
                <SocialComponent :noTransition="noTransition" />
            </div>
            <div class="formBackground">
                <FormComponent />
            </div>
        </div>
        <button class="styledButton backToTop" @click="backToTop()">
            Back to top <span class="heavy">↥</span>
        </button>
        <div
            class="wrapper flexBox bottom"
            v-bind:class="{ homeBottomMargin: $route.path === '/' && !darkOn }"
        >
            <p>
                Riley Hoffman
                <span class="verticalLine" aria-hidden="true">| </span
                ><span class="webDeveloper">Web Developer</span>
            </p>
            <a
                aria-label="Download my resumay"
                class="resume"
                href="./riley-hoffman-resume.pdf"
                download
            >
                Resume
                <font-awesome-icon
                    aria-hidden="true"
                    class="fa-solid fa-file-arrow-down"
                    icon="file-arrow-down"
                />
            </a>
        </div>
    </footer>
</template>
<script>
import SocialComponent from '@/components/SocialComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
export default {
  components: {
    SocialComponent,
    FormComponent
  },
  props: ['darkOn', 'noTransition'],
  methods: {
    consoleLogNoColorTransition () {
      console.log(this.noTransition)
    },
    backToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
