"use client";

import "./style.scss";

export default function AuaHelpCards() {
  return (
    <section className="aua-help">
      <div className="aua-help__inner">
        <article className="aua-help__card aua-help__card--intro">
          <h3 className="aua-help__title">
            We can
            <br />
            help you to
          </h3>
        </article>

        <article className="aua-help__card aua-help__card--dark">
          <div className="aua-help__icon">^</div>
          <h3 className="aua-help__subtitle">1. Elevate</h3>
          <p className="aua-help__text">
            Having a professional website shows you mean business, and a
            well-put-together online look makes people trust your brand more.
          </p>
        </article>

        <article className="aua-help__card aua-help__card--dark">
          <div className="aua-help__icon">✕</div>
          <h3 className="aua-help__subtitle">2. Engage</h3>
          <p className="aua-help__text">
            A good and easy-to-use website makes it simple for people to find
            what they need and do what you’d like them to do.
          </p>
        </article>

        <article className="aua-help__card aua-help__card--accent">
          <div className="aua-help__icon aua-help__icon--dark">⬡</div>
          <h3 className="aua-help__subtitle aua-help__subtitle--dark">
            3. Convert
          </h3>
          <p className="aua-help__text aua-help__text--dark">
            Don’t just count on social media. A website made to turn visitors
            into buyers can really boost your sales by making sure the right
            people see you.
          </p>
        </article>
      </div>
    </section>
  );
}
