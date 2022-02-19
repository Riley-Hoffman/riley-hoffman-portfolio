<template>
 <main id="main" class="homeMain">
    <section class="splash">
      <div class="galaxy">
        <div class="stars"></div>
      </div>
      <div class="wrapper relativeColumnBox">
        <div class="smallFlexBox">
          <div class="flexBox iconContainer">
            <i class="fas fa-water" aria-hidden="true"></i>
          </div>
          <h1>Riley Hoffman</h1>
          <p class="animate__animated animate__backInLeft">
            <span>Web </span><span class="outlined">Developer</span>
          </p>
          <!-- tealContactButton class is to facilitate media query targetting -->
          <button
            class="tealContactButton headerLink"
            @click="toggleModal"
            ><span class="target">Contact<span class="me"> Me</span></span
            ></button>
          <div class="modal" v-if="!showModal">
              <button class="modalClose" @click="toggleModal">
              <i class="fa-solid fa-xmark" aria-hidden="true"></i>
              <span class="sr-only">Close contact form</span>
              </button>
              <FormComponent />
          </div>
          <div class="contactWrapper">
            <SocialComponent />
          </div>
        </div>
      </div>
      <!-- Wrapper Ends -->
      <div class="lightHeroElements">
        <div class="smokeParentContainer">
          <div class="lightBackground">
            <div class="smoke"></div>
            <svg>
              <filter id="wave">
                <feDisplacementMap in="SourceGraphic" scale="18" />
              </filter>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import SocialComponent from '@/components/SocialComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
export default {
  data () {
    return {
      showModal: 'false'
    }
  },
  components: {
    SocialComponent,
    FormComponent
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>
