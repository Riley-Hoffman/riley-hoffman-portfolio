<template>
    <li
        v-if="path != '/page-not-found' && path != '/:catchAll(.*)'"
        :class="{ col2: path === '/about' || path === '/skills' }"
    >
        <router-link
            class="navLink"
            :to="path"
            :class="{ white: darkOn, black: !darkOn }"
            >{{ name }}</router-link
        >
    </li>
</template>
<script>
export default {
  props: ['darkOn', 'name', 'navBarColor', 'noTransition', 'path']
}
</script>
