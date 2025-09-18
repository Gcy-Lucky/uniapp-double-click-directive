uniapp-double-click-directive

English | ## 中文说明
English

A custom Vue directive for UniApp to detect double-click events, since UniApp does not support @dblclick natively.
Compatible with Vue2 / Vue3, works on H5 and App.

✨ Features

Easy to use (v-double-click)

Works with Vue2 / Vue3

Automatically unbinds on component unmount (no memory leaks)

Configurable double-click interval (default: 300ms)

📦 Installation

Clone or copy the file into your project:

# Clone repository
git clone https://github.com/your-username/uniapp-double-click-directive.git

🚀 Usage

Create directive directives/doubleClick.js

export const doubleClick = {
  mounted(el, binding) {
    let lastClickTime = 0;
    let clickTimer = null;

    const handleClick = () => {
      const now = Date.now();
      if (now - lastClickTime < 300) {
        clearTimeout(clickTimer);
        binding.value(); // execute double-click callback
      } else {
        clickTimer = setTimeout(() => {}, 300);
      }
      lastClickTime = now;
    };

    el._doubleClickHandler = handleClick;
    el.addEventListener('click', handleClick);
  },

  unmounted(el) {
    if (el._doubleClickHandler) {
      el.removeEventListener('click', el._doubleClickHandler);
    }
  }
};


Register directive

// main.js
import { doubleClick } from '@/directives/doubleClick.js';

// Vue 2
Vue.directive('double-click', doubleClick);

// Vue 3
app.directive('double-click', doubleClick);


Use in template

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

中文说明[返回英文](#english)

这是一个 适用于 UniApp 的自定义双击指令，因为 UniApp 默认不支持 @dblclick。
兼容 Vue2 / Vue3，支持 H5 和 App。

✨ 功能

简单易用（v-double-click）

支持 Vue2 / Vue3

自动解绑，避免内存泄漏

可配置双击间隔（默认 300ms）

📦 安装方式

直接克隆或复制文件到你的项目：

git clone https://github.com/your-username/uniapp-double-click-directive.git

🚀 使用方法

在 directives/doubleClick.js 中创建指令（见英文部分代码）

在 main.js 中注册指令

在模板中使用：

<view v-double-click="handleDoubleClick">双击我</view>

methods: {
  handleDoubleClick() {
    console.log('双击触发！');
  }
}
