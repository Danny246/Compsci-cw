$(function()
{ 
    var count = 0;
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    

    function move(e)
    {
      ctx.fillStyle = "#3300FD";
      ctx.fillRect(e.clientX - pos.x, e.clientY - pos.y,20,20);
    }
    var pos = getElementPosition(canvas);

    onmousemove = function(e)
    {
      move(e);
    };

    function getElementPosition(element)
    {
        let box = element.getBoundingClientRect();
        
        return{
        y: box.top + pageYOffset,
        x: box.left + pageXOffset};
    }
});
