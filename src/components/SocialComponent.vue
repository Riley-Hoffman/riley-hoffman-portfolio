<template>
    <div class="flexBox contactIcons">
        <a
            class="contactIcon"
            href="https://github.com/Riley-Hoffman"
            rel="nofollow"
            :class="{ noTransition: noTransition }"
        >
            <font-awesome-icon
                aria-hidden="true"
                :icon="['fab', 'github']"
            />
            <span class="sr-only">Github</span>
        </a>
        <a
            class="contactIcon"
            href="https://www.linkedin.com/in/riley-hoffman-014623213"
            rel="nofollow"
            :class="{ noTransition: noTransition }"
        >
            <font-awesome-icon
                aria-hidden="true"
                :icon="['fab', 'linkedin']"
            />
            <span class="sr-only">Linkedin</span>
        </a>
    </div>
</template>
<script>
export default {
  props: ['noTransition']
}
</script>
