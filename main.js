import "./style.css";

import * as Three from "three";
import { ambientLight, directionalLight } from "./core/lights";
import { box } from "./core/box";
import { renderer, updateRenderer } from "./core/renderer";
import { camera } from "./core/camera";
import { plane } from "./core/plane";
import "./core/orbit-controls";
import { fpsGraph } from "./core/gui";

//Scene
const scene = new Three.Scene();

scene.add(ambientLight);
scene.add(directionalLight);

scene.add(box);
scene.add(camera);
scene.add(plane);
updateRenderer();

const loop = () => {
  fpsGraph.begin();
  renderer.render(scene, camera);
  fpsGraph.end();
  requestAnimationFrame(loop);
};

loop();
