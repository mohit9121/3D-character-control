import React from "react";
// import Webcam from "react-webcam";
import * as THREE from 'three';

function NewMade() {
    const varib = 10;
    // console.log(varib); 
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.TorusKnotGeometry(0.5, 0.2);
    const material = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.y += 0.03;
        document.addEventListener("mousemove", (event) => {
            let mousex = event.clientX / window.innerWidth - 0.5; // Gets Mouse X
            let mousey = event.clientY / window.innerHeight - 0.5; // Gets Mouse Y
            const camerax = mousex * (4); const cameray = mousey * (-4);
            camera.position.x += (camerax - camera.position.x) / 50;
            camera.position.y += (cameray - camera.position.y) / 50;
        });
        // material.rotation.y += 0.1; 
        renderer.render(scene, camera);
    };

    animate();
    return (
        <div>
            <>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>three js tutorial</title>
                <link rel="stylesheet" href="style.css" />
                <h1>Scroll down the page and Move your cursor to move rotating object</h1> 
            </>

        </div>
    )
}

export default NewMade