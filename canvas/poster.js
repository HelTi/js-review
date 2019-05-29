console.log('poster')
const theCanvas = document.getElementById('poster-canvas')
const ctx = theCanvas.getContext('2d')

let posterImgDom = document.getElementById('poster-img')
let imgUrl1 = './b.jpg'

let ratio = getPixelRatio(ctx);

let canvasWidth = theCanvas.width,
  canvasHeight = theCanvas.height;

let screenWidth = document.documentElement.clientWidth

// 已设计图 750计算
function rootRem(designPx) {
  return (screenWidth / 750) * designPx
}

function setPx(designPx) {
  return rootRem(designPx) * ratio
}

// 设置高度，宽度
theCanvas.width = setPx(750)
theCanvas.height = setPx(1100)

//ctx.font = 16 * ratio + 'px';
// ctx.fillText("肥牛三包装", 100, 150);

writeText('天山雪莲三包装', ctx, 20, 800)
writeText('¥69.90', ctx, 20, 850, {
  color: '#FF0000'
})
//posterCanvasToImg(theCanvas)

drawImage(imgUrl1, ctx, function () {
  console.log('11', ctx)
  posterCanvasToImg(theCanvas)
})

function drawImage(path, ctx, cb) {
  var img = new Image();
  img.src = imgUrl1;
  img.onload = function () {
    console.log('toRem(750)', setPx(750))
    ctx.drawImage(img, 0, 0, setPx(750), setPx(750))
    cb && cb()
  };
}

function writeText(text, ctx, x, y, opt) {
  console.log('fpx', setPx(32))
  ctx.font = setPx(32) + 'px serif';
  if (opt && opt.color) {
    ctx.fillStyle = opt.color;
  } else {
    ctx.fillStyle = '#000000';
  }
  console.log(setPx(x), setPx(y))
  ctx.fillText(text, setPx(x), setPx(y));
}

function posterCanvasToImg(canvas) {
  let base64 = canvas.toDataURL('image/png')

  posterImgDom.setAttribute('src', base64)
}


//获取canvas应该放大的倍数的方法；
function getPixelRatio(context) {
  var backingStore = context.backingStorePixelRatio
    || context.webkitBackingStorePixelRatio
    || context.mozBackingStorePixelRatio
    || context.msBackingStorePixelRatio
    || context.oBackingStorePixelRatio
    || context.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStore;

}