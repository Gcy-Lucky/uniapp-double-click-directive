<template>
  <view v-double-click="onDoubleClick">Double-click me</view>
</template>

<script>
export default {
  methods: {
    onDoubleClick() {
      console.log('Double click detected!');
    }
  }
};
</script>
