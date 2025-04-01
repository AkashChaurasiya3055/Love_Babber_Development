// for(let i=1;i<=10;i++)
// {
//     console.log(2*i);
// }

// let rectangle={
//     length:1,
//     breadth:2,
//     draw: function() {
//         console.log('draw');
//     }
// };


// function createRectangle( a,b){
//     return rectangle={
//         length:a,
//         breadth:b,

//         draw() {
//             console.log('drawing rectangle');
//         }
//     };

// }

// let rectangleObj1=createRectangle(5,4);
// let rectangleObj2=createRectangle(3,8);
// let rectangleObj3=createRectangle(9,4);


//constructor function 
// function Rectangle(){
//     this.length=1;
//     this.breadth=2;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }

//object creation using constrcutor function
// let rectangleObject=new Rectangle();

// rectangleObject.color='yellow';
// console.log(rectangleObject);


// delete rectangleObject.color;
// console.log(rectangleObject);

let rectangle={
    length:3,
    breadth:5
};
//for -in-loop
for(let key in rectangle){
    //key are reflected through key value
    //values are reflected through rectangle[key]
    console.log(key,rectangle[key]);
}