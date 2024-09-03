let s = 6, t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  noCursor(); // Hide the default cursor
}

function draw() {
  t += 0.02;
  background(248, 248, 248, 50); // Slightly transparent background to allow content visibility

  for (let y = 0; y < height; y += s) {  // Loop through the height of the canvas
    for (let x = 0; x < width; x += s) {  // Loop through the width of the canvas
      let kx = mouseX - x;
      let ky = mouseY - y;
      let d = -exp(-mag(kx, ky) / (40 + 145 * noise(x / 50, y / 50)));
      
      let ax = x + kx * d;
      let ay = y + ky * d;
      let bx = x + kx * d;
      let by = y + s + ky * d;
      let cx = x + s + kx * d;
      let cy = y + ky * d;
      
      triangle(ax, ay, bx, by, cx, cy);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize canvas when window size changes
}
