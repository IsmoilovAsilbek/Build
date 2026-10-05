<script setup>
const plans = [
  { name: 'Basic', price: 29, features: ['5 courses access', 'Video lessons', 'Community chat', 'Certificate'], popular: false },
  { name: 'Pro', price: 59, features: ['All courses access', 'Practice tasks with feedback', 'Personal tutor', 'Certificate', 'Career support'], popular: true },
  { name: 'Team', price: 129, features: ['Up to 10 students', 'All Pro features', 'Progress analytics', 'Priority support'], popular: false },
]
</script>

<template>
  <section id="pricing" class="pricing section">
    <div class="container">
      <div v-reveal class="section-head">
        <p class="section-head__eyebrow">Pricing</p>
        <h2 class="section-head__title">Choose your plan</h2>
      </div>
      <div class="pricing-grid">
        <div v-for="(p, i) in plans" :key="p.name" v-reveal="i * 120" class="pricing-grid__card" :class="{ 'is-popular': p.popular }">
          <span v-if="p.popular" class="pricing-card__tag">Most popular</span>
          <h3 class="pricing-card__name">{{ p.name }}</h3>
          <p class="pricing-card__price">${{ p.price }}<small>/month</small></p>
          <ul class="pricing-card__list">
            <li v-for="f in p.features" :key="f">✓ {{ f }}</li>
          </ul>
          <a href="#contacts" class="btn" :class="p.popular ? 'btn--light' : ''">Get started</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; align-items: stretch; }

.pricing-grid__card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 44px 32px;
  border-radius: 12px;
  background: #fff;
  border: 2px solid #f3c6b3;
  transition: transform .4s ease, box-shadow .4s ease;
}

.pricing-grid__card:hover { transform: translateY(-10px); box-shadow: 0 20px 44px rgba(247, 94, 5, .2); }

.pricing-grid__card.is-popular { background: linear-gradient(45deg, #ff3f3a, #f75e05); color: #fff; border-color: transparent; }

.pricing-card__tag {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #1b1b1f;
  color: #fff;
  padding: 5px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.pricing-card__name { font-size: 22px; font-weight: 700; }
.pricing-card__price { font-size: 52px; font-weight: 900; margin: 14px 0 24px; }
.pricing-card__price small { font-size: 16px; font-weight: 500; opacity: .7; }
.pricing-card__list { display: grid; gap: 14px; margin-bottom: 34px; flex: 1; font-size: 16px; }

@media (max-width: 900px) {
  .pricing-grid { grid-template-columns: 1fr; max-width: 460px; margin: 0 auto; }
  .pricing-grid__card { text-align: center; }
}
</style>