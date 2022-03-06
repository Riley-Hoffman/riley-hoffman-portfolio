<template>
<main id="main" class="skillsMain">
  <!-- Skills Section Starts -->
        <section class="skills" id="skills">
        <div class="wrapper">
            <div class="flexBox">
                <h1>Skills</h1>
                <ul class="skillsGallery">
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <i class="devicon-html5-plain" aria-hidden="true"></i>
                        </div>
                        <p>HTML5</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <i class="devicon-css3-plain" aria-hidden="true"></i>
                        </div>
                        <p>CSS3</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <i class="devicon-javascript-plain" aria-hidden="true"></i>
                        </div>
                        <p>Javascript + ES6</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <i class="devicon-sass-original" aria-hidden="true"></i>
                        </div>
                        <p>SASS</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <font-awesome-icon icon="universal-access" class="fa-solid fa-universal-access" aria-hidden="true" />
                        </div>
                        <p>Accessibility</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <i class="devicon-react-original" aria-hidden="true"></i>
                        </div>
                        <p>React</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <font-awesome-icon icon="left-right" class="fa-solid fa-left-right" aria-hidden="true" />
                        </div>
                        <p>Rest API</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <i class="devicon-github-original" aria-hidden="true"></i>
                        </div>
                        <p>Github</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <i class="devicon-vuejs-plain" aria-hidden="true"></i>
                        </div>
                        <p>Vue.js</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <i class="devicon-jquery-plain-wordmark" aria-hidden="true"></i>
                        </div>
                        <p>jQuery</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
                            <i class="devicon-wordpress-plain" aria-hidden="true"></i>
                        </div>
                        <p>Wordpress</p>
                    </li>
                    <li v-on:mouseover="checkForSafari">
                        <div class="skillsIconBox" v-bind:class="{ noAnimation: this.safari }">
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
  }
}
</script>
