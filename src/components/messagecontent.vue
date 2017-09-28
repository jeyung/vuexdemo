<template>
    <div class="contentWapper">
      <div class="topwapper">
        <div class="contents" v-show="mes1" v-for="items in message1">
          <span>{{items.authorName}}</span>
          <span>{{items.timestamp}}</span>
          <span>{{items.text}}</span>
        </div>
        <div class="contents" v-show="mes2" v-for="items in message2">
          <span>{{items.authorName}}</span>
          <span>{{items.timestamp}}</span>
          <span>{{items.text}}</span>
        </div>
        <div class="contents" v-show="mes3" v-for="items in message3">
          <span>{{items.authorName}}</span>
          <span>{{items.timestamp}}</span>
          <span>{{items.text}}</span>
        </div>
      </div>
      <div class="bottomwapper">
        <textarea name="" id="tex"></textarea>
        <input type="button" value="发送" @click="sendContent(mes1,mes2,mes3)">
      </div>

    </div>

</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: mapGetters(['mes1', 'mes2', 'mes3', 'message1', 'message2', 'message3']),
    methods: {
      ...mapActions({pushMes1: 'pushMes1', pushMes2: 'pushMes2', pushMes3: 'pushMes3'}),
      sendContent (mes1, mes2, mes3) {
        let name = 'Evan'
        let contentss = document.getElementById('tex').value
        let time = Date.now()
        if (mes1) {
          let threadName = 'Jing and Bill'
          this.pushMes1({name, contentss, time, threadName})
        }
        if (mes2) {
          let threadName = 'Dave and Bill'
          this.pushMes2({name, contentss, time, threadName})
        }
        if (mes3) {
          let threadName = 'Functional Heads'
          this.pushMes3({name, contentss, time, threadName})
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .contentWapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    .topwapper{
      overflow: hidden;
      .contents{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #000;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        padding: 10px;
        span{
          display: block;
        }
        span:nth-child(3) {
          align-self: center;
        }
      }
    }
    .bottomwapper{
      padding: 10px;
      #tex{
        width: 90%;
      }
    }
  }
</style>
