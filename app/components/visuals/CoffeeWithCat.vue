<script setup>
import { onBeforeUnmount, onMounted, useTemplateRef } from "vue";
import { useResizeObserver } from "@vueuse/core";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import degreeToRadians from "@/utils/degreeToRadians";

const container = useTemplateRef("container");
const canvas = useTemplateRef("canvas");

const clock = new THREE.Timer();

let camera;
let scene;
let renderer;

let ambientLight;
let directionalLight;

let mesh;
let mixer;

const d = 9;

onMounted(init);

onBeforeUnmount(() => {
  renderer?.setAnimationLoop(null);
  renderer?.dispose();
});

useResizeObserver(container, () => {
  if (container.value) {
    onWindowResize();
  }
});

function init() {
  const element = container.value;

  if (!element || !canvas.value) return;

  scene = new THREE.Scene();

  const width = element.clientWidth;
  const height = element.clientHeight;

  const aspect = width / height;

  camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);

  camera.position.set(d, d, d);
  camera.lookAt(scene.position);

  ambientLight = new THREE.AmbientLight(0xffffff, 1);

  directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(0, 5, 5);

  scene.add(camera);
  scene.add(ambientLight);
  scene.add(directionalLight);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true,
  });

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  loadGLTF();

  renderer.setAnimationLoop(animate);
}

function loadGLTF() {
  const gltfLoader = new GLTFLoader();

  gltfLoader.load(
    "/models/coffee_with_cat.glb",
    (gltf) => {
      mesh = gltf.scene;

      mesh.rotation.set(degreeToRadians(0), degreeToRadians(90), degreeToRadians(0));

      mesh.position.x = 2;
      mesh.position.z = 2.3;

      scene.add(mesh);

      if (gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(mesh);

        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
      }
    },
    undefined,
    (error) => {
      console.error("Failed to load GLTF:", error);
    },
  );
}

function animate() {
  clock.update();
  mixer?.update(clock.getDelta());
  renderer.render(scene, camera);
}

function onWindowResize() {
  const element = container.value;

  if (!element || !camera || !renderer) return;

  const width = element.clientWidth;
  const height = element.clientHeight;

  const aspect = width / height;

  camera.left = -d * aspect;
  camera.right = d * aspect;
  camera.top = d;
  camera.bottom = -d;

  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}
</script>

<template>
  <div ref="container" class="hidden h-dvh w-full lg:block">
    <canvas ref="canvas" class="h-full w-full" />
  </div>
</template>
