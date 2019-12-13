const canvas = document.querySelector("#mainCanvas")
const ctx = canvas.getContext("2d")

///////////////////////////////////////////////////////////
// 设置画笔填充样式
ctx.fillStyle = "gray"

// 画一个矩形：fillRect(x, y, w, h)
ctx.fillRect(50, 150, 100, 200)

///////////////////////////////////////////////////////////
// 设置描边样式
ctx.strokeStyle = "green"

// 画一个描边矩形(无填充)：strokeRect(x, y, w, h)
ctx.strokeRect(200, 150, 100, 200)

///////////////////////////////////////////////////////////
// 使用路径Path来画一个圆形
ctx.beginPath()

// 画圆：arc(x, y, radius, startAngle, endAngle)
ctx.arc(400, 150, 50, 0, Math.PI * 2)

// 填充样式
ctx.fillStyle = "yellow"

// 描画填充
ctx.fill()

///////////////////////////////////////////////////////////
// 画一条弧线
ctx.beginPath()

// 画弧：arc(x, y, radius, startAngle, endAngle)
ctx.arc(400, 250, 50, 0, Math.PI)

// 填充样式
ctx.fillStyle = "pink"

// 描画填充
ctx.fill()

///////////////////////////////////////////////////////////
// 画出任意两点之间的连线
ctx.beginPath()

// 移动到起始点
ctx.moveTo(500, 250)

// 向目标点画一条线
ctx.lineTo(600, 350)

// 线的样式
ctx.strokeStyle = "blue"

// 描画
ctx.stroke()
