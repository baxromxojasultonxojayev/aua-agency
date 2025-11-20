"use client";

import "./style.scss";

export default function AuaAdvantagesNumbers() {
  return (
    <section className="aua-advantages" data-aos="fade-up">
      <div className="aua-advantages__inner">
        {/* LEFT CARD */}
        <article className="aua-advantages__card aua-advantages__card--left">
          <h2 className="aua-advantages__title">
            Our advantages
            <br />
            are in the numbers
          </h2>

          <p className="aua-advantages__text">
            Our websites get results—from boosting traffic to improving
            conversion rates to generating online leads. Take a look at the
            advantages graphics design for websites have for the overall
            performance experienced by some of our clients.
          </p>

          <div className="aua-advantages__image">
            <div className="aua-advantages__image-inner">
              <span className="aua-advantages__image-tag">Case studies</span>
            </div>
          </div>
        </article>

        {/* RIGHT CARD */}
        <article className="aua-advantages__card aua-advantages__card--right">
          <div className="aua-advantages__stats">
            {/* top-left 100+ */}
            <div className="aua-advantages__stat aua-advantages__stat--100">
              <div className="aua-advantages__stat-number">100+</div>
              <div className="aua-advantages__stat-label">
                Websites Expertly Crafted and Launched by Our Team
              </div>
            </div>

            {/* top-right 13+ */}
            <div className="aua-advantages__stat aua-advantages__stat--13">
              <div className="aua-advantages__stat-number">13+</div>
              <div className="aua-advantages__stat-label">
                Years of Specialization in Web Design and Development
              </div>
            </div>

            {/* center 20+ */}
            <div className="aua-advantages__stat aua-advantages__stat--20">
              <div className="aua-advantages__stat-number">20+</div>
              <div className="aua-advantages__stat-label">
                Awards from leading Design Award Contests
              </div>
            </div>

            {/* bottom-left 800% */}
            <div className="aua-advantages__stat aua-advantages__stat--800">
              <div className="aua-advantages__stat-number">800%</div>
              <div className="aua-advantages__stat-label">
                Surge of website traffic
              </div>
            </div>

            {/* bottom-right 99% */}
            <div className="aua-advantages__stat aua-advantages__stat--99">
              <div className="aua-advantages__stat-number">99%</div>
              <div className="aua-advantages__stat-label">
                Unanimous Client Approval of Our Web Design Services.
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
