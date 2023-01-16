function SomePromise(props, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(props);
        }, ms);
    });
}

// const promises = [];

// promises.push((async function () {
//     try {
//         console.log("하위1 시작");
//         const result = await SomePromise("하위1",5000);
//         console.log(result, "끝");
//     } catch {
//         console.log("실패");
//     }
// })());
// promises.push((async function () {
//     try {
//         console.log("하위2 시작");
//         const result = await SomePromise("하위2",3000);
//         console.log(result, "끝");
//     } catch {
//         console.log("실패");
//     }
// })());

// promises.push((async function () {
//     try {
//         console.log("하위3 시작");
//         const result = await SomePromise("하위3",7000);
//         console.log(result, "끝");
//     } catch {
//         console.log("실패");
//     }
// })());

// async function main() {
//     console.log(promises);
//     await Promise.all(promises);
//     console.log("메인종료");
// }
// main()

const test = [];

test.push(
    (async function () {
        console.log("");
        return "ㅋㅋㅋ";
    })()
);

console.log(test);
