<template>
  <footer class="flexBox" id="contact">
    <div class="wrapper flexBox contactWrapper contactComponent">
      <div class="flexBox contactBox">
        <h2 class="contactHeading">Contact</h2>
        <SocialComponent />
      </div>
      <div class="formBackground">
        <FormComponent />
      </div>
    </div>
    <div class="wrapper flexBox bottom">
      <p>Riley Hoffman <span class="verticalLine" aria-hidden="true">| </span><span class="webDeveloper">Web Developer</span></p>
      <a href="./riley-hoffman-resume.pdf" class="resume" aria-label="Download my resumay" download>
      Resume
      <font-awesome-icon icon="file-arrow-down" class="fa-solid fa-file-arrow-down" aria-hidden="true" />
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
  }
}
</script>
