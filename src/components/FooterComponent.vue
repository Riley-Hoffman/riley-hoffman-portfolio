<template>
  <!-- Footer Starts -->
  <footer class="wrapper flexBox" :class="splashFooter" id="contact">
    <div class="wrapper flexBox contactWrapper contactComponent">
      <div class="flexBox contactBox">
        <h2 class="contactHeading">Contact</h2>
        <a href="mailto:riley.n.hoffman@gmail.com" style="display: none"
          >riley.n.hoffman@gmail.com</a
        >
        <SocialComponent />
      </div>
      <FormComponent />
    </div>
    <!-- contactWrapper Wrapper Ends -->
    <div class="wrapper flexBox bottom">
      <p>Riley Hoffman <span aria-hidden="true">| </span><span class="webDeveloper">Web Developer</span></p>
      <a href="./riley-hoffman-resume.pdf" class="resume">
      Resume
      <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
      </a>
    </div>
    <!-- Bottom Wrapper Ends -->
  </footer>
  <!-- Footers Ends -->
</template>
<script>
import SocialComponent from '@/components/SocialComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
export default {
  components: {
    SocialComponent,
    FormComponent
  }
}
</script>
