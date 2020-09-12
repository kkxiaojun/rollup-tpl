/**
 * 生成注释格式
 */
export function comment() {
  // 如果参数为0直接返回
  if (arguments.length === 0) {
    return
  }
  let maxlength = 0
  for (let i = 0; i < arguments.length; i++) {
    const length = arguments[i].toString().length
    // 获取最长的参数
    maxlength = length > maxlength ? length : maxlength
  }
  // 在最长参数长度上再加1，为了美观
  maxlength = maxlength === 0 ? maxlength : maxlength + 1
  let seperator = ''
  for (let i = 0; i < maxlength; i++) {
    // 根据参数长度生成分隔符
    seperator += '='
  }
  const c = []
  // 添加注释头
  c.push('/**\n')
  // 添加注释分隔符
  c.push(' * ' + seperator + '\n')
  for (let i = 0; i < arguments.length; i++) {
    // 加入参数内容
    c.push(' * ' + arguments[i] + '\n')
  }
  // 添加注释分隔符
  c.push(' * ' + seperator + '\n')
  // 添加注释尾
  c.push(' **/')
  // 合并参数为字符串
  return c.join('')
}
