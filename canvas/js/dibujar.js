const canvas=document.querySelector('#lienzo')
const ctx=canvas.getContext('2d')


//cielo stroke*******************************************

ctx.lineWidth=3
ctx.strokeStyle='lightblue'
ctx.rect(0,0,1000,500)
ctx.stroke()

//cielo relleno
ctx.fillStyle="rgba(185,250,242,1)"
ctx.fillRect(0,0,1000,500)


//montañas************************************************
ctx.beginPath()
ctx.moveTo(0,200)
ctx.lineTo(100,100)
ctx.lineTo(100,100)
ctx.lineTo(300,300)
ctx.lineTo(300,300)
ctx.lineTo(500,100)
ctx.lineTo(500,100)
ctx.lineTo(900,400)
ctx.lineTo(900,400)
ctx.lineTo(1000,300)
ctx.lineTo(1000,300)
ctx.lineTo(1000,500)
ctx.lineTo(1000,500)
ctx.lineTo(0,500)
ctx.lineTo(0,500)
ctx.lineTo(0,200)
ctx.lineWidth=4;
ctx.strokeStyle='rgba(187,191,179,1)'
ctx.stroke()
ctx.fillStyle='rgba(187,191,179,1)'
ctx.fill()


//SOL **************************************************

ctx.beginPath()

ctx.arc(200,100,4 ,0,0,2*Math.PI)

//relleno 
ctx.fillStyle='yellow'
ctx.fill()

// //contorno 
ctx.lineWidth=11
ctx.strokeStyle='rgba(255,183,74,0.4)'
ctx.stroke()


//TRONCOS*******************************************************
 
//tronco 1
ctx.lineWidth=2
ctx.strokeStyle='rgba(117,69,38,1)'
ctx.rect(100,400,30,100)
ctx.stroke()

ctx.fillStyle='rgba(117,69,38,1)'
ctx.fillRect(100,400,30,100)



//tronco 2
ctx.lineWidth=2
ctx.strokeStyle='rgba(117,69,38,1)'
ctx.rect(300,400,10,100)
ctx.stroke()

ctx.fillStyle='rgba(117,69,38,1)'
ctx.fillRect(300,400,10,100)


//tronco 3
ctx.lineWidth=2
ctx.strokeStyle='rgba(117,69,38,1)'
ctx.rect(350,400,20,100)
ctx.stroke()

ctx.fillStyle='rgba(117,69,38,1)'
ctx.fillRect(350,400,20,100)


//tronco 4
ctx.lineWidth=2
ctx.strokeStyle='rgba(117,69,38,1)'
ctx.rect(850,400,50,100)
ctx.stroke()

ctx.fillStyle='rgba(117,69,38,1)'
ctx.fillRect(850,400,50,100)

//HOJAS***************************************************

//hojas1
ctx.beginPath()
ctx.arc(120,370,60,0,2*Math.PI)

//relleno 
ctx.fillStyle='green'
ctx.fill()




//hojas2
ctx.beginPath()
ctx.arc(308,370,40,0,2*Math.PI)

//relleno 
ctx.fillStyle='darkgreen'
ctx.fill()






//hojas3
ctx.beginPath()
ctx.arc(359,370,50,0,2*Math.PI)

//relleno 
ctx.fillStyle='green'
ctx.fill()



//hojas3
ctx.beginPath()
ctx.arc(878,370,80,0,2*Math.PI)

//relleno 
ctx.fillStyle='green'
ctx.fill()





