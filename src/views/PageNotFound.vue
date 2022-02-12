<template>
<main id="main">
        <section class="errorSection wrapper">
            <h2>Page Not Found</h2>
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
                                <a class="homeLink404" href="https://rileyhoffman.com/" v-on:mouseover="errorPageMouseOver" v-on:click="errorPageClick">Back to Home</a>
                                <i class="fas fa-long-arrow-alt-right homeLinkArrow animate__animated animate__backInLeft"
                                    aria-hidden="true"></i>
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
