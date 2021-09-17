// history.scrollRestoration = "manual";
document.addEventListener("DOMContentLoaded", function() {

	// SCROLLING ANIM
	let options = {
	    threshold: 0
	}
	let callback = function(entries, observer) {
	    entries.forEach(entry => {
	    	if (entry.isIntersecting){
	    		entry.target.classList.add('in-view');
	    	}  else {
	    		entry.target.classList.remove('in-view');
	    	}
      	});
	};
	let observer = new IntersectionObserver(callback, options),
		animated = qsa('.animated');

	animated.forEach(el => {
		if (observer) {
			observer.observe(el)
		} else {
			el.classList.remove('animated');
			el.classList.add('in-view');
		}
		
	});
	// END SCROLLING ANIM

	// MOB MENU
	qs('.header__hamb').onclick = () => {
		qs('.header__nav').classList.add('active');
	}
	qs('.header__nav-close').onclick = () => {
		qs('.header__nav').classList.remove('active');
	}
	// END MOB MENU


	function qs (selector, searchIn) {
		return searchIn ? searchIn.querySelector(selector) : document.querySelector(selector)
	}
	function qsa (selector, searchIn) {
		return searchIn ? searchIn.querySelectorAll(selector) : document.querySelectorAll(selector)
	}
});


var MultiCarousel = function (n) { var r = {}; function o(t) { if (r[t]) return r[t].exports; var e = r[t] = { i: t, l: !1, exports: {} }; return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports } return o.m = n, o.c = r, o.d = function (t, e, n) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, o.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function (e, t) { if (1 & t && (e = o(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r, function (t) { return e[t] }.bind(null, r)); return n }, o.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return o.d(e, "a", e), e }, o.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 147) }([function (t, e) { t.exports = function (t) { try { return !!t() } catch (t) { return !0 } } }, function (n, t, e) { (function (t) { function e(t) { return t && t.Math == Math && t } n.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof t && t) || Function("return this")() }).call(this, e(114)) }, function (t, e, n) { var r = n(1), o = n(57), i = n(7), c = n(58), u = n(61), a = n(85), s = o("wks"), f = r.Symbol, l = a ? f : f && f.withoutSetter || c; t.exports = function (t) { return i(s, t) || (u && i(f, t) ? s[t] = f[t] : s[t] = l("Symbol." + t)), s[t] } }, function (t, e, n) { var f = n(1), l = n(15).f, p = n(9), h = n(10), v = n(55), d = n(79), y = n(42); t.exports = function (t, e) { var n, r, o, i, c = t.target, u = t.global, a = t.stat, s = u ? f : a ? f[c] || v(c, {}) : (f[c] || {}).prototype; if (s) for (n in e) { if (o = e[n], r = t.noTargetGet ? (i = l(s, n)) && i.value : s[n], !y(u ? n : c + (a ? "." : "#") + n, t.forced) && void 0 !== r) { if (typeof o == typeof r) continue; d(o, r) } (t.sham || r && r.sham) && p(o, "sham", !0), h(s, n, o, t) } } }, function (t, e) { t.exports = function (t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function (t, e, n) { var r = n(4); t.exports = function (t) { if (!r(t)) throw TypeError(String(t) + " is not an object"); return t } }, function (t, e, n) { var r = n(0); t.exports = !r(function () { return 7 != Object.defineProperty({}, 1, { get: function () { return 7 } })[1] }) }, function (t, e) { var n = {}.hasOwnProperty; t.exports = function (t, e) { return n.call(t, e) } }, function (t, e, n) { var r = n(6), o = n(77), i = n(5), c = n(26), u = Object.defineProperty; e.f = r ? u : function (t, e, n) { if (i(t), e = c(e, !0), i(n), o) try { return u(t, e, n) } catch (t) { } if ("get" in n || "set" in n) throw TypeError("Accessors not supported"); return "value" in n && (t[e] = n.value), t } }, function (t, e, n) { var r = n(6), o = n(8), i = n(25); t.exports = r ? function (t, e, n) { return o.f(t, e, i(1, n)) } : function (t, e, n) { return t[e] = n, t } }, function (t, e, n) { var u = n(1), a = n(9), s = n(7), f = n(55), r = n(56), o = n(20), i = o.get, l = o.enforce, p = String(String).split("String"); (t.exports = function (t, e, n, r) { var o = !!r && !!r.unsafe, i = !!r && !!r.enumerable, c = !!r && !!r.noTargetGet; "function" == typeof n && ("string" != typeof e || s(n, "name") || a(n, "name", e), l(n).source = p.join("string" == typeof e ? e : "")), t !== u ? (o ? !c && t[e] && (i = !0) : delete t[e], i ? t[e] = n : a(t, e, n)) : i ? t[e] = n : f(e, n) })(Function.prototype, "toString", function () { return "function" == typeof this && i(this).source || r(this) }) }, function (t, e, n) { var r = n(53), o = n(16); t.exports = function (t) { return r(o(t)) } }, function (t, e) { var n = {}.toString; t.exports = function (t) { return n.call(t).slice(8, -1) } }, function (t, e, n) { var r = n(41), o = Math.min; t.exports = function (t) { return 0 < t ? o(r(t), 9007199254740991) : 0 } }, function (t, e, n) { var r = n(16); t.exports = function (t) { return Object(r(t)) } }, function (t, e, n) { var r = n(6), o = n(52), i = n(25), c = n(11), u = n(26), a = n(7), s = n(77), f = Object.getOwnPropertyDescriptor; e.f = r ? f : function (t, e) { if (t = c(t), e = u(e, !0), s) try { return f(t, e) } catch (t) { } if (a(t, e)) return i(!o.f.call(t, e), t[e]) } }, function (t, e) { t.exports = function (t) { if (null == t) throw TypeError("Can't call method on " + t); return t } }, function (t, e, n) { function r(t) { return "function" == typeof t ? t : void 0 } var o = n(81), i = n(1); t.exports = function (t, e) { return arguments.length < 2 ? r(o[t]) || r(i[t]) : o[t] && o[t][e] || i[t] && i[t][e] } }, function (t, e, n) { var r = n(68), o = n(10), i = n(121); r || o(Object.prototype, "toString", i, { unsafe: !0 }) }, function (t, e, n) { "use strict"; function o(t, e) { var n = nt[t] = S(X[W]); return q(n, { type: H, tag: t, description: e }), l || (n.description = e), n } function r(e, t) { m(e); var n = x(t), r = E(n).concat(ht(n)); return z(r, function (t) { l && !pt.call(n, t) || lt(e, t, n[t]) }), e } function i(t, e) { var n = x(t), r = w(e, !0); if (n !== Y || !d(nt, r) || d(rt, r)) { var o = J(n, r); return !o || !d(nt, r) || d(n, B) && n[B][r] || (o.enumerable = !0), o } } function c(t) { var e = tt(x(t)), n = []; return z(e, function (t) { d(nt, t) || d(N, t) || n.push(t) }), n } var u = n(3), a = n(1), s = n(17), f = n(27), l = n(6), p = n(61), h = n(85), v = n(0), d = n(7), y = n(43), g = n(4), m = n(5), b = n(14), x = n(11), w = n(26), _ = n(25), S = n(29), E = n(44), O = n(28), j = n(117), P = n(60), A = n(15), k = n(8), T = n(52), I = n(9), L = n(10), R = n(57), C = n(39), N = n(40), M = n(58), D = n(2), F = n(87), U = n(88), G = n(45), $ = n(20), z = n(46).forEach, B = C("hidden"), H = "Symbol", W = "prototype", K = D("toPrimitive"), q = $.set, V = $.getterFor(H), Y = Object[W], X = a.Symbol, Q = s("JSON", "stringify"), J = A.f, Z = k.f, tt = j.f, et = T.f, nt = R("symbols"), rt = R("op-symbols"), ot = R("string-to-symbol-registry"), it = R("symbol-to-string-registry"), ct = R("wks"), ut = a.QObject, at = !ut || !ut[W] || !ut[W].findChild, st = l && v(function () { return 7 != S(Z({}, "a", { get: function () { return Z(this, "a", { value: 7 }).a } })).a }) ? function (t, e, n) { var r = J(Y, e); r && delete Y[e], Z(t, e, n), r && t !== Y && Z(Y, e, r) } : Z, ft = h ? function (t) { return "symbol" == typeof t } : function (t) { return Object(t) instanceof X }, lt = function (t, e, n) { t === Y && lt(rt, e, n), m(t); var r = w(e, !0); return m(n), d(nt, r) ? (n.enumerable ? (d(t, B) && t[B][r] && (t[B][r] = !1), n = S(n, { enumerable: _(0, !1) })) : (d(t, B) || Z(t, B, _(1, {})), t[B][r] = !0), st(t, r, n)) : Z(t, r, n) }, pt = function (t) { var e = w(t, !0), n = et.call(this, e); return !(this === Y && d(nt, e) && !d(rt, e)) && (!(n || !d(this, e) || !d(nt, e) || d(this, B) && this[B][e]) || n) }, ht = function (t) { var e = t === Y, n = tt(e ? rt : x(t)), r = []; return z(n, function (t) { !d(nt, t) || e && !d(Y, t) || r.push(nt[t]) }), r }; p || (L((X = function (t) { if (this instanceof X) throw TypeError("Symbol is not a constructor"); var e = arguments.length && void 0 !== t ? String(t) : void 0, n = M(e), r = function (t) { this === Y && r.call(rt, t), d(this, B) && d(this[B], n) && (this[B][n] = !1), st(this, n, _(1, t)) }; return l && at && st(Y, n, { configurable: !0, set: r }), o(n, e) })[W], "toString", function () { return V(this).tag }), L(X, "withoutSetter", function (t) { return o(M(t), t) }), T.f = pt, k.f = lt, A.f = i, O.f = j.f = c, P.f = ht, F.f = function (t) { return o(D(t), t) }, l && (Z(X[W], "description", { configurable: !0, get: function () { return V(this).description } }), f || L(Y, "propertyIsEnumerable", pt, { unsafe: !0 }))), u({ global: !0, wrap: !0, forced: !p, sham: !p }, { Symbol: X }), z(E(ct), function (t) { U(t) }), u({ target: H, stat: !0, forced: !p }, { for: function (t) { var e = String(t); if (d(ot, e)) return ot[e]; var n = X(e); return ot[e] = n, it[n] = e, n }, keyFor: function (t) { if (!ft(t)) throw TypeError(t + " is not a symbol"); if (d(it, t)) return it[t] }, useSetter: function () { at = !0 }, useSimple: function () { at = !1 } }), u({ target: "Object", stat: !0, forced: !p, sham: !l }, { create: function (t, e) { return void 0 === e ? S(t) : r(S(t), e) }, defineProperty: lt, defineProperties: r, getOwnPropertyDescriptor: i }), u({ target: "Object", stat: !0, forced: !p }, { getOwnPropertyNames: c, getOwnPropertySymbols: ht }), u({ target: "Object", stat: !0, forced: v(function () { P.f(1) }) }, { getOwnPropertySymbols: function (t) { return P.f(b(t)) } }), Q && u({ target: "JSON", stat: !0, forced: !p || v(function () { var t = X(); return "[null]" != Q([t]) || "{}" != Q({ a: t }) || "{}" != Q(Object(t)) }) }, { stringify: function (t, e, n) { for (var r, o = [t], i = 1; i < arguments.length;)o.push(arguments[i++]); if ((g(r = e) || void 0 !== t) && !ft(t)) return y(e) || (e = function (t, e) { if ("function" == typeof r && (e = r.call(this, t, e)), !ft(e)) return e }), o[1] = e, Q.apply(null, o) } }), X[W][K] || I(X[W], K, X[W].valueOf), G(X, H), N[B] = !0 }, function (t, e, n) { var r, o, i, c, u, a, s, f, l = n(115), p = n(1), h = n(4), v = n(9), d = n(7), y = n(39), g = n(40), m = p.WeakMap; s = l ? (r = new m, o = r.get, i = r.has, c = r.set, u = function (t, e) { return c.call(r, t, e), e }, a = function (t) { return o.call(r, t) || {} }, function (t) { return i.call(r, t) }) : (g[f = y("state")] = !0, u = function (t, e) { return v(t, f, e), e }, a = function (t) { return d(t, f) ? t[f] : {} }, function (t) { return d(t, f) }), t.exports = { set: u, get: a, has: s, enforce: function (t) { return s(t) ? a(t) : u(t, {}) }, getterFor: function (n) { return function (t) { var e; if (!h(t) || (e = a(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required"); return e } } } }, function (t, e) { t.exports = function (t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t } }, function (t, e, n) { "use strict"; var r = n(11), o = n(91), i = n(34), c = n(20), u = n(94), a = "Array Iterator", s = c.set, f = c.getterFor(a); t.exports = u(Array, "Array", function (t, e) { s(this, { type: a, target: r(t), index: 0, kind: e }) }, function () { var t = f(this), e = t.target, n = t.kind, r = t.index++; return !e || r >= e.length ? { value: t.target = void 0, done: !0 } : "keys" == n ? { value: r, done: !1 } : "values" == n ? { value: e[r], done: !1 } : { value: [r, e[r]], done: !1 } }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries") }, function (t, e, n) { "use strict"; var o = n(107).charAt, r = n(20), i = n(94), c = "String Iterator", u = r.set, a = r.getterFor(c); i(String, "String", function (t) { u(this, { type: c, string: String(t), index: 0 }) }, function () { var t, e = a(this), n = e.string, r = e.index; return r >= n.length ? { value: void 0, done: !0 } : (t = o(n, r), e.index += t.length, { value: t, done: !1 }) }) }, function (t, e, n) { "use strict"; var r = n(10), o = n(5), i = n(0), c = n(70), u = "toString", a = RegExp.prototype, s = a[u], f = i(function () { return "/a/b" != s.call({ source: "a", flags: "b" }) }), l = s.name != u; (f || l) && r(RegExp.prototype, u, function () { var t = o(this), e = String(t.source), n = t.flags; return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in a) ? c.call(t) : n) }, { unsafe: !0 }) }, function (t, e) { t.exports = function (t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function (t, e, n) { var o = n(4); t.exports = function (t, e) { if (!o(t)) return t; var n, r; if (e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r; if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t))) return r; if (!e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r; throw TypeError("Can't convert object to primitive value") } }, function (t, e) { t.exports = !1 }, function (t, e, n) { var r = n(82), o = n(59).concat("length", "prototype"); e.f = Object.getOwnPropertyNames || function (t) { return r(t, o) } }, function (t, e, n) { function r() { } function o(t) { return "<script>" + t + "</" + v + ">" } var i, c = n(5), u = n(116), a = n(59), s = n(40), f = n(86), l = n(54), p = n(39), h = "prototype", v = "script", d = p("IE_PROTO"), y = function () { try { i = document.domain && new ActiveXObject("htmlfile") } catch (t) { } var t, e; y = i ? function (t) { t.write(o("")), t.close(); var e = t.parentWindow.Object; return t = null, e }(i) : ((e = l("iframe")).style.display = "none", f.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(o("document.F=Object")), t.close(), t.F); for (var n = a.length; n--;)delete y[h][a[n]]; return y() }; s[d] = !0, t.exports = Object.create || function (t, e) { var n; return null !== t ? (r[h] = c(t), n = new r, r[h] = null, n[d] = t) : n = y(), void 0 === e ? n : u(n, e) } }, function (t, e, n) { "use strict"; var r, o, i, c, u, a, s = n(3), f = n(6), l = n(1), p = n(7), h = n(4), v = n(8).f, d = n(79), y = l.Symbol; !f || "function" != typeof y || "description" in y.prototype && void 0 === y().description || (r = {}, d(o = function (t) { var e = arguments.length < 1 || void 0 === t ? void 0 : String(t), n = this instanceof o ? new y(e) : void 0 === e ? y() : y(e); return "" === e && (r[n] = !0), n }, y), (i = o.prototype = y.prototype).constructor = o, c = i.toString, u = "Symbol(test)" == String(y("test")), a = /^Symbol\((.*)\)[^)]+$/, v(i, "description", { configurable: !0, get: function () { var t = h(this) ? this.valueOf() : this, e = c.call(t); if (p(r, t)) return ""; var n = u ? e.slice(7, -1) : e.replace(a, "$1"); return "" === n ? void 0 : n } }), s({ global: !0, forced: !0 }, { Symbol: o })) }, function (t, e, n) { n(88)("iterator") }, function (t, e, n) { function c(t) { throw t } var u = n(6), a = n(0), s = n(7), f = Object.defineProperty, l = {}; t.exports = function (t, e) { if (s(l, t)) return l[t]; var n = [][t], r = !!s(e = e || {}, "ACCESSORS") && e.ACCESSORS, o = s(e, 0) ? e[0] : c, i = s(e, 1) ? e[1] : void 0; return l[t] = !!n && !a(function () { if (r && !u) return !0; var t = { length: -1 }; r ? f(t, 1, { enumerable: !0, get: c }) : t[1] = 1, n.call(t, o, i) }) } }, function (t, e, n) { "use strict"; var r = n(3), o = n(92); r({ target: "Array", proto: !0, forced: [].forEach != o }, { forEach: o }) }, function (t, e) { t.exports = {} }, function (t, e, n) { var r = n(3), o = n(14), i = n(44); r({ target: "Object", stat: !0, forced: n(0)(function () { i(1) }) }, { keys: function (t) { return i(o(t)) } }) }, function (t, e, n) { var r = n(1), o = n(108), i = n(92), c = n(9); for (var u in o) { var a = r[u], s = a && a.prototype; if (s && s.forEach !== i) try { c(s, "forEach", i) } catch (t) { s.forEach = i } } }, function (t, e, n) { var r = n(1), o = n(108), i = n(22), c = n(9), u = n(2), a = u("iterator"), s = u("toStringTag"), f = i.values; for (var l in o) { var p = r[l], h = p && p.prototype; if (h) { if (h[a] !== f) try { c(h, a, f) } catch (t) { h[a] = f } if (h[s] || c(h, s, l), o[l]) for (var v in i) if (h[v] !== i[v]) try { c(h, v, i[v]) } catch (t) { h[v] = i[v] } } } }, function (t, e, n) { "use strict"; var r = n(3), o = n(51); r({ target: "RegExp", proto: !0, forced: /./.exec !== o }, { exec: o }) }, function (t, e, n) { var r = n(57), o = n(58), i = r("keys"); t.exports = function (t) { return i[t] || (i[t] = o(t)) } }, function (t, e) { t.exports = {} }, function (t, e) { var n = Math.ceil, r = Math.floor; t.exports = function (t) { return isNaN(t = +t) ? 0 : (0 < t ? r : n)(t) } }, function (t, e, n) { function r(t, e) { var n = u[c(t)]; return n == s || n != a && ("function" == typeof e ? o(e) : !!e) } var o = n(0), i = /#|\.prototype\./, c = r.normalize = function (t) { return String(t).replace(i, ".").toLowerCase() }, u = r.data = {}, a = r.NATIVE = "N", s = r.POLYFILL = "P"; t.exports = r }, function (t, e, n) { var r = n(12); t.exports = Array.isArray || function (t) { return "Array" == r(t) } }, function (t, e, n) { var r = n(82), o = n(59); t.exports = Object.keys || function (t) { return r(t, o) } }, function (t, e, n) { var r = n(8).f, o = n(7), i = n(2)("toStringTag"); t.exports = function (t, e, n) { t && !o(t = n ? t : t.prototype, i) && r(t, i, { configurable: !0, value: e }) } }, function (t, e, n) { function r(h) { var v = 1 == h, d = 2 == h, y = 3 == h, g = 4 == h, m = 6 == h, b = 5 == h || m; return function (t, e, n, r) { for (var o, i, c = _(t), u = w(c), a = x(e, n, 3), s = S(u.length), f = 0, l = r || E, p = v ? l(t, s) : d ? l(t, 0) : void 0; f < s; f++)if ((b || f in u) && (i = a(o = u[f], f, c), h)) if (v) p[f] = i; else if (i) switch (h) { case 3: return !0; case 5: return o; case 6: return f; case 2: O.call(p, o) } else if (g) return !1; return m ? -1 : y || g ? g : p } } var x = n(47), w = n(53), _ = n(14), S = n(13), E = n(89), O = [].push; t.exports = { forEach: r(0), map: r(1), filter: r(2), some: r(3), every: r(4), find: r(5), findIndex: r(6) } }, function (t, e, n) { var i = n(21); t.exports = function (r, o, t) { if (i(r), void 0 === o) return r; switch (t) { case 0: return function () { return r.call(o) }; case 1: return function (t) { return r.call(o, t) }; case 2: return function (t, e) { return r.call(o, t, e) }; case 3: return function (t, e, n) { return r.call(o, t, e, n) } }return function () { return r.apply(o, arguments) } } }, function (t, e, n) { "use strict"; var r = n(3), o = n(46).filter, i = n(62), c = n(32), u = i("filter"), a = c("filter"); r({ target: "Array", proto: !0, forced: !u || !a }, { filter: function (t, e) { return o(this, t, 1 < arguments.length ? e : void 0) } }) }, function (t, e, n) { "use strict"; var o = n(26), i = n(8), c = n(25); t.exports = function (t, e, n) { var r = o(e); r in t ? i.f(t, r, c(0, n)) : t[r] = n } }, function (t, e, n) { var r = n(3), o = n(132); r({ target: "Array", stat: !0, forced: !n(102)(function (t) { Array.from(t) }) }, { from: o }) }, function (t, e, n) { "use strict"; var r, o, l = n(70), i = n(111), p = RegExp.prototype.exec, h = String.prototype.replace, c = p, v = (r = /a/, o = /b*/g, p.call(r, "a"), p.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex), d = i.UNSUPPORTED_Y || i.BROKEN_CARET, y = void 0 !== /()??/.exec("")[1]; (v || y || d) && (c = function (t) { var e, n, r, o, i = this, c = d && i.sticky, u = l.call(i), a = i.source, s = 0, f = t; return c && (-1 === (u = u.replace("y", "")).indexOf("g") && (u += "g"), f = String(t).slice(i.lastIndex), 0 < i.lastIndex && (!i.multiline || i.multiline && "\n" !== t[i.lastIndex - 1]) && (a = "(?: " + a + ")", f = " " + f, s++), n = new RegExp("^(?:" + a + ")", u)), y && (n = new RegExp("^" + a + "$(?!\\s)", u)), v && (e = i.lastIndex), r = p.call(c ? n : i, f), c ? r ? (r.input = r.input.slice(s), r[0] = r[0].slice(s), r.index = i.lastIndex, i.lastIndex += r[0].length) : i.lastIndex = 0 : v && r && (i.lastIndex = i.global ? r.index + r[0].length : e), y && r && 1 < r.length && h.call(r[0], n, function () { for (o = 1; o < arguments.length - 2; o++)void 0 === arguments[o] && (r[o] = void 0) }), r }), t.exports = c }, function (t, e, n) { "use strict"; var r = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !r.call({ 1: 2 }, 1); e.f = i ? function (t) { var e = o(this, t); return !!e && e.enumerable } : r }, function (t, e, n) { var r = n(0), o = n(12), i = "".split; t.exports = r(function () { return !Object("z").propertyIsEnumerable(0) }) ? function (t) { return "String" == o(t) ? i.call(t, "") : Object(t) } : Object }, function (t, e, n) { var r = n(1), o = n(4), i = r.document, c = o(i) && o(i.createElement); t.exports = function (t) { return c ? i.createElement(t) : {} } }, function (t, e, n) { var r = n(1), o = n(9); t.exports = function (e, n) { try { o(r, e, n) } catch (t) { r[e] = n } return n } }, function (t, e, n) { var r = n(78), o = Function.toString; "function" != typeof r.inspectSource && (r.inspectSource = function (t) { return o.call(t) }), t.exports = r.inspectSource }, function (t, e, n) { var r = n(27), o = n(78); (t.exports = function (t, e) { return o[t] || (o[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: "3.6.5", mode: r ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" }) }, function (t, e) { var n = 0, r = Math.random(); t.exports = function (t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36) } }, function (t, e) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function (t, e) { e.f = Object.getOwnPropertySymbols }, function (t, e, n) { var r = n(0); t.exports = !!Object.getOwnPropertySymbols && !r(function () { return !String(Symbol()) }) }, function (t, e, n) { var r = n(0), o = n(2), i = n(63), c = o("species"); t.exports = function (e) { return 51 <= i || !r(function () { var t = []; return (t.constructor = {})[c] = function () { return { foo: 1 } }, 1 !== t[e](Boolean).foo }) } }, function (t, e, n) { var r, o, i = n(1), c = n(90), u = i.process, a = u && u.versions, s = a && a.v8; s ? o = (r = s.split("."))[0] + r[1] : c && (!(r = c.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = c.match(/Chrome\/(\d+)/)) && (o = r[1]), t.exports = o && +o }, function (t, e, n) { var r = n(7), o = n(14), i = n(39), c = n(96), u = i("IE_PROTO"), a = Object.prototype; t.exports = c ? Object.getPrototypeOf : function (t) { return t = o(t), r(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null } }, function (t, e, n) { var o = n(5), i = n(120); t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () { var n, r = !1, t = {}; try { (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), r = t instanceof Array } catch (t) { } return function (t, e) { return o(t), i(e), r ? n.call(t, e) : t.__proto__ = e, t } }() : void 0) }, function (t, e, n) { var r = n(3), o = n(0), i = n(11), c = n(15).f, u = n(6), a = o(function () { c(1) }); r({ target: "Object", stat: !0, forced: !u || a, sham: !u }, { getOwnPropertyDescriptor: function (t, e) { return c(i(t), e) } }) }, function (t, e, n) { var r = n(3), o = n(6), a = n(80), s = n(11), f = n(15), l = n(49); r({ target: "Object", stat: !0, sham: !o }, { getOwnPropertyDescriptors: function (t) { for (var e, n, r = s(t), o = f.f, i = a(r), c = {}, u = 0; i.length > u;)void 0 !== (n = o(r, e = i[u++])) && l(c, e, n); return c } }) }, function (t, e, n) { var r = {}; r[n(2)("toStringTag")] = "z", t.exports = "[object z]" === String(r) }, function (t, e, n) { "use strict"; var r = n(3), o = n(0), s = n(43), f = n(4), l = n(14), p = n(13), h = n(49), v = n(89), i = n(62), c = n(2), u = n(63), d = c("isConcatSpreadable"), y = 9007199254740991, g = "Maximum allowed index exceeded", a = 51 <= u || !o(function () { var t = []; return t[d] = !1, t.concat()[0] !== t }), m = i("concat"); r({ target: "Array", proto: !0, forced: !a || !m }, { concat: function (t) { for (var e, n, r, o = l(this), i = v(o, 0), c = 0, u = -1, a = arguments.length; u < a; u++)if (function (t) { if (!f(t)) return !1; var e = t[d]; return void 0 !== e ? !!e : s(t) }(r = -1 === u ? o : arguments[u])) { if (n = p(r.length), y < c + n) throw TypeError(g); for (e = 0; e < n; e++, c++)e in r && h(i, c, r[e]) } else { if (y <= c) throw TypeError(g); h(i, c++, r) } return i.length = c, i } }) }, function (t, e, n) { "use strict"; var r = n(5); t.exports = function () { var t = r(this), e = ""; return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e } }, function (t, e, n) { "use strict"; n(38); var l = n(10), p = n(0), h = n(2), v = n(51), d = n(9), y = h("species"), g = !p(function () { var t = /./; return t.exec = function () { var t = []; return t.groups = { a: "7" }, t }, "7" !== "".replace(t, "$<a>") }), m = "$0" === "a".replace(/./, "$0"), r = h("replace"), b = !!/./[r] && "" === /./[r]("a", "$0"), x = !p(function () { var t = /(?:)/, e = t.exec; t.exec = function () { return e.apply(this, arguments) }; var n = "ab".split(t); return 2 !== n.length || "a" !== n[0] || "b" !== n[1] }); t.exports = function (n, t, e, r) { var i, o, c, u, a = h(n), s = !p(function () { var t = {}; return t[a] = function () { return 7 }, 7 != ""[n](t) }), f = s && !p(function () { var t = !1, e = /a/; return "split" === n && ((e = { constructor: {} }).constructor[y] = function () { return e }, e.flags = "", e[a] = /./[a]), e.exec = function () { return t = !0, null }, e[a](""), !t }); s && f && ("replace" !== n || g && m && !b) && ("split" !== n || x) || (i = /./[a], c = (o = e(a, ""[n], function (t, e, n, r, o) { return e.exec === v ? s && !o ? { done: !0, value: i.call(e, n, r) } : { done: !0, value: t.call(n, e, r) } : { done: !1 } }, { REPLACE_KEEPS_$0: m, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: b }))[0], u = o[1], l(String.prototype, n, c), l(RegExp.prototype, a, 2 == t ? function (t, e) { return u.call(t, this, e) } : function (t) { return u.call(t, this) })), r && d(RegExp.prototype[a], "sham", !0) } }, function (t, e, n) { "use strict"; var r = n(107).charAt; t.exports = function (t, e, n) { return e + (n ? r(t, e).length : 1) } }, function (t, e, n) { var o = n(12), i = n(51); t.exports = function (t, e) { var n = t.exec; if ("function" == typeof n) { var r = n.call(t, e); if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null"); return r } if ("RegExp" !== o(t)) throw TypeError("RegExp#exec called on incompatible receiver"); return i.call(t, e) } }, function (t, e, n) { "use strict"; var r = n(3), s = n(4), f = n(43), l = n(84), p = n(13), h = n(11), v = n(49), o = n(2), i = n(62), c = n(32), u = i("slice"), a = c("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), d = o("species"), y = [].slice, g = Math.max; r({ target: "Array", proto: !0, forced: !u || !a }, { slice: function (t, e) { var n, r, o, i = h(this), c = p(i.length), u = l(t, c), a = l(void 0 === e ? c : e, c); if (f(i) && (("function" == typeof (n = i.constructor) && (n === Array || f(n.prototype)) || s(n) && null === (n = n[d])) && (n = void 0), n === Array || void 0 === n)) return y.call(i, u, a); for (r = new (void 0 === n ? Array : n)(g(a - u, 0)), o = 0; u < a; u++, o++)u in i && v(r, o, i[u]); return r.length = o, r } }) }, function (t, e, n) { var r = n(6), o = n(8).f, i = Function.prototype, c = i.toString, u = /^\s*function ([^ (]*)/; !r || "name" in i || o(i, "name", { configurable: !0, get: function () { try { return c.call(this).match(u)[1] } catch (t) { return "" } } }) }, function (t, e, n) { "use strict"; var r = n(71), j = n(5), P = n(14), A = n(13), k = n(41), i = n(16), T = n(72), I = n(73), L = Math.max, R = Math.min, C = Math.floor, N = /\$([$&'`]|\d\d?|<[^>]*>)/g, M = /\$([$&'`]|\d\d?)/g; r("replace", 2, function (o, w, _, t) { var S = t.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, E = t.REPLACE_KEEPS_$0, O = S ? "$" : "$0"; return [function (t, e) { var n = i(this), r = null == t ? void 0 : t[o]; return void 0 !== r ? r.call(t, n, e) : w.call(String(n), t, e) }, function (t, e) { if (!S && E || "string" == typeof e && -1 === e.indexOf(O)) { var n = _(w, t, this, e); if (n.done) return n.value } var r = j(t), o = String(this), i = "function" == typeof e; i || (e = String(e)); var c, u = r.global; u && (c = r.unicode, r.lastIndex = 0); for (var a = []; ;) { var s = I(r, o); if (null === s) break; if (a.push(s), !u) break; "" === String(s[0]) && (r.lastIndex = T(o, A(r.lastIndex), c)) } for (var f, l = "", p = 0, h = 0; h < a.length; h++) { s = a[h]; for (var v = String(s[0]), d = L(R(k(s.index), o.length), 0), y = [], g = 1; g < s.length; g++)y.push(void 0 === (f = s[g]) ? f : String(f)); var m, b = s.groups, x = i ? (m = [v].concat(y, d, o), void 0 !== b && m.push(b), String(e.apply(void 0, m))) : function (i, c, u, a, s, t) { var f = u + i.length, l = a.length, e = M; void 0 !== s && (s = P(s), e = N); return w.call(t, e, function (t, e) { var n; switch (e.charAt(0)) { case "$": return "$"; case "&": return i; case "`": return c.slice(0, u); case "'": return c.slice(f); case "<": n = s[e.slice(1, -1)]; break; default: var r = +e; if (0 == r) return t; if (l < r) { var o = C(r / 10); return 0 === o ? t : o <= l ? void 0 === a[o - 1] ? e.charAt(1) : a[o - 1] + e.charAt(1) : t } n = a[r - 1] }return void 0 === n ? "" : n }) }(v, o, d, y, b, e); p <= d && (l += o.slice(p, d) + x, p = d + v.length) } return l + o.slice(p) }] }) }, function (t, e, n) { var r = n(6), o = n(0), i = n(54); t.exports = !r && !o(function () { return 7 != Object.defineProperty(i("div"), "a", { get: function () { return 7 } }).a }) }, function (t, e, n) { var r = n(1), o = n(55), i = "__core-js_shared__", c = r[i] || o(i, {}); t.exports = c }, function (t, e, n) { var u = n(7), a = n(80), s = n(15), f = n(8); t.exports = function (t, e) { for (var n = a(e), r = f.f, o = s.f, i = 0; i < n.length; i++) { var c = n[i]; u(t, c) || r(t, c, o(e, c)) } } }, function (t, e, n) { var r = n(17), o = n(28), i = n(60), c = n(5); t.exports = r("Reflect", "ownKeys") || function (t) { var e = o.f(c(t)), n = i.f; return n ? e.concat(n(t)) : e } }, function (t, e, n) { var r = n(1); t.exports = r }, function (t, e, n) { var c = n(7), u = n(11), a = n(83).indexOf, s = n(40); t.exports = function (t, e) { var n, r = u(t), o = 0, i = []; for (n in r) !c(s, n) && c(r, n) && i.push(n); for (; e.length > o;)c(r, n = e[o++]) && (~a(i, n) || i.push(n)); return i } }, function (t, e, n) { function r(u) { return function (t, e, n) { var r, o = a(t), i = s(o.length), c = f(n, i); if (u && e != e) { for (; c < i;)if ((r = o[c++]) != r) return !0 } else for (; c < i; c++)if ((u || c in o) && o[c] === e) return u || c || 0; return !u && -1 } } var a = n(11), s = n(13), f = n(84); t.exports = { includes: r(!0), indexOf: r(!1) } }, function (t, e, n) { var r = n(41), o = Math.max, i = Math.min; t.exports = function (t, e) { var n = r(t); return n < 0 ? o(n + e, 0) : i(n, e) } }, function (t, e, n) { var r = n(61); t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator }, function (t, e, n) { var r = n(17); t.exports = r("document", "documentElement") }, function (t, e, n) { var r = n(2); e.f = r }, function (t, e, n) { var r = n(81), o = n(7), i = n(87), c = n(8).f; t.exports = function (t) { var e = r.Symbol || (r.Symbol = {}); o(e, t) || c(e, t, { value: i.f(t) }) } }, function (t, e, n) { var r = n(4), o = n(43), i = n(2)("species"); t.exports = function (t, e) { var n; return o(t) && ("function" == typeof (n = t.constructor) && (n === Array || o(n.prototype)) || r(n) && null === (n = n[i])) && (n = void 0), new (void 0 === n ? Array : n)(0 === e ? 0 : e) } }, function (t, e, n) { var r = n(17); t.exports = r("navigator", "userAgent") || "" }, function (t, e, n) { var r = n(2), o = n(29), i = n(8), c = r("unscopables"), u = Array.prototype; null == u[c] && i.f(u, c, { configurable: !0, value: o(null) }), t.exports = function (t) { u[c][t] = !0 } }, function (t, e, n) { "use strict"; var r = n(46).forEach, o = n(93), i = n(32), c = o("forEach"), u = i("forEach"); t.exports = c && u ? [].forEach : function (t, e) { return r(this, t, 1 < arguments.length ? e : void 0) } }, function (t, e, n) { "use strict"; var r = n(0); t.exports = function (t, e) { var n = [][t]; return !!n && r(function () { n.call(null, e || function () { throw 1 }, 1) }) } }, function (t, e, n) { "use strict"; function g() { return this } var m = n(3), b = n(119), x = n(64), w = n(65), _ = n(45), S = n(9), E = n(10), r = n(2), O = n(27), j = n(34), o = n(95), P = o.IteratorPrototype, A = o.BUGGY_SAFARI_ITERATORS, k = r("iterator"), T = "values", I = "entries"; t.exports = function (t, e, n, r, o, i, c) { b(n, e, r); function u(t) { if (t === o && d) return d; if (!A && t in h) return h[t]; switch (t) { case "keys": case T: case I: return function () { return new n(this, t) } }return function () { return new n(this) } } var a, s, f, l = e + " Iterator", p = !1, h = t.prototype, v = h[k] || h["@@iterator"] || o && h[o], d = !A && v || u(o), y = "Array" == e && h.entries || v; if (y && (a = x(y.call(new t)), P !== Object.prototype && a.next && (O || x(a) === P || (w ? w(a, P) : "function" != typeof a[k] && S(a, k, g)), _(a, l, !0, !0), O && (j[l] = g))), o == T && v && v.name !== T && (p = !0, d = function () { return v.call(this) }), O && !c || h[k] === d || S(h, k, d), j[e] = d, o) if (s = { values: u(T), keys: i ? d : u("keys"), entries: u(I) }, c) for (f in s) !A && !p && f in h || E(h, f, s[f]); else m({ target: e, proto: !0, forced: A || p }, s); return s } }, function (t, e, n) { "use strict"; var r, o, i, c = n(64), u = n(9), a = n(7), s = n(2), f = n(27), l = s("iterator"), p = !1;[].keys && ("next" in (i = [].keys()) ? (o = c(c(i))) !== Object.prototype && (r = o) : p = !0), null == r && (r = {}), f || a(r, l) || u(r, l, function () { return this }), t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p } }, function (t, e, n) { var r = n(0); t.exports = !r(function () { function t() { } return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype }) }, function (t, e, n) { var r = n(68), o = n(12), i = n(2)("toStringTag"), c = "Arguments" == o(function () { return arguments }()); t.exports = r ? o : function (t) { var e, n, r; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) { try { return t[e] } catch (t) { } }(e = Object(t), i)) ? n : c ? o(e) : "Object" == (r = o(e)) && "function" == typeof e.callee ? "Arguments" : r } }, function (t, e, n) { "use strict"; var r = n(17), o = n(8), i = n(2), c = n(6), u = i("species"); t.exports = function (t) { var e = r(t), n = o.f; c && e && !e[u] && n(e, u, { configurable: !0, get: function () { return this } }) } }, function (t, e, n) { var r = n(2), o = n(34), i = r("iterator"), c = Array.prototype; t.exports = function (t) { return void 0 !== t && (o.Array === t || c[i] === t) } }, function (t, e, n) { var r = n(97), o = n(34), i = n(2)("iterator"); t.exports = function (t) { if (null != t) return t[i] || t["@@iterator"] || o[r(t)] } }, function (t, e, n) { var i = n(5); t.exports = function (e, t, n, r) { try { return r ? t(i(n)[0], n[1]) : t(n) } catch (t) { var o = e.return; throw void 0 !== o && i(o.call(e)), t } } }, function (t, e, n) { var o = n(2)("iterator"), i = !1; try { var r = 0, c = { next: function () { return { done: !!r++ } }, return: function () { i = !0 } }; c[o] = function () { return this }, Array.from(c, function () { throw 2 }) } catch (t) { } t.exports = function (t, e) { if (!e && !i) return !1; var n = !1; try { var r = {}; r[o] = function () { return { next: function () { return { done: n = !0 } } } }, t(r) } catch (t) { } return n } }, function (t, e, n) { var o = n(5), i = n(21), c = n(2)("species"); t.exports = function (t, e) { var n, r = o(t).constructor; return void 0 === r || null == (n = o(r)[c]) ? e : i(n) } }, function (t, e, n) { function r(t) { var e; E.hasOwnProperty(t) && (e = E[t], delete E[t], e()) } function o(t) { return function () { r(t) } } function i(t) { r(t.data) } function c(t) { f.postMessage(t + "", g.protocol + "//" + g.host) } var u, a, s, f = n(1), l = n(0), p = n(12), h = n(47), v = n(86), d = n(54), y = n(105), g = f.location, m = f.setImmediate, b = f.clearImmediate, x = f.process, w = f.MessageChannel, _ = f.Dispatch, S = 0, E = {}, O = "onreadystatechange"; m && b || (m = function (t) { for (var e = [], n = 1; n < arguments.length;)e.push(arguments[n++]); return E[++S] = function () { ("function" == typeof t ? t : Function(t)).apply(void 0, e) }, u(S), S }, b = function (t) { delete E[t] }, "process" == p(x) ? u = function (t) { x.nextTick(o(t)) } : _ && _.now ? u = function (t) { _.now(o(t)) } : w && !y ? (s = (a = new w).port2, a.port1.onmessage = i, u = h(s.postMessage, s, 1)) : !f.addEventListener || "function" != typeof postMessage || f.importScripts || l(c) || "file:" === g.protocol ? u = O in d("script") ? function (t) { v.appendChild(d("script"))[O] = function () { v.removeChild(this), r(t) } } : function (t) { setTimeout(o(t), 0) } : (u = c, f.addEventListener("message", i, !1))), t.exports = { set: m, clear: b } }, function (t, e, n) { var r = n(90); t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r) }, function (t, e, n) { "use strict"; function r(t) { var n, r; this.promise = new t(function (t, e) { if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor"); n = t, r = e }), this.resolve = o(n), this.reject = o(r) } var o = n(21); t.exports.f = function (t) { return new r(t) } }, function (t, e, n) { function r(u) { return function (t, e) { var n, r, o = String(s(t)), i = a(e), c = o.length; return i < 0 || c <= i ? u ? "" : void 0 : (n = o.charCodeAt(i)) < 55296 || 56319 < n || i + 1 === c || (r = o.charCodeAt(i + 1)) < 56320 || 57343 < r ? u ? o.charAt(i) : n : u ? o.slice(i, i + 2) : r - 56320 + (n - 55296 << 10) + 65536 } } var a = n(41), s = n(16); t.exports = { codeAt: r(!1), charAt: r(!0) } }, function (t, e) { t.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 } }, function (t, e, n) { var i = n(4), c = n(65); t.exports = function (t, e, n) { var r, o; return c && "function" == typeof (r = e.constructor) && r !== n && i(o = r.prototype) && o !== n.prototype && c(t, o), t } }, function (t, e, n) { var r = n(4), o = n(12), i = n(2)("match"); t.exports = function (t) { var e; return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t)) } }, function (t, e, n) { "use strict"; var r = n(0); function o(t, e) { return RegExp(t, e) } e.UNSUPPORTED_Y = r(function () { var t = o("a", "y"); return t.lastIndex = 2, null != t.exec("abcd") }), e.BROKEN_CARET = r(function () { var t = o("^r", "gy"); return t.lastIndex = 2, null != t.exec("str") }) }, function (t, e, n) { function r(n) { return function (t) { var e = String(o(t)); return 1 & n && (e = e.replace(c, "")), 2 & n && (e = e.replace(u, "")), e } } var o = n(16), i = "[" + n(113) + "]", c = RegExp("^" + i + i + "*"), u = RegExp(i + i + "*$"); t.exports = { start: r(1), end: r(2), trim: r(3) } }, function (t, e) { t.exports = "\t\n\v\f\r ?               　\u2028\u2029\ufeff" }, function (t, e) { var n = function () { return this }(); try { n = n || new Function("return this")() } catch (t) { "object" == typeof window && (n = window) } t.exports = n }, function (t, e, n) { var r = n(1), o = n(56), i = r.WeakMap; t.exports = "function" == typeof i && /native code/.test(o(i)) }, function (t, e, n) { var r = n(6), c = n(8), u = n(5), a = n(44); t.exports = r ? Object.defineProperties : function (t, e) { u(t); for (var n, r = a(e), o = r.length, i = 0; i < o;)c.f(t, n = r[i++], e[n]); return t } }, function (t, e, n) { var r = n(11), o = n(28).f, i = {}.toString, c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []; t.exports.f = function (t) { return c && "[object Window]" == i.call(t) ? function (t) { try { return o(t) } catch (t) { return c.slice() } }(t) : o(r(t)) } }, function (t, e, n) { "use strict"; var r = n(3), o = n(46).find, i = n(91), c = n(32), u = "find", a = !0, s = c(u); u in [] && Array(1)[u](function () { a = !1 }), r({ target: "Array", proto: !0, forced: a || !s }, { find: function (t, e) { return o(this, t, 1 < arguments.length ? e : void 0) } }), i(u) }, function (t, e, n) { "use strict"; function o() { return this } var i = n(95).IteratorPrototype, c = n(29), u = n(25), a = n(45), s = n(34); t.exports = function (t, e, n) { var r = e + " Iterator"; return t.prototype = c(i, { next: u(1, n) }), a(t, r, !1, !0), s[r] = o, t } }, function (t, e, n) { var r = n(4); t.exports = function (t) { if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype"); return t } }, function (t, e, n) { "use strict"; var r = n(68), o = n(97); t.exports = r ? {}.toString : function () { return "[object " + o(this) + "]" } }, function (t, e, n) { "use strict"; function d(t) { var e; return !(!w(t) || "function" != typeof (e = t.then)) && e } function i(l, p, h) { var v; p.notified || (p.notified = !0, v = p.reactions, T(function () { for (var t = p.value, e = 1 == p.state, n = 0; v.length > n;) { var r, o, i, c = v[n++], u = e ? c.ok : c.fail, a = c.resolve, s = c.reject, f = c.domain; try { u ? (e || (2 === p.rejection && ot(l, p), p.rejection = 1), !0 === u ? r = t : (f && f.enter(), r = u(t), f && (f.exit(), i = !0)), r === c.promise ? s(W("Promise-chain cycle")) : (o = d(r)) ? o.call(r, a, s) : a(r)) : s(t) } catch (t) { f && !i && f.exit(), s(t) } } p.reactions = [], p.notified = !1, h && !p.rejection && nt(l, p) })) } function o(t, e, n) { var r, o; J ? ((r = K.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), h.dispatchEvent(r)) : r = { promise: e, reason: n }, (o = h["on" + t]) ? o(r) : t === Z && L("Unhandled promise rejection", n) } function c(e, n, r, o) { return function (t) { e(n, r, t, o) } } function u(t, e, n, r) { e.done || (e.done = !0, r && (e = r), e.value = n, e.state = 2, i(t, e, !0)) } var r, a, s, f, l = n(3), p = n(27), h = n(1), v = n(17), y = n(123), g = n(10), m = n(124), b = n(45), x = n(98), w = n(4), _ = n(21), S = n(125), E = n(12), O = n(56), j = n(126), P = n(102), A = n(103), k = n(104).set, T = n(127), I = n(128), L = n(129), R = n(106), C = n(130), N = n(20), M = n(42), D = n(2), F = n(63), U = D("species"), G = "Promise", $ = N.get, z = N.set, B = N.getterFor(G), H = y, W = h.TypeError, K = h.document, q = h.process, V = v("fetch"), Y = R.f, X = Y, Q = "process" == E(q), J = !!(K && K.createEvent && h.dispatchEvent), Z = "unhandledrejection", tt = M(G, function () { if (!(O(H) !== String(H))) { if (66 === F) return !0; if (!Q && "function" != typeof PromiseRejectionEvent) return !0 } if (p && !H.prototype.finally) return !0; if (51 <= F && /native code/.test(H)) return !1; function t(t) { t(function () { }, function () { }) } var e = H.resolve(1); return (e.constructor = {})[U] = t, !(e.then(function () { }) instanceof t) }), et = tt || !P(function (t) { H.all(t).catch(function () { }) }), nt = function (n, r) { k.call(h, function () { var t, e = r.value; if (rt(r) && (t = C(function () { Q ? q.emit("unhandledRejection", e, n) : o(Z, n, e) }), r.rejection = Q || rt(r) ? 2 : 1, t.error)) throw t.value }) }, rt = function (t) { return 1 !== t.rejection && !t.parent }, ot = function (t, e) { k.call(h, function () { Q ? q.emit("rejectionHandled", t) : o("rejectionhandled", t, e.value) }) }, it = function (n, r, t, e) { if (!r.done) { r.done = !0, e && (r = e); try { if (n === t) throw W("Promise can't be resolved itself"); var o = d(t); o ? T(function () { var e = { done: !1 }; try { o.call(t, c(it, n, e, r), c(u, n, e, r)) } catch (t) { u(n, e, t, r) } }) : (r.value = t, r.state = 1, i(n, r, !1)) } catch (t) { u(n, { done: !1 }, t, r) } } }; tt && (H = function (t) { S(this, H, G), _(t), r.call(this); var e = $(this); try { t(c(it, this, e), c(u, this, e)) } catch (t) { u(this, e, t) } }, (r = function () { z(this, { type: G, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }) }).prototype = m(H.prototype, { then: function (t, e) { var n = B(this), r = Y(A(this, H)); return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = Q ? q.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && i(this, n, !1), r.promise }, catch: function (t) { return this.then(void 0, t) } }), a = function () { var t = new r, e = $(t); this.promise = t, this.resolve = c(it, t, e), this.reject = c(u, t, e) }, R.f = Y = function (t) { return t === H || t === s ? new a : X(t) }, p || "function" != typeof y || (f = y.prototype.then, g(y.prototype, "then", function (t, e) { var n = this; return new H(function (t, e) { f.call(n, t, e) }).then(t, e) }, { unsafe: !0 }), "function" == typeof V && l({ global: !0, enumerable: !0, forced: !0 }, { fetch: function (t) { return I(H, V.apply(h, arguments)) } }))), l({ global: !0, wrap: !0, forced: tt }, { Promise: H }), b(H, G, !1, !0), x(G), s = v(G), l({ target: G, stat: !0, forced: tt }, { reject: function (t) { var e = Y(this); return e.reject.call(void 0, t), e.promise } }), l({ target: G, stat: !0, forced: p || tt }, { resolve: function (t) { return I(p && this === s ? H : this, t) } }), l({ target: G, stat: !0, forced: et }, { all: function (t) { var u = this, e = Y(u), a = e.resolve, s = e.reject, n = C(function () { var r = _(u.resolve), o = [], i = 0, c = 1; j(t, function (t) { var e = i++, n = !1; o.push(void 0), c++, r.call(u, t).then(function (t) { n || (n = !0, o[e] = t, --c || a(o)) }, s) }), --c || a(o) }); return n.error && s(n.value), e.promise }, race: function (t) { var n = this, r = Y(n), o = r.reject, e = C(function () { var e = _(n.resolve); j(t, function (t) { e.call(n, t).then(r.resolve, o) }) }); return e.error && o(e.value), r.promise } }) }, function (t, e, n) { var r = n(1); t.exports = r.Promise }, function (t, e, n) { var o = n(10); t.exports = function (t, e, n) { for (var r in e) o(t, r, e[r], n); return t } }, function (t, e) { t.exports = function (t, e, n) { if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation"); return t } }, function (t, e, n) { function h(t, e) { this.stopped = t, this.result = e } var v = n(5), d = n(99), y = n(13), g = n(47), m = n(100), b = n(101); (t.exports = function (t, e, n, r, o) { var i, c, u, a, s, f, l, p = g(e, n, r ? 2 : 1); if (o) i = t; else { if ("function" != typeof (c = m(t))) throw TypeError("Target is not iterable"); if (d(c)) { for (u = 0, a = y(t.length); u < a; u++)if ((s = r ? p(v(l = t[u])[0], l[1]) : p(t[u])) && s instanceof h) return s; return new h(!1) } i = c.call(t) } for (f = i.next; !(l = f.call(i)).done;)if ("object" == typeof (s = b(i, p, l.value, r)) && s && s instanceof h) return s; return new h(!1) }).stop = function (t) { return new h(!0, t) } }, function (t, e, n) { var r, o, i, c, u, a, s, f, l = n(1), p = n(15).f, h = n(12), v = n(104).set, d = n(105), y = l.MutationObserver || l.WebKitMutationObserver, g = l.process, m = l.Promise, b = "process" == h(g), x = p(l, "queueMicrotask"), w = x && x.value; w || (r = function () { var t, e; for (b && (t = g.domain) && t.exit(); o;) { e = o.fn, o = o.next; try { e() } catch (t) { throw o ? c() : i = void 0, t } } i = void 0, t && t.enter() }, c = b ? function () { g.nextTick(r) } : y && !d ? (u = !0, a = document.createTextNode(""), new y(r).observe(a, { characterData: !0 }), function () { a.data = u = !u }) : m && m.resolve ? (s = m.resolve(void 0), f = s.then, function () { f.call(s, r) }) : function () { v.call(l, r) }), t.exports = w || function (t) { var e = { fn: t, next: void 0 }; i && (i.next = e), o || (o = e, c()), i = e } }, function (t, e, n) { var r = n(5), o = n(4), i = n(106); t.exports = function (t, e) { if (r(t), o(e) && e.constructor === t) return e; var n = i.f(t); return (0, n.resolve)(e), n.promise } }, function (t, e, n) { var r = n(1); t.exports = function (t, e) { var n = r.console; n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e)) } }, function (t, e) { t.exports = function (t) { try { return { error: !1, value: t() } } catch (t) { return { error: !0, value: t } } } }, function (t, e, n) { var r = function (c) { "use strict"; var l, t = Object.prototype, f = t.hasOwnProperty, e = "function" == typeof Symbol ? Symbol : {}, o = e.iterator || "@@iterator", n = e.asyncIterator || "@@asyncIterator", r = e.toStringTag || "@@toStringTag"; function i(t, e, n) { return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e] } try { i({}, "") } catch (t) { i = function (t, e, n) { return t[e] = n } } function u(t, e, n, r) { var i, c, u, a, o = e && e.prototype instanceof m ? e : m, s = Object.create(o.prototype), f = new P(r || []); return s._invoke = (i = t, c = n, u = f, a = h, function (t, e) { if (a === d) throw new Error("Generator is already running"); if (a === y) { if ("throw" === t) throw e; return k() } for (u.method = t, u.arg = e; ;) { var n = u.delegate; if (n) { var r = function t(e, n) { var r = e.iterator[n.method]; if (r === l) { if (n.delegate = null, "throw" === n.method) { if (e.iterator.return && (n.method = "return", n.arg = l, t(e, n), "throw" === n.method)) return g; n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method") } return g } var o = p(r, e.iterator, n.arg); if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, g; var i = o.arg; if (!i) return n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g; { if (!i.done) return i; n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = l) } n.delegate = null; return g }(n, u); if (r) { if (r === g) continue; return r } } if ("next" === u.method) u.sent = u._sent = u.arg; else if ("throw" === u.method) { if (a === h) throw a = y, u.arg; u.dispatchException(u.arg) } else "return" === u.method && u.abrupt("return", u.arg); a = d; var o = p(i, c, u); if ("normal" === o.type) { if (a = u.done ? y : v, o.arg === g) continue; return { value: o.arg, done: u.done } } "throw" === o.type && (a = y, u.method = "throw", u.arg = o.arg) } }), s } function p(t, e, n) { try { return { type: "normal", arg: t.call(e, n) } } catch (t) { return { type: "throw", arg: t } } } c.wrap = u; var h = "suspendedStart", v = "suspendedYield", d = "executing", y = "completed", g = {}; function m() { } function a() { } function s() { } var b = {}; b[o] = function () { return this }; var x = Object.getPrototypeOf, w = x && x(x(A([]))); w && w !== t && f.call(w, o) && (b = w); var _ = s.prototype = m.prototype = Object.create(b); function S(t) { ["next", "throw", "return"].forEach(function (e) { i(t, e, function (t) { return this._invoke(e, t) }) }) } function E(a, s) { var e; this._invoke = function (n, r) { function t() { return new s(function (t, e) { !function e(t, n, r, o) { var i = p(a[t], a, n); if ("throw" !== i.type) { var c = i.arg, u = c.value; return u && "object" == typeof u && f.call(u, "__await") ? s.resolve(u.__await).then(function (t) { e("next", t, r, o) }, function (t) { e("throw", t, r, o) }) : s.resolve(u).then(function (t) { c.value = t, r(c) }, function (t) { return e("throw", t, r, o) }) } o(i.arg) }(n, r, t, e) }) } return e = e ? e.then(t, t) : t() } } function O(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e) } function j(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e } function P(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(O, this), this.reset(!0) } function A(e) { if (e) { var t = e[o]; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var n = -1, r = function t() { for (; ++n < e.length;)if (f.call(e, n)) return t.value = e[n], t.done = !1, t; return t.value = l, t.done = !0, t }; return r.next = r } } return { next: k } } function k() { return { value: l, done: !0 } } return ((a.prototype = _.constructor = s).constructor = a).displayName = i(s, r, "GeneratorFunction"), c.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === a || "GeneratorFunction" === (e.displayName || e.name)) }, c.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, s) : (t.__proto__ = s, i(t, r, "GeneratorFunction")), t.prototype = Object.create(_), t }, c.awrap = function (t) { return { __await: t } }, S(E.prototype), E.prototype[n] = function () { return this }, c.AsyncIterator = E, c.async = function (t, e, n, r, o) { void 0 === o && (o = Promise); var i = new E(u(t, e, n, r), o); return c.isGeneratorFunction(e) ? i : i.next().then(function (t) { return t.done ? t.value : i.next() }) }, S(_), i(_, r, "Generator"), _[o] = function () { return this }, _.toString = function () { return "[object Generator]" }, c.keys = function (n) { var r = []; for (var t in n) r.push(t); return r.reverse(), function t() { for (; r.length;) { var e = r.pop(); if (e in n) return t.value = e, t.done = !1, t } return t.done = !0, t } }, c.values = A, P.prototype = { constructor: P, reset: function (t) { if (this.prev = 0, this.next = 0, this.sent = this._sent = l, this.done = !1, this.delegate = null, this.method = "next", this.arg = l, this.tryEntries.forEach(j), !t) for (var e in this) "t" === e.charAt(0) && f.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = l) }, stop: function () { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval }, dispatchException: function (n) { if (this.done) throw n; var r = this; function t(t, e) { return i.type = "throw", i.arg = n, r.next = t, e && (r.method = "next", r.arg = l), !!e } for (var e = this.tryEntries.length - 1; 0 <= e; --e) { var o = this.tryEntries[e], i = o.completion; if ("root" === o.tryLoc) return t("end"); if (o.tryLoc <= this.prev) { var c = f.call(o, "catchLoc"), u = f.call(o, "finallyLoc"); if (c && u) { if (this.prev < o.catchLoc) return t(o.catchLoc, !0); if (this.prev < o.finallyLoc) return t(o.finallyLoc) } else if (c) { if (this.prev < o.catchLoc) return t(o.catchLoc, !0) } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < o.finallyLoc) return t(o.finallyLoc) } } } }, abrupt: function (t, e) { for (var n = this.tryEntries.length - 1; 0 <= n; --n) { var r = this.tryEntries[n]; if (r.tryLoc <= this.prev && f.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var o = r; break } } o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null); var i = o ? o.completion : {}; return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(i) }, complete: function (t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g }, finish: function (t) { for (var e = this.tryEntries.length - 1; 0 <= e; --e) { var n = this.tryEntries[e]; if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), j(n), g } }, catch: function (t) { for (var e = this.tryEntries.length - 1; 0 <= e; --e) { var n = this.tryEntries[e]; if (n.tryLoc === t) { var r, o = n.completion; return "throw" === o.type && (r = o.arg, j(n)), r } } throw new Error("illegal catch attempt") }, delegateYield: function (t, e, n) { return this.delegate = { iterator: A(t), resultName: e, nextLoc: n }, "next" === this.method && (this.arg = l), g } }, c }(t.exports); try { regeneratorRuntime = r } catch (t) { Function("r", "regeneratorRuntime = r")(r) } }, function (t, e, n) { "use strict"; var y = n(47), g = n(14), m = n(101), b = n(99), x = n(13), w = n(49), _ = n(100); t.exports = function (t, e, n) { var r, o, i, c, u, a, s = g(t), f = "function" == typeof this ? this : Array, l = arguments.length, p = 1 < l ? e : void 0, h = void 0 !== p, v = _(s), d = 0; if (h && (p = y(p, 2 < l ? n : void 0, 2)), null == v || f == Array && b(v)) for (o = new f(r = x(s.length)); d < r; d++)a = h ? p(s[d], d) : s[d], w(o, d, a); else for (u = (c = v.call(s)).next, o = new f; !(i = u.call(c)).done; d++)a = h ? m(c, p, [i.value, d], !0) : i.value, w(o, d, a); return o.length = d, o } }, function (t, e, n) { var r = n(6), o = n(1), i = n(42), u = n(109), c = n(8).f, a = n(28).f, s = n(110), f = n(70), l = n(111), p = n(10), h = n(0), v = n(20).set, d = n(98), y = n(2)("match"), g = o.RegExp, m = g.prototype, b = /a/g, x = /a/g, w = new g(b) !== b, _ = l.UNSUPPORTED_Y; if (r && i("RegExp", !w || _ || h(function () { return x[y] = !1, g(b) != b || g(x) == x || "/a/i" != g(b, "i") }))) { for (var S = function (t, e) { var n, r = this instanceof S, o = s(t), i = void 0 === e; if (!r && o && t.constructor === S && i) return t; w ? o && !i && (t = t.source) : t instanceof S && (i && (e = f.call(t)), t = t.source), _ && (n = !!e && -1 < e.indexOf("y")) && (e = e.replace(/y/g, "")); var c = u(w ? new g(t, e) : g(t, e), r ? this : m, S); return _ && n && v(c, { sticky: n }), c }, E = a(g), O = 0; E.length > O;)!function (e) { e in S || c(S, e, { configurable: !0, get: function () { return g[e] }, set: function (t) { g[e] = t } }) }(E[O++]); (m.constructor = S).prototype = m, p(o, "RegExp", S) } d("RegExp") }, function (t, e, n) { "use strict"; var r = n(71), l = n(5), p = n(13), o = n(16), h = n(72), v = n(73); r("match", 1, function (r, s, f) { return [function (t) { var e = o(this), n = null == t ? void 0 : t[r]; return void 0 !== n ? n.call(t, e) : new RegExp(t)[r](String(e)) }, function (t) { var e = f(s, t, this); if (e.done) return e.value; var n = l(t), r = String(this); if (!n.global) return v(n, r); for (var o, i = n.unicode, c = [], u = n.lastIndex = 0; null !== (o = v(n, r));) { var a = String(o[0]); "" === (c[u] = a) && (n.lastIndex = h(r, p(n.lastIndex), i)), u++ } return 0 === u ? null : c }] }) }, function (t, e, n) { "use strict"; var r = n(71), l = n(110), b = n(5), p = n(16), x = n(103), w = n(72), _ = n(13), S = n(73), h = n(51), o = n(0), v = [].push, E = Math.min, O = 4294967295, j = !o(function () { return !RegExp(O, "y") }); r("split", 2, function (o, y, g) { var m = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function (t, e) { var n = String(p(this)), r = void 0 === e ? O : e >>> 0; if (0 == r) return []; if (void 0 === t) return [n]; if (!l(t)) return y.call(n, t, r); for (var o, i, c, u = [], a = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), s = 0, f = new RegExp(t.source, a + "g"); (o = h.call(f, n)) && !(s < (i = f.lastIndex) && (u.push(n.slice(s, o.index)), 1 < o.length && o.index < n.length && v.apply(u, o.slice(1)), c = o[0].length, s = i, u.length >= r));)f.lastIndex === o.index && f.lastIndex++; return s === n.length ? !c && f.test("") || u.push("") : u.push(n.slice(s)), u.length > r ? u.slice(0, r) : u } : "0".split(void 0, 0).length ? function (t, e) { return void 0 === t && 0 === e ? [] : y.call(this, t, e) } : y; return [function (t, e) { var n = p(this), r = null == t ? void 0 : t[o]; return void 0 !== r ? r.call(t, n, e) : m.call(String(n), t, e) }, function (t, e) { var n = g(m, t, this, e, m !== y); if (n.done) return n.value; var r = b(t), o = String(this), i = x(r, RegExp), c = r.unicode, u = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (j ? "y" : "g"), a = new i(j ? r : "^(?:" + r.source + ")", u), s = void 0 === e ? O : e >>> 0; if (0 == s) return []; if (0 === o.length) return null === S(a, o) ? [o] : []; for (var f = 0, l = 0, p = []; l < o.length;) { a.lastIndex = j ? l : 0; var h, v = S(a, j ? o : o.slice(l)); if (null === v || (h = E(_(a.lastIndex + (j ? 0 : l)), o.length)) === f) l = w(o, l, c); else { if (p.push(o.slice(f, l)), p.length === s) return p; for (var d = 1; d <= v.length - 1; d++)if (p.push(v[d]), p.length === s) return p; l = f = h } } return p.push(o.slice(f)), p }] }, !j) }, function (t, e, n) { "use strict"; var r = n(3), o = n(112).trim; r({ target: "String", proto: !0, forced: n(137)("trim") }, { trim: function () { return o(this) } }) }, function (t, e, n) { var r = n(0), o = n(113); t.exports = function (t) { return r(function () { return !!o[t]() || "​? ?" != "​? ?"[t]() || o[t].name !== t }) } }, function (t, e, n) { "use strict"; var r = n(3), o = n(83).indexOf, i = n(93), c = n(32), u = [].indexOf, a = !!u && 1 / [1].indexOf(1, -0) < 0, s = i("indexOf"), f = c("indexOf", { ACCESSORS: !0, 1: 0 }); r({ target: "Array", proto: !0, forced: a || !s || !f }, { indexOf: function (t, e) { return a ? u.apply(this, arguments) || 0 : o(this, t, 1 < arguments.length ? e : void 0) } }) }, function (t, e, n) { "use strict"; function r(t) { var e, n, r, o, i, c, u, a, s = l(t, !1); if ("string" == typeof s && 2 < s.length) if (43 === (e = (s = g(s)).charCodeAt(0)) || 45 === e) { if (88 === (n = s.charCodeAt(2)) || 120 === n) return NaN } else if (48 === e) { switch (s.charCodeAt(1)) { case 66: case 98: r = 2, o = 49; break; case 79: case 111: r = 8, o = 55; break; default: return +s }for (c = (i = s.slice(2)).length, u = 0; u < c; u++)if ((a = i.charCodeAt(u)) < 48 || o < a) return NaN; return parseInt(i, r) } return +s } var o = n(6), i = n(1), c = n(42), u = n(10), a = n(7), s = n(12), f = n(109), l = n(26), p = n(0), h = n(29), v = n(28).f, d = n(15).f, y = n(8).f, g = n(112).trim, m = "Number", b = i[m], x = b.prototype, w = s(h(x)) == m; if (c(m, !b(" 0o1") || !b("0b1") || b("+0x1"))) { for (var _, S = function (t) { var e = arguments.length < 1 ? 0 : t, n = this; return n instanceof S && (w ? p(function () { x.valueOf.call(n) }) : s(n) != m) ? f(new b(r(e)), n, S) : r(e) }, E = o ? v(b) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), O = 0; E.length > O; O++)a(b, _ = E[O]) && !a(S, _) && y(S, _, d(b, _)); (S.prototype = x).constructor = S, u(i, m, S) } }, function (t, e, n) { var r = n(3), o = n(141); r({ target: "Object", stat: !0, forced: Object.assign !== o }, { assign: o }) }, function (t, e, n) { "use strict"; var p = n(6), r = n(0), h = n(44), v = n(60), d = n(52), y = n(14), g = n(53), o = Object.assign, i = Object.defineProperty; t.exports = !o || r(function () { if (p && 1 !== o({ b: 1 }, o(i({}, "a", { enumerable: !0, get: function () { i(this, "b", { value: 3, enumerable: !1 }) } }), { b: 2 })).b) return !0; var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst"; return t[n] = 7, r.split("").forEach(function (t) { e[t] = t }), 7 != o({}, t)[n] || h(o({}, e)).join("") != r }) ? function (t, e) { for (var n = y(t), r = arguments.length, o = 1, i = v.f, c = d.f; o < r;)for (var u, a = g(arguments[o++]), s = i ? h(a).concat(i(a)) : h(a), f = s.length, l = 0; l < f;)u = s[l++], p && !c.call(a, u) || (n[u] = a[u]); return n } : o }, function (t, e, n) { var r = n(3), o = n(0), i = n(14), c = n(64), u = n(96); r({ target: "Object", stat: !0, forced: o(function () { c(1) }), sham: !u }, { getPrototypeOf: function (t) { return c(i(t)) } }) }, function (t, e, n) { n(3)({ target: "Object", stat: !0 }, { setPrototypeOf: n(65) }) }, function (t, e, n) { var r = n(3), o = n(17), a = n(21), s = n(5), f = n(4), l = n(29), p = n(145), i = n(0), h = o("Reflect", "construct"), v = i(function () { function t() { } return !(h(function () { }, [], t) instanceof t) }), d = !i(function () { h(function () { }) }), c = v || d; r({ target: "Reflect", stat: !0, forced: c, sham: c }, { construct: function (t, e, n) { a(t), s(e); var r = arguments.length < 3 ? t : a(n); if (d && !v) return h(t, e, r); if (t == r) { switch (e.length) { case 0: return new t; case 1: return new t(e[0]); case 2: return new t(e[0], e[1]); case 3: return new t(e[0], e[1], e[2]); case 4: return new t(e[0], e[1], e[2], e[3]) }var o = [null]; return o.push.apply(o, e), new (p.apply(t, o)) } var i = r.prototype, c = l(f(i) ? i : Object.prototype), u = Function.apply.call(t, c, e); return f(u) ? u : c } }) }, function (t, e, n) { "use strict"; var i = n(21), c = n(4), u = [].slice, a = {}; t.exports = Function.bind || function (e) { var n = i(this), r = u.call(arguments, 1), o = function () { var t = r.concat(u.call(arguments)); return this instanceof o ? function (t, e, n) { if (!(e in a)) { for (var r = [], o = 0; o < e; o++)r[o] = "a[" + o + "]"; a[e] = Function("C,a", "return new C(" + r.join(",") + ")") } return a[e](t, n) }(n, t.length, t) : n.apply(e, t) }; return c(n.prototype) && (o.prototype = n.prototype), o } }, , function (t, e, n) { "use strict"; n.r(e); function i(c, u, a) { Object.keys(a).forEach(function (t) { var e, n, r = a[t], o = u[t], i = o && ((n = o)[0] || n).nodeType ? "element" : null == (e = o) ? "".concat(e) : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(); if (!new RegExp(r).test(i)) throw new Error("".concat(c.toUpperCase(), ": ") + 'Option "'.concat(t, '" provided type "').concat(i, '" ') + 'but expected type "'.concat(r, '".')) }) } function r() { var t = window.jQuery; return t && !document.body.hasAttribute("data-no-jquery") ? t : null } n(19), n(30), n(31), n(48), n(118), n(33), n(22), n(66), n(67), n(35), n(18), n(122), n(23), n(36), n(37), n(131), n(69), n(50), n(133), n(38), n(24), n(134), n(135), n(136); var o, c, u, a, s = (o = {}, c = 1, { set: function (t, e, n) { void 0 === t[e] && (t[e] = { key: e, id: c }, c++), o[t[e].id] = n }, get: function (t, e) { if (!t || void 0 === t[e]) return null; var n = t[e]; return n.key === e ? o[n.id] : null }, delete: function (t, e) { var n; void 0 === t[e] || (n = t[e]).key === e && (delete o[n.id], delete t[e]) } }), f = { setData: function (t, e, n) { s.set(t, e, n) }, getData: function (t, e) { return s.get(t, e) }, removeData: function (t, e) { s.delete(t, e) } }, l = (n(138), n(74), n(75), n(76), Element.prototype.querySelectorAll), p = Element.prototype.querySelector, h = (u = new CustomEvent("Bootstrap", { cancelable: !0 }), (a = document.createElement("div")).addEventListener("Bootstrap", function () { return null }), u.preventDefault(), a.dispatchEvent(u), u.defaultPrevented), v = /:scope\b/; !function () { var t = document.createElement("div"); try { t.querySelectorAll(":scope *") } catch (t) { return !1 } return !0 }() && (l = function (t) { if (!v.test(t)) return this.querySelectorAll(t); var e = Boolean(this.id); e || (this.id = function (t) { for (; t += Math.floor(1e6 * Math.random()), document.getElementById(t);); return t }("scope")); var n = null; try { t = t.replace(v, "#".concat(this.id)), n = this.querySelectorAll(t) } finally { e || this.removeAttribute("id") } return n }, p = function (t) { if (!v.test(t)) return this.querySelector(t); var e = d.call(this, t); return void 0 !== e[0] ? e[0] : null }); var d = l, y = p; function b(t, e) { return function (t) { if (Array.isArray(t)) return t }(t) || function (t, e) { if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [], r = !0, o = !1, i = void 0; try { for (var c, u = t[Symbol.iterator](); !(r = (c = u.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try { r || null == u.return || u.return() } finally { if (o) throw i } } return n }(t, e) || function (t, e) { if (!t) return; if ("string" == typeof t) return g(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(t, e) }(t, e) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function g(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r } var m = r(), x = /[^.]*(?=\..*)\.|.*/, w = /\..*/, _ = /::\d+$/, S = {}, E = 1, O = { mouseenter: "mouseover", mouseleave: "mouseout" }, j = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]; function P(t, e) { return e && "".concat(e, "::").concat(E++) || t.uidEvent || E++ } function A(t) { var e = P(t); return t.uidEvent = e, S[e] = S[e] || {}, S[e] } function k(t, e, n) { for (var r = 2 < arguments.length && void 0 !== n ? n : null, o = Object.keys(t), i = 0, c = o.length; i < c; i++) { var u = t[o[i]]; if (u.originalHandler === e && u.delegationSelector === r) return u } return null } function T(t, e, n) { var r = "string" == typeof e, o = r ? n : e, i = t.replace(w, ""), c = O[i]; return c && (i = c), -1 < j.indexOf(i) || (i = t), [r, o, i] } function I(t, e, n, r, o) { var i, c, u, a, s, f, l, p, h, v, d, y, g, m; "string" == typeof e && t && (n || (n = r, r = null), c = (i = b(T(e, n, r), 3))[0], u = i[1], a = i[2], (l = k(f = (s = A(t))[a] || (s[a] = {}), u, c ? n : null)) ? l.oneOff = l.oneOff && o : (p = P(u, e.replace(x, "")), (h = c ? (y = t, g = n, m = r, function t(e) { for (var n = y.querySelectorAll(g), r = e.target; r && r !== this; r = r.parentNode)for (var o = n.length; o--;)if (n[o] === r) return t.oneOff && R.off(y, e.type, m), m.apply(r, [e]); return null }) : (v = t, d = n, function t(e) { return t.oneOff && R.off(v, e.type, d), d.apply(v, [e]) })).delegationSelector = c ? n : null, h.originalHandler = u, h.oneOff = o, f[h.uidEvent = p] = h, t.addEventListener(a, h, c))) } function L(t, e, n, r, o) { var i = k(e[n], r, o); i && (t.removeEventListener(n, i, Boolean(o)), delete e[n][i.uidEvent]) } var R = { on: function (t, e, n, r) { I(t, e, n, r, !1) }, one: function (t, e, n, r) { I(t, e, n, r, !0) }, off: function (u, a, t, e) { if ("string" == typeof a && u) { var n = b(T(a, t, e), 3), r = n[0], o = n[1], i = n[2], c = i !== a, s = A(u), f = "." === a.charAt(0); if (void 0 === o) { f && Object.keys(s).forEach(function (t) { var n, r, o, i, c; n = u, r = s, o = t, i = a.slice(1), c = r[o] || {}, Object.keys(c).forEach(function (t) { var e; -1 < t.indexOf(i) && L(n, r, o, (e = c[t]).originalHandler, e.delegationSelector) }) }); var l = s[i] || {}; Object.keys(l).forEach(function (t) { var e, n = t.replace(_, ""); (!c || -1 < a.indexOf(n)) && L(u, s, i, (e = l[t]).originalHandler, e.delegationSelector) }) } else { if (!s || !s[i]) return; L(u, s, i, o, r ? t : null) } } }, trigger: function (t, e, n) { if ("string" != typeof e || !t) return null; var r, o = e.replace(w, ""), i = e !== o, c = -1 < j.indexOf(o), u = !0, a = !0, s = !1, f = null; return i && m && (r = m.Event(e, n), m(t).trigger(r), u = !r.isPropagationStopped(), a = !r.isImmediatePropagationStopped(), s = r.isDefaultPrevented()), c ? (f = document.createEvent("HTMLEvents")).initEvent(o, u, !0) : f = new CustomEvent(e, { bubbles: u, cancelable: !0 }), void 0 !== n && Object.keys(n).forEach(function (t) { Object.defineProperty(f, t, { get: function () { return n[t] } }) }), s && (f.preventDefault(), h || Object.defineProperty(f, "defaultPrevented", { get: function () { return !0 } })), a && t.dispatchEvent(f), f.defaultPrevented && void 0 !== r && r.preventDefault(), f } }, C = R; n(139), n(140); function N(e, t) { var n, r = Object.keys(e); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), r.push.apply(r, n)), r } function M(o) { for (var t = 1; t < arguments.length; t++) { var i = null != arguments[t] ? arguments[t] : {}; t % 2 ? N(Object(i), !0).forEach(function (t) { var e, n, r; e = o, r = i[n = t], n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : N(Object(i)).forEach(function (t) { Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t)) }) } return o } function D(t) { return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t) } function F(t) { return t.replace(/[A-Z]/g, function (t) { return "-".concat(t.toLowerCase()) }) } var U = { setDataAttribute: function (t, e, n) { t.setAttribute("data-".concat(F(e)), n) }, removeDataAttribute: function (t, e) { t.removeAttribute("data-".concat(F(e))) }, getDataAttributes: function (t) { if (!t) return {}; var e = M({}, t.dataset); return Object.keys(e).forEach(function (t) { e[t] = D(e[t]) }), e }, getDataAttribute: function (t, e) { return D(t.getAttribute("data-".concat(F(e)))) }, offset: function (t) { var e = t.getBoundingClientRect(); return { top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft } }, position: function (t) { return { top: t.offsetTop, left: t.offsetLeft } }, style: function (t, e) { Object.assign(t.style, e) }, toggleClass: function (t, e) { t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e)) }, addClass: function (t, e) { t.classList.contains(e) || t.classList.add(e) }, addStyle: function (e, n) { Object.keys(n).forEach(function (t) { e.style[t] = n[t] }) }, removeClass: function (t, e) { t.classList.contains(e) && t.classList.remove(e) } }; function G(t) { return function (t) { if (Array.isArray(t)) return $(t) }(t) || function (t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function (t, e) { if (!t) return; if ("string" == typeof t) return $(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(t, e) }(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function $(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r } var z = { closest: function (t, e) { return t.closest(e) }, matches: function (t, e) { return t.matches(e) }, find: function (t, e) { var n, r = 1 < arguments.length && void 0 !== e ? e : document.documentElement; return (n = []).concat.apply(n, G(d.call(r, t))) }, findOne: function (t, e) { var n = 1 < arguments.length && void 0 !== e ? e : document.documentElement; return y.call(n, t) }, children: function (t, e) { var n, r = (n = []).concat.apply(n, G(t.children)); return r.filter(function (t) { return t.matches(e) }) }, parents: function (t, e) { for (var n = [], r = t.parentNode; r && r.nodeType === Node.ELEMENT_NODE && 3 !== r.nodeType;)this.matches(r, e) && n.push(r), r = r.parentNode; return n }, prev: function (t, e) { for (var n = t.previousElementSibling; n;) { if (n.matches(e)) return [n]; n = n.previousElementSibling } return [] }, next: function (t, e) { for (var n = t.nextElementSibling; n;) { if (this.matches(n, e)) return [n]; n = n.nextElementSibling } return [] } }; n(142), n(143), n(144); function B(t, e) { return function (t) { if (Array.isArray(t)) return t }(t) || function (t, e) { if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [], r = !0, o = !1, i = void 0; try { for (var c, u = t[Symbol.iterator](); !(r = (c = u.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try { r || null == u.return || u.return() } finally { if (o) throw i } } return n }(t, e) || function (t, e) { if (!t) return; if ("string" == typeof t) return H(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(t, e) }(t, e) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function H(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r } function W(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } var K = function () { function t() { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t) } var e, n, r; return e = t, (n = [{ key: "_getCoordinates", value: function (t) { var e = B(t.touches, 1)[0]; return { x: e.clientX, y: e.clientY } } }, { key: "_getDirection", value: function (t) { return { x: { direction: t.x < 0 ? "left" : "right", value: Math.abs(t.x) }, y: { direction: t.y < 0 ? "up" : "down", value: Math.abs(t.y) } } } }]) && W(e.prototype, n), r && W(e, r), t }(); function q(t) { return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) } function V(e, t) { var n, r = Object.keys(e); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), r.push.apply(r, n)), r } function Y(o) { for (var t = 1; t < arguments.length; t++) { var i = null != arguments[t] ? arguments[t] : {}; t % 2 ? V(Object(i), !0).forEach(function (t) { var e, n, r; e = o, r = i[n = t], n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : V(Object(i)).forEach(function (t) { Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t)) }) } return o } function X(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } function Q(t, e) { return (Q = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } function J(i) { var c = function () { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0 } catch (t) { return !1 } }(); return function () { var t, e, n, r, o = Z(i); return e = c ? (t = Z(this).constructor, Reflect.construct(o, arguments, t)) : o.apply(this, arguments), n = this, !(r = e) || "object" !== q(r) && "function" != typeof r ? function (t) { if (void 0 !== t) return t; throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }(n) : r } } function Z(t) { return (Z = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var tt = { threshold: 10, direction: "all" }, et = function () { !function (t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Q(t, e) }(o, K); var t, e, n, r = J(o); function o(t, e) { var n; return function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, o), (n = r.call(this))._element = t, n._startPosition = null, n._options = Y(Y({}, tt), e), n } return t = o, (e = [{ key: "handleTouchStart", value: function (t) { this._startPosition = this._getCoordinates(t) } }, { key: "handleTouchMove", value: function (t) { if (this._startPosition) { var e = this._getCoordinates(t), n = { x: e.x - this._startPosition.x, y: e.y - this._startPosition.y }, r = this._getDirection(n); if ("all" === this._options.direction) { if (r.y.value < this._options.threshold && r.x.value < this._options.threshold) return; var o = r.y.value > r.x.value ? r.y.direction : r.x.direction; return C.trigger(this._element, "swipe".concat(o)), C.trigger(this._element, "swipe", { direction: o }), void (this._startPosition = null) } var i = "left" === this._options.direction || "right" === this._options ? "x" : "y"; r[i].direction === this._options.direction && r[i].value > this._options.threshold && (C.trigger(this._element, "swipe".concat(r[i].direction)), this._startPosition = null) } } }, { key: "handleTouchEnd", value: function () { this._startPosition = null } }]) && X(t.prototype, e), n && X(t, n), o }(); function nt(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } var rt = function () { function r(t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "swipe", n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, r), this._element = t, this._event = e, this.swipe = new et(t, n), this._touchStartHandler = this._handleTouchStart.bind(this), this._touchMoveHandler = this._handleTouchMove.bind(this), this._touchEndHandler = this._handleTouchEnd.bind(this) } var t, e, n; return t = r, (e = [{ key: "dispose", value: function () { this._element.removeEventListener("touchstart", this._touchStartHandler), this._element.removeEventListener("touchmove", this._touchMoveHandler), window.removeEventListener("touchend", this._touchEndHandler) } }, { key: "init", value: function () { var e = this; this._element.addEventListener("touchstart", function (t) { return e._handleTouchStart(t) }), this._element.addEventListener("touchmove", function (t) { return e._handleTouchMove(t) }), window.addEventListener("touchend", function (t) { return e._handleTouchEnd(t) }) } }, { key: "_handleTouchStart", value: function (t) { this[this._event].handleTouchStart(t) } }, { key: "_handleTouchMove", value: function (t) { this[this._event].handleTouchMove(t) } }, { key: "_handleTouchEnd", value: function (t) { this[this._event].handleTouchEnd(t) } }]) && nt(t.prototype, e), n && nt(t, n), r }(); function ot(t) { return (ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) } function it(e, t) { var n, r = Object.keys(e); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), r.push.apply(r, n)), r } function ct(o) { for (var t = 1; t < arguments.length; t++) { var i = null != arguments[t] ? arguments[t] : {}; t % 2 ? it(Object(i), !0).forEach(function (t) { var e, n, r; e = o, r = i[n = t], n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : it(Object(i)).forEach(function (t) { Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t)) }) } return o } function ut(t, e, n, r, o, i, c) { try { var u = t[i](c), a = u.value } catch (t) { return void n(t) } u.done ? e(a) : Promise.resolve(a).then(r, o) } function at(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } var st = "multiCarousel", ft = "mdb.multiCarousel", lt = ".multi-carousel-inner", pt = ".carousel-control-prev", ht = ".carousel-control-next", vt = { items: "(number|string)", breakpoint: "(number|string|boolean)", interval: "(number|string|boolean)" }, dt = { items: 3, breakpoint: 992, interval: !1 }, yt = function () { function o(t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, o), this._element = t, this._options = e, this._carouselInner = z.findOne(lt, this._element), this._prevArrow = z.findOne(pt, this._element), this._nextArrow = z.findOne(ht, this._element), this._slideWidth = 0, this._slideHeight = 0, this._animating = !1, this._vertical = this._element.classList.contains("vertical"), this._autoplayInterval = null, this._touch = null, this._element && f.setData(t, ft, this) } var t, e, n, u, r; return t = o, e = [{ key: "init", value: function () { this._calcSlidesSizes(), this._addEvents(), this._setInterval() } }, { key: "slideNext", value: function () { this._animating || (this._animationStart(), this._setInterval(), this._vertical ? this._slideDown() : this._slideRight()) } }, { key: "slidePrev", value: function () { this._animating || (this._animationStart(), this._setInterval(), this._vertical ? this._slideUp() : this._slideLeft()) } }, { key: "dispose", value: function () { this._removeEvents(), clearInterval(this._autoplayInterval), f.removeData(this._element, ft), this._element = null } }, { key: "_animationStart", value: function () { var t = this; this._animating = !0, setTimeout(function () { t._animating = !1 }, 400) } }, { key: "_calcSlidesSizes", value: function () { var e = this; this._vertical ? this.slides.forEach(function (t) { e._slideHeight = e._size, U.style(t, { height: "".concat(e._slideHeight, "%"), display: "flex" }) }) : this.slides.forEach(function (t) { e._slideWidth = e._size, U.style(t, { width: "".concat(e._slideWidth, "%") }) }) } }, { key: "_slideRight", value: function () { var t = this, e = this.firstSlide.cloneNode(!0); U.style(e, { marginLeft: 0 }), this._carouselInner.appendChild(e), U.style(this.firstSlide, { marginLeft: "-".concat(this._slideWidth, "%") }), this._triggerEvents("slide", "slided"), setTimeout(function () { t._carouselInner.removeChild(t.firstSlide) }, 300) } }, { key: "_slideLeft", value: function () { var t = this, e = this.lastSlide.cloneNode(!0); this._carouselInner.insertBefore(e, this.firstSlide), U.style(e, { marginLeft: "-".concat(this._slideWidth, "%") }), this._triggerEvents("slide", "slided"), setTimeout(function () { U.style(t.firstSlide, { marginLeft: 0 }) }, 150), setTimeout(function () { t._carouselInner.removeChild(t.lastSlide) }, 300) } }, { key: "_slideDown", value: function () { var t = this, e = this.firstSlide.cloneNode(!0); U.style(e, { marginTop: 0 }), this._carouselInner.appendChild(e), U.style(this.firstSlide, { marginTop: "-".concat(this.firstSlide.getBoundingClientRect().height, "px") }), this._triggerEvents("slide", "slided"), setTimeout(function () { t._carouselInner.removeChild(t.firstSlide) }, 300) } }, { key: "_slideUp", value: function () { var t = this, e = this.lastSlide.cloneNode(!0); U.style(e, { marginTop: "-".concat(this.lastSlide.getBoundingClientRect().height, "px") }), this._carouselInner.insertBefore(e, this.firstSlide), this._triggerEvents("slide", "slided"), setTimeout(function () { U.style(t.firstSlide, { marginTop: 0 }) }, 150), setTimeout(function () { t._carouselInner.removeChild(t.lastSlide) }, 300) } }, { key: "_setInterval", value: function () { var t = this; this.options.interval && (clearInterval(this._autoplayInterval), this._autoplayInterval = setInterval(function () { t.slideNext() }, parseInt(this.options.interval, 10))) } }, { key: "_addEvents", value: function () { this._slideNextEvent = this.slideNext.bind(this), this._slidePrevEvent = this.slidePrev.bind(this), this._arrowKeyupEvent = this._arrowKeyup.bind(this), this._onWindowResize = this._onResize.bind(this), C.on(this._nextArrow, "click", this._slideNextEvent), C.on(this._prevArrow, "click", this._slidePrevEvent), C.on(this._nextArrow, "keyup", this._arrowKeyupEvent), C.on(this._prevArrow, "keyup", this._arrowKeyupEvent), C.on(window, "resize", this._onWindowResize), this._touch = new rt(this._element, "swipe", { threshold: 20 }), this._touch.init(), this._vertical ? (C.on(this._element, "swipedown", this._slidePrevEvent), C.on(this._element, "swipeup", this._slideNextEvent)) : (C.on(this._element, "swiperight", this._slidePrevEvent), C.on(this._element, "swipeleft", this._slideNextEvent)) } }, { key: "_removeEvents", value: function () { C.off(this._nextArrow, "click", this._slideNextEvent), C.off(this._prevArrow, "click", this._slidePrevEvent), C.off(this._nextArrow, "keyup", this._arrowKeyupEvent), C.off(this._prevArrow, "keyup", this._arrowKeyupEvent), C.off(window, "resize", this._onWindowResize), this._vertical ? (C.off(this._element, "swipedown", this._slidePrevEvent), C.off(this._element, "swipeup", this._slideNextEvent)) : (C.off(this._element, "swiperight", this._slidePrevEvent), C.off(this._element, "swipeleft", this._slideNextEvent)) } }, { key: "_onResize", value: function () { this._calcSlidesSizes() } }, { key: "_arrowKeyup", value: function (t) { switch (t.preventDefault(), t.stopPropagation(), t.keyCode) { case 13: "prev" === t.target.dataset.slide ? this.slidePrev() : this.slideNext(); break; case 37: this.slidePrev(); break; case 39: this.slideNext() } } }, { key: "_triggerEvents", value: (u = regeneratorRuntime.mark(function t(e, n) { var r = this; return regeneratorRuntime.wrap(function (t) { for (; ;)switch (t.prev = t.next) { case 0: if (C.trigger(this._element, "".concat(e, ".mdb.multiCarousel")), n) return t.next = 4, setTimeout(function () { C.trigger(r._element, "".concat(n, ".mdb.multiCarousel")) }, 305); t.next = 4; break; case 4: case "end": return t.stop() } }, t, this) }), r = function () { var t = this, c = arguments; return new Promise(function (e, n) { var r = u.apply(t, c); function o(t) { ut(r, e, n, o, i, "next", t) } function i(t) { ut(r, e, n, o, i, "throw", t) } o(void 0) }) }, function (t, e) { return r.apply(this, arguments) }) }, { key: "options", get: function () { var t = ct(ct(ct({}, dt), U.getDataAttributes(this._element)), this._options); return i(st, t, vt), t } }, { key: "slides", get: function () { return z.find(".multi-carousel-item", this._element) } }, { key: "firstSlide", get: function () { return this.slides[0] } }, { key: "lastSlide", get: function () { return this.slides[this.slides.length - 1] } }, { key: "_size", get: function () { return !1 === JSON.parse(this.options.breakpoint) || this.options.breakpoint < window.innerWidth ? 100 / parseInt(this.options.items, 10) : 100 } }], n = [{ key: "getInstance", value: function (t) { return f.getData(t, ft) } }, { key: "jQueryInterface", value: function (n, r) { return this.each(function () { var t = f.getData(this, ft), e = "object" === ot(n) && n; if ((t || !/dispose/.test(n)) && (t = t || new o(this, e), "string" == typeof n)) { if (void 0 === t[n]) throw new TypeError('No method named "'.concat(n, '"')); t[n](r) } }) } }, { key: "NAME", get: function () { return st } }], e && at(t.prototype, e), n && at(t, n), o }(); z.find(".multi-carousel").forEach(function (t) { new yt(t).init() }); var gt, mt = r(); mt && (gt = mt.fn[st], mt.fn[st] = yt.jQueryInterface, mt.fn[st].Constructor = yt, mt.fn[st].noConflict = function () { return mt.fn[st] = gt, yt.jQueryInterface }); e.default = yt }]).default;
//# sourceMappingURL=multi-carousel.min.js.map

$(document).ready(function () {
    $('button.navbar-toggler').click(function () {
        $('.barrier').fadeToggle();
    });


    $('div.js-grid-box').hide();
    $('.js-grid').prop('value', 'grid on');

    $('.js-grid').click(function () {
        console.log('show');
        if ($('div.js-grid-box').is(':visible')) {
            $('div.js-grid-box').hide();
            $('.js-grid').prop('value', 'grid on');
        }
        else {
            $('div.js-grid-box').show();
            $('.js-grid').prop('value', 'grid off');
        }



    });






    //$('.navbar-collapse').hide();
    //$('.navbar-collapse ul').hide();

    $('.hamburger').click(function () {
        if ($('.navbar-collapse ul').is(':visible')) {
            $('.navbar-collapse').hide();
            $('.navbar-collapse ul').hide();
        }
        else {
            $('.navbar-collapse').show();
            $('.navbar-collapse ul').show();
        }

    });





    $('.barrier').click(function () {
        $('.barrier').fadeToggle();
        $('#navbarNav').removeClass('show');
    });



    $(".testimonial .mt-2").each(function () {

        var height = $(this).height();
        console.log('test height: ' + height);

        

        if (height < 110) {
            $(this).find('.arrow').addClass('one-row');
        }
        else if (height < 140) {
            $(this).find('.arrow').addClass('two-rows');
        }
        else if (height > 140) {
            $(this).find('.arrow').addClass('three-rows');
        }

    });

    //$(".testimonial .bottom-item").each(function () {
    //    console.log($(this).html());
    //    $(this).hide();
    //});

    //$('.next-testimonial').click(function () {

    //    console.log('click arrow');

    //    if ($(".testimonial .bottom-item").is(':visible')) {

    //        $(".testimonial .bottom-item").each(function () {
    //            $(this).fadeOut('slow');
    //        });




    //        var $container = $("html,body");
    //        var $scrollTo = $('footer');

    //        $container.animate({
    //            scrollBottom: $scrollTo,
    //            scrollLeft: 0
    //        }, 450);

    //        $(this).find('i.chevron').removeClass('top').addClass('bottom');
    //        ourWorkArrows();


    //    }
    //    else {

    //        $(".testimonial .bottom-item").each(function () {
    //            $(this).fadeIn('slow');
    //        });

    //        $(this).find('i.chevron').delay(400).removeClass('bottom');
    //        $(this).find('i.chevron').delay(400).addClass('top');

    //        ourWorkArrows();

    //    }

    //});



    // $("div.tech").mouseenter(function () {
    //     console.log('p.tech')

    //     $(this).addClass('move');

    //     var degree = 180;
    //     var $blob = $(this).find('.blob3');

    //     $blob.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
    //     $blob.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

    //     rotateBlob($blob, 0, -150);
      
    //     console.log('p.tech end')

    //     function rotateBlob(bbox, i, x) {

    //         console.log('p.tech rotateBlob')

    //         if (i < x) return;

    //         degree = i;
    //         bbox.css('left', i + 'px');

    //         setTimeout(function () {
    //             rotateBlob(bbox, i - 5, x);
    //         }, 20);

    //         console.log('p.tech rotateBlob end')

    //     }


    // });

    // $("div.tech").mouseleave(function () {

    //     console.log('p.tech')

    //     var degree = 70;
    //     var $blob = $(this).find('.blob3');

    //     rotateBlobRevert($blob, -150, 0);

    //     //$blob.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
    //     //$blob.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

    //     $blob.css({ WebkitTransform: 'rotate(-70deg)' });
    //     $blob.css({ '-moz-transform': 'rotate(-70deg)' });

    //     console.log('p.tech end')

    //     function rotateBlobRevert(bbox, i, x) {

    //         console.log('p.tech rotateBlobRevert')

    //         if (i > x) return;

    //         degree = i;
    //         bbox.css('left', i + 'px');

    //         setTimeout(function () {
    //             rotateBlobRevert(bbox, i + 5, x);
    //         }, 20);

    //         console.log('p.tech rotateBlobRevert end')

    //     }


    // });





    // $("p.standard-list").mouseenter(function () {
    //     console.log('p.tech')

    //     $(this).addClass('move');

    //     var degree = 180;
    //     var $blob = $(this).find('.blob3');

    //     $blob.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
    //     $blob.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

    //     rotateBlobSt($blob, 0, -150);

    //     console.log('p.tech end')

    //     function rotateBlobSt(bbox, i, x) {

    //         console.log('p.tech rotateBlob')

    //         if (i < x) return;

    //         degree = i;
    //         bbox.css('margin-left', i + 'px');

    //         setTimeout(function () {
    //             rotateBlobSt(bbox, i - 5, x);
    //         }, 20);

    //         console.log('p.tech rotateBlob end')

    //     }


    // });

    // $("p.standard-list").mouseleave(function () {

    //     console.log('p.tech')

    //     var degree = 70;
    //     var $blob = $(this).find('.blob3');

    //     rotateBlobRevertSt($blob, -150, 0);

    //     //$blob.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
    //     //$blob.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

    //     $blob.css({ WebkitTransform: 'rotate(-70deg)' });
    //     $blob.css({ '-moz-transform': 'rotate(-70deg)' });

    //     console.log('p.tech end')

    //     function rotateBlobRevertSt(bbox, i, x) {

    //         console.log('p.tech rotateBlobRevert')

    //         if (i > x) return;

    //         degree = i;
    //         bbox.css('margin-left', i + 'px');

    //         setTimeout(function () {
    //             rotateBlobRevertSt(bbox, i + 5, x);
    //         }, 20);

    //         console.log('p.tech rotateBlobRevert end')

    //     }


    // });






    //$(".blob2").each(function () {

    //    console.log('blob2')

    //    var degree = 70;
    //    //var $blob = $(this).find('.blob2');
    //    var $blob = $(this);

    //    rotateBlobRandom($blob, 1, 100);

    //    //$blob.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
    //    //$blob.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

    //    //$blob.css({ WebkitTransform: 'rotate(-70deg)' });
    //    //$blob.css({ '-moz-transform': 'rotate(-70deg)' });

    //    console.log('p.tech end')

    //    function rotateBlobRandom(bbox, i, x) {

    //        console.log('rotateBlobRandom start')
    //        if (i > x) return;

    //        var number = 0;
    //        if (i % 2 == 0) {
    //            number = 135;
    //        } else {
    //            number = 45;
    //        }

    //        console.log(number);

    //        bbox.css({ WebkitTransform: 'rotate(' + number + 'deg)' });
    //        bbox.css({ '-moz-transform': 'rotate(' + number +'deg)' });

    //        setTimeout(function () {
    //            rotateBlobRandom(bbox, i+1, x);
    //        }, 2000);

    //        console.log('rotateBlobRandom end')

    //    }


    //});




    $('div.hp-our-word').mouseenter(function () {

        console.log('blob4')



        var degree = 715;
        var $blob = $(this).find('.blob4');

        $blob.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
        $blob.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

        rotateBlob($blob, 350, 670, -150);

        console.log('p.tech end')

        function rotateBlob(bbox, i, x, y) {

            console.log('p.tech rotateBlob')

            if (i > x) return;

            degree = i;
            bbox.css('margin-left', i + 'px');
            bbox.css('margin-top', y + 'px');

            setTimeout(function () {
                rotateBlob(bbox, i + 10, x, y - 10);
            }, 20);

            console.log('p.tech rotateBlob end')

        }


    });

    $('div.hp-our-word').mouseleave(function () {

        console.log('blob4 out')



        var degree = -20;
        var $blob = $(this).find('.blob4');

        $blob.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
        $blob.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

        rotateBlob($blob, 670, 350, -470, -150);

        console.log('p.tech end')

        function rotateBlob(bbox, i, x, y, z) {

            console.log('p.tech rotateBlob')

            if (i < x) return;

            degree = i;
            bbox.css('margin-left', i + 'px');
            bbox.css('margin-top', y + 'px');

            setTimeout(function () {
                rotateBlob(bbox, i - 10, x, y + 10, z);
            }, 20);

            console.log('p.tech rotateBlob end')

        }


    });










    //ourWorkArrows();






    //var prevScrollpos = window.pageYOffset;
    //window.onscroll = function () {
    //    var currentScrollPos = window.pageYOffset;
    //    if (window.matchMedia("(max-width: 991px)").matches && !$('#navbarNav').hasClass('show')) {
    //        if (Math.abs(currentScrollPos - prevScrollpos) > 40 && currentScrollPos > 0) {
    //        if (prevScrollpos > currentScrollPos) {
    //            $("#navbar").css('top', '0px');
    //        } else {
    //            $("#navbar").css('top', '-73px');
    //        }
    //        prevScrollpos = currentScrollPos;
    //    }
    //    }
    //}

  

    //$('.hp-we-are').hide();


    //var isVisible = $('.we-are').visible();

    //if (isVisible) {
    //    console.log('is visible');
    //}

    //var activateAtY = 300;

    ////$('.hp-we-are').addClass('ph');

    //$('.cinema').fadeOut();

    //$(window).scroll(function () {
    //    if ($(window).scrollTop() > activateAtY) {
    //        console.log('show text');

    //        //$('.hp-we-are').removeClass('ph');
    //        $('.cinema').fadeIn();

    //    } else {
    //        console.log('hide text');

    //        //$('.cinema').fadeOut();
    //    }
    //});








    // $('.b-button-env').mouseenter(function () {
    //     $(this).animate({ 'zoom': 1.1 }, 350);
    //     $(this).animate({ 'zoom': 1 }, 350);
    // });


    $('.cloock').mouseenter(function () {
        $(this).animate({ 'zoom': 1.1 }, 350);
        $(this).animate({ 'zoom': 1 }, 350);
    });

    $('.cloock').hover(function () {
        $(this).addClass('bg1');
    });

    $('.cloock').mouseleave(function () {
        $(this).removeClass('bg1');
    });




    // $('.label-btn').mouseenter(function () {
    //     console.log('clock - mouseover');
    //     $(this).parent().find('.arr').removeClass('arrowanimation_rev');
    //     $(this).parent().find('.arr').addClass('arrowanimation');
    // });
    // $('.label-btn').mouseleave(function () {
    //     console.log('clock - mouseout');
    //     $(this).parent().find('.arr').removeClass('arrowanimation');
    //     $(this).parent().find('.arr').addClass('arrowanimation_rev');
    // });

    // $('.label-box-btn').mouseenter(function () {
    //     console.log('clock - mouseover');
    //     $(this).parent().find('.arr').removeClass('arrowanimation_rev');
    //     $(this).parent().find('.arr').addClass('arrowanimation');
    // });
    // $('.label-box-btn').mouseleave(function () {
    //     console.log('clock - mouseout');
    //     $(this).parent().find('.arr').removeClass('arrowanimation');
    //     $(this).parent().find('.arr').addClass('arrowanimation_rev');
    // });


    // $('.label-btn').each(function () {
    //     console.log('rotate(0,135)');
    //     var o = $(this);
    //     rotateV2(o,180, 115);
    //     console.log('rotate(0,135) end');
    // });

    // $('.label-box-btn').each(function () {
    //     console.log('rotate(0,135)');
    //     var o = $(this);
    //     rotateV2(o, 180, 115);
    //     console.log('rotate(0,135) end');
    // });



    var $elie = $('.clockbutton'),
        degree = 0,
        timer;


    function rotate(bbox, i, x) {
        
        if (i > x) return;

        degree = i;

        var $a = bbox.parent().find('.clockbutton');
        $a.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
        $a.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });
        console.log('rotate step ' + degree);

        setTimeout(function () {
            rotate(bbox, i + 5, x);
        }, 20);

    }

    function rotateV2(bbox, i, x) {

        if (i < x) return;

        degree = i;

        var $a = bbox.parent().find('.clockbutton');
        $a.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
        $a.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });
        console.log('rotate step V2' + degree);

        setTimeout(function () {
            rotateV2(bbox, i - 5, x);
        }, 20);

    }

    // $('.label-btn').mouseenter(function () {
    //     console.log('rotate');
    //     rotate($(this),115,180);
    // });

    // $('.label-btn').mouseleave(function () {
    //     console.log('rotate leave');
    //     rotateV2($(this), 180, 115);
    // });

    // $('.label-box-btn').mouseenter(function () {
    //     console.log('rotate');
    //     rotate($(this), 115, 180);
    // });

    // $('.label-box-btn').mouseleave(function () {
    //     console.log('rotate leave');
    //     rotateV2($(this), 180, 115);
    // });



    //$('.b-button').mouseover(function () {

    //    console.log('.b-button - mouseover');

    //    $(this).find('.b-arr').removeClass('arrowanimation_rev');
    //    $(this).find('.b-arr').addClass('arrowanimation');
    //});
    //$('.b-button').mouseout(function () {

    //    console.log('.b-button - mouseout');

    //    $(this).find('.b-arr').removeClass('arrowanimation');
    //    $(this).find('.b-arr').addClass('arrowanimation_rev');
    //});


    //$('.multi-carousel').mouseover(function () {

    //    console.log('.multi-carousel - mouseover');

    //    $(this).find('.carousel-control-next').removeClass('arrowanimation_rev');
    //    $(this).find('.carousel-control-next').addClass('arrowanimation');
    //});
    //$('.multi-carousel').mouseout(function () {

    //    console.log('.multi-carousel - mouseout');

    //    $(this).find('.carousel-control-next').removeClass('arrowanimation');
    //    $(this).find('.carousel-control-next').addClass('arrowanimation_rev');
    //});



    //$('.appear_effect').scrolling({ offsetTop: -100 });

    //$('.appear_effect').on('scrollin', function (event, $all_elements) {
    //    $(this).animate({ opacity: 1 }, 600);
    //});

    //$('.appear_effect').on('scrollout', function (event, $all_elements) {
    //    $(this).animate({ opacity: 0 }, 200);
    //});

    //$('.spdesc').click(function () {

    //    if ($(this).children('div').children('img').hasClass('rotated')) {
    //        $(this).children('div').children('img').animate({ borderSpacing: '0' }, {
    //            step: function (now, fx) {
    //                $(this).css('transform', 'rotate(' + now + 'deg)');
    //            },
    //            duration: 'slow'
    //        }, 'linear');

    //        $(this).children('.spdesc_par').children('.parhide').fadeToggle();
    //        $(this).children('.spdesc_par').children('.elipsis').delay(600).fadeToggle();

    //        if ($(this).find('i').hasClass('bottom')) {
    //            $(this).find('i').removeClass('bottom');
    //            $(this).find('i').addClass('top');
    //        }
    //        else {
    //            $(this).find('i').removeClass('top');
    //            $(this).find('i').addClass('bottom');
    //        }


    //    }
    //    else {

    //        $(this).children('div').children('img').animate({ borderSpacing: '+180' }, {
    //            step: function (now, fx) {
    //                $(this).css('transform', 'rotate(' + now + 'deg)');
    //            },
    //            duration: 'slow'
    //        }, 'linear');

    //        $(this).children('.spdesc_par').children('.parhide').fadeToggle();
    //        $(this).children('.spdesc_par').children('.elipsis').toggle();


    //        if ($(this).find('i').hasClass('bottom')) {
    //            $(this).find('i').removeClass('bottom');
    //            $(this).find('i').addClass('top');
    //        }
    //        else {
    //            $(this).find('i').removeClass('top');
    //            $(this).find('i').addClass('bottom');
    //        }


    //    }

    //});

    //$('.spdesc').mouseover(function () {
    //    $(this).children('h1').addClass('green');
    //    $(this).children('div').children('.descarrbig').hide();
    //    $(this).children('div').children('.descarrbig.grn').show();
    //});

    //$('.spdesc').mouseout(function () {
    //    $(this).children('h1').removeClass('green');
    //    $(this).children('div').children('.descarrbig').show();
    //    $(this).children('div').children('.descarrbig.grn').hide();
    //});



    // $('.hp-help').mouseenter(function () {

    //     $(this).find('.blob1').addClass('change').delay(5000).queue(function () {
    //         $(this).find('.blob1').removeClass('change').dequeue();
    //     });

    //     var degree = 70;
    //     var $blob = $(this).find('.blob2');

    //     rotateBlobRandom($blob, 2, 5);

    //     function rotateBlobRandom(bbox, i, x) {

    //         if (i > x) return;

    //         var number = 0;
    //         if (i % 2 == 0) {
    //             number = 135;
    //         } else {
    //             number = 45;
    //         }

    //         bbox.css({ WebkitTransform: 'rotate(' + number + 'deg)' });
    //         bbox.css({ '-moz-transform': 'rotate(' + number +'deg)' });

    //         setTimeout(function () {
    //             rotateBlobRandom(bbox, i+1, x);
    //         }, 1500);

    //     }

    // });


  


       AOS.init({
            easing: 'ease-out-back',
				duration: 1000
			});



    hljs.initHighlightingOnLoad();

    $('.sectionarrow').on('click', function (e) {
        $('html, body').animate({
            scrollTop: (800)
        }, 300);
    });





    maxWidthArrowsTraining();
    maxHeightArrowColumnsTraining();

    maxWidthArrowsHome();
    maxHeightArrowColumnsHome();










    $(".inbox .clockbutton").each(function () {

        console.log('clockbutton each')

        var width = $(this).width();
        console.log('clockbutton width: ' + width);





        if (width > 200) {

            console.log('more 200');

            if ($(this).hasClass("wide-r")) {
                $(this).css({ left: '-6%' });
            }
            


            if ($(this).parent().parent().parent().parent().parent().parent().find('.label-btn').length) {

                $(this).parent().parent().parent().parent().parent()
                    .css('bottom', (width - 90) + 'px')
                    .css('margin-top', '3rem');

                $(this).parent().parent().parent().parent().parent().parent().find('.label-btn')
                    .css('height', (width + 20) + 'px')
                    .css('top', '10px')
                    .css('left', '66%')
                    .css('width', (width + 110) + 'px');

            }
            else if ($(this).parent().parent().parent().parent().parent().parent().find('.label-box-btn').length) {


                $(this).parent().parent().parent().parent().parent()
                    .css('bottom', (width - 90) + 'px')
                    .css('top', '-3rem');

                $(this).parent().parent().parent().parent().parent().parent().find('.label-box-btn')
                    .css('height', (width + 20) + 'px')
                    .css('top', '10px')
                    .css('left', '-50px')
                    .css('width', (width + 110) + 'px');

            }


        }
        else if ((width > 135) && (width < 200)) {

            console.log('more 135');
            $(this).css({ left: '-18%' });

            if ($(this).parent().parent().parent().parent().parent().parent().find('.label-btn').length) {


                $(this).parent().parent().parent().parent().parent()
                    .css('bottom', (width - 90) + 'px')
                    .css('margin-top', '0');

                $(this).parent().parent().parent().parent().parent().parent().find('.label-btn')
                    .css('height', (width + 40) + 'px')
                    .css('bottom', '-80px')
                    .css('left', '66%')
                    .css('width', (width + 130) + 'px');

            }
            else if ($(this).parent().parent().parent().parent().parent().parent().find('.label-box-btn').length) {


                $(this).parent().parent().parent().parent().parent()
                    .css('bottom', (width - 90) + 'px')
                    .css('margin-top', '6rem');

                $(this).parent().parent().parent().parent().parent().parent().find('.label-box-btn')
                    .css('height', (width + 40) + 'px')
                    .css('bottom', '10px')
                    .css('left', '-40px')
                    .css('width', (width + 150) + 'px');

            }


        }
        else if ((width > 110) && (width < 135)) {

            console.log('more 110');
            

            if ($(this).hasClass("wide-r")) {
                $(this).css({ left: '-14%' });
            }


            $(this).parent().parent().parent().parent().parent()
                .css('bottom', (width - 110) + 'px')
                .css('margin-top', '0');

            $(this).parent().parent().parent().parent().parent().parent().find('.label-btn')
                .css('height', (width + 40) + 'px')
                .css('bottom', '-100px')
                .css('left', '66%')
                .css('width', (width + 140) + 'px');


        }
        else if ((width > 100) && (width < 110)) {
            console.log('more 100');
            $(this).css({ left: '-13%' });

            $(this).parent().parent().parent().parent().parent()
                .css('bottom', (width - 90) + 'px')
                .css('margin-top', '0');

            $(this).parent().parent().parent().parent().parent().parent().find('.label-btn')
                .css('height', (width + 40) + 'px')
                .css('bottom', '-90px')
                .css('left', '69%')
                .css('width', (width + 115) + 'px');


        }
        else if ((width > 80) && (width < 100)) {
            console.log('more 80');
            $(this).css({ left: '-12%' });

            $(this).parent().parent().parent().parent().parent()
                .css('bottom', (width - 90) + 'px')
                .css('margin-top', '0');

            $(this).parent().parent().parent().parent().parent().parent().find('.label-btn')
                .css('height', (width + 40) + 'px')
                .css('bottom', '-90px')
                .css('left', '71%')
                .css('width', (width + 110) + 'px');


        }


        //else if (width > 98) {
        //    console.log('more 98');
        //    $(this).css({ left: '-10%' });
        //    $(this).parent().parent().parent().parent().parent()
        //        .css('margin-bottom', '6rem')
        //        .css('margin-top', '2rem')
        //}

    });







    $('.t-solution ul li').each(function () {

        var res = $(this).html();
        var newText = "";

        console.log('li');
        console.log(res);

        //newText = '<li class="row"><div class="col c-text">' + res + '</div><div class="col-2 c-arrow"><i class="chevron left"></i></div></li>';

        newText = '<li><div class="item-move"><div class="conbox"><span class="blob3" style="transform: rotate(-70deg);">.</span>' + res +'</div></div></li>';


        $(this).replaceWith(newText);

    });






    $("div.item-move").mouseenter(function () {

        $(this).addClass('move');

        var degree = 180;
        var $blob = $(this).find('.blob3');

        $blob.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
        $blob.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

        rotateBlob($blob, 0, -150);

        console.log('p.tech end')

        function rotateBlob(bbox, i, x) {

            console.log('p.tech rotateBlob')

            if (i < x) return;

            degree = i;
            bbox.css('left', i + 'px');

            setTimeout(function () {
                rotateBlob(bbox, i - 5, x);
            }, 20);

            console.log('p.tech rotateBlob end')

        }


    });

    $("div.item-move").mouseleave(function () {

        console.log('p.tech')

        var degree = 70;
        var $blob = $(this).find('.blob3');

        rotateBlobRevert($blob, -150, 0);

        //$blob.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
        //$blob.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

        $blob.css({ WebkitTransform: 'rotate(-70deg)' });
        $blob.css({ '-moz-transform': 'rotate(-70deg)' });

        console.log('p.tech end')

        function rotateBlobRevert(bbox, i, x) {

            console.log('p.tech rotateBlobRevert')

            if (i > x) return;

            degree = i;
            bbox.css('left', i + 'px');

            setTimeout(function () {
                rotateBlobRevert(bbox, i + 5, x);
            }, 20);

            console.log('p.tech rotateBlobRevert end')

        }


    });











});


function maxWidthArrowsTraining() {

        console.log('start Width Setup comp-5');
        var maxWidth = 0;

    $('.training-bar #comp-5 .clockbutton').each(function (index) {

            var currentMaxWidth = parseInt($(this).width(), 10);
            console.log('currentMaxWidth: ' + currentMaxWidth);

            if (currentMaxWidth > maxWidth) {
                maxWidth = currentMaxWidth;
            }

        });

    $('.training-bar #comp-5 .clockbutton').each(function (index) {
        $(this).css('width', (maxWidth + 25) + 'px')
            .css('left', 0).css('text-align', 'center');
    });

    $('.training-bar #comp-5 .clocktitle').each(function (index) {
        $(this).css('width', (maxWidth + 25) + 'px').css('text-align', 'center');;
    });
    
    
        console.log('maxWidth: ' + maxWidth);
        console.log('end Width Setup comp-5');

}


function maxHeightArrowColumnsTraining() {

    console.log('start Height Setup comp-5');
    var maxHeight = 0;

    maxHeight = parseInt($('.training-bar #comp-5').parent().parent().height(), 10) + 80;

    console.log('maxHeight: ' + maxHeight);
    $('.training-bar .col-4').each(function () {

        var contentHeight = $(this).find('.col-content').height();
        var boxHeight = maxHeight - contentHeight;

        $(this).find('.col-arrow').css('height', (boxHeight) + 'px');
        console.log('boxHeight: ' + boxHeight);

    });

    var minHeight = 10000000;

    $('.training-bar .col-4 .col-arrow').each(function () {
        
        var currentMinWidth = parseInt($(this).height(), 10);
        console.log('currentMinWidth: ' + currentMinWidth);

        if (currentMinWidth < minHeight) {
            minHeight = currentMinWidth;
        }

    });

    console.log('minHeight: ' + minHeight);

    $('.training-bar .col-4 .col-arrow').each(function () {

        var currentHeight = parseInt($(this).height(), 10);
        var finalHeight = currentHeight - minHeight;

        $(this).find('#comp-5').css('margin-top', (finalHeight) + 'px');

    });

    console.log('end Height Setup comp-5');

}



function maxWidthArrowsHome() {

    console.log('start Width Setup comp-5');
    var maxWidth = 0;

    $('.row-h.services #comp-5 .clockbutton').each(function (index) {

        var currentMaxWidth = parseInt($(this).width(), 10);
        console.log('currentMaxWidth: ' + currentMaxWidth);

        if (currentMaxWidth > maxWidth) {
            maxWidth = currentMaxWidth;
        }

    });

    $('.row-h.services #comp-5 .clockbutton').each(function (index) {
        $(this).css('width', (maxWidth + 25) + 'px')
            .css('left', 0).css('text-align', 'center');
    });

    $('.row-h.services #comp-5 .clocktitle').each(function (index) {
        $(this).css('width', (maxWidth + 25) + 'px').css('text-align', 'center');;
    });


    console.log('maxWidth: ' + maxWidth);
    console.log('end Width Setup comp-5');

}


function maxHeightArrowColumnsHome() {

    console.log('start Height Setup comp-5');
    var maxHeight = 0;

    maxHeight = parseInt($('.row-h.services #comp-5').parent().parent().height(), 10) + 80;

    console.log('maxHeight: ' + maxHeight);
    $('.row-h.services .col-4').each(function () {

        var contentHeight = $(this).find('.col-content').height();
        var boxHeight = maxHeight - contentHeight;

        $(this).find('.col-arrow').css('height', (boxHeight) + 'px');
        console.log('boxHeight: ' + boxHeight);

    });

    var minHeight = 10000000;

    $('.row-h.services .col-4 .col-arrow').each(function () {

        var currentMinWidth = parseInt($(this).height(), 10);
        console.log('currentMinWidth: ' + currentMinWidth);

        if (currentMinWidth < minHeight) {
            minHeight = currentMinWidth;
        }

    });

    console.log('minHeight: ' + minHeight);

    $('.row-h.services .col-4 .col-arrow').each(function () {

        var currentHeight = parseInt($(this).height(), 10);
        var finalHeight = currentHeight - minHeight;

        $(this).find('#comp-5').css('margin-top', (finalHeight) + 'px');

    });

    console.log('end Height Setup comp-5');

}





function ourWorkArrows() {

    $(".testimonial_link").each(function () {

        console.log('testimonial_link each')

        var height = $(this).height();
        console.log('testimonial_link height: ' + height);

        if (height > 120) {
            console.log('more 120');
            $(this).find('.chevron').addClass('cent');
        }

    });

}