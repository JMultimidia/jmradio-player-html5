/*! nouislider - 9.2.0 - 2017-01-11 10:35:35 */

!function (a) { "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? module.exports = a() : window.noUiSlider = a() }(function () { "use strict"; function a(a, b) { var c = document.createElement("div"); return j(c, b), a.appendChild(c), c } function b(a) { return a.filter(function (a) { return !this[a] && (this[a] = !0) }, {}) } function c(a, b) { return Math.round(a / b) * b } function d(a, b) { var c = a.getBoundingClientRect(), d = a.ownerDocument, e = d.documentElement, f = m(); return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f.x = 0), b ? c.top + f.y - e.clientTop : c.left + f.x - e.clientLeft } function e(a) { return "number" == typeof a && !isNaN(a) && isFinite(a) } function f(a, b, c) { c > 0 && (j(a, b), setTimeout(function () { k(a, b) }, c)) } function g(a) { return Math.max(Math.min(a, 100), 0) } function h(a) { return Array.isArray(a) ? a : [a] } function i(a) { a = String(a); var b = a.split("."); return b.length > 1 ? b[1].length : 0 } function j(a, b) { a.classList ? a.classList.add(b) : a.className += " " + b } function k(a, b) { a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ") } function l(a, b) { return a.classList ? a.classList.contains(b) : new RegExp("\\b" + b + "\\b").test(a.className) } function m() { var a = void 0 !== window.pageXOffset, b = "CSS1Compat" === (document.compatMode || ""), c = a ? window.pageXOffset : b ? document.documentElement.scrollLeft : document.body.scrollLeft, d = a ? window.pageYOffset : b ? document.documentElement.scrollTop : document.body.scrollTop; return { x: c, y: d } } function n() { return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" } } function o(a, b) { return 100 / (b - a) } function p(a, b) { return 100 * b / (a[1] - a[0]) } function q(a, b) { return p(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]) } function r(a, b) { return b * (a[1] - a[0]) / 100 + a[0] } function s(a, b) { for (var c = 1; a >= b[c];)c += 1; return c } function t(a, b, c) { if (c >= a.slice(-1)[0]) return 100; var d, e, f, g, h = s(c, a); return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + q([d, e], c) / o(f, g) } function u(a, b, c) { if (c >= 100) return a.slice(-1)[0]; var d, e, f, g, h = s(c, b); return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], r([d, e], (c - f) * o(f, g)) } function v(a, b, d, e) { if (100 === e) return e; var f, g, h = s(e, a); return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : b[h - 1] ? a[h - 1] + c(e - a[h - 1], b[h - 1]) : e } function w(a, b, c) { var d; if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider (" + U + "): 'range' contains invalid value."); if (d = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !e(d) || !e(b[0])) throw new Error("noUiSlider (" + U + "): 'range' value isn't numeric."); c.xPct.push(d), c.xVal.push(b[0]), d ? c.xSteps.push(!isNaN(b[1]) && b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1]), c.xHighestCompleteStep.push(0) } function x(a, b, c) { if (!b) return !0; c.xSteps[a] = p([c.xVal[a], c.xVal[a + 1]], b) / o(c.xPct[a], c.xPct[a + 1]); var d = (c.xVal[a + 1] - c.xVal[a]) / c.xNumSteps[a], e = Math.ceil(Number(d.toFixed(3)) - 1), f = c.xVal[a] + c.xNumSteps[a] * e; c.xHighestCompleteStep[a] = f } function y(a, b, c, d) { this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = b, this.direction = c; var e, f = []; for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]); for (f.length && "object" == typeof f[0][0] ? f.sort(function (a, b) { return a[0][0] - b[0][0] }) : f.sort(function (a, b) { return a[0] - b[0] }), e = 0; e < f.length; e++)w(f[e][1], f[e][0], this); for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++)x(e, this.xNumSteps[e], this) } function z(a, b) { if (!e(b)) throw new Error("noUiSlider (" + U + "): 'step' is not numeric."); a.singleStep = b } function A(a, b) { if ("object" != typeof b || Array.isArray(b)) throw new Error("noUiSlider (" + U + "): 'range' is not an object."); if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider (" + U + "): Missing 'min' or 'max' in 'range'."); if (b.min === b.max) throw new Error("noUiSlider (" + U + "): 'range' 'min' and 'max' cannot be equal."); a.spectrum = new y(b, a.snap, a.dir, a.singleStep) } function B(a, b) { if (b = h(b), !Array.isArray(b) || !b.length) throw new Error("noUiSlider (" + U + "): 'start' option is incorrect."); a.handles = b.length, a.start = b } function C(a, b) { if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider (" + U + "): 'snap' option must be a boolean.") } function D(a, b) { if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider (" + U + "): 'animate' option must be a boolean.") } function E(a, b) { if (a.animationDuration = b, "number" != typeof b) throw new Error("noUiSlider (" + U + "): 'animationDuration' option must be a number.") } function F(a, b) { var c, d = [!1]; if ("lower" === b ? b = [!0, !1] : "upper" === b && (b = [!1, !0]), b === !0 || b === !1) { for (c = 1; c < a.handles; c++)d.push(b); d.push(!1) } else { if (!Array.isArray(b) || !b.length || b.length !== a.handles + 1) throw new Error("noUiSlider (" + U + "): 'connect' option doesn't match handle count."); d = b } a.connect = d } function G(a, b) { switch (b) { case "horizontal": a.ort = 0; break; case "vertical": a.ort = 1; break; default: throw new Error("noUiSlider (" + U + "): 'orientation' option is invalid.") } } function H(a, b) { if (!e(b)) throw new Error("noUiSlider (" + U + "): 'margin' option must be numeric."); if (0 !== b && (a.margin = a.spectrum.getMargin(b), !a.margin)) throw new Error("noUiSlider (" + U + "): 'margin' option is only supported on linear sliders.") } function I(a, b) { if (!e(b)) throw new Error("noUiSlider (" + U + "): 'limit' option must be numeric."); if (a.limit = a.spectrum.getMargin(b), !a.limit || a.handles < 2) throw new Error("noUiSlider (" + U + "): 'limit' option is only supported on linear sliders with 2 or more handles.") } function J(a, b) { if (!e(b)) throw new Error("noUiSlider (" + U + "): 'padding' option must be numeric."); if (0 !== b) { if (a.padding = a.spectrum.getMargin(b), !a.padding) throw new Error("noUiSlider (" + U + "): 'padding' option is only supported on linear sliders."); if (a.padding < 0) throw new Error("noUiSlider (" + U + "): 'padding' option must be a positive number."); if (a.padding >= 50) throw new Error("noUiSlider (" + U + "): 'padding' option must be less than half the range.") } } function K(a, b) { switch (b) { case "ltr": a.dir = 0; break; case "rtl": a.dir = 1; break; default: throw new Error("noUiSlider (" + U + "): 'direction' option was not recognized.") } } function L(a, b) { if ("string" != typeof b) throw new Error("noUiSlider (" + U + "): 'behaviour' must be a string containing options."); var c = b.indexOf("tap") >= 0, d = b.indexOf("drag") >= 0, e = b.indexOf("fixed") >= 0, f = b.indexOf("snap") >= 0, g = b.indexOf("hover") >= 0; if (e) { if (2 !== a.handles) throw new Error("noUiSlider (" + U + "): 'fixed' behaviour must be used with 2 handles"); H(a, a.start[1] - a.start[0]) } a.events = { tap: c || f, drag: d, fixed: e, snap: f, hover: g } } function M(a, b) { if (b !== !1) if (b === !0) { a.tooltips = []; for (var c = 0; c < a.handles; c++)a.tooltips.push(!0) } else { if (a.tooltips = h(b), a.tooltips.length !== a.handles) throw new Error("noUiSlider (" + U + "): must pass a formatter for all handles."); a.tooltips.forEach(function (a) { if ("boolean" != typeof a && ("object" != typeof a || "function" != typeof a.to)) throw new Error("noUiSlider (" + U + "): 'tooltips' must be passed a formatter or 'false'.") }) } } function N(a, b) { if (a.format = b, "function" == typeof b.to && "function" == typeof b.from) return !0; throw new Error("noUiSlider (" + U + "): 'format' requires 'to' and 'from' methods.") } function O(a, b) { if (void 0 !== b && "string" != typeof b && b !== !1) throw new Error("noUiSlider (" + U + "): 'cssPrefix' must be a string or `false`."); a.cssPrefix = b } function P(a, b) { if (void 0 !== b && "object" != typeof b) throw new Error("noUiSlider (" + U + "): 'cssClasses' must be an object."); if ("string" == typeof a.cssPrefix) { a.cssClasses = {}; for (var c in b) b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c]) } else a.cssClasses = b } function Q(a, b) { if (b !== !0 && b !== !1) throw new Error("noUiSlider (" + U + "): 'useRequestAnimationFrame' option should be true (default) or false."); a.useRequestAnimationFrame = b } function R(a) { var b = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, format: V }, c = { step: { r: !1, t: z }, start: { r: !0, t: B }, connect: { r: !0, t: F }, direction: { r: !0, t: K }, snap: { r: !1, t: C }, animate: { r: !1, t: D }, animationDuration: { r: !1, t: E }, range: { r: !0, t: A }, orientation: { r: !1, t: G }, margin: { r: !1, t: H }, limit: { r: !1, t: I }, padding: { r: !1, t: J }, behaviour: { r: !0, t: L }, format: { r: !1, t: N }, tooltips: { r: !1, t: M }, cssPrefix: { r: !1, t: O }, cssClasses: { r: !1, t: P }, useRequestAnimationFrame: { r: !1, t: Q } }, d = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", cssPrefix: "noUi-", cssClasses: { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", ltr: "ltr", rtl: "rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" }, useRequestAnimationFrame: !0 }; Object.keys(c).forEach(function (e) { if (void 0 === a[e] && void 0 === d[e]) { if (c[e].r) throw new Error("noUiSlider (" + U + "): '" + e + "' is required."); return !0 } c[e].t(b, void 0 === a[e] ? d[e] : a[e]) }), b.pips = a.pips; var e = [["left", "top"], ["right", "bottom"]]; return b.style = e[b.dir][b.ort], b.styleOposite = e[b.dir ? 0 : 1][b.ort], b } function S(c, e, i) { function o(b, c) { var d = a(b, e.cssClasses.origin), f = a(d, e.cssClasses.handle); return f.setAttribute("data-handle", c), 0 === c ? j(f, e.cssClasses.handleLower) : c === e.handles - 1 && j(f, e.cssClasses.handleUpper), d } function p(b, c) { return !!c && a(b, e.cssClasses.connect) } function q(a, b) { ca = [], da = [], da.push(p(b, a[0])); for (var c = 0; c < e.handles; c++)ca.push(o(b, c)), ia[c] = c, da.push(p(b, a[c + 1])) } function r(b) { j(b, e.cssClasses.target), 0 === e.dir ? j(b, e.cssClasses.ltr) : j(b, e.cssClasses.rtl), 0 === e.ort ? j(b, e.cssClasses.horizontal) : j(b, e.cssClasses.vertical), ba = a(b, e.cssClasses.base) } function s(b, c) { return !!e.tooltips[c] && a(b.firstChild, e.cssClasses.tooltip) } function t() { var a = ca.map(s); $("update", function (b, c, d) { if (a[c]) { var f = b[c]; e.tooltips[c] !== !0 && (f = e.tooltips[c].to(d[c])), a[c].innerHTML = f } }) } function u(a, b, c) { if ("range" === a || "steps" === a) return ka.xVal; if ("count" === a) { if (!b) throw new Error("noUiSlider (" + U + "): 'values' required for mode 'count'."); var d, e = 100 / (b - 1), f = 0; for (b = []; (d = f++ * e) <= 100;)b.push(d); a = "positions" } return "positions" === a ? b.map(function (a) { return ka.fromStepping(c ? ka.getStep(a) : a) }) : "values" === a ? c ? b.map(function (a) { return ka.fromStepping(ka.getStep(ka.toStepping(a))) }) : b : void 0 } function v(a, c, d) { function e(a, b) { return (a + b).toFixed(7) / 1 } var f = {}, g = ka.xVal[0], h = ka.xVal[ka.xVal.length - 1], i = !1, j = !1, k = 0; return d = b(d.slice().sort(function (a, b) { return a - b })), d[0] !== g && (d.unshift(g), i = !0), d[d.length - 1] !== h && (d.push(h), j = !0), d.forEach(function (b, g) { var h, l, m, n, o, p, q, r, s, t, u = b, v = d[g + 1]; if ("steps" === c && (h = ka.xNumSteps[g]), h || (h = v - u), u !== !1 && void 0 !== v) for (h = Math.max(h, 1e-7), l = u; l <= v; l = e(l, h)) { for (n = ka.toStepping(l), o = n - k, r = o / a, s = Math.round(r), t = o / s, m = 1; m <= s; m += 1)p = k + m * t, f[p.toFixed(5)] = ["x", 0]; q = d.indexOf(l) > -1 ? 1 : "steps" === c ? 2 : 0, !g && i && (q = 0), l === v && j || (f[n.toFixed(5)] = [l, q]), k = n } }), f } function w(a, b, c) { function d(a, b) { var c = b === e.cssClasses.value, d = c ? m : n, f = c ? k : l; return b + " " + d[e.ort] + " " + f[a] } function f(a, b, c) { return 'class="' + d(c[1], b) + '" style="' + e.style + ": " + a + '%"' } function g(a, d) { d[1] = d[1] && b ? b(d[0], d[1]) : d[1], i += "<div " + f(a, e.cssClasses.marker, d) + "></div>", d[1] && (i += "<div " + f(a, e.cssClasses.value, d) + ">" + c.to(d[0]) + "</div>") } var h = document.createElement("div"), i = "", k = [e.cssClasses.valueNormal, e.cssClasses.valueLarge, e.cssClasses.valueSub], l = [e.cssClasses.markerNormal, e.cssClasses.markerLarge, e.cssClasses.markerSub], m = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical], n = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical]; return j(h, e.cssClasses.pips), j(h, 0 === e.ort ? e.cssClasses.pipsHorizontal : e.cssClasses.pipsVertical), Object.keys(a).forEach(function (b) { g(b, a[b]) }), h.innerHTML = i, h } function x(a) { var b = a.mode, c = a.density || 1, d = a.filter || !1, e = a.values || !1, f = a.stepped || !1, g = u(b, e, f), h = v(c, b, g), i = a.format || { to: Math.round }; return ga.appendChild(w(h, d, i)) } function y() { var a = ba.getBoundingClientRect(), b = "offset" + ["Width", "Height"][e.ort]; return 0 === e.ort ? a.width || ba[b] : a.height || ba[b] } function z(a, b, c, d) { var f = function (b) { return !ga.hasAttribute("disabled") && (!l(ga, e.cssClasses.tap) && (!!(b = A(b, d.pageOffset)) && (!(a === fa.start && void 0 !== b.buttons && b.buttons > 1) && ((!d.hover || !b.buttons) && (b.calcPoint = b.points[e.ort], void c(b, d)))))) }, g = []; return a.split(" ").forEach(function (a) { b.addEventListener(a, f, !1), g.push([a, f]) }), g } function A(a, b) { a.preventDefault(); var c, d, e = 0 === a.type.indexOf("touch"), f = 0 === a.type.indexOf("mouse"), g = 0 === a.type.indexOf("pointer"); if (0 === a.type.indexOf("MSPointer") && (g = !0), e) { if (a.touches.length > 1) return !1; c = a.changedTouches[0].pageX, d = a.changedTouches[0].pageY } return b = b || m(), (f || g) && (c = a.clientX + b.x, d = a.clientY + b.y), a.pageOffset = b, a.points = [c, d], a.cursor = f || g, a } function B(a) { var b = a - d(ba, e.ort), c = 100 * b / y(); return e.dir ? 100 - c : c } function C(a) { var b = 100, c = !1; return ca.forEach(function (d, e) { if (!d.hasAttribute("disabled")) { var f = Math.abs(ha[e] - a); f < b && (c = e, b = f) } }), c } function D(a, b, c, d) { var e = c.slice(), f = [!a, a], g = [a, !a]; d = d.slice(), a && d.reverse(), d.length > 1 ? d.forEach(function (a, c) { var d = M(e, a, e[a] + b, f[c], g[c]); d === !1 ? b = 0 : (b = d - e[a], e[a] = d) }) : f = g = [!0]; var h = !1; d.forEach(function (a, d) { h = Q(a, c[a] + b, f[d], g[d]) || h }), h && d.forEach(function (a) { E("update", a), E("slide", a) }) } function E(a, b, c) { Object.keys(ma).forEach(function (d) { var f = d.split(".")[0]; a === f && ma[d].forEach(function (a) { a.call(ea, la.map(e.format.to), b, la.slice(), c || !1, ha.slice()) }) }) } function F(a, b) { "mouseout" === a.type && "HTML" === a.target.nodeName && null === a.relatedTarget && H(a, b) } function G(a, b) { if (navigator.appVersion.indexOf("MSIE 9") === -1 && 0 === a.buttons && 0 !== b.buttonsProperty) return H(a, b); var c = (e.dir ? -1 : 1) * (a.calcPoint - b.startCalcPoint), d = 100 * c / b.baseSize; D(c > 0, d, b.locations, b.handleNumbers) } function H(a, b) { ja && (k(ja, e.cssClasses.active), ja = !1), a.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener)), document.documentElement.noUiListeners.forEach(function (a) { document.documentElement.removeEventListener(a[0], a[1]) }), k(ga, e.cssClasses.drag), P(), b.handleNumbers.forEach(function (a) { E("set", a), E("change", a), E("end", a) }) } function I(a, b) { if (1 === b.handleNumbers.length) { var c = ca[b.handleNumbers[0]]; if (c.hasAttribute("disabled")) return !1; ja = c.children[0], j(ja, e.cssClasses.active) } a.preventDefault(), a.stopPropagation(); var d = z(fa.move, document.documentElement, G, { startCalcPoint: a.calcPoint, baseSize: y(), pageOffset: a.pageOffset, handleNumbers: b.handleNumbers, buttonsProperty: a.buttons, locations: ha.slice() }), f = z(fa.end, document.documentElement, H, { handleNumbers: b.handleNumbers }), g = z("mouseout", document.documentElement, F, { handleNumbers: b.handleNumbers }); if (document.documentElement.noUiListeners = d.concat(f, g), a.cursor) { document.body.style.cursor = getComputedStyle(a.target).cursor, ca.length > 1 && j(ga, e.cssClasses.drag); var h = function () { return !1 }; document.body.noUiListener = h, document.body.addEventListener("selectstart", h, !1) } b.handleNumbers.forEach(function (a) { E("start", a) }) } function J(a) { a.stopPropagation(); var b = B(a.calcPoint), c = C(b); return c !== !1 && (e.events.snap || f(ga, e.cssClasses.tap, e.animationDuration), Q(c, b, !0, !0), P(), E("slide", c, !0), E("set", c, !0), E("change", c, !0), E("update", c, !0), void (e.events.snap && I(a, { handleNumbers: [c] }))) } function K(a) { var b = B(a.calcPoint), c = ka.getStep(b), d = ka.fromStepping(c); Object.keys(ma).forEach(function (a) { "hover" === a.split(".")[0] && ma[a].forEach(function (a) { a.call(ea, d) }) }) } function L(a) { a.fixed || ca.forEach(function (a, b) { z(fa.start, a.children[0], I, { handleNumbers: [b] }) }), a.tap && z(fa.start, ba, J, {}), a.hover && z(fa.move, ba, K, { hover: !0 }), a.drag && da.forEach(function (b, c) { if (b !== !1 && 0 !== c && c !== da.length - 1) { var d = ca[c - 1], f = ca[c], g = [b]; j(b, e.cssClasses.draggable), a.fixed && (g.push(d.children[0]), g.push(f.children[0])), g.forEach(function (a) { z(fa.start, a, I, { handles: [d, f], handleNumbers: [c - 1, c] }) }) } }) } function M(a, b, c, d, f) { return ca.length > 1 && (d && b > 0 && (c = Math.max(c, a[b - 1] + e.margin)), f && b < ca.length - 1 && (c = Math.min(c, a[b + 1] - e.margin))), ca.length > 1 && e.limit && (d && b > 0 && (c = Math.min(c, a[b - 1] + e.limit)), f && b < ca.length - 1 && (c = Math.max(c, a[b + 1] - e.limit))), e.padding && (0 === b && (c = Math.max(c, e.padding)), b === ca.length - 1 && (c = Math.min(c, 100 - e.padding))), c = ka.getStep(c), c = g(c), c !== a[b] && c } function N(a) { return a + "%" } function O(a, b) { ha[a] = b, la[a] = ka.fromStepping(b); var c = function () { ca[a].style[e.style] = N(b), S(a), S(a + 1) }; window.requestAnimationFrame && e.useRequestAnimationFrame ? window.requestAnimationFrame(c) : c() } function P() { ia.forEach(function (a) { var b = ha[a] > 50 ? -1 : 1, c = 3 + (ca.length + b * a); ca[a].childNodes[0].style.zIndex = c }) } function Q(a, b, c, d) { return b = M(ha, a, b, c, d), b !== !1 && (O(a, b), !0) } function S(a) { if (da[a]) { var b = 0, c = 100; 0 !== a && (b = ha[a - 1]), a !== da.length - 1 && (c = ha[a]), da[a].style[e.style] = N(b), da[a].style[e.styleOposite] = N(100 - c) } } function T(a, b) { null !== a && a !== !1 && ("number" == typeof a && (a = String(a)), a = e.format.from(a), a === !1 || isNaN(a) || Q(b, ka.toStepping(a), !1, !1)) } function V(a, b) { var c = h(a), d = void 0 === ha[0]; b = void 0 === b || !!b, c.forEach(T), e.animate && !d && f(ga, e.cssClasses.tap, e.animationDuration), ia.forEach(function (a) { Q(a, ha[a], !0, !1) }), P(), ia.forEach(function (a) { E("update", a), null !== c[a] && b && E("set", a) }) } function W(a) { V(e.start, a) } function X() { var a = la.map(e.format.to); return 1 === a.length ? a[0] : a } function Y() { for (var a in e.cssClasses) e.cssClasses.hasOwnProperty(a) && k(ga, e.cssClasses[a]); for (; ga.firstChild;)ga.removeChild(ga.firstChild); delete ga.noUiSlider } function Z() { return ha.map(function (a, b) { var c = ka.getNearbySteps(a), d = la[b], e = c.thisStep.step, f = null; e !== !1 && d + e > c.stepAfter.startValue && (e = c.stepAfter.startValue - d), f = d > c.thisStep.startValue ? c.thisStep.step : c.stepBefore.step !== !1 && d - c.stepBefore.highestStep, 100 === a ? e = null : 0 === a && (f = null); var g = ka.countStepDecimals(); return null !== e && e !== !1 && (e = Number(e.toFixed(g))), null !== f && f !== !1 && (f = Number(f.toFixed(g))), [f, e] }) } function $(a, b) { ma[a] = ma[a] || [], ma[a].push(b), "update" === a.split(".")[0] && ca.forEach(function (a, b) { E("update", b) }) } function _(a) { var b = a && a.split(".")[0], c = b && a.substring(b.length); Object.keys(ma).forEach(function (a) { var d = a.split(".")[0], e = a.substring(d.length); b && b !== d || c && c !== e || delete ma[a] }) } function aa(a, b) { var c = X(), d = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"]; d.forEach(function (b) { void 0 !== a[b] && (i[b] = a[b]) }); var f = R(i); d.forEach(function (b) { void 0 !== a[b] && (e[b] = f[b]) }), f.spectrum.direction = ka.direction, ka = f.spectrum, e.margin = f.margin, e.limit = f.limit, e.padding = f.padding, ha = [], V(a.start || c, b) } var ba, ca, da, ea, fa = n(), ga = c, ha = [], ia = [], ja = !1, ka = e.spectrum, la = [], ma = {}; if (ga.noUiSlider) throw new Error("noUiSlider (" + U + "): Slider was already initialized."); return r(ga), q(e.connect, ba), ea = { destroy: Y, steps: Z, on: $, off: _, get: X, set: V, reset: W, __moveHandles: function (a, b, c) { D(a, b, ha, c) }, options: i, updateOptions: aa, target: ga, pips: x }, L(e.events), V(e.start), e.pips && x(e.pips), e.tooltips && t(), ea } function T(a, b) { if (!a.nodeName) throw new Error("noUiSlider (" + U + "): create requires a single element."); var c = R(b, a), d = S(a, c, b); return a.noUiSlider = d, d } var U = "9.2.0"; y.prototype.getMargin = function (a) { var b = this.xNumSteps[0]; if (b && a / b % 1 !== 0) throw new Error("noUiSlider (" + U + "): 'limit', 'margin' and 'padding' must be divisible by step."); return 2 === this.xPct.length && p(this.xVal, a) }, y.prototype.toStepping = function (a) { return a = t(this.xVal, this.xPct, a) }, y.prototype.fromStepping = function (a) { return u(this.xVal, this.xPct, a) }, y.prototype.getStep = function (a) { return a = v(this.xPct, this.xSteps, this.snap, a) }, y.prototype.getNearbySteps = function (a) { var b = s(a, this.xPct); return { stepBefore: { startValue: this.xVal[b - 2], step: this.xNumSteps[b - 2], highestStep: this.xHighestCompleteStep[b - 2] }, thisStep: { startValue: this.xVal[b - 1], step: this.xNumSteps[b - 1], highestStep: this.xHighestCompleteStep[b - 1] }, stepAfter: { startValue: this.xVal[b - 0], step: this.xNumSteps[b - 0], highestStep: this.xHighestCompleteStep[b - 0] } } }, y.prototype.countStepDecimals = function () { var a = this.xNumSteps.map(i); return Math.max.apply(null, a) }, y.prototype.convert = function (a) { return this.getStep(this.toStepping(a)) }; var V = { to: function (a) { return void 0 !== a && a.toFixed(2) }, from: Number }; return { version: U, create: T } });
/**
* Shoutcast v0.1.6
* Author: Salomão Neto <salomaosnff3@gmail.com>
* License: MIT
* Github: https://www.github.com/salomaosnff
*/
const Shoutcast = (function () {    
    /**
     * Faz uma requisição que espera um JSON Padding
     * @param url
     * @param callback
     * @param callbackParam
     */
    const jsonp = function (url, callback, callbackParam) {
        callbackParam = (callbackParam || 'callback') + '';

        const callbackName = '__jsonp_' + Date.now();
        const script = document.createElement('script');

        url += (url.indexOf("?") >= 0 ? '&' : '?') + callbackParam + '=' + callbackName;
        script.src = url;


        window[callbackName] = function (data) {
            delete window[callbackName];

            script.parentNode.removeChild(script);
            callback(data)
        };

        document.head.appendChild(script);

        return callbackName;
    };

    /**
     * Shoutcast constructor
     * @param opts
     * @constructor
     */
    const Shoutcast = function (opts) {
        
        this.statsData = {};

        this.playedInterval = opts.playedInterval || 30000;
        this.statsInterval = opts.statsInterval || 10000;
        this.host = opts.host;
        this.port = parseInt(opts.port, 10) || 8000;
        this.host = opts.host;
        this.port = parseInt(opts.port, 10) || 8000;
        this.stream = parseInt(opts.stream, 10) || 1;
        this.stats_path = opts.stats_path || 'stats';
        this.played_path = opts.played_path || 'played';

        // Intervals
        this._statInterval = null;
        this._playedInterval = null;

        // callbacks
        this._stats = opts.stats || function () { };
        this._played = opts.played || function () { };

        this.audio = new Audio('http://' + this.host + ':' + this.port + '/;');
    };

    Shoutcast.prototype = {
        /**
         * Get stats data
         * @param callback
         * @returns {Shoutcast}
         */
        stats: function (callback) {
            callback = typeof callback === 'function' ? callback : function () { };

            const $this = this, url = 'http://' + this.host + ':' + this.port + '/' + this.stats_path + '?sid=' + this.stream + '&json=1';

            jsonp(url, function (data) {
                if (typeof data !== 'object' || typeof data.streamstatus === 'undefined') {
                    $this._status = 0;
                    return;
                }

                //2 = No Ar, 1 = Sem Dados
                $this._status = data.streamstatus === 1 ? 2 : 1;

                $this.statsData = data;
                $this.statsData.status = $this.getStatusText();

                callback.call($this, $this.statsData);
                $this._stats($this.statsData);
            });
            return this;
        },

        /**
         * Get Played Songs
         * @param callback
         * @returns {Shoutcast}
         */
        played: function (callback) {
            callback = typeof callback === 'function' ? callback : function () { };
            const
                $this = this,
                url = 'http://' + this.host + ':' + this.port + '/' + this.played_path + '?sid=' + this.stream + '&type=json';

            jsonp(url, function (data) {
                if (!(data instanceof Array)) return;
                callback.call($this, data);
                $this._played(data);
            });

            return this;
        },

        /**
         * Get stats property
         * @param property
         * @param def
         * @returns {*|{}}
         */
        get: function (property, def) {
            return property ? (
                typeof this.statsData[property.toLowerCase() !== 'undefined'] ?
                    this.statsData[property.toLowerCase() !== 'undefined'] : def
            ) : this.statsData;
        },

        /**
         * Start stats Interval
         * @returns {Shoutcast}
         */
        startStats: function () {
            const $this = this;

            this.stopStats();
            this.stats();

            this._statInterval = setInterval(function () {
                $this.startStats();
            }, this.statsInterval);

            return this;
        },

        /**
         * Stop stats Interval
         * @returns {Shoutcast}
         */
        stopStats: function () {
            this._statInterval && clearInterval(this._statInterval);
            return this;
        },

        /**
         * Start Played Interval
         * @returns {Shoutcast}
         */
        startPlayed: function () {
            const $this = this;

            this.stopPlayed();
            this.played();

            this._playedInterval = setInterval(function () {
                $this.startPlayed();
            }, this.playedInterval);

            return this;
        },

        /**
         * Stop Played Interval
         * @returns {Shoutcast}
         */
        stopPlayed: function () {
            this._playedInterval && clearInterval(this._playedInterval);
            return this;
        },

        /**
         * Get Status Of Server
         */
        getStatus: function () {
            return this._status;
        },

        /**
         * Get Status Of Server As text
         * @returns {string}
         */
        getStatusText: function () {
            return ['Offline', 'Awaiting Connection', 'On Air'][this._status];
        },

        /**
         * Start Audio
         * @returns {Shoutcast}
         */
        play: function () {
            this.audio.load();
            this.audio.play();
            return this;
        },

        /**
         * Stop Audio
         * @returns {Shoutcast}
         */
        stop: function () {
            this.audio.pause();
            return this;
        },

        /**
         * Alternate between play and stop
         * @returns {Shoutcast}
         */
        togglePlay: function () {
            if (this.audio.paused) this.play();
            else this.stop();

            return this;
        },

        /**
         * Change volume from audio
         * @param value
         * @returns {Shoutcast}
         */
        volume: function (value) {
            value = Math.min(value, 100);
            value = Math.max(value, 0);

            this.audio.volume = value / 100;
            return this;
        }
    };

    return Shoutcast;

})();

window.onload = function () {
    var player = document.getElementById("player");
    var toggle = player.querySelector(".toggle");
    var mute = player.querySelector(".volume .material-icons");
    var icon = toggle.querySelector("i");
    var status = player.querySelector(".status .value");
    var led = player.querySelector(".status .led");
    var ouvintes = player.querySelector(".ouvintes .value");
    var bitrate = player.querySelector(".bitrate .value");
    var current = player.querySelector(".current");
    var slider = player.querySelector(".input");
    var played = player.querySelector(".bottom ul");
    var last_volume = 50;

    function atualizarStatus(data) {
        var status_color,
            status_text = 'off';
        switch (radio.getStatus()) {
            case 1:
                status_color = 'off';
                status_text = "Aguardando conexão...";
                break;
            case 2:
                status_color = 'green';
                /* status_text = "No Ar: "; */
                status_text = "";
                break;
            default:
                status_color = 'red';
                status_text = "Offline";
                break;
        }

        ouvintes.innerHTML = data.currentlisteners || 0;
        /* bitrate.innerHTML = data.bitrate ? data.bitrate + " Kb/s" : "Sem dados"; */
        bitrate.innerHTML = data.bitrate ? data.bitrate + " Kb/s" : "";
        status.innerHTML = status_text;
        led.className = "led " + status_color;
        /* current.innerHTML = data.songtitle || data.servertitle || data.serverurl || "Sem Dados"; */
        current.innerHTML = data.songtitle || data.servertitle || data.serverurl || "";

        console.log(data);
    }
    function atualizarTocadas(musicas) {

        for (var m in musicas) {
            var musica = document.createElement("li");
            musica.innerText = musicas[m].title;

        }
    }
    separa = streaming.split(':');
    stream_ip = separa[0];
    stream_port = separa[1];

    var radio = new Shoutcast({
        host: stream_ip,
        port: stream_port,
        stats: atualizarStatus,
        played: atualizarTocadas
    });

    radio.startStats();
    radio.startPlayed();

    noUiSlider.create(slider, {
        start: 90,
        connect: 'lower',
        range: {
            'min': 0,
            'max': 100
        }
    });

    toggle.addEventListener('click', function () {
        toggle.disabled = true;
        radio.togglePlay();
        console.log(icon);

    });

    radio.audio.addEventListener('playing', function () {
        icon.innerText = "pause_circle_outline";
        toggle.disabled = false;
    });

    radio.audio.addEventListener('pause', function () {
        icon.innerText = "play_circle_filled";
        toggle.disabled = false;
    });
    mute.addEventListener('click', function () {
        if (radio.audio.volume <= 0) {
            slider.noUiSlider.set(last_volume);
        } else {
            last_volume = slider.noUiSlider.get();
            slider.noUiSlider.set(0)
        }
    });

    slider.noUiSlider.on('update', function (handler, el) {
        var vol = handler[el] || 75;
        radio.volume(vol);

        if (vol <= 0) {
            mute.innerText = "volume_mute";
        } else {
            mute.innerText = "volume_up";
        }
    });

    radio.play();    
};