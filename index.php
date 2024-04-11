<?php
include('database/conn.php');
include('assets/header.php');
?>

<!-- HERO -->

<section id="hero" class="container flex-row">
    <div
        class="hero_content"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="600"
    >
        <h1 class="title">Welcome to Our Company!</h1>
        <p class="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem repellat
            et deserunt odit laboriosam ipsa soluta perspiciatis, eos corrupti
            neque?
        </p>
        <a href="" class="btn btn-primary">Get Started</a>
    </div>
    <div
        class="hero_img"
        data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration="600"
    >
        <img src="images/hero.png" class="heropng" alt="" />
    </div>
</section>

<!-- HERO -->

<!-- ABOUT -->

    <section id="about" class="container flex-center flex-column">
      <h5 class="section-subheading" data-aos="zoom-in-up">
        build trust first
      </h5>
      <h2 class="section-heading text-center" data-aos="zoom-in-up">
        Control your business with a single tap
      </h2>
      <div class="features text-center">
        <div
          class="feature"
          style="--color: #fe6786"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div class="feature_icon">
            <i class="fas fa-anchor"></i>
          </div>
          <h3 class="feature_title">Complete business controll</h3>
          <p class="feature_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatem, eaque reprehenderit deserunt harum expedita
            laudantium quidem, corporis earum non numquam quos minus neque, sunt
            sit mollitia necessitatibus. Quia perferendis delectus magnam,
            possimus consectetur inventore facere modi sequi eum rem neque vitae
            adipisci ab ipsa aliquam enim laudantium, qui molestiae.
          </p>
        </div>
        <div
          class="feature"
          style="--color: #5cd8a5"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div class="feature_icon">
            <i class="fa-regular fa-file-lines"></i>
          </div>
          <h3 class="feature_title">Critical analytics and report</h3>
          <p class="feature_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatem, eaque reprehenderit deserunt harum expedita
            laudantium quidem, corporis earum non numquam quos minus neque, sunt
            sit mollitia necessitatibus. Quia perferendis delectus magnam,
            possimus consectetur inventore facere modi sequi eum rem neque vitae
            adipisci ab ipsa aliquam enim laudantium, qui molestiae.
          </p>
        </div>
        <div
          class="feature"
          style="--color: #fea95b"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div class="feature_icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3 class="feature_title">Business Growth</h3>
          <p class="feature_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatem, eaque reprehenderit deserunt harum expedita
            laudantium quidem, corporis earum non numquam quos minus neque, sunt
            sit mollitia necessitatibus. Quia perferendis delectus magnam,
            possimus consectetur inventore facere modi sequi eum rem neque vitae
            adipisci ab ipsa aliquam enim laudantium, qui molestiae.
          </p>
        </div>
      </div>
      <div class="about_details flex-center">
        <div
          class="about_details-content"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Most innovative creative team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            similique facilis nemo architecto error, pariatur id ad repellat,
            animi quia quidem culpa iusto? Tempore harum, error nulla iste
            ducimus quis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dicta amet laudantium, magnam consequatur quibusdam
            non veniam perspiciatis minus commodi consectetur cum quas autem
            facilis neque? Enim neque porro praesentium.
          </p>
          <a href="#" class="btn btn-primary"> Get Started </a>
        </div>
        <div
          class="about_details-img"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src="images/about.png" alt="" />
        </div>
      </div>
    </section>

    <!-- ABOUT -->

    <!-- SERVICES -->
    <section
      id="services"
      style="
        background: url(images/services-bg.png);
        background-repeat: no-repeat;
        background-position: top;
        background-size: 100% 80%;
      "
    >
      <div class="container">
        <h5 class="section-subheading" data-aos="zoom-in-up">What we do</h5>
        <h2 class="section-heading right" data-aos="zoom-in-up">
          Services to solve all kind of business problems
        </h2>
        <div class="services">
          <div class="service" data-aos="fade-up">
            <div class="service_icon">
              <img src="images/squares.png" alt="" />
            </div>
            <h3 class="services_title">Business Automation</h3>
            <p class="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div class="arrow-icon">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
          <div class="service" data-aos="fade-up">
            <div class="service_icon">
              <img src="images/shopping-cart.png" alt="" />
            </div>
            <h3 class="services_title">Ecommerce Support</h3>
            <p class="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div class="arrow-icon">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
          <div class="service" data-aos="fade-up">
            <div class="service_icon">
              <img src="images/video-camera.png" alt="" />
            </div>
            <h3 class="services_title">Video Production</h3>
            <p class="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div class="arrow-icon">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
          <div class="service" data-aos="fade-up">
            <div class="service_icon">
              <img src="images/headphones.png" alt="" />
            </div>
            <h3 class="services_title">Realtime Support</h3>
            <p class="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div class="arrow-icon">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
          <div class="service" data-aos="fade-up">
            <div class="service_icon">
              <img src="images/placeholder.png" alt="" />
            </div>
            <h3 class="services_title">Location Marking</h3>
            <p class="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div class="arrow-icon">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
          <div class="service" data-aos="fade-up">
            <div class="service_icon">
              <img src="images/upload.png" alt="" />
            </div>
            <h3 class="services_title">File Upload</h3>
            <p class="service_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              delectus laborum at, tenetur deserunt dolore animi eos libero a
              sapiente cumque aliquam? Libero, eum quisquam labore esse sit
              rerum nostrum.
            </p>
            <div class="arrow-icon">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->

    <!-- PROJECTS -->

    <section
      id="projects"
      style="
        background: url(images/projects-bg.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        background-attachment: fixed;
      "
    >
      <div class="container">
        <h5 class="section-subheading" data-aos="zoom-in-up">our projects</h5>
        <h2 class="section-heading" data-aos="zoom-in-up">
          check the real innovation od problem solving
        </h2>
        <div class="projects">
          <div class="project" data-aos="fade-right">
            <div class="project_img">
              <img src="images/project-1.png" alt="" />
            </div>
            <div class="project_content">
              <h3 class="project_category">Development</h3>
              <h3 class="project_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                molestiae.
              </h3>
              <p class="project_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                doloribus nam odit amet asperiores odio reiciendis aut facere
                corrupti quod.
              </p>
              <a href="#" class="btn btn-secondary">View details</a>
            </div>
          </div>

          <div class="project" data-aos="fade-left">
            <div class="project_img">
              <img src="images/project-2.png" alt="" />
            </div>
            <div class="project_content">
              <h3 class="project_category">Development</h3>
              <h3 class="project_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                molestiae.
              </h3>
              <p class="project_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                doloribus nam odit amet asperiores odio reiciendis aut facere
                corrupti quod.
              </p>
              <a href="#" class="btn btn-secondary">View details</a>
            </div>
          </div>

          <div class="project" data-aos="fade-right">
            <div class="project_img">
              <img src="images/project-3.png" alt="" />
            </div>
            <div class="project_content">
              <h3 class="project_category">Development</h3>
              <h3 class="project_title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                molestiae.
              </h3>
              <p class="project_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                doloribus nam odit amet asperiores odio reiciendis aut facere
                corrupti quod.
              </p>
              <a href="#" class="btn btn-secondary">View details</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->

    <!-- TEAM -->

    <section id="team" class="container">
      <h5 class="section-subheading text-center" data-aos="zoom-in-up">
        Meet our team
      </h5>
      <h2 class="section-heading text-center right left" data-aos="zoom-in-up">
        Awsome people with great business skills
      </h2>
      <div class="members">
        <div class="member" data-aos="zoom-out">
          <div class="member_img">
            <img src="images/member-1.png" alt="" />
          </div>
          <div class="member_content">
            <h1>John Doe</h1>
            <p>Web Developer</p>
          </div>
        </div>

        <div class="member" data-aos="zoom-out">
          <div class="member_img">
            <img src="images/member-2.png" alt="" />
          </div>
          <div class="member_content">
            <h1>John Doe</h1>
            <p>Web Developer</p>
          </div>
        </div>

        <div class="member" data-aos="zoom-out">
          <div class="member_img">
            <img src="images/member-3.png" alt="" />
          </div>
          <div class="member_content">
            <h1>John Doe</h1>
            <p>Web Developer</p>
          </div>
        </div>

        <div class="member" data-aos="zoom-out">
          <div class="member_img">
            <img src="images/member-4.png" alt="" />
          </div>
          <div class="member_content">
            <h1>John Doe</h1>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM -->

    <!-- TESTIMONIALS -->

    <section
      id="testimonial"
      style="
        background: url(assets/img/testimonials.jpg);
        background-repeat: no-repeat;
        background-position: right;
        background-size: 100%;
      "
      data-aos="zoom-out-up"
    >
      <div class="container flex-row">
        <div class="testimonials-wrapper">
          <p class="quotes">
            <i class="fas fa-quote-left"></i>
          </p>
          <p class="section-subheading">testimonial;</p>
          <div class="testimonials">
            <div class="testimonial">
              <h1 class="testimonial_title">They are awesome</h1>
              <p class="testimonial_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis quibusdam cum quod rerum error nesciunt totam amet?
                Omnis, quis quas?
              </p>
              <div class="testimonial_author">
                <h3>John Doe</h3>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
          <div class="testimonial-navigation">
            <span class="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="testimonials_img">
          <img src="images/testimonials.png" alt="" />
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->

    <!-- CONTACT -->

    <section
      id="contact"
      style="
        background: url(images/contact-bg.png);
        background-repeat: no-repeat;
        background-position: right;
        background-size: contain;
      "
    >
      <div class="container">
        <h5 class="section-subheading text-center" data-aos="zoom-in-up">
          contact us
        </h5>
        <h2
          class="section-heading text-center left right"
          data-aos="zoom-in-up"
        >
          Stay connected with us for any reason
        </h2>
        <div class="contact">
          <form action="" class="contact_form" data-aos="zoom-in-right">
            <h1>Write us a message</h1>
            <input type="text" placeholder="your name" required />
            <input type="email" placeholder="your email" required />
            <input type="text" placeholder="subject" required />
            <textarea rows="5" required> your message</textarea>
            <button class="btn btn-primary">Send Message</button>
          </form>
          <div class="contact_details" data-aos="zoom-in-left">
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="details">
              <div class="detail">
                <div class="detail_icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="detail_content">
                  <h3>Phone</h3>
                  <p>+123456789</p>
                </div>
              </div>
              <div class="detail">
                <div class="detail_icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="detail_content">
                  <h3>Email</h3>
                  <p>abc@gmail.com</p>
                </div>
              </div>
              <div class="detail">
                <div class="detail_icon">
                  <i class="fas fa-map-marked-alt"></i>
                </div>
                <div class="detail_content">
                  <h3>Address</h3>
                  <p>123, lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->

<?php
include('assets/footer.php')
?>
