
// var a = 10

// var value = a++ + ++a;
// 20 ans
// console.log(value)


// var value = a++ + a++ + ++a + a + a++;

// console.log(value)
// 60  Ans

// var a = 15;


// // _  (15+1)=16,__+_(16 (16+1)=17_) +_(17 (17+1)=18)_ + (a=18)_+_(1+18)=19____

// var value = ++a + a++ + a++ + a + ++a

// // 16 + 16 + 17 + 18 + 19
// console.log(value)


// 86 Ans


// var a = 15;

// // 15  /   (1+15)=16 / 16(16+1)=17/, (17+1)=18 /, (1+18)=19/, 19(19+1)=20/, 20(1+20)=21/ (but last value is 20) 

// var value = a + ++a + a++ + ++a + ++a + a++ + a++;

// // 15 + 16 + 16 + 18 + 19 + 19 + 20 

// console.log(value)



// var a = 10;

// // 10(10+1)=11/, 11(11+1)=12/, 12(12-1)=11/, (11-1)=10/, 10(10-1)=9/, 9/, (1+9)=10/.

// var value = a++ + a++ - a-- + --a + a-- + a + ++a

// // 10 + 11 - 12 + 10 + 10 + 9 + 10

// console.log(value)
// // 48 ans


// JavaScript Assignment #01


var a =  15;

// = 15(1+15)16/,  (1+17)=17/, (1-17)=16/, 

// // var value1 = a++ + ++a  -  --a;

// = 15 + 17 - 16

// // console.log(value1)

// = 16 Ans/
_____________
// (1+15)=16/, (1+16)=17/, (1-17)=16/, 16(1-16)=15/, 15/, 15/, 15(15+1)=16/, (1-16)=15,/

// var value2 = ++a + ++a - --a + a-- + a - a - a++ - --a;

// = 16 + 17 - 16 + 16 + 15 - 15 - 15 - 15

// console.log(value2)
// = 3 Ans/
___________