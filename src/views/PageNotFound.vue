<template>
<main id="main" class="pageNotFoundMain">
        <section class="errorSection wrapper">
            <h1>Page Not Found</h1>
            <div class="errorContentBox flexBox">
                <figure class="errorIcon">
                    <img src="../assets/img/404.svg"
                        alt="An open empty folder with a sad face and speech bubble contain an X.">
                </figure>
                <p class="errorP">Oops, nothing was found at this location. <span class="ownLine">All the content is on
                        the homepage.</span></p>
            </div>
            <div class="wrapper relativeColumnBox">
                <div class="flexBox navBox errorNav">
                    <nav>
                        <ul>
                            <li>
                                <router-link class="homeLink404" to="/" v-on:mouseover="errorPageMouseOver" v-on:click="errorPageClick">Back to Home</router-link>
                                <font-awesome-icon icon="arrow-right-long" class="fa-solid fa-arrow-right-long homeLinkArrow animate__animated animate__backInLeft" aria-hidden="true" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
  data () {
    return {
      reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)')
    }
  },
  methods: {
    errorPageMouseOver (e) {
      console.log(e)
      if (!this.reduceMotion || !this.reduceMotion.matches) {
        e.target.nextSibling.classList.remove('animate__backInLeft')
        e.target.nextSibling.classList.add('animate__headShake')
      }
    },
    errorPageClick (e) {
      if (!this.reduceMotion || !this.reduceMotion.matches) {
        e.preventDefault()
        e.target.nextSibling.classList.remove('animate__headShake')
        e.target.nextSibling.classList.add('animate__backOutRight')
        setTimeout(() => {
          window.location.replace('https://rileyhoffman.com/')
        }, 550)
      }
    }
  }
}
</script>
