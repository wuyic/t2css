/**
 * @param html
 * @returns {Object}
 */
const htmlparser2 = require("htmlparser2");

function htmlParse(html) {
  let regTemplate = /<template>([\s\S]*?)<\/template>/gim
  regTemplate = regTemplate.exec(html)
  if (!regTemplate) {
    console.warn("未找到模版变量")
    return ""
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
      },
      onend() {
      
      }
    })
    parser.write(str);
    parser.end();
  }
  parseTemplate(regTemplate)
  return myDom
}
module.exports = {
  htmlParse
}