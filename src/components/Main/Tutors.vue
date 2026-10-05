<script setup>
const tutors = [
  { name: 'Jerome Bell', role: 'Marketing', hue: 8 },
  { name: 'Marvin McKinney', role: 'UI/UX Design', hue: 330 },
  { name: 'Leslie Alexander', role: 'Management', hue: 30 },
  { name: 'Jenny Wilson', role: 'Web Development', hue: 150 },
]
const initials = (n) => n.split(' ').map((w) => w[0]).join('')
</script>

<template>
  <section class="tutors section">
    <div class="container">
      <div v-reveal class="section-head">
        <p class="section-head__eyebrow">Our team</p>
        <h2 class="section-head__title">Meet the tutors</h2>
      </div>
      <div class="tutors-grid">
        <div v-for="(t, i) in tutors" :key="t.name" v-reveal="i * 100" class="tutors-grid__card">
          <div class="tutors-card__avatar" :style="{ background: `linear-gradient(135deg, hsl(${t.hue} 90% 62%), hsl(${t.hue + 25} 90% 52%))` }">
            {{ initials(t.name) }}
          </div>
          <h3 class="tutors-card__name">{{ t.name }}</h3>
          <p class="tutors-card__role">{{ t.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tutors { background: #fff7f3; }
.tutors-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }

.tutors-grid__card {
  text-align: center;
  background: #fff;
  padding: 36px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, .06);
  transition: transform .4s ease, box-shadow .4s ease;
}

.tutors-grid__card:hover { transform: translateY(-8px); box-shadow: 0 16px 34px rgba(0, 0, 0, .12); }

.tutors-card__avatar {
  width: 110px;
  height: 110px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  font-weight: 900;
  color: #fff;
  transition: transform .5s ease;
}

.tutors-grid__card:hover .tutors-card__avatar { transform: rotate(360deg) scale(1.08); }
.tutors-card__name { font-size: 20px; font-weight: 700; }
.tutors-card__role { margin-top: 6px; color: #5d5d66; font-size: 15px; }

@media (max-width: 1024px) { .tutors-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .tutors-grid { grid-template-columns: 1fr; } }
</style>