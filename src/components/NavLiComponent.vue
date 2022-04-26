<template>
    <li
        v-if="path != '/page-not-found' && path != '/:catchAll(.*)'"
        :class="{ col2: path === '/about' || path === '/skills' }"
    >
        <router-link
            class="navLink"
            :to="path"
            :class="[
                navBarColor,
                {
                    aboutLink: path === '/about',
                    projectsLink: path === '/projects',
                    noTransition: noTransition,
                },
            ]"
            >{{ name }}</router-link
        >
    </li>
</template>
<script>
export default {
  props: ['name', 'navBarColor', 'noTransition', 'path']
}
</script>
