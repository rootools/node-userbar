var gd = require('node-gd');
var pwd = './node_modules/userbar/lib/';

function createUserbar(options) {
  options.ltext = options.ltext + '';
  options.rtext = options.rtext + '';


  // Create img
  var img = gd.createTrueColor(450, 19);

  // Set colors
  var background = img.colorAllocate(43,87,151);
  var white = img.colorAllocate(255,255,255);
  var black = img.colorAllocate(0,0,0);

  img.fill(0,0,background);

  // paste lines
  var linespng = gd.createFromPng(pwd + 'lines.png');
  linespng.alphaBlending(0);
  linespng.copyResampled(img, 0, 0, 0, 0, 450, 19, 450, 19);

  // set text
  var name = {x: 20 + options.ltextxoffset, y: 13, text: options.ltext, size: 9, font: pwd + 'visitor.ttf'};
  var points = {x: 390 + options.rtextxoffset , y: 13, text: options.rtext, size: 9, font: pwd + 'visitor.ttf'};

  // font border
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

  // write left text
  img.stringFT(white, name.font, name.size, 0, name.x, name.y, name.text);

  // write right text
  img.stringFT(white, points.font, points.size, 0, points.x, points.y, points.text);

  // userbar border
  img.line(0, 0, 450, 0, black);
  img.line(0, 18, 450, 18, black);
  img.line(0, 0, 0, 18, black);
  img.line(449, 0, 449, 18, black);

  // save png
  img.savePng(options.path, 1, gd.noop);
}

exports.createUserbar = createUserbar;
