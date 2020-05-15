# vue-template-to-scss
由vue Template模版骨架直接生成Scss/Less骨架

##安装使用
```
 npm i -D t2css
 npx t2css sourceFilePath targetSourceFile
```

``` Vue
./a.vue文件
<template>
  <div class="testArea">
    <div class="instruction i1">
      <img class="img" src="@/images/common/pic_instructions@3x.png" alt="">
    </div>
    <div class="instruction1 i2">
      <p class="p">ssds</p>
      <img src="" alt="">
    </div>
    <div>
      <div class="is3">
        <div class="is33">
          <div>
            <div class="is333">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```
执行命令：
``` css
  npx t2css ./a.vue ./a.scss
```
 自动生成Scss骨架到a.scss文件， 内容如下
 ```
.testArea {
  .instruction {
    &.i1 {
    }
    .img {
    }
  }
  .instruction1 {
    &.i2 {
    }
    .p {
    }
    img {
    }
  }
  .is3 {
    .is33 {
      .is333 {
        img {
        }
      }
    }
  }
}
 ```