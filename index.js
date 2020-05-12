#!/usr/bin/env node

(function() {
  const fs = require("fs");
  const {arrayToDom} = require("./lib/arrayToDom");
  const {createCssString} = require("./lib/createCssString");
  const {htmlParse} = require("./lib/htmlParse");
  
  const enterParams = process.argv.slice(2)
  /** 源文件，目标文件，是否生成css todo 生成纯css骨架 **/
  let [suorceFile, targetFile, css] = enterParams
  
  if (!suorceFile) {
    console.error("待解析的文件不存在")
    return
  }
  /** 如果没有目标文件，在当前目录生成scss文件 **/
  if (!targetFile) {
    targetFile = suorceFile.replace('.vue', '.scss')
  }
  //todo 是否生成纯css
  let isCss = false
  if (css) {
    isCss = Number(css)
  }
  /** 读取文件到字符串 **/
  let file = fs.readFileSync(suorceFile).toString()
  /** 将html字符串解析成dom数组 **/
  let myDomList = htmlParse(file)
  /** 将DOM开/闭标签数组 转译成DOM树 **/
  let myDomObj = arrayToDom(myDomList)
  /** 创建CSS字符串 **/
  let cssString = createCssString(myDomObj)
  /** 写入文件 **/
  fs.writeFile(targetFile, cssString, (err)=> {
    if (err) {
      console.log("生成失败", err)
    }
    console.log("创建成功,目录为:" + targetFile)
  })
}());