<template>
    <div class="side side-right bg-pattern" :style="contentStyleObj">
        <Col  :lg="24" class="content-wrap sec-pad">
            <div class="table-wrap">
                <div class="table-cell vertical-align-middle">
                    <div class="main-content">
                        <Col :xs="22" :sm="22" :md="20" :lg="18" class="intro-text hide-overflow align-center">
                            <transition name="on" mode="out-in">
                                <div id="slide_out" v-if="show" class="relative" key="but1">
                                    <header class="logo margin-bottom-25">
                                        <img src="../../../assets/images/logo1.png" alt="logo" style="width:90%">
                                    </header>
                                    <h4 class="font-uppercase margin-top-35 margin-bottom-35 quotations">The light of life must blossom, the stronger the more dazzling</h4>
                                    <div class="clearfix"></div>
                                    <div class="notify-btn main-menu">
                                    <Button type="primary" @click="into">燃尽吧</Button>
                                    </div>
                                </div>
                                <div id="slide_in"  v-else key="but2" class="text-left  notify-form-wrap relative hide-block hide-left-opac">
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
</template>
<style lang="scss" scoped>
.side-right {
  right: 0;
  background: #fff;
  color: lavender;
  .quotations{
  font-size: 24px;
  line-height: 35px;
  font-family: "cartoon", serif;
}
}
  .bg-pattern {
    background-color: #ffffff;
    background: url(../../../assets/images/change-rightBg1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    background-color: aliceblue;
}
.align-center{
  overflow: hidden;
  clear: both;
  float: none;
  margin: 0 auto;
}
</style>

<script>
import validateLogon from '../components/validateLogon'
export default {
  name: 'Login',
  components: { validateLogon },
  data () {
    return {
      contentStyleObj: {
        height: ''
      },
      show: true
    }
  },
  methods: {
    into () {
      this.show = !this.show
    },
    getHeight () {
      this.contentStyleObj.height = 500
      if (window.innerWidth < 1025 && window.innerWidth > 767) {
        this.contentStyleObj.height = window.innerHeight + 'px'
      } else this.contentStyleObj.height = '100%'
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
