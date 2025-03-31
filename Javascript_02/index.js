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
function Rectangle(){
    this.length=1;
    this.breadth=2;
    this.draw=function(){
        console.log('drawing');
    }
}