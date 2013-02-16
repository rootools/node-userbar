var gd = require('node-gd');

function createUserbar(ltext, rtext) {
  var img = gd.createTrueColor(450, 19);

  var background = img.colorAllocate(43,87,151);
  var white = img.colorAllocate(255,255,255);
  var black = img.colorAllocate(0,0,0);

  img.fill(0,0,background);

  var linespng = gd.createFromPng('./lines.png');
  linespng.alphaBlending(0);
  linespng.copyResampled(img,0,0,0,0, 450, 19, 450, 19);

  var name = {x: 20, y: 13, text: ltext, size: 9, font: './visitor.ttf'};
  var points = {x: 390, y: 13, text: rtext, size: 9, font: './visitor.ttf'};

  img.stringFT(black, name.font, name.size, 0, name.x-1, name.y-1, name.text);
  img.stringFT(black, name.font, name.size, 0, name.x-1, name.y, name.text);
  img.stringFT(black, name.font, name.size, 0, name.x-1, name.y+1, name.text);
  img.stringFT(black, name.font, name.size, 0, name.x, name.y+1, name.text);
  img.stringFT(black, name.font, name.size, 0, name.x, name.y-1, name.text);
  img.stringFT(black, name.font, name.size, 0, name.x+1, name.y-1, name.text);
  img.stringFT(black, name.font, name.size, 0, name.x+1, name.y, name.text);
  img.stringFT(black, name.font, name.size, 0, name.x+1, name.y+1, name.text);

  img.stringFT(black, points.font, points.size, 0, points.x-1, points.y-1, points.text);
  img.stringFT(black, points.font, points.size, 0, points.x-1, points.y, points.text);
  img.stringFT(black, points.font, points.size, 0, points.x-1, points.y+1, points.text);
  img.stringFT(black, points.font, points.size, 0, points.x, points.y+1, points.text);
  img.stringFT(black, points.font, points.size, 0, points.x, points.y-1, points.text);
  img.stringFT(black, points.font, points.size, 0, points.x+1, points.y-1, points.text);
  img.stringFT(black, points.font, points.size, 0, points.x+1, points.y, points.text);
  img.stringFT(black, points.font, points.size, 0, points.x+1, points.y+1, points.text);

  img.stringFT(white, name.font, name.size, 0, name.x, name.y, name.text);

  img.stringFT(white, points.font, points.size, 0, points.x, points.y, points.text);

  img.line(0, 0, 450, 0, black);
  img.line(0, 18, 450, 18, black);
  img.line(0, 0, 0, 18, black);
  img.line(449, 0, 449, 18, black);

  img.savePng('./out.png', 1, gd.noop);
}

exports.createUserbar = createUserbar;
