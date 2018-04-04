const THREE = require('three');
const Canvas = require('canvas');

const threePlay = () => {
  let camera = new THREE.PerspectiveCamera( 70, 1, 0.01, 100 );
  camera.position.z = 1;
  
  let scene = new THREE.Scene();
  
  let geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  let material = new THREE.MeshNormalMaterial();
  
  let mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  
  var canvas = new Canvas(w, h);
  canvas.style = {}; // dummy shim to prevent errors during render.setSize
  let renderer = new THREE.CanvasRenderer({ canvas: canvas });
  return renderer;
};

export default threePlay;
