<template>
    <div class="side side-left" :style="contentStyleObj">
                    <Col :xs="22" :sm="22" :md="20" :lg="24" class="content-wrap align-center sec-pad">
                        <div class="table-wrap">
                            <div class="table-cell vertical-align-middle">
                                <p class="secondery-font margin-bottom-25" v-text="msg" ></p>
                                    <div class="type-wrap hide-overflow margin-bottom-15">
                                        <h1 class="animated slideInUp">
                                            <span class="typed" v-for="(letter,index) in words" :key="index" v-rainbow>{{letter}}</span><span class="typed-cursor"><img src="../../../assets/images/Pudding.png" alt=""></span>
                                        </h1>
                                    </div>
                                </div>
                        </div>
                     </col>
                </div>
</template>
<style lang="scss" scoped>
.side-left {
  background: url(../../../assets/images/change-leftBg3.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  left: 0;
  background-color: honeydew;
  color: #fff;
  p{
    color: #b76767
  }
  h1 {
    font-size: 40px;
    letter-spacing: 1.5px;
    line-height: 40px;
    color: #fff;
     font-weight: normal;
     font-family: "cartoon", serif;
}
}
.align-center{
  overflow: hidden;
  clear: both;
  float: none;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'あたしは燃えゆきたい光を放ちながら',
      words: [], // 字母数组push，pop的载体
      str: 'sanyl', // str初始化
      letters: [], // str分解后的字母数组
      order: 1, // 表示当前是第几句话
      show: true,
      contentStyleObj: {
        height: ''
      }
    }
  },
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8)
      }
    }
  },
  watch: { // 监听order值的变化，改变str的内容
    order (old, newV) {
      if (this.order % 4 === 1) {
        this.str = '愿你熬得过万丈孤独'
      } else if (this.order % 4 === 2) {
        this.str = '藏得下星辰大海'
      } else if (this.order % 4 === 3) {
        this.str = '愿你常在'
      } else {
        this.str = '躲得过离合悲欢'
      }
    }
  },
  mounted () { // 页面初次加载后调用begin()开始动画
    this.begin()
  },
  methods: {
    getHeight () {
      this.contentStyleObj.height = 500
      if (window.innerWidth < 1025 && window.innerWidth > 767) {
        this.contentStyleObj.height = window.innerHeight + 'px'
      } else this.contentStyleObj.height = '100%'
    },
    begin () {
      this.letters = this.str.split('')
      for (var i = 0; i < this.letters.length; i++) {
        setTimeout(this.write(i), i * 100)
      }
    },
    // 开始删除的效果动画
    back () {
      let L = this.letters.length
      for (var i = 0; i < L; i++) {
        setTimeout(this.wipe(i), i * 50)
      }
    },
    // 输入字母
    write (i) {
      return () => {
        let L = this.letters.length
        this.words.push(this.letters[i])
        let that = this
        /* 如果输入完毕，在2s后开始删除 */
        if (i === L - 1) {
          setTimeout(function () {
            that.back()
          }, 2000)
        }
      }
    },
    // 擦掉(删除)字母
    wipe (i) {
      return () => {
        this.words.pop(this.letters[i])
        /* 如果删除完毕，在300ms后开始输入 */
        if (this.words.length === 0) {
          this.order++
          let that = this
          setTimeout(function () {
            that.begin()
          }, 300)
        }
      }
    }
  },
  created () {
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },
  destroyed () {
    window.removeEventListener('resize', this.getHeight)
  }
}
</script>
