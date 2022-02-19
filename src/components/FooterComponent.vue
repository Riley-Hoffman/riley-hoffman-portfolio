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
      <form
        action="https://formspree.io/f/xwkyonza"
        method="POST"
      >
      <div class="flexBox inputBox">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
        />
      </div>
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something.."
        ></textarea>

        <button value="Submit" class="contactFormButton">Submit</button>
      </form>
    </div>
    <!-- contactWrapper Wrapper Ends -->
    <div class="wrapper flexBox bottom">
      <p>Riley Hoffman <span aria-hidden="true">| </span><span class="webDeveloper">Web Developer</span></p>
      <a href="./riley-hoffman-resume.pdf" class="resume"
        >Resume<i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i
      ></a>
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
