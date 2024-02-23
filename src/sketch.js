function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(800, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(0, 0, 50, 30);

    //semi-transparent rectangle
    fill(50, 0, 255, 25);
    rect(0, 0, 400, 400);
    fill(200, 200, 0, 25)
    rect(400, 0, 400, 400)
  
    //calling function
    drawBackground(180, 200);
    
    drawCreature(200, 200, color(0, 0, 90, 200), color(50, 90, 140, 200));
    
    drawBackground(580, 200, color(0, 0, 90, 200));
    
    drawCreature(600, 200, color(80, 50, 0, 200), color(120, 100, 60, 200));
    
  }
  
  function drawBackground(x, y) 
    {
      push();
      
        //translate by whatever args passed in
        translate(x, y);
        scale(0.60);
        rotate(-PI/12);
      
        fill(0, 0, 0);
        noStroke()
      
        //background
        fill(200, 200, 255, 20)
        noStroke()
        ellipse(300, -150, 500)
        fill(200, 200, 255, 10)
        noStroke()
        ellipse(300, -150, 800)
        fill(200, 200, 255, 2)
        noStroke()
        ellipse(300, -150, 1200)
    
    
        //bubble
        fill(200, 200, 255, 50)
        noStroke()
        ellipse(300, -150, 200)
    
        //exclam
        fill(230, 230, 255);
        noStroke()
        quad(270, -180, 290, -200, 310, -140, 290, -130)
        ellipse(310, -110, 20) 
      pop();
  }
  
  function drawCreature(x, y, colorBrow, colorTummy){
        push();
      
      //translate by whatever args passed in
      translate(x, y);
      scale(0.6);
      rotate(-PI/12);
    
      fill(0, 0, 0);
      noStroke()
      //translate (x, y)
    
      //body
      fill(230, 230, 255);
      noStroke()
      rect(-20, -30, 50, 250)
      rect(80, -30, 50, 250)
      rect(30, -10, 50, 150)
      fill(colorTummy)
      ellipse(60, 10, 80, 150)
    
    
      //ears
      fill(255, 255, 248);
      noStroke()
      triangle(-60, -100, -40, -260, -10, -150);
      triangle(80, -160, 110, -290, 130, -140);
    
      //head
      quad(-60, -100, -10, -150, 80, -160, 130, -140, 140, -20)
      quad(-60, -100, -50, -50, 144, -50, 130, -140)
    //chin
      quad(160, -80, 170, 5, 20, 20, -50, -50, -140, -110);
      triangle(160, -80, 130, -90, 130, -70)
    
      //nose
      fill(0, 0, 50, 256)
      ellipse(100, -60, 90, 40);
    
      //eyes
      fill(0, 0, 0)
      ellipse(20, -90, 20)
      ellipse(100, -100, 20)  
      
      //eyebrows
      fill(colorBrow)
      ellipse(10, -120, 30, 20);
      ellipse(100, -125, 30, 20);
    
    
      //mouth
      stroke(0, 0, 90, 255)
      noFill()
      strokeWeight(8)
      arc(70, -35, 60, 40, 1/9, 3*PI/4);
      arc(125, -40, 60, 40, PI/3, 5*PI/6);
   
    
      //arms
      push();
        fill(230, 230, 255);
        noStroke()
        rotate(-PI/4);
        ellipse(-75, 0, 150, 30)
        rotate(PI/4)
        ellipse(180, 30, 150, 28)
      pop();
      
      function mouseClicked() {
        if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
        backgroundColor = 255
      } else {
        backgroundColor = 0
      }
         clicked = !clicked;
      }
    
    pop();
  
}
