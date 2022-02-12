<template>
  <!-- Footer Starts -->
    <footer class="wrapper" id="contact">
        <ContactComponent />
        <!-- contactWrapper Wrapper Ends -->
        <div class="wrapper flexBox bottom">
            <p>Riley Hoffman <span aria-hidden="true">| </span>Web Developer</p>
        </div>
        <!-- Bottom Wrapper Ends -->
    </footer>
    <!-- Footers Ends -->
</template>
<script>
import ContactComponent from '@/components/ContactComponent.vue'
export default {
  components: {
    ContactComponent
  }
}
</script>
