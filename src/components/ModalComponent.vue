<template>
    <Transition>
        <div class="modal" role="dialog" aria-label="Contact Form Dialog Box">
            <FocusLoop>
                <button class="modalClose" @click="hideModal">
                    <font-awesome-icon
                        aria-hidden="true"
                        icon="xmark"
                    />
                    <span class="sr-only">Close contact form</span>
                </button>
                <FormComponent />
            </FocusLoop>
        </div>
    </Transition>
</template>
<script>
import FormComponent from '@/components/FormComponent.vue'
import { FocusLoop } from '@vue-a11y/focus-loop'
export default {
  components: {
    FocusLoop,
    FormComponent
  },
  props: ['hideModal']
}
</script>
