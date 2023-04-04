var score = 0;
var score = 0;
var error = 0;



function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev, color) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("type", color);
  }
  
  function drop(ev, trash_type) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var element = document.getElementById(data)
    var item_type = ev.dataTransfer.getData("type")
    if (trash_type == item_type){
        score = score + 1;
        element.remove()
        score_update()
    } else {
        error = error + 1 
        score_update()
    }

  }


  function score_update(){
    console.log(score)
    console.log(error)
    document.getElementById('score').innerHTML = score;
    document.getElementById('error').innerHTML = error;
   
  }