<template>
<main id="main">
  <!-- Skills Section Starts -->
        <section class="skills" id="skills">
        <div class="wrapper">
            <div class="flexBox">
                <h1>Skills</h1>
                <ul class="skillsGallery">
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="devicon-html5-plain" aria-hidden="true"></i>
                        </div>
                        <p>HTML5</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="devicon-css3-plain" aria-hidden="true"></i>
                        </div>
                        <p>CSS3</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="devicon-javascript-plain" aria-hidden="true"></i>
                        </div>
                        <p>Javascript + ES6</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="devicon-sass-original" aria-hidden="true"></i>
                        </div>
                        <p>SASS</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="fas fa-universal-access" aria-hidden="true"></i>
                        </div>
                        <p>Accessibility</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="devicon-react-original" aria-hidden="true"></i>
                        </div>
                        <p>React</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="fas fa-arrows-alt-h" aria-hidden="true"></i>
                        </div>
                        <p>Rest API</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="devicon-github-original" aria-hidden="true"></i>
                        </div>
                        <p>Github</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="devicon-vuejs-plain" aria-hidden="true"></i>
                        </div>
                        <p>Vue.js</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="devicon-jquery-plain-wordmark" aria-hidden="true"></i>
                        </div>
                        <p>jQuery</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="devicon-wordpress-plain" aria-hidden="true"></i>
                        </div>
                        <p>Wordpress</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox">
                            <i class="devicon-firebase-plain" aria-hidden="true"></i>
                        </div>
                        <p>Firebase</p>
                    </li>
                </ul>
            </div>
            </div>
            <!-- Wrapper Ends -->
        </section>
        <!-- Skills Section Ends -->
    </main>
</template>
<script>
export default {
  data () {
    return {
      safari: navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('OPR') && !navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Android')
    }
  },
  methods: {
    checkForSafari (e) {
      // Safari specific control

      // Turn of rotate animation on skills for Safari user bc it does not render correctly

      if (this.safari) {
        e.target.classList.add('noAnimation').children.classList.add('noAnimation')
      }
    }
  }
}
</script>
