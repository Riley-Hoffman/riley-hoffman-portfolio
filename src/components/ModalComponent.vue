<template>
    <Transition>
        <div class="modal" role="dialog" aria-label="Contact Form Dialog Box">
            <button class="modalClose" @click="hideModal">
                <font-awesome-icon
                    aria-hidden="true"
                    class="fa-solid fa-xmark"
                    icon="xmark"
                />
                <span class="sr-only">Close contact form</span>
            </button>
            <FormComponent />
        </div>
    </Transition>
</template>
<script>
import FormComponent from '@/components/FormComponent.vue'
export default {
  components: {
    FormComponent
  },
  props: ['hideModal']
}
</script>
