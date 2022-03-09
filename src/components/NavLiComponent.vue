<template>
    <li v-if="path != '/page-not-found' && path != '/:catchAll(.*)'" v-bind:class="{ col2: path === '/about' || path === '/skills'}">
        <router-link class="navLink" :to="path" :class="[navBarColor, {aboutLink: path === '/about', projectsLink: path === '/projects'}]">{{name}}</router-link>
    </li>
</template>
<script>
export default {
  props: ['key', 'path', 'name', 'navBarColor']
}
</script>
