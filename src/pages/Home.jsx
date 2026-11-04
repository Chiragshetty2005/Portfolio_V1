import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { useMemo } from "react";
import { Experience } from "../components/Experience";
import { Overlay } from "../components/Overlay";
import { ChapterCard } from "../components/flight/ChapterCard";
import { FlightHUD } from "../components/flight/FlightHUD";
import { FlightSync } from "../components/flight/FlightSync";
import { ErrorBoundary } from "../components/site/ErrorBoundary";
import { SiteNav } from "../components/site/SiteNav";
import { StaticHome } from "../components/site/StaticHome";
import { FlightProvider } from "../contexts/Flight";
import { usePlay } from "../contexts/Play";
import { usePageMeta } from "../hooks/usePageMeta";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Home() {
  const { play, end } = usePlay();
  const reducedMotion = usePrefersReducedMotion();

  usePageMeta(
    "Chirag P Shetty — Backend & Systems Developer",
    "Portfolio of Chirag P Shetty: backend systems, caching, interactive frontends. B.Tech CSE at Dayananda Sagar University, Bangalore."
  );

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.08} />
      </EffectComposer>
    ),
    []
  );

  if (reducedMotion) {
    return <StaticHome />;
  }

  return (
    <FlightProvider>
      <ErrorBoundary fallback={<StaticHome />}>
        <div className="flight">
          <Canvas>
            <color attach="background" args={["#ececec"]} />
            <ScrollControls
              pages={play && !end ? 30 : 0}
              damping={0.5}
              style={{
                top: "10px",
                left: "0px",
                bottom: "10px",
                right: "10px",
                width: "auto",
                height: "auto",
                animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
                opacity: 0,
              }}
            >
              <Experience />
              <FlightSync />
            </ScrollControls>
            {effects}
          </Canvas>

          <Overlay />
          <ChapterCard />
          <FlightHUD />
          <SiteNav variant="flight" visible={play} />
        </div>
      </ErrorBoundary>
    </FlightProvider>
  );
}
