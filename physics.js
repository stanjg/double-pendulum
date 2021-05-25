import store from "./store";

export const doPhysics = () => {
    // Calculate accelerations
    let num1 = -store.g * (2 * store.m1 + store.m2) * Math.sin(store.a1);
    let num2 = -store.m2 * store.g * Math.sin(store.a1 - 2 * store.a2);
    let num3 = -2 * Math.sin(store.a1 - store.a2) * store.m2;
    let num4 = store.a2_v * store.a2_v * store.L + store.a1_v * store.a1_v * store.L * Math.cos(store.a1 - store.a2);
    let den = store.L * (2 * store.m1 + store.m2 - store.m2 * Math.cos(2 * store.a1 - 2 * store.a2));
    store.a1_a = (num1 + num2 + num3 * num4) / den;

    num1 = 2 * Math.sin(store.a1 - store.a2);
    num2 = store.a1_v * store.a1_v * store.L * (store.m1 + store.m2);
    num3 = store.g * (store.m1 + store.m2) * Math.cos(store.a1);
    num4 = store.a2_v * store.a2_v * store.L * store.m2 * Math.cos(store.a1 - store.a2);
    den = store.L * (2 * store.m1 + store.m2 - store.m2 * Math.cos(2 * store.a1 - 2 * store.a2));
    store.a2_a = (num1 * (num2 + num3 + num4)) / den;

    // Update velocities
    store.a1_v += store.a1_a;
    store.a2_v +=  store.a2_a;

    // Apply makeshift drag
    store.a1_v *= 0.99998;
    store.a2_v *= 0.99998;

    // Update angles
    store.a1 += store.a1_v;
    store.a2 += store.a2_v;
}