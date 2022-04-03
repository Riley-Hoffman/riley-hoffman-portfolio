<template>
    <div class="flexBox contactIcons">
        <a
            class="contactIcon"
            :class="{ noTransition: noTransition }"
            href="https://github.com/Riley-Hoffman"
            rel="nofollow"
        >
            <font-awesome-icon
                :icon="['fab', 'github']"
                class="fab fa-github"
                aria-hidden="true"
            />
            <span class="sr-only">Github</span>
        </a>
        <a
            class="contactIcon"
            :class="{ noTransition: noTransition }"
            href="https://www.linkedin.com/in/riley-hoffman-014623213"
            rel="nofollow"
        >
            <font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="fab fa-linkedin"
                aria-hidden="true"
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
