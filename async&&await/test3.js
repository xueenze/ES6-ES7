function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}
 
function step1(n) {
    console.log('step1 with ${n}');
    return takeLongTime(n);
}
 
function step2(n) {
    console.log('step2 with ${n}');
    return takeLongTime(n);
}
 
function step3(n) {
    console.log('step3 with ${n}');
    return takeLongTime(n);
}

//Promise写法
function doIt(){
	console.time("doIt");

	let time1 = 300;

	step1(time1)
		.then(time2 => step2(time2))
		.then(time3 => step3(time3))
		.then(result => {
			console.log('result is ${result}');
			console.timeEnd("doIt");
		});
}

doIt();

//async&&await写法
async function doItV2(){
	console.time("doItV2");

    let time1 = 300;

    let time2 = await step1(time1);

    let time3 = await step2(time2);

    let result = await step3(time3);

    console.log('result is ${result}');

    console.timeEnd("doItV2");
}

doItV2();