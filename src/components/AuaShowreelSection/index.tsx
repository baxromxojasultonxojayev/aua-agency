"use client";

import { useRef, useState } from "react";
import "./style.scss";

// YouTube video ID
const YT_ID = "fS4cH2fky5M";

// Toza URL (controls, info va boshqalar o‘chirilgan)
const YT_URL = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&playsinline=1&enablejsapi=1`;

export default function AuaShowreelSection() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [muted, setMuted] = useState(true);

  const sendYTCommand = (func: "mute" | "unMute") => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;

    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args: [],
      }),
      "*" // xohlasang bu yerga aniq origin qo‘yishing mumkin
    );
  };

  const handleToggleMute = () => {
    if (muted) {
      sendYTCommand("unMute");
      setMuted(false);
    } else {
      sendYTCommand("mute");
      setMuted(true);
    }
  };

  return (
    <section className="aua-showreel">
      <div className="aua-showreel__inner">
        <p className="aua-showreel__label">
          <span>Webdesign Studio SG</span>
        </p>

        <button
          type="button"
          className="aua-showreel__toggle"
          onClick={handleToggleMute}
        >
          <span>{muted ? "Unmute" : "Mute"}</span>
        </button>

        <p className="aua-showreel__caption">
          <span>
            Our websites get results – from boosting traffic to improving
            conversion rates to generating online leads.
          </span>
        </p>

        {/* Katta rounded container */}
        <div className="aua-showreel__frame">
          <div className="aua-showreel__video-shell">
            <iframe
              ref={iframeRef}
              className="aua-showreel__video"
              src={YT_URL}
              title="AUA Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
