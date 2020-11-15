// Adapted from https://css-tricks.com/converting-color-spaces-in-javascript/#hex-to-hsl and https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript
function getColorChannels(hex) {
  return hex
    .match(/^#?([\da-f]{1,2})([\da-f]{1,2})([\da-f]{1,2})$/i)
    .slice(1)
    .map(n => (n.length === 2 ? n : n.repeat(2)))
    .map(n => parseInt(n, 16) / 255)
}
export function hexToHsl(hex) {
  const [red, green, blue] = getColorChannels(hex)
  const cmin = Math.min(red, green, blue)
  const cmax = Math.max(red, green, blue)
  const delta = cmax - cmin
  let hue = 0
  let saturation = 0
  let light = 0
  if (delta === 0) {
    hue = 0
  } else if (cmax === red) {
    hue = ((green - blue) / delta) % 6
  } else if (cmax === green) {
    hue = (blue - red) / delta + 2
  } else {
    hue = (red - green) / delta + 4
  }
  hue = Math.round(hue * 60)
  if (hue < 0) hue += 360
  light = (cmax + cmin) / 2
  saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * light - 1))
  saturation = Number((saturation * 100).toFixed(1))
  light = Number((light * 100).toFixed(1))
  return [hue, saturation, light]
}
export function hslToHex(h, s, l) {
  const hue = h
  const saturation = s / 100
  const light = l / 100
  const c = (1 - Math.abs(2 * light - 1)) * saturation
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1))
  const m = light - c / 2
  let red = 0
  let green = 0
  let blue = 0
  if (hue >= 0 && hue < 60) {
    red = c
    green = x
    blue = 0
  } else if (hue >= 60 && hue < 120) {
    red = x
    green = c
    b = 0
  } else if (hue >= 120 && hue < 180) {
    red = 0
    green = c
    blue = x
  } else if (hue >= 180 && hue < 240) {
    red = 0
    green = x
    blue = c
  } else if (hue >= 240 && hue < 300) {
    red = x
    green = 0
    blue = c
  } else if (hue >= 300 && hue < 360) {
    red = c
    green = 0
    blue = x
  }
  red = Math.round((red + m) * 255).toString(16)
  green = Math.round((green + m) * 255).toString(16)
  blue = Math.round((blue + m) * 255).toString(16)
  return `#${red.padStart(2, 0)}${green.padStart(2, 0)}${blue.padStart(2, 0)}`
}
export function findComplement(hex) {
  return getColorChannels(hex)
    .map(channel => Math.floor((1 - channel) * 255))
    .map(diff => diff.toString(16).padStart(2, 0))
}
