/**
 * 将标签数组转化为dom结构的对象
 * 数组子项中，isClose表示是闭合的标签
 * @param arr
 * @returns {Array}
 */
function arrayToDom(arr) {
  let target = []
  let nowTarget = target
  let targetParent = null
  for (let i = 0; i < arr.length; i++) {
    let now = arr[i]
    if (!now.isClose) {
      nowTarget.push({
        ...now,
        parent: targetParent,
        children: [],
      })
      targetParent = nowTarget
      nowTarget = nowTarget[nowTarget.length-1].children
    } else {
      nowTarget = targetParent
      targetParent = targetParent[targetParent.length-1].parent
    }
  }
  return target
}

module.exports = {
  arrayToDom
}