import React from "react";

import Button from "elements/Button";
import Header from "parts/Header";


export default function Homepage() {
    return (
      <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <section className="hero ilustration-section-01">
        <div class="container-sm">
          <div class="hero-inner section-inner">
            <div class="hero-content">
              <h1
                class="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                Landing template for startups
              </h1>
              <div class="container-xs">
                <p
                  class="mt-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="400"
                >
                  Our landing page template works on all
                  devices, so you only have to set it up
                  once, and get beautiful results forever.
                </p>
              </div>
            </div>
            <div
              class="hero-figure reveal-from-bottom illustration-element-01"
              data-reveal-value="20px"
              data-reveal-delay="800"
            >
              <img
                class="has-shadow"
                src="images/hero-image.png"
                alt="Hero image"
                width="896"
                height="504"
              />
            </div>
          </div>
        </div>
        </section>
      </main>
      </div>
    )
}
