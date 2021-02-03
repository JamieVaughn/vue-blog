<script>
export default {
    name: 'Join',
    data: {
        joined: ''
    },
    props: ['env'],
    mounted: function() {
        let status = (window || globalThis).localStorage.getItem('joinedwjv')
        if(status === 'success') this.joined = true
    },
    methods: {
        recaptchaCallback(){
            document.querySelector('footer form input[type=submit]').removeAttribute('disabled');
        }
    }
}
</script>
<template>
    <section id="ContactMe" href="#ContactMe" v-bind:class="{hidden: joined}">
        
        <form id="ajax-contact" method="post" v-bind:class="env"
        action="https://getsimpleform.com/messages?form_api_token=8d73f78e270ace7eeda7529329d6a348">
        <input type='hidden' />
            <h3>Join for updates by email! <span class='dismiss' onclick="dismissJoin()">╳</span></h3>
            <div id="form-feedback" class="hidden">Submitted successfully! Thank you! I'll be in touch shortly.</div>

            <input name="name" type="name" id="name" required>
            <label class="name" for="name">Your Name:</label>
            
            <input name="email" type="email" id="email" pattern=".+@+.+\.[a-z]{2,5}$" required>
            <label class="email" for="email">Your Email:</label>
            <div class="controls">
                <div class="g-recaptcha" 
                data-sitekey="6Ldh-8kUAAAAAMYG8-BxodEZ4zxcn9uV8H4LKMOd"
                data-callback="recaptchaCallback"
                ></div>
                <input type="submit" onsubmit="postMsg" onclick="dismissJoin(event, 'success')" disabled>
            </div>
        </form>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>        
    </section>
</template>
<style scoped>
    section {
    padding: 2rem 1rem 0;
}
section form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
}
section form h3 {
    display: flex;
    margin: 8px 0;
}
section form h3 .dismiss {
    margin-left: auto;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 100%;
    padding: 5px 7px;
    font-size: 14px;
}
section form .g-recaptcha > div {
    margin: 0 auto;
}
section form input[disabled] {
    cursor: not-allowed;
    filter: blur(1.5px);
}
.hidden {
    display: none;
}
#form-feedback {
    color: #4dac86;
    margin-bottom: 0.5rem;
}
section form label {
    transform: translate(5px, -25px);
    transition: transform 350ms;
    margin: 0 0.4rem 0 0;
    background: none;
}
section form label.message {
    transform: translate(5px, -30px);
}
section form input:focus,
section form input:valid,
section form.post input {
    color: white;
}
section form.post input:focus,
section form.post input:valid,
section form input {
    color: #222;
}
section form input:focus:invalid +label {
    color: rgb(238, 113, 138);
    transform: translate(0, -50px);
}
section form input[type=email]:invalid ~ div .g-recaptcha,
section form input[type=email]:empty ~ div .g-recaptcha {
    display: none;
}
section form input[type=email]:valid ~ div .g-recaptcha {
    display: block;
}
section form input:valid +label,
section form input:not(:empty) +label {
    transform: translate(0, -50px);
}
section form input:out-of-range {
    transform: translate(0, -50px);
}
section form textarea:valid +label {
    transform: translate(0, -80px);
}
section form input[type="email"], 
section form input[type="name"] {
    padding: 0.25rem 0.5rem;
    outline: none;
    border-style: none;
    background: transparent;
    border-right: 1px solid steelblue;
    border-bottom: 1px solid steelblue;
    border-bottom-right-radius: 5px;
    margin: 1rem 0 0;
}
section form input[type="submit"] {
    background: transparent;
    border: 2px solid steelblue;
    border-radius: 28px;
    padding: 0.5rem;
    color: steelblue;
    margin: 0.5rem 1rem;
    width: 50%;
    font-size: 28px;
    min-width: 275px;
}
section form .controls {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    transform: scale(0.8);
}
</style>