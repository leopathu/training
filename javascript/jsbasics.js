let x=0;
console.log(x);
var y="name";
console.log(y);
x=1000;
console.log(x);
console.log("x+=x",x+=x);
console.log("x-=(x/2)",x-=(x/2));
console.log("x*=2",x*=2);
console.log("x/=2",x/=2);
console.log("x%=10",x%=10);
x=5;
console.log("x**=2",x**=2);
function sqrt(z){
    return z**=0.5;
}
console.log("square root of x:",sqrt(x));
var person={firstname:"sri",lastname:"ganesh", age:"21"};
console.log("person.firstname=",person.firstname);
console.log("person[\"lastname\"]=",person["lastname"]);
var s="abcdefghijklmnopqrstuvwxyz";
console.log("string and the length of the string:",s,s.length);
console.log("string.slice(start,end)",s.slice(0,7));
console.log("string.substr(start,length)",s.substr(0,7));
console.log("string.replace()",s.replace('abcdefg','gfedcba'));
console.log("string.toUpperCase()",s.toUpperCase());
console.log("string.concat(string1,string2)",s.concat(" ",s.toUpperCase()));
var s1="   hello world";
console.log(s1.trim());
const d= new Date();
console.log(d);
console.log(d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds());
var D=["mark","tata",'leo','ben','clark','tom','julia'];
for(var i=0;i<D.length;i++){
    console.log("Welcome "+D[i]+" at "+d.getHours(),d.getMinutes(),d.getSeconds());
}
var L=['pie','ice cream','pizza','donut'];
console.log(L);
L=L.reverse();
console.log(L);
console.log("which one you want:");
var len=L.length;
while(len-1>=0){
    console.log(L[len-1]);
    len--;
}
console.log("----------");
for(var i in L){
    console.log(L[i]+" ");
}
let text = "If you want to experience the future of display technology, then these six letters would probably show you the way- A.M.O.L.E.D. It stands for Active-matrix organic light-emitting diode and also popularly goes by the name Active-matrix OLED. Foreign-sounding it may be, but we usually see or even use it with our mobile phones, next generation televisions and other hand-held electronic devices. Without it, we would have been stuck with bulky and heavy devices running on archaic technologies such as cathode ray tubes or CRT. Furthermore, the thrill doesn’t stop with this breakthrough which is AMOLED. In just a matter of a few years, leading mobile electronics developers were able to come up with a more powerful technology which would be the Super AMOLED. As its name suggests, it’s a more efficient version of its predecessor. Although the question now would be how fine the differentiating line between AMOLED and Super AMOLED really is."
let n = text.search("OLED");
console.log("Found OLED at "+n+" position.\n");
let o = text.replace(/amoled/gi,"OED");
console.log(o);
var text1="Hello World!"
document.write(text1+"<br>");
function prnum(num){
    var s=0
    for(var j=2;j<=Math.ceil(num/2);j++){
        if(num%j==0){
            s=1;break;
        }
    }
    if(s==0){
        return true;
    }
    else{
        return false;
    }
}
for(var i=2;i<100;i++){
    if(prnum(i)==true)
    console.log("Prime number:",i);
}
var na=15;
console.log("first "+na+" fibonacci:\n\n0\n1");
var a=0,b=1,c;
for(var k=na-2;k>0;k--){
    c=a+b;a=b;b=c;
    console.log(c+" ");
}
class myclass{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        let date=new Date();
        return date.getFullYear() - this.year;
    }
    name1(){
        return this.name;
    }
}
let test=new myclass('Sri Ganesh',2001);
console.log("By class:");
console.log(test.name1()+" is "+test.age()+" years old.");
let test1=new myclass('Lakshmanan',2000);
console.log(test1.name1()+" is "+test1.age()+" years old.");
let test2=new myclass('Santhosh',1999);
console.log(test2.name1()+" is "+test2.age()+" years old.");
console.log("Selection Sort before sorting");
var listh=[23,9,100,50,67,99,99];
console.log(listh);
for(var i=0;i<listh.length-1;i++){
    var sm=listh[i];numg=i;
    for(var j=i+1;j<listh.length;j++){
        if(sm>listh[j]){
            sm=listh[j];numg=j;
        }
    }
    var numt=listh[numg];
    listh[numg]=listh[i];
    listh[i]=numt;
}
console.log("after sorting");
console.log(listh);
document.write(prnum(6)+"<br>");