  var thetamin = 0,
    thetamax = 6 * Math.PI,
    period = 5,
    linespacing = 1 / 30,
    linelength = linespacing / 3,
    yscreenoffset = 600,
    xscreenoffset = 520,
    xscreenscale = 720,
    yscreenscale = 720,
    ycamera = 2,
    zcamera = -3,

    hrySpiralR = 1 / (2 * Math.PI),
    hrySpiralF = hrySpiralR / 2.75;

  function run() {
    var hryXmasTree = document.getElementById('hryXMASTree').getContext('2d'),
        hrySpirals = [
                  new Spiral({
            foreground: "#220000", // red shadow 2
            angleoffset: Math.PI * 3.6,
            hrySpiralF: 0.90 * hrySpiralF
          }),
          new Spiral({
            foreground: "#220a00", // orange shadow 2
            angleoffset: Math.PI * 3.25,
            hrySpiralF: 0.90 * hrySpiralF
          }),                  
          new Spiral({
            foreground: "#221800", // yellow shadow 2
            angleoffset: Math.PI * 2.9,
            hrySpiralF: 0.90 * hrySpiralF
          }),
          new Spiral({
            foreground: "#002207", // green shadow 2
            angleoffset: Math.PI * 2.6,
            hrySpiralF: 0.90 * hrySpiralF
          }),
          new Spiral({
            foreground: "#001b22", // blue shadow 2
            angleoffset: Math.PI * 2.25,
            hrySpiralF: 0.90 * hrySpiralF
          }),          
          new Spiral({
            foreground: "#0a0022", // purple shadow 2
            angleoffset: Math.PI * 1.95,
            hrySpiralF: 0.90 * hrySpiralF
          }),
          new Spiral({
            foreground: "#660000", // red shadow
            angleoffset: Math.PI * 1.6,
            hrySpiralF: 0.95 * hrySpiralF
          }), 
          new Spiral({
            foreground: "#661e00", // orange shadow
            angleoffset: Math.PI * 1.27,
            hrySpiralF: 0.95 * hrySpiralF
          }),                    
          new Spiral({
            foreground: "#323300", // yellow shadow
            angleoffset: Math.PI * 0.95,
            hrySpiralF: 0.95 * hrySpiralF
          }),
          new Spiral({
            foreground: "#003305", // green shadow
            angleoffset: Math.PI * 0.62,
            hrySpiralF: 0.95 * hrySpiralF
          }),
          new Spiral({
            foreground: "#002933", // blue shadow
            angleoffset: Math.PI * 0.29,
            hrySpiralF: 0.95 * hrySpiralF
          }),
          new Spiral({
            foreground: "#0b0033", // purple shadow
            angleoffset: -Math.PI * 0.025,
            hrySpiralF: 0.95 * hrySpiralF
          }),
          new Spiral({
            foreground: "#ff0000", // red
            angleoffset: 5,
            hrySpiralF: hrySpiralF
          }),
                    new Spiral({
            foreground: "#ff6e00", // orange
            angleoffset: 4,
            hrySpiralF: hrySpiralF
          }),
          new Spiral({
            foreground: "#fff200", // yellow
            angleoffset: 3,
            hrySpiralF: hrySpiralF
          }),
          new Spiral({
            foreground: "#00ff37", // green
            angleoffset: 2,
            hrySpiralF: hrySpiralF
          }),
          new Spiral({
            foreground: "#00c3ff", // blue
            angleoffset: 1,
            hrySpiralF: hrySpiralF
          }),
          new Spiral({
            foreground: "#5900ff", // purple
            angleoffset: 0,
            hrySpiralF: hrySpiralF
          })];

    renderFrame(); // animation

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      hryXmasTree.clearRect(0, 0, 1000, 1000);
      hryXmasTree.beginPath();
      hrySpirals.forEach(renderSpiral);
    }

    function renderSpiral(spiral) {
      spiral.render(hryXmasTree);
    }

    function Spiral(config) {
      var offset = 0;
      var lineSegments = computeLineSegments();

      this.render = function(hryXmasTree) {
        offset -= 1;
        if (offset <= -period) {
          offset += period;
        }

        lineSegments[offset].forEach(drawLineSegment);
      };

      function drawLineSegment(segment) {
        stroke(config.foreground, segment.start.alpha);
        hryXmasTree.moveTo(segment.start.x, segment.start.y);
        hryXmasTree.lineTo(segment.end.x, segment.end.y);
      }

      function computeLineSegments() {
        var lineSegments = {};
        var hrySpiralF = config.hrySpiralF;
        var thetanew, thetaold;
        for (var offset = 0; offset > -period; offset--) {
          lineSegments[offset] = lines = [];
          for (var theta = thetamin + getdtheta(thetamin, offset * linespacing / period, hrySpiralR, hrySpiralF); theta < thetamax; theta += getdtheta(theta, linespacing, hrySpiralR, hrySpiralF)) {
            thetaold = (theta >= thetamin) ? theta : thetamin;
            thetanew = theta + getdtheta(theta, linelength, hrySpiralR, hrySpiralF);

            if (thetanew <= thetamin) {
              continue;
            }

            lines.push({
              start: getPointByAngle(thetaold, hrySpiralF, config.angleoffset, hrySpiralR),
              end: getPointByAngle(thetanew, hrySpiralF, config.angleoffset, hrySpiralR)
            });
          }
        }

        return lineSegments;
      }
    }

    function stroke(color, alpha) {
      hryXmasTree.closePath();
      hryXmasTree.stroke();
      hryXmasTree.strokeStyle = color;
      hryXmasTree.globalAlpha = alpha;
      hryXmasTree.beginPath();
    }

    function getPointByAngle(theta, hrySpiralF, angleoffset, hrySpiralR) {
      var x = theta * hrySpiralF *  Math.cos(theta + angleoffset);
      var z = - theta * hrySpiralF * Math.sin(theta + angleoffset);
      var y = hrySpiralR * theta;
      // now that we have 3d coorinates, project them into 2d space:
      var point = projectTo2d(x, y, z);
      // calculate point's color alpha level:
      point.alpha = Math.atan((y * hrySpiralF / hrySpiralR * 0.1 + 0.02 - z) * 40) * 0.35 + 0.65;

      return point;
    }

    function getdtheta(theta, lineLength, hrySpiralR, hrySpiralF) {
      return lineLength / Math.sqrt(hrySpiralR * hrySpiralR + hrySpiralF * hrySpiralF * theta * theta);
    }

    function projectTo2d(x, y, z) {
      return {
        x: xscreenoffset + xscreenscale * (x / (z - zcamera)),
        y: yscreenoffset + yscreenscale * ((y - ycamera) / (z - zcamera))
      };
    }

    // fps :D
    function requestAnimationFrame(callback) {
      window.setTimeout(callback, 1000 / 15);
    }
  }
