<template>
    <div class="iconContainer wrapper flexBox contactJump">
        <button class="styledButton" @click="jumpScroll()">Contact Me</button>
        <font-awesome-icon
            icon="arrow-down"
            class="fa-solid arrow-down"
            aria-hidden="true"
        />
    </div>
</template>
<script>
export default {
  data () {
    return {
      reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)')
        .matches
    }
  },
  methods: {
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
