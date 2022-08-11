function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    if(angleInDegrees==360){angleInDegrees=359.999}
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  
  function describeArc(x, y, radius, startAngle, endAngle){
  
      var start = polarToCartesian(x, y, radius, endAngle);
      var end = polarToCartesian(x, y, radius, startAngle);
  
      var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
      var d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ");
      return d;       
  }
  
  function describeLine(x,y,rot,len,centered){
    start=polarToCartesian(0,0,len,rot)
    if(centered){
        x=x-start.x/2
        y=y-start.y/2
    }

    var d = [
        "M", x, y, 
        "l", start.x,start.y
    ].join(" ");
    return d;
  }

  function mid(n1,n2,n3){
    return [n1,n2,n3].sort((a, b) => a - b)[1]
  }