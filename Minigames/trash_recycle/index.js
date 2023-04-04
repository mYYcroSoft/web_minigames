var score = 0;

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById(data).remove();
    score = score + 1; 
    console.log(score)
    console.log(data)
    console.log(document.getElementById(data).value)
    document.getElementById('score').innerHTML = score

  }