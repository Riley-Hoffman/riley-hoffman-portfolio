<template>
            <div class="flexBox contactIcons" :class="contactCompHide">
                <a href="https://github.com/Riley-Hoffman">
                    <i class="fab fa-github" aria-hidden="true"></i><span class="sr-only">Github</span>
                </a>
                <a href="https://www.linkedin.com/in/riley-hoffman-014623213">
                    <i class="fab fa-linkedin" aria-hidden="true"></i><span class="sr-only">Linkedin</span>
                </a>
            </div>
</template>
<script>
export default {
  computed: {
    contactCompHide () {
      if (this.$route.path === '/') {
        return 'hide'
      }
      return 'show'
    }
  }
}
</script>
