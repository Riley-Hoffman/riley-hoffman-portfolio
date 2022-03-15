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
            <a :href="liveUrl" target="_blank" rel="nofollow">Live</a>
            <a :href="gitUrl" target="_blank" rel="nofollow">Repo</a>
        </div>
        <div class="imgBox">
            <a
                :href="liveUrl"
                title="Visit live site."
                target="_blank"
                rel="nofollow"
            >
                <img
                    :srcset="srcSet"
                    sizes="(max-width: 900px) 100vw, 900px"
                    width="887"
                    height="887"
                    :href="imgUrl"
                    :alt="imgAlt"
                    :title="title"
                />
                <div class="oval"></div>
            </a>
        </div>
    </li>
</template>
<script>
export default {
  props: [
    'title',
    'skills',
    'description',
    'liveUrl',
    'gitUrl',
    'srcSet',
    'imgUrl',
    'imgAlt'
  ]
}
</script>
