"use client";

import { useRef, useState } from "react";
import "./style.scss";

// iframe ichida ochiladigan ichki sahifa
const IFRAME_SRC = "/showreel.html";

export default function AuaShowreelSection() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [muted, setMuted] = useState(true);

  // hozircha YouTube komandalar kerak emas, lekin kodni qoldirsa bo'ladi
  const sendYTCommand = (func: "mute" | "unMute") => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;

    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args: [],
      }),
      "*"
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
    <section className="aua-showreel" data-aos="zoom-in">
      <div className="aua-showreel__inner">
        {/* Agar label / caption / tugma kerak bo'lsa keyin ochasiz */}
        {/* <button
          type="button"
          className="aua-showreel__toggle"
          onClick={handleToggleMute}
        >
          <span>{muted ? "Unmute" : "Mute"}</span>
        </button> */}

        <div className="aua-showreel__frame">
          <div className="aua-showreel__video-shell">
            <iframe
              ref={iframeRef}
              className="aua-showreel__video"
              src={IFRAME_SRC}
              title="AUA Showreel"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
