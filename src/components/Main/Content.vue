<script setup>
import { ref } from 'vue'

const email = ref('')
const sent = ref(false)

const submit = () => {
  if (!email.value.includes('@')) return
  sent.value = true
  email.value = ''
  setTimeout(() => (sent.value = false), 4000)
}
</script>

<template>
  <section id="contacts" class="contact section">
    <div class="container">
      <div v-reveal class="contact-box">
        <h2 class="contact-box__title">Ready to start learning?</h2>
        <p class="contact-box__text">Leave your email and we will send you a free lesson and a consultation offer.</p>
        <div class="contact-box__form">
          <input v-model="email" type="email" class="contact-box__input" placeholder="Your email" @keyup.enter="submit" />
          <button class="btn btn--light" @click="submit">Get consultation</button>
        </div>
        <p class="contact-box__ok" :class="{ 'is-show': sent }">Thank you! We will contact you soon.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-box {
  text-align: center;
  padding: 70px 30px;
  border-radius: 16px;
  color: #fff;
  background: linear-gradient(45deg, #ff3f3a, #f75e05, #ff3f3a);
  background-size: 200% 200%;
  animation: shift 8s ease infinite;
}

.contact-box__title { font-size: 40px; font-weight: 900; line-height: 130%; }
.contact-box__text { margin: 14px auto 34px; max-width: 520px; font-size: 17px; line-height: 160%; }

.contact-box__form { display: flex; justify-content: center; flex-wrap: wrap; gap: 14px; }

.contact-box__input {
  width: 100%;
  max-width: 340px;
  height: 48px;
  padding: 0 18px;
  border: 2px solid transparent;
  border-radius: 6px;
  outline: none;
  transition: border-color .3s ease, box-shadow .3s ease;
}

.contact-box__input:focus { border-color: #1b1b1f; box-shadow: 0 0 0 4px rgba(255, 255, 255, .3); }

.contact-box__ok { margin-top: 18px; font-weight: 700; opacity: 0; transition: opacity .4s ease; }
.contact-box__ok.is-show { opacity: 1; }

@keyframes shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }

@media (max-width: 600px) {
  .contact-box { padding: 48px 20px; }
  .contact-box__title { font-size: 28px; }
  .contact-box__form .btn { width: 100%; max-width: 340px; }
}
</style>