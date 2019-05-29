let posterImgDom = document.getElementById('poster-img')

class Poster {
  constructor(canvasId, opt) {
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext('2d')
    // 可视宽度
    this.screenWidth = document.documentElement.clientWidth
    this.ratio = getPixelRatio(this.ctx)
    this.canvas.width = this.setPx(750)
    this.canvas.height = this.setPx(1200)
    this.imgUrl = './a.jpg'
  }

  init() {
    //this.setCanvasBackgroundColor()
    this.writeText('天山雪莲三包装', 20, 800)
    this.writeText('¥69.90', 20, 850, {
      color: '#FF0000',
      fontSize: 22
    })

    let p1 = this.drawImage(this.imgUrl, {
      w: 750,
      h: 750
    }).then(res => {
      console.log('画图完毕')
    })

    let p2 = this.drawQrCode()

    Promise.all([p1,p2]).then(res => {

      this.posterCanvasToImg().then(dataUrl => {
        console.log(dataUrl)
        posterImgDom.setAttribute('src', dataUrl)
      })
    })
  }

  setCanvasBackgroundColor(color = '#FFFFFF'){
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawImage(path, {x = 0, y = 0, w = 300, h = 300} = {}) {
    this.ctx.restore()
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.onload = () => {
        this.ctx.drawImage(img, Math.floor(this.setPx(x)), Math.floor(this.setPx(y)), Math.floor(this.setPx(w)), Math.floor(this.setPx(h)))
        resolve()
        this.ctx.save()
      }
      img.src = path
    })
  }

  drawQrCode() {
    return new Promise((resolve, reject) => {
      QRCode.toDataURL('https://m.ztbest.com/pages/goods/detail.html?productId=5043', (err, url) => {
        document.getElementById('qrcode').setAttribute('src', url)

        this.drawImage(url, {
          x: 450,
          y: 750,
          w: 300,
          h: 300
        }).then(res => {
          resolve()
        })
      })
    })
  }

  writeText(text, x, y, {fontSize = 32, color = '#000000'} = {}) {
    this.ctx.font = this.setPx(fontSize) + 'px serif'
    this.ctx.fillStyle = color
    this.ctx.fillText(text, this.setPx(x), this.setPx(y))
  }

  setPx(designPx) {
    let toRem = (this.screenWidth / 750) * designPx
    return (toRem * this.ratio)
  }

  posterCanvasToImg() {
    return new Promise((resolve, reject) => {
      resolve(this.canvas.toDataURL('image/jpg'))
    })
  }
}

new Poster('poster-canvas').init()

//获取canvas应该放大的倍数的方法；
function getPixelRatio(context) {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1
  return (window.devicePixelRatio || 1) / backingStore
}
