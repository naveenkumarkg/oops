//const circle = {} //{} is object literal synatax

const circle = {
    radius : 1,
    location:{ // we can call another object
        x:1,
        y:1
    },
    draw: function(){ // we can call a function
        console.log("Draw");  
    }
}

// circle.draw();