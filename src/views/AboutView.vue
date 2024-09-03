<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

export default {
  name: 'AboutView',
  components: {
  },
};
</script>

<style scoped>
.about-view {
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
}

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  margin: 2rem;
}

.about-section {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  color: #fff;
}

.about-main {
  grid-row: span 2;
  background-image: url('https://tyra-parring.github.io/homehost-/pexels-tima-miroshnichenko-6262835.jpg'); 
}

.about-right-top {
  background-image: url('https://tyra-parring.github.io/homehost-/pexels-arjivexports-5362404.jpg'); 
}

.about-right-bottom {
  background-image: url('https://tyra-parring.github.io/homehost-/38b56d9c-e41e-480b-af98-27cf497bc289.png'); 
}

.about-content {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 8px;
}

.about-content h2, .about-content h3 {
  font-family: 'Playfair Display', serif;
  color: #d4af37; /* Gold color */
  margin-bottom: 0.5rem;
}

.about-content p {
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #f1f1f1;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .about-main {
    grid-row: span 1;
  }
}
</style>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
}

.about-header {
  background-image: linear-gradient(to bottom, #f7f7f7, #fff);
  padding: 40px;
  text-align: center;
}

.our-story {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.our-story img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 20px;
}

.our-values {
  padding: 40px;
}

.our-values ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.our-values li {
  margin-bottom: 10px;
}

.meet-our-team {
  padding: 40px;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.team-member {
  margin: 20px;
  width: calc(33.33% - 20px);
}

.team-member img {
  width: 100%;
  height: 150px;
  object-fit: contain;
}
</style>