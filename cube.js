
    import * as THREE from 'https://unpkg.com/three@0.160.1/build/three.module.js';
    import { OrbitControls } from 'https://unpkg.com/three@0.160.1/examples/jsm/controls/OrbitControls.js';
    import { GLTFLoader } from 'https://unpkg.com/three@0.160.1/examples/jsm/loaders/GLTFLoader.js';

    const canvas = document.getElementById('cube');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();

    const isMobile = window.innerWidth < 768;
    const camera = new THREE.PerspectiveCamera(isMobile?5:10, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 3;
camera.rotation.x = Math.PI / 12; 


    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    const lightColor = 0x41b06e;

    const hemiLight1 = new THREE.HemisphereLight(0xffffff, lightColor, 1.2);
    const hemiLight2 = new THREE.HemisphereLight(lightColor, 0xffffff, 1.2);
    scene.add(hemiLight1, hemiLight2);

    let model = null;
    const loader = new GLTFLoader();

    loader.load(
      'assets/rubiks_cube.glb', 
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    function resizeRendererToDisplaySize() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;

  if (needResize) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}


    function render() {
      resizeRendererToDisplaySize();
      if (model) {
        model.rotation.y += 0.01;
        model.rotation.x += 0.01;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    render();
