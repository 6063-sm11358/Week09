let nSlider;
let gridSize = 16;

function setup()
{
  createCanvas(windowWidth,windowHeight);
  nSlider = createSlider(1, 250, 1, 10);
  nSlider.position(width/2,25);
  nSlider.style("width","200px");
}

function draw()
{
  background(255);
  stroke(255,200,200);
  let nscale = nSlider.value();
  
  for(let x=0; x<width/3; x+=gridSize)
  {
    for(let y=0; y<height/1.5; y+=gridSize)
    {
      noStroke();
      fc = 255 * noise(x/nscale, y/nscale);
      fill(fc,0,100);
      rect(x, y, gridSize, gridSize);
    }
  }
}
