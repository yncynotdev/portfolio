<script setup lang="ts">
import * as THREE from "three";
import { useResizeObserver } from "@vueuse/core";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const container = useTemplateRef<HTMLDivElement>("container");
const canvas = useTemplateRef<HTMLCanvasElement>("canvas");

const clock = new THREE.Timer();

let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;

let ambientLight: THREE.AmbientLight;
let directionalLight: THREE.DirectionalLight;

let mesh: THREE.Object3D;

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

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
  camera.position.set(0, 0, 4);

  ambientLight = new THREE.AmbientLight(0xffffff, 3);
  directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(0, 5, 5);

  scene.add(camera, ambientLight, directionalLight);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
  });

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  loadGLTF();

  renderer.setAnimationLoop(animate);
}

function loadGLTF() {
  const gltfLoader = new GLTFLoader();

  gltfLoader.load(
    "/models/green_cat.glb",
    (gltf) => {
      mesh = gltf.scene;
      scene.add(mesh);
    },
    undefined,
    (error) => {
      console.error("Failed to load GLTF:", error);
    },
  );
}

function animate() {
  clock.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  const element = container.value;

  if (!element || !camera || !renderer) return;

  const width = element.clientWidth;
  const height = element.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}
</script>

<template>
  <div ref="container" class="w-full max-w-screen h-64">
    <canvas ref="canvas" class="h-full w-full" />
  </div>
</template>
