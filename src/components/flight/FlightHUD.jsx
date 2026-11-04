import { useEffect, useRef } from "react";
import { useFlight } from "../../contexts/Flight";
import { usePlay } from "../../contexts/Play";
import { chapters } from "../../data/chapters";

export const FlightHUD = () => {
  const { chapter, progress, scrollEl } = useFlight();
  const { play, end } = usePlay();
  const fillRef = useRef();

  useEffect(() => {
    let frame;

    const tick = () => {
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${progress.current})`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [progress]);

  if (!play || end) return null;

  const jumpTo = (index) => {
    const element = scrollEl.current;
    if (!element) return;

    const maxScroll = element.scrollHeight - element.clientHeight;
    const position = (index + 1) / (chapters.length + 1);

    element.scrollTo({
      top: maxScroll * position,
      behavior: "smooth",
    });
  };

  return (
    <div className="flight-hud" aria-label="Flight progress">
      <div className="flight-hud__top">
        <span className="flight-hud__label">Flight path</span>
        <span className="flight-hud__count">
          {chapter >= 0 ? String(chapter + 1).padStart(2, "0") : "—"} /{" "}
          {String(chapters.length).padStart(2, "0")}
        </span>
      </div>
      <div className="flight-hud__rail">
        <div className="flight-hud__fill" ref={fillRef} />
        {chapters.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`flight-hud__dot ${
              chapter === index ? "is-active" : ""
            }`}
            onClick={() => jumpTo(index)}
            aria-label={`Jump to ${item.title}`}
            title={item.title}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
