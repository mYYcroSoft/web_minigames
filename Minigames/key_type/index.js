const alphabet = "abcdefghijklmnopqrstuvwxyz"

var key = 'm'

    document.addEventListener('keydown', function(event) {
        if (event.key == key) {
          // reagovat na stisknutí klávesy Enter
          console.log("STISK:" + key);
          generate_let()
          document.getElementById('key').innerText = key
        } 
      });

  
function generate_let(){
  key = alphabet[Math.floor(Math.random() * alphabet.length)]
  console.log(key)
}