<!--
 * @Author: Lee
 * @Date: 2022-06-11 00:54:37
 * @LastEditors: Lee
 * @LastEditTime: 2022-06-11 21:39:36
 * @Description: 
-->

<!-- 
  前奏：每个奖品所占的角度是一致的，即平均分配一个圆，通常，命中某个奖品指针指向奖品正中间。
  思路：通过 transform/transition 实现大转盘的动画效果，监听 transitionend 事件，归位大转盘。
  计算：
  1. 奖品所占角度：360 / 奖品数量（设为X）  
  2. 中奖位置计算：X * index +- X / 2 （index表示奖品下标位置，+-取决于顺时针还是逆时针）
  3. 如果打算转满5圈，则：5 * 360 + 中奖位置

 -->

<script setup lang="ts">
import IMG_BG from '@/assets/examples1/bg.png';
import { nextTick, reactive } from 'vue';

interface StateProps {
  transform: string;
  transition: string;
}

// -- state
const state = reactive<StateProps>({
  transform: '',
  transition: '',
});

// -- events
const onStart = () => {
  const awardCount = 8;
  const awardDeg = 360 / awardCount;
  const index = 4;
  const actionDeg = 5 * 360 + awardDeg * index + awardDeg / 2;

  state.transform = `rotate(${actionDeg}deg)`;
  state.transition = 'transform 3s ease-in-out';
};
const onTransitionEnd = () => {
  alert("恭喜你");
  state.transition = '';
  state.transform = '';
};
</script>

<template>
  <div class="page">
    <img class="bg" :src="IMG_BG" />
    <div class="wrap">
      <!-- 大转盘 -->
      <img
        class="bigWheel"
        src="@/assets/examples1/big_wheel.png"
        :style="{
          transform: state.transform,
          transition: state.transition,
        }"
        @transitionend="onTransitionEnd"
      />
      <img
        class="action"
        @click="onStart"
        src="@/assets/examples1/action.png"
      />
    </div>
    <div class="times"></div>
  </div>
</template>

<style lang="less" scoped>
.page {
  background: #ff0000;
}
.wrap {
  width: 222px;
  height: 222px;
  position: absolute;
  top: 266px;
  left: 50%;
  transform: translateX(-50%);
  .action {
    width: 56px;
    height: 72px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.times {
  width: 372px;
  height: 74px;
  margin-top: 20px;
  background: url('@/assets/examples1/button_bar.png') no-repeat center center;
  background-size: 100% 100%;
}
</style>
