<template>
   <div>
        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
              <sideLeft />
            </col>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
                <sideRight/>
            </col>
        </Row>
    </div>
</template>

<style lang="css">
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
@media only screen and (max-width: 1024px) {
  .side {
    width: 100%;
    position: relative;
    min-height: 500px;
  }
}
.on-enter-active,.off-enter-active{
      transition: 1s ease;
    }
    .on-leave-active,.off-leave-active{
      transition:1s ease;
    }
    .on-enter,.on-leave-to,.off-enter,.off-leave-to{
      opacity: 0;
    }
.text-left{
  text-align: left
}

.bg-pattern {
  background-color: #ffffff;
}
.content-wrap {
  height: 100%;
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
.table-cell {
  display: table-cell;
}

.vertical-align-middle {
  vertical-align: middle;
}

p{
    font-size: 16px;
    color: #767676;
    line-height: 25px;
    font-weight: 400;
    font-family: "cartoon", serif;
}

.relative {
    position: relative;
}
.font-italic {
    font-style: italic;
}
.margin-bottom-25 {
    margin-bottom: 25px;
}
.font-16{
  font-size: 16px
}

</style>

<script>
import sideLeft from './components/sideLeft'
import sideRight from './components/sideRight'
export default {
  name: 'Login',
  components: { sideLeft, sideRight }
}
</script>
