# vue-template-to-scss
由vue Template模版骨架直接生成Scss/Less骨架

##安装使用
npm i -D t2css


npx t2css sourceFilePath targetSourceFile
sourceFilePath:  *.vue 的源文件
targetSourceFile:  目标文件


``` Vue
./a.vue文件
<template>
  <div class="instruction i1" :class="{selected: false}">
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
            <p>
              <img src="" alt="">
            </p>
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
 ```