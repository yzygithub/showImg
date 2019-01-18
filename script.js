/* vue实例 */
var app = new Vue({
  el: '#app',
  data: {
    urls: [
      "http://i.imgur.com/14sW7.jpg"
     ,"http://i.imgur.com/14Djslp.jpg"
     ,"http://i.imgur.com/14DKUEn.jpg"
     ,"http://i.imgur.com/156hP69.jpg"
     ,"http://i.imgur.com/15mxZAD.jpg"
     ,"http://i.imgur.com/16qEjLE.jpg"
    ],
    imgUrl: null,
    activeInd: 0
  },
  mounted() {
    this.imgUrl = this.urls[0]
  },
  methods: {
    showImg(url, index) {
      this.imgUrl = url
      this.activeInd = index
    },
    up() {
      // console.log('up')
      if (this.activeInd != 0) {
        this.activeInd -= 1
      }
      this.imgUrl = this.urls[this.activeInd]
    },
    down() {
      // console.log('down')
      if (this.activeInd != this.urls.length - 1) {
        this.activeInd += 1
      }
      this.imgUrl = this.urls[this.activeInd]
    }
  }
})
// console.log(app)
/* 自适应屏幕大小 start */
var width = document.body.clientWidth
var height = document.body.clientHeight
// console.log(width,height)
document.getElementById('right').style.maxWidth = (width - 360) + 'px'
document.getElementById('right').style.maxHeight = (height - 30) + 'px'
/* 自适应屏幕大小 end */
addEventListener("keydown", function (event) {
  if (event.keyCode == 38) {
    app.up()
  }
  if (event.keyCode == 40) {
    app.down()
  }
  if (event.keyCode == 13) {
    collect(app.imgUrl)
  }
}, false);

function collect(url) {
  console.log('collect')
  var collect = window.localStorage.getItem('collect')
  // console.log('1',collect)
  if (collect) {
    collect = collect.split(',')
    // console.log('2',collect)
  } else {
    collect = []
    // console.log('2',collect)
  }
  collect.push(url)
  // console.log('3',collect)
  // JSON.stringify(collect)
  // console.log('4',collect)
  window.localStorage.setItem('collect', collect)
}
/* 读取文件 */
function upload(input) {
  // console.log(app)
  var file = input.files[0];
  filename = file.name.split(".")[0];
  var reader = new FileReader();
  reader.onload = function () {
    // console.log(this.result);
    app.urls = this.result.split(/\n/)
    console.log(app.urls);
    app.imgUrl = app.urls[0]
  }
  reader.readAsText(file);
}

/* TODO 下载 */
/* TODO 收藏 */
/* TODO 随机显示 */
/* TODO 切换显示模式 */
/* TODO 图片加载提示 */
/* TODO 收藏夹 */
