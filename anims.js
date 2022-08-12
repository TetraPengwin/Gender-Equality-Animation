function test(rot,size,x,y){
    topp=svg.children
}

function f_0(){
    topp=svg.children
    topp.top.setAttribute('d',describeLine(0,0,90,1920))
    topp.left.setAttribute('d',describeLine(0,0,180,1080))
    topp.bottom.setAttribute('d',describeLine(0,1080,90,1920))
    topp.right.setAttribute('d',describeLine(1920,0,180,1080))
}

function f_1(rot,size,x,y){
    rot=mid(0,rot,360)
    topp=svg.children
    topp.circ1.setAttribute('d',describeArc(x,y, size, 0, rot))
    topp.circ2.setAttribute('d',describeArc(x*2,y, size, 0, rot))
    topp.circ3.setAttribute('d',describeArc(x*3,y, size, 0, rot))
}

function f_2(rot,size,x,y){
    rot=mid(0,rot,360)
    topp=svg.children
    topp.circ1.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.line11.setAttribute('d',describeLine(x,y+size,180,size*(rot/260),false))
    topp.line12.setAttribute('d',describeLine(x,y+size*1.75,90,size*(rot/360),true))
    topp.circ2.setAttribute('d',describeArc(x*2,y, size, 0, 360))
    topp.line21.setAttribute('d',describeLine(x*2+size*0.7,y-size*0.7,45,size*(rot/260),false))
    topp.line22.setAttribute('d',describeLine(x*2+size*1.75,y-size*1.75,180,size*(rot/360),false))
    topp.line23.setAttribute('d',describeLine(x*2+size*1.75,y-size*1.75,270,size*(rot/360),false))
    
    topp.circ3.setAttribute('d',describeArc(x*3,y, size, 0, 360))
    topp.line31.setAttribute('d',describeLine(x*3,y+size*1.75,0,size*(rot/260),true))
    topp.line32.setAttribute('d',describeLine(x*3,y+size*1.75,90,size*(rot/360),true))
    topp.line33.setAttribute('d',describeLine(x*3+size*0.7,y-size*0.7,45,size*(rot/260),false))
    topp.line34.setAttribute('d',describeLine(x*3+size*1.75,y-size*1.75,180,size*(rot/360),false))
    topp.line35.setAttribute('d',describeLine(x*3+size*1.75,y-size*1.75,270,size*(rot/360),false))

    topp.line36.setAttribute('d',describeLine(x*3-size,y-size,45,size*(rot/360),true))
    topp.line37.setAttribute('d',describeLine(x*3-size*0.7,y-size*0.7,315,size*(rot/260),false))
    topp.line38.setAttribute('d',describeLine(x*3-size*1.73,y-size*1.73,180,size*(rot/360),false))
    topp.line39.setAttribute('d',describeLine(x*3-size*1.73,y-size*1.73,90,size*(rot/360),false))

}

function f_3(rot,size,x,y){
    rot=mid(0,rot,500)
    size=size-rot/16
    topp=svg.children
    topp.circ1.setAttribute('d',describeArc(x-rot/4,y+rot, size, 0, 360))
    topp.line11.setAttribute('d',describeLine(x-rot/4,y+size+rot,180,size*1.4,false))
    topp.line12.setAttribute('d',describeLine(x-rot/4,y+size*1.75+rot,90,size,true))
    topp.circ2.setAttribute('d',describeArc(x*2-rot/8,y+rot/2, size+rot/4, 0, 360))
    topp.line21.setAttribute('d',describeLine(x*2+(size+rot/4)*0.7-rot/8,y-(size+rot/4)*0.7+rot/2,45,(size+rot/4)*1.4,false))
    topp.line22.setAttribute('d',describeLine(x*2+(size+rot/4)*1.75-rot/8,y-(size+rot/4)*1.75+rot/2,180,size+rot/4,false))
    topp.line23.setAttribute('d',describeLine(x*2+(size+rot/4)*1.75-rot/8,y-(size+rot/4)*1.75+rot/2,270,size+rot/4,false))
    
    topp.circ3.setAttribute('d',describeArc(x*3+rot/4,y+rot, size, 0, 360))
    topp.line31.setAttribute('d',describeLine(x*3+rot/4,y+size*1.75+rot,0,size*1.4,true))
    topp.line32.setAttribute('d',describeLine(x*3+rot/4,y+size*1.75+rot,90,size,true))
    topp.line33.setAttribute('d',describeLine(x*3+size*0.7+rot/4,y-size*0.7+rot,45,size*1.4,false))
    topp.line34.setAttribute('d',describeLine(x*3+size*1.75+rot/4,y-size*1.75+rot,180,size,false))
    topp.line35.setAttribute('d',describeLine(x*3+size*1.75+rot/4,y-size*1.75+rot,270,size,false))

    topp.line36.setAttribute('d',describeLine(x*3-size+rot/4,y-size+rot,45,size,true))
    topp.line37.setAttribute('d',describeLine(x*3-size*0.7+rot/4,y-size*0.7+rot,315,size*1.4,false))
    topp.line38.setAttribute('d',describeLine(x*3-size*1.73+rot/4,y-size*1.73+rot,180,size,false))
    topp.line39.setAttribute('d',describeLine(x*3-size*1.73+rot/4,y-size*1.73+rot,90,size,false))

}

function f_4(rot,size,x,y){
    rot=mid(0,rot,960)
    topp=svg.children
    topp.circ1.setAttribute('d',describeArc(x+430+(Math.sin(rot/200)*-100),y, size, 0, 360))
    topp.line11.setAttribute('d',describeLine(x+430+(Math.sin(rot/200)*-100),y+size,180,size*1.4,false))
    topp.line12.setAttribute('d',describeLine(x+430+(Math.sin(rot/200)*-100),y+size*1.75,90,size,true))

    topp.ffs.setAttribute('d',describeArc(x,y,260,0,360))
    x=x-150
    y=y+100
    topp.m1c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.m11.setAttribute('d',describeLine(x+size*0.7,y-size*0.7,45,size*1.5,false))
    topp.m12.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,180,size,false))
    topp.m13.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,270,size,false))
    x=x+50
    y=y-170
    topp.m2c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.m21.setAttribute('d',describeLine(x+size*0.7,y-size*0.7,45,size*1.5,false))
    topp.m22.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,180,size,false))
    topp.m23.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,270,size,false))
    x=x+180
    y=y+220
    topp.m3c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.m31.setAttribute('d',describeLine(x+size*0.7,y-size*0.7,45,size*1.5,false))
    topp.m32.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,180,size,false))
    topp.m33.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,270,size,false))
    x=x-60
    y=y-130
    topp.m4c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.m41.setAttribute('d',describeLine(x+size*0.7,y-size*0.7,45,size*1.5,false))
    topp.m42.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,180,size,false))
    topp.m43.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,270,size,false))
  
}

function f_5(rot,size,x,y){
    rot=mid(0,rot,960)
    topp=svg.children
    topp.circ1.setAttribute('d',describeArc(x-460+(Math.sin(rot/200)*100),y, size, 0, 360))
    topp.line11.setAttribute('d',describeLine(x-460+(Math.sin(rot/200)*100)+size*0.7,y-size*0.7,45,size*1.5,false))
    topp.line12.setAttribute('d',describeLine(x-460+(Math.sin(rot/200)*100)+size*1.75,y-size*1.75,180,size,false))
    topp.line13.setAttribute('d',describeLine(x-460+(Math.sin(rot/200)*100)+size*1.75,y-size*1.75,270,size,false))

    topp.ffs.setAttribute('d',describeArc(x,y,260,0,360))

    x=x-150
    y=y+50
    
    topp.f1c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.f11.setAttribute('d',describeLine(x,y+size,180,size*1.5,false))
    topp.f12.setAttribute('d',describeLine(x,y+size*1.75,90,size,true))
    x=x+100
    y=y-170
    topp.f2c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.f21.setAttribute('d',describeLine(x,y+size,180,size*1.5,false))
    topp.f22.setAttribute('d',describeLine(x,y+size*1.75,90,size,true))
    x=x+70
    y=y+220
    topp.f3c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.f31.setAttribute('d',describeLine(x,y+size,180,size*1.5,false))
    topp.f32.setAttribute('d',describeLine(x,y+size*1.75,90,size,true))
    x=x+130
    y=y-130
    topp.f4c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.f41.setAttribute('d',describeLine(x,y+size,180,size*1.5,false))
    topp.f42.setAttribute('d',describeLine(x,y+size*1.75,90,size,true))
  
}

function f_6(rot,size,x,y){
    open=0
    if(anim_idx==7){open=rot}
    topp=svg.children
    if(open<360){topp.ffs.setAttribute('d',describeArc(x,y,260,0,360-open))}else{topp.ffs.setAttribute('d','  ')}
    x=x-150
    y=y+100
    topp.m1c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.m11.setAttribute('d',describeLine(x+size*0.7,y-size*0.7,45,size*1.5,false))
    topp.m12.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,180,size,false))
    topp.m13.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,270,size,false))
    x=x+50
    y=y-170
    topp.m2c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.m21.setAttribute('d',describeLine(x+size*0.7,y-size*0.7,45,size*1.5,false))
    topp.m22.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,180,size,false))
    topp.m23.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,270,size,false))
    x=x+180
    y=y+220
    topp.m3c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.m31.setAttribute('d',describeLine(x+size*0.7,y-size*0.7,45,size*1.5,false))
    topp.m32.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,180,size,false))
    topp.m33.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,270,size,false))
    x=x-60
    y=y-130
    topp.m4c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.m41.setAttribute('d',describeLine(x+size*0.7,y-size*0.7,45,size*1.5,false))
    topp.m42.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,180,size,false))
    topp.m43.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,270,size,false))
    x=x-20
    y=y-20
    x=1920-x
    if(open<360){topp.ffsf.setAttribute('d',describeArc(x,y,260,0,360-open))}else{topp.ffsf.setAttribute('d','  ')}

    x=x-150
    y=y+50
    
    topp.f1c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.f11.setAttribute('d',describeLine(x,y+size,180,size*1.5,false))
    topp.f12.setAttribute('d',describeLine(x,y+size*1.75,90,size,true))
    x=x+100
    y=y-170
    topp.f2c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.f21.setAttribute('d',describeLine(x,y+size,180,size*1.5,false))
    topp.f22.setAttribute('d',describeLine(x,y+size*1.75,90,size,true))
    x=x+70
    y=y+220
    topp.f3c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.f31.setAttribute('d',describeLine(x,y+size,180,size*1.5,false))
    topp.f32.setAttribute('d',describeLine(x,y+size*1.75,90,size,true))
    x=x+130
    y=y-130
    topp.f4c.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.f41.setAttribute('d',describeLine(x,y+size,180,size*1.5,false))
    topp.f42.setAttribute('d',describeLine(x,y+size*1.75,90,size,true))
  
    x=1920/2
    y=750
    y+=Math.sin(rot/180)*40
    topp.circ3.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.line31.setAttribute('d',describeLine(x,y+size*1.75,0,size*1.5,true))
    topp.line32.setAttribute('d',describeLine(x,y+size*1.75,90,size,true))
    topp.line33.setAttribute('d',describeLine(x+size*0.7,y-size*0.7,45,size*1.4,false))
    topp.line34.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,180,size,false))
    topp.line35.setAttribute('d',describeLine(x+size*1.75,y-size*1.75,270,size,false))

    topp.line36.setAttribute('d',describeLine(x-size,y-size,45,size,true))
    topp.line37.setAttribute('d',describeLine(x-size*0.7,y-size*0.7,315,size*1.4,false))
    topp.line38.setAttribute('d',describeLine(x-size*1.73,y-size*1.73,180,size,false))
    topp.line39.setAttribute('d',describeLine(x-size*1.73,y-size*1.73,90,size,false))

}

function f_7(rot,size,x,y){
    topp=svg.children
    thing=size*(2.5 - (0.75/(540/rot) ))

    rot=rot/4+45
    r=polarToCartesian(0,0,size,rot)

    topp.circ.setAttribute('d',describeArc(x,y, size, 0, 360))
    topp.l1.setAttribute('d',describeLine(x+r.x,y+r.y,rot,size*1.5,false))
    r=polarToCartesian(0,0,thing,rot)
    topp.l2.setAttribute('d',describeLine(x+r.x,y+r.y,rot+135-rot/4,(1-(rot/360))*size,false))
    topp.l3.setAttribute('d',describeLine(x+r.x,y+r.y,rot+225+rot/4,(1-(rot/360))*size,false))

    if(anim_idx==10){
        x=960
        y=220
        size=0.7
        topp.h1.setAttribute('d',describeLine(x,y+215*size,46,150*size,false))
        topp.h2.setAttribute('d',describeLine(x,y+215*size,-46,150*size,false))
        topp.h3.setAttribute('d',describeArc(x+50*size,y+80*size,65*size,-45,120))
        topp.h4.setAttribute('d',describeArc(x-50*size,y+80*size,65*size,240,410))
    }
}

function f_8(rot,size,x,y){
    topp=svg.children
    rot=mid(0,rot,360)
offset=0
    offset=Math.sin(rot/360)*260
    r=polarToCartesian(0,0,size,rot)
    
    topp.circ.setAttribute('d',describeArc(x-offset,y,size,0,360))
    topp.l1.setAttribute('d',describeLine(x-offset,y+size,180,size*1.5,false))
    topp.l2.setAttribute('d',describeLine(x-offset,y+size*1.75,90,150,true))
    topp.l3.setAttribute('d',describeLine(x-offset,y+size*1.75,90,150,true))
   x=x+1500
   
   offset=Math.sin(rot/360)*1535
    topp.gfc.setAttribute('d',describeArc(x-offset,y,size,0,360))
    topp.gf1.setAttribute('d',describeLine(x-offset,y+size,180,size*1.5,false))
    topp.gf2.setAttribute('d',describeLine(x-offset,y+size*1.75,90,150,true))

    x=960
    y=220+rot/4
    size=0.7
    topp.h1.setAttribute('d',describeLine(x,y+215*size,46,150*size,false))
    topp.h2.setAttribute('d',describeLine(x,y+215*size,-46,150*size,false))
    topp.h3.setAttribute('d',describeArc(x+50*size,y+80*size,65*size,-45,120))
    topp.h4.setAttribute('d',describeArc(x-50*size,y+80*size,65*size,240,410))

}

