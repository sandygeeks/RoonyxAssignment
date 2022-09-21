export function counter(initialValue: number = 0) {
    var counter = initialValue;
    return [() => console.info(counter), () => counter += 1]
}

const [getA, nextA] = counter(1);
getA(); // 1
nextA();
getA(); // 2

const [getB, nextB] = counter(10);
nextB();
getA(); // 2
getB(); // 11
nextA();
getA(); // 3
getB(); // 11