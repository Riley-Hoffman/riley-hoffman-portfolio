<template>
  <!-- Footer Starts -->
    <footer class="wrapper flexBox" :class="splashFooter" id="contact">
        <div class="wrapper flexBox contactWrapper contactComponent">
            <h2>Contact</h2>
            <a href="mailto:riley.n.hoffman@gmail.com">riley.n.hoffman@gmail.com</a>
            <SocialComponent />
        </div>
        <!-- contactWrapper Wrapper Ends -->
        <div class="wrapper flexBox bottom">
            <p>Riley Hoffman <span aria-hidden="true">| </span>Web Developer</p>
            <a href="./riley-hoffman-resume.pdf" class="resume">Resume<i class="fa-solid fa-file-arrow-down"></i></a>
        </div>
        <!-- Bottom Wrapper Ends -->
    </footer>
    <!-- Footers Ends -->
</template>
<script>
import SocialComponent from '@/components/SocialComponent.vue'
export default {
  components: {
    SocialComponent
  }
}
</script>
