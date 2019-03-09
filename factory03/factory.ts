// const circle = { // you can put this in a factory method
//     radius: 1,
//     draw: function(){
//         console.log("Draw");
        
//     }
// }

function createCircle(radius : number) {

   return { 
        radius: radius,
        draw: function(){
            console.log("Draw");
            
        }
    }
}

const circle = createCircle(radius);