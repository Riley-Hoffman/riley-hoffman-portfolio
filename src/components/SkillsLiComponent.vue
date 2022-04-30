<template>
    <li v-cloak>
        <div class="skillsIconBox" :class="{ noAnimation: safari }">
            <i :class="icon" aria-hidden="true" v-if="devicon"></i>
            <font-awesome-icon
                aria-hidden="true"
                class="fa-solid"
                :icon="icon"
                v-else-if="!devicon"
            />
        </div>
        <p>{{ skill }}</p>
    </li>
</template>
<script>
export default {
  inject: ['safari'],
  props: ['devicon', 'icon', 'skill']
}
</script>
