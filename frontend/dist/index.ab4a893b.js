/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */ !function(e1, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e1.document ? t(e1, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e1);
}("undefined" != typeof window ? window : this, function(C1, e2) {
    "use strict";
    var t1 = [], r1 = Object.getPrototypeOf, s1 = t1.slice, g1 = t1.flat ? function(e) {
        return t1.flat.call(e);
    } : function(e) {
        return t1.concat.apply([], e);
    }, u1 = t1.push, i1 = t1.indexOf, n1 = {
    }, o1 = n1.toString, v1 = n1.hasOwnProperty, a1 = v1.toString, l1 = a1.call(Object), y1 = {
    }, m1 = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    }, x1 = function(e) {
        return null != e && e === e.window;
    }, E1 = C1.document, c1 = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b1(e, t, n) {
        var r, i, o = (n = n || E1).createElement("script");
        if (o.text = e, t) for(r in c1)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w1(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n1[o1.call(e)] || "object" : typeof e;
    }
    var f1 = "3.6.0", S1 = function(e, t) {
        return new S1.fn.init(e, t);
    };
    function p1(e) {
        var t = !!e && "length" in e && e.length, n = w1(e);
        return !m1(e) && !x1(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }
    S1.fn = S1.prototype = {
        jquery: f1,
        constructor: S1,
        length: 0,
        toArray: function() {
            return s1.call(this);
        },
        get: function(e) {
            return null == e ? s1.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = S1.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return S1.each(this, e);
        },
        map: function(n) {
            return this.pushStack(S1.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(s1.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(S1.grep(this, function(e, t) {
                return (t + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(S1.grep(this, function(e, t) {
                return t % 2;
            }));
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [
                this[n]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: u1,
        sort: t1.sort,
        splice: t1.splice
    }, S1.extend = S1.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {
        }, s = 1, u = arguments.length, l = !1;
        for("boolean" == typeof a && (l = a, a = arguments[s] || {
        }, s++), "object" == typeof a || m1(a) || (a = {
        }), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for(t in e)r = e[t], "__proto__" !== t && a !== r && (l && r && (S1.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S1.isPlainObject(n) ? n : {
        }, i = !1, a[t] = S1.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, S1.extend({
        expando: "jQuery" + (f1 + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o1.call(e)) && (!(t = r1(e)) || "function" == typeof (n = v1.call(t, "constructor") && t.constructor) && a1.call(n) === l1);
        },
        isEmptyObject: function(e) {
            var t;
            for(t in e)return !1;
            return !0;
        },
        globalEval: function(e, t, n) {
            b1(e, {
                nonce: t && t.nonce
            }, n);
        },
        each: function(e, t) {
            var n, r = 0;
            if (p1(e)) {
                for(n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break;
            } else for(r in e)if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p1(Object(e)) ? S1.merge(n, "string" == typeof e ? [
                e
            ] : e) : u1.call(n, e)), n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i1.call(t, e, n);
        },
        merge: function(e, t) {
            for(var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for(var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]);
            return r;
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p1(e)) for(r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i);
            else for(o in e)null != (i = t(e[o], o, n)) && a.push(i);
            return g1(a);
        },
        guid: 1,
        support: y1
    }), "function" == typeof Symbol && (S1.fn[Symbol.iterator] = t1[Symbol.iterator]), S1.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n1["[object " + t + "]"] = t.toLowerCase();
    });
    var d1 = function(n2) {
        var e3, d2, b, o2, i2, h2, f2, g2, w, u2, l2, T, C, a2, E, v2, s2, c2, y2, S = "sizzle" + 1 * new Date, p2 = n2.document, k = 0, r2 = 0, m2 = ue(), x2 = ue(), A = ue(), N = ue(), j = function(e, t) {
            return e === t && (l2 = !0), 0;
        }, D = {
        }.hasOwnProperty, t2 = [], q = t2.pop, L = t2.push, H = t2.push, O = t2.slice, P = function(e, t) {
            for(var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n;
            return -1;
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, oe = function() {
            T();
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t2 = O.call(p2.childNodes), p2.childNodes), t2[p2.childNodes.length].nodeType;
        } catch (e4) {
            H = {
                apply: t2.length ? function(e, t) {
                    L.apply(e, O.call(t));
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while(e[n++] = t[r++]);
                    e.length = n - 1;
                }
            };
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t))) {
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (f && (a = f.getElementById(i)) && y2(e, a) && a.id === i) return n.push(a), n;
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d2.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
                    }
                }
                if (d2.qsa && !N[t + " "] && (!v2 || !v2.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d2.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h2(t)).length;
                        while(o--)l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",");
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e5) {
                        N(t, !0);
                    } finally{
                        s === S && e.removeAttribute("id");
                    }
                }
            }
            return g2(t.replace($, "$1"), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
            };
        }
        function le(e) {
            return e[S] = !0, e;
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e7) {
                return !1;
            } finally{
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function fe(e, t) {
            var n = e.split("|"), r = n.length;
            while(r--)b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) {
                while(n = n.nextSibling)if (n === t) return -1;
            }
            return e ? 1 : -1;
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while(i--)e[n = r[i]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for(e3 in d2 = se.support = {
        }, i2 = se.isXML = function(e) {
            var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML");
        }, T = se.setDocument = function(e8) {
            var t3, n3, r3 = e8 ? e8.ownerDocument || e8 : p2;
            return r3 != C && 9 === r3.nodeType && r3.documentElement && (a2 = (C = r3).documentElement, E = !i2(C), p2 != C && (n3 = C.defaultView) && n3.top !== n3 && (n3.addEventListener ? n3.addEventListener("unload", oe, !1) : n3.attachEvent && n3.attachEvent("onunload", oe)), d2.scope = ce(function(e) {
                return a2.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
            }), d2.attributes = ce(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), d2.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
            }), d2.getElementsByClassName = K.test(C.getElementsByClassName), d2.getById = ce(function(e) {
                return a2.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
            }), d2.getById ? (b.filter.ID = function(e9) {
                var t = e9.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [
                        n
                    ] : [];
                }
            }) : (b.filter.ID = function(e10) {
                var n = e10.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [
                            o
                        ];
                        i = t.getElementsByName(e), r = 0;
                        while(o = i[r++])if ((n = o.getAttributeNode("id")) && n.value === e) return [
                            o
                        ];
                    }
                    return [];
                }
            }), b.find.TAG = d2.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d2.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while(n = o[i++])1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, b.find.CLASS = d2.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
            }, s2 = [], v2 = [], (d2.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a2.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v2.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v2.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v2.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v2.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v2.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v2.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v2.push("[\\r\\n\\f]");
            }), ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v2.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v2.push(":enabled", ":disabled"), a2.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v2.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v2.push(",.*:");
            })), (d2.matchesSelector = K.test(c2 = a2.matches || a2.webkitMatchesSelector || a2.mozMatchesSelector || a2.oMatchesSelector || a2.msMatchesSelector)) && ce(function(e) {
                d2.disconnectedMatch = c2.call(e, "*"), c2.call(e, "[s!='']:x"), s2.push("!=", F);
            }), v2 = v2.length && new RegExp(v2.join("|")), s2 = s2.length && new RegExp(s2.join("|")), t3 = K.test(a2.compareDocumentPosition), y2 = t3 || K.test(a2.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) {
                    while(t = t.parentNode)if (t === e) return !0;
                }
                return !1;
            }, j = t3 ? function(e, t) {
                if (e === t) return l2 = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d2.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p2 && y2(p2, e) ? -1 : t == C || t.ownerDocument == p2 && y2(p2, t) ? 1 : u2 ? P(u2, e) - P(u2, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return l2 = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [
                    e
                ], s = [
                    t
                ];
                if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u2 ? P(u2, e) - P(u2, t) : 0;
                if (i === o) return pe(e, t);
                n = e;
                while(n = n.parentNode)a.unshift(n);
                n = t;
                while(n = n.parentNode)s.unshift(n);
                while(a[r] === s[r])r++;
                return r ? pe(a[r], s[r]) : a[r] == p2 ? -1 : s[r] == p2 ? 1 : 0;
            }), C;
        }, se.matches = function(e, t) {
            return se(e, null, null, t);
        }, se.matchesSelector = function(e, t) {
            if (T(e), d2.matchesSelector && E && !N[t + " "] && (!s2 || !s2.test(t)) && (!v2 || !v2.test(t))) try {
                var n = c2.call(e, t);
                if (n || d2.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e11) {
                N(t, !0);
            }
            return 0 < se(t, C, null, [
                e
            ]).length;
        }, se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e), y2(e, t);
        }, se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()], r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d2.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, se.escape = function(e) {
            return (e + "").replace(re, ie);
        }, se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l2 = !d2.detectDuplicates, u2 = !d2.sortStable && e.slice(0), e.sort(j), l2) {
                while(t = e[i++])t === e[i] && (r = n.push(i));
                while(r--)e.splice(n[r], 1);
            }
            return u2 = null, e;
        }, o2 = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for(e = e.firstChild; e; e = e.nextSibling)n += o2(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else while(t = e[r++])n += o2(t);
            return n;
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {
            },
            find: {
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h2(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e12) {
                    var t = e12.replace(te, ne).toLowerCase();
                    return "*" === e12 ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e13) {
                    var t = m2[e13 + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e13 + "(" + M + "|$)"), m2(e13, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    }));
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(h, e14, t, g, v) {
                    var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e14;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while(l){
                                    a = e;
                                    while(a = a[l])if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling";
                                }
                                return !0;
                            }
                            if (u = [
                                m ? c.firstChild : c.lastChild
                            ], m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {
                                }))[a.uniqueID] || (o[a.uniqueID] = {
                                }))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                while(a = ++s && a && a[l] || (d = s = 0) || u.pop())if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [
                                        k,
                                        s,
                                        d
                                    ];
                                    break;
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {
                            }))[a.uniqueID] || (o[a.uniqueID] = {
                            }))[h] || [])[0] === k && r[1]), !1 === d) {
                                while(a = ++s && a && a[l] || (d = s = 0) || u.pop())if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {
                                }))[a.uniqueID] || (o[a.uniqueID] = {
                                }))[h] = [
                                    k,
                                    d
                                ]), a === e)) break;
                            }
                            return (d -= v) === g || d % g == 0 && 0 <= d / g;
                        }
                    };
                },
                PSEUDO: function(e15, o) {
                    var t4, a = b.pseudos[e15] || b.setFilters[e15.toLowerCase()] || se.error("unsupported pseudo: " + e15);
                    return a[S] ? a(o) : 1 < a.length ? (t4 = [
                        e15,
                        e15,
                        "",
                        o
                    ], b.setFilters.hasOwnProperty(e15.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while(i--)e[n = P(e, r[i])] = !(t[n] = r[i]);
                    }) : function(e) {
                        return a(e, 0, t4);
                    }) : a;
                }
            },
            pseudos: {
                not: le(function(e16) {
                    var r4 = [], i3 = [], s = f2(e16.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while(a--)(i = o[a]) && (e[a] = !(t[a] = i));
                    }) : function(e, t, n) {
                        return r4[0] = e, s(r4, null, n, i3), r4[0] = null, !i3.pop();
                    };
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length;
                    };
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne), function(e) {
                        return -1 < (e.textContent || o2(e)).indexOf(t);
                    };
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        }while ((e = e.parentNode) && 1 === e.nodeType)
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n2.location && n2.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === a2;
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for(e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !b.pseudos.empty(e);
                },
                header: function(e) {
                    return J.test(e.nodeName);
                },
                input: function(e) {
                    return Q.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ve(function() {
                    return [
                        0
                    ];
                }),
                last: ve(function(e, t) {
                    return [
                        t - 1
                    ];
                }),
                eq: ve(function(e, t, n) {
                    return [
                        n < 0 ? n + t : n
                    ];
                }),
                even: ve(function(e, t) {
                    for(var n = 0; n < t; n += 2)e.push(n);
                    return e;
                }),
                odd: ve(function(e, t) {
                    for(var n = 1; n < t; n += 2)e.push(n);
                    return e;
                }),
                lt: ve(function(e, t, n) {
                    for(var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r);
                    return e;
                }),
                gt: ve(function(e, t, n) {
                    for(var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })b.pseudos[e3] = de(e3);
        for(e3 in {
            submit: !0,
            reset: !0
        })b.pseudos[e3] = he(e3);
        function me() {
        }
        function xe(e) {
            for(var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
            return r;
        }
        function be(s, e17, t5) {
            var u = e17.dir, l = e17.next, c = l || u, f = t5 && "parentNode" === c, p = r2++;
            return e17.first ? function(e, t, n) {
                while(e = e[u])if (1 === e.nodeType || f) return s(e, t, n);
                return !1;
            } : function(e, t, n) {
                var r, i, o, a = [
                    k,
                    p
                ];
                if (n) {
                    while(e = e[u])if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                } else while(e = e[u])if (1 === e.nodeType || f) {
                    if (i = (o = e[S] || (e[S] = {
                    }))[e.uniqueID] || (o[e.uniqueID] = {
                    }), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                    else {
                        if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                        if ((i[c] = a)[2] = s(e, t, n)) return !0;
                    }
                }
                return !1;
            };
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while(r--)if (!i[r](e, t, n)) return !1;
                return !0;
            } : i[0];
        }
        function Te(e, t, n, r, i) {
            for(var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, v, y, e18) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e18)), le(function(e19, t6, n4, r5) {
                var i4, o, a, s = [], u = [], l = t6.length, c = e19 || function(e, t, n) {
                    for(var r = 0, i = t.length; r < i; r++)se(e, t[r], n);
                    return n;
                }(h || "*", n4.nodeType ? [
                    n4
                ] : n4, []), f = !d || !e19 && h ? c : Te(c, s, d, n4, r5), p = g ? y || (e19 ? d : l || v) ? [] : t6 : f;
                if (g && g(f, p, n4, r5), v) {
                    i4 = Te(p, u), v(i4, [], n4, r5), o = i4.length;
                    while(o--)(a = i4[o]) && (p[u[o]] = !(f[u[o]] = a));
                }
                if (e19) {
                    if (y || d) {
                        if (y) {
                            i4 = [], o = p.length;
                            while(o--)(a = p[o]) && i4.push(f[o] = a);
                            y(null, p = [], i4, r5);
                        }
                        o = p.length;
                        while(o--)(a = p[o]) && -1 < (i4 = y ? P(e19, a) : s[o]) && (e19[i4] = !(t6[i4] = a));
                    }
                } else p = Te(p === t6 ? p.splice(l, p.length) : p), y ? y(null, t6, p, r5) : H.apply(t6, p);
            });
        }
        function Ee(e20) {
            for(var i, t7, n5, r6 = e20.length, o = b.relative[e20[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i;
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e);
            }, a, !0), c = [
                function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r;
                }
            ]; s < r6; s++)if (t7 = b.relative[e20[s].type]) c = [
                be(we(c), t7)
            ];
            else {
                if ((t7 = b.filter[e20[s].type].apply(null, e20[s].matches))[S]) {
                    for(n5 = ++s; n5 < r6; n5++)if (b.relative[e20[n5].type]) break;
                    return Ce(1 < s && we(c), 1 < s && xe(e20.slice(0, s - 1).concat({
                        value: " " === e20[s - 2].type ? "*" : ""
                    })).replace($, "$1"), t7, s < n5 && Ee(e20.slice(s, n5)), n5 < r6 && Ee(e20 = e20.slice(n5)), n5 < r6 && xe(e20));
                }
                c.push(t7);
            }
            return we(c);
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h2 = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x2[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while(a){
                for(o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }), a = a.slice(n.length)), b.filter)!(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : x2(e, s).slice(0);
        }, f2 = se.compile = function(e21, t8) {
            var n6, v, y, m, x, r7, i5 = [], o3 = [], a3 = A[e21 + " "];
            if (!a3) {
                t8 || (t8 = h2(e21)), n6 = t8.length;
                while(n6--)(a3 = Ee(t8[n6]))[S] ? i5.push(a3) : o3.push(a3);
                (a3 = A(e21, (v = o3, m = 0 < (y = i5).length, x = 0 < v.length, r7 = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || 0.1, g = d.length;
                    for(i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++){
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while(s = v[a++])if (s(o, t || C, n)) {
                                r.push(o);
                                break;
                            }
                            i && (k = h);
                        }
                        m && ((o = !s && o) && u--, e && c.push(o));
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while(s = y[a++])s(c, f, t, n);
                        if (e) {
                            if (0 < u) while(l--)c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f);
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                    }
                    return i && (k = h, w = p), c;
                }, m ? le(r7) : r7))).selector = e21;
            }
            return a3;
        }, g2 = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h2(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while(i--){
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break;
                    }
                }
            }
            return (l || f2(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
        }, d2.sortStable = S.split("").sort(j).join("") === S, d2.detectDuplicates = !!l2, T(), d2.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), d2.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ce(function(e) {
            return null == e.getAttribute("disabled");
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), se;
    }(C1);
    S1.find = d1, S1.expr = d1.selectors, S1.expr[":"] = S1.expr.pseudos, S1.uniqueSort = S1.unique = d1.uniqueSort, S1.text = d1.getText, S1.isXMLDoc = d1.isXML, S1.contains = d1.contains, S1.escapeSelector = d1.escape;
    var h1 = function(e, t, n) {
        var r = [], i = void 0 !== n;
        while((e = e[t]) && 9 !== e.nodeType)if (1 === e.nodeType) {
            if (i && S1(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, T1 = function(e, t) {
        for(var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, k1 = S1.expr.match.needsContext;
    function A1(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N1 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j1(e22, n, r) {
        return m1(n) ? S1.grep(e22, function(e, t) {
            return !!n.call(e, t, e) !== r;
        }) : n.nodeType ? S1.grep(e22, function(e) {
            return e === n !== r;
        }) : "string" != typeof n ? S1.grep(e22, function(e) {
            return -1 < i1.call(n, e) !== r;
        }) : S1.filter(n, e22, r);
    }
    S1.filter = function(e23, t, n) {
        var r = t[0];
        return n && (e23 = ":not(" + e23 + ")"), 1 === t.length && 1 === r.nodeType ? S1.find.matchesSelector(r, e23) ? [
            r
        ] : [] : S1.find.matches(e23, S1.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, S1.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(S1(e).filter(function() {
                for(t = 0; t < r; t++)if (S1.contains(i[t], this)) return !0;
            }));
            for(n = this.pushStack([]), t = 0; t < r; t++)S1.find(e, i[t], n);
            return 1 < r ? S1.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(j1(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(j1(this, e || [], !0));
        },
        is: function(e) {
            return !!j1(this, "string" == typeof e && k1.test(e) ? S1(e) : e || [], !1).length;
        }
    });
    var D1, q1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S1.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D1, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [
                null,
                e,
                null
            ] : q1.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S1 ? t[0] : t, S1.merge(this, S1.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E1, !0)), N1.test(r[1]) && S1.isPlainObject(t)) for(r in t)m1(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = E1.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m1(e) ? void 0 !== n.ready ? n.ready(e) : e(S1) : S1.makeArray(e, this);
    }).prototype = S1.fn, D1 = S1(E1);
    var L1 = /^(?:parents|prev(?:Until|All))/, H1 = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O1(e, t) {
        while((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    S1.fn.extend({
        has: function(e24) {
            var t = S1(e24, this), n = t.length;
            return this.filter(function() {
                for(var e = 0; e < n; e++)if (S1.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S1(e);
            if (!k1.test(e)) {
                for(; r < i; r++)for(n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S1.find.matchesSelector(n, e))) {
                    o.push(n);
                    break;
                }
            }
            return this.pushStack(1 < o.length ? S1.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? i1.call(S1(e), this[0]) : i1.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(S1.uniqueSort(S1.merge(this.get(), S1(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), S1.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return h1(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return h1(e, "parentNode", n);
        },
        next: function(e) {
            return O1(e, "nextSibling");
        },
        prev: function(e) {
            return O1(e, "previousSibling");
        },
        nextAll: function(e) {
            return h1(e, "nextSibling");
        },
        prevAll: function(e) {
            return h1(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return h1(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return h1(e, "previousSibling", n);
        },
        siblings: function(e) {
            return T1((e.parentNode || {
            }).firstChild, e);
        },
        children: function(e) {
            return T1(e.firstChild);
        },
        contents: function(e) {
            return null != e.contentDocument && r1(e.contentDocument) ? e.contentDocument : (A1(e, "template") && (e = e.content || e), S1.merge([], e.childNodes));
        }
    }, function(r, i) {
        S1.fn[r] = function(e, t) {
            var n = S1.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S1.filter(t, n)), 1 < this.length && (H1[r] || S1.uniqueSort(n), L1.test(r) && n.reverse()), this.pushStack(n);
        };
    });
    var P1 = /[^\x20\t\r\n\f]+/g;
    function R1(e) {
        return e;
    }
    function M1(e) {
        throw e;
    }
    function I1(e, t, n, r) {
        var i;
        try {
            e && m1(i = e.promise) ? i.call(e).done(t).fail(n) : e && m1(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [
                e
            ].slice(r));
        } catch (e25) {
            n.apply(void 0, [
                e25
            ]);
        }
    }
    S1.Callbacks = function(r) {
        var e26, n7;
        r = "string" == typeof r ? (e26 = r, n7 = {
        }, S1.each(e26.match(P1) || [], function(e, t) {
            n7[t] = !0;
        }), n7) : S1.extend({
        }, r);
        var i, t9, o, a, s = [], u = [], l = -1, c = function() {
            for(a = a || r.once, o = i = !0; u.length; l = -1){
                t9 = u.shift();
                while(++l < s.length)!1 === s[l].apply(t9[0], t9[1]) && r.stopOnFalse && (l = s.length, t9 = !1);
            }
            r.memory || (t9 = !1), i = !1, a && (s = t9 ? [] : "");
        }, f = {
            add: function() {
                return s && (t9 && !i && (l = s.length - 1, u.push(t9)), (function n(e) {
                    S1.each(e, function(e, t) {
                        m1(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w1(t) && n(t);
                    });
                })(arguments), t9 && !i && c()), this;
            },
            remove: function() {
                return S1.each(arguments, function(e, t) {
                    var n;
                    while(-1 < (n = S1.inArray(t, s, n)))s.splice(n, 1), n <= l && l--;
                }), this;
            },
            has: function(e) {
                return e ? -1 < S1.inArray(e, s) : 0 < s.length;
            },
            empty: function() {
                return s && (s = []), this;
            },
            disable: function() {
                return a = u = [], s = t9 = "", this;
            },
            disabled: function() {
                return !s;
            },
            lock: function() {
                return a = u = [], t9 || i || (s = t9 = ""), this;
            },
            locked: function() {
                return !!a;
            },
            fireWith: function(e, t) {
                return a || (t = [
                    e,
                    (t = t || []).slice ? t.slice() : t
                ], u.push(t), i || c()), this;
            },
            fire: function() {
                return f.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return f;
    }, S1.extend({
        Deferred: function(e27) {
            var o4 = [
                [
                    "notify",
                    "progress",
                    S1.Callbacks("memory"),
                    S1.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    S1.Callbacks("once memory"),
                    S1.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    S1.Callbacks("once memory"),
                    S1.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], i6 = "pending", a4 = {
                state: function() {
                    return i6;
                },
                always: function() {
                    return s3.done(arguments).fail(arguments), this;
                },
                "catch": function(e) {
                    return a4.then(null, e);
                },
                pipe: function() {
                    var i = arguments;
                    return S1.Deferred(function(r) {
                        S1.each(o4, function(e28, t) {
                            var n = m1(i[t[4]]) && i[t[4]];
                            s3[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m1(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [
                                    e
                                ] : arguments);
                            });
                        }), i = null;
                    }).promise();
                },
                then: function(t10, n8, r8) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this, r = arguments, e29 = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, m1(t) ? s ? t.call(e, l(u, o, R1, s), l(u, o, M1, s)) : (u++, t.call(e, l(u, o, R1, s), l(u, o, M1, s), l(u, o, R1, o.notifyWith))) : (a !== R1 && (n = void 0, r = [
                                        e
                                    ]), (s || o.resolveWith)(n, r));
                                }
                            }, t11 = s ? e29 : function() {
                                try {
                                    e29();
                                } catch (e) {
                                    S1.Deferred.exceptionHook && S1.Deferred.exceptionHook(e, t11.stackTrace), u <= i + 1 && (a !== M1 && (n = void 0, r = [
                                        e
                                    ]), o.rejectWith(n, r));
                                }
                            };
                            i ? t11() : (S1.Deferred.getStackHook && (t11.stackTrace = S1.Deferred.getStackHook()), C1.setTimeout(t11));
                        };
                    }
                    return S1.Deferred(function(e) {
                        o4[0][3].add(l(0, e, m1(r8) ? r8 : R1, e.notifyWith)), o4[1][3].add(l(0, e, m1(t10) ? t10 : R1)), o4[2][3].add(l(0, e, m1(n8) ? n8 : M1));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? S1.extend(e, a4) : a4;
                }
            }, s3 = {
            };
            return S1.each(o4, function(e, t) {
                var n = t[2], r = t[5];
                a4[t[1]] = n.add, r && n.add(function() {
                    i6 = r;
                }, o4[3 - e][2].disable, o4[3 - e][3].disable, o4[0][2].lock, o4[0][3].lock), n.add(t[3].fire), s3[t[0]] = function() {
                    return s3[t[0] + "With"](this === s3 ? void 0 : this, arguments), this;
                }, s3[t[0] + "With"] = n.fireWith;
            }), a4.promise(s3), e27 && e27.call(s3, s3), s3;
        },
        when: function(e30) {
            var n = arguments.length, t = n, r = Array(t), i = s1.call(arguments), o = S1.Deferred(), a = function(t) {
                return function(e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s1.call(arguments) : e, --n || o.resolveWith(r, i);
                };
            };
            if (n <= 1 && (I1(e30, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m1(i[t] && i[t].then))) return o.then();
            while(t--)I1(i[t], a(t), o.reject);
            return o.promise();
        }
    });
    var W1 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S1.Deferred.exceptionHook = function(e, t) {
        C1.console && C1.console.warn && e && W1.test(e.name) && C1.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, S1.readyException = function(e) {
        C1.setTimeout(function() {
            throw e;
        });
    };
    var F1 = S1.Deferred();
    function B1() {
        E1.removeEventListener("DOMContentLoaded", B1), C1.removeEventListener("load", B1), S1.ready();
    }
    S1.fn.ready = function(e31) {
        return F1.then(e31)["catch"](function(e) {
            S1.readyException(e);
        }), this;
    }, S1.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S1.readyWait : S1.isReady) || (S1.isReady = !0) !== e && 0 < --S1.readyWait || F1.resolveWith(E1, [
                S1
            ]);
        }
    }), S1.ready.then = F1.then, "complete" === E1.readyState || "loading" !== E1.readyState && !E1.documentElement.doScroll ? C1.setTimeout(S1.ready) : (E1.addEventListener("DOMContentLoaded", B1), C1.addEventListener("load", B1));
    var $1 = function(e32, t, n9, r, i, o, a) {
        var s = 0, u = e32.length, l = null == n9;
        if ("object" === w1(n9)) for(s in i = !0, n9)$1(e32, t, s, n9[s], !0, o, a);
        else if (void 0 !== r && (i = !0, m1(r) || (a = !0), l && (a ? (t.call(e32, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(S1(e), n);
        })), t)) for(; s < u; s++)t(e32[s], n9, a ? r : r.call(e32[s], s, t(e32[s], n9)));
        return i ? e32 : l ? t.call(e32) : u ? t(e32[0], n9) : o;
    }, _1 = /^-ms-/, z1 = /-([a-z])/g;
    function U1(e, t) {
        return t.toUpperCase();
    }
    function X1(e) {
        return e.replace(_1, "ms-").replace(z1, U1);
    }
    var V1 = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G1() {
        this.expando = S1.expando + G1.uid++;
    }
    G1.uid = 1, G1.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {
            }, V1(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X1(t)] = n;
            else for(r in t)i[X1(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X1(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X1) : (t = X1(t)) in r ? [
                        t
                    ] : t.match(P1) || []).length;
                    while(n--)delete r[t[n]];
                }
                (void 0 === t || S1.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S1.isEmptyObject(t);
        }
    };
    var Y1 = new G1, Q1 = new G1, J1 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K1 = /[A-Z]/g;
    function Z1(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) {
            if (r = "data-" + t.replace(K1, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J1.test(i) ? JSON.parse(i) : i);
                } catch (e33) {
                }
                Q1.set(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    S1.extend({
        hasData: function(e) {
            return Q1.hasData(e) || Y1.hasData(e);
        },
        data: function(e, t, n) {
            return Q1.access(e, t, n);
        },
        removeData: function(e, t) {
            Q1.remove(e, t);
        },
        _data: function(e, t, n) {
            return Y1.access(e, t, n);
        },
        _removeData: function(e, t) {
            Y1.remove(e, t);
        }
    }), S1.fn.extend({
        data: function(n, e35) {
            var t12, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q1.get(o), 1 === o.nodeType && !Y1.get(o, "hasDataAttrs"))) {
                    t12 = a.length;
                    while(t12--)a[t12] && 0 === (r = a[t12].name).indexOf("data-") && (r = X1(r.slice(5)), Z1(o, r, i[r]));
                    Y1.set(o, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof n ? this.each(function() {
                Q1.set(this, n);
            }) : $1(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q1.get(o, n)) ? t : void 0 !== (t = Z1(o, n)) ? t : void 0;
                this.each(function() {
                    Q1.set(this, n, e);
                });
            }, null, e35, 1 < arguments.length, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                Q1.remove(this, e);
            });
        }
    }), S1.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y1.get(e, t), n && (!r || Array.isArray(n) ? r = Y1.access(e, t, S1.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S1.queue(e, t), r = n.length, i = n.shift(), o = S1._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S1.dequeue(e, t);
            }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y1.get(e, n) || Y1.access(e, n, {
                empty: S1.Callbacks("once memory").add(function() {
                    Y1.remove(e, [
                        t + "queue",
                        n
                    ]);
                })
            });
        }
    }), S1.fn.extend({
        queue: function(t, n) {
            var e36 = 2;
            return "string" != typeof t && (n = t, t = "fx", e36--), arguments.length < e36 ? S1.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S1.queue(this, t, n);
                S1._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S1.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                S1.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = S1.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [
                    o
                ]);
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while(a--)(n = Y1.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    var ee1 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te1 = new RegExp("^(?:([+-])=|)(" + ee1 + ")([a-z%]*)$", "i"), ne1 = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ], re1 = E1.documentElement, ie1 = function(e) {
        return S1.contains(e.ownerDocument, e);
    }, oe1 = {
        composed: !0
    };
    re1.getRootNode && (ie1 = function(e) {
        return S1.contains(e.ownerDocument, e) || e.getRootNode(oe1) === e.ownerDocument;
    });
    var ae1 = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie1(e) && "none" === S1.css(e, "display");
    };
    function se1(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return S1.css(e, t, "");
        }, u = s(), l = n && n[3] || (S1.cssNumber[t] ? "" : "px"), c = e.nodeType && (S1.cssNumber[t] || "px" !== l && +u) && te1.exec(S1.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while(a--)S1.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), c /= o;
            c *= 2, S1.style(e, t, c + l), n = n || [];
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }
    var ue1 = {
    };
    function le1(e, t) {
        for(var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y1.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae1(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue1[s]) || (o = a.body.appendChild(a.createElement(s)), u = S1.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue1[s] = u)))) : "none" !== n && (l[c] = "none", Y1.set(r, "display", n)));
        for(c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    S1.fn.extend({
        show: function() {
            return le1(this, !0);
        },
        hide: function() {
            return le1(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae1(this) ? S1(this).show() : S1(this).hide();
            });
        }
    });
    var ce1, fe1, pe1 = /^(?:checkbox|radio)$/i, de1 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he1 = /^$|^module$|\/(?:java|ecma)script/i;
    ce1 = E1.createDocumentFragment().appendChild(E1.createElement("div")), (fe1 = E1.createElement("input")).setAttribute("type", "radio"), fe1.setAttribute("checked", "checked"), fe1.setAttribute("name", "t"), ce1.appendChild(fe1), y1.checkClone = ce1.cloneNode(!0).cloneNode(!0).lastChild.checked, ce1.innerHTML = "<textarea>x</textarea>", y1.noCloneChecked = !!ce1.cloneNode(!0).lastChild.defaultValue, ce1.innerHTML = "<option></option>", y1.option = !!ce1.lastChild;
    var ge1 = {
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    function ve1(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A1(e, t) ? S1.merge([
            e
        ], n) : n;
    }
    function ye1(e, t) {
        for(var n = 0, r = e.length; n < r; n++)Y1.set(e[n], "globalEval", !t || Y1.get(t[n], "globalEval"));
    }
    ge1.tbody = ge1.tfoot = ge1.colgroup = ge1.caption = ge1.thead, ge1.th = ge1.td, y1.option || (ge1.optgroup = ge1.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
    ]);
    var me1 = /<|&#?\w+;/;
    function xe1(e, t, n, r, i) {
        for(var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) {
            if ("object" === w1(o)) S1.merge(p, o.nodeType ? [
                o
            ] : o);
            else if (me1.test(o)) {
                a = a || f.appendChild(t.createElement("div")), s = (de1.exec(o) || [
                    "",
                    ""
                ])[1].toLowerCase(), u = ge1[s] || ge1._default, a.innerHTML = u[1] + S1.htmlPrefilter(o) + u[2], c = u[0];
                while(c--)a = a.lastChild;
                S1.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
            } else p.push(t.createTextNode(o));
        }
        f.textContent = "", d = 0;
        while(o = p[d++])if (r && -1 < S1.inArray(o, r)) i && i.push(o);
        else if (l = ie1(o), a = ve1(f.appendChild(o), "script"), l && ye1(a), n) {
            c = 0;
            while(o = a[c++])he1.test(o.type || "") && n.push(o);
        }
        return f;
    }
    var be1 = /^([^.]*)(?:\.(.+)|)/;
    function we1() {
        return !0;
    }
    function Te1() {
        return !1;
    }
    function Ce1(e, t) {
        return e === (function() {
            try {
                return E1.activeElement;
            } catch (e) {
            }
        })() == ("focus" === t);
    }
    function Ee1(e37, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for(s in "string" != typeof n && (r = r || n, n = void 0), t)Ee1(e37, s, n, r, t[s], o);
            return e37;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te1;
        else if (!i) return e37;
        return 1 === o && (a = i, (i = function(e) {
            return S1().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S1.guid++)), e37.each(function() {
            S1.event.add(this, t, i, r, n);
        });
    }
    function Se(e38, i, o) {
        o ? (Y1.set(e38, i, !1), S1.event.add(e38, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y1.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length) (S1.event.special[i] || {
                    }).delegateType && e.stopPropagation();
                    else if (r = s1.call(arguments), Y1.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y1.get(this, i)) || t ? Y1.set(this, i, !1) : n = {
                    }, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
                } else r.length && (Y1.set(this, i, {
                    value: S1.event.trigger(S1.extend(r[0], S1.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation());
            }
        })) : void 0 === Y1.get(e38, i) && S1.event.add(e38, i, we1);
    }
    S1.event = {
        global: {
        },
        add: function(t, e39, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y1.get(t);
            if (V1(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S1.find.matchesSelector(re1, i), n.guid || (n.guid = S1.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S1 && S1.event.triggered !== e.type ? S1.event.dispatch.apply(t, arguments) : void 0;
                }), l = (e39 = (e39 || "").match(P1) || [
                    ""
                ]).length;
                while(l--)d = g = (s = be1.exec(e39[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S1.event.special[d] || {
                }, d = (i ? f.delegateType : f.bindType) || d, f = S1.event.special[d] || {
                }, c = S1.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S1.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S1.event.global[d] = !0);
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y1.hasData(e) && Y1.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P1) || [
                    ""
                ]).length;
                while(l--)if (d = g = (s = be1.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    f = S1.event.special[d] || {
                    }, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while(o--)c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S1.removeEvent(e, d, v.handle), delete u[d]);
                } else for(d in u)S1.event.remove(e, d + t[l], n, r, !0);
                S1.isEmptyObject(u) && Y1.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S1.event.fix(e), l = (Y1.get(this, "events") || Object.create(null))[u.type] || [], c = S1.event.special[u.type] || {
            };
            for(s[0] = u, t = 1; t < arguments.length; t++)s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S1.event.handlers.call(this, u, l), t = 0;
                while((i = a[t++]) && !u.isPropagationStopped()){
                    u.currentTarget = i.elem, n = 0;
                    while((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S1.event.special[o.origType] || {
                    }).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) {
                for(; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for(o = [], a = {
                    }, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S1(i, this).index(l) : S1.find(i, this, null, [
                        l
                    ]).length), a[i] && o.push(r);
                    o.length && s.push({
                        elem: l,
                        handlers: o
                    });
                }
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function(t, e40) {
            Object.defineProperty(S1.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m1(e40) ? function() {
                    if (this.originalEvent) return e40(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(e) {
            return e[S1.expando] ? e : new S1.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe1.test(t.type) && t.click && A1(t, "input") && Se(t, "click", we1), !1;
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe1.test(t.type) && t.click && A1(t, "input") && Se(t, "click"), !0;
                },
                _default: function(e) {
                    var t = e.target;
                    return pe1.test(t.type) && t.click && A1(t, "input") && Y1.get(t, "click") || A1(t, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, S1.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, S1.Event = function(e, t) {
        if (!(this instanceof S1.Event)) return new S1.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we1 : Te1, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S1.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S1.expando] = !0;
    }, S1.Event.prototype = {
        constructor: S1.Event,
        isDefaultPrevented: Te1,
        isPropagationStopped: Te1,
        isImmediatePropagationStopped: Te1,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we1, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we1, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we1, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
    }, S1.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S1.event.addProp), S1.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S1.event.special[e] = {
            setup: function() {
                return Se(this, e, Ce1), !1;
            },
            trigger: function() {
                return Se(this, e), !0;
            },
            _default: function() {
                return !0;
            },
            delegateType: t
        };
    }), S1.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e41, i) {
        S1.event.special[e41] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S1.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
            }
        };
    }), S1.fn.extend({
        on: function(e, t, n, r) {
            return Ee1(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return Ee1(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S1(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for(i in e)this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te1), this.each(function() {
                S1.event.remove(this, e, n, t);
            });
        }
    });
    var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return A1(e, "table") && A1(11 !== t.nodeType ? t : t.firstChild, "tr") && S1(e).children("tbody")[0] || e;
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y1.hasData(e) && (s = Y1.get(e).events)) for(i in Y1.remove(t, "handle events"), s)for(n = 0, r = s[i].length; n < r; n++)S1.event.add(t, i, s[i][n]);
            Q1.hasData(e) && (o = Q1.access(e), a = S1.extend({
            }, o), Q1.set(t, a));
        }
    }
    function He(n, r, i, o) {
        r = g1(r);
        var e42, t13, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m1(d);
        if (h || 1 < f && "string" == typeof d && !y1.checkClone && Ae.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
        });
        if (f && (t13 = (e42 = xe1(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e42.childNodes.length && (e42 = t13), t13 || o)) {
            for(s = (a = S1.map(ve1(e42, "script"), De)).length; c < f; c++)u = e42, c !== p && (u = S1.clone(u, !0, !0), s && S1.merge(a, ve1(u, "script"))), i.call(n[c], u, c);
            if (s) for(l = a[a.length - 1].ownerDocument, S1.map(a, qe), c = 0; c < s; c++)u = a[c], he1.test(u.type || "") && !Y1.access(u, "globalEval") && S1.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S1._evalUrl && !u.noModule && S1._evalUrl(u.src, {
                nonce: u.nonce || u.getAttribute("nonce")
            }, l) : b1(u.textContent.replace(Ne, ""), u, l));
        }
        return n;
    }
    function Oe(e, t, n) {
        for(var r, i = t ? S1.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || S1.cleanData(ve1(r)), r.parentNode && (n && ie1(r) && ye1(ve1(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    S1.extend({
        htmlPrefilter: function(e) {
            return e;
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie1(e);
            if (!(y1.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S1.isXMLDoc(e))) for(a = ve1(c), r = 0, i = (o = ve1(e)).length; r < i; r++)s = o[r], u = a[r], "input" === (l = u.nodeName.toLowerCase()) && pe1.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) {
                if (n) for(o = o || ve1(e), a = a || ve1(c), r = 0, i = o.length; r < i; r++)Le(o[r], a[r]);
                else Le(e, c);
            }
            return 0 < (a = ve1(c, "script")).length && ye1(a, !f && ve1(e, "script")), c;
        },
        cleanData: function(e) {
            for(var t, n, r, i = S1.event.special, o = 0; void 0 !== (n = e[o]); o++)if (V1(n)) {
                if (t = n[Y1.expando]) {
                    if (t.events) for(r in t.events)i[r] ? S1.event.remove(n, r) : S1.removeEvent(n, r, t.handle);
                    n[Y1.expando] = void 0;
                }
                n[Q1.expando] && (n[Q1.expando] = void 0);
            }
        }
    }), S1.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0);
        },
        remove: function(e) {
            return Oe(this, e);
        },
        text: function(e43) {
            return $1(this, function(e) {
                return void 0 === e ? S1.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e43, arguments.length);
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for(var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (S1.cleanData(ve1(e, !1)), e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S1.clone(this, e, t);
            });
        },
        html: function(e44) {
            return $1(this, function(e) {
                var t = this[0] || {
                }, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge1[(de1.exec(e) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    e = S1.htmlPrefilter(e);
                    try {
                        for(; n < r; n++)1 === (t = this[n] || {
                        }).nodeType && (S1.cleanData(ve1(t, !1)), t.innerHTML = e);
                        t = 0;
                    } catch (e) {
                    }
                }
                t && this.empty().append(e);
            }, null, e44, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S1.inArray(this, n) < 0 && (S1.cleanData(ve1(this)), t && t.replaceChild(e, this));
            }, n);
        }
    }), S1.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e45, a) {
        S1.fn[e45] = function(e) {
            for(var t, n = [], r = S1(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), S1(r[o])[a](t), u1.apply(n, t.get());
            return this.pushStack(n);
        };
    });
    var Pe = new RegExp("^(" + ee1 + ")(?!px)[a-z%]+$", "i"), Re = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C1), t.getComputedStyle(e);
    }, Me = function(e, t, n) {
        var r, i, o = {
        };
        for(i in t)o[i] = e.style[i], e.style[i] = t[i];
        for(i in r = n.call(e), t)e.style[i] = o[i];
        return r;
    }, Ie = new RegExp(ne1.join("|"), "i");
    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie1(e) || (a = S1.style(e, t)), !y1.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function Fe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    !function() {
        function e46() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re1.appendChild(u).appendChild(l);
                var e = C1.getComputedStyle(l);
                n10 = "1%" !== e.top, s = 12 === t14(e.marginLeft), l.style.right = "60%", o = 36 === t14(e.right), r9 = 36 === t14(e.width), l.style.position = "absolute", i = 12 === t14(l.offsetWidth / 3), re1.removeChild(u), l = null;
            }
        }
        function t14(e) {
            return Math.round(parseFloat(e));
        }
        var n10, r9, i, o, a, s, u = E1.createElement("div"), l = E1.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y1.clearCloneStyle = "content-box" === l.style.backgroundClip, S1.extend(y1, {
            boxSizingReliable: function() {
                return e46(), r9;
            },
            pixelBoxStyles: function() {
                return e46(), o;
            },
            pixelPosition: function() {
                return e46(), n10;
            },
            reliableMarginLeft: function() {
                return e46(), s;
            },
            scrollboxSize: function() {
                return e46(), i;
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E1.createElement("table"), t = E1.createElement("tr"), n = E1.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re1.appendChild(e).appendChild(t).appendChild(n), r = C1.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re1.removeChild(e)), a;
            }
        }));
    }();
    var Be = [
        "Webkit",
        "Moz",
        "ms"
    ], $e = E1.createElement("div").style, _e = {
    };
    function ze(e47) {
        var t15 = S1.cssProps[e47] || _e[e47];
        return t15 || (e47 in $e ? e47 : _e[e47] = (function(e) {
            var t = e[0].toUpperCase() + e.slice(1), n = Be.length;
            while(n--)if ((e = Be[n] + t) in $e) return e;
        })(e47) || e47);
    }
    var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ge = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ye(e, t, n) {
        var r = te1.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for(; a < 4; a += 2)"margin" === n && (u += S1.css(e, n + ne1[a], !0, i)), r ? ("content" === n && (u -= S1.css(e, "padding" + ne1[a], !0, i)), "margin" !== n && (u -= S1.css(e, "border" + ne1[a] + "Width", !0, i))) : (u += S1.css(e, "padding" + ne1[a], !0, i), "padding" !== n ? u += S1.css(e, "border" + ne1[a] + "Width", !0, i) : s += S1.css(e, "border" + ne1[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
    }
    function Je(e, t, n) {
        var r = Re(e), i = (!y1.boxSizingReliable() || n) && "border-box" === S1.css(e, "boxSizing", !1, r), o = i, a = We(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (!y1.boxSizingReliable() && i || !y1.reliableTrDimensions() && A1(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S1.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S1.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
    }
    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i);
    }
    S1.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X1(t), u = Xe.test(t), l = e.style;
                if (u || (t = ze(s)), a = S1.cssHooks[t] || S1.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te1.exec(n)) && i[1] && (n = se1(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S1.cssNumber[s] ? "" : "px")), y1.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X1(t);
            return Xe.test(t) || (t = ze(s)), (a = S1.cssHooks[t] || S1.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), S1.each([
        "height",
        "width"
    ], function(e48, u) {
        S1.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ue.test(S1.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                    return Je(e, u, n);
                });
            },
            set: function(e, t, n) {
                var r, i = Re(e), o = !y1.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S1.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - 0.5)), s && (r = te1.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S1.css(e, u)), Ye(0, t, s);
            }
        };
    }), S1.cssHooks.marginLeft = Fe(y1.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), S1.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S1.cssHooks[i + o] = {
            expand: function(e) {
                for(var t = 0, n = {
                }, r = "string" == typeof e ? e.split(" ") : [
                    e
                ]; t < 4; t++)n[i + ne1[t] + o] = r[t] || r[t - 2] || r[0];
                return n;
            }
        }, "margin" !== i && (S1.cssHooks[i + o].set = Ye);
    }), S1.fn.extend({
        css: function(e49, t16) {
            return $1(this, function(e, t, n) {
                var r, i, o = {
                }, a = 0;
                if (Array.isArray(t)) {
                    for(r = Re(e), i = t.length; a < i; a++)o[t[a]] = S1.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? S1.style(e, t, n) : S1.css(e, t);
            }, e49, t16, 1 < arguments.length);
        }
    }), ((S1.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S1.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S1.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S1.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this;
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S1.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                S1.fx.step[e.prop] ? S1.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S1.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S1.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, S1.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, S1.fx = Ke.prototype.init, S1.fx.step = {
    };
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
    function ot() {
        et && (!1 === E1.hidden && C1.requestAnimationFrame ? C1.requestAnimationFrame(ot) : C1.setTimeout(ot, S1.fx.interval), S1.fx.tick());
    }
    function at() {
        return C1.setTimeout(function() {
            Ze = void 0;
        }), Ze = Date.now();
    }
    function st(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for(t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = ne1[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ut(e, t, n) {
        for(var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r;
    }
    function lt(o5, e50, t17) {
        var n11, a5, r10 = 0, i7 = lt.prefilters.length, s = S1.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (a5) return !1;
            for(var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n);
            return s.notifyWith(o5, [
                l,
                n,
                t
            ]), n < 1 && i ? t : (i || s.notifyWith(o5, [
                l,
                1,
                0
            ]), s.resolveWith(o5, [
                l
            ]), !1);
        }, l = s.promise({
            elem: o5,
            props: S1.extend({
            }, e50),
            opts: S1.extend(!0, {
                specialEasing: {
                },
                easing: S1.easing._default
            }, t17),
            originalProperties: e50,
            originalOptions: t17,
            startTime: Ze || at(),
            duration: t17.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S1.Tween(o5, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a5) return this;
                for(a5 = !0; t < n; t++)l.tweens[t].run(1);
                return e ? (s.notifyWith(o5, [
                    l,
                    1,
                    0
                ]), s.resolveWith(o5, [
                    l,
                    e
                ])) : s.rejectWith(o5, [
                    l,
                    e
                ]), this;
            }
        }), c = l.props;
        for(!function(e, t) {
            var n, r, i, o, a;
            for(n in e)if (i = t[r = X1(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S1.cssHooks[r]) && ("expand" in a)) for(n in o = a.expand(o), delete e[r], o)(n in e) || (e[n] = o[n], t[n] = i);
            else t[r] = i;
        }(c, l.opts.specialEasing); r10 < i7; r10++)if (n11 = lt.prefilters[r10].call(l, o5, c, l.opts)) return m1(n11.stop) && (S1._queueHooks(l.elem, l.opts.queue).stop = n11.stop.bind(n11)), n11;
        return S1.map(c, ut, l), m1(l.opts.start) && l.opts.start.call(o5, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S1.fx.timer(S1.extend(u, {
            elem: o5,
            anim: l,
            queue: l.opts.queue
        })), l;
    }
    S1.Animation = S1.extend(lt, {
        tweeners: {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t);
                    return se1(n.elem, e, te1.exec(t), n), n;
                }
            ]
        },
        tweener: function(e, t) {
            m1(e) ? (t = e, e = [
                "*"
            ]) : e = e.match(P1);
            for(var n, r = 0, i = e.length; r < i; r++)n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t);
        },
        prefilters: [
            function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {
                }, h = e.style, g = e.nodeType && ae1(e), v = Y1.get(e, "fxshow");
                for(r in n.queue || (null == (a = S1._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s();
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S1.queue(e, "fx").length || a.empty.fire();
                    });
                })), t)if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0;
                    }
                    d[r] = v && v[r] || S1.style(e, r);
                }
                if ((u = !S1.isEmptyObject(t)) || !S1.isEmptyObject(d)) for(r in f && 1 === e.nodeType && (n.overflow = [
                    h.overflow,
                    h.overflowX,
                    h.overflowY
                ], null == (l = v && v.display) && (l = Y1.get(e, "display")), "none" === (c = S1.css(e, "display")) && (l ? c = l : (le1([
                    e
                ], !0), l = e.style.display || l, c = S1.css(e, "display"), le1([
                    e
                ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S1.css(e, "float") && (u || (p.done(function() {
                    h.display = l;
                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                })), u = !1, d)u || (v ? "hidden" in v && (g = v.hidden) : v = Y1.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le1([
                    e
                ], !0), p.done(function() {
                    for(r in g || le1([
                        e
                    ]), Y1.remove(e, "fxshow"), d)S1.style(e, r, d[r]);
                })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
            }
        ],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
        }
    }), S1.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S1.extend({
        }, e) : {
            complete: n || !n && t || m1(e) && e,
            duration: e,
            easing: n && t || t && !m1(t) && t
        };
        return S1.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S1.fx.speeds ? r.duration = S1.fx.speeds[r.duration] : r.duration = S1.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m1(r.old) && r.old.call(this), r.queue && S1.dequeue(this, r.queue);
        }, r;
    }, S1.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae1).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(t, e51, n, r) {
            var i = S1.isEmptyObject(t), o = S1.speed(e51, n, r), a = function() {
                var e = lt(this, S1.extend({
                }, t), o);
                (i || Y1.get(this, "finish")) && e.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(i, e52, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o);
            };
            return "string" != typeof i && (o = e52, e52 = i, i = void 0), e52 && this.queue(i || "fx", []), this.each(function() {
                var e = !0, t = null != i && i + "queueHooks", n = S1.timers, r = Y1.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else for(t in r)r[t] && r[t].stop && it.test(t) && a(r[t]);
                for(t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S1.dequeue(this, i);
            });
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y1.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S1.timers, o = n ? n.length : 0;
                for(t.finish = !0, S1.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for(e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), S1.each([
        "toggle",
        "show",
        "hide"
    ], function(e53, r) {
        var i = S1.fn[r];
        S1.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
        };
    }), S1.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e54, r) {
        S1.fn[e54] = function(e, t, n) {
            return this.animate(r, e, t, n);
        };
    }), S1.timers = [], S1.fx.tick = function() {
        var e, t = 0, n = S1.timers;
        for(Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S1.fx.stop(), Ze = void 0;
    }, S1.fx.timer = function(e) {
        S1.timers.push(e), S1.fx.start();
    }, S1.fx.interval = 13, S1.fx.start = function() {
        et || (et = !0, ot());
    }, S1.fx.stop = function() {
        et = null;
    }, S1.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S1.fn.delay = function(r, e55) {
        return r = S1.fx && S1.fx.speeds[r] || r, e55 = e55 || "fx", this.queue(e55, function(e, t) {
            var n = C1.setTimeout(e, r);
            t.stop = function() {
                C1.clearTimeout(n);
            };
        });
    }, tt = E1.createElement("input"), nt = E1.createElement("select").appendChild(E1.createElement("option")), tt.type = "checkbox", y1.checkOn = "" !== tt.value, y1.optSelected = nt.selected, (tt = E1.createElement("input")).value = "t", tt.type = "radio", y1.radioValue = "t" === tt.value;
    var ct, ft = S1.expr.attrHandle;
    S1.fn.extend({
        attr: function(e, t) {
            return $1(this, S1.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                S1.removeAttr(this, e);
            });
        }
    }), S1.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S1.prop(e, t, n) : (1 === o && S1.isXMLDoc(e) || (i = S1.attrHooks[t.toLowerCase()] || (S1.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S1.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S1.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y1.radioValue && "radio" === t && A1(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P1);
            if (i && 1 === e.nodeType) while(n = i[r++])e.removeAttribute(n);
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? S1.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, S1.each(S1.expr.match.bool.source.match(/\w+/g), function(e56, t18) {
        var a = ft[t18] || S1.find.attr;
        ft[t18] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r;
        };
    });
    var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(P1) || []).join(" ");
    }
    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P1) || [];
    }
    S1.fn.extend({
        prop: function(e, t) {
            return $1(this, S1.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S1.propFix[e] || e];
            });
        }
    }), S1.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S1.isXMLDoc(e) || (t = S1.propFix[t] || t, i = S1.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S1.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y1.optSelected || (S1.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), S1.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        S1.propFix[this.toLowerCase()] = this;
    }), S1.fn.extend({
        addClass: function(t) {
            var e57, n, r, i, o, a, s, u = 0;
            if (m1(t)) return this.each(function(e) {
                S1(this).addClass(t.call(this, e, gt(this)));
            });
            if ((e57 = vt(t)).length) {
                while(n = this[u++])if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                    a = 0;
                    while(o = e57[a++])r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (s = ht(r)) && n.setAttribute("class", s);
                }
            }
            return this;
        },
        removeClass: function(t) {
            var e58, n, r, i, o, a, s, u = 0;
            if (m1(t)) return this.each(function(e) {
                S1(this).removeClass(t.call(this, e, gt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e58 = vt(t)).length) {
                while(n = this[u++])if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                    a = 0;
                    while(o = e58[a++])while(-1 < r.indexOf(" " + o + " "))r = r.replace(" " + o + " ", " ");
                    i !== (s = ht(r)) && n.setAttribute("class", s);
                }
            }
            return this;
        },
        toggleClass: function(i, t19) {
            var o = typeof i, a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t19 && a ? t19 ? this.addClass(i) : this.removeClass(i) : m1(i) ? this.each(function(e) {
                S1(this).toggleClass(i.call(this, e, gt(this), t19), t19);
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S1(this), r = vt(i);
                    while(e = r[t++])n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y1.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y1.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while(n = this[r++])if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1;
        }
    });
    var yt = /\r/g;
    S1.fn.extend({
        val: function(n) {
            var r, e59, i, t20 = this[0];
            return arguments.length ? (i = m1(n), this.each(function(e60) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e60, S1(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S1.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (r = S1.valHooks[this.type] || S1.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
            })) : t20 ? (r = S1.valHooks[t20.type] || S1.valHooks[t20.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e59 = r.get(t20, "value")) ? e59 : "string" == typeof (e59 = t20.value) ? e59.replace(yt, "") : null == e59 ? "" : e59 : void 0;
        }
    }), S1.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S1.find.attr(e, "value");
                    return null != t ? t : ht(S1.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for(r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A1(n.parentNode, "optgroup"))) {
                        if (t = S1(n).val(), a) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S1.makeArray(t), a = i.length;
                    while(a--)((r = i[a]).selected = -1 < S1.inArray(S1.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), S1.each([
        "radio",
        "checkbox"
    ], function() {
        S1.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S1.inArray(S1(e).val(), t);
            }
        }, y1.checkOn || (S1.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), y1.focusin = "onfocusin" in C1;
    var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function(e) {
        e.stopPropagation();
    };
    S1.extend(S1.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [
                n || E1
            ], d = v1.call(e, "type") ? e.type : e, h = v1.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E1, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S1.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S1.expando] ? e : new S1.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [
                e
            ] : S1.makeArray(t, [
                e
            ]), c = S1.event.special[d] || {
            }, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x1(n)) {
                    for(s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o;
                    a === (n.ownerDocument || E1) && p.push(a.defaultView || a.parentWindow || C1);
                }
                i = 0;
                while((o = p[i++]) && !e.isPropagationStopped())f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y1.get(o, "events") || Object.create(null))[e.type] && Y1.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V1(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V1(n) || u && m1(n[d]) && !x1(n) && ((a = n[u]) && (n[u] = null), S1.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S1.event.triggered = void 0, a && (n[u] = a)), e.result;
            }
        },
        simulate: function(e, t, n) {
            var r = S1.extend(new S1.Event, n, {
                type: e,
                isSimulated: !0
            });
            S1.event.trigger(r, null, t);
        }
    }), S1.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S1.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S1.event.trigger(e, t, n, !0);
        }
    }), y1.focusin || S1.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S1.event.simulate(r, e.target, S1.event.fix(e));
        };
        S1.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this, t = Y1.access(e, r);
                t || e.addEventListener(n, i, !0), Y1.access(e, r, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this, t = Y1.access(e, r) - 1;
                t ? Y1.access(e, r, t) : (e.removeEventListener(n, i, !0), Y1.remove(e, r));
            }
        };
    });
    var bt = C1.location, wt = {
        guid: Date.now()
    }, Tt = /\?/;
    S1.parseXML = function(e62) {
        var t, n;
        if (!e62 || "string" != typeof e62) return null;
        try {
            t = (new C1.DOMParser).parseFromString(e62, "text/xml");
        } catch (e61) {
        }
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S1.error("Invalid XML: " + (n ? S1.map(n.childNodes, function(e) {
            return e.textContent;
        }).join("\n") : e62)), t;
    };
    var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i;
    function At(n, e63, r, i) {
        var t21;
        if (Array.isArray(e63)) S1.each(e63, function(e, t) {
            r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
        });
        else if (r || "object" !== w1(e63)) i(n, e63);
        else for(t21 in e63)At(n + "[" + t21 + "]", e63[t21], r, i);
    }
    S1.param = function(e64, t22) {
        var n12, r = [], i = function(e, t) {
            var n = m1(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (null == e64) return "";
        if (Array.isArray(e64) || e64.jquery && !S1.isPlainObject(e64)) S1.each(e64, function() {
            i(this.name, this.value);
        });
        else for(n12 in e64)At(n12, e64[n12], t22, i);
        return r.join("&");
    }, S1.fn.extend({
        serialize: function() {
            return S1.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S1.prop(this, "elements");
                return e ? S1.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !S1(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe1.test(e));
            }).map(function(e65, t) {
                var n = S1(this).val();
                return null == n ? null : Array.isArray(n) ? S1.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                };
            }).get();
        }
    });
    var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {
    }, Pt = {
    }, Rt = "*/".concat("*"), Mt = E1.createElement("a");
    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(P1) || [];
            if (m1(t)) while(n = i[r++])"+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Wt(t23, i, o, a) {
        var s = {
        }, u = t23 === Pt;
        function l(e) {
            var r;
            return s[e] = !0, S1.each(t23[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
            }), r;
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*");
    }
    function Ft(e, t) {
        var n, r, i = S1.ajaxSettings.flatOptions || {
        };
        for(n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {
        }))[n] = t[n]);
        return r && S1.extend(!0, e, r), e;
    }
    Mt.href = bt.href, S1.extend({
        active: 0,
        lastModified: {
        },
        etag: {
        },
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S1.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S1.ajaxSettings), t) : Ft(S1.ajaxSettings, e);
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e66, t24) {
            "object" == typeof e66 && (t24 = e66, e66 = void 0), t24 = t24 || {
            };
            var c3, f, p, n13, d, r11, h, g, i8, o6, v = S1.ajaxSetup({
            }, t24), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S1(y) : S1.event, x = S1.Deferred(), b = S1.Callbacks("once memory"), w = v.statusCode || {
            }, a6 = {
            }, s4 = {
            }, u3 = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n13) {
                            n13 = {
                            };
                            while(t = qt.exec(p))n13[t[1].toLowerCase() + " "] = (n13[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        }
                        t = n13[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function() {
                    return h ? p : null;
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s4[e.toLowerCase()] = s4[e.toLowerCase()] || e, a6[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (h) T.always(e[T.status]);
                        else for(t in e)w[t] = [
                            w[t],
                            e[t]
                        ];
                    }
                    return this;
                },
                abort: function(e) {
                    var t = e || u3;
                    return c3 && c3.abort(t), l3(0, t), this;
                }
            };
            if (x.promise(T), v.url = ((e66 || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t24.method || t24.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P1) || [
                ""
            ], null == v.crossDomain) {
                r11 = E1.createElement("a");
                try {
                    r11.href = v.url, r11.href = r11.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r11.protocol + "//" + r11.host;
                } catch (e) {
                    v.crossDomain = !0;
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S1.param(v.data, v.traditional)), Wt(Ot, v, t24, T), h) return T;
            for(i8 in (g = S1.event && v.global) && 0 == S1.active++ && S1.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o6 = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o6 = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o6), v.url = f + o6), v.ifModified && (S1.lastModified[f] && T.setRequestHeader("If-Modified-Since", S1.lastModified[f]), S1.etag[f] && T.setRequestHeader("If-None-Match", S1.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t24.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers)T.setRequestHeader(i8, v.headers[i8]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u3 = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c3 = Wt(Pt, v, t24, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [
                    T,
                    v
                ]), h) return T;
                v.async && 0 < v.timeout && (d = C1.setTimeout(function() {
                    T.abort("timeout");
                }, v.timeout));
                try {
                    h = !1, c3.send(a6, l3);
                } catch (e) {
                    if (h) throw e;
                    l3(-1, e);
                }
            } else l3(-1, "No Transport");
            function l3(e67, t25, n14, r12) {
                var i9, o7, a7, s5, u4, l4 = t25;
                h || (h = !0, d && C1.clearTimeout(d), c3 = void 0, p = r12 || "", T.readyState = 0 < e67 ? 4 : 0, i9 = 200 <= e67 && e67 < 300 || 304 === e67, n14 && (s5 = (function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while("*" === u[0])u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) {
                        for(i in s)if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break;
                        }
                    }
                    if (u[0] in n) o = u[0];
                    else {
                        for(i in n){
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break;
                            }
                            a || (a = i);
                        }
                        o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                })(v, T, n14)), !i9 && -1 < S1.inArray("script", v.dataTypes) && S1.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {
                }), s5 = (function(e, t, n, r) {
                    var i, o, a, s, u, l = {
                    }, c = e.dataTypes.slice();
                    if (c[1]) for(a in e.converters)l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while(o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) {
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o])) {
                                for(i in l)if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break;
                                }
                            }
                            if (!0 !== a) {
                                if (a && e["throws"]) t = a(t);
                                else try {
                                    t = a(t);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + u + " to " + o
                                    };
                                }
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                })(v, s5, T, i9), i9 ? (v.ifModified && ((u4 = T.getResponseHeader("Last-Modified")) && (S1.lastModified[f] = u4), (u4 = T.getResponseHeader("etag")) && (S1.etag[f] = u4)), 204 === e67 || "HEAD" === v.type ? l4 = "nocontent" : 304 === e67 ? l4 = "notmodified" : (l4 = s5.state, o7 = s5.data, i9 = !(a7 = s5.error))) : (a7 = l4, !e67 && l4 || (l4 = "error", e67 < 0 && (e67 = 0))), T.status = e67, T.statusText = (t25 || l4) + "", i9 ? x.resolveWith(y, [
                    o7,
                    l4,
                    T
                ]) : x.rejectWith(y, [
                    T,
                    l4,
                    a7
                ]), T.statusCode(w), w = void 0, g && m.trigger(i9 ? "ajaxSuccess" : "ajaxError", [
                    T,
                    v,
                    i9 ? o7 : a7
                ]), b.fireWith(y, [
                    T,
                    l4
                ]), g && (m.trigger("ajaxComplete", [
                    T,
                    v
                ]), --S1.active || S1.event.trigger("ajaxStop")));
            }
            return T;
        },
        getJSON: function(e, t, n) {
            return S1.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return S1.get(e, void 0, t, "script");
        }
    }), S1.each([
        "get",
        "post"
    ], function(e68, i) {
        S1[i] = function(e, t, n, r) {
            return m1(t) && (r = r || n, n = t, t = void 0), S1.ajax(S1.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S1.isPlainObject(e) && e));
        };
    }), S1.ajaxPrefilter(function(e) {
        var t;
        for(t in e.headers)"content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }), S1._evalUrl = function(e69, t, n) {
        return S1.ajax({
            url: e69,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {
                }
            },
            dataFilter: function(e) {
                S1.globalEval(e, t, n);
            }
        });
    }, S1.fn.extend({
        wrapAll: function(e70) {
            var t;
            return this[0] && (m1(e70) && (e70 = e70.call(this[0])), t = S1(e70, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while(e.firstElementChild)e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(n) {
            return m1(n) ? this.each(function(e) {
                S1(this).wrapInner(n.call(this, e));
            }) : this.each(function() {
                var e = S1(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = m1(t);
            return this.each(function(e) {
                S1(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S1(this).replaceWith(this.childNodes);
            }), this;
        }
    }), S1.expr.pseudos.hidden = function(e) {
        return !S1.expr.pseudos.visible(e);
    }, S1.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, S1.ajaxSettings.xhr = function() {
        try {
            return new C1.XMLHttpRequest;
        } catch (e) {
        }
    };
    var Bt = {
        0: 200,
        1223: 204
    }, $t = S1.ajaxSettings.xhr();
    y1.cors = !!$t && "withCredentials" in $t, y1.ajax = $t = !!$t, S1.ajaxTransport(function(i) {
        var o, a;
        if (y1.cors || $t && !i.crossDomain) return {
            send: function(e71, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for(n in i.xhrFields)r[n] = i.xhrFields[n];
                for(n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e71["X-Requested-With"] || (e71["X-Requested-With"] = "XMLHttpRequest"), e71)r.setRequestHeader(n, e71[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()));
                    };
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C1.setTimeout(function() {
                        o && a();
                    });
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null);
                } catch (e) {
                    if (o) throw e;
                }
            },
            abort: function() {
                o && o();
            }
        };
    }), S1.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), S1.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S1.globalEval(e), e;
            }
        }
    }), S1.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), S1.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e72, t) {
                r = S1("<script>").attr(n.scriptAttrs || {
                }).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
                }), E1.head.appendChild(r[0]);
            },
            abort: function() {
                i && i();
            }
        };
    });
    var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    S1.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || S1.expando + "_" + wt.guid++;
            return this[e] = !0, e;
        }
    }), S1.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m1(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S1.error(r + " was not called"), o[0];
        }, e.dataTypes[0] = "json", i = C1[r], C1[r] = function() {
            o = arguments;
        }, n.always(function() {
            void 0 === i ? S1(C1).removeProp(r) : C1[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m1(i) && i(o[0]), o = i = void 0;
        }), "script";
    }), y1.createHTMLDocument = ((_t = E1.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S1.parseHTML = function(e, t, n) {
        var r, i, o;
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y1.createHTMLDocument ? ((r = (t = E1.implementation.createHTMLDocument("")).createElement("base")).href = E1.location.href, t.head.appendChild(r)) : t = E1), o = !n && [], (i = N1.exec(e)) ? [
            t.createElement(i[1])
        ] : (i = xe1([
            e
        ], t, o), o && o.length && S1(o).remove(), S1.merge([], i.childNodes)));
    }, S1.fn.load = function(e73, t26, n) {
        var r, i, o, a = this, s = e73.indexOf(" ");
        return -1 < s && (r = ht(e73.slice(s)), e73 = e73.slice(0, s)), m1(t26) ? (n = t26, t26 = void 0) : t26 && "object" == typeof t26 && (i = "POST"), 0 < a.length && S1.ajax({
            url: e73,
            type: i || "GET",
            dataType: "html",
            data: t26
        }).done(function(e) {
            o = arguments, a.html(r ? S1("<div>").append(S1.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [
                    e.responseText,
                    t,
                    e
                ]);
            });
        }), this;
    }, S1.expr.pseudos.animated = function(t) {
        return S1.grep(S1.timers, function(e) {
            return t === e.elem;
        }).length;
    }, S1.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S1.css(e, "position"), c = S1(e), f = {
            };
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S1.css(e, "top"), u = S1.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m1(t) && (t = t.call(e, n, S1.extend({
            }, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
        }
    }, S1.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S1.offset.setOffset(this, t, e);
            });
            var e74, n, r = this[0];
            return r ? r.getClientRects().length ? (e74 = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e74.top + n.pageYOffset,
                left: e74.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S1.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while(e && (e === n.body || e === n.documentElement) && "static" === S1.css(e, "position"))e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S1(e).offset()).top += S1.css(e, "borderTopWidth", !0), i.left += S1.css(e, "borderLeftWidth", !0));
                }
                return {
                    top: t.top - i.top - S1.css(r, "marginTop", !0),
                    left: t.left - i.left - S1.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while(e && "static" === S1.css(e, "position"))e = e.offsetParent;
                return e || re1;
            });
        }
    }), S1.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S1.fn[t] = function(e75) {
            return $1(this, function(e, t, n) {
                var r;
                if (x1(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
            }, t, e75, arguments.length);
        };
    }), S1.each([
        "top",
        "left"
    ], function(e76, n) {
        S1.cssHooks[n] = Fe(y1.pixelPosition, function(e, t) {
            if (t) return t = We(e, n), Pe.test(t) ? S1(e).position()[n] + "px" : t;
        });
    }), S1.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S1.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r13, o) {
            S1.fn[o] = function(e77, t27) {
                var n15 = arguments.length && (r13 || "boolean" != typeof e77), i = r13 || (!0 === e77 || !0 === t27 ? "margin" : "border");
                return $1(this, function(e, t, n) {
                    var r;
                    return x1(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S1.css(e, t, i) : S1.style(e, t, n, i);
                }, s, n15 ? e77 : void 0, n15);
            };
        });
    }), S1.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(e78, t) {
        S1.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), S1.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), S1.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e79, n) {
        S1.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S1.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m1(e)) return r = s1.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s1.call(arguments)));
        }).guid = e.guid = e.guid || S1.guid++, i;
    }, S1.holdReady = function(e) {
        e ? S1.readyWait++ : S1.ready(!0);
    }, S1.isArray = Array.isArray, S1.parseJSON = JSON.parse, S1.nodeName = A1, S1.isFunction = m1, S1.isWindow = x1, S1.camelCase = X1, S1.type = w1, S1.now = Date.now, S1.isNumeric = function(e) {
        var t = S1.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, S1.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "");
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S1;
    });
    var Vt = C1.jQuery, Gt = C1.$;
    return S1.noConflict = function(e) {
        return C1.$ === S1 && (C1.$ = Gt), e && C1.jQuery === S1 && (C1.jQuery = Vt), S1;
    }, "undefined" == typeof e2 && (C1.jQuery = C1.$ = S1), S1;
});

//# sourceMappingURL=index.ab4a893b.js.map
