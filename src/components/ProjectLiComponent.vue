<template>
<li class="projectBox">
    <div class="projectInfo">
        <span translate="no">
            <h2>
                {{ title }}
            </h2>
            <h3>
                {{ skills }}
            </h3>
        </span>
            <p>
                {{ description }}
            </p>
            <h4><span translate="no">{{ title }}</span> Links:</h4>
            <a :href="liveUrl" target="_blank" rel="nofollow">Live</a>
            <a :href="gitUrl" target="_blank" rel="nofollow">Repo</a>
    </div>
    <div class="imgBox">
        <a :href="liveUrl" title="Visit live site." target="_blank" rel="nofollow">
        <img
            :srcset="srcSet"
            sizes="(max-width: 900px) 100vw, 900px"
            width="887"
            height="887"
            :href="imgUrl"
            :alt="imgAlt" :title="title"
            >
            <div class="oval"></div>
        </a>
    </div>
</li>
</template>
<script>
export default {
  props: ['title', 'skills', 'description', 'liveUrl', 'gitUrl', 'srcSet', 'imgUrl', 'imgAlt']
}
</script>
