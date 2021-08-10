var canvas=new fabric.Canvas('myCanvas');
 block_image_width=30;
 block_image_height=30;
 player_x=10;
 player_y=10;
 var player_object="";
 function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    }); }
    window.addEventListener("keydown", my_keydown);
    
    function my_keydown(e)
    {
        var keypressed=e.keyCode;
        console.log(keypressed);
        if (e.shiftKey==true&&keypressed=='80')
        {
            console.log("p and shift pressed together");
            block_image_width=block_image_width+10;
            block_image_height=block_image_height+10;
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
        }
        if (e.shiftKey==true&&keypressed=='77')
        {
            console.log("m and shift pressed together");
            block_image_width=block_image_width-10;
            block_image_height=block_image_height-10;
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
        }
        if(keypressed=='38')
        {
            console.log("up");
            up();
        }
        if(keypressed=='40')
        {
            console.log("down");
            down();
        }
        if(keypressed=='37')
        {
            console.log("left");
           left();
        }
        if(keypressed=='39')
        {
            console.log("right");
            right();
        }
        if (keypresed=='87')
        {
            console.log("w");
            new_image('wall.jpg');
        }
        if (keypresed=='71')
        {
            console.log("g");
            new_image('ground.png');
        }
        if (keypresed=='76')
        {
            console.log("l");
            new_image('light_green.png');
        }
        if (keypresed=='84')
        {
            console.log("t");
            new_image('trunk.jpg');
        }
        if (keypresed=='82')
        {
            console.log("r");
            new_image('roof.jpg');
        }
        if (keypresed=='89')
        {
            console.log("y");
            new_image('yellow_wall.png');
        }
        if (keypresed=='68')
        {
            console.log("d");
            new_image('dark_green.png');
        }
        if (keypresed=='67')
        {
            console.log("c");
            new_image('cloud.jpg');
        }
    }