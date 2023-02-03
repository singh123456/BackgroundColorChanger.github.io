const colors=['red','pink','blue','black','aqua','purple'];

function ChangeColor(){
    const colorIndex=parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex]
   
}