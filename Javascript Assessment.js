#Ouestion no 9
var str = "MADAM", reverse = "";
for (let j = str.length - 1; j >= 0; j--) {
    reverse = reverse + str.charAt(j);
}
if (str === reverse)
    console.log("PALINDROME");
else
    console.log("NOT PALINDROME");


#Ouestion no 10
function count(a) {
    var elemfreq = {}
    for (var i = 0; i < a.length; i++) {
        let value = a[i];
        if (elemfreq[value]) {
            elemfreq[value]++;
        }
        else {
            elemfreq[value] = 1;
        }
    }
    return elemfreq;
}
var a = ["check", "wait", "work", "check", "go"]
console.log(count(a));


#Ouestion no 11
let arr = ['11', '20', '11', '23', '20'];
function rmvdupl(arr) {
    let value = [];
    arr.forEach(element => {
        if (!value.includes(element)) {
            value.push(element);
        }
    });
    return value;
}
console.log(rmvdupl(arr));


#Ouestion no 12
let arr = [9,2,5,324,65,3]
arr.length = 0
console.log(arr);


#Ouestion no 15
function reverse(string){
    return string.split('').reverse().join('');
  }
  console.log(reverse('Appinventiv is a global mobile app development agency '));

