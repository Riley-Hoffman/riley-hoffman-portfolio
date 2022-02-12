<template>
  <section class="splash">
    <div class="galaxy">
      <div class="stars"></div>
    </div>
    <div class="wrapper relativeColumnBox">
      <div class="smallFlexBox">
        <div class="flexBox iconContainer">
          <i class="fas fa-water" aria-hidden="true"></i>
        </div>
        <h1>Riley Hoffman</h1>
        <p class="animate__animated animate__backInLeft">
          <span>Web </span><span class="outlined">Developer</span>
        </p>
        <!-- tealContactButton class is to facilitate media query targetting -->
        <a
          href="mailto:riley.n.hoffman@gmail.com"
          class="tealContactButton headerLink"
          ><span class="target">Contact<span class="me"> Me</span> </span
          ><i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i
        ></a>
        <div class="contactWrapper">
          <SocialComponent />
        </div>
      </div>
    </div>
    <!-- Wrapper Ends -->
    <div class="lightModeHeaderImage">
      <div class="bubbleParentContainer">
        <div class="scrollingBackground">
          <div class="circle"></div>
          <div class="circle2"></div>
          <svg>
            <filter id="wave">
              <feTurbulence
                x="0"
                y="0"
                baseFrequency="0.009"
                numOctaves="1"
                seed="2"
                type="fractalNoise"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="40s"
                  values="0.02;0.005;0.02"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="18" />
            </filter>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SocialComponent from '@/components/SocialComponent.vue'
export default {
  components: {
    SocialComponent
  }
}
</script>
