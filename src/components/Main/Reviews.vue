<script setup>
const reviews = [
  { name: 'Alisher K.', text: 'Clear lessons, great tutors. In three months I changed my job and doubled my income.', course: 'UI/UX Design' },
  { name: 'Madina R.', text: 'The practice tasks are the best part. Feedback came within a day every time.', course: 'Google Ads' },
  { name: 'Sardor T.', text: 'I started from zero and built my first Vue app in a month. Highly recommended!', course: 'Web Development' },
]
</script>

<template>
  <section id="reviews" class="reviews section">
    <div class="container">
      <div v-reveal class="section-head">
        <p class="section-head__eyebrow">Testimonials</p>
        <h2 class="section-head__title">What our students say</h2>
      </div>
      <div class="reviews-grid">
        <div v-for="(r, i) in reviews" :key="r.name" v-reveal="i * 120" class="reviews-grid__card">
          <p class="reviews-card__stars">★★★★★</p>
          <p class="reviews-card__text">“{{ r.text }}”</p>
          <div class="reviews-card__author">
            <span class="reviews-card__avatar">{{ r.name[0] }}</span>
            <div>
              <h3 class="reviews-card__name">{{ r.name }}</h3>
              <p class="reviews-card__course">{{ r.course }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews { background: #FDDDCF; }
.reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }

.reviews-grid__card {
  background: #fff;
  padding: 36px 30px;
  border-radius: 12px;
  transition: transform .4s ease, box-shadow .4s ease;
}

.reviews-grid__card:hover { transform: translateY(-8px) rotate(-.6deg); box-shadow: 0 18px 40px rgba(0, 0, 0, .12); }

.reviews-card__stars { color: #f75e05; font-size: 20px; letter-spacing: 3px; }
.reviews-card__text { margin: 16px 0 26px; font-size: 16px; line-height: 165%; }
.reviews-card__author { display: flex; align-items: center; gap: 14px; }

.reviews-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff3f3a, #f75e05);
  color: #fff;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reviews-card__name { font-size: 16px; font-weight: 700; }
.reviews-card__course { font-size: 14px; color: #5d5d66; }

@media (max-width: 900px) {
  .reviews-grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
  .reviews-card__author { justify-content: center; }
  .reviews-grid__card { text-align: center; }
}
</style>