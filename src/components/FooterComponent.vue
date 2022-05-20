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
        <button
            class="styledButton backToTop"
            @click="backToTop"
            v-if="$route.path != '/'"
        >
            Back To top
            <font-awesome-icon
                aria-hidden="true"
                icon="arrow-up"
            />
        </button>
        <div
            class="wrapper flexBox bottom"
            :class="{ homeBottomMargin: $route.path === '/' && !darkOn }"
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
                <svg class="resumeSvg" viewBox="0 0 80 87" width="50">
                    <text y="50">Resume</text>
                </svg>
                <font-awesome-icon
                    aria-hidden="true"
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
    backToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
