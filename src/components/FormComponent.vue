<template>
    <form action="https://formspree.io/f/xwkyonza" method="POST">
        <fieldset>
            <legend class="sr-only">Send me an email.</legend>
            <div class="flexBox fieldsetBox">
                <div class="flexBox inputBox">
                    <label for="name">Name:</label>
                    <input
                        class="test"
                        enterkeyhint="next"
                        id="name"
                        name="name"
                        placeholder="Your name.."
                        type="text"
                        required
                    />

                    <label for="email">Email:</label>
                    <input
                        class="test"
                        enterkeyhint="next"
                        id="email"
                        name="email"
                        placeholder="Your email.."
                        type="email"
                        required
                    />
                </div>
                <label for="message">Message:</label>
                <textarea
                    class="test"
                    id="message"
                    name="message"
                    placeholder="Write something.."
                    spellcheck="true"
                    required
                ></textarea>
            </div>
        </fieldset>
        <button value="Submit" class="contactFormButton styledButton">
            Submit
        </button>
    </form>
</template>
