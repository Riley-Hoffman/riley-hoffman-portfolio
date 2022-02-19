<template>
<form
        action="https://formspree.io/f/xwkyonza"
        method="POST"
      >
      <div class="flexBox inputBox">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
        />
      </div>
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something.."
        ></textarea>

        <button value="Submit" class="contactFormButton">Submit</button>
      </form>
</template>
