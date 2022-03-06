<template>
<main id="main" class="skillsMain">
  <!-- Skills Section Starts -->
        <section class="skills" id="skills">
        <div class="wrapper">
            <div class="flexBox">
                <h1>Skills</h1>
                <ul class="skillsGallery">
                <SkillsListItem
                  v-for="(skill, index) in skills"
                  :key="index"
                  :skill="skill.name"
                  :icon="skill.icon"
                  :devicon="skill.devicon"
                />
                </ul>
            </div>
            </div>
            <!-- Wrapper Ends -->
        </section>
        <!-- Skills Section Ends -->
    </main>
</template>
<script>
import SkillsListItem from '@/components/SkillsListItem.vue'
export default {
  components: {
    SkillsListItem
  },
  data () {
    return {
      safari: navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('OPR') && !navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Android'),
      skills: [
        {
          name: 'HTML5',
          icon: 'devicon-html5-plain',
          devicon: true
        },
        {
          name: 'CSS3',
          icon: 'devicon-css3-plain',
          devicon: true
        },
        {
          name: 'Javascript + ES6',
          icon: 'devicon-javascript-plain',
          devicon: true
        },
        {
          name: 'SASS',
          icon: 'devicon-sass-original',
          devicon: true
        },
        {
          name: 'Accessibility',
          icon: 'universal-access',
          devicon: false
        },
        {
          name: 'React',
          icon: 'devicon-react-original',
          devicon: true
        },
        {
          name: 'Rest API',
          icon: 'left-right',
          devicon: false
        },
        {
          name: 'Github',
          icon: 'devicon-github-original',
          devicon: true
        },
        {
          name: 'Vue.js',
          icon: 'devicon-vuejs-plain',
          devicon: true
        },
        {
          name: 'jQuery',
          icon: 'devicon-jquery-plain-wordmark',
          devicon: true
        },
        {
          name: 'Wordpress',
          icon: 'devicon-wordpress-plain',
          devicon: true
        },
        {
          name: 'Firebase',
          icon: 'devicon-firebase-plain',
          devicon: true
        }
      ]
    }
  }
}
</script>
