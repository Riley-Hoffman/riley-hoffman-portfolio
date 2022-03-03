<template>
 <main id="main" class="homeMain">
    <section class="splash">
      <div class="galaxy">
        <div class="stars"></div>
      </div>
      <div class="wrapper relativeColumnBox">
        <div class="smallFlexBox">
          <div class="flexBox iconContainer">
            <font-awesome-icon icon="water" class="fas fa-water" aria-hidden="true" />
          </div>
          <h1 class="subtleTextGradient">Riley Hoffman</h1>
          <p class="animate__animated animate__backInLeft">
            <span class="subtleTextGradient">Web </span><span class="outlined">Developer</span>
          </p>
          <button
            class="tealContactButton homeButton styledButton"
            @click="toggleModal"
            ><span class="target">Contact<span class="me"> Me</span></span
            ></button>
          <Transition>
            <ModalComponent :showModal="showModal" :toggleModal="toggleModal"  v-if="!showModal" />
          </Transition>
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
import ModalComponent from '@/components/ModalComponent.vue'
export default {
  data () {
    return {
      showModal: 'false'
    }
  },
  components: {
    SocialComponent,
    ModalComponent
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>
