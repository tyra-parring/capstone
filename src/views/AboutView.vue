<template>
  <div class="about-page">
    <header class="about-header">
      <h1>Welcome to Silver Diamond Jewelry</h1>
      <p>
        At Silver Diamond Jewelry, we're passionate about providing our customers with the finest quality jewelry that shines bright. Our mission is to make every moment special with our exquisite collection of silver and diamond pieces.
      </p>
    </header>
    <section class="our-story">
      <h2>Our Story</h2>
      <p>
        Our journey began with a passion for jewelry-making and a commitment to excellence. Our team of skilled artisans and designers work tirelessly to craft each piece with precision and attention to detail. We're dedicated to creating jewelry that not only sparkles but also tells a story.
      </p>
      <img src="https://tyra-parring.github.io/host-/image/pexels-tima-miroshnichenko-6263155.jpg" alt="Our Story Image">
      <img src="https://tyra-parring.github.io/host-/image/pexels-tima-miroshnichenko-6263068.jpg" class="img-1" alt="Our Story Image">
      <img src="https://tyra-parring.github.io/host-/image/pexels-tima-miroshnichenko-6262840.jpg" class="img-1" alt="Our Story Image">
    </section>
    <section class="our-values">
      <h2>Our Values</h2>
      <ul>
        <li>Quality: We're dedicated to delivering exceptional quality in every piece of jewelry we create.</li>
        <li>Customer Satisfaction: Your happiness is our top priority, and we strive to exceed your expectations.</li>
        <li>Sustainability: We're committed to responsible sourcing and environmentally-friendly practices.</li>
        <li>Innovation: We continuously push the boundaries of jewelry design and craftsmanship to bring you unique and exquisite pieces.</li>
      </ul>
    </section>
    <section class="meet-our-team">
      <h2>Meet Our Team</h2>
      <div class="team-members">
        <div class="team-member">
          <img src="https://tyra-parring.github.io/host-/image/7c7781a9-4dd5-4602-b25d-9bc98bbe035a.png" alt="Team Member 1">
          <h3>Henry Cevil</h3>
          <p>Founder & CEO</p>
          <p>
            Henry is a jewelry enthusiast with a passion for creating unique and exquisite pieces. He oversees the design and production process to ensure every piece meets our high standards.
          </p>
        </div>
        <div class="team-member">
          <img src="https://tyra-parring.github.io/host-/image/270a2d0b-1dd3-4940-a922-4478a6d879af.png" alt="Team Member 2">
          <h3>Jane Skyyes</h3>
          <p>Designer & Artisan</p>
          <p>
            Jane is a skilled designer and artisan with years of experience in jewelry-making. She brings her creativity and attention to detail to every piece she crafts.
          </p>
        </div>
        <div class="team-member">
          <img src="https://tyra-parring.github.io/host-/image/19b769ea-e4cf-4178-8448-8f1e54b8bb66.png" alt="Team Member 3">
          <h3>John DeVito</h3>
          <p>Jewelry Maker & Craftsman</p>
          <p>
            John is a skilled jewelry maker and craftsman with a passion for creating unique and intricate pieces. He combines traditional techniques with modern designs to produce truly exceptional jewelry.
          </p>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <h2>What Our Customers Say</h2>
      <div class="testimonial-slider">
        <div class="testimonial">
          <p>
            "I'm absolutely thrilled with my new necklace! The quality is exceptional, and the design is stunning. I've received so many compliments already!"
          </p>
          <p>Anastascia R.</p>
        </div>
        <div class="testimonial">
          <p>
            "I was blown away by the customer service at Silver Diamond Jewelry. They went above and beyond to ensure I was happy with my purchase."
          </p>
          <p>Josh K.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  text-align: center;
  background-image: url(https://tyra-parring.github.io/host-/image/smoke-texture-wallpaper-dark-background-min.jpg);
  background-size: cover;
  background-attachment: scroll;
  background-position: center;
  color: white;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); 
  z-index: 1; 
}

.about-header {
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

.img-1{
  object-position: 0 70% ;
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
  object-fit: contain
}

.testimonials {
  padding-bottom: 1.2em;
}
</style>