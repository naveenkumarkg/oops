// const circle = { // you can put this in a factory method
//     radius: 1,
//     draw: function(){
//         console.log("Draw");
        
//     }
// }

// In this chapter if we want to create two circles we need to copy paste the same object from the previous chapter, 
//instead we can create a function and provive the necessary parameter through the function

function createCircle(radius) {

   return { 
        radius: radius,
        draw: function(){
            console.log("Draw");
            
        }
    }
}

const circle = createCircle(1);
console.log(circle)