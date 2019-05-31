<template>
   <div>
        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="side side-left" :style="contentStyleObj">
                    <Col :xs="22" :sm="22" :md="20" :lg="18" class="content-wrap align-center sec-pad">
                        <div class="table-wrap">
                            <div class="table-cell vertical-align-middle">
                                <header class="logo margin-bottom-25">
                                    <img src="img/logo.png" alt="logo">
                                </header>
                                <p class="secondery-font margin-bottom-25" v-text="msg"></p>
                                    <div class="type-wrap hide-overflow margin-bottom-15">
                                        <h1 class="animated slideInUp">
                                            <span class="typed" v-for="(letter,index) in words" :key="index">{{letter}}</span><span class="typed-cursor">|</span>
                                        </h1>
                                    </div>
                                <img class="inline-block margin-bottom-5" src="img/tree.png" alt="chrismas">
                                <span class="block secondery-font font-16 font-italic font-capitalize">Merry Christmas</span>
                                </div>
                        </div>
                     </col>
                </div>
            </col>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="side side-right bg-pattern" :style="contentStyleObj">
                   <Col  :lg="24" class="content-wrap sec-pad">
                      <div class="table-wrap">
                            <div class="table-cell vertical-align-middle">
                              <div class="main-content">
                                 <Col :xs="22" :sm="22" :md="20" :lg="16" class="intro-text hide-overflow align-center">
                            <transition name="slide-fade-top"
    >
                              <div id="slide_out" v-if="!show" class="relative" v-bind:style="styleObject1" style="opacity: 1; top: 0px; display: block;">
                              <img class="inline-block margin-bottom-5" src="img/tree.png" alt="chrismas">
                              <div id="countdown" class=" secondery-font font-16 font-italic margin-bottom-20">
                              <span class="days">00</span>
                              <span>days to go</span>
                              </div>
                        <h4 class="font-uppercase margin-top-35 margin-bottom-35">We craft unique digital experiences throughout the universe.</h4>
                        <div class="clearfix"></div>
                        <div class="notify-btn main-menu">
                          <Button type="primary" @click="into">Primary</Button>
                        </div>
                        </div>
</transition>
                                  <transition name="slide-fadeIn" enter-active-class="animated bounce">
                        <div id="slide_in"  v-if="show" class="text-left  notify-form-wrap relative hide-block hide-left-opac">
                          <Col :xs="24" :sm="24" :md="24" :lg="24">
                            <validateLogon/>
                            </col>
                              </div>
                              </transition>
                                 </col>
                              </div>
                            </div>
                  </div>
                  </col>
                </div>
            </col>
        </Row>
    </div>
</template>

<style lang="scss" scoped>
.side {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 50%;
  height: 100%;
  text-align: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.slide-fade-enter-active {

         transition: all .5s
}
.slide-fade-top-leave-active {
  opacity: 0;
}
.slide-fadeIn{
transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.text-left{
  text-align: left
}
.side-left {
  background: url(../../assets/hh.jpg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  left: 0;
      background-color: honeydew;
  color: #fff;
  p{
    color: #fff
  }
}
.side-right {
  right: 0;
  background: #fff;
  color: #47a3da;
}
.bg-pattern {
  background-color: #ffffff;
}
.content-wrap {
  height: 100%;
}
.align-center,
.address-detail {
  overflow: hidden;
  clear: both;
  float: none;
  margin: 0 auto;
}
.sec-pad {
  padding-top: 70px;
  padding-bottom: 70px;
}
.table-wrap {
  display: table;
  height: 100%;
  width: 100%;
}
.vertical-align-middle {
  vertical-align: middle;
}
.table-cell {
  display: table-cell;
}
h1 {
    font-size: 60px;
    letter-spacing: 1.5px;
    line-height: 60px;
    color: #fff;
    text-transform: uppercase;
}
.secondery-font {
    font-family: "cartoon", serif;
}
p{
    font-size: 16px;
    color: #767676;
    line-height: 25px;
    font-weight: 400;
    font-family: "cartoon", serif;
}
.margin-bottom-25 {
    margin-bottom: 25px;
}
@media only screen and (max-width: 1024px) {
  .side {
    width: 100%;
    position: relative;
    min-height: 500px;
  }
}
.bg-pattern {
    background-color: #ffffff;
    background: url(../../assets/loginBg.jpg);
        background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    background-color: aliceblue;
}
.relative {
    position: relative;
}
.font-italic {
    font-style: italic;
}
.font-16{
  font-size: 16px
}
h4 {
    font-size: 24px;
    line-height: 35px;
}

</style>

<script>
import validateLogon from './components/validateLogon'
export default {
  name: 'Login',
  components: { validateLogon },
  data () {
    return {
      msg: 'We are busy working on something awesome.',
      words: [], // 字母数组push，pop的载体
      str: 'sanyl', // str初始化
      letters: [], // str分解后的字母数组
      order: 1, // 表示当前是第几句话
      contentStyleObj: {
        height: ''
      },
      show: false,
      styleObject1: {
        opcticy: '',
        top: '',
        display: ''
      },
      styleObject: {
        opcticy: '',
        top: '',
        display: ''
      }
    }
  },
  watch: { // 监听order值的变化，改变str的内容
    order (old, newV) {
      if (this.order % 4 === 1) {
        this.str = 'Back Soon'
      } else if (this.order % 4 === 2) {
        this.str = 'Stay Tuned'
      } else if (this.order % 4 === 3) {
        this.str = 'Almost There'
      } else {
        this.str = 'haha'
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
    into () {
      this.show = !this.show
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
