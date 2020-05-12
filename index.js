#!/usr/bin/env node
(function() {
  
  var fs = require("fs");
  const path = require("path");
  const htmlparser2 = require("htmlparser2");
  const {arrayToDom} = require("./lib/arrayToDom");
  const {createCssString} = require("./lib/createCssString");
  
  let rootPath = path.resolve();
  
  const enterParams = process.argv.slice(2)
  //源文件，目标文件，是否生成css
  let [suorceFile, targetFile, css] = enterParams
  
  if (!suorceFile) {
    console.error("待解析的文件不存在")
    return
  }
  
  //如果没有目标文件，在当前目录生成scss文件
  if (!targetFile) {
    let suorceFileName = suorceFile.split("/").pop().replace('.vue', '')
    let targetList = suorceFile.split("/").slice(0, -1)
    targetList.push(suorceFileName + '.scss')
    targetFile = targetList.join('/')
  }
  
  //todo 是否生成纯css
  let isCss = false
  if (css) {
    isCss = Number(css)
  }
  
  let file = fs.readFileSync(suorceFile)
  file = file.toString()
  
  let regTemplate = /<template>([\s\S]*?)<\/template>/gim
  regTemplate = regTemplate.exec(file)
  //console.log(regTemplate)
  if (!regTemplate) {
    console.warn("未找到模版变量")
    return
  }
  regTemplate = regTemplate[0]
  
  let myDom = []
  let parseTemplate = (str) => {
    let parser = new htmlparser2.Parser({
      onopentag(name, attribs) {
        if (name !== "template") {
          myDom.push({name, attribs})
        }
      },
      onclosetag(name) {
        if (name !== "template") {
          myDom.push({name, isClose: true})
        }
      }
    })
    parser.write(str);
    parser.end();
  }
  parseTemplate(regTemplate)
  
  let cssString = createCssString(arrayToDom(myDom))
  
  fs.writeFile(targetFile, cssString, (err)=> {
    if (err) {
      console.log("生成失败", err)
    }
    console.log("创建成功,目录为:" + targetFile)
  })
}());