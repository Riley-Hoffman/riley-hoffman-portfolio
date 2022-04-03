<template>
    <div class="iconContainer wrapper flexBox contactJump">
        <button
            class="styledButton"
            v-on="{
                mouseover: contactJumpMoveOver,
                focus: contactJumpMoveOver,
                click: jumpScroll,
            }"
        >
            Contact Me
        </button>
        <font-awesome-icon
            icon="arrow-down"
            class="fa-solid arrow-down"
            aria-hidden="true"
            v-bind:class="
                !this.reduceMotion && {
                    animate__animated: this.hover,
                    animate__bounce: this.hover,
                }
            "
        />
    </div>
</template>
<script>
export default {
  data () {
    return {
      reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)')
        .matches,
      hover: false
    }
  },
  methods: {
    contactJumpMoveOver () {
      this.hover = true
    },
    jumpScroll () {
      const top = this.$el.offsetTop
      if (!this.reduceMotion) {
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        })
      } else {
        window.scrollTo({
          top: top
        })
      }
    }
  }
}
</script>
