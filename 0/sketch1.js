let nSlider;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  nSlider = createSlider(1, 1000, 1, 10);
  nSlider.position(25,25);
  nSlider.style("width","200px");
}

function draw()
{
  background(0);
  stroke(255,200,200);
  let nscale = nSlider.value();
  
  for(let i=0; i<width; i++)
  {
    stroke(random(0,256),random(0,50),0);
    let y = height*noise(i/nscale);
    line(i,height/2,i,y);
  }

  let x = frameCount%width;
  let y = height * noise(x/nscale);
  fill(255);
  ellipse(x, y, 10);
}
