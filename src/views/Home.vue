<template>
    <div class="homeMain mainDiv">
        <section class="splash">
            <div class="galaxy" @click="hideModal">
                <div class="stars"></div>
            </div>
            <div
                class="wrapper relativeColumnBox homeBodyRelColBox"
                v-bind:class="{ static: showModal }"
            >
                <div class="smallFlexBox">
                    <div class="flexBox iconContainer">
                        <font-awesome-icon
                            aria-hidden="true"
                            class="fas fa-water"
                            icon="water"
                        />
                    </div>
                    <h1 class="subtleTextGradient">
                        Riley Hoffman
                        <span
                            class="animate__animated animate__backInLeft subtleTextShadow"
                        >
                            <span class="web subtleTextGradient">Web </span
                            ><span class="outlined">Developer</span>
                        </span>
                    </h1>
                    <button
                        class="tealContactButton homeButton styledButton"
                        ref="contactButton"
                        @click="openModal"
                    >
                        <span class="target"
                            >Contact<span class="me"> Me</span></span
                        >
                    </button>
                    <ModalComponent
                        :hideModal="hideModal"
                        v-bind:class="{ openModal: showModal }"
                        v-if="showModal"
                    />
                    <div class="contactWrapper">
                        <SocialComponent :noTransition="noTransition" />
                    </div>
                </div>
            </div>
            <div class="lightHeroElements">
                <div class="smokeParentContainer">
                    <div class="lightBackground">
                        <div class="smoke"></div>
                        <svg>
                            <filter id="wave">
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    scale="18"
                                />
                            </filter>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import SocialComponent from '@/components/SocialComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
export default {
  components: {
    SocialComponent,
    ModalComponent
  },
  props: ['noTransition'],
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    openModal () {
      if (!this.showModal) {
        this.showModal = !this.showModal
      }
    },
    hideModal () {
      if (this.showModal) {
        this.showModal = !this.showModal
        this.$refs.contactButton.focus()
      }
    }
  }
}
</script>
