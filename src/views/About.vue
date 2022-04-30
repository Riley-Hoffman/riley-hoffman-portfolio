<template>
    <div class="aboutMain mainDiv">
        <section class="about" id="about">
            <div class="wrapper">
                <div class="flexBox about1">
                    <div class="aboutH1box">
                        <div class="flexBox iconContainer">
                            <font-awesome-icon
                                aria-hidden="true"
                                class="fas fa-water"
                                icon="water"
                            />
                        </div>
                        <h1 class="target">About</h1>
                    </div>
                    <figure>
                        <img
                            alt="Headshot of Riley Hoffman with a flower behind his ear."
                            sizes="(max-width: 900px) 100vw, 900px"
                            srcset="
                                https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642773821/headshot3x_qtvzrk.webp 1134w,
                                https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642773821/headshot2x_dh2r9d.webp  575w,
                                https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642773821/headshot1x_n0sioi.webp  400w
                            "
                            src="https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642773821/headshot_xbxsdk.png"
                            title="Riley Hoffman"
                            height="886"
                            width="752"
                        />
                        <figcaption>Photo by Kristen Mommertz</figcaption>
                    </figure>
                </div>
                <div class="flexBox about2">
                    <p>
                        I'm a front-end developer focused on building accessible
                        and responsive web applications. My background in
                        technical troubleshooting and customer service gave me
                        experience responding to user experience, and a wide
                        variety of software and communication skills.
                    </p>
                </div>
            </div>
            <ContactJumpComponent />
        </section>
    </div>
</template>
<script>
import ContactJumpComponent from '@/components/ContactJumpComponent.vue'
export default {
    components: {
        ContactJumpComponent,
    },
}
</script>
