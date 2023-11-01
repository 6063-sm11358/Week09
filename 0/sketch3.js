let nSlider;

let particles
{
  x: random(width);
  y: random(height);
}

function setup()
{
  createCanvas(windowWidth,windowHeight);
  background(255);
  nSlider = createSlider(1, 200, 100, 10);
  nSlider.position(width/2,25);
  nSlider.style("width","200px");

  createParticles();
}

function draw()
{
  stroke(0);
  let nscale = nSlider.value();
 
  for(let pi=0; pi<particles.length; pi++)
  {
    let p = particles[pi];
    point(p.x, p.y);
    let nx = noise(p.x/nscale, p.y/nscale);
    let ny = noise(p.x/nscale, p.y/nscale);
    let vx = map(nx,0,1,-3,3);
    let vy = map(nx,0,1,-3,3);

    p.x+=vx;
    p.y+=vy;

    let stopped = (abs(vx) < 0.1 && abs(vy) < 0.1);
    if(p.x<0 || p.x>width || p.y>height || p.y<0)
    {
      p.x =random(width);
      p.y =random(height);
    }
  }
}