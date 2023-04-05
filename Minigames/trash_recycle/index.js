var score = 0;
var error = 0;



function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev, color) {

    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("type", color);
    class_count = document.querySelectorAll('.items-field .item').length;
    
  }
  
  function drop(ev, trash_type) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data)
    var element = document.getElementById(data)
    console.log(element)
    var item_type = ev.dataTransfer.getData("type")
    if (trash_type == item_type){
        score = score + 1;
       
        element.remove()
        score_update()
        class_count = document.querySelectorAll('.items-field .item').length;
        if (class_count == 0){
          document.getElementById('items-list').innerHTML = "Hotovo"
        }
    } else {
        
        error = error + 1 
        if (error == 3){
          document.getElementById('items-list').innerHTML = "Špatně jsi to zrecikloval, znova!"
        }
        score_update()
    }

  }


  function score_update(){
    console.log(score)
    console.log(error)
    document.getElementById('score').innerHTML = score;
    document.getElementById('error').innerHTML = error;
   
  }