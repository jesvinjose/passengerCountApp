// let firstBath=5
// let secondBatch=7;
// let count=firstBath+secondBatch;
// console.log(count);

// 1. Create a variable, myAge, and set its value to your age

// 2. Log the myAge variable to the console

// let myAge=33;
// console.log(myAge);

// let x,y;
// let sum=(x,y)=>(x+y);

// console.log(sum(10,5));

// let element;
// let even=(element)=>{
//     if(element%2===0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(even(5));

// let odd=(element)=>{
//    return element%2===1?  true:  false;
// }

// console.log(odd(7));

// let arr=[6,5,4,3,2,1];
// let copy=[...arr];

// console.log(copy);

// let a="Jesvin";

// let b=a.split("").reverse("").join("");

// console.log(b);

// let arr=[1,5,4,6,8];
// let even=arr.filter((e)=>(e%2===0));
// console.log(even);

// let arr=[6,4,3,2];

// let sum=arr.reduce((curr,accum)=>(curr+accum),0);
// console.log(sum);

// let cubes=arr.map((e)=>(e*e*e));
// console.log(cubes);

// arr.push(1,0);
// console.log(arr);
// arr.pop();
// console.log(arr);

// let obj = {
//   firstName: "Jesvin",
//   lastName: "Jose",
// };

// let { firstName: a, lastName: b } = obj;

// console.log(a);
// console.log(b);

// let arr=[1,2,3,4];
// let [a,b,,c]=arr;
// console.log(a);
// console.log(b);
// console.log(c);

// let arr=[0,1,2,3,4];
// arr.unshift(-1,-2);
// console.log(arr);

// let arr1=[1,2,3];
// let arr2=[4,5,6];

// let arr=[...arr1,...arr2];
// console.log(arr);

// let arr=[1,2,3];
// let copy=[...arr,4,5];
// console.log(copy);

// let obj={
//     a:"b",
//     c:"d"
// }

// let arr=[...Object.keys(obj),...Object.values(obj)];
// console.log(arr);

// let arr=[1,2,3,4];
// arr.shift();
// console.log(arr);

let obj = {
  firstName: "Jesvin",
  lastName: "Jose",
  place: "Kottayam",
};

// let text="";

// for(let x in obj){
//     text+=obj[x]+" "
// }

// console.log(text);

// let arr=[1,2,3,4];
// let text="";

// for(let x in arr){
//     text+=arr[x]+" ";
// }

// console.log(text);

// let arr=[1,2,3,4];
// let text="";
// arr.forEach(myFunction)

// function myFunction(value){
//     text+=value+" ";
// }

// console.log(text);

// let fruits=["Banana","Orange","Lemon","Apple","Mango"];
// let citrus=fruits.slice(1,3);
// console.log(citrus);

// fruits.splice(2,0,"Kiwi");
// console.log(fruits);

// fruits.splice(2,2);
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits);

// let counter=10;
// let interval= setInterval(()=>{
//     if(counter==0){
//         clearInterval(interval);
//     }
//     console.log(counter);
//     counter--;

// },1000)

// function updateCounter() {
//   let counter = 10;
//   function countDown() {
//     if (counter >= 0) {
//       console.log(counter);
//       counter--;
//       setTimeout(countDown, 1000);
//     }else{
//         return
//     }
//   }
//   countDown();
// }
// updateCounter();

// function updateCounter(){
//     let counter=10;
//     function countDown(){
//         if(counter>=0){
//             console.log(counter);
//             counter--;
//             setTimeout(countDown,1000)
//         }else{
//             return
//         }
//     }
//     countDown()
// }
// updateCounter();

// let arr=[1,2,3,4,5];

// for(let i=0;i<(arr.length/2);i++){
//     let temp=arr[arr.length-1-i];
//     arr[arr.length-1-i]=arr[i];
//     arr[i]=temp;
// }

// console.log(arr)

// let arr=[1,2,3,4,5];

// let start=0;
// let end=arr.length-1;

// while(start<end){
//     let temp=arr[end];
//     arr[end]=arr[start];
//     arr[start]=temp;

//     start++;
//     end--;
// }

// console.log(arr)

// class Node{
//   constructor(value){
//     this.value=value;
//     this.next=null;
//   }
// }

// class LinkedList{
//   constructor(){
//     this.head=null;
//     this.size=0;
//   }

//   isEmpty(){
//     if(this.size===0){
//       return true;
//     }else{
//       return false;
//     }
//   }

//   getSize(){
//     return this.size;
//   }

//   append(value){
//     const node=new Node(value);
//     let current=this.head;
//     if(this.isEmpty()){
//       this.head=node;
//       this.size++;
//     }else{
//       while(current.next!==null){
//         current=current.next;
//       }
//       current.next=node;
//       this.size++;
//     }
//   }

//   prepend(value){
//     const node=new Node(value);
//     if(this.isEmpty()){
//       this.head=node;
//       this.size++;
//     }else{
//       node.next=this.head;
//       this.head=node;
//       this.size++;
//     }
//   }

//   // [1,2,3,5,6]

//   insert(value,index){
//     const node=new Node(value);
//     if(index<0||index>this.size){
//       console.log("Invalid index");
//     }else{
//       if(index===0){
//         this.prepend(value)
//       }else{
//         let prev=this.head;
//         for(let i=0;i<index-1;i++){
//           prev=prev.next;
//         }
//         node.next=prev.next;
//         prev.next=node;
//         this.size++;
//       }
//     }
//   }

//   display(){
//     if(!this.isEmpty()){
//       let current=this.head;
//       while(current.next!==null){
//         console.log(current.value);
//         current=current.next
//       }
//       console.log(current.value);
//     }
//   }
// }

// let list=new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(5);
// list.append(6);
// list.insert(4,3);
// list.display();

let string1 = "listens";
let string2 = "silent";

function checkAnagram(str1, str2) {
  let arr1 = str1.split("");
  let obj1 = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!obj1[arr1[i]]) {
      obj1[arr1[i]] = 1;
    } else {
      obj1[arr1[i]]++;
    }
  }
  let arr2 = str2.split("");
  let obj2 = {};
  for (let i = 0; i < arr2.length; i++) {
    if (!obj2[arr2[i]]) {
      obj2[arr2[i]] = 1;
    } else {
      obj2[arr2[i]]++;
    }
  }

  if(arr1.length!==arr2.length){
    return false;
  }else{
    for(let i=0;i<arr1.length;i++){
      if(obj1[arr1[i]]!==obj2[arr1[i]]){
        return false;
      }
    }
    for(let i=0;i<arr2.length;i++){
      if(obj1[arr2[i]]!==obj2[arr2[i]]){
        return false;
      }
    }
    return true;
  }

}

console.log(checkAnagram(string1,string2));
