<template>
  <li v-cloak>
    <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
      <i :class="icon" aria-hidden="true" v-if="devicon"></i>
      <font-awesome-icon :icon="icon" class="fa-solid" aria-hidden="true" v-else-if="!devicon" />
    </div>
    <p>{{ skill }}</p>
  </li>
</template>
<script>
export default {
  props: ['icon', 'skill', 'devicon'],
  data () {
    return {
      safari: navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('OPR') && !navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Android')
    }
  }
}
</script>
