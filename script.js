const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

// Functions for onclick event
function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}
function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}
// Function for implementation

function arrayCopy(src,srcPos,dst,dstPos,length){
    const subArray = src.slice(srcPos, srcPos + length);//srcРos - от куда вырезается
    console.log("sub array - " +subArray);
    dst.splice(dstPos, 0,...subArray);
}
function count(array, str) {
    return array.reduce(function (acc, value) {
        if (value === str) {
            acc++
        }
        return acc;
    }, 0);
}
    function displayOccurrences(array) {
    const res = array.reduce(function (acc,value) {
        if (acc[value]){
            acc[value]++;
        }else{

        }
        return acc;

        },{});
        console.log(JSON.stringify(res));
}

function ulSurround(strings) {
    const starArr = ['<ul>', '</ul>'];
    return starArr.splice(1, 0, ...strings.map(
        function (value) {
            return '<li>' + value + '</li>';
        }
    )).join('');

}
    function lengthSort(array) {
    return array.sort(function (a,b){

    if(a.length>b.length) return 1;
    if(a.length === b .length) return 0;
    if(a.length < b .length) return -1;

    })
}