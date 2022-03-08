const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild( renderer.domElement );

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(3.8,50,50),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load("earth.jpeg")
    })
)

scene.add(new THREE.AmbientLight(0x333333));

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,50,50);
scene.add(light);

scene.add(sphere)

camera.position.z = 10;

function animate() {
    requestAnimationFrame( animate );

    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.005;

    camera.position.z += 0.0001;

    renderer.render( scene, camera );
};

animate();