"use client";

import {
  Code2,
  PanelsTopLeft,
  Rocket,
  Smile,
  Gauge,
  BarChart3,
  Globe2,
  ShieldCheck,
  MonitorSmartphone,
  ShoppingBag,
  Languages,
  Server,
} from "lucide-react";

import "./style.scss";

export default function AuaProjectsInclude() {
  return (
    <section className="aua-projects" data-aos="zoom-in">
      <div className="aua-projects__inner">
        {/* LEFT TEXT COLUMN */}
        <article className="aua-projects__left">
          <h2 className="aua-projects__heading">
            All the
            <br />
            projects
            <br />
            include:
          </h2>

          <p className="aua-projects__description">
            We kick off every project by really tuning in to what you want.
            Next, we split your project into super detailed, easy-to-handle
            tasks. This way, we make sure every little thing gets the attention
            and effort it needs.
          </p>
        </article>

        {/* RIGHT GRID COLUMN */}
        <article className="aua-projects__right">
          {/* main 3x3 grid */}
          <div className="aua-projects__grid">
            <div className="aua-projects__card aua-projects__card--primary">
              <div className="aua-projects__icon">
                <Code2 />
              </div>
              <div className="aua-projects__card-title">
                Design &amp;
                <br />
                Development*
              </div>
            </div>

            <div className="aua-projects__card aua-projects__card--primary">
              <div className="aua-projects__icon">
                <PanelsTopLeft />
              </div>
              <div className="aua-projects__card-title">
                Easy-to-use no-code content
                <br />
                management with training
              </div>
            </div>

            <div className="aua-projects__card aua-projects__card--primary">
              <div className="aua-projects__icon">
                <Rocket />
              </div>
              <div className="aua-projects__card-title">
                Deployment
                <br />
                assistance
              </div>
            </div>

            <div className="aua-projects__card aua-projects__card--primary">
              <div className="aua-projects__icon">
                <Smile />
              </div>
              <div className="aua-projects__card-title">
                User experience
                <br />
                consultation
              </div>
            </div>

            <div className="aua-projects__card aua-projects__card--primary">
              <div className="aua-projects__icon">
                <Gauge />
              </div>
              <div className="aua-projects__card-title">
                Performance
                <br />
                optimisation
              </div>
            </div>

            <div className="aua-projects__card aua-projects__card--primary">
              <div className="aua-projects__icon">
                <BarChart3 />
              </div>
              <div className="aua-projects__card-title">
                SEO, social
                <br />
                media, and
                <br />
                analytics setup
              </div>
            </div>

            <div className="aua-projects__card aua-projects__card--primary">
              <div className="aua-projects__icon">
                <Globe2 />
              </div>
              <div className="aua-projects__card-title">
                Browser
                <br />
                compatibility
              </div>
            </div>

            <div className="aua-projects__card aua-projects__card--primary">
              <div className="aua-projects__icon">
                <ShieldCheck />
              </div>
              <div className="aua-projects__card-title">
                Security practices
                <br />
                implementation
              </div>
            </div>

            <div className="aua-projects__card aua-projects__card--primary">
              <div className="aua-projects__icon">
                <MonitorSmartphone />
              </div>
              <div className="aua-projects__card-title">
                Full responsiveness
                <br />
                almost all
                <br />
                devices.
              </div>
            </div>
          </div>

          {/* additional services row */}
          <div className="aua-projects__extra">
            <p className="aua-projects__extra-label">Additional services:</p>

            <div className="aua-projects__extra-grid">
              <div className="aua-projects__card aua-projects__card--secondary">
                <div className="aua-projects__icon aua-projects__icon--dark">
                  <ShoppingBag />
                </div>
                <div className="aua-projects__card-title">
                  E-commerce
                  <br />
                  integration
                </div>
              </div>

              <div className="aua-projects__card aua-projects__card--secondary">
                <div className="aua-projects__icon aua-projects__icon--dark">
                  <Languages />
                </div>
                <div className="aua-projects__card-title">
                  Multilingual
                  <br />
                  support
                </div>
              </div>

              <div className="aua-projects__card aua-projects__card--secondary">
                <div className="aua-projects__icon aua-projects__icon--dark">
                  <Server />
                </div>
                <div className="aua-projects__card-title">
                  Hosting &amp;
                  <br />
                  Domain
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
