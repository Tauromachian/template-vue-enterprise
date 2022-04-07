const numberRegex = /^[0-9]+$/
const idRegex = /^[0-9]{11}$/
const emailRegex = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
const lettersBlankSpacesRegex = /^([á-úÁ-Úa-zA-Z ])+$/
// const lastNameRegex = /^([á-úÁ-Úa-zA-Z])+( [á-úÁ-Úa-zA-Z]+)?$/ este es el que estaba
const lastNameRegex = /^[a-zA-Zá-úÁ-Úa|ñÑ ]+$/

const positiveNumberRegex = /^[0-9]+$/
const numbersRegex = /^(?!-0(\.0+)?$)-?(0|[1-9]\d*)(\.\d+)?$/
const floatNumber = /^[0-9]+(?:\.[0-9]+)?$/
const facebookRegex = /^(?:https?:\/\/)?(?:www\.|m\.|mobile\.|touch\.|mbasic\.)?(?:facebook\.com|fb(?:\.me|\.com))\/(?!$)(?:(?:\w)*#!\/)?(?:pages\/)?(?:photo\.php\?fbid=)?(?:[\w-]*\/)*?(?:\/)?(?:profile\.php\?id=)?([^/?&\s]*)(?:\/|&|\?)?.*$/
const twitterRegex = /(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*([\w-]*)/
const telegramRegex = /(https?:\/\/)?(www[.])?(telegram|t)\.me\/([a-zA-Z0-9_-]*)\/?$/
// const webRegex = /(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/
const webRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/

const isNumber = string => {
  return numberRegex.test(string)
}

const isId = string => {
  return idRegex.test(string)
}

const isEmail = string => {
  return emailRegex.test(string)
}

const isPhone = string => {
  return phoneRegex.test(string)
}

const isLettersWithBlankSpaces = string => {
  return lettersBlankSpacesRegex.test(string)
}

const isLastName = string => {
  return lastNameRegex.test(string)
}

const isPositiveNumber = string => {
  return positiveNumberRegex.test(string)
}

const isGpsCoordinate = string => {
  return numbersRegex.test(string)
}

const isFacebookUrl = string => {
  return facebookRegex.test(string)
}

const isTwitterUrl = string => {
  return twitterRegex.test(string)
}
const isTelegramUrl = string => {
  return telegramRegex.test(string)
}

const isWebPageUrl = string => {
  return webRegex.test(string)
}
const isPositiveFloatNumber = string => {
  return floatNumber.test(string)
}

export {
  isNumber,
  isId,
  isEmail,
  isPhone,
  isLettersWithBlankSpaces,
  isLastName,
  isPositiveNumber,
  isGpsCoordinate,
  isFacebookUrl,
  isTwitterUrl,
  isTelegramUrl,
  isWebPageUrl,
  isPositiveFloatNumber,
}
