export { vec2, mat4 };

type vec2 = [number, number];
type mat4 =
    [number, number, number, number,
     number, number, number, number,
     number, number, number, number,
     number, number, number, number];

namespace vec2 {
    export function create(): vec2 {
        return [0, 0];
    }

    export function clone(v: vec2): vec2 {
        return [v[0], v[1]];
    }

    export function fromValues(x0: number, x1: number): vec2 {
        return [x0, x1];
    }

    export function copy(result: vec2, v: vec2) {
        result[0] = v[0];
        result[1] = v[1];
    }

    export function set(result: vec2, x0: number, x1: number) {
        result[0] = x0;
        result[1] = x1;
    }

    export function add(result: vec2, a: vec2, b: vec2) {
        result[0] = a[0] + b[0];
        result[1] = a[1] + b[1];
    }

    export function subtract(result: vec2, a: vec2, b: vec2) {
        result[0] = a[0] - b[0];
        result[1] = a[1] - b[1];
    }

    export function multiply(result: vec2, a: vec2, b: vec2) {
        result[0] = a[0] * b[0];
        result[1] = a[1] * b[1];
    }

    export function scale(result: vec2, a: vec2, scale: number) {
        result[0] = a[0] * scale;
        result[1] = a[1] * scale;
    }

    export function scaleAndAdd(result: vec2, a: vec2, b: vec2, scale: number) {
        result[0] = a[0] + b[0] * scale;
        result[1] = a[1] + b[1] * scale;
    }

    export function distance(a: vec2, b: vec2): number {
        const x = a[0] - b[0];
        const y = a[1] - b[1];
        return Math.hypot(x, y);
    }

    export function squaredDistance(a: vec2, b: vec2): number {
        const x = a[0] - b[0];
        const y = a[1] - b[1];
        return x * x + y * y;
    }

    export function length(a: vec2): number {
        return Math.hypot(a[0], a[1]);
    }

    export function squaredLength(a: vec2): number {
        const x = a[0];
        const y = a[1];
        return x * x + y * y;
    }

    export function negate(result: vec2, a: vec2) {
        result[0] = -a[0];
        result[1] = -a[1];
    }

    export function dot(a: vec2, b: vec2): number {
        return a[0] * b[0] + a[1] * b[1];
    }

    export function lerp(result: vec2, a: vec2, b: vec2, t: number) {
        result[0] = a[0] + t * (b[0] - a[0]);
        result[1] = a[1] + t * (b[1] - a[1]);
    }

    export function zero(result: vec2) {
        result[0] = 0;
        result[1] = 0;
    }
}

namespace mat4 {
    export function create(): mat4 {
        return [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
        ];
    }

    export function copy(result: mat4, a: mat4) {
        result[0] = a[0];
        result[1] = a[1];
        result[2] = a[2];
        result[3] = a[3];
        result[4] = a[4];
        result[5] = a[5];
        result[6] = a[6];
        result[7] = a[7];
        result[8] = a[8];
        result[9] = a[9];
        result[10] = a[10];
        result[11] = a[11];
        result[12] = a[12];
        result[13] = a[13];
        result[14] = a[14];
        result[15] = a[15];
    }

    export function ortho(result: mat4, left: number, right: number, bottom: number, top: number, near: number, far: number) {
        const lr = 1 / (left - right);
        const bt = 1 / (bottom - top);
        const nf = 1 / (near - far);
        result[0] = -2 * lr;
        result[1] = 0;
        result[2] = 0;
        result[3] = 0;
        result[4] = 0;
        result[5] = -2 * bt;
        result[6] = 0;
        result[7] = 0;
        result[8] = 0;
        result[9] = 0;
        result[10] = 2 * nf;
        result[11] = 0;
        result[12] = (left + right) * lr;
        result[13] = (top + bottom) * bt;
        result[14] = (far + near) * nf;
        result[15] = 1;
    }
}
