import { PerspectiveCamera } from "three";

const VVERTICAL_FIELDOF_VIEW = 45;

export const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

export const camera = new PerspectiveCamera(
    VVERTICAL_FIELDOF_VIEW,
    sizes.width / sizes.height
);

camera.position.set(9, 4, 9);

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix();
});
