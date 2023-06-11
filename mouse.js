let point = [], 
    mouse = { 
      a: 0,
      b: 0  
    };

let Points = function(){
  this.a = 0;
  this.b = 0;
  this.node = (function(){
    let m = document.createElement("div");
    m.className = "mouse-trail";
    document.body.appendChild(m);
    return m;
  }());
};

Points.prototype.draw = function(){
  this.node.style.left = this.a + "px";
  this.node.style.top = this.b + "px";
};

for(let i = 0; i < 15; i++){
  let h = new Points();
  point.push(h);
}

function draw(){
  let a = mouse.a,
      b = mouse.b;
  
  point.forEach(function(points, index, point){
    let mark = point[index + 1] || point[0];
    
    points.a = a;
    points.b = b;
    points.draw();
    a += (mark.a - points.a) * .5;
    b += (mark.b - points.b) * .5;
  });
}

addEventListener("mousemove", (e) => {
  mouse.a = e.pageX;
  mouse.b = e.pageY;
});

function animation(){
  draw();
  requestAnimationFrame(animation);
}

animation();
  