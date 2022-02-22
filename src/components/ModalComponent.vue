<template>
    <div class="modal">
        <button class="modalClose" @click="toggleModal">
        <font-awesome-icon icon="xmark" class="fa-solid fa-xmark" aria-hidden="true" />
        <span class="sr-only">Close contact form</span>
        </button>
        <FormComponent />
    </div>
</template>
<script>
import FormComponent from '@/components/FormComponent.vue'
export default {
  props: ['showModal', 'toggleModal'],
  components: {
    FormComponent
  }
}
</script>
