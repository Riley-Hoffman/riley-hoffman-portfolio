<template>
    <li class="projectBox" v-cloak>
        <div class="projectInfo">
            <h2 translate="no">
                {{ title }}
            </h2>
            <h3 translate="no">
                {{ skills }}
            </h3>
            <p v-html="description"></p>
            <h4>
                <span translate="no">{{ title }}</span> Links:
            </h4>
            <a :href="liveUrl" target="_blank" rel="nofollow"
                ><span aria-hidden="true">Live</span
                ><span class="sr-only">Lyve</span></a
            >
            <a :href="gitUrl" target="_blank" rel="nofollow">Repo</a>
        </div>
        <div class="imgBox">
            <a
                class="projImgLink"
                rel="nofollow"
                target="_blank"
                title="Visit live site."
                :href="liveUrl"
                @focus="focusScroll"
            >
                <img
                    :alt="imgAlt"
                    :href="imgUrl"
                    :srcset="srcSet"
                    :title="title"
                    height="887"
                    width="887"
                    sizes="(max-width: 900px) 100vw, 900px"
                />
                <div class="oval"></div>
            </a>
        </div>
    </li>
</template>
<script>
export default {
  props: [
    'description',
    'gitUrl',
    'imgAlt',
    'imgUrl',
    'liveUrl',
    'skills',
    'srcSet',
    'title'
  ],
  methods: {
    focusScroll (e) {
      e.target.scrollIntoView()
    }
  }
}
</script>
