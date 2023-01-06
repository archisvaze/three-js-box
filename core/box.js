import {
    BoxGeometry,
    SphereGeometry,
    Color,
    Mesh,
    MeshPhysicalMaterial,
} from "three";
import { gui } from "./gui";

export const box = new Mesh(
    // new BoxGeometry(1, 1, 1, 1, 55, 55),
    new SphereGeometry(1, 50, 50),
    new MeshPhysicalMaterial({
        color: new Color("rgb(144, 34, 142)"),
        wireframe: false,
    })
);

box.position.set(0, 2, 0);
box.castShadow = true;

const boxControls = gui.addFolder({
    title: "Box",
});
//position
boxControls.addInput(box.position, "x", {
    label: "Pos X",
    min: -10,
    max: 10,
    step: 0.01,
});
boxControls.addInput(box.position, "y", {
    label: "Pos Y",
    min: -10,
    max: 10,
    step: 0.01,
});
boxControls.addInput(box.position, "z", {
    label: "Pos Z",
    min: -10,
    max: 10,
    step: 0.01,
});
//rotation
boxControls.addInput(box.rotation, "x", {
    label: "Rot X",
    min: -7,
    max: 7,
    step: 0.01,
});
boxControls.addInput(box.rotation, "y", {
    label: "Rot Y",
    min: -7,
    max: 7,
    step: 0.01,
});
boxControls.addInput(box.rotation, "z", {
    label: "Rot Z",
    min: -7,
    max: 7,
    step: 0.01,
});

//scale
boxControls.addInput(box.scale, "x", {
    label: "Scale X",
    min: 0,
    max: 10,
    step: 0.1,
});
boxControls.addInput(box.scale, "y", {
    label: "Scale Y",
    min: 0,
    max: 10,
    step: 0.1,
});
boxControls.addInput(box.scale, "z", {
    label: "Scale Z",
    min: 0,
    max: 10,
    step: 0.1,
});

//wireframe
boxControls.addInput(box.material, "wireframe", {
    label: "Wireframe",
});

//color
boxControls.addInput(box.material, "color", {
    lable: "Color",
    picker: "inline",
    expanded: true,
    color: { type: "float" },
});
