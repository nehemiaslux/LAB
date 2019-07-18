var h = m = s = '00',
    $b = $('body'),
    $t = $('.time'),
    $h = $('.hours'),
    $m = $('.minutes'),
    $s = $('.seconds'),
    time = new Date(),
    pad = '00';

String.prototype.pad = function(pad) {
  return pad.substring(0, pad.length - this.length) + this;
}

function updateTime() {
  time = new Date();
  h = time.getHours().toString().pad(pad);
  m = time.getMinutes().toString().pad(pad);
  s = time.getSeconds().toString().pad(pad);
  
  $h.text(h);
  $m.text(m);
  $s.text(s);
  
  updateColor();
}

function updateColor() {
  $h.css('color', '#' + h + h + h);
  $m.css('color', '#' + m + m + m);
  $s.css('color', '#' + s + s + s);
  $b.css('background', 'rgba('+h+','+m+','+s+',0.8)');
}

updateTime();
var clock = setInterval(updateTime, 1000);

$t.on('click', function() {
  window.open('http://www.colourlovers.com/palettes/search?hex='+h+m+s);
});


