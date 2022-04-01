<template>
    <li v-cloak>
        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
            <i :class="icon" aria-hidden="true" v-if="devicon"></i>
            <font-awesome-icon
                :icon="icon"
                class="fa-solid"
                aria-hidden="true"
                v-else-if="!devicon"
            />
        </div>
        <p>{{ skill }}</p>
    </li>
</template>
<script>
export default {
  inject: ['safari'],
  props: ['icon', 'skill', 'devicon']
}
</script>
