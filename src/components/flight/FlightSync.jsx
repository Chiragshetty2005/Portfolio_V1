import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useFlight } from "../../contexts/Flight";
import { chapters } from "../../data/chapters";

const chapterPositions = chapters.map(
  (chapter) => new THREE.Vector3(...chapter.position)
);

const SHOW_DISTANCE = 58;

export const FlightSync = () => {
  const scroll = useScroll();
  const camera = useThree((state) => state.camera);
  const { progress, scrollEl, setChapter } = useFlight();
  const lastChapter = useRef(-1);
  const worldPosition = useRef(new THREE.Vector3());

  useFrame(() => {
    progress.current = scroll.offset;

    if (scrollEl.current !== scroll.el) {
      scrollEl.current = scroll.el;
    }

    camera.getWorldPosition(worldPosition.current);

    let nearest = -1;
    let nearestDistance = Infinity;

    chapterPositions.forEach((position, index) => {
      const distance = position.distanceTo(worldPosition.current);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });

    const nextChapter = nearestDistance < SHOW_DISTANCE ? nearest : -1;

    if (nextChapter !== lastChapter.current) {
      lastChapter.current = nextChapter;
      setChapter(nextChapter);
    }
  });

  return null;
};
