<template>
    <form action="https://formspree.io/f/xwkyonza" method="POST">
        <fieldset>
            <legend class="sr-only">Send me an email.</legend>
            <div class="flexBox fieldsetBox">
                <div class="flexBox inputBox">
                    <label for="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name.."
                        enterkeyhint="next"
                    />

                    <label for="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email.."
                        enterkeyhint="next"
                    />
                </div>
                <label for="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Write something.."
                    spellcheck="true"
                ></textarea>
            </div>
        </fieldset>
        <button value="Submit" class="contactFormButton styledButton">
            Submit
        </button>
    </form>
</template>
