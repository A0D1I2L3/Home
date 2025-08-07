import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('cube');

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true
});
renderer.setClearColor(0x000000, 0);
renderer.outputEncoding = THREE.sRGBEncoding;

const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(
  10,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  100
);
camera.position.set(0, 1, 3);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.minDistance = 0.4;
controls.maxDistance = 10;
controls.enableZoom = false;
controls.minPolarAngle = Math.PI / 2;
controls.maxPolarAngle = Math.PI / 2;

const ambientLight = new THREE.AmbientLight(0x41b06e, 1.2);
scene.add(ambientLight);

const ambientLight2 = new THREE.HemisphereLight(0xffffff, 1);
scene.add(ambientLight2);

const loader = new GLTFLoader();
let model = null;

loader.load(
  'assets/rubiks_cube.glb',
  (gltf) => {
    model = gltf.scene;
    model.scale.set(1, 1, 1);
    scene.add(model);
  },
  undefined,
  (error) => {
    console.error('Model loading error:', error);
  }
);

const clock = new THREE.Clock();

function resizeRendererToDisplaySize() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

function animate() {
  requestAnimationFrame(animate);

  resizeRendererToDisplaySize();

  if (model) {
    model.rotation.y += 0.01;
    model.rotation.x += 0.01; 
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();
