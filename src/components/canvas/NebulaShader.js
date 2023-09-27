import glsl from 'glslify';
import { Vector2 } from 'three';

export const NebulaShader = {
    uniforms: {
        tDiffuse: { value: null },
        resolution: { value: new Vector2() },
        time: { value: 0.0 }
    },
    vertexShader: glsl`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: glsl`
        uniform sampler2D tDiffuse;
        uniform vec2 resolution;
        uniform float time;
        varying vec2 vUv;

        float hash(float n) {
            return fract(sin(n) * 43758.5453);
        }

        float noise(vec2 x) {
            vec2 p = floor(x);
            vec2 f = fract(x);
            f = f * f * (3.0 - 2.0 * f);
            float n = p.x + p.y * 57.0;
            return mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
        }

        void main() {
            vec2 uv = vUv * resolution;
            float t = time * 0.5;
            float d = noise(uv * 0.01 + t);
            d += noise(uv * 0.7) * 0.5;
            d += noise(uv * 0.25) * 0.25;
            d += noise(uv * 0.05) * 0.05;
            d = d * 0.5;
            gl_FragColor = mix(texture2D(tDiffuse, vUv), vec4(d, d * 0.5, d * 0.8, 1.0), 0.5);
        }
    `
};
