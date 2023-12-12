window.setInterval('animate()', 100);
  
function animate() {
  var time    = new Date();
  var hours   = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var value   = ((hours < 10) ? ' ' : '') + hours
              + ':' + ((minutes < 10) ? '0' : '') + minutes
              + ':' + ((seconds < 10) ? '0' : '') + seconds;
  display.setValue(value);
}
     