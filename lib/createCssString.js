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
    //todo 匹配Vue模版类中的属性
    let vueClassList = vueClassTemplate
    let [ first, ...other ] = classNameList
    if (first) {
      target["." + first] = {}
      other.forEach(item => {
        target["." + first]['&.'+item] = {}
      })
    }
    target = {
      ...target,
      ...createCssDom(children)
    }
  }
  return target
}

function createCssString(dom) {
  try {
    let om = createCssDom(dom)
    let s = JSON.stringify(om)
    s = s.replace(/\"|\,|\:/gim, '')
    return Array.prototype.slice.call(s, 1, -1).join('')
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  createCssString
}