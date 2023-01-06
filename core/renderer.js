import { PCFShadowMap } from "three";
import { WebGL1Renderer } from "three";
import { sizes } from "./camera";

const canvas = document.querySelector(".canvas");

export const renderer = new WebGL1Renderer({
    canvas,
    antialias: true,
});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFShadowMap;
renderer.physicallyCorrectLights = true;

export function updateRenderer() {
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    updateRenderer();
});
