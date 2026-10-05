<script setup>
const steps = [
  { n: '01', title: 'Choose a course', text: 'Browse dozens of programs and pick the direction that fits your goals.' },
  { n: '02', title: 'Sign up', text: 'Create an account, pick a plan and get instant access to the materials.' },
  { n: '03', title: 'Learn with tutors', text: 'Watch lessons, do practice tasks and get feedback from real experts.' },
  { n: '04', title: 'Get a certificate', text: 'Finish the final project and receive a certificate you can show employers.' },
]
</script>

<template>
  <section class="steps section">
    <div class="container">
      <div v-reveal class="section-head">
        <p class="section-head__eyebrow">How it works</p>
        <h2 class="section-head__title">Your path to a new profession</h2>
      </div>
      <div class="steps-grid">
        <div v-for="(s, i) in steps" :key="s.n" v-reveal="i * 120" class="steps-grid__item">
          <span class="steps-item__num">{{ s.n }}</span>
          <h3 class="steps-item__title">{{ s.title }}</h3>
          <p class="steps-item__text">{{ s.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }

.steps-grid__item {
  position: relative;
  padding: 36px 28px;
  border-radius: 10px;
  background: #FDDDCF;
  overflow: hidden;
  transition: transform .4s ease, box-shadow .4s ease;
}

.steps-grid__item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #ff3f3a, #f75e05);
  opacity: 0;
  transition: opacity .4s ease;
}

.steps-grid__item > * { position: relative; }
.steps-grid__item:hover { transform: translateY(-8px); box-shadow: 0 16px 34px rgba(247, 94, 5, .3); }
.steps-grid__item:hover::before { opacity: 1; }
.steps-grid__item:hover { color: #fff; }

.steps-item__num { font-size: 48px; font-weight: 900; opacity: .35; }
.steps-item__title { font-size: 20px; font-weight: 700; margin: 10px 0; }
.steps-item__text { font-size: 15px; line-height: 160%; }

@media (max-width: 1024px) { .steps-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .steps-grid { grid-template-columns: 1fr; } .steps-grid__item { text-align: center; } }
</style>