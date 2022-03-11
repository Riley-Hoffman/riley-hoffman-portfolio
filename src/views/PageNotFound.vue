<template>
  <main id="main" class="pageNotFoundMain">
    <section class="errorSection wrapper">
      <h1>Page Not Found</h1>
      <div class="errorContentBox flexBox">
        <figure class="errorIcon">
          <img src="../assets/img/404.svg" alt="An open empty folder with a sad face and speech bubble contain an X.">
        </figure>
        <p class="errorP">Oops, nothing was found at this location. <span class="ownLine">All the content is on the homepage.</span></p>
      </div>
      <div class="wrapper relativeColumnBox">
        <div class="flexBox navBox errorNav">
          <nav>
            <ul>
              <li>
                <router-link class="homeLink404"
                  :to="errorPageClick"
                  v-on="{
                  mouseover: errorPageMouseOver,
                  focus: errorPageMouseOver,
                  click: errorPageClick
                  }"
                >Back to Home</router-link>
                <font-awesome-icon
                  icon="arrow-right-long"
                  class="fa-solid fa-arrow-right-long homeLinkArrow animate__animated animate__backInLeft"
                  v-bind:class="!this.reduceMotion && { animate__headShake: this.hover, animate__backOutRight: this.click }"
                  aria-hidden="true"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import router from '../router'
export default {
  data () {
    return {
      reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      hover: false,
      click: false
    }
  },
  methods: {
    errorPageMouseOver () {
      this.hover = true
    },
    errorPageClick () {
      if (!this.reduceMotion) {
        this.click = true
        setTimeout(() => router.push('/'), 550)
      } else {
        router.push('/')
      }
    }
  }
}
</script>
