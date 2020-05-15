/**
 * 从对象数组生成CSS字符串
 * @param arr
 * @returns {Object}
 */
function createCssDom(dom) {
  let target = {}
  for (let i = 0; i < dom.length; i++) {
    const { name, attribs: { "class": className = '', ":class": vueClassTemplate = '' }, children } = dom[ i ]
    let classNameList = className.trim().split(' ')
    //todo 匹配Vue模版类中的 :class 属性
    let vueClassList = vueClassTemplate
    let [ first, ...other ] = classNameList
    if (first) {
      let index = "." + first
      target[index] = {}
      other.forEach(item => {
        target[index]['&.'+item] = {}
      })
      target[index] = {
        ...target[index],
        ...createCssDom(children)
      }
    } else if (children.length === 0 && (name === 'p' || name === 'img')) {
       target[name] = {}
    } else if (children.length > 0) {
      target = {
        ...target,
        ...createCssDom(children)
      }
    }
  }
  return target
}

/**
 * 通过JSON格式化方式生成SCSS字符串
 * 缺点：无层级格式，需要手动执行代码格式化
 **/
function parseByJson(dom) {
  let s = JSON.stringify(om)
  s = s.replace(/\"|\,|\:/gim, '')
  return Array.prototype.slice.call(s, 1, -1).join('')
}

/**
 * 通过dfs生成Scss字符串
 * 优点:带格式
 * **/
function parseByDfs(cssOm, deep=0) {
  let cssStr = ""
  let spaceStr = new Array(deep).fill("  ").join("")
  for (let key in cssOm) {
    if (cssOm.hasOwnProperty(key)) {
      cssStr += spaceStr + key + " {\n"
      cssStr += parseByDfs(cssOm[key], deep+1)
      cssStr += spaceStr + "}\n"
    }
  }
  return cssStr
}

function createCssString(dom) {
  try {
    let om = createCssDom(dom)
    return parseByDfs(om)
    // return parseByJson(om)
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  createCssString
}