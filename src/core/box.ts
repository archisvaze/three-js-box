import { Mesh, SphereGeometry, MeshPhysicalMaterial, Color } from "three";
import { gui } from "./gui";

export const box = new Mesh(
  // new BoxGeometry(1, 1, 1, 1, 50, 50),
  new SphereGeometry(1, 1000, 1000),
  new MeshPhysicalMaterial({
    color: new Color("rgb(144, 34, 142)"),
    wireframe: false,
  })
);

box.position.set(0, 2, 0);
box.castShadow = true;

const boxCtrls = gui.addFolder({ title: "Box" });
// Position
boxCtrls.addInput(box.position, "x", {
  label: "Pos X",
  min: -10,
  max: 10,
  step: 0.01,
});
boxCtrls.addInput(box.position, "y", {
  label: "Pos Y",
  min: -10,
  max: 10,
  step: 0.01,
});
boxCtrls.addInput(box.position, "z", {
  label: "Pos Z",
  min: -10,
  max: 10,
  step: 0.01,
});
// Rotation
boxCtrls.addInput(box.rotation, "x", {
  label: "Rot X",
  min: -7,
  max: 7,
  step: 0.01,
});
boxCtrls.addInput(box.rotation, "y", {
  label: "Rot Y",
  min: -7,
  max: 7,
  step: 0.01,
});
boxCtrls.addInput(box.rotation, "z", {
  label: "Rot Z",
  min: -7,
  max: 7,
  step: 0.01,
});
// Scale
boxCtrls.addInput(box.scale, "x", {
  label: "Scale X",
  min: 0,
  max: 10,
  step: 0.1,
});
boxCtrls.addInput(box.scale, "y", {
  label: "Scale Y",
  min: 0,
  max: 10,
  step: 0.1,
});
boxCtrls.addInput(box.scale, "z", {
  label: "Scale Z",
  min: 0,
  max: 10,
  step: 0.1,
});
// Wireframe
boxCtrls.addInput(box.material, "wireframe", {
  label: "Wireframe",
});
// Color
boxCtrls.addInput(box.material, "color", {
  label: "Color",
  picker: "inline",
  expanded: true,
  color: { type: "float" },
});
