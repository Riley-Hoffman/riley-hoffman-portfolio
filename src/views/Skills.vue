<template>
    <div class="skillsMain mainDiv">
        <section class="skills" id="skills">
            <div class="wrapper">
                <div class="flexBox">
                    <h1>Skills</h1>
                    <ul class="skillsGallery">
                        <SkillsLiComponent
                            :devicon="skill.devicon"
                            :icon="skill.icon"
                            :key="index"
                            :skill="skill.name"
                            v-for="(skill, index) in skills"
                        />
                    </ul>
                </div>
            </div>
            <ContactJumpComponent />
        </section>
    </div>
</template>
<script>
import SkillsLiComponent from '@/components/SkillsLiComponent.vue'
import ContactJumpComponent from '@/components/ContactJumpComponent.vue'
export default {
  components: {
    SkillsLiComponent,
    ContactJumpComponent
  },
  data () {
    return {
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
