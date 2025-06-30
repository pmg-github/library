import "./chunk-QGM4M3NI.js";

// node_modules/consola/dist/chunks/prompt.mjs
import "util";
import g, { stdin, stdout } from "process";
import f from "readline";
import { WriteStream } from "tty";
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var src;
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  const ESC = "\x1B";
  const CSI = `${ESC}[`;
  const beep = "\x07";
  const cursor = {
    to(x2, y2) {
      if (!y2) return `${CSI}${x2 + 1}G`;
      return `${CSI}${y2 + 1};${x2 + 1}H`;
    },
    move(x2, y2) {
      let ret = "";
      if (x2 < 0) ret += `${CSI}${-x2}D`;
      else if (x2 > 0) ret += `${CSI}${x2}C`;
      if (y2 < 0) ret += `${CSI}${-y2}A`;
      else if (y2 > 0) ret += `${CSI}${y2}B`;
      return ret;
    },
    up: (count = 1) => `${CSI}${count}A`,
    down: (count = 1) => `${CSI}${count}B`,
    forward: (count = 1) => `${CSI}${count}C`,
    backward: (count = 1) => `${CSI}${count}D`,
    nextLine: (count = 1) => `${CSI}E`.repeat(count),
    prevLine: (count = 1) => `${CSI}F`.repeat(count),
    left: `${CSI}G`,
    hide: `${CSI}?25l`,
    show: `${CSI}?25h`,
    save: `${ESC}7`,
    restore: `${ESC}8`
  };
  const scroll = {
    up: (count = 1) => `${CSI}S`.repeat(count),
    down: (count = 1) => `${CSI}T`.repeat(count)
  };
  const erase = {
    screen: `${CSI}2J`,
    up: (count = 1) => `${CSI}1J`.repeat(count),
    down: (count = 1) => `${CSI}J`.repeat(count),
    line: `${CSI}2K`,
    lineEnd: `${CSI}K`,
    lineStart: `${CSI}1K`,
    lines(count) {
      let clear = "";
      for (let i = 0; i < count; i++)
        clear += this.line + (i < count - 1 ? cursor.up() : "");
      if (count)
        clear += cursor.left;
      return clear;
    }
  };
  src = { cursor, scroll, erase, beep };
  return src;
}
var srcExports = requireSrc();
var picocolors = { exports: {} };
var hasRequiredPicocolors;
function requirePicocolors() {
  if (hasRequiredPicocolors) return picocolors.exports;
  hasRequiredPicocolors = 1;
  let p = process || {}, argv = p.argv || [], env = p.env || {};
  let isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
  let formatter = (open, close, replace = open) => (input) => {
    let string = "" + input, index = string.indexOf(close, open.length);
    return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
  };
  let replaceClose = (string, close, replace, index) => {
    let result = "", cursor = 0;
    do {
      result += string.substring(cursor, index) + replace;
      cursor = index + close.length;
      index = string.indexOf(close, cursor);
    } while (~index);
    return result + string.substring(cursor);
  };
  let createColors = (enabled = isColorSupported) => {
    let f2 = enabled ? formatter : () => String;
    return {
      isColorSupported: enabled,
      reset: f2("\x1B[0m", "\x1B[0m"),
      bold: f2("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
      dim: f2("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
      italic: f2("\x1B[3m", "\x1B[23m"),
      underline: f2("\x1B[4m", "\x1B[24m"),
      inverse: f2("\x1B[7m", "\x1B[27m"),
      hidden: f2("\x1B[8m", "\x1B[28m"),
      strikethrough: f2("\x1B[9m", "\x1B[29m"),
      black: f2("\x1B[30m", "\x1B[39m"),
      red: f2("\x1B[31m", "\x1B[39m"),
      green: f2("\x1B[32m", "\x1B[39m"),
      yellow: f2("\x1B[33m", "\x1B[39m"),
      blue: f2("\x1B[34m", "\x1B[39m"),
      magenta: f2("\x1B[35m", "\x1B[39m"),
      cyan: f2("\x1B[36m", "\x1B[39m"),
      white: f2("\x1B[37m", "\x1B[39m"),
      gray: f2("\x1B[90m", "\x1B[39m"),
      bgBlack: f2("\x1B[40m", "\x1B[49m"),
      bgRed: f2("\x1B[41m", "\x1B[49m"),
      bgGreen: f2("\x1B[42m", "\x1B[49m"),
      bgYellow: f2("\x1B[43m", "\x1B[49m"),
      bgBlue: f2("\x1B[44m", "\x1B[49m"),
      bgMagenta: f2("\x1B[45m", "\x1B[49m"),
      bgCyan: f2("\x1B[46m", "\x1B[49m"),
      bgWhite: f2("\x1B[47m", "\x1B[49m"),
      blackBright: f2("\x1B[90m", "\x1B[39m"),
      redBright: f2("\x1B[91m", "\x1B[39m"),
      greenBright: f2("\x1B[92m", "\x1B[39m"),
      yellowBright: f2("\x1B[93m", "\x1B[39m"),
      blueBright: f2("\x1B[94m", "\x1B[39m"),
      magentaBright: f2("\x1B[95m", "\x1B[39m"),
      cyanBright: f2("\x1B[96m", "\x1B[39m"),
      whiteBright: f2("\x1B[97m", "\x1B[39m"),
      bgBlackBright: f2("\x1B[100m", "\x1B[49m"),
      bgRedBright: f2("\x1B[101m", "\x1B[49m"),
      bgGreenBright: f2("\x1B[102m", "\x1B[49m"),
      bgYellowBright: f2("\x1B[103m", "\x1B[49m"),
      bgBlueBright: f2("\x1B[104m", "\x1B[49m"),
      bgMagentaBright: f2("\x1B[105m", "\x1B[49m"),
      bgCyanBright: f2("\x1B[106m", "\x1B[49m"),
      bgWhiteBright: f2("\x1B[107m", "\x1B[49m")
    };
  };
  picocolors.exports = createColors();
  picocolors.exports.createColors = createColors;
  return picocolors.exports;
}
var picocolorsExports = /* @__PURE__ */ requirePicocolors();
var e = /* @__PURE__ */ getDefaultExportFromCjs(picocolorsExports);
function J({ onlyFirst: t = false } = {}) {
  const F2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(F2, t ? void 0 : "g");
}
var Q = J();
function T$1(t) {
  if (typeof t != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof t}\``);
  return t.replace(Q, "");
}
function O(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var P$1 = { exports: {} };
(function(t) {
  var u2 = {};
  t.exports = u2, u2.eastAsianWidth = function(e2) {
    var s = e2.charCodeAt(0), i = e2.length == 2 ? e2.charCodeAt(1) : 0, D = s;
    return 55296 <= s && s <= 56319 && 56320 <= i && i <= 57343 && (s &= 1023, i &= 1023, D = s << 10 | i, D += 65536), D == 12288 || 65281 <= D && D <= 65376 || 65504 <= D && D <= 65510 ? "F" : D == 8361 || 65377 <= D && D <= 65470 || 65474 <= D && D <= 65479 || 65482 <= D && D <= 65487 || 65490 <= D && D <= 65495 || 65498 <= D && D <= 65500 || 65512 <= D && D <= 65518 ? "H" : 4352 <= D && D <= 4447 || 4515 <= D && D <= 4519 || 4602 <= D && D <= 4607 || 9001 <= D && D <= 9002 || 11904 <= D && D <= 11929 || 11931 <= D && D <= 12019 || 12032 <= D && D <= 12245 || 12272 <= D && D <= 12283 || 12289 <= D && D <= 12350 || 12353 <= D && D <= 12438 || 12441 <= D && D <= 12543 || 12549 <= D && D <= 12589 || 12593 <= D && D <= 12686 || 12688 <= D && D <= 12730 || 12736 <= D && D <= 12771 || 12784 <= D && D <= 12830 || 12832 <= D && D <= 12871 || 12880 <= D && D <= 13054 || 13056 <= D && D <= 19903 || 19968 <= D && D <= 42124 || 42128 <= D && D <= 42182 || 43360 <= D && D <= 43388 || 44032 <= D && D <= 55203 || 55216 <= D && D <= 55238 || 55243 <= D && D <= 55291 || 63744 <= D && D <= 64255 || 65040 <= D && D <= 65049 || 65072 <= D && D <= 65106 || 65108 <= D && D <= 65126 || 65128 <= D && D <= 65131 || 110592 <= D && D <= 110593 || 127488 <= D && D <= 127490 || 127504 <= D && D <= 127546 || 127552 <= D && D <= 127560 || 127568 <= D && D <= 127569 || 131072 <= D && D <= 194367 || 177984 <= D && D <= 196605 || 196608 <= D && D <= 262141 ? "W" : 32 <= D && D <= 126 || 162 <= D && D <= 163 || 165 <= D && D <= 166 || D == 172 || D == 175 || 10214 <= D && D <= 10221 || 10629 <= D && D <= 10630 ? "Na" : D == 161 || D == 164 || 167 <= D && D <= 168 || D == 170 || 173 <= D && D <= 174 || 176 <= D && D <= 180 || 182 <= D && D <= 186 || 188 <= D && D <= 191 || D == 198 || D == 208 || 215 <= D && D <= 216 || 222 <= D && D <= 225 || D == 230 || 232 <= D && D <= 234 || 236 <= D && D <= 237 || D == 240 || 242 <= D && D <= 243 || 247 <= D && D <= 250 || D == 252 || D == 254 || D == 257 || D == 273 || D == 275 || D == 283 || 294 <= D && D <= 295 || D == 299 || 305 <= D && D <= 307 || D == 312 || 319 <= D && D <= 322 || D == 324 || 328 <= D && D <= 331 || D == 333 || 338 <= D && D <= 339 || 358 <= D && D <= 359 || D == 363 || D == 462 || D == 464 || D == 466 || D == 468 || D == 470 || D == 472 || D == 474 || D == 476 || D == 593 || D == 609 || D == 708 || D == 711 || 713 <= D && D <= 715 || D == 717 || D == 720 || 728 <= D && D <= 731 || D == 733 || D == 735 || 768 <= D && D <= 879 || 913 <= D && D <= 929 || 931 <= D && D <= 937 || 945 <= D && D <= 961 || 963 <= D && D <= 969 || D == 1025 || 1040 <= D && D <= 1103 || D == 1105 || D == 8208 || 8211 <= D && D <= 8214 || 8216 <= D && D <= 8217 || 8220 <= D && D <= 8221 || 8224 <= D && D <= 8226 || 8228 <= D && D <= 8231 || D == 8240 || 8242 <= D && D <= 8243 || D == 8245 || D == 8251 || D == 8254 || D == 8308 || D == 8319 || 8321 <= D && D <= 8324 || D == 8364 || D == 8451 || D == 8453 || D == 8457 || D == 8467 || D == 8470 || 8481 <= D && D <= 8482 || D == 8486 || D == 8491 || 8531 <= D && D <= 8532 || 8539 <= D && D <= 8542 || 8544 <= D && D <= 8555 || 8560 <= D && D <= 8569 || D == 8585 || 8592 <= D && D <= 8601 || 8632 <= D && D <= 8633 || D == 8658 || D == 8660 || D == 8679 || D == 8704 || 8706 <= D && D <= 8707 || 8711 <= D && D <= 8712 || D == 8715 || D == 8719 || D == 8721 || D == 8725 || D == 8730 || 8733 <= D && D <= 8736 || D == 8739 || D == 8741 || 8743 <= D && D <= 8748 || D == 8750 || 8756 <= D && D <= 8759 || 8764 <= D && D <= 8765 || D == 8776 || D == 8780 || D == 8786 || 8800 <= D && D <= 8801 || 8804 <= D && D <= 8807 || 8810 <= D && D <= 8811 || 8814 <= D && D <= 8815 || 8834 <= D && D <= 8835 || 8838 <= D && D <= 8839 || D == 8853 || D == 8857 || D == 8869 || D == 8895 || D == 8978 || 9312 <= D && D <= 9449 || 9451 <= D && D <= 9547 || 9552 <= D && D <= 9587 || 9600 <= D && D <= 9615 || 9618 <= D && D <= 9621 || 9632 <= D && D <= 9633 || 9635 <= D && D <= 9641 || 9650 <= D && D <= 9651 || 9654 <= D && D <= 9655 || 9660 <= D && D <= 9661 || 9664 <= D && D <= 9665 || 9670 <= D && D <= 9672 || D == 9675 || 9678 <= D && D <= 9681 || 9698 <= D && D <= 9701 || D == 9711 || 9733 <= D && D <= 9734 || D == 9737 || 9742 <= D && D <= 9743 || 9748 <= D && D <= 9749 || D == 9756 || D == 9758 || D == 9792 || D == 9794 || 9824 <= D && D <= 9825 || 9827 <= D && D <= 9829 || 9831 <= D && D <= 9834 || 9836 <= D && D <= 9837 || D == 9839 || 9886 <= D && D <= 9887 || 9918 <= D && D <= 9919 || 9924 <= D && D <= 9933 || 9935 <= D && D <= 9953 || D == 9955 || 9960 <= D && D <= 9983 || D == 10045 || D == 10071 || 10102 <= D && D <= 10111 || 11093 <= D && D <= 11097 || 12872 <= D && D <= 12879 || 57344 <= D && D <= 63743 || 65024 <= D && D <= 65039 || D == 65533 || 127232 <= D && D <= 127242 || 127248 <= D && D <= 127277 || 127280 <= D && D <= 127337 || 127344 <= D && D <= 127386 || 917760 <= D && D <= 917999 || 983040 <= D && D <= 1048573 || 1048576 <= D && D <= 1114109 ? "A" : "N";
  }, u2.characterLength = function(e2) {
    var s = this.eastAsianWidth(e2);
    return s == "F" || s == "W" || s == "A" ? 2 : 1;
  };
  function F2(e2) {
    return e2.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  u2.length = function(e2) {
    for (var s = F2(e2), i = 0, D = 0; D < s.length; D++) i = i + this.characterLength(s[D]);
    return i;
  }, u2.slice = function(e2, s, i) {
    textLen = u2.length(e2), s = s || 0, i = i || 1, s < 0 && (s = textLen + s), i < 0 && (i = textLen + i);
    for (var D = "", C2 = 0, o2 = F2(e2), E = 0; E < o2.length; E++) {
      var a = o2[E], n = u2.length(a);
      if (C2 >= s - (n == 2 ? 1 : 0)) if (C2 + n <= i) D += a;
      else break;
      C2 += n;
    }
    return D;
  };
})(P$1);
var X = P$1.exports;
var DD = O(X);
var uD = function() {
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};
var FD = O(uD);
function A$1(t, u2 = {}) {
  if (typeof t != "string" || t.length === 0 || (u2 = { ambiguousIsNarrow: true, ...u2 }, t = T$1(t), t.length === 0)) return 0;
  t = t.replace(FD(), "  ");
  const F2 = u2.ambiguousIsNarrow ? 1 : 2;
  let e2 = 0;
  for (const s of t) {
    const i = s.codePointAt(0);
    if (i <= 31 || i >= 127 && i <= 159 || i >= 768 && i <= 879) continue;
    switch (DD.eastAsianWidth(s)) {
      case "F":
      case "W":
        e2 += 2;
        break;
      case "A":
        e2 += F2;
        break;
      default:
        e2 += 1;
    }
  }
  return e2;
}
var m = 10;
var L$1 = (t = 0) => (u2) => `\x1B[${u2 + t}m`;
var N = (t = 0) => (u2) => `\x1B[${38 + t};5;${u2}m`;
var I = (t = 0) => (u2, F2, e2) => `\x1B[${38 + t};2;${u2};${F2};${e2}m`;
var r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], gray: [90, 39], grey: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgGray: [100, 49], bgGrey: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
Object.keys(r.modifier);
var tD = Object.keys(r.color);
var eD = Object.keys(r.bgColor);
[...tD, ...eD];
function sD() {
  const t = /* @__PURE__ */ new Map();
  for (const [u2, F2] of Object.entries(r)) {
    for (const [e2, s] of Object.entries(F2)) r[e2] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }, F2[e2] = r[e2], t.set(s[0], s[1]);
    Object.defineProperty(r, u2, { value: F2, enumerable: false });
  }
  return Object.defineProperty(r, "codes", { value: t, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi = L$1(), r.color.ansi256 = N(), r.color.ansi16m = I(), r.bgColor.ansi = L$1(m), r.bgColor.ansi256 = N(m), r.bgColor.ansi16m = I(m), Object.defineProperties(r, { rgbToAnsi256: { value: (u2, F2, e2) => u2 === F2 && F2 === e2 ? u2 < 8 ? 16 : u2 > 248 ? 231 : Math.round((u2 - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(u2 / 255 * 5) + 6 * Math.round(F2 / 255 * 5) + Math.round(e2 / 255 * 5), enumerable: false }, hexToRgb: { value: (u2) => {
    const F2 = /[a-f\d]{6}|[a-f\d]{3}/i.exec(u2.toString(16));
    if (!F2) return [0, 0, 0];
    let [e2] = F2;
    e2.length === 3 && (e2 = [...e2].map((i) => i + i).join(""));
    const s = Number.parseInt(e2, 16);
    return [s >> 16 & 255, s >> 8 & 255, s & 255];
  }, enumerable: false }, hexToAnsi256: { value: (u2) => r.rgbToAnsi256(...r.hexToRgb(u2)), enumerable: false }, ansi256ToAnsi: { value: (u2) => {
    if (u2 < 8) return 30 + u2;
    if (u2 < 16) return 90 + (u2 - 8);
    let F2, e2, s;
    if (u2 >= 232) F2 = ((u2 - 232) * 10 + 8) / 255, e2 = F2, s = F2;
    else {
      u2 -= 16;
      const C2 = u2 % 36;
      F2 = Math.floor(u2 / 36) / 5, e2 = Math.floor(C2 / 6) / 5, s = C2 % 6 / 5;
    }
    const i = Math.max(F2, e2, s) * 2;
    if (i === 0) return 30;
    let D = 30 + (Math.round(s) << 2 | Math.round(e2) << 1 | Math.round(F2));
    return i === 2 && (D += 60), D;
  }, enumerable: false }, rgbToAnsi: { value: (u2, F2, e2) => r.ansi256ToAnsi(r.rgbToAnsi256(u2, F2, e2)), enumerable: false }, hexToAnsi: { value: (u2) => r.ansi256ToAnsi(r.hexToAnsi256(u2)), enumerable: false } }), r;
}
var iD = sD();
var v = /* @__PURE__ */ new Set(["\x1B", "\x9B"]);
var CD = 39;
var w$1 = "\x07";
var W$1 = "[";
var rD = "]";
var R = "m";
var y = `${rD}8;;`;
var V$1 = (t) => `${v.values().next().value}${W$1}${t}${R}`;
var z = (t) => `${v.values().next().value}${y}${t}${w$1}`;
var ED = (t) => t.split(" ").map((u2) => A$1(u2));
var _ = (t, u2, F2) => {
  const e2 = [...u2];
  let s = false, i = false, D = A$1(T$1(t[t.length - 1]));
  for (const [C2, o2] of e2.entries()) {
    const E = A$1(o2);
    if (D + E <= F2 ? t[t.length - 1] += o2 : (t.push(o2), D = 0), v.has(o2) && (s = true, i = e2.slice(C2 + 1).join("").startsWith(y)), s) {
      i ? o2 === w$1 && (s = false, i = false) : o2 === R && (s = false);
      continue;
    }
    D += E, D === F2 && C2 < e2.length - 1 && (t.push(""), D = 0);
  }
  !D && t[t.length - 1].length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
};
var nD = (t) => {
  const u2 = t.split(" ");
  let F2 = u2.length;
  for (; F2 > 0 && !(A$1(u2[F2 - 1]) > 0); ) F2--;
  return F2 === u2.length ? t : u2.slice(0, F2).join(" ") + u2.slice(F2).join("");
};
var oD = (t, u2, F2 = {}) => {
  if (F2.trim !== false && t.trim() === "") return "";
  let e2 = "", s, i;
  const D = ED(t);
  let C2 = [""];
  for (const [E, a] of t.split(" ").entries()) {
    F2.trim !== false && (C2[C2.length - 1] = C2[C2.length - 1].trimStart());
    let n = A$1(C2[C2.length - 1]);
    if (E !== 0 && (n >= u2 && (F2.wordWrap === false || F2.trim === false) && (C2.push(""), n = 0), (n > 0 || F2.trim === false) && (C2[C2.length - 1] += " ", n++)), F2.hard && D[E] > u2) {
      const B2 = u2 - n, p = 1 + Math.floor((D[E] - B2 - 1) / u2);
      Math.floor((D[E] - 1) / u2) < p && C2.push(""), _(C2, a, u2);
      continue;
    }
    if (n + D[E] > u2 && n > 0 && D[E] > 0) {
      if (F2.wordWrap === false && n < u2) {
        _(C2, a, u2);
        continue;
      }
      C2.push("");
    }
    if (n + D[E] > u2 && F2.wordWrap === false) {
      _(C2, a, u2);
      continue;
    }
    C2[C2.length - 1] += a;
  }
  F2.trim !== false && (C2 = C2.map((E) => nD(E)));
  const o2 = [...C2.join(`
`)];
  for (const [E, a] of o2.entries()) {
    if (e2 += a, v.has(a)) {
      const { groups: B2 } = new RegExp(`(?:\\${W$1}(?<code>\\d+)m|\\${y}(?<uri>.*)${w$1})`).exec(o2.slice(E).join("")) || { groups: {} };
      if (B2.code !== void 0) {
        const p = Number.parseFloat(B2.code);
        s = p === CD ? void 0 : p;
      } else B2.uri !== void 0 && (i = B2.uri.length === 0 ? void 0 : B2.uri);
    }
    const n = iD.codes.get(Number(s));
    o2[E + 1] === `
` ? (i && (e2 += z("")), s && n && (e2 += V$1(n))) : a === `
` && (s && n && (e2 += V$1(s)), i && (e2 += z(i)));
  }
  return e2;
};
function G(t, u2, F2) {
  return String(t).normalize().replace(/\r\n/g, `
`).split(`
`).map((e2) => oD(e2, u2, F2)).join(`
`);
}
var aD = ["up", "down", "left", "right", "space", "enter", "cancel"];
var c = { actions: new Set(aD), aliases: /* @__PURE__ */ new Map([["k", "up"], ["j", "down"], ["h", "left"], ["l", "right"], ["", "cancel"], ["escape", "cancel"]]) };
function k$1(t, u2) {
  if (typeof t == "string") return c.aliases.get(t) === u2;
  for (const F2 of t) if (F2 !== void 0 && k$1(F2, u2)) return true;
  return false;
}
function lD(t, u2) {
  if (t === u2) return;
  const F2 = t.split(`
`), e2 = u2.split(`
`), s = [];
  for (let i = 0; i < Math.max(F2.length, e2.length); i++) F2[i] !== e2[i] && s.push(i);
  return s;
}
globalThis.process.platform.startsWith("win");
var S = Symbol("clack:cancel");
function d$1(t, u2) {
  const F2 = t;
  F2.isTTY && F2.setRawMode(u2);
}
var AD = Object.defineProperty;
var pD = (t, u2, F2) => u2 in t ? AD(t, u2, { enumerable: true, configurable: true, writable: true, value: F2 }) : t[u2] = F2;
var h = (t, u2, F2) => (pD(t, typeof u2 != "symbol" ? u2 + "" : u2, F2), F2);
var x = class {
  constructor(u2, F2 = true) {
    h(this, "input"), h(this, "output"), h(this, "_abortSignal"), h(this, "rl"), h(this, "opts"), h(this, "_render"), h(this, "_track", false), h(this, "_prevFrame", ""), h(this, "_subscribers", /* @__PURE__ */ new Map()), h(this, "_cursor", 0), h(this, "state", "initial"), h(this, "error", ""), h(this, "value");
    const { input: e2 = stdin, output: s = stdout, render: i, signal: D, ...C2 } = u2;
    this.opts = C2, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = i.bind(this), this._track = F2, this._abortSignal = D, this.input = e2, this.output = s;
  }
  unsubscribe() {
    this._subscribers.clear();
  }
  setSubscriber(u2, F2) {
    const e2 = this._subscribers.get(u2) ?? [];
    e2.push(F2), this._subscribers.set(u2, e2);
  }
  on(u2, F2) {
    this.setSubscriber(u2, { cb: F2 });
  }
  once(u2, F2) {
    this.setSubscriber(u2, { cb: F2, once: true });
  }
  emit(u2, ...F2) {
    const e2 = this._subscribers.get(u2) ?? [], s = [];
    for (const i of e2) i.cb(...F2), i.once && s.push(() => e2.splice(e2.indexOf(i), 1));
    for (const i of s) i();
  }
  prompt() {
    return new Promise((u2, F2) => {
      if (this._abortSignal) {
        if (this._abortSignal.aborted) return this.state = "cancel", this.close(), u2(S);
        this._abortSignal.addEventListener("abort", () => {
          this.state = "cancel", this.close();
        }, { once: true });
      }
      const e2 = new WriteStream(0);
      e2._write = (s, i, D) => {
        this._track && (this.value = this.rl?.line.replace(/\t/g, ""), this._cursor = this.rl?.cursor ?? 0, this.emit("value", this.value)), D();
      }, this.input.pipe(e2), this.rl = f.createInterface({ input: this.input, output: e2, tabSize: 2, prompt: "", escapeCodeTimeout: 50 }), f.emitKeypressEvents(this.input, this.rl), this.rl.prompt(), this.opts.initialValue !== void 0 && this._track && this.rl.write(this.opts.initialValue), this.input.on("keypress", this.onKeypress), d$1(this.input, true), this.output.on("resize", this.render), this.render(), this.once("submit", () => {
        this.output.write(srcExports.cursor.show), this.output.off("resize", this.render), d$1(this.input, false), u2(this.value);
      }), this.once("cancel", () => {
        this.output.write(srcExports.cursor.show), this.output.off("resize", this.render), d$1(this.input, false), u2(S);
      });
    });
  }
  onKeypress(u2, F2) {
    if (this.state === "error" && (this.state = "active"), F2?.name && (!this._track && c.aliases.has(F2.name) && this.emit("cursor", c.aliases.get(F2.name)), c.actions.has(F2.name) && this.emit("cursor", F2.name)), u2 && (u2.toLowerCase() === "y" || u2.toLowerCase() === "n") && this.emit("confirm", u2.toLowerCase() === "y"), u2 === "	" && this.opts.placeholder && (this.value || (this.rl?.write(this.opts.placeholder), this.emit("value", this.opts.placeholder))), u2 && this.emit("key", u2.toLowerCase()), F2?.name === "return") {
      if (this.opts.validate) {
        const e2 = this.opts.validate(this.value);
        e2 && (this.error = e2 instanceof Error ? e2.message : e2, this.state = "error", this.rl?.write(this.value));
      }
      this.state !== "error" && (this.state = "submit");
    }
    k$1([u2, F2?.name, F2?.sequence], "cancel") && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
  }
  close() {
    this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), d$1(this.input, false), this.rl?.close(), this.rl = void 0, this.emit(`${this.state}`, this.value), this.unsubscribe();
  }
  restoreCursor() {
    const u2 = G(this._prevFrame, process.stdout.columns, { hard: true }).split(`
`).length - 1;
    this.output.write(srcExports.cursor.move(-999, u2 * -1));
  }
  render() {
    const u2 = G(this._render(this) ?? "", process.stdout.columns, { hard: true });
    if (u2 !== this._prevFrame) {
      if (this.state === "initial") this.output.write(srcExports.cursor.hide);
      else {
        const F2 = lD(this._prevFrame, u2);
        if (this.restoreCursor(), F2 && F2?.length === 1) {
          const e2 = F2[0];
          this.output.write(srcExports.cursor.move(0, e2)), this.output.write(srcExports.erase.lines(1));
          const s = u2.split(`
`);
          this.output.write(s[e2]), this._prevFrame = u2, this.output.write(srcExports.cursor.move(0, s.length - e2 - 1));
          return;
        }
        if (F2 && F2?.length > 1) {
          const e2 = F2[0];
          this.output.write(srcExports.cursor.move(0, e2)), this.output.write(srcExports.erase.down());
          const s = u2.split(`
`).slice(e2);
          this.output.write(s.join(`
`)), this._prevFrame = u2;
          return;
        }
        this.output.write(srcExports.erase.down());
      }
      this.output.write(u2), this.state === "initial" && (this.state = "active"), this._prevFrame = u2;
    }
  }
};
var fD = class extends x {
  get cursor() {
    return this.value ? 0 : 1;
  }
  get _value() {
    return this.cursor === 0;
  }
  constructor(u2) {
    super(u2, false), this.value = !!u2.initialValue, this.on("value", () => {
      this.value = this._value;
    }), this.on("confirm", (F2) => {
      this.output.write(srcExports.cursor.move(0, -1)), this.value = F2, this.state = "submit", this.close();
    }), this.on("cursor", () => {
      this.value = !this.value;
    });
  }
};
var bD = Object.defineProperty;
var mD = (t, u2, F2) => u2 in t ? bD(t, u2, { enumerable: true, configurable: true, writable: true, value: F2 }) : t[u2] = F2;
var Y = (t, u2, F2) => (mD(t, typeof u2 != "symbol" ? u2 + "" : u2, F2), F2);
var wD = class extends x {
  constructor(u2) {
    super(u2, false), Y(this, "options"), Y(this, "cursor", 0), this.options = u2.options, this.value = [...u2.initialValues ?? []], this.cursor = Math.max(this.options.findIndex(({ value: F2 }) => F2 === u2.cursorAt), 0), this.on("key", (F2) => {
      F2 === "a" && this.toggleAll();
    }), this.on("cursor", (F2) => {
      switch (F2) {
        case "left":
        case "up":
          this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
          break;
        case "down":
        case "right":
          this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
          break;
        case "space":
          this.toggleValue();
          break;
      }
    });
  }
  get _value() {
    return this.options[this.cursor].value;
  }
  toggleAll() {
    const u2 = this.value.length === this.options.length;
    this.value = u2 ? [] : this.options.map((F2) => F2.value);
  }
  toggleValue() {
    const u2 = this.value.includes(this._value);
    this.value = u2 ? this.value.filter((F2) => F2 !== this._value) : [...this.value, this._value];
  }
};
var SD = Object.defineProperty;
var $D = (t, u2, F2) => u2 in t ? SD(t, u2, { enumerable: true, configurable: true, writable: true, value: F2 }) : t[u2] = F2;
var q = (t, u2, F2) => ($D(t, typeof u2 != "symbol" ? u2 + "" : u2, F2), F2);
var jD = class extends x {
  constructor(u2) {
    super(u2, false), q(this, "options"), q(this, "cursor", 0), this.options = u2.options, this.cursor = this.options.findIndex(({ value: F2 }) => F2 === u2.initialValue), this.cursor === -1 && (this.cursor = 0), this.changeValue(), this.on("cursor", (F2) => {
      switch (F2) {
        case "left":
        case "up":
          this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
          break;
        case "down":
        case "right":
          this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
          break;
      }
      this.changeValue();
    });
  }
  get _value() {
    return this.options[this.cursor];
  }
  changeValue() {
    this.value = this._value.value;
  }
};
var PD = class extends x {
  get valueWithCursor() {
    if (this.state === "submit") return this.value;
    if (this.cursor >= this.value.length) return `${this.value}\u2588`;
    const u2 = this.value.slice(0, this.cursor), [F2, ...e$1] = this.value.slice(this.cursor);
    return `${u2}${e.inverse(F2)}${e$1.join("")}`;
  }
  get cursor() {
    return this._cursor;
  }
  constructor(u2) {
    super(u2), this.on("finalize", () => {
      this.value || (this.value = u2.defaultValue);
    });
  }
};
function ce() {
  return g.platform !== "win32" ? g.env.TERM !== "linux" : !!g.env.CI || !!g.env.WT_SESSION || !!g.env.TERMINUS_SUBLIME || g.env.ConEmuTask === "{cmd::Cmder}" || g.env.TERM_PROGRAM === "Terminus-Sublime" || g.env.TERM_PROGRAM === "vscode" || g.env.TERM === "xterm-256color" || g.env.TERM === "alacritty" || g.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var V = ce();
var u = (t, n) => V ? t : n;
var le = u("\u276F", ">");
var L = u("\u25A0", "x");
var W = u("\u25B2", "x");
var C = u("\u2714", "\u221A");
var o = u("");
var d = u("");
var k = u("\u25CF", ">");
var P = u("\u25CB", " ");
var A = u("\u25FB", "[\u2022]");
var T = u("\u25FC", "[+]");
var F = u("\u25FB", "[ ]");
var w = (t) => {
  switch (t) {
    case "initial":
    case "active":
      return e.cyan(le);
    case "cancel":
      return e.red(L);
    case "error":
      return e.yellow(W);
    case "submit":
      return e.green(C);
  }
};
var B = (t) => {
  const { cursor: n, options: s, style: r2 } = t, i = t.maxItems ?? Number.POSITIVE_INFINITY, a = Math.max(process.stdout.rows - 4, 0), c2 = Math.min(a, Math.max(i, 5));
  let l = 0;
  n >= l + c2 - 3 ? l = Math.max(Math.min(n - c2 + 3, s.length - c2), 0) : n < l + 2 && (l = Math.max(n - 2, 0));
  const $ = c2 < s.length && l > 0, p = c2 < s.length && l + c2 < s.length;
  return s.slice(l, l + c2).map((M, v2, x2) => {
    const j = v2 === 0 && $, E = v2 === x2.length - 1 && p;
    return j || E ? e.dim("...") : r2(M, v2 + l === n);
  });
};
var he = (t) => new PD({ validate: t.validate, placeholder: t.placeholder, defaultValue: t.defaultValue, initialValue: t.initialValue, render() {
  const n = `${e.gray(o)}
${w(this.state)} ${t.message}
`, s = t.placeholder ? e.inverse(t.placeholder[0]) + e.dim(t.placeholder.slice(1)) : e.inverse(e.hidden("_")), r2 = this.value ? this.valueWithCursor : s;
  switch (this.state) {
    case "error":
      return `${n.trim()}
${e.yellow(o)} ${r2}
${e.yellow(d)} ${e.yellow(this.error)}
`;
    case "submit":
      return `${n}${e.gray(o)} ${e.dim(this.value || t.placeholder)}`;
    case "cancel":
      return `${n}${e.gray(o)} ${e.strikethrough(e.dim(this.value ?? ""))}${this.value?.trim() ? `
${e.gray(o)}` : ""}`;
    default:
      return `${n}${e.cyan(o)} ${r2}
${e.cyan(d)}
`;
  }
} }).prompt();
var ye = (t) => {
  const n = t.active ?? "Yes", s = t.inactive ?? "No";
  return new fD({ active: n, inactive: s, initialValue: t.initialValue ?? true, render() {
    const r2 = `${e.gray(o)}
${w(this.state)} ${t.message}
`, i = this.value ? n : s;
    switch (this.state) {
      case "submit":
        return `${r2}${e.gray(o)} ${e.dim(i)}`;
      case "cancel":
        return `${r2}${e.gray(o)} ${e.strikethrough(e.dim(i))}
${e.gray(o)}`;
      default:
        return `${r2}${e.cyan(o)} ${this.value ? `${e.green(k)} ${n}` : `${e.dim(P)} ${e.dim(n)}`} ${e.dim("/")} ${this.value ? `${e.dim(P)} ${e.dim(s)}` : `${e.green(k)} ${s}`}
${e.cyan(d)}
`;
    }
  } }).prompt();
};
var ve = (t) => {
  const n = (s, r2) => {
    const i = s.label ?? String(s.value);
    switch (r2) {
      case "selected":
        return `${e.dim(i)}`;
      case "active":
        return `${e.green(k)} ${i} ${s.hint ? e.dim(`(${s.hint})`) : ""}`;
      case "cancelled":
        return `${e.strikethrough(e.dim(i))}`;
      default:
        return `${e.dim(P)} ${e.dim(i)}`;
    }
  };
  return new jD({ options: t.options, initialValue: t.initialValue, render() {
    const s = `${e.gray(o)}
${w(this.state)} ${t.message}
`;
    switch (this.state) {
      case "submit":
        return `${s}${e.gray(o)} ${n(this.options[this.cursor], "selected")}`;
      case "cancel":
        return `${s}${e.gray(o)} ${n(this.options[this.cursor], "cancelled")}
${e.gray(o)}`;
      default:
        return `${s}${e.cyan(o)} ${B({ cursor: this.cursor, options: this.options, maxItems: t.maxItems, style: (r2, i) => n(r2, i ? "active" : "inactive") }).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`;
    }
  } }).prompt();
};
var fe = (t) => {
  const n = (s, r2) => {
    const i = s.label ?? String(s.value);
    return r2 === "active" ? `${e.cyan(A)} ${i} ${s.hint ? e.dim(`(${s.hint})`) : ""}` : r2 === "selected" ? `${e.green(T)} ${e.dim(i)}` : r2 === "cancelled" ? `${e.strikethrough(e.dim(i))}` : r2 === "active-selected" ? `${e.green(T)} ${i} ${s.hint ? e.dim(`(${s.hint})`) : ""}` : r2 === "submitted" ? `${e.dim(i)}` : `${e.dim(F)} ${e.dim(i)}`;
  };
  return new wD({ options: t.options, initialValues: t.initialValues, required: t.required ?? true, cursorAt: t.cursorAt, validate(s) {
    if (this.required && s.length === 0) return `Please select at least one option.
${e.reset(e.dim(`Press ${e.gray(e.bgWhite(e.inverse(" space ")))} to select, ${e.gray(e.bgWhite(e.inverse(" enter ")))} to submit`))}`;
  }, render() {
    const s = `${e.gray(o)}
${w(this.state)} ${t.message}
`, r2 = (i, a) => {
      const c2 = this.value.includes(i.value);
      return a && c2 ? n(i, "active-selected") : c2 ? n(i, "selected") : n(i, a ? "active" : "inactive");
    };
    switch (this.state) {
      case "submit":
        return `${s}${e.gray(o)} ${this.options.filter(({ value: i }) => this.value.includes(i)).map((i) => n(i, "submitted")).join(e.dim(", ")) || e.dim("none")}`;
      case "cancel": {
        const i = this.options.filter(({ value: a }) => this.value.includes(a)).map((a) => n(a, "cancelled")).join(e.dim(", "));
        return `${s}${e.gray(o)} ${i.trim() ? `${i}
${e.gray(o)}` : ""}`;
      }
      case "error": {
        const i = this.error.split(`
`).map((a, c2) => c2 === 0 ? `${e.yellow(d)} ${e.yellow(a)}` : `   ${a}`).join(`
`);
        return `${s + e.yellow(o)} ${B({ options: this.options, cursor: this.cursor, maxItems: t.maxItems, style: r2 }).join(`
${e.yellow(o)}  `)}
${i}
`;
      }
      default:
        return `${s}${e.cyan(o)} ${B({ options: this.options, cursor: this.cursor, maxItems: t.maxItems, style: r2 }).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`;
    }
  } }).prompt();
};
`${e.gray(o)}  `;
var kCancel = Symbol.for("cancel");
async function prompt(message, opts = {}) {
  const handleCancel = (value) => {
    if (typeof value !== "symbol" || value.toString() !== "Symbol(clack:cancel)") {
      return value;
    }
    switch (opts.cancel) {
      case "reject": {
        const error = new Error("Prompt cancelled.");
        error.name = "ConsolaPromptCancelledError";
        if (Error.captureStackTrace) {
          Error.captureStackTrace(error, prompt);
        }
        throw error;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "symbol": {
        return kCancel;
      }
      default:
      case "default": {
        return opts.default ?? opts.initial;
      }
    }
  };
  if (!opts.type || opts.type === "text") {
    return await he({
      message,
      defaultValue: opts.default,
      placeholder: opts.placeholder,
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "confirm") {
    return await ye({
      message,
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "select") {
    return await ve({
      message,
      options: opts.options.map(
        (o2) => typeof o2 === "string" ? { value: o2, label: o2 } : o2
      ),
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "multiselect") {
    return await fe({
      message,
      options: opts.options.map(
        (o2) => typeof o2 === "string" ? { value: o2, label: o2 } : o2
      ),
      required: opts.required,
      initialValues: opts.initial
    }).then(handleCancel);
  }
  throw new Error(`Unknown prompt type: ${opts.type}`);
}
export {
  kCancel,
  prompt
};
