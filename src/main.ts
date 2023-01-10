import * as THREE from "three";
import { box } from "./core/box";
import { camera } from "./core/camera";
import { fpsGraph } from "./core/gui";
import { ambientLight, directionalLight } from "./core/lights";
import "./core/orbit-controls";

import { plane } from "./core/plane";
import { renderer, updateRenderer } from "./core/renderer";
import "./style.css";

// Scene
const scene = new THREE.Scene();

scene.add(ambientLight);
scene.add(directionalLight);

scene.add(box);
scene.add(plane);

scene.add(camera);

updateRenderer();

const loop = () => {
  fpsGraph.begin();
  renderer.render(scene, camera);
  fpsGraph.end();
  requestAnimationFrame(loop);
};

loop();
