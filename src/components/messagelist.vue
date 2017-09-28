<template>
    <div class="leftWapper">
      <div class="listWapper" v-if="message1" @click="m1checked">
          <span>{{message1[message1.length-1].threadName}}</span>
          <span>{{message1[message1.length-1].timestamp}}</span>
          <span>{{message1[message1.length-1].text}}</span>
      </div>
      <div class="listWapper" v-if="message2" @click="m2checked">
        <span>{{message2[message2.length-1].threadName}}</span>
        <span>{{message2[message2.length-1].timestamp}}</span>
        <span>{{message2[message2.length-1].text}}</span>
      </div>
      <div class="listWapper" v-if="message3" @click="m3checked">
        <span>{{message3[message3.length-1].threadName}}</span>
        <span>{{message3[message3.length-1].timestamp}}</span>
        <span>{{message3[message3.length-1].text}}</span>
      </div>

    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    created () {
      this.$store.dispatch('getMessages', 'startS')
    },
    computed: mapGetters(['allMessages', 'message1', 'message2', 'message3']),
    methods: mapActions(['m1checked', 'm2checked', 'm3checked'])

  }
</script>

<style scoped lang="less">
  .leftWapper{
    width: 100%;
    .listWapper{
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #000;
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      box-sizing: border-box;
      justify-content: space-between;
      span:nth-child(1){
        font-weight: bold;
        color: #449fdb;
        line-height: 20px;
      }
      span:nth-child(2){
        font-size: 12px;
        color: #555555;
        line-height: 20px;
        display: block;
      }
      span:nth-child(3) {
        align-self: center;
      }
    }
  }
</style>
