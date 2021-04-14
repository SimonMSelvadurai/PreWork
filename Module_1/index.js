/*
const circle = {
    radius :1,
    location:{
         x:1,
         y:1
    },
    draw:function() {
        console.log('draw');
    }
};
circle.draw(); 
*/

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log ('draw' + radius);
        }
    };
}
const circle = createCircle(1);