let protobuf;
!(function (g) {
  'use strict';
  !(function (r, e, t) {
    var i = (function t(i) {
      var n = e[i];
      return (
        n || r[i][0].call((n = e[i] = { exports: {} }), t, n, n.exports),
        n.exports
      );
    })(t[0]);
    (protobuf = i.util.global.protobuf = i),
      'function' == typeof define &&
        define.amd &&
        define(['long'], function (t) {
          return t && t.isLong && ((i.util.Long = t), i.configure()), i;
        }),
      'object' == typeof module &&
        module &&
        module.exports &&
        (module.exports = i);
  })(
    {
      1: [
        function (t, i, n) {
          i.exports = function (t, i) {
            var n = Array(arguments.length - 1),
              s = 0,
              r = 2,
              u = !0;
            for (; r < arguments.length; ) n[s++] = arguments[r++];
            return new Promise(function (r, e) {
              n[s] = function (t) {
                if (u)
                  if (((u = !1), t)) e(t);
                  else {
                    for (
                      var i = Array(arguments.length - 1), n = 0;
                      n < i.length;

                    )
                      i[n++] = arguments[n];
                    r.apply(null, i);
                  }
              };
              try {
                t.apply(i || null, n);
              } catch (t) {
                u && ((u = !1), e(t));
              }
            });
          };
        },
        {}
      ],
      2: [
        function (t, i, n) {
          n.length = function (t) {
            var i = t.length;
            if (!i) return 0;
            for (var n = 0; 1 < --i % 4 && '=' == (t[0 | i] || ''); ) ++n;
            return Math.ceil(3 * t.length) / 4 - n;
          };
          for (var f = Array(64), h = Array(123), r = 0; r < 64; )
            h[
              (f[r] =
                r < 26
                  ? r + 65
                  : r < 52
                  ? r + 71
                  : r < 62
                  ? r - 4
                  : (r - 59) | 43)
            ] = r++;
          n.encode = function (t, i, n) {
            for (var r, e = null, s = [], u = 0, o = 0; i < n; ) {
              var h = t[i++];
              switch (o) {
                case 0:
                  (s[u++] = f[h >> 2]), (r = (3 & h) << 4), (o = 1);
                  break;
                case 1:
                  (s[u++] = f[r | (h >> 4)]), (r = (15 & h) << 2), (o = 2);
                  break;
                case 2:
                  (s[u++] = f[r | (h >> 6)]), (s[u++] = f[63 & h]), (o = 0);
              }
              8191 < u &&
                ((e = e || []).push(String.fromCharCode.apply(String, s)),
                (u = 0));
            }
            return (
              o && ((s[u++] = f[r]), (s[u++] = 61), 1 === o && (s[u++] = 61)),
              e
                ? (u &&
                    e.push(String.fromCharCode.apply(String, s.slice(0, u))),
                  e.join(''))
                : String.fromCharCode.apply(String, s.slice(0, u))
            );
          };
          var c = 'invalid encoding';
          (n.decode = function (t, i, n) {
            for (var r, e = n, s = 0, u = 0; u < t.length; ) {
              var o = t.charCodeAt(u++);
              if (61 == o && 1 < s) break;
              if ((o = h[o]) === g) throw Error(c);
              switch (s) {
                case 0:
                  (r = o), (s = 1);
                  break;
                case 1:
                  (i[n++] = (r << 2) | ((48 & o) >> 4)), (r = o), (s = 2);
                  break;
                case 2:
                  (i[n++] = ((15 & r) << 4) | ((60 & o) >> 2)),
                    (r = o),
                    (s = 3);
                  break;
                case 3:
                  (i[n++] = ((3 & r) << 6) | o), (s = 0);
              }
            }
            if (1 === s) throw Error(c);
            return n - e;
          }),
            (n.test = function (t) {
              return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
                t
              );
            });
        },
        {}
      ],
      3: [
        function (t, i, n) {
          function a(i, n) {
            'string' == typeof i && ((n = i), (i = g));
            var h = [];
            function f(t) {
              if ('string' != typeof t) {
                var i = c();
                if ((a.verbose, (i = 'return ' + i), t)) {
                  for (
                    var n = Object.keys(t),
                      r = Array(n.length + 1),
                      e = Array(n.length),
                      s = 0;
                    s < n.length;

                  )
                    (r[s] = n[s]), (e[s] = t[n[s++]]);
                  return (r[s] = i), Function.apply(null, r).apply(null, e);
                }
                return Function(i)();
              }
              for (var u = Array(arguments.length - 1), o = 0; o < u.length; )
                u[o] = arguments[++o];
              if (
                ((o = 0),
                (t = t.replace(/%([%dfijs])/g, function (t, i) {
                  var n = u[o++];
                  switch (i) {
                    case 'd':
                    case 'f':
                      return '' + +('' + n);
                    case 'i':
                      return '' + Math.floor(n);
                    case 'j':
                      return JSON.stringify(n);
                    case 's':
                      return '' + n;
                  }
                  return '%';
                })),
                o !== u.length)
              )
                throw Error('parameter count mismatch');
              return h.push(t), f;
            }
            function c(t) {
              return (
                'function ' +
                (t || n || '') +
                '(' +
                ((i && i.join(',')) || '') +
                '){\n  ' +
                h.join('\n  ') +
                '\n}'
              );
            }
            return (f.toString = c), f;
          }
          (i.exports = a).verbose = !1;
        },
        {}
      ],
      4: [
        function (t, i, n) {
          function r() {
            this.t = {};
          }
          ((i.exports = r).prototype.on = function (t, i, n) {
            return (
              (this.t[t] || (this.t[t] = [])).push({ fn: i, ctx: n || this }),
              this
            );
          }),
            (r.prototype.off = function (t, i) {
              if (t === g) this.t = {};
              else if (i === g) this.t[t] = [];
              else
                for (var n = this.t[t], r = 0; r < n.length; )
                  n[r].fn === i ? n.splice(r, 1) : ++r;
              return this;
            }),
            (r.prototype.emit = function (t) {
              var i = this.t[t];
              if (i) {
                for (var n = [], r = 1; r < arguments.length; )
                  n.push(arguments[r++]);
                for (r = 0; r < i.length; ) i[r].fn.apply(i[r++].ctx, n);
              }
              return this;
            });
        },
        {}
      ],
      5: [
        function (t, i, n) {
          i.exports = o;
          var s = t(1),
            u = t(7)('fs');
          function o(n, r, e) {
            return (
              (r = 'function' == typeof r ? ((e = r), {}) : r || {}),
              e
                ? !r.xhr && u && u.readFile
                  ? u.readFile(n, function (t, i) {
                      return t && 'undefined' != typeof XMLHttpRequest
                        ? o.xhr(n, r, e)
                        : t
                        ? e(t)
                        : e(null, r.binary ? i : i.toString('utf8'));
                    })
                  : o.xhr(n, r, e)
                : s(o, this, n, r)
            );
          }
          o.xhr = function (t, n, r) {
            var e = new XMLHttpRequest();
            (e.onreadystatechange = function () {
              if (4 !== e.readyState) return g;
              if (0 !== e.status && 200 !== e.status)
                return r(Error('status ' + e.status));
              if (n.binary) {
                if (!(t = e.response))
                  for (var t = [], i = 0; i < e.responseText.length; ++i)
                    t.push(255 & e.responseText.charCodeAt(i));
                return r(
                  null,
                  'undefined' != typeof Uint8Array ? new Uint8Array(t) : t
                );
              }
              return r(null, e.responseText);
            }),
              n.binary &&
                ('overrideMimeType' in e &&
                  e.overrideMimeType('text/plain; charset=x-user-defined'),
                (e.responseType = 'arraybuffer')),
              e.open('GET', t),
              e.send();
          };
        },
        { 1: 1, 7: 7 }
      ],
      6: [
        function (t, i, n) {
          function r(t) {
            function i(t, i, n, r) {
              var e = i < 0 ? 1 : 0;
              t(
                0 === (i = e ? -i : i)
                  ? 0 < 1 / i
                    ? 0
                    : 2147483648
                  : isNaN(i)
                  ? 2143289344
                  : 34028234663852886e22 < i
                  ? ((e << 31) | 2139095040) >>> 0
                  : i < 11754943508222875e-54
                  ? ((e << 31) | Math.round(i / 1401298464324817e-60)) >>> 0
                  : ((e << 31) |
                      ((127 + (t = Math.floor(Math.log(i) / Math.LN2))) << 23) |
                      (8388607 & Math.round(i * Math.pow(2, -t) * 8388608))) >>>
                    0,
                n,
                r
              );
            }
            function n(t, i, n) {
              (t = t(i, n)),
                (i = 2 * (t >> 31) + 1),
                (n = (t >>> 23) & 255),
                (t &= 8388607);
              return 255 == n
                ? t
                  ? NaN
                  : (1 / 0) * i
                : 0 == n
                ? 1401298464324817e-60 * i * t
                : i * Math.pow(2, n - 150) * (8388608 + t);
            }
            function r(t, i, n) {
              (o[0] = t),
                (i[n] = h[0]),
                (i[n + 1] = h[1]),
                (i[n + 2] = h[2]),
                (i[n + 3] = h[3]);
            }
            function e(t, i, n) {
              (o[0] = t),
                (i[n] = h[3]),
                (i[n + 1] = h[2]),
                (i[n + 2] = h[1]),
                (i[n + 3] = h[0]);
            }
            function s(t, i) {
              return (
                (h[0] = t[i]),
                (h[1] = t[i + 1]),
                (h[2] = t[i + 2]),
                (h[3] = t[i + 3]),
                o[0]
              );
            }
            function u(t, i) {
              return (
                (h[3] = t[i]),
                (h[2] = t[i + 1]),
                (h[1] = t[i + 2]),
                (h[0] = t[i + 3]),
                o[0]
              );
            }
            var o, h, f, c, a;
            function l(t, i, n, r, e, s) {
              var u,
                o = r < 0 ? 1 : 0;
              0 === (r = o ? -r : r)
                ? (t(0, e, s + i), t(0 < 1 / r ? 0 : 2147483648, e, s + n))
                : isNaN(r)
                ? (t(0, e, s + i), t(2146959360, e, s + n))
                : 17976931348623157e292 < r
                ? (t(0, e, s + i), t(((o << 31) | 2146435072) >>> 0, e, s + n))
                : r < 22250738585072014e-324
                ? (t((u = r / 5e-324) >>> 0, e, s + i),
                  t(((o << 31) | (u / 4294967296)) >>> 0, e, s + n))
                : (t(
                    (4503599627370496 *
                      (u =
                        r *
                        Math.pow(
                          2,
                          -(r =
                            1024 === (r = Math.floor(Math.log(r) / Math.LN2))
                              ? 1023
                              : r)
                        ))) >>>
                      0,
                    e,
                    s + i
                  ),
                  t(
                    ((o << 31) |
                      ((r + 1023) << 20) |
                      ((1048576 * u) & 1048575)) >>>
                      0,
                    e,
                    s + n
                  ));
            }
            function d(t, i, n, r, e) {
              (i = t(r, e + i)),
                (t = t(r, e + n)),
                (r = 2 * (t >> 31) + 1),
                (e = (t >>> 20) & 2047),
                (n = 4294967296 * (1048575 & t) + i);
              return 2047 == e
                ? n
                  ? NaN
                  : (1 / 0) * r
                : 0 == e
                ? 5e-324 * r * n
                : r * Math.pow(2, e - 1075) * (n + 4503599627370496);
            }
            function v(t, i, n) {
              (f[0] = t),
                (i[n] = c[0]),
                (i[n + 1] = c[1]),
                (i[n + 2] = c[2]),
                (i[n + 3] = c[3]),
                (i[n + 4] = c[4]),
                (i[n + 5] = c[5]),
                (i[n + 6] = c[6]),
                (i[n + 7] = c[7]);
            }
            function b(t, i, n) {
              (f[0] = t),
                (i[n] = c[7]),
                (i[n + 1] = c[6]),
                (i[n + 2] = c[5]),
                (i[n + 3] = c[4]),
                (i[n + 4] = c[3]),
                (i[n + 5] = c[2]),
                (i[n + 6] = c[1]),
                (i[n + 7] = c[0]);
            }
            function p(t, i) {
              return (
                (c[0] = t[i]),
                (c[1] = t[i + 1]),
                (c[2] = t[i + 2]),
                (c[3] = t[i + 3]),
                (c[4] = t[i + 4]),
                (c[5] = t[i + 5]),
                (c[6] = t[i + 6]),
                (c[7] = t[i + 7]),
                f[0]
              );
            }
            function y(t, i) {
              return (
                (c[7] = t[i]),
                (c[6] = t[i + 1]),
                (c[5] = t[i + 2]),
                (c[4] = t[i + 3]),
                (c[3] = t[i + 4]),
                (c[2] = t[i + 5]),
                (c[1] = t[i + 6]),
                (c[0] = t[i + 7]),
                f[0]
              );
            }
            return (
              'undefined' != typeof Float32Array
                ? ((o = new Float32Array([-0])),
                  (h = new Uint8Array(o.buffer)),
                  (a = 128 === h[3]),
                  (t.writeFloatLE = a ? r : e),
                  (t.writeFloatBE = a ? e : r),
                  (t.readFloatLE = a ? s : u),
                  (t.readFloatBE = a ? u : s))
                : ((t.writeFloatLE = i.bind(null, m)),
                  (t.writeFloatBE = i.bind(null, w)),
                  (t.readFloatLE = n.bind(null, g)),
                  (t.readFloatBE = n.bind(null, j))),
              'undefined' != typeof Float64Array
                ? ((f = new Float64Array([-0])),
                  (c = new Uint8Array(f.buffer)),
                  (a = 128 === c[7]),
                  (t.writeDoubleLE = a ? v : b),
                  (t.writeDoubleBE = a ? b : v),
                  (t.readDoubleLE = a ? p : y),
                  (t.readDoubleBE = a ? y : p))
                : ((t.writeDoubleLE = l.bind(null, m, 0, 4)),
                  (t.writeDoubleBE = l.bind(null, w, 4, 0)),
                  (t.readDoubleLE = d.bind(null, g, 0, 4)),
                  (t.readDoubleBE = d.bind(null, j, 4, 0))),
              t
            );
          }
          function m(t, i, n) {
            (i[n] = 255 & t),
              (i[n + 1] = (t >>> 8) & 255),
              (i[n + 2] = (t >>> 16) & 255),
              (i[n + 3] = t >>> 24);
          }
          function w(t, i, n) {
            (i[n] = t >>> 24),
              (i[n + 1] = (t >>> 16) & 255),
              (i[n + 2] = (t >>> 8) & 255),
              (i[n + 3] = 255 & t);
          }
          function g(t, i) {
            return (
              (t[i] | (t[i + 1] << 8) | (t[i + 2] << 16) | (t[i + 3] << 24)) >>>
              0
            );
          }
          function j(t, i) {
            return (
              ((t[i] << 24) | (t[i + 1] << 16) | (t[i + 2] << 8) | t[i + 3]) >>>
              0
            );
          }
          i.exports = r(r);
        },
        {}
      ],
      7: [
        function (t, i, n) {
          function r(t) {
            try {
              var i = eval('require')(t);
              if (i && (i.length || Object.keys(i).length)) return i;
            } catch (t) {}
            return null;
          }
          i.exports = r;
        },
        {}
      ],
      8: [
        function (t, i, n) {
          var e = (n.isAbsolute = function (t) {
              return /^(?:\/|\w+:)/.test(t);
            }),
            r = (n.normalize = function (t) {
              var i = (t = t.replace(/\\/g, '/').replace(/\/{2,}/g, '/')).split(
                  '/'
                ),
                n = e(t),
                t = '';
              n && (t = i.shift() + '/');
              for (var r = 0; r < i.length; )
                '..' === i[r]
                  ? 0 < r && '..' !== i[r - 1]
                    ? i.splice(--r, 2)
                    : n
                    ? i.splice(r, 1)
                    : ++r
                  : '.' === i[r]
                  ? i.splice(r, 1)
                  : ++r;
              return t + i.join('/');
            });
          n.resolve = function (t, i, n) {
            return (
              n || (i = r(i)),
              !e(i) &&
              (t = (t = n ? t : r(t)).replace(/(?:\/|^)[^/]+$/, '')).length
                ? r(t + '/' + i)
                : i
            );
          };
        },
        {}
      ],
      9: [
        function (t, i, n) {
          i.exports = function (i, n, t) {
            var r = t || 8192,
              e = r >>> 1,
              s = null,
              u = r;
            return function (t) {
              if (t < 1 || e < t) return i(t);
              r < u + t && ((s = i(r)), (u = 0));
              t = n.call(s, u, (u += t));
              return 7 & u && (u = 1 + (7 | u)), t;
            };
          };
        },
        {}
      ],
      10: [
        function (t, i, n) {
          (n.length = function (t) {
            for (var i, n = 0, r = 0; r < t.length; ++r)
              (i = t.charCodeAt(r)) < 128
                ? (n += 1)
                : i < 2048
                ? (n += 2)
                : 55296 == (64512 & i) && 56320 == (64512 & t.charCodeAt(r + 1))
                ? (++r, (n += 4))
                : (n += 3);
            return n;
          }),
            (n.read = function (t, i, n) {
              if (n - i < 1) return '';
              for (var r, e = null, s = [], u = 0; i < n; )
                (r = t[i++]) < 128
                  ? (s[u++] = r)
                  : 191 < r && r < 224
                  ? (s[u++] = ((31 & r) << 6) | (63 & t[i++]))
                  : 239 < r && r < 365
                  ? ((r =
                      (((7 & r) << 18) |
                        ((63 & t[i++]) << 12) |
                        ((63 & t[i++]) << 6) |
                        (63 & t[i++])) -
                      65536),
                    (s[u++] = 55296 + (r >> 10)),
                    (s[u++] = 56320 + (1023 & r)))
                  : (s[u++] =
                      ((15 & r) << 12) | ((63 & t[i++]) << 6) | (63 & t[i++])),
                  8191 < u &&
                    ((e = e || []).push(String.fromCharCode.apply(String, s)),
                    (u = 0));
              return e
                ? (u &&
                    e.push(String.fromCharCode.apply(String, s.slice(0, u))),
                  e.join(''))
                : String.fromCharCode.apply(String, s.slice(0, u));
            }),
            (n.write = function (t, i, n) {
              for (var r, e, s = n, u = 0; u < t.length; ++u)
                (r = t.charCodeAt(u)) < 128
                  ? (i[n++] = r)
                  : (r < 2048
                      ? (i[n++] = (r >> 6) | 192)
                      : (55296 == (64512 & r) &&
                        56320 == (64512 & (e = t.charCodeAt(u + 1)))
                          ? (++u,
                            (i[n++] =
                              ((r = 65536 + ((1023 & r) << 10) + (1023 & e)) >>
                                18) |
                              240),
                            (i[n++] = ((r >> 12) & 63) | 128))
                          : (i[n++] = (r >> 12) | 224),
                        (i[n++] = ((r >> 6) & 63) | 128)),
                    (i[n++] = (63 & r) | 128));
              return n - s;
            });
        },
        {}
      ],
      11: [
        function (t, i, n) {
          var l = t(14),
            d = t(33);
          function u(t, i, n, r) {
            var e = !1;
            if (i.resolvedType)
              if (i.resolvedType instanceof l) {
                t('switch(d%s){', r);
                for (
                  var s = i.resolvedType.values, u = Object.keys(s), o = 0;
                  o < u.length;
                  ++o
                )
                  s[u[o]] !== i.typeDefault ||
                    e ||
                    (t('default:')(
                      'if(typeof(d%s)==="number"){m%s=d%s;break}',
                      r,
                      r,
                      r
                    ),
                    i.repeated || t('break'),
                    (e = !0)),
                    t('case%j:', u[o])('case %i:', s[u[o]])(
                      'm%s=%j',
                      r,
                      s[u[o]]
                    )('break');
                t('}');
              } else
                t('if(typeof d%s!=="object")', r)(
                  'throw TypeError(%j)',
                  i.fullName + ': object expected'
                )('m%s=types[%i].fromObject(d%s)', r, n, r);
            else {
              var h = !1;
              switch (i.type) {
                case 'double':
                case 'float':
                  t('m%s=Number(d%s)', r, r);
                  break;
                case 'uint32':
                case 'fixed32':
                  t('m%s=d%s>>>0', r, r);
                  break;
                case 'int32':
                case 'sint32':
                case 'sfixed32':
                  t('m%s=d%s|0', r, r);
                  break;
                case 'uint64':
                  h = !0;
                case 'int64':
                case 'sint64':
                case 'fixed64':
                case 'sfixed64':
                  t('if(util.Long)')(
                    '(m%s=util.Long.fromValue(d%s)).unsigned=%j',
                    r,
                    r,
                    h
                  )('else if(typeof d%s==="string")', r)(
                    'm%s=parseInt(d%s,10)',
                    r,
                    r
                  )('else if(typeof d%s==="number")', r)(
                    'm%s=d%s',
                    r,
                    r
                  )('else if(typeof d%s==="object")', r)(
                    'm%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)',
                    r,
                    r,
                    r,
                    h ? 'true' : ''
                  );
                  break;
                case 'bytes':
                  t('if(typeof d%s==="string")', r)(
                    'util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)',
                    r,
                    r,
                    r
                  )('else if(d%s.length >= 0)', r)('m%s=d%s', r, r);
                  break;
                case 'string':
                  t('m%s=String(d%s)', r, r);
                  break;
                case 'bool':
                  t('m%s=Boolean(d%s)', r, r);
              }
            }
            return t;
          }
          function v(t, i, n, r) {
            if (i.resolvedType)
              i.resolvedType instanceof l
                ? t(
                    'd%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s',
                    r,
                    n,
                    r,
                    r,
                    n,
                    r,
                    r
                  )
                : t('d%s=types[%i].toObject(m%s,o)', r, n, r);
            else {
              var e = !1;
              switch (i.type) {
                case 'double':
                case 'float':
                  t('d%s=o.json&&!isFinite(m%s)?String(m%s):m%s', r, r, r, r);
                  break;
                case 'uint64':
                  e = !0;
                case 'int64':
                case 'sint64':
                case 'fixed64':
                case 'sfixed64':
                  t('if(typeof m%s==="number")', r)(
                    'd%s=o.longs===String?String(m%s):m%s',
                    r,
                    r,
                    r
                  )('else')(
                    'd%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s',
                    r,
                    r,
                    r,
                    r,
                    e ? 'true' : '',
                    r
                  );
                  break;
                case 'bytes':
                  t(
                    'd%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s',
                    r,
                    r,
                    r,
                    r,
                    r
                  );
                  break;
                default:
                  t('d%s=m%s', r, r);
              }
            }
            return t;
          }
          (n.fromObject = function (t) {
            var i = t.fieldsArray,
              n = d.codegen(
                ['d'],
                t.name + '$fromObject'
              )('if(d instanceof this.ctor)')('return d');
            if (!i.length) return n('return new this.ctor');
            n('var m=new this.ctor');
            for (var r = 0; r < i.length; ++r) {
              var e = i[r].resolve(),
                s = d.safeProp(e.name);
              e.map
                ? (n('if(d%s){', s)('if(typeof d%s!=="object")', s)(
                    'throw TypeError(%j)',
                    e.fullName + ': object expected'
                  )('m%s={}', s)(
                    'for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){',
                    s
                  ),
                  u(n, e, r, s + '[ks[i]]')('}')('}'))
                : e.repeated
                ? (n('if(d%s){', s)('if(!Array.isArray(d%s))', s)(
                    'throw TypeError(%j)',
                    e.fullName + ': array expected'
                  )('m%s=[]', s)('for(var i=0;i<d%s.length;++i){', s),
                  u(n, e, r, s + '[i]')('}')('}'))
                : (e.resolvedType instanceof l || n('if(d%s!=null){', s),
                  u(n, e, r, s),
                  e.resolvedType instanceof l || n('}'));
            }
            return n('return m');
          }),
            (n.toObject = function (t) {
              var i = t.fieldsArray.slice().sort(d.compareFieldsById);
              if (!i.length) return d.codegen()('return {}');
              for (
                var n = d.codegen(['m', 'o'], t.name + '$toObject')('if(!o)')(
                    'o={}'
                  )('var d={}'),
                  r = [],
                  e = [],
                  s = [],
                  u = 0;
                u < i.length;
                ++u
              )
                i[u].partOf ||
                  (i[u].resolve().repeated ? r : i[u].map ? e : s).push(i[u]);
              if (r.length) {
                for (n('if(o.arrays||o.defaults){'), u = 0; u < r.length; ++u)
                  n('d%s=[]', d.safeProp(r[u].name));
                n('}');
              }
              if (e.length) {
                for (n('if(o.objects||o.defaults){'), u = 0; u < e.length; ++u)
                  n('d%s={}', d.safeProp(e[u].name));
                n('}');
              }
              if (s.length) {
                for (n('if(o.defaults){'), u = 0; u < s.length; ++u) {
                  var o,
                    h = s[u],
                    f = d.safeProp(h.name);
                  h.resolvedType instanceof l
                    ? n(
                        'd%s=o.enums===String?%j:%j',
                        f,
                        h.resolvedType.valuesById[h.typeDefault],
                        h.typeDefault
                      )
                    : h.long
                    ? n('if(util.Long){')(
                        'var n=new util.Long(%i,%i,%j)',
                        h.typeDefault.low,
                        h.typeDefault.high,
                        h.typeDefault.unsigned
                      )(
                        'd%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n',
                        f
                      )('}else')(
                        'd%s=o.longs===String?%j:%i',
                        f,
                        h.typeDefault.toString(),
                        h.typeDefault.toNumber()
                      )
                    : h.bytes
                    ? ((o =
                        '[' +
                        Array.prototype.slice.call(h.typeDefault).join(',') +
                        ']'),
                      n(
                        'if(o.bytes===String)d%s=%j',
                        f,
                        String.fromCharCode.apply(String, h.typeDefault)
                      )('else{')('d%s=%s', f, o)(
                        'if(o.bytes!==Array)d%s=util.newBuffer(d%s)',
                        f,
                        f
                      )('}'))
                    : n('d%s=%j', f, h.typeDefault);
                }
                n('}');
              }
              for (var c = !1, u = 0; u < i.length; ++u) {
                var h = i[u],
                  a = t.i.indexOf(h),
                  f = d.safeProp(h.name);
                h.map
                  ? (c || ((c = !0), n('var ks2')),
                    n(
                      'if(m%s&&(ks2=Object.keys(m%s)).length){',
                      f,
                      f
                    )(
                      'd%s={}',
                      f
                    )('for(var j=0;j<ks2.length;++j){'),
                    v(n, h, a, f + '[ks2[j]]')('}'))
                  : h.repeated
                  ? (n('if(m%s&&m%s.length){', f, f)('d%s=[]', f)(
                      'for(var j=0;j<m%s.length;++j){',
                      f
                    ),
                    v(n, h, a, f + '[j]')('}'))
                  : (n('if(m%s!=null&&m.hasOwnProperty(%j)){', f, h.name),
                    v(n, h, a, f),
                    h.partOf &&
                      n('if(o.oneofs)')(
                        'd%s=%j',
                        d.safeProp(h.partOf.name),
                        h.name
                      )),
                  n('}');
              }
              return n('return d');
            });
        },
        { 14: 14, 33: 33 }
      ],
      12: [
        function (t, i, n) {
          i.exports = function (t) {
            var i = f.codegen(
              ['r', 'l'],
              t.name + '$decode'
            )('if(!(r instanceof Reader))')('r=Reader.create(r)')(
              'var c=l===undefined?r.len:r.pos+l,m=new this.ctor' +
                (t.fieldsArray.filter(function (t) {
                  return t.map;
                }).length
                  ? ',k,value'
                  : '')
            )('while(r.pos<c){')('var t=r.uint32()');
            t.group && i('if((t&7)===4)')('break');
            i('switch(t>>>3){');
            for (var n = 0; n < t.fieldsArray.length; ++n) {
              var r = t.i[n].resolve(),
                e = r.resolvedType instanceof o ? 'int32' : r.type,
                s = 'm' + f.safeProp(r.name);
              i('case %i: {', r.id),
                r.map
                  ? (i('if(%s===util.emptyObject)', s)('%s={}', s)(
                      'var c2 = r.uint32()+r.pos'
                    ),
                    h.defaults[r.keyType] !== g
                      ? i('k=%j', h.defaults[r.keyType])
                      : i('k=null'),
                    h.defaults[e] !== g
                      ? i('value=%j', h.defaults[e])
                      : i('value=null'),
                    i('while(r.pos<c2){')('var tag2=r.uint32()')(
                      'switch(tag2>>>3){'
                    )(
                      'case 1: k=r.%s(); break',
                      r.keyType
                    )('case 2:'),
                    h.basic[e] === g
                      ? i('value=types[%i].decode(r,r.uint32())', n)
                      : i('value=r.%s()', e),
                    i('break')('default:')('r.skipType(tag2&7)')('break')('}')(
                      '}'
                    ),
                    h.long[r.keyType] !== g
                      ? i(
                          '%s[typeof k==="object"?util.longToHash(k):k]=value',
                          s
                        )
                      : i('%s[k]=value', s))
                  : r.repeated
                  ? (i('if(!(%s&&%s.length))', s, s)('%s=[]', s),
                    h.packed[e] !== g &&
                      i('if((t&7)===2){')('var c2=r.uint32()+r.pos')(
                        'while(r.pos<c2)'
                      )(
                        '%s.push(r.%s())',
                        s,
                        e
                      )('}else'),
                    h.basic[e] === g
                      ? i(
                          r.resolvedType.group
                            ? '%s.push(types[%i].decode(r))'
                            : '%s.push(types[%i].decode(r,r.uint32()))',
                          s,
                          n
                        )
                      : i('%s.push(r.%s())', s, e))
                  : h.basic[e] === g
                  ? i(
                      r.resolvedType.group
                        ? '%s=types[%i].decode(r)'
                        : '%s=types[%i].decode(r,r.uint32())',
                      s,
                      n
                    )
                  : i('%s=r.%s()', s, e),
                i('break')('}');
            }
            for (
              i('default:')('r.skipType(t&7)')('break')('}')('}'), n = 0;
              n < t.i.length;
              ++n
            ) {
              var u = t.i[n];
              u.required &&
                i('if(!m.hasOwnProperty(%j))', u.name)(
                  'throw util.ProtocolError(%j,{instance:m})',
                  "missing required '" + u.name + "'"
                );
            }
            return i('return m');
          };
          var o = t(14),
            h = t(32),
            f = t(33);
        },
        { 14: 14, 32: 32, 33: 33 }
      ],
      13: [
        function (t, i, n) {
          i.exports = function (t) {
            for (
              var i,
                n = a.codegen(['m', 'w'], t.name + '$encode')('if(!w)')(
                  'w=Writer.create()'
                ),
                r = t.fieldsArray.slice().sort(a.compareFieldsById),
                e = 0;
              e < r.length;
              ++e
            ) {
              var s = r[e].resolve(),
                u = t.i.indexOf(s),
                o = s.resolvedType instanceof f ? 'int32' : s.type,
                h = c.basic[o];
              (i = 'm' + a.safeProp(s.name)),
                s.map
                  ? (n(
                      'if(%s!=null&&Object.hasOwnProperty.call(m,%j)){',
                      i,
                      s.name
                    )('for(var ks=Object.keys(%s),i=0;i<ks.length;++i){', i)(
                      'w.uint32(%i).fork().uint32(%i).%s(ks[i])',
                      ((s.id << 3) | 2) >>> 0,
                      8 | c.mapKey[s.keyType],
                      s.keyType
                    ),
                    h === g
                      ? n(
                          'types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()',
                          u,
                          i
                        )
                      : n('.uint32(%i).%s(%s[ks[i]]).ldelim()', 16 | h, o, i),
                    n('}')('}'))
                  : s.repeated
                  ? (n('if(%s!=null&&%s.length){', i, i),
                    s.packed && c.packed[o] !== g
                      ? n('w.uint32(%i).fork()', ((s.id << 3) | 2) >>> 0)(
                          'for(var i=0;i<%s.length;++i)',
                          i
                        )(
                          'w.%s(%s[i])',
                          o,
                          i
                        )('w.ldelim()')
                      : (n('for(var i=0;i<%s.length;++i)', i),
                        h === g
                          ? l(n, s, u, i + '[i]')
                          : n(
                              'w.uint32(%i).%s(%s[i])',
                              ((s.id << 3) | h) >>> 0,
                              o,
                              i
                            )),
                    n('}'))
                  : (s.optional &&
                      n(
                        'if(%s!=null&&Object.hasOwnProperty.call(m,%j))',
                        i,
                        s.name
                      ),
                    h === g
                      ? l(n, s, u, i)
                      : n(
                          'w.uint32(%i).%s(%s)',
                          ((s.id << 3) | h) >>> 0,
                          o,
                          i
                        ));
            }
            return n('return w');
          };
          var f = t(14),
            c = t(32),
            a = t(33);
          function l(t, i, n, r) {
            i.resolvedType.group
              ? t(
                  'types[%i].encode(%s,w.uint32(%i)).uint32(%i)',
                  n,
                  r,
                  ((i.id << 3) | 3) >>> 0,
                  ((i.id << 3) | 4) >>> 0
                )
              : t(
                  'types[%i].encode(%s,w.uint32(%i).fork()).ldelim()',
                  n,
                  r,
                  ((i.id << 3) | 2) >>> 0
                );
          }
        },
        { 14: 14, 32: 32, 33: 33 }
      ],
      14: [
        function (t, i, n) {
          i.exports = s;
          var h = t(22),
            r =
              ((((s.prototype = Object.create(h.prototype)).constructor =
                s).className = 'Enum'),
              t(21)),
            e = t(33);
          function s(t, i, n, r, e, s) {
            if ((h.call(this, t, n), i && 'object' != typeof i))
              throw TypeError('values must be an object');
            if (
              ((this.valuesById = {}),
              (this.values = Object.create(this.valuesById)),
              (this.comment = r),
              (this.comments = e || {}),
              (this.valuesOptions = s),
              (this.reserved = g),
              i)
            )
              for (var u = Object.keys(i), o = 0; o < u.length; ++o)
                'number' == typeof i[u[o]] &&
                  (this.valuesById[(this.values[u[o]] = i[u[o]])] = u[o]);
          }
          (s.fromJSON = function (t, i) {
            t = new s(t, i.values, i.options, i.comment, i.comments);
            return (t.reserved = i.reserved), t;
          }),
            (s.prototype.toJSON = function (t) {
              t = !!t && !!t.keepComments;
              return e.toObject([
                'options',
                this.options,
                'valuesOptions',
                this.valuesOptions,
                'values',
                this.values,
                'reserved',
                this.reserved && this.reserved.length ? this.reserved : g,
                'comment',
                t ? this.comment : g,
                'comments',
                t ? this.comments : g
              ]);
            }),
            (s.prototype.add = function (t, i, n, r) {
              if (!e.isString(t)) throw TypeError('name must be a string');
              if (!e.isInteger(i)) throw TypeError('id must be an integer');
              if (this.values[t] !== g)
                throw Error("duplicate name '" + t + "' in " + this);
              if (this.isReservedId(i))
                throw Error('id ' + i + ' is reserved in ' + this);
              if (this.isReservedName(t))
                throw Error("name '" + t + "' is reserved in " + this);
              if (this.valuesById[i] !== g) {
                if (!this.options || !this.options.allow_alias)
                  throw Error('duplicate id ' + i + ' in ' + this);
                this.values[t] = i;
              } else this.valuesById[(this.values[t] = i)] = t;
              return (
                r &&
                  (this.valuesOptions === g && (this.valuesOptions = {}),
                  (this.valuesOptions[t] = r || null)),
                (this.comments[t] = n || null),
                this
              );
            }),
            (s.prototype.remove = function (t) {
              if (!e.isString(t)) throw TypeError('name must be a string');
              var i = this.values[t];
              if (null == i)
                throw Error("name '" + t + "' does not exist in " + this);
              return (
                delete this.valuesById[i],
                delete this.values[t],
                delete this.comments[t],
                this.valuesOptions && delete this.valuesOptions[t],
                this
              );
            }),
            (s.prototype.isReservedId = function (t) {
              return r.isReservedId(this.reserved, t);
            }),
            (s.prototype.isReservedName = function (t) {
              return r.isReservedName(this.reserved, t);
            });
        },
        { 21: 21, 22: 22, 33: 33 }
      ],
      15: [
        function (t, i, n) {
          i.exports = u;
          var r,
            o = t(22),
            e =
              ((((u.prototype = Object.create(o.prototype)).constructor =
                u).className = 'Field'),
              t(14)),
            h = t(32),
            f = t(33),
            c = /^required|optional|repeated$/;
          function u(t, i, n, r, e, s, u) {
            if (
              (f.isObject(r)
                ? ((u = e), (s = r), (r = e = g))
                : f.isObject(e) && ((u = s), (s = e), (e = g)),
              o.call(this, t, s),
              !f.isInteger(i) || i < 0)
            )
              throw TypeError('id must be a non-negative integer');
            if (!f.isString(n)) throw TypeError('type must be a string');
            if (r !== g && !c.test((r = r.toString().toLowerCase())))
              throw TypeError('rule must be a string rule');
            if (e !== g && !f.isString(e))
              throw TypeError('extend must be a string');
            (this.rule =
              (r = 'proto3_optional' === r ? 'optional' : r) && 'optional' !== r
                ? r
                : g),
              (this.type = n),
              (this.id = i),
              (this.extend = e || g),
              (this.required = 'required' === r),
              (this.optional = !this.required),
              (this.repeated = 'repeated' === r),
              (this.map = !1),
              (this.message = null),
              (this.partOf = null),
              (this.typeDefault = null),
              (this.defaultValue = null),
              (this.long = !!f.Long && h.long[n] !== g),
              (this.bytes = 'bytes' === n),
              (this.resolvedType = null),
              (this.extensionField = null),
              (this.declaringField = null),
              (this.n = null),
              (this.comment = u);
          }
          (u.fromJSON = function (t, i) {
            return new u(
              t,
              i.id,
              i.type,
              i.rule,
              i.extend,
              i.options,
              i.comment
            );
          }),
            Object.defineProperty(u.prototype, 'packed', {
              get: function () {
                return (
                  null === this.n && (this.n = !1 !== this.getOption('packed')),
                  this.n
                );
              }
            }),
            (u.prototype.setOption = function (t, i, n) {
              return (
                'packed' === t && (this.n = null),
                o.prototype.setOption.call(this, t, i, n)
              );
            }),
            (u.prototype.toJSON = function (t) {
              t = !!t && !!t.keepComments;
              return f.toObject([
                'rule',
                ('optional' !== this.rule && this.rule) || g,
                'type',
                this.type,
                'id',
                this.id,
                'extend',
                this.extend,
                'options',
                this.options,
                'comment',
                t ? this.comment : g
              ]);
            }),
            (u.prototype.resolve = function () {
              var t;
              return this.resolved
                ? this
                : ((this.typeDefault = h.defaults[this.type]) === g
                    ? ((this.resolvedType = (
                        this.declaringField || this
                      ).parent.lookupTypeOrEnum(this.type)),
                      this.resolvedType instanceof r
                        ? (this.typeDefault = null)
                        : (this.typeDefault =
                            this.resolvedType.values[
                              Object.keys(this.resolvedType.values)[0]
                            ]))
                    : this.options &&
                      this.options.proto3_optional &&
                      (this.typeDefault = null),
                  this.options &&
                    null != this.options.default &&
                    ((this.typeDefault = this.options.default),
                    this.resolvedType instanceof e &&
                      'string' == typeof this.typeDefault &&
                      (this.typeDefault =
                        this.resolvedType.values[this.typeDefault])),
                  this.options &&
                    ((!0 !== this.options.packed &&
                      (this.options.packed === g ||
                        !this.resolvedType ||
                        this.resolvedType instanceof e)) ||
                      delete this.options.packed,
                    Object.keys(this.options).length || (this.options = g)),
                  this.long
                    ? ((this.typeDefault = f.Long.fromNumber(
                        this.typeDefault,
                        'u' == (this.type[0] || '')
                      )),
                      Object.freeze && Object.freeze(this.typeDefault))
                    : this.bytes &&
                      'string' == typeof this.typeDefault &&
                      (f.base64.test(this.typeDefault)
                        ? f.base64.decode(
                            this.typeDefault,
                            (t = f.newBuffer(
                              f.base64.length(this.typeDefault)
                            )),
                            0
                          )
                        : f.utf8.write(
                            this.typeDefault,
                            (t = f.newBuffer(f.utf8.length(this.typeDefault))),
                            0
                          ),
                      (this.typeDefault = t)),
                  this.map
                    ? (this.defaultValue = f.emptyObject)
                    : this.repeated
                    ? (this.defaultValue = f.emptyArray)
                    : (this.defaultValue = this.typeDefault),
                  this.parent instanceof r &&
                    (this.parent.ctor.prototype[this.name] = this.defaultValue),
                  o.prototype.resolve.call(this));
            }),
            (u.d = function (n, r, e, s) {
              return (
                'function' == typeof r
                  ? (r = f.decorateType(r).name)
                  : r && 'object' == typeof r && (r = f.decorateEnum(r).name),
                function (t, i) {
                  f.decorateType(t.constructor).add(
                    new u(i, n, r, e, { default: s })
                  );
                }
              );
            }),
            (u.r = function (t) {
              r = t;
            });
        },
        { 14: 14, 22: 22, 32: 32, 33: 33 }
      ],
      16: [
        function (t, i, n) {
          var r = (i.exports = t(17));
          (r.build = 'light'),
            (r.load = function (t, i, n) {
              return (i =
                'function' == typeof i
                  ? ((n = i), new r.Root())
                  : i || new r.Root()).load(t, n);
            }),
            (r.loadSync = function (t, i) {
              return (i = i || new r.Root()).loadSync(t);
            }),
            (r.encoder = t(13)),
            (r.decoder = t(12)),
            (r.verifier = t(36)),
            (r.converter = t(11)),
            (r.ReflectionObject = t(22)),
            (r.Namespace = t(21)),
            (r.Root = t(26)),
            (r.Enum = t(14)),
            (r.Type = t(31)),
            (r.Field = t(15)),
            (r.OneOf = t(23)),
            (r.MapField = t(18)),
            (r.Service = t(30)),
            (r.Method = t(20)),
            (r.Message = t(19)),
            (r.wrappers = t(37)),
            (r.types = t(32)),
            (r.util = t(33)),
            r.ReflectionObject.r(r.Root),
            r.Namespace.r(r.Type, r.Service, r.Enum),
            r.Root.r(r.Type),
            r.Field.r(r.Type);
        },
        {
          11: 11,
          12: 12,
          13: 13,
          14: 14,
          15: 15,
          17: 17,
          18: 18,
          19: 19,
          20: 20,
          21: 21,
          22: 22,
          23: 23,
          26: 26,
          30: 30,
          31: 31,
          32: 32,
          33: 33,
          36: 36,
          37: 37
        }
      ],
      17: [
        function (t, i, n) {
          var r = n;
          function e() {
            r.util.r(), r.Writer.r(r.BufferWriter), r.Reader.r(r.BufferReader);
          }
          (r.build = 'minimal'),
            (r.Writer = t(38)),
            (r.BufferWriter = t(39)),
            (r.Reader = t(24)),
            (r.BufferReader = t(25)),
            (r.util = t(35)),
            (r.rpc = t(28)),
            (r.roots = t(27)),
            (r.configure = e),
            e();
        },
        { 24: 24, 25: 25, 27: 27, 28: 28, 35: 35, 38: 38, 39: 39 }
      ],
      18: [
        function (t, i, n) {
          i.exports = s;
          var u = t(15),
            r =
              ((((s.prototype = Object.create(u.prototype)).constructor =
                s).className = 'MapField'),
              t(32)),
            o = t(33);
          function s(t, i, n, r, e, s) {
            if ((u.call(this, t, i, r, g, g, e, s), !o.isString(n)))
              throw TypeError('keyType must be a string');
            (this.keyType = n), (this.resolvedKeyType = null), (this.map = !0);
          }
          (s.fromJSON = function (t, i) {
            return new s(t, i.id, i.keyType, i.type, i.options, i.comment);
          }),
            (s.prototype.toJSON = function (t) {
              t = !!t && !!t.keepComments;
              return o.toObject([
                'keyType',
                this.keyType,
                'type',
                this.type,
                'id',
                this.id,
                'extend',
                this.extend,
                'options',
                this.options,
                'comment',
                t ? this.comment : g
              ]);
            }),
            (s.prototype.resolve = function () {
              if (this.resolved) return this;
              if (r.mapKey[this.keyType] === g)
                throw Error('invalid key type: ' + this.keyType);
              return u.prototype.resolve.call(this);
            }),
            (s.d = function (n, r, e) {
              return (
                'function' == typeof e
                  ? (e = o.decorateType(e).name)
                  : e && 'object' == typeof e && (e = o.decorateEnum(e).name),
                function (t, i) {
                  o.decorateType(t.constructor).add(new s(i, n, r, e));
                }
              );
            });
        },
        { 15: 15, 32: 32, 33: 33 }
      ],
      19: [
        function (t, i, n) {
          i.exports = e;
          var r = t(35);
          function e(t) {
            if (t)
              for (var i = Object.keys(t), n = 0; n < i.length; ++n)
                this[i[n]] = t[i[n]];
          }
          (e.create = function (t) {
            return this.$type.create(t);
          }),
            (e.encode = function (t, i) {
              return this.$type.encode(t, i);
            }),
            (e.encodeDelimited = function (t, i) {
              return this.$type.encodeDelimited(t, i);
            }),
            (e.decode = function (t) {
              return this.$type.decode(t);
            }),
            (e.decodeDelimited = function (t) {
              return this.$type.decodeDelimited(t);
            }),
            (e.verify = function (t) {
              return this.$type.verify(t);
            }),
            (e.fromObject = function (t) {
              return this.$type.fromObject(t);
            }),
            (e.toObject = function (t, i) {
              return this.$type.toObject(t, i);
            }),
            (e.prototype.toJSON = function () {
              return this.$type.toObject(this, r.toJSONOptions);
            });
        },
        { 35: 35 }
      ],
      20: [
        function (t, i, n) {
          i.exports = r;
          var f = t(22),
            c =
              ((((r.prototype = Object.create(f.prototype)).constructor =
                r).className = 'Method'),
              t(33));
          function r(t, i, n, r, e, s, u, o, h) {
            if (
              (c.isObject(e)
                ? ((u = e), (e = s = g))
                : c.isObject(s) && ((u = s), (s = g)),
              i !== g && !c.isString(i))
            )
              throw TypeError('type must be a string');
            if (!c.isString(n)) throw TypeError('requestType must be a string');
            if (!c.isString(r))
              throw TypeError('responseType must be a string');
            f.call(this, t, u),
              (this.type = i || 'rpc'),
              (this.requestType = n),
              (this.requestStream = !!e || g),
              (this.responseType = r),
              (this.responseStream = !!s || g),
              (this.resolvedRequestType = null),
              (this.resolvedResponseType = null),
              (this.comment = o),
              (this.parsedOptions = h);
          }
          (r.fromJSON = function (t, i) {
            return new r(
              t,
              i.type,
              i.requestType,
              i.responseType,
              i.requestStream,
              i.responseStream,
              i.options,
              i.comment,
              i.parsedOptions
            );
          }),
            (r.prototype.toJSON = function (t) {
              t = !!t && !!t.keepComments;
              return c.toObject([
                'type',
                ('rpc' !== this.type && this.type) || g,
                'requestType',
                this.requestType,
                'requestStream',
                this.requestStream,
                'responseType',
                this.responseType,
                'responseStream',
                this.responseStream,
                'options',
                this.options,
                'comment',
                t ? this.comment : g,
                'parsedOptions',
                this.parsedOptions
              ]);
            }),
            (r.prototype.resolve = function () {
              return this.resolved
                ? this
                : ((this.resolvedRequestType = this.parent.lookupType(
                    this.requestType
                  )),
                  (this.resolvedResponseType = this.parent.lookupType(
                    this.responseType
                  )),
                  f.prototype.resolve.call(this));
            });
        },
        { 22: 22, 33: 33 }
      ],
      21: [
        function (t, i, n) {
          i.exports = a;
          var e,
            s,
            u,
            r = t(22),
            o =
              ((((a.prototype = Object.create(r.prototype)).constructor =
                a).className = 'Namespace'),
              t(15)),
            h = t(33),
            f = t(23);
          function c(t, i) {
            if (!t || !t.length) return g;
            for (var n = {}, r = 0; r < t.length; ++r)
              n[t[r].name] = t[r].toJSON(i);
            return n;
          }
          function a(t, i) {
            r.call(this, t, i), (this.nested = g), (this.e = null);
          }
          function l(t) {
            return (t.e = null), t;
          }
          (a.fromJSON = function (t, i) {
            return new a(t, i.options).addJSON(i.nested);
          }),
            (a.arrayToJSON = c),
            (a.isReservedId = function (t, i) {
              if (t)
                for (var n = 0; n < t.length; ++n)
                  if ('string' != typeof t[n] && t[n][0] <= i && t[n][1] > i)
                    return !0;
              return !1;
            }),
            (a.isReservedName = function (t, i) {
              if (t)
                for (var n = 0; n < t.length; ++n) if (t[n] === i) return !0;
              return !1;
            }),
            Object.defineProperty(a.prototype, 'nestedArray', {
              get: function () {
                return this.e || (this.e = h.toArray(this.nested));
              }
            }),
            (a.prototype.toJSON = function (t) {
              return h.toObject([
                'options',
                this.options,
                'nested',
                c(this.nestedArray, t)
              ]);
            }),
            (a.prototype.addJSON = function (t) {
              if (t)
                for (var i, n = Object.keys(t), r = 0; r < n.length; ++r)
                  (i = t[n[r]]),
                    this.add(
                      (i.fields !== g
                        ? e
                        : i.values !== g
                        ? u
                        : i.methods !== g
                        ? s
                        : i.id !== g
                        ? o
                        : a
                      ).fromJSON(n[r], i)
                    );
              return this;
            }),
            (a.prototype.get = function (t) {
              return (this.nested && this.nested[t]) || null;
            }),
            (a.prototype.getEnum = function (t) {
              if (this.nested && this.nested[t] instanceof u)
                return this.nested[t].values;
              throw Error('no such enum: ' + t);
            }),
            (a.prototype.add = function (t) {
              if (
                !(
                  (t instanceof o && t.extend !== g) ||
                  t instanceof e ||
                  t instanceof f ||
                  t instanceof u ||
                  t instanceof s ||
                  t instanceof a
                )
              )
                throw TypeError('object must be a valid nested object');
              if (this.nested) {
                var i = this.get(t.name);
                if (i) {
                  if (
                    !(i instanceof a && t instanceof a) ||
                    i instanceof e ||
                    i instanceof s
                  )
                    throw Error("duplicate name '" + t.name + "' in " + this);
                  for (var n = i.nestedArray, r = 0; r < n.length; ++r)
                    t.add(n[r]);
                  this.remove(i),
                    this.nested || (this.nested = {}),
                    t.setOptions(i.options, !0);
                }
              } else this.nested = {};
              return (this.nested[t.name] = t).onAdd(this), l(this);
            }),
            (a.prototype.remove = function (t) {
              if (!(t instanceof r))
                throw TypeError('object must be a ReflectionObject');
              if (t.parent !== this)
                throw Error(t + ' is not a member of ' + this);
              return (
                delete this.nested[t.name],
                Object.keys(this.nested).length || (this.nested = g),
                t.onRemove(this),
                l(this)
              );
            }),
            (a.prototype.define = function (t, i) {
              if (h.isString(t)) t = t.split('.');
              else if (!Array.isArray(t)) throw TypeError('illegal path');
              if (t && t.length && '' === t[0])
                throw Error('path must be relative');
              for (var n = this; 0 < t.length; ) {
                var r = t.shift();
                if (n.nested && n.nested[r]) {
                  if (!((n = n.nested[r]) instanceof a))
                    throw Error('path conflicts with non-namespace objects');
                } else n.add((n = new a(r)));
              }
              return i && n.addJSON(i), n;
            }),
            (a.prototype.resolveAll = function () {
              for (var t = this.nestedArray, i = 0; i < t.length; )
                t[i] instanceof a ? t[i++].resolveAll() : t[i++].resolve();
              return this.resolve();
            }),
            (a.prototype.lookup = function (t, i, n) {
              if (
                ('boolean' == typeof i
                  ? ((n = i), (i = g))
                  : i && !Array.isArray(i) && (i = [i]),
                h.isString(t) && t.length)
              ) {
                if ('.' === t) return this.root;
                t = t.split('.');
              } else if (!t.length) return this;
              if ('' === t[0]) return this.root.lookup(t.slice(1), i);
              var r = this.get(t[0]);
              if (r) {
                if (1 === t.length) {
                  if (!i || ~i.indexOf(r.constructor)) return r;
                } else if (r instanceof a && (r = r.lookup(t.slice(1), i, !0)))
                  return r;
              } else
                for (var e = 0; e < this.nestedArray.length; ++e)
                  if (
                    this.e[e] instanceof a &&
                    (r = this.e[e].lookup(t, i, !0))
                  )
                    return r;
              return null === this.parent || n
                ? null
                : this.parent.lookup(t, i);
            }),
            (a.prototype.lookupType = function (t) {
              var i = this.lookup(t, [e]);
              if (i) return i;
              throw Error('no such type: ' + t);
            }),
            (a.prototype.lookupEnum = function (t) {
              var i = this.lookup(t, [u]);
              if (i) return i;
              throw Error("no such Enum '" + t + "' in " + this);
            }),
            (a.prototype.lookupTypeOrEnum = function (t) {
              var i = this.lookup(t, [e, u]);
              if (i) return i;
              throw Error("no such Type or Enum '" + t + "' in " + this);
            }),
            (a.prototype.lookupService = function (t) {
              var i = this.lookup(t, [s]);
              if (i) return i;
              throw Error("no such Service '" + t + "' in " + this);
            }),
            (a.r = function (t, i, n) {
              (e = t), (s = i), (u = n);
            });
        },
        { 15: 15, 22: 22, 23: 23, 33: 33 }
      ],
      22: [
        function (t, i, n) {
          (i.exports = e).className = 'ReflectionObject';
          var r,
            u = t(33);
          function e(t, i) {
            if (!u.isString(t)) throw TypeError('name must be a string');
            if (i && !u.isObject(i))
              throw TypeError('options must be an object');
            (this.options = i),
              (this.parsedOptions = null),
              (this.name = t),
              (this.parent = null),
              (this.resolved = !1),
              (this.comment = null),
              (this.filename = null);
          }
          Object.defineProperties(e.prototype, {
            root: {
              get: function () {
                for (var t = this; null !== t.parent; ) t = t.parent;
                return t;
              }
            },
            fullName: {
              get: function () {
                for (var t = [this.name], i = this.parent; i; )
                  t.unshift(i.name), (i = i.parent);
                return t.join('.');
              }
            }
          }),
            (e.prototype.toJSON = function () {
              throw Error();
            }),
            (e.prototype.onAdd = function (t) {
              this.parent && this.parent !== t && this.parent.remove(this),
                (this.parent = t),
                (this.resolved = !1);
              t = t.root;
              t instanceof r && t.u(this);
            }),
            (e.prototype.onRemove = function (t) {
              t = t.root;
              t instanceof r && t.o(this),
                (this.parent = null),
                (this.resolved = !1);
            }),
            (e.prototype.resolve = function () {
              return (
                this.resolved ||
                  (this.root instanceof r && (this.resolved = !0)),
                this
              );
            }),
            (e.prototype.getOption = function (t) {
              return this.options ? this.options[t] : g;
            }),
            (e.prototype.setOption = function (t, i, n) {
              return (
                (n && this.options && this.options[t] !== g) ||
                  ((this.options || (this.options = {}))[t] = i),
                this
              );
            }),
            (e.prototype.setParsedOption = function (i, t, n) {
              this.parsedOptions || (this.parsedOptions = []);
              var r,
                e,
                s = this.parsedOptions;
              return (
                n
                  ? (r = s.find(function (t) {
                      return Object.prototype.hasOwnProperty.call(t, i);
                    }))
                    ? ((e = r[i]), u.setProperty(e, n, t))
                    : (((r = {})[i] = u.setProperty({}, n, t)), s.push(r))
                  : (((e = {})[i] = t), s.push(e)),
                this
              );
            }),
            (e.prototype.setOptions = function (t, i) {
              if (t)
                for (var n = Object.keys(t), r = 0; r < n.length; ++r)
                  this.setOption(n[r], t[n[r]], i);
              return this;
            }),
            (e.prototype.toString = function () {
              var t = this.constructor.className,
                i = this.fullName;
              return i.length ? t + ' ' + i : t;
            }),
            (e.r = function (t) {
              r = t;
            });
        },
        { 33: 33 }
      ],
      23: [
        function (t, i, n) {
          i.exports = u;
          var e = t(22),
            r =
              ((((u.prototype = Object.create(e.prototype)).constructor =
                u).className = 'OneOf'),
              t(15)),
            s = t(33);
          function u(t, i, n, r) {
            if (
              (Array.isArray(i) || ((n = i), (i = g)),
              e.call(this, t, n),
              i !== g && !Array.isArray(i))
            )
              throw TypeError('fieldNames must be an Array');
            (this.oneof = i || []), (this.fieldsArray = []), (this.comment = r);
          }
          function o(t) {
            if (t.parent)
              for (var i = 0; i < t.fieldsArray.length; ++i)
                t.fieldsArray[i].parent || t.parent.add(t.fieldsArray[i]);
          }
          (u.fromJSON = function (t, i) {
            return new u(t, i.oneof, i.options, i.comment);
          }),
            (u.prototype.toJSON = function (t) {
              t = !!t && !!t.keepComments;
              return s.toObject([
                'options',
                this.options,
                'oneof',
                this.oneof,
                'comment',
                t ? this.comment : g
              ]);
            }),
            (u.prototype.add = function (t) {
              if (t instanceof r)
                return (
                  t.parent && t.parent !== this.parent && t.parent.remove(t),
                  this.oneof.push(t.name),
                  this.fieldsArray.push(t),
                  o((t.partOf = this)),
                  this
                );
              throw TypeError('field must be a Field');
            }),
            (u.prototype.remove = function (t) {
              if (!(t instanceof r)) throw TypeError('field must be a Field');
              var i = this.fieldsArray.indexOf(t);
              if (i < 0) throw Error(t + ' is not a member of ' + this);
              return (
                this.fieldsArray.splice(i, 1),
                -1 < (i = this.oneof.indexOf(t.name)) &&
                  this.oneof.splice(i, 1),
                (t.partOf = null),
                this
              );
            }),
            (u.prototype.onAdd = function (t) {
              e.prototype.onAdd.call(this, t);
              for (var i = 0; i < this.oneof.length; ++i) {
                var n = t.get(this.oneof[i]);
                n && !n.partOf && (n.partOf = this).fieldsArray.push(n);
              }
              o(this);
            }),
            (u.prototype.onRemove = function (t) {
              for (var i, n = 0; n < this.fieldsArray.length; ++n)
                (i = this.fieldsArray[n]).parent && i.parent.remove(i);
              e.prototype.onRemove.call(this, t);
            }),
            (u.d = function () {
              for (
                var n = Array(arguments.length), t = 0;
                t < arguments.length;

              )
                n[t] = arguments[t++];
              return function (t, i) {
                s.decorateType(t.constructor).add(new u(i, n)),
                  Object.defineProperty(t, i, {
                    get: s.oneOfGetter(n),
                    set: s.oneOfSetter(n)
                  });
              };
            });
        },
        { 15: 15, 22: 22, 33: 33 }
      ],
      24: [
        function (t, i, n) {
          i.exports = h;
          var r,
            e = t(35),
            s = e.LongBits,
            u = e.utf8;
          function o(t, i) {
            return RangeError(
              'index out of range: ' + t.pos + ' + ' + (i || 1) + ' > ' + t.len
            );
          }
          function h(t) {
            (this.buf = t), (this.pos = 0), (this.len = t.length);
          }
          function f() {
            return e.Buffer
              ? function (t) {
                  return (h.create = function (t) {
                    return e.Buffer.isBuffer(t) ? new r(t) : a(t);
                  })(t);
                }
              : a;
          }
          var c,
            a =
              'undefined' != typeof Uint8Array
                ? function (t) {
                    if (t instanceof Uint8Array || Array.isArray(t))
                      return new h(t);
                    throw Error('illegal buffer');
                  }
                : function (t) {
                    if (Array.isArray(t)) return new h(t);
                    throw Error('illegal buffer');
                  };
          function l() {
            var t = new s(0, 0),
              i = 0;
            if (!(4 < this.len - this.pos)) {
              for (; i < 3; ++i) {
                if (this.pos >= this.len) throw o(this);
                if (
                  ((t.lo =
                    (t.lo | ((127 & this.buf[this.pos]) << (7 * i))) >>> 0),
                  this.buf[this.pos++] < 128)
                )
                  return t;
              }
              return (
                (t.lo =
                  (t.lo | ((127 & this.buf[this.pos++]) << (7 * i))) >>> 0),
                t
              );
            }
            for (; i < 4; ++i)
              if (
                ((t.lo =
                  (t.lo | ((127 & this.buf[this.pos]) << (7 * i))) >>> 0),
                this.buf[this.pos++] < 128)
              )
                return t;
            if (
              ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
              (t.hi = (t.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (((i = 0), 4 < this.len - this.pos)) {
              for (; i < 5; ++i)
                if (
                  ((t.hi =
                    (t.hi | ((127 & this.buf[this.pos]) << (7 * i + 3))) >>> 0),
                  this.buf[this.pos++] < 128)
                )
                  return t;
            } else
              for (; i < 5; ++i) {
                if (this.pos >= this.len) throw o(this);
                if (
                  ((t.hi =
                    (t.hi | ((127 & this.buf[this.pos]) << (7 * i + 3))) >>> 0),
                  this.buf[this.pos++] < 128)
                )
                  return t;
              }
            throw Error('invalid varint encoding');
          }
          function d(t, i) {
            return (
              (t[i - 4] |
                (t[i - 3] << 8) |
                (t[i - 2] << 16) |
                (t[i - 1] << 24)) >>>
              0
            );
          }
          function v() {
            if (this.pos + 8 > this.len) throw o(this, 8);
            return new s(
              d(this.buf, (this.pos += 4)),
              d(this.buf, (this.pos += 4))
            );
          }
          (h.create = f()),
            (h.prototype.h =
              e.Array.prototype.subarray || e.Array.prototype.slice),
            (h.prototype.uint32 =
              ((c = 4294967295),
              function () {
                if (
                  ((c = (127 & this.buf[this.pos]) >>> 0),
                  this.buf[this.pos++] < 128 ||
                    ((c = (c | ((127 & this.buf[this.pos]) << 7)) >>> 0),
                    this.buf[this.pos++] < 128 ||
                      ((c = (c | ((127 & this.buf[this.pos]) << 14)) >>> 0),
                      this.buf[this.pos++] < 128 ||
                        ((c = (c | ((127 & this.buf[this.pos]) << 21)) >>> 0),
                        this.buf[this.pos++] < 128 ||
                          ((c = (c | ((15 & this.buf[this.pos]) << 28)) >>> 0),
                          this.buf[this.pos++] < 128 ||
                            !((this.pos += 5) > this.len))))))
                )
                  return c;
                throw ((this.pos = this.len), o(this, 10));
              })),
            (h.prototype.int32 = function () {
              return 0 | this.uint32();
            }),
            (h.prototype.sint32 = function () {
              var t = this.uint32();
              return ((t >>> 1) ^ -(1 & t)) | 0;
            }),
            (h.prototype.bool = function () {
              return 0 !== this.uint32();
            }),
            (h.prototype.fixed32 = function () {
              if (this.pos + 4 > this.len) throw o(this, 4);
              return d(this.buf, (this.pos += 4));
            }),
            (h.prototype.sfixed32 = function () {
              if (this.pos + 4 > this.len) throw o(this, 4);
              return 0 | d(this.buf, (this.pos += 4));
            }),
            (h.prototype.float = function () {
              if (this.pos + 4 > this.len) throw o(this, 4);
              var t = e.float.readFloatLE(this.buf, this.pos);
              return (this.pos += 4), t;
            }),
            (h.prototype.double = function () {
              if (this.pos + 8 > this.len) throw o(this, 4);
              var t = e.float.readDoubleLE(this.buf, this.pos);
              return (this.pos += 8), t;
            }),
            (h.prototype.bytes = function () {
              var t = this.uint32(),
                i = this.pos,
                n = this.pos + t;
              if (n > this.len) throw o(this, t);
              return (
                (this.pos += t),
                Array.isArray(this.buf)
                  ? this.buf.slice(i, n)
                  : i === n
                  ? new this.buf.constructor(0)
                  : this.h.call(this.buf, i, n)
              );
            }),
            (h.prototype.string = function () {
              var t = this.bytes();
              return u.read(t, 0, t.length);
            }),
            (h.prototype.skip = function (t) {
              if ('number' == typeof t) {
                if (this.pos + t > this.len) throw o(this, t);
                this.pos += t;
              } else
                do {
                  if (this.pos >= this.len) throw o(this);
                } while (128 & this.buf[this.pos++]);
              return this;
            }),
            (h.prototype.skipType = function (t) {
              switch (t) {
                case 0:
                  this.skip();
                  break;
                case 1:
                  this.skip(8);
                  break;
                case 2:
                  this.skip(this.uint32());
                  break;
                case 3:
                  for (; 4 != (t = 7 & this.uint32()); ) this.skipType(t);
                  break;
                case 5:
                  this.skip(4);
                  break;
                default:
                  throw Error(
                    'invalid wire type ' + t + ' at offset ' + this.pos
                  );
              }
              return this;
            }),
            (h.r = function (t) {
              (r = t), (h.create = f()), r.r();
              var i = e.Long ? 'toLong' : 'toNumber';
              e.merge(h.prototype, {
                int64: function () {
                  return l.call(this)[i](!1);
                },
                uint64: function () {
                  return l.call(this)[i](!0);
                },
                sint64: function () {
                  return l.call(this).zzDecode()[i](!1);
                },
                fixed64: function () {
                  return v.call(this)[i](!0);
                },
                sfixed64: function () {
                  return v.call(this)[i](!1);
                }
              });
            });
        },
        { 35: 35 }
      ],
      25: [
        function (t, i, n) {
          i.exports = s;
          var r = t(24),
            e =
              (((s.prototype = Object.create(r.prototype)).constructor = s),
              t(35));
          function s(t) {
            r.call(this, t);
          }
          (s.r = function () {
            e.Buffer && (s.prototype.h = e.Buffer.prototype.slice);
          }),
            (s.prototype.string = function () {
              var t = this.uint32();
              return this.buf.utf8Slice
                ? this.buf.utf8Slice(
                    this.pos,
                    (this.pos = Math.min(this.pos + t, this.len))
                  )
                : this.buf.toString(
                    'utf-8',
                    this.pos,
                    (this.pos = Math.min(this.pos + t, this.len))
                  );
            }),
            s.r();
        },
        { 24: 24, 35: 35 }
      ],
      26: [
        function (t, i, n) {
          i.exports = h;
          var r,
            d,
            v,
            e = t(21),
            s =
              ((((h.prototype = Object.create(e.prototype)).constructor =
                h).className = 'Root'),
              t(15)),
            u = t(14),
            o = t(23),
            b = t(33);
          function h(t) {
            e.call(this, '', t), (this.deferred = []), (this.files = []);
          }
          function p() {}
          (h.fromJSON = function (t, i) {
            return (
              (i = i || new h()),
              t.options && i.setOptions(t.options),
              i.addJSON(t.nested)
            );
          }),
            (h.prototype.resolvePath = b.path.resolve),
            (h.prototype.fetch = b.fetch),
            (h.prototype.load = function t(i, s, e) {
              'function' == typeof s && ((e = s), (s = g));
              var u = this;
              if (!e) return b.asPromise(t, u, i, s);
              var o = e === p;
              function h(t, i) {
                if (e) {
                  var n = e;
                  if (((e = null), o)) throw t;
                  n(t, i);
                }
              }
              function f(t) {
                var i = t.lastIndexOf('google/protobuf/');
                if (-1 < i) {
                  t = t.substring(i);
                  if (t in v) return t;
                }
                return null;
              }
              function c(t, i) {
                try {
                  if (
                    (b.isString(i) &&
                      '{' == (i[0] || '') &&
                      (i = JSON.parse(i)),
                    b.isString(i))
                  ) {
                    d.filename = t;
                    var n,
                      r = d(i, u, s),
                      e = 0;
                    if (r.imports)
                      for (; e < r.imports.length; ++e)
                        (n =
                          f(r.imports[e]) || u.resolvePath(t, r.imports[e])) &&
                          a(n);
                    if (r.weakImports)
                      for (e = 0; e < r.weakImports.length; ++e)
                        (n =
                          f(r.weakImports[e]) ||
                          u.resolvePath(t, r.weakImports[e])) && a(n, !0);
                  } else u.setOptions(i.options).addJSON(i.nested);
                } catch (t) {
                  h(t);
                }
                o || l || h(null, u);
              }
              function a(n, r) {
                if (!~u.files.indexOf(n))
                  if ((u.files.push(n), n in v))
                    o
                      ? c(n, v[n])
                      : (++l,
                        setTimeout(function () {
                          --l, c(n, v[n]);
                        }));
                  else if (o) {
                    var t;
                    try {
                      t = b.fs.readFileSync(n).toString('utf8');
                    } catch (t) {
                      return void (r || h(t));
                    }
                    c(n, t);
                  } else
                    ++l,
                      u.fetch(n, function (t, i) {
                        --l, e && (t ? (r ? l || h(null, u) : h(t)) : c(n, i));
                      });
              }
              var l = 0;
              b.isString(i) && (i = [i]);
              for (var n, r = 0; r < i.length; ++r)
                (n = u.resolvePath('', i[r])) && a(n);
              return o ? u : (l || h(null, u), g);
            }),
            (h.prototype.loadSync = function (t, i) {
              if (b.isNode) return this.load(t, i, p);
              throw Error('not supported');
            }),
            (h.prototype.resolveAll = function () {
              if (this.deferred.length)
                throw Error(
                  'unresolvable extensions: ' +
                    this.deferred
                      .map(function (t) {
                        return (
                          "'extend " + t.extend + "' in " + t.parent.fullName
                        );
                      })
                      .join(', ')
                );
              return e.prototype.resolveAll.call(this);
            });
          var f = /^[A-Z]/;
          function c(t, i) {
            var n,
              r = i.parent.lookup(i.extend);
            if (r)
              return (
                (((n = new s(
                  i.fullName,
                  i.id,
                  i.type,
                  i.rule,
                  g,
                  i.options
                )).declaringField = i).extensionField = n),
                r.add(n),
                1
              );
          }
          (h.prototype.u = function (t) {
            if (t instanceof s)
              t.extend === g ||
                t.extensionField ||
                c(0, t) ||
                this.deferred.push(t);
            else if (t instanceof u)
              f.test(t.name) && (t.parent[t.name] = t.values);
            else if (!(t instanceof o)) {
              if (t instanceof r)
                for (var i = 0; i < this.deferred.length; )
                  c(0, this.deferred[i]) ? this.deferred.splice(i, 1) : ++i;
              for (var n = 0; n < t.nestedArray.length; ++n) this.u(t.e[n]);
              f.test(t.name) && (t.parent[t.name] = t);
            }
          }),
            (h.prototype.o = function (t) {
              var i;
              if (t instanceof s)
                t.extend !== g &&
                  (t.extensionField
                    ? (t.extensionField.parent.remove(t.extensionField),
                      (t.extensionField = null))
                    : -1 < (i = this.deferred.indexOf(t)) &&
                      this.deferred.splice(i, 1));
              else if (t instanceof u)
                f.test(t.name) && delete t.parent[t.name];
              else if (t instanceof e) {
                for (var n = 0; n < t.nestedArray.length; ++n) this.o(t.e[n]);
                f.test(t.name) && delete t.parent[t.name];
              }
            }),
            (h.r = function (t, i, n) {
              (r = t), (d = i), (v = n);
            });
        },
        { 14: 14, 15: 15, 21: 21, 23: 23, 33: 33 }
      ],
      27: [
        function (t, i, n) {
          i.exports = {};
        },
        {}
      ],
      28: [
        function (t, i, n) {
          n.Service = t(29);
        },
        { 29: 29 }
      ],
      29: [
        function (t, i, n) {
          i.exports = r;
          var o = t(35);
          function r(t, i, n) {
            if ('function' != typeof t)
              throw TypeError('rpcImpl must be a function');
            o.EventEmitter.call(this),
              (this.rpcImpl = t),
              (this.requestDelimited = !!i),
              (this.responseDelimited = !!n);
          }
          (((r.prototype = Object.create(
            o.EventEmitter.prototype
          )).constructor = r).prototype.rpcCall = function t(n, i, r, e, s) {
            if (!e) throw TypeError('request must be specified');
            var u = this;
            if (!s) return o.asPromise(t, u, n, i, r, e);
            if (!u.rpcImpl)
              return (
                setTimeout(function () {
                  s(Error('already ended'));
                }, 0),
                g
              );
            try {
              return u.rpcImpl(
                n,
                i[u.requestDelimited ? 'encodeDelimited' : 'encode'](
                  e
                ).finish(),
                function (t, i) {
                  if (t) return u.emit('error', t, n), s(t);
                  if (null === i) return u.end(!0), g;
                  if (!(i instanceof r))
                    try {
                      i =
                        r[u.responseDelimited ? 'decodeDelimited' : 'decode'](
                          i
                        );
                    } catch (t) {
                      return u.emit('error', t, n), s(t);
                    }
                  return u.emit('data', i, n), s(null, i);
                }
              );
            } catch (t) {
              return (
                u.emit('error', t, n),
                setTimeout(function () {
                  s(t);
                }, 0),
                g
              );
            }
          }),
            (r.prototype.end = function (t) {
              return (
                this.rpcImpl &&
                  (t || this.rpcImpl(null, null, null),
                  (this.rpcImpl = null),
                  this.emit('end').off()),
                this
              );
            });
        },
        { 35: 35 }
      ],
      30: [
        function (t, i, n) {
          i.exports = u;
          var r = t(21),
            s =
              ((((u.prototype = Object.create(r.prototype)).constructor =
                u).className = 'Service'),
              t(20)),
            o = t(33),
            h = t(28);
          function u(t, i) {
            r.call(this, t, i), (this.methods = {}), (this.f = null);
          }
          function e(t) {
            return (t.f = null), t;
          }
          (u.fromJSON = function (t, i) {
            var n = new u(t, i.options);
            if (i.methods)
              for (var r = Object.keys(i.methods), e = 0; e < r.length; ++e)
                n.add(s.fromJSON(r[e], i.methods[r[e]]));
            return i.nested && n.addJSON(i.nested), (n.comment = i.comment), n;
          }),
            (u.prototype.toJSON = function (t) {
              var i = r.prototype.toJSON.call(this, t),
                n = !!t && !!t.keepComments;
              return o.toObject([
                'options',
                (i && i.options) || g,
                'methods',
                r.arrayToJSON(this.methodsArray, t) || {},
                'nested',
                (i && i.nested) || g,
                'comment',
                n ? this.comment : g
              ]);
            }),
            Object.defineProperty(u.prototype, 'methodsArray', {
              get: function () {
                return this.f || (this.f = o.toArray(this.methods));
              }
            }),
            (u.prototype.get = function (t) {
              return this.methods[t] || r.prototype.get.call(this, t);
            }),
            (u.prototype.resolveAll = function () {
              for (var t = this.methodsArray, i = 0; i < t.length; ++i)
                t[i].resolve();
              return r.prototype.resolve.call(this);
            }),
            (u.prototype.add = function (t) {
              if (this.get(t.name))
                throw Error("duplicate name '" + t.name + "' in " + this);
              return t instanceof s
                ? e(((this.methods[t.name] = t).parent = this))
                : r.prototype.add.call(this, t);
            }),
            (u.prototype.remove = function (t) {
              if (t instanceof s) {
                if (this.methods[t.name] !== t)
                  throw Error(t + ' is not a member of ' + this);
                return delete this.methods[t.name], (t.parent = null), e(this);
              }
              return r.prototype.remove.call(this, t);
            }),
            (u.prototype.create = function (t, i, n) {
              for (
                var r, e = new h.Service(t, i, n), s = 0;
                s < this.methodsArray.length;
                ++s
              ) {
                var u = o
                  .lcFirst((r = this.f[s]).resolve().name)
                  .replace(/[^$\w_]/g, '');
                e[u] = o.codegen(
                  ['r', 'c'],
                  o.isReserved(u) ? u + '_' : u
                )('return this.rpcCall(m,q,s,r,c)')({
                  m: r,
                  q: r.resolvedRequestType.ctor,
                  s: r.resolvedResponseType.ctor
                });
              }
              return e;
            });
        },
        { 20: 20, 21: 21, 28: 28, 33: 33 }
      ],
      31: [
        function (t, i, n) {
          i.exports = w;
          var u = t(21),
            o =
              ((((w.prototype = Object.create(u.prototype)).constructor =
                w).className = 'Type'),
              t(14)),
            h = t(23),
            f = t(15),
            c = t(18),
            a = t(30),
            e = t(19),
            s = t(24),
            l = t(38),
            d = t(33),
            v = t(13),
            b = t(12),
            p = t(36),
            y = t(11),
            m = t(37);
          function w(t, i) {
            u.call(this, t, i),
              (this.fields = {}),
              (this.oneofs = g),
              (this.extensions = g),
              (this.reserved = g),
              (this.group = g),
              (this.c = null),
              (this.i = null),
              (this.a = null),
              (this.l = null);
          }
          function r(t) {
            return (
              (t.c = t.i = t.a = null),
              delete t.encode,
              delete t.decode,
              delete t.verify,
              t
            );
          }
          Object.defineProperties(w.prototype, {
            fieldsById: {
              get: function () {
                if (!this.c) {
                  this.c = {};
                  for (
                    var t = Object.keys(this.fields), i = 0;
                    i < t.length;
                    ++i
                  ) {
                    var n = this.fields[t[i]],
                      r = n.id;
                    if (this.c[r])
                      throw Error('duplicate id ' + r + ' in ' + this);
                    this.c[r] = n;
                  }
                }
                return this.c;
              }
            },
            fieldsArray: {
              get: function () {
                return this.i || (this.i = d.toArray(this.fields));
              }
            },
            oneofsArray: {
              get: function () {
                return this.a || (this.a = d.toArray(this.oneofs));
              }
            },
            ctor: {
              get: function () {
                return this.l || (this.ctor = w.generateConstructor(this)());
              },
              set: function (t) {
                for (
                  var i = t.prototype,
                    n =
                      (i instanceof e ||
                        (((t.prototype = new e()).constructor = t),
                        d.merge(t.prototype, i)),
                      (t.$type = t.prototype.$type = this),
                      d.merge(t, e, !0),
                      (this.l = t),
                      0);
                  n < this.fieldsArray.length;
                  ++n
                )
                  this.i[n].resolve();
                for (var r = {}, n = 0; n < this.oneofsArray.length; ++n)
                  r[this.a[n].resolve().name] = {
                    get: d.oneOfGetter(this.a[n].oneof),
                    set: d.oneOfSetter(this.a[n].oneof)
                  };
                n && Object.defineProperties(t.prototype, r);
              }
            }
          }),
            (w.generateConstructor = function (t) {
              for (
                var i, n = d.codegen(['p'], t.name), r = 0;
                r < t.fieldsArray.length;
                ++r
              )
                (i = t.i[r]).map
                  ? n('this%s={}', d.safeProp(i.name))
                  : i.repeated && n('this%s=[]', d.safeProp(i.name));
              return n(
                'if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)'
              )('this[ks[i]]=p[ks[i]]');
            }),
            (w.fromJSON = function (t, i) {
              for (
                var n = new w(t, i.options),
                  r =
                    ((n.extensions = i.extensions),
                    (n.reserved = i.reserved),
                    Object.keys(i.fields)),
                  e = 0;
                e < r.length;
                ++e
              )
                n.add(
                  (void 0 !== i.fields[r[e]].keyType ? c : f).fromJSON(
                    r[e],
                    i.fields[r[e]]
                  )
                );
              if (i.oneofs)
                for (r = Object.keys(i.oneofs), e = 0; e < r.length; ++e)
                  n.add(h.fromJSON(r[e], i.oneofs[r[e]]));
              if (i.nested)
                for (r = Object.keys(i.nested), e = 0; e < r.length; ++e) {
                  var s = i.nested[r[e]];
                  n.add(
                    (s.id !== g
                      ? f
                      : s.fields !== g
                      ? w
                      : s.values !== g
                      ? o
                      : s.methods !== g
                      ? a
                      : u
                    ).fromJSON(r[e], s)
                  );
                }
              return (
                i.extensions &&
                  i.extensions.length &&
                  (n.extensions = i.extensions),
                i.reserved && i.reserved.length && (n.reserved = i.reserved),
                i.group && (n.group = !0),
                i.comment && (n.comment = i.comment),
                n
              );
            }),
            (w.prototype.toJSON = function (t) {
              var i = u.prototype.toJSON.call(this, t),
                n = !!t && !!t.keepComments;
              return d.toObject([
                'options',
                (i && i.options) || g,
                'oneofs',
                u.arrayToJSON(this.oneofsArray, t),
                'fields',
                u.arrayToJSON(
                  this.fieldsArray.filter(function (t) {
                    return !t.declaringField;
                  }),
                  t
                ) || {},
                'extensions',
                this.extensions && this.extensions.length ? this.extensions : g,
                'reserved',
                this.reserved && this.reserved.length ? this.reserved : g,
                'group',
                this.group || g,
                'nested',
                (i && i.nested) || g,
                'comment',
                n ? this.comment : g
              ]);
            }),
            (w.prototype.resolveAll = function () {
              for (var t = this.fieldsArray, i = 0; i < t.length; )
                t[i++].resolve();
              for (var n = this.oneofsArray, i = 0; i < n.length; )
                n[i++].resolve();
              return u.prototype.resolveAll.call(this);
            }),
            (w.prototype.get = function (t) {
              return (
                this.fields[t] ||
                (this.oneofs && this.oneofs[t]) ||
                (this.nested && this.nested[t]) ||
                null
              );
            }),
            (w.prototype.add = function (t) {
              if (this.get(t.name))
                throw Error("duplicate name '" + t.name + "' in " + this);
              if (t instanceof f && t.extend === g) {
                if ((this.c || this.fieldsById)[t.id])
                  throw Error('duplicate id ' + t.id + ' in ' + this);
                if (this.isReservedId(t.id))
                  throw Error('id ' + t.id + ' is reserved in ' + this);
                if (this.isReservedName(t.name))
                  throw Error("name '" + t.name + "' is reserved in " + this);
                return (
                  t.parent && t.parent.remove(t),
                  ((this.fields[t.name] = t).message = this),
                  t.onAdd(this),
                  r(this)
                );
              }
              return t instanceof h
                ? (this.oneofs || (this.oneofs = {}),
                  (this.oneofs[t.name] = t).onAdd(this),
                  r(this))
                : u.prototype.add.call(this, t);
            }),
            (w.prototype.remove = function (t) {
              if (t instanceof f && t.extend === g) {
                if (this.fields && this.fields[t.name] === t)
                  return (
                    delete this.fields[t.name],
                    (t.parent = null),
                    t.onRemove(this),
                    r(this)
                  );
                throw Error(t + ' is not a member of ' + this);
              }
              if (t instanceof h) {
                if (this.oneofs && this.oneofs[t.name] === t)
                  return (
                    delete this.oneofs[t.name],
                    (t.parent = null),
                    t.onRemove(this),
                    r(this)
                  );
                throw Error(t + ' is not a member of ' + this);
              }
              return u.prototype.remove.call(this, t);
            }),
            (w.prototype.isReservedId = function (t) {
              return u.isReservedId(this.reserved, t);
            }),
            (w.prototype.isReservedName = function (t) {
              return u.isReservedName(this.reserved, t);
            }),
            (w.prototype.create = function (t) {
              return new this.ctor(t);
            }),
            (w.prototype.setup = function () {
              for (
                var t = this.fullName, i = [], n = 0;
                n < this.fieldsArray.length;
                ++n
              )
                i.push(this.i[n].resolve().resolvedType);
              (this.encode = v(this)({ Writer: l, types: i, util: d })),
                (this.decode = b(this)({ Reader: s, types: i, util: d })),
                (this.verify = p(this)({ types: i, util: d })),
                (this.fromObject = y.fromObject(this)({ types: i, util: d })),
                (this.toObject = y.toObject(this)({ types: i, util: d }));
              var r,
                t = m[t];
              return (
                t &&
                  (((r = Object.create(this)).fromObject = this.fromObject),
                  (this.fromObject = t.fromObject.bind(r)),
                  (r.toObject = this.toObject),
                  (this.toObject = t.toObject.bind(r))),
                this
              );
            }),
            (w.prototype.encode = function (t, i) {
              return this.setup().encode(t, i);
            }),
            (w.prototype.encodeDelimited = function (t, i) {
              return this.encode(t, i && i.len ? i.fork() : i).ldelim();
            }),
            (w.prototype.decode = function (t, i) {
              return this.setup().decode(t, i);
            }),
            (w.prototype.decodeDelimited = function (t) {
              return (
                t instanceof s || (t = s.create(t)), this.decode(t, t.uint32())
              );
            }),
            (w.prototype.verify = function (t) {
              return this.setup().verify(t);
            }),
            (w.prototype.fromObject = function (t) {
              return this.setup().fromObject(t);
            }),
            (w.prototype.toObject = function (t, i) {
              return this.setup().toObject(t, i);
            }),
            (w.d = function (i) {
              return function (t) {
                d.decorateType(t, i);
              };
            });
        },
        {
          11: 11,
          12: 12,
          13: 13,
          14: 14,
          15: 15,
          18: 18,
          19: 19,
          21: 21,
          23: 23,
          24: 24,
          30: 30,
          33: 33,
          36: 36,
          37: 37,
          38: 38
        }
      ],
      32: [
        function (t, i, n) {
          var t = t(33),
            e = [
              'double',
              'float',
              'int32',
              'uint32',
              'sint32',
              'fixed32',
              'sfixed32',
              'int64',
              'uint64',
              'sint64',
              'fixed64',
              'sfixed64',
              'bool',
              'string',
              'bytes'
            ];
          function r(t, i) {
            var n = 0,
              r = {};
            for (i |= 0; n < t.length; ) r[e[n + i]] = t[n++];
            return r;
          }
          (n.basic = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2])),
            (n.defaults = r([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              !1,
              '',
              t.emptyArray,
              null
            ])),
            (n.long = r([0, 0, 0, 1, 1], 7)),
            (n.mapKey = r([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2)),
            (n.packed = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]));
        },
        { 33: 33 }
      ],
      33: [
        function (n, t, i) {
          var r,
            e,
            s = (t.exports = n(35)),
            u = n(27),
            o =
              ((s.codegen = n(3)),
              (s.fetch = n(5)),
              (s.path = n(8)),
              (s.fs = s.inquire('fs')),
              (s.toArray = function (t) {
                if (t) {
                  for (
                    var i = Object.keys(t), n = Array(i.length), r = 0;
                    r < i.length;

                  )
                    n[r] = t[i[r++]];
                  return n;
                }
                return [];
              }),
              (s.toObject = function (t) {
                for (var i = {}, n = 0; n < t.length; ) {
                  var r = t[n++],
                    e = t[n++];
                  e !== g && (i[r] = e);
                }
                return i;
              }),
              /\\/g),
            h = /"/g,
            f =
              ((s.isReserved = function (t) {
                return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(
                  t
                );
              }),
              (s.safeProp = function (t) {
                return !/^[$\w_]+$/.test(t) || s.isReserved(t)
                  ? '["' + t.replace(o, '\\\\').replace(h, '\\"') + '"]'
                  : '.' + t;
              }),
              (s.ucFirst = function (t) {
                return (t[0] || '').toUpperCase() + t.substring(1);
              }),
              /_([a-z])/g),
            c =
              ((s.camelCase = function (t) {
                return (
                  t.substring(0, 1) +
                  t.substring(1).replace(f, function (t, i) {
                    return i.toUpperCase();
                  })
                );
              }),
              (s.compareFieldsById = function (t, i) {
                return t.id - i.id;
              }),
              (s.decorateType = function (t, i) {
                return t.$type
                  ? (i &&
                      t.$type.name !== i &&
                      (s.decorateRoot.remove(t.$type),
                      (t.$type.name = i),
                      s.decorateRoot.add(t.$type)),
                    t.$type)
                  : ((i = new (r = r || n(31))(i || t.name)),
                    s.decorateRoot.add(i),
                    (i.ctor = t),
                    Object.defineProperty(t, '$type', {
                      value: i,
                      enumerable: !1
                    }),
                    Object.defineProperty(t.prototype, '$type', {
                      value: i,
                      enumerable: !1
                    }),
                    i);
              }),
              0);
          (s.decorateEnum = function (t) {
            var i;
            return (
              t.$type ||
              ((i = new (e = e || n(14))('Enum' + c++, t)),
              s.decorateRoot.add(i),
              Object.defineProperty(t, '$type', { value: i, enumerable: !1 }),
              i)
            );
          }),
            (s.setProperty = function (t, i, n) {
              if ('object' != typeof t)
                throw TypeError('dst must be an object');
              if (i)
                return (function t(i, n, r) {
                  var e = n.shift();
                  return (
                    '__proto__' !== e &&
                      (0 < n.length
                        ? (i[e] = t(i[e] || {}, n, r))
                        : ((n = i[e]) && (r = [].concat(n).concat(r)),
                          (i[e] = r))),
                    i
                  );
                })(t, (i = i.split('.')), n);
              throw TypeError('path must be specified');
            }),
            Object.defineProperty(s, 'decorateRoot', {
              get: function () {
                return u.decorated || (u.decorated = new (n(26))());
              }
            });
        },
        { 14: 14, 26: 26, 27: 27, 3: 3, 31: 31, 35: 35, 5: 5, 8: 8 }
      ],
      34: [
        function (t, i, n) {
          i.exports = e;
          var r = t(35);
          function e(t, i) {
            (this.lo = t >>> 0), (this.hi = i >>> 0);
          }
          var s = (e.zero = new e(0, 0)),
            u =
              ((s.toNumber = function () {
                return 0;
              }),
              (s.zzEncode = s.zzDecode =
                function () {
                  return this;
                }),
              (s.length = function () {
                return 1;
              }),
              (e.zeroHash = '\0\0\0\0\0\0\0\0'),
              (e.fromNumber = function (t) {
                var i, n;
                return 0 === t
                  ? s
                  : ((n = (t = (i = t < 0) ? -t : t) >>> 0),
                    (t = ((t - n) / 4294967296) >>> 0),
                    i &&
                      ((t = ~t >>> 0),
                      (n = ~n >>> 0),
                      4294967295 < ++n &&
                        ((n = 0), 4294967295 < ++t && (t = 0))),
                    new e(n, t));
              }),
              (e.from = function (t) {
                if ('number' == typeof t) return e.fromNumber(t);
                if (r.isString(t)) {
                  if (!r.Long) return e.fromNumber(parseInt(t, 10));
                  t = r.Long.fromString(t);
                }
                return t.low || t.high ? new e(t.low >>> 0, t.high >>> 0) : s;
              }),
              (e.prototype.toNumber = function (t) {
                var i;
                return !t && this.hi >>> 31
                  ? ((t = (1 + ~this.lo) >>> 0),
                    (i = ~this.hi >>> 0),
                    -(t + 4294967296 * (i = t ? i : (i + 1) >>> 0)))
                  : this.lo + 4294967296 * this.hi;
              }),
              (e.prototype.toLong = function (t) {
                return r.Long
                  ? new r.Long(0 | this.lo, 0 | this.hi, !!t)
                  : { low: 0 | this.lo, high: 0 | this.hi, unsigned: !!t };
              }),
              String.prototype.charCodeAt);
          (e.fromHash = function (t) {
            return '\0\0\0\0\0\0\0\0' === t
              ? s
              : new e(
                  (u.call(t, 0) |
                    (u.call(t, 1) << 8) |
                    (u.call(t, 2) << 16) |
                    (u.call(t, 3) << 24)) >>>
                    0,
                  (u.call(t, 4) |
                    (u.call(t, 5) << 8) |
                    (u.call(t, 6) << 16) |
                    (u.call(t, 7) << 24)) >>>
                    0
                );
          }),
            (e.prototype.toHash = function () {
              return String.fromCharCode(
                255 & this.lo,
                (this.lo >>> 8) & 255,
                (this.lo >>> 16) & 255,
                this.lo >>> 24,
                255 & this.hi,
                (this.hi >>> 8) & 255,
                (this.hi >>> 16) & 255,
                this.hi >>> 24
              );
            }),
            (e.prototype.zzEncode = function () {
              var t = this.hi >> 31;
              return (
                (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
                (this.lo = ((this.lo << 1) ^ t) >>> 0),
                this
              );
            }),
            (e.prototype.zzDecode = function () {
              var t = -(1 & this.lo);
              return (
                (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
                (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
                this
              );
            }),
            (e.prototype.length = function () {
              var t = this.lo,
                i = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
                n = this.hi >>> 24;
              return 0 == n
                ? 0 == i
                  ? t < 16384
                    ? t < 128
                      ? 1
                      : 2
                    : t < 2097152
                    ? 3
                    : 4
                  : i < 16384
                  ? i < 128
                    ? 5
                    : 6
                  : i < 2097152
                  ? 7
                  : 8
                : n < 128
                ? 9
                : 10;
            });
        },
        { 35: 35 }
      ],
      35: [
        function (t, i, n) {
          var r = n;
          function e(t, i, n) {
            for (var r = Object.keys(i), e = 0; e < r.length; ++e)
              (t[r[e]] !== g && n) || (t[r[e]] = i[r[e]]);
            return t;
          }
          function s(t) {
            function n(t, i) {
              if (!(this instanceof n)) return new n(t, i);
              Object.defineProperty(this, 'message', {
                get: function () {
                  return t;
                }
              }),
                Error.captureStackTrace
                  ? Error.captureStackTrace(this, n)
                  : Object.defineProperty(this, 'stack', {
                      value: Error().stack || ''
                    }),
                i && e(this, i);
            }
            return (
              (n.prototype = Object.create(Error.prototype, {
                constructor: {
                  value: n,
                  writable: !0,
                  enumerable: !1,
                  configurable: !0
                },
                name: {
                  get() {
                    return t;
                  },
                  set: g,
                  enumerable: !1,
                  configurable: !0
                },
                toString: {
                  value() {
                    return this.name + ': ' + this.message;
                  },
                  writable: !0,
                  enumerable: !1,
                  configurable: !0
                }
              })),
              n
            );
          }
          (r.asPromise = t(1)),
            (r.base64 = t(2)),
            (r.EventEmitter = t(4)),
            (r.float = t(6)),
            (r.inquire = t(7)),
            (r.utf8 = t(10)),
            (r.pool = t(9)),
            (r.LongBits = t(34)),
            (r.isNode = !!(
              'undefined' != typeof global &&
              global &&
              global.process &&
              global.process.versions &&
              global.process.versions.node
            )),
            (r.global =
              (r.isNode && global) ||
              ('undefined' != typeof window && window) ||
              ('undefined' != typeof self && self) ||
              this),
            (r.emptyArray = Object.freeze ? Object.freeze([]) : []),
            (r.emptyObject = Object.freeze ? Object.freeze({}) : {}),
            (r.isInteger =
              Number.isInteger ||
              function (t) {
                return (
                  'number' == typeof t && isFinite(t) && Math.floor(t) === t
                );
              }),
            (r.isString = function (t) {
              return 'string' == typeof t || t instanceof String;
            }),
            (r.isObject = function (t) {
              return t && 'object' == typeof t;
            }),
            (r.isset = r.isSet =
              function (t, i) {
                var n = t[i];
                return (
                  null != n &&
                  t.hasOwnProperty(i) &&
                  ('object' != typeof n ||
                    0 < (Array.isArray(n) ? n : Object.keys(n)).length)
                );
              }),
            (r.Buffer = (function () {
              try {
                var t = r.inquire('buffer').Buffer;
                return t.prototype.utf8Write ? t : null;
              } catch (t) {
                return null;
              }
            })()),
            (r.v = null),
            (r.b = null),
            (r.newBuffer = function (t) {
              return 'number' == typeof t
                ? r.Buffer
                  ? r.b(t)
                  : new r.Array(t)
                : r.Buffer
                ? r.v(t)
                : 'undefined' == typeof Uint8Array
                ? t
                : new Uint8Array(t);
            }),
            (r.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array),
            (r.Long =
              (r.global.dcodeIO && r.global.dcodeIO.Long) ||
              r.global.Long ||
              r.inquire('long')),
            (r.key2Re = /^true|false|0|1$/),
            (r.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
            (r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
            (r.longToHash = function (t) {
              return t ? r.LongBits.from(t).toHash() : r.LongBits.zeroHash;
            }),
            (r.longFromHash = function (t, i) {
              t = r.LongBits.fromHash(t);
              return r.Long ? r.Long.fromBits(t.lo, t.hi, i) : t.toNumber(!!i);
            }),
            (r.merge = e),
            (r.lcFirst = function (t) {
              return (t[0] || '').toLowerCase() + t.substring(1);
            }),
            (r.newError = s),
            (r.ProtocolError = s('ProtocolError')),
            (r.oneOfGetter = function (t) {
              for (var n = {}, i = 0; i < t.length; ++i) n[t[i]] = 1;
              return function () {
                for (var t = Object.keys(this), i = t.length - 1; -1 < i; --i)
                  if (1 === n[t[i]] && this[t[i]] !== g && null !== this[t[i]])
                    return t[i];
              };
            }),
            (r.oneOfSetter = function (n) {
              return function (t) {
                for (var i = 0; i < n.length; ++i)
                  n[i] !== t && delete this[n[i]];
              };
            }),
            (r.toJSONOptions = {
              longs: String,
              enums: String,
              bytes: String,
              json: !0
            }),
            (r.r = function () {
              var n = r.Buffer;
              n
                ? ((r.v =
                    (n.from !== Uint8Array.from && n.from) ||
                    function (t, i) {
                      return new n(t, i);
                    }),
                  (r.b =
                    n.allocUnsafe ||
                    function (t) {
                      return new n(t);
                    }))
                : (r.v = r.b = null);
            });
        },
        { 1: 1, 10: 10, 2: 2, 34: 34, 4: 4, 6: 6, 7: 7, 9: 9 }
      ],
      36: [
        function (t, i, n) {
          i.exports = function (t) {
            var i = h.codegen(
                ['m'],
                t.name + '$verify'
              )('if(typeof m!=="object"||m===null)')(
                'return%j',
                'object expected'
              ),
              n = t.oneofsArray,
              r = {};
            n.length && i('var p={}');
            for (var e = 0; e < t.fieldsArray.length; ++e) {
              var s,
                u = t.i[e].resolve(),
                o = 'm' + h.safeProp(u.name);
              u.optional && i('if(%s!=null&&m.hasOwnProperty(%j)){', o, u.name),
                u.map
                  ? (i('if(!util.isObject(%s))', o)('return%j', f(u, 'object'))(
                      'var k=Object.keys(%s)',
                      o
                    )('for(var i=0;i<k.length;++i){'),
                    (function (t, i, n) {
                      switch (i.keyType) {
                        case 'int32':
                        case 'uint32':
                        case 'sint32':
                        case 'fixed32':
                        case 'sfixed32':
                          t('if(!util.key32Re.test(%s))', n)(
                            'return%j',
                            f(i, 'integer key')
                          );
                          break;
                        case 'int64':
                        case 'uint64':
                        case 'sint64':
                        case 'fixed64':
                        case 'sfixed64':
                          t('if(!util.key64Re.test(%s))', n)(
                            'return%j',
                            f(i, 'integer|Long key')
                          );
                          break;
                        case 'bool':
                          t('if(!util.key2Re.test(%s))', n)(
                            'return%j',
                            f(i, 'boolean key')
                          );
                      }
                    })(i, u, 'k[i]'),
                    c(i, u, e, o + '[k[i]]')('}'))
                  : u.repeated
                  ? (i('if(!Array.isArray(%s))', o)('return%j', f(u, 'array'))(
                      'for(var i=0;i<%s.length;++i){',
                      o
                    ),
                    c(i, u, e, o + '[i]')('}'))
                  : (u.partOf &&
                      ((s = h.safeProp(u.partOf.name)),
                      1 === r[u.partOf.name] &&
                        i('if(p%s===1)', s)(
                          'return%j',
                          u.partOf.name + ': multiple values'
                        ),
                      (r[u.partOf.name] = 1),
                      i('p%s=1', s)),
                    c(i, u, e, o)),
                u.optional && i('}');
            }
            return i('return null');
          };
          var u = t(14),
            h = t(33);
          function f(t, i) {
            return (
              t.name +
              ': ' +
              i +
              (t.repeated && 'array' !== i
                ? '[]'
                : t.map && 'object' !== i
                ? '{k:' + t.keyType + '}'
                : '') +
              ' expected'
            );
          }
          function c(t, i, n, r) {
            if (i.resolvedType)
              if (i.resolvedType instanceof u) {
                t('switch(%s){', r)('default:')('return%j', f(i, 'enum value'));
                for (
                  var e = Object.keys(i.resolvedType.values), s = 0;
                  s < e.length;
                  ++s
                )
                  t('case %i:', i.resolvedType.values[e[s]]);
                t('break')('}');
              } else
                t('{')('var e=types[%i].verify(%s);', n, r)('if(e)')(
                  'return%j+e',
                  i.name + '.'
                )('}');
            else
              switch (i.type) {
                case 'int32':
                case 'uint32':
                case 'sint32':
                case 'fixed32':
                case 'sfixed32':
                  t('if(!util.isInteger(%s))', r)('return%j', f(i, 'integer'));
                  break;
                case 'int64':
                case 'uint64':
                case 'sint64':
                case 'fixed64':
                case 'sfixed64':
                  t(
                    'if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))',
                    r,
                    r,
                    r,
                    r
                  )('return%j', f(i, 'integer|Long'));
                  break;
                case 'float':
                case 'double':
                  t('if(typeof %s!=="number")', r)('return%j', f(i, 'number'));
                  break;
                case 'bool':
                  t('if(typeof %s!=="boolean")', r)(
                    'return%j',
                    f(i, 'boolean')
                  );
                  break;
                case 'string':
                  t('if(!util.isString(%s))', r)('return%j', f(i, 'string'));
                  break;
                case 'bytes':
                  t(
                    'if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',
                    r,
                    r,
                    r
                  )('return%j', f(i, 'buffer'));
              }
            return t;
          }
        },
        { 14: 14, 33: 33 }
      ],
      37: [
        function (t, i, n) {
          var u = t(19);
          n['.google.protobuf.Any'] = {
            fromObject: function (t) {
              if (t && t['@type']) {
                var i,
                  n = t['@type'].substring(1 + t['@type'].lastIndexOf('/')),
                  n = this.lookup(n);
                if (n)
                  return (
                    ~(i =
                      '.' == (t['@type'][0] || '')
                        ? t['@type'].slice(1)
                        : t['@type']).indexOf('/') || (i = '/' + i),
                    this.create({
                      type_url: i,
                      value: n.encode(n.fromObject(t)).finish()
                    })
                  );
              }
              return this.fromObject(t);
            },
            toObject: function (t, i) {
              var n,
                r,
                e = '',
                s = '';
              return (
                i &&
                  i.json &&
                  t.type_url &&
                  t.value &&
                  ((s = t.type_url.substring(1 + t.type_url.lastIndexOf('/'))),
                  (e = t.type_url.substring(
                    0,
                    1 + t.type_url.lastIndexOf('/')
                  )),
                  (n = this.lookup(s)) && (t = n.decode(t.value))),
                !(t instanceof this.ctor) && t instanceof u
                  ? ((n = t.$type.toObject(t, i)),
                    (r =
                      '.' === t.$type.fullName[0]
                        ? t.$type.fullName.slice(1)
                        : t.$type.fullName),
                    (n['@type'] = s =
                      (e = '' === e ? 'type.googleapis.com/' : e) + r),
                    n)
                  : this.toObject(t, i)
              );
            }
          };
        },
        { 19: 19 }
      ],
      38: [
        function (t, i, n) {
          i.exports = a;
          var r,
            e = t(35),
            s = e.LongBits,
            u = e.base64,
            o = e.utf8;
          function h(t, i, n) {
            (this.fn = t), (this.len = i), (this.next = g), (this.val = n);
          }
          function f() {}
          function c(t) {
            (this.head = t.head),
              (this.tail = t.tail),
              (this.len = t.len),
              (this.next = t.states);
          }
          function a() {
            (this.len = 0),
              (this.head = new h(f, 0, 0)),
              (this.tail = this.head),
              (this.states = null);
          }
          function l() {
            return e.Buffer
              ? function () {
                  return (a.create = function () {
                    return new r();
                  })();
                }
              : function () {
                  return new a();
                };
          }
          function d(t, i, n) {
            i[n] = 255 & t;
          }
          function v(t, i) {
            (this.len = t), (this.next = g), (this.val = i);
          }
          function b(t, i, n) {
            for (; t.hi; )
              (i[n++] = (127 & t.lo) | 128),
                (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
                (t.hi >>>= 7);
            for (; 127 < t.lo; )
              (i[n++] = (127 & t.lo) | 128), (t.lo = t.lo >>> 7);
            i[n++] = t.lo;
          }
          function p(t, i, n) {
            (i[n] = 255 & t),
              (i[n + 1] = (t >>> 8) & 255),
              (i[n + 2] = (t >>> 16) & 255),
              (i[n + 3] = t >>> 24);
          }
          (a.create = l()),
            (a.alloc = function (t) {
              return new e.Array(t);
            }),
            e.Array !== Array &&
              (a.alloc = e.pool(a.alloc, e.Array.prototype.subarray)),
            (a.prototype.p = function (t, i, n) {
              return (
                (this.tail = this.tail.next = new h(t, i, n)),
                (this.len += i),
                this
              );
            }),
            ((v.prototype = Object.create(h.prototype)).fn = function (
              t,
              i,
              n
            ) {
              for (; 127 < t; ) (i[n++] = (127 & t) | 128), (t >>>= 7);
              i[n] = t;
            }),
            (a.prototype.uint32 = function (t) {
              return (
                (this.len += (this.tail = this.tail.next =
                  new v(
                    (t >>>= 0) < 128
                      ? 1
                      : t < 16384
                      ? 2
                      : t < 2097152
                      ? 3
                      : t < 268435456
                      ? 4
                      : 5,
                    t
                  )).len),
                this
              );
            }),
            (a.prototype.int32 = function (t) {
              return t < 0 ? this.p(b, 10, s.fromNumber(t)) : this.uint32(t);
            }),
            (a.prototype.sint32 = function (t) {
              return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
            }),
            (a.prototype.int64 = a.prototype.uint64 =
              function (t) {
                t = s.from(t);
                return this.p(b, t.length(), t);
              }),
            (a.prototype.sint64 = function (t) {
              t = s.from(t).zzEncode();
              return this.p(b, t.length(), t);
            }),
            (a.prototype.bool = function (t) {
              return this.p(d, 1, t ? 1 : 0);
            }),
            (a.prototype.sfixed32 = a.prototype.fixed32 =
              function (t) {
                return this.p(p, 4, t >>> 0);
              }),
            (a.prototype.sfixed64 = a.prototype.fixed64 =
              function (t) {
                t = s.from(t);
                return this.p(p, 4, t.lo).p(p, 4, t.hi);
              }),
            (a.prototype.float = function (t) {
              return this.p(e.float.writeFloatLE, 4, t);
            }),
            (a.prototype.double = function (t) {
              return this.p(e.float.writeDoubleLE, 8, t);
            });
          var y = e.Array.prototype.set
            ? function (t, i, n) {
                i.set(t, n);
              }
            : function (t, i, n) {
                for (var r = 0; r < t.length; ++r) i[n + r] = t[r];
              };
          (a.prototype.bytes = function (t) {
            var i,
              n = t.length >>> 0;
            return n
              ? (e.isString(t) &&
                  ((i = a.alloc((n = u.length(t)))),
                  u.decode(t, i, 0),
                  (t = i)),
                this.uint32(n).p(y, n, t))
              : this.p(d, 1, 0);
          }),
            (a.prototype.string = function (t) {
              var i = o.length(t);
              return i ? this.uint32(i).p(o.write, i, t) : this.p(d, 1, 0);
            }),
            (a.prototype.fork = function () {
              return (
                (this.states = new c(this)),
                (this.head = this.tail = new h(f, 0, 0)),
                (this.len = 0),
                this
              );
            }),
            (a.prototype.reset = function () {
              return (
                this.states
                  ? ((this.head = this.states.head),
                    (this.tail = this.states.tail),
                    (this.len = this.states.len),
                    (this.states = this.states.next))
                  : ((this.head = this.tail = new h(f, 0, 0)), (this.len = 0)),
                this
              );
            }),
            (a.prototype.ldelim = function () {
              var t = this.head,
                i = this.tail,
                n = this.len;
              return (
                this.reset().uint32(n),
                n &&
                  ((this.tail.next = t.next), (this.tail = i), (this.len += n)),
                this
              );
            }),
            (a.prototype.finish = function () {
              for (
                var t = this.head.next,
                  i = this.constructor.alloc(this.len),
                  n = 0;
                t;

              )
                t.fn(t.val, i, n), (n += t.len), (t = t.next);
              return i;
            }),
            (a.r = function (t) {
              (r = t), (a.create = l()), r.r();
            });
        },
        { 35: 35 }
      ],
      39: [
        function (t, i, n) {
          i.exports = s;
          var r = t(38),
            e =
              (((s.prototype = Object.create(r.prototype)).constructor = s),
              t(35));
          function s() {
            r.call(this);
          }
          function u(t, i, n) {
            t.length < 40
              ? e.utf8.write(t, i, n)
              : i.utf8Write
              ? i.utf8Write(t, n)
              : i.write(t, n);
          }
          (s.r = function () {
            (s.alloc = e.b),
              (s.writeBytesBuffer =
                e.Buffer &&
                e.Buffer.prototype instanceof Uint8Array &&
                'set' === e.Buffer.prototype.set.name
                  ? function (t, i, n) {
                      i.set(t, n);
                    }
                  : function (t, i, n) {
                      if (t.copy) t.copy(i, n, 0, t.length);
                      else for (var r = 0; r < t.length; ) i[n++] = t[r++];
                    });
          }),
            (s.prototype.bytes = function (t) {
              var i = (t = e.isString(t) ? e.v(t, 'base64') : t).length >>> 0;
              return (
                this.uint32(i), i && this.p(s.writeBytesBuffer, i, t), this
              );
            }),
            (s.prototype.string = function (t) {
              var i = e.Buffer.byteLength(t);
              return this.uint32(i), i && this.p(u, i, t), this;
            }),
            s.r();
        },
        { 35: 35, 38: 38 }
      ]
    },
    {},
    [16]
  );
})();
const tiebaJson = {
  nested: {
    model: {
      nested: {
        Abstract: {
          fields: {
            text: { type: 'string', id: 2 },
            type: { type: 'int32', id: 1 }
          }
        },
        ActionControl: {
          fields: {
            name: { type: 'string', id: 2 },
            textColor: { type: 'string', id: 3 },
            textColorPressed: { type: 'string', id: 4 },
            url: { type: 'string', id: 1 }
          }
        },
        AdCloseInfo: {
          fields: {
            actionControl: { type: 'ActionControl', id: 5 },
            reasons: { rule: 'repeated', type: 'string', id: 3 },
            supportClose: { type: 'int32', id: 1 }
          }
        },
        Advertisement: {
          fields: {
            advertisementId: { type: 'string', id: 5 },
            clickStatisticsUrl: { type: 'string', id: 7 },
            deeplink: { type: 'string', id: 9 },
            displayAdIcon: { type: 'string', id: 12 },
            floatingText: { type: 'string', id: 8 },
            jumpLink: { type: 'string', id: 4 },
            packageName: { type: 'string', id: 11 },
            pic: { type: 'string', id: 2 },
            picClick: { type: 'string', id: 3 },
            scheme: { type: 'string', id: 10 },
            time: { type: 'int64', id: 1 },
            viewStatisticsUrl: { type: 'string', id: 6 }
          }
        },
        AgreeBanner: {
          fields: {
            iconUrl: { type: 'string', id: 2 },
            text: { type: 'string', id: 1 },
            topAgreeUser: { rule: 'repeated', type: 'SimpleUser', id: 4 },
            url: { type: 'string', id: 3 }
          }
        },
        SimpleUser: {
          fields: {
            portrait: { type: 'string', id: 8 },
            userId: { type: 'int64', id: 1 },
            userName: { type: 'string', id: 5 }
          }
        },
        Agree: {
          fields: {
            agreeNum: { type: 'int64', id: 1 },
            agreeType: { type: 'int32', id: 3 },
            diffAgreeNum: { type: 'int64', id: 5 },
            disagreeNum: { type: 'int64', id: 4 },
            hasAgree: { type: 'int32', id: 2 },
            lzAgree: { type: 'int32', id: 6 }
          }
        },
        AlaChallengeInfo: {
          fields: {
            challengeId: { type: 'int64', id: 1 },
            rivalHlsUrl: { type: 'string', id: 5 },
            rivalRtmpUrl: { type: 'string', id: 4 },
            rivalSession: { type: 'string', id: 3 },
            winningNum: { type: 'int64', id: 2 }
          }
        },
        AlaLiveInfo: {
          fields: {
            audienceCount: { type: 'uint32', id: 14 },
            challengeInfo: { type: 'AlaChallengeInfo', id: 25 },
            cover: { type: 'string', id: 2 },
            coverWide: { type: 'string', id: 48 },
            description: { type: 'string', id: 11 },
            dislikeInfo: { rule: 'repeated', type: 'DislikeInfo', id: 43 },
            firstHeadline: { type: 'string', id: 34 },
            groupId: { type: 'uint64', id: 6 },
            hlsUrl: { type: 'string', id: 5 },
            liveFrom: { type: 'int32', id: 29 },
            liveId: { type: 'uint64', id: 1 },
            liveStatus: { type: 'int32', id: 18 },
            liveType: { type: 'uint32', id: 15 },
            openRecomDuration: { type: 'uint32', id: 41 },
            openRecomFans: { type: 'uint32', id: 40 },
            openRecomLocation: { type: 'uint32', id: 39 },
            openRecomReason: { type: 'uint32', id: 38 },
            pbDisplayType: { type: 'uint32', id: 36 },
            recomReason: { type: 'string', id: 37 },
            roomId: { type: 'uint64', id: 44 },
            routerType: { type: 'string', id: 32 },
            rtmpUrl: { type: 'string', id: 4 },
            screenDirection: { type: 'uint32', id: 16 },
            secondHeadline: { type: 'string', id: 35 },
            sessionId: { type: 'string', id: 3 },
            shareInfo: { type: 'AlaShareInfo', id: 19 },
            thirdAppId: { type: 'string', id: 21 },
            thirdLiveType: { type: 'string', id: 33 },
            thirdRoomId: { type: 'string', id: 31 },
            userInfo: { type: 'AlaUserInfo', id: 12 },
            yyExt: { type: 'YyExt', id: 49 },
            labelName: { type: 'string', id: 17 }
          }
        },
        DislikeInfo: {
          fields: {
            dislikeId: { type: 'uint32', id: 2 },
            dislikeReason: { type: 'string', id: 1 },
            extra: { type: 'string', id: 3 }
          }
        },
        AlaShareInfo: {
          fields: {
            shareCount: { type: 'int32', id: 3 },
            shareUserCount: { type: 'int32', id: 2 }
          }
        },
        AlaUserInfo: {
          fields: {
            alaId: { type: 'uint64', id: 1 },
            anchorFans: { type: 'int32', id: 24 },
            anchorLive: { type: 'uint64', id: 7 },
            enterLive: { type: 'uint64', id: 6 },
            lat: { type: 'double', id: 12 },
            liveId: { type: 'uint64', id: 9 },
            liveStatus: { type: 'uint32', id: 8 },
            lng: { type: 'double', id: 11 },
            location: { type: 'string', id: 10 },
            portrait: { type: 'string', id: 3 },
            userId: { type: 'uint64', id: 23 },
            userName: { type: 'string', id: 2 },
            yyExt: { type: 'YyExt', id: 25 }
          }
        },
        YyExt: {
          fields: {
            iconUrl: { type: 'string', id: 8 },
            isYyGame: { type: 'int32', id: 5 },
            rankShow: { type: 'string', id: 7 },
            sid: { type: 'string', id: 1 },
            ssid: { type: 'string', id: 2 },
            streamInfo: { type: 'string', id: 6 },
            templateId: { type: 'string', id: 3 },
            yyUid: { type: 'string', id: 4 },
            feedId: { type: 'string', id: 9 }
          }
        },
        Anti: {
          fields: {
            blockPopInfo: { type: 'BlockPopInfo', id: 22 },
            blockStat: { type: 'int32', id: 6 },
            canGoods: { type: 'int32', id: 27 },
            daysTofree: { type: 'int32', id: 9 },
            delThreadText: { rule: 'repeated', type: 'DelThreadText', id: 24 },
            forbidFlag: { type: 'int32', id: 4 },
            forbidInfo: { type: 'string', id: 5 },
            hasChance: { type: 'int32', id: 10 },
            hideStat: { type: 'int32', id: 7 },
            ifaddition: { type: 'int32', id: 13 },
            ifpost: { type: 'int32', id: 2 },
            ifvoice: { type: 'int32', id: 11 },
            ifxiaoying: { type: 'string', id: 18 },
            multiDelthread: { type: 'int32', id: 25 },
            pollLevel: { type: 'uint32', id: 26 },
            pollMessage: { type: 'string', id: 19 },
            replyPrivateFlag: { type: 'int32', id: 23 },
            tbs: { type: 'string', id: 1 },
            vcodeStat: { type: 'int32', id: 8 },
            videoLocalMessage: { type: 'string', id: 21 },
            videoMessage: { type: 'string', id: 20 },
            voiceMessage: { type: 'string', id: 12 }
          }
        },
        BlockPopInfo: {
          fields: {
            aheadInfo: { type: 'string', id: 3 },
            aheadType: { type: 'int32', id: 6 },
            aheadUrl: { type: 'string', id: 4 },
            appealMsg: { type: 'string', id: 8 },
            appealStatus: { type: 'int32', id: 7 },
            blockInfo: { type: 'string', id: 2 },
            canPost: { type: 'int32', id: 1 },
            okInfo: { type: 'string', id: 5 },
            subBlockInfo: { type: 'string', id: 11 }
          }
        },
        DelThreadText: {
          fields: {
            textId: { type: 'int32', id: 1 },
            textInfo: { type: 'string', id: 2 }
          }
        },
        ApkDetail: {
          fields: {
            authorityUrl: { type: 'string', id: 11 },
            developer: { type: 'string', id: 1 },
            needInnerBuy: { type: 'int32', id: 10 },
            needNetwork: { type: 'int32', id: 9 },
            privacyUrl: { type: 'string', id: 12 },
            publisher: { type: 'string', id: 2 },
            size: { type: 'string', id: 8 },
            updateTime: { type: 'string', id: 7 },
            version: { type: 'string', id: 3 },
            versionCode: { type: 'int32', id: 6 }
          }
        },
        App: {
          fields: {
            appTime: { type: 'int32', id: 10 },
            extInfo: { type: 'string', id: 29 },
            id: { type: 'string', id: 13 },
            locCode: { type: 'string', id: 31 },
            name: { type: 'string', id: 14 },
            posName: { type: 'string', id: 20 },
            url: { type: 'string', id: 16 },
            urlType: { type: 'int32', id: 15 }
          }
        },
        BaijiahaoInfo: {
          fields: {
            authDesc: { type: 'string', id: 6 },
            authId: { type: 'int32', id: 5 },
            avatar: { type: 'string', id: 2 }
          }
        },
        Baijiahao: {
          fields: {
            oriUgcNid: { type: 'string', id: 1 },
            oriUgcTid: { type: 'string', id: 2 },
            oriUgcVid: { type: 'string', id: 4 }
          }
        },
        Balv: {
          fields: {
            daysTofree: { type: 'int32', id: 3 },
            isBlack: { type: 'int32', id: 1 },
            isBlock: { type: 'int32', id: 2 }
          }
        },
        BannerList: {
          fields: {
            app: { rule: 'repeated', type: 'App', id: 1 },
            pbBannerAd: { type: 'App', id: 5 }
          }
        },
        Banner: {
          fields: {
            bannerType: { type: 'int32', id: 2 },
            bannerUrl: { type: 'string', id: 1 },
            desc: { type: 'string', id: 5 },
            type: { type: 'int32', id: 4 }
          }
        },
        BazhuSign: {
          fields: {
            desc: { type: 'string', id: 1 },
            level: { type: 'string', id: 2 }
          }
        },
        BusinessAccountInfo: {
          fields: {
            isBusinessAccount: { type: 'int32', id: 1 },
            isForumBusinessAccount: { type: 'int32', id: 2 }
          }
        },
        CallFansInfo: { fields: { canCall: { type: 'int32', id: 1 } } },
        Classify: {
          fields: {
            classId: { type: 'int32', id: 3 },
            className: { type: 'string', id: 4 }
          }
        },
        CustomFigure: {
          fields: {
            backgroundType: { type: 'string', id: 2 },
            backgroundValue: { type: 'string', id: 3 },
            dynamicFigureUrl: { type: 'string', id: 4 },
            figureUrl: { type: 'string', id: 1 }
          }
        },
        CustomState: {
          fields: {
            content: { type: 'string', id: 2 },
            icon: { type: 'string', id: 1 },
            iconType: { type: 'string', id: 3 }
          }
        },
        DeletedReasonInfo: {
          fields: {
            isBoomgrow: { type: 'int32', id: 2 },
            isGraysCaleForum: { type: 'int32', id: 1 }
          }
        },
        EditConfig: {
          fields: {
            isFirstEdit: { type: 'int32', id: 2 },
            showEdit: { type: 'int32', id: 1 }
          }
        },
        Error: {
          fields: {
            errmsg: { type: 'string', id: 2 },
            errorno: { type: 'int32', id: 1 },
            usermsg: { type: 'string', id: 3 }
          }
        },
        ForumActiveInfo: {
          fields: {
            forumBrief: { type: 'string', id: 1 },
            forumShareUrl: { type: 'string', id: 2 }
          }
        },
        ForumRuleStatus: {
          fields: {
            hasForumRule: { type: 'int32', id: 4 },
            title: { type: 'string', id: 2 }
          }
        },
        FrequentlyForumInfo: {
          fields: {
            accessFlag: { type: 'uint32', id: 15 },
            forumState: { type: 'uint32', id: 14 }
          }
        },
        FrsTabInfo: {
          fields: {
            isGeneralTab: { type: 'int32', id: 7 },
            tabCode: { type: 'string', id: 8 },
            tabId: { type: 'int32', id: 1 },
            tabName: { type: 'string', id: 3 },
            tabType: { type: 'int32', id: 2 },
            tabUrl: { type: 'string', id: 4 }
          }
        },
        GconAccount: {
          fields: {
            hasAccount: { type: 'int32', id: 1 },
            menuName: { type: 'string', id: 2 }
          }
        },
        GraffitiInfo: {
          fields: {
            gid: { type: 'int64', id: 2 },
            url: { type: 'string', id: 1 }
          }
        },
        Group: {
          fields: {
            groupCount: { type: 'int32', id: 2 },
            hideRecommendGroup: { type: 'int32', id: 1 }
          }
        },
        HeadItem: {
          fields: {
            content: { type: 'string', id: 2 },
            name: { type: 'string', id: 1 },
            type: { type: 'int32', id: 3 }
          }
        },
        HeadSdk: {
          fields: {
            headPic: { type: 'string', id: 1 },
            headText: { type: 'string', id: 2 },
            headType: { type: 'int32', id: 5 },
            sdkName: { type: 'string', id: 3 },
            sdkParams: { type: 'string', id: 4 }
          }
        },
        HotUserRankEntry: {
          fields: {
            hotUser: { rule: 'repeated', type: 'ShortUserInfo', id: 1 },
            moduleName: { type: 'string', id: 2 }
          }
        },
        ShortUserInfo: {
          fields: {
            portrait: { type: 'string', id: 2 },
            userId: { type: 'int64', id: 1 }
          }
        },
        Icon: {
          fields: {
            icon: { type: 'string', id: 4 },
            name: { type: 'string', id: 1 },
            position: { type: 'Position', id: 7 },
            spriteInfo: { rule: 'repeated', type: 'string', id: 8 },
            terminal: { type: 'Terminal', id: 6 },
            value: { type: 'int32', id: 5 },
            weight: { type: 'int32', id: 2 }
          }
        },
        Position: {
          fields: {
            card: { type: 'int32', id: 4 },
            frs: { type: 'int32', id: 1 },
            home: { type: 'int32', id: 3 },
            pb: { type: 'int32', id: 2 }
          }
        },
        Terminal: {
          fields: {
            client: { type: 'int32', id: 3 },
            pc: { type: 'int32', id: 1 },
            wap: { type: 'int32', id: 2 }
          }
        },
        ItemInfo: {
          fields: {
            apkName: { type: 'string', id: 23 },
            brief: { type: 'string', id: 4 },
            buttonLink: { type: 'string', id: 20 },
            buttonLinkType: { type: 'int32', id: 22 },
            buttonName: { type: 'string', id: 19 },
            forumName: { type: 'string', id: 12 },
            iconSize: { type: 'double', id: 6 },
            iconUrl: { type: 'string', id: 3 },
            id: { type: 'uint32', id: 1 },
            isSchool: { type: 'uint32', id: 9 },
            itemAppid: { type: 'string', id: 21 },
            itemOptions: { rule: 'repeated', type: 'ItemOptions', id: 7 },
            name: { type: 'string', id: 2 },
            score: { type: 'ItemTable', id: 8 },
            tags: { rule: 'repeated', type: 'string', id: 5 }
          }
        },
        ItemOptions: {
          fields: {
            key: { type: 'string', id: 1 },
            value: { type: 'string', id: 2 }
          }
        },
        ItemTable: {
          fields: {
            itemPlot: { rule: 'repeated', type: 'ItemPlot', id: 7 },
            itemPoint: { rule: 'repeated', type: 'ItemPoint', id: 6 },
            totalPointNum: { type: 'int32', id: 5 }
          }
        },
        ItemPlot: {
          fields: {
            level: { type: 'uint32', id: 1 },
            num: { type: 'uint32', id: 2 }
          }
        },
        ItemPoint: {
          fields: {
            point: { type: 'double', id: 2 },
            timeIntval: { type: 'string', id: 1 }
          }
        },
        Item: {
          fields: {
            apkDetail: { type: 'ApkDetail', id: 15 },
            apkName: { type: 'string', id: 13 },
            buttonLink: { type: 'string', id: 9 },
            buttonLinkType: { type: 'int32', id: 12 },
            buttonName: { type: 'string', id: 8 },
            categoryId: { type: 'int32', id: 11 },
            forumName: { type: 'string', id: 14 },
            iconSize: { type: 'double', id: 3 },
            iconUrl: { type: 'string', id: 4 },
            itemAppid: { type: 'string', id: 10 },
            itemId: { type: 'int64', id: 1 },
            itemName: { type: 'string', id: 2 },
            score: { type: 'double', id: 6 },
            star: { type: 'int32', id: 7 },
            tags: { rule: 'repeated', type: 'string', id: 5 }
          }
        },
        Lbs: {
          fields: {
            lat: { type: 'string', id: 1 },
            lng: { type: 'string', id: 2 },
            name: { type: 'string', id: 3 }
          }
        },
        Manager: {
          fields: {
            id: { type: 'int64', id: 1 },
            name: { type: 'string', id: 2 },
            portrait: { type: 'string', id: 4 },
            showName: { type: 'string', id: 3 }
          }
        },
        MediaNum: { fields: { pic: { type: 'int32', id: 1 } } },
        Media: {
          fields: {
            bigPic: { type: 'string', id: 3 },
            bsize: { type: 'string', id: 12 },
            dynamicPic: { type: 'string', id: 18 },
            height: { type: 'uint32', id: 11 },
            hthMidLoc: { type: 'double', id: 23 },
            isLongPic: { type: 'uint32', id: 19 },
            originPic: { type: 'string', id: 15 },
            originSize: { type: 'uint32', id: 16 },
            postId: { type: 'int64', id: 17 },
            showOriginalBtn: { type: 'uint32', id: 20 },
            smallPic: { type: 'string', id: 2 },
            srcPic: { type: 'string', id: 8 },
            type: { type: 'int32', id: 1 },
            vhsrc: { type: 'string', id: 7 },
            vpic: { type: 'string', id: 5 },
            vsrc: { type: 'string', id: 6 },
            waterPic: { type: 'string', id: 4 },
            width: { type: 'uint32', id: 10 },
            wthMidLoc: { type: 'double', id: 22 }
          }
        },
        MemberShowIcon: {
          fields: {
            icon: { type: 'string', id: 1 },
            name: { type: 'string', id: 2 },
            url: { type: 'string', id: 3 }
          }
        },
        MemeInfo: {
          fields: {
            detailLink: { type: 'string', id: 7 },
            height: { type: 'uint32', id: 6 },
            pckId: { type: 'uint32', id: 1 },
            picId: { type: 'uint64', id: 2 },
            picUrl: { type: 'string', id: 3 },
            thumbnail: { type: 'string', id: 4 },
            width: { type: 'uint32', id: 5 }
          }
        },
        NativeApp: {
          fields: {
            downloadAnd: { type: 'string', id: 3 },
            downloadIos: { type: 'string', id: 4 },
            jumpIos: { type: 'string', id: 2 }
          }
        },
        NavTabInfo: {
          fields: {
            menu: { rule: 'repeated', type: 'FrsTabInfo', id: 2 },
            tab: { rule: 'repeated', type: 'FrsTabInfo', id: 1 }
          }
        },
        NewGodInfo: {
          fields: {
            fieldId: { type: 'uint32', id: 2 },
            fieldName: { type: 'string', id: 3 },
            status: { type: 'int32', id: 1 },
            type: { type: 'uint32', id: 4 },
            typeName: { type: 'string', id: 5 }
          }
        },
        OriginThreadInfo: {
          fields: {
            _abstract: { rule: 'repeated', type: 'Abstract', id: 3 },
            agree: { type: 'Agree', id: 19 },
            alaInfo: { type: 'AlaLiveInfo', id: 6 },
            author: { type: 'User', id: 18 },
            content: { rule: 'repeated', type: 'PbContent', id: 14 },
            fid: { type: 'int64', id: 7 },
            fname: { type: 'string', id: 4 },
            isDeleted: { type: 'int32', id: 9 },
            isFrsMask: { type: 'int32', id: 28 },
            isNewStyle: { type: 'int32', id: 15 },
            isUgc: { type: 'int32', id: 10 },
            item: { type: 'Item', id: 22 },
            media: { rule: 'repeated', type: 'Media', id: 2 },
            oriUgcInfo: { type: 'Baijiahao', id: 11 },
            pid: { type: 'int64', id: 25 },
            pollInfo: { type: 'PollInfo', id: 21 },
            replyNum: { type: 'int32', id: 16 },
            sharedNum: { type: 'int32', id: 20 },
            threadType: { type: 'int32', id: 8 },
            tid: { type: 'string', id: 5 },
            title: { type: 'string', id: 1 },
            videoInfo: { type: 'VideoInfo', id: 13 }
          }
        },
        User: {
          fields: {
            agreeNum: { type: 'int32', id: 88 },
            alaInfo: { type: 'AlaUserInfo', id: 78 },
            alaLiveInfo: { type: 'AlaLiveInfo', id: 85 },
            appealThreadPopover: { type: 'string', id: 112 },
            baijiahaoInfo: { type: 'BaijiahaoInfo', id: 95 },
            balv: { type: 'Balv', id: 10 },
            bawuType: { type: 'string', id: 26 },
            bazhuGrade: { type: 'BazhuSign', id: 105 },
            bimgEndTime: { type: 'int32', id: 40 },
            bimgUrl: { type: 'string', id: 13 },
            businessAccountInfo: { type: 'BusinessAccountInfo', id: 111 },
            callFansInfo: { type: 'CallFansInfo', id: 104 },
            displayAuthType: { type: 'int32', id: 123 },
            displayIntro: { type: 'string', id: 138 },
            fansNickname: { type: 'string', id: 57 },
            fansNum: { type: 'int32', id: 30 },
            gender: { type: 'int32', id: 42 },
            giftNum: { type: 'int32', id: 49 },
            hasConcerned: { type: 'int32', id: 35 },
            iconinfo: { rule: 'repeated', type: 'Icon', id: 17 },
            id: { type: 'int64', id: 2 },
            iosBimgFormat: { type: 'string', id: 22 },
            ip: { type: 'string', id: 28 },
            ipAddress: { type: 'string', id: 127 },
            isBawu: { type: 'int32', id: 25 },
            isDefaultAvatar: { type: 'int32', id: 106 },
            isInterestman: { type: 'int32', id: 16 },
            isLike: { type: 'int32', id: 24 },
            isLogin: { type: 'int32', id: 1 },
            isManager: { type: 'int32', id: 11 },
            isMem: { type: 'int32', id: 39 },
            isSelectTail: { type: 'int32', id: 51 },
            isVerify: { type: 'int32', id: 15 },
            isVideobiggie: { type: 'int32', id: 93 },
            leftCallNum: { type: 'int32', id: 89 },
            levelId: { type: 'int32', id: 23 },
            name: { type: 'string', id: 3 },
            nameShow: { type: 'string', id: 4 },
            newGodData: { type: 'NewGodInfo', id: 101 },
            newTshowIcon: { rule: 'repeated', type: 'TshowInfo', id: 65 },
            noUn: { type: 'int32', id: 6 },
            payMemberInfo: { type: 'PayMemberInfo', id: 41 },
            pendant: { type: 'Pendant', id: 77 },
            portrait: { type: 'string', id: 5 },
            privSets: { type: 'PrivSets', id: 45 },
            privThread: { type: 'int32', id: 92 },
            profitList: {
              rule: 'repeated',
              type: 'TwAnchorProfitItem',
              id: 67
            },
            rank: { type: 'string', id: 12 },
            sealPrefix: { type: 'string', id: 79 },
            sex: { type: 'int32', id: 32 },
            showPbPrivateFlag: { type: 'int32', id: 117 },
            tbVip: { type: 'TbVipInfo', id: 72 },
            themeCard: { type: 'ThemeCardInUser', id: 69 },
            threadNum: { type: 'int32', id: 87 },
            tshowIcon: { rule: 'repeated', type: 'TshowInfo', id: 18 },
            twAnchorInfo: { type: 'TwZhiBoUser', id: 66 },
            type: { type: 'int32', id: 7 },
            uk: { type: 'string', id: 107 },
            userType: { type: 'int32', id: 19 },
            userhide: { type: 'int32', id: 9 },
            vipInfo: { type: 'UserVipInfo', id: 61 },
            workCreatorInfo: { type: 'WorkCreatorInfo', id: 124 },
            userGrowth: { type: 'UserGrowth', id: 137 },
            themeTail: { type: 'ThemeTailInUser', id: 141 },
            editConfig: { type: 'EditConfig', id: 126 }
          }
        },
        TshowInfo: {
          fields: {
            icon: { type: 'string', id: 1 },
            name: { type: 'string', id: 2 },
            url: { type: 'string', id: 3 }
          }
        },
        PayMemberInfo: {
          fields: {
            endTime: { type: 'int32', id: 2 },
            picUrl: { type: 'string', id: 5 },
            propsId: { type: 'int32', id: 1 }
          }
        },
        Pendant: {
          fields: {
            imgUrl: { type: 'string', id: 2 },
            propsId: { type: 'uint64', id: 1 },
            dynamicUrl: { type: 'string', id: 3 }
          }
        },
        PrivSets: {
          fields: {
            bazhuShowInside: { type: 'int32', id: 8 },
            bazhuShowOutside: { type: 'int32', id: 9 },
            friend: { type: 'int32', id: 5 },
            group: { type: 'int32', id: 3 },
            like: { type: 'int32', id: 2 },
            live: { type: 'int32', id: 6 },
            location: { type: 'int32', id: 1 },
            post: { type: 'int32', id: 4 },
            reply: { type: 'int32', id: 7 }
          }
        },
        TwAnchorProfitItem: {
          fields: {
            availableAnchorLevel: { type: 'uint32', id: 2 },
            iconLockUrl: { type: 'string', id: 5 },
            iconUnlockUrl: { type: 'string', id: 4 },
            id: { type: 'int32', id: 1 },
            name: { type: 'string', id: 3 }
          }
        },
        TbVipInfo: {
          fields: {
            intro: { type: 'string', id: 1 },
            vDetail: { type: 'string', id: 3 },
            vUrl: { type: 'string', id: 2 }
          }
        },
        ThemeCardInUser: {
          fields: {
            imgAndroid: { type: 'string', id: 4 },
            imgIos: { type: 'string', id: 2 },
            level: { type: 'uint32', id: 5 },
            propsId: { type: 'uint64', id: 1 },
            dynamicUrl: { type: 'string', id: 6 },
            exclusiveNo: { type: 'string', id: 7 },
            jumpUrl: { type: 'string', id: 8 }
          }
        },
        TwZhiBoUser: {
          fields: {
            anchorLevel: { type: 'uint32', id: 1 },
            inBlackList: { type: 'uint32', id: 2 }
          }
        },
        UserVipInfo: {
          fields: {
            aScore: { type: 'int32', id: 6 },
            eTime: { type: 'uint32', id: 3 },
            extScore: { type: 'uint32', id: 4 },
            iconUrl: { type: 'string', id: 8 },
            nScore: { type: 'uint32', id: 7 },
            sTime: { type: 'uint32', id: 2 },
            vLevel: { type: 'uint32', id: 5 },
            vStatus: { type: 'uint32', id: 1 }
          }
        },
        WorkCreatorInfo: { fields: { authDesc: { type: 'string', id: 1 } } },
        UserGrowth: {
          fields: {
            levelId: { type: 'uint32', id: 1 },
            score: { type: 'int64', id: 2 },
            targetScore: { type: 'int64', id: 3 },
            taskInfo: { rule: 'repeated', type: 'UserTaskInfo', id: 5 },
            tmoney: { type: 'double', id: 4 }
          }
        },
        UserTaskInfo: {
          fields: {
            actType: { type: 'string', id: 10 },
            brief: { type: 'string', id: 3 },
            currNum: { type: 'int32', id: 7 },
            id: { type: 'int64', id: 1 },
            name: { type: 'string', id: 2 },
            status: { type: 'int32', id: 5 },
            targetNum: { type: 'int32', id: 6 },
            targetScheme: { type: 'string', id: 11 },
            taskIconUrl: { type: 'string', id: 4 },
            taskType: { type: 'int32', id: 8 },
            weight: { type: 'int32', id: 9 }
          }
        },
        ThemeTailInUser: {
          fields: {
            dynamic: { type: 'string', id: 2 },
            propsId: { type: 'string', id: 3 },
            url: { type: 'string', id: 1 }
          }
        },
        PbContent: {
          fields: {
            _static: { type: 'string', id: 17 },
            bigCdnSrc: { type: 'string', id: 9 },
            bsize: { type: 'string', id: 5 },
            c: { type: 'string', id: 11 },
            cdnSrc: { type: 'string', id: 8 },
            cdnSrcActive: { type: 'string', id: 36 },
            count: { type: 'int32', id: 28 },
            duringTime: { type: 'uint32', id: 13 },
            dynamic: { type: 'string', id: 16 },
            eType: { type: 'uint32', id: 24 },
            graffitiInfo: { type: 'GraffitiInfo', id: 29 },
            height: { type: 'uint32', id: 19 },
            isLongPic: { type: 'uint32', id: 34 },
            isNativeApp: { type: 'uint32', id: 22 },
            itemForumName: { type: 'string', id: 39 },
            itemId: { type: 'uint64', id: 38 },
            link: { type: 'string', id: 3 },
            memeInfo: { type: 'MemeInfo', id: 33 },
            nativeApp: { type: 'NativeApp', id: 23 },
            originSize: { type: 'uint32', id: 27 },
            originSrc: { type: 'string', id: 25 },
            packetName: { type: 'string', id: 20 },
            phonetype: { type: 'string', id: 21 },
            picId: { type: 'int64', id: 42 },
            showOriginalBtn: { type: 'uint32', id: 35 },
            src: { type: 'string', id: 4 },
            text: { type: 'string', id: 2 },
            tiebaplusInfo: { type: 'TiebaPlusInfo', id: 40 },
            type: { type: 'uint32', id: 1 },
            uid: { type: 'int64', id: 15 },
            width: { type: 'uint32', id: 18 },
            urlType: { type: 'int32', id: 32 },
            voiceMd5: { type: 'string', id: 12 },
            isSub: { type: 'uint32', id: 14 }
          }
        },
        TiebaPlusInfo: {
          fields: {
            appCompany: { type: 'string', id: 11 },
            appIcon: { type: 'string', id: 6 },
            appId: { type: 'string', id: 5 },
            appPackage: { type: 'string', id: 7 },
            appPower: { type: 'string', id: 10 },
            appPrivacy: { type: 'string', id: 9 },
            appVersion: { type: 'string', id: 8 },
            buttonDesc: { type: 'string', id: 23 },
            desc: { type: 'string', id: 2 },
            downloadUrl: { type: 'string', id: 4 },
            forumName: { type: 'string', id: 20 },
            h5JumpNumber: { type: 'string', id: 14 },
            h5JumpParam: { type: 'string', id: 15 },
            h5JumpType: { type: 'int32', id: 13 },
            isAppoint: { type: 'int32', id: 18 },
            itemId: { type: 'string', id: 17 },
            jumpSetting: { type: 'int32', id: 21 },
            jumpType: { type: 'int32', id: 16 },
            jumpUrl: { type: 'string', id: 3 },
            pluginUser: { type: 'PluginUser', id: 19 },
            targetType: { type: 'int32', id: 12 },
            title: { type: 'string', id: 1 },
            wxThumbnail: { type: 'string', id: 22 }
          }
        },
        PluginUser: {
          fields: {
            isDownloadCardWhiteuser: { type: 'int32', id: 5 },
            userId: { type: 'int64', id: 1 },
            userNameShow: { type: 'string', id: 2 },
            userPhoto: { type: 'string', id: 4 },
            userType: { type: 'int32', id: 3 }
          }
        },
        PollInfo: {
          fields: {
            endTime: { type: 'int32', id: 8 },
            isMulti: { type: 'int32', id: 2 },
            isPolled: { type: 'int32', id: 5 },
            lastTime: { type: 'uint32', id: 13 },
            options: { rule: 'repeated', type: 'PollOption', id: 9 },
            optionsCount: { type: 'int32', id: 4 },
            polledValue: { type: 'string', id: 6 },
            title: { type: 'string', id: 12 },
            totalNum: { type: 'int64', id: 3 },
            totalPoll: { type: 'int64', id: 11 }
          }
        },
        PollOption: {
          fields: {
            id: { type: 'int32', id: 1 },
            num: { type: 'int64', id: 2 },
            text: { type: 'string', id: 3 }
          }
        },
        VideoInfo: {
          fields: {
            firstFrameThumbnail: { type: 'string', id: 22 },
            isVertical: { type: 'uint32', id: 15 },
            playCount: { type: 'int32', id: 10 },
            smallThumbnailUrl: { type: 'string', id: 21 },
            thumbnailHeight: { type: 'uint32', id: 8 },
            thumbnailUrl: { type: 'string', id: 6 },
            thumbnailWidth: { type: 'uint32', id: 7 },
            videoDesc: { rule: 'repeated', type: 'VideoDesc', id: 12 },
            videoDuration: { type: 'uint32', id: 3 },
            videoHeight: { type: 'uint32', id: 5 },
            videoLength: { type: 'int32', id: 9 },
            videoMd5: { type: 'string', id: 1 },
            videoType: { type: 'uint32', id: 14 },
            videoUrl: { type: 'string', id: 2 },
            videoWidth: { type: 'uint32', id: 4 }
          }
        },
        VideoDesc: {
          fields: {
            videoHeight: { type: 'string', id: 5 },
            videoId: { type: 'int32', id: 1 },
            videoUrl: { type: 'string', id: 3 },
            videoWidth: { type: 'string', id: 4 }
          }
        },
        Page: {
          fields: {
            curGoodId: { type: 'int32', id: 8 },
            currentPage: { type: 'int32', id: 3 },
            hasMore: { type: 'int32', id: 6 },
            hasPrev: { type: 'int32', id: 7 },
            newTotalPage: { type: 'int32', id: 14 },
            offset: { type: 'int32', id: 2 },
            pageSize: { type: 'int32', id: 1 },
            pnum: { type: 'int32', id: 10 },
            reqNum: { type: 'int32', id: 9 },
            tnum: { type: 'int32', id: 11 },
            totalCount: { type: 'int32', id: 4 },
            totalNum: { type: 'int32', id: 12 },
            totalPage: { type: 'int32', id: 5 }
          }
        },
        PbGoodsInfo: {
          fields: {
            goodsFrom: { type: 'string', id: 6 },
            goodsImage: { type: 'string', id: 2 },
            goodsPrice: { type: 'string', id: 3 },
            goodsTitle: { type: 'string', id: 1 },
            goodsUrl: { type: 'string', id: 4 },
            goodsUrlH5: { type: 'string', id: 7 },
            sort: { type: 'uint32', id: 5 }
          }
        },
        PbLinkInfo: {
          fields: {
            extTxt: { type: 'string', id: 5 },
            linkFrom: { type: 'string', id: 4 },
            picUrl: { type: 'string', id: 3 },
            sort: { type: 'uint32', id: 6 },
            title: { type: 'string', id: 1 },
            toUrl: { type: 'string', id: 2 },
            urlType: { type: 'int32', id: 7 }
          }
        },
        PbPresent: { fields: { total: { type: 'uint32', id: 1 } } },
        Post: {
          fields: {
            agree: { type: 'Agree', id: 37 },
            author: { type: 'User', id: 23 },
            authorId: { type: 'int64', id: 19 },
            bimgUrl: { type: 'string', id: 17 },
            content: { rule: 'repeated', type: 'PbContent', id: 5 },
            customFigure: { type: 'CustomFigure', id: 60 },
            customState: { type: 'CustomState', id: 61 },
            floor: { type: 'uint32', id: 3 },
            foldCommentApplyUrl: { type: 'string', id: 57 },
            foldCommentStatus: { type: 'int32', id: 56 },
            foldTip: { type: 'string', id: 44 },
            id: { type: 'uint64', id: 1 },
            imgNumAbtest: { type: 'int32', id: 41 },
            iosBimgFormat: { type: 'string', id: 18 },
            isBub: { type: 'uint32', id: 11 },
            isFold: { type: 'int32', id: 43 },
            isPostVisible: { type: 'int32', id: 39 },
            isTopAgreePost: { type: 'int32', id: 45 },
            isVoice: { type: 'uint32', id: 9 },
            isVote: { type: 'uint32', id: 8 },
            isWonderfulPost: { type: 'int32', id: 51 },
            lbsInfo: { type: 'Lbs', id: 7 },
            needLog: { type: 'int32', id: 40 },
            outerItem: { type: 'Item', id: 54 },
            present: { type: 'PbPresent', id: 28 },
            showSquared: { type: 'int32', id: 47 },
            signature: { type: 'SignatureData', id: 21 },
            subPostList: { type: 'SubPost', id: 15 },
            subPostNumber: { type: 'uint32', id: 13 },
            tailInfo: { type: 'TailInfo', id: 22 },
            tid: { type: 'int64', id: 46 },
            time: { type: 'uint32', id: 4 },
            title: { type: 'string', id: 2 },
            dynamicUrl: { type: 'string', id: 63 },
            itemStar: { rule: 'repeated', type: 'HeadItem', id: 52 },
            item: { type: 'Item', id: 53 },
            bubbleInfo: { type: 'ThemeBubble', id: 64 },
            rumorSourceImg: { type: 'string', id: 65 },
            advertisement: { type: 'Advertisement', id: 55 }
          }
        },
        SignatureData: {
          fields: {
            content: { rule: 'repeated', type: 'SignatureContent', id: 4 },
            fontColor: { type: 'string', id: 3 },
            fontKeyName: { type: 'string', id: 2 },
            signatureId: { type: 'int32', id: 1 }
          }
        },
        SignatureContent: {
          fields: {
            text: { type: 'string', id: 2 },
            type: { type: 'int32', id: 1 }
          }
        },
        SubPost: {
          fields: {
            subPostList: { rule: 'repeated', type: 'SubPostList', id: 2 }
          }
        },
        SubPostList: {
          fields: {
            authorId: { type: 'int64', id: 4 },
            content: { rule: 'repeated', type: 'PbContent', id: 2 },
            floor: { type: 'uint32', id: 6 },
            id: { type: 'uint64', id: 1 },
            time: { type: 'uint32', id: 3 },
            title: { type: 'string', id: 5 }
          }
        },
        TailInfo: {
          fields: {
            content: { type: 'string', id: 4 },
            iconLink: { type: 'string', id: 3 },
            iconUrl: { type: 'string', id: 2 },
            tailType: { type: 'int32', id: 1 }
          }
        },
        ThemeBubble: {
          fields: {
            jumpUrl: { type: 'string', id: 3 },
            packageId: { type: 'int32', id: 2 },
            propsId: { type: 'int32', id: 1 }
          }
        },
        RecommendInfo: {
          fields: {
            title: { type: 'string', id: 1 },
            userList: { rule: 'repeated', type: 'SchoolRecomUserInfo', id: 2 }
          }
        },
        SchoolRecomUserInfo: {
          fields: {
            institute: { type: 'string', id: 4 },
            isLiked: { type: 'uint32', id: 5 },
            portrait: { type: 'string', id: 3 },
            uid: { type: 'uint64', id: 1 },
            uname: { type: 'string', id: 2 }
          }
        },
        RecommendTip: {
          fields: {
            isFollow: { type: 'string', id: 2 },
            reason: { type: 'string', id: 1 }
          }
        },
        RecomTagInfo: {
          fields: {
            id: { type: 'int32', id: 1 },
            name: { type: 'string', id: 2 },
            pic: { type: 'string', id: 3 }
          }
        },
        RecomTopicList: {
          fields: {
            discussNum: { type: 'uint64', id: 4 },
            tag: { type: 'uint32', id: 5 },
            topicDesc: { type: 'string', id: 6 },
            topicId: { type: 'uint64', id: 1 },
            topicName: { type: 'string', id: 2 },
            topicPic: { type: 'string', id: 7 },
            type: { type: 'uint32', id: 3 }
          }
        },
        RewardCard: {
          fields: {
            bannerJumpUrl: { type: 'string', id: 15 },
            buttonText: { type: 'string', id: 7 },
            endText: { type: 'string', id: 5 },
            endTime: { type: 'string', id: 6 },
            headImgs: { rule: 'repeated', type: 'string', id: 13 },
            icon: { type: 'string', id: 2 },
            id: { type: 'string', id: 1 },
            joinNum: { type: 'string', id: 9 },
            joinSuccText: { type: 'string', id: 14 },
            jumpUrl: { type: 'string', id: 8 },
            rewardMaterial: {
              rule: 'repeated',
              type: 'RewardMaterial',
              id: 11
            },
            startText: { type: 'string', id: 4 },
            title: { type: 'string', id: 3 },
            totalNum: { type: 'string', id: 12 }
          }
        },
        RewardMaterial: {
          fields: {
            icon: { type: 'string', id: 1 },
            isMatched: { type: 'int32', id: 3 },
            isNewestMatchedLevel: { type: 'int32', id: 4 },
            unlockLevel: { type: 'string', id: 2 }
          }
        },
        ServiceArea: {
          fields: {
            picurl: { type: 'string', id: 2 },
            servicename: { type: 'string', id: 1 },
            serviceurl: { type: 'string', id: 3 },
            thirdStatisticsUrl: { rule: 'repeated', type: 'string', id: 8 }
          }
        },
        SignForum: { fields: { isOn: { type: 'int32', id: 1 } } },
        SignInfo: {
          fields: {
            forumInfo: { type: 'SignForum', id: 2 },
            userInfo: { type: 'SignUser', id: 1 }
          }
        },
        SignUser: {
          fields: {
            cSignNum: { type: 'int32', id: 8 },
            contSignNum: { type: 'int32', id: 5 },
            hunSignNum: { type: 'int32', id: 9 },
            isOrgDisabled: { type: 'int32', id: 7 },
            isSignIn: { type: 'int32', id: 2 },
            missSignNum: { type: 'int32', id: 11 },
            signTime: { type: 'int32', id: 4 },
            totalResignNum: { type: 'int32', id: 10 },
            userId: { type: 'int64', id: 1 },
            userSignRank: { type: 'int32', id: 3 }
          }
        },
        SimpleForum: {
          fields: {
            avatar: { type: 'string', id: 4 },
            deletedReasonInfo: { type: 'DeletedReasonInfo', id: 17 },
            firstClass: { type: 'string', id: 7 },
            id: { type: 'int64', id: 1 },
            isBrandForum: { type: 'int32', id: 14 },
            isExists: { type: 'int32', id: 3 },
            isFrsMask: { type: 'int32', id: 18 },
            isLiked: { type: 'uint32', id: 5 },
            memberNum: { type: 'int32', id: 12 },
            name: { type: 'string', id: 2 },
            postNum: { type: 'int32', id: 13 },
            secondClass: { type: 'string', id: 8 },
            themeColor: { type: 'ThemeColorInfo', id: 19 },
            recommendTip: { type: 'string', id: 20 }
          }
        },
        ThemeColorInfo: {
          fields: {
            dark: { type: 'ThemeElement', id: 3 },
            day: { type: 'ThemeElement', id: 1 },
            night: { type: 'ThemeElement', id: 2 }
          }
        },
        ThemeElement: {
          fields: {
            commonColor: { type: 'string', id: 1 },
            darkColor: { type: 'string', id: 2 },
            fontColor: { type: 'string', id: 5 },
            lightColor: { type: 'string', id: 3 },
            patternImage: { type: 'string', id: 4 }
          }
        },
        SmartApp: {
          fields: {
            _abstract: { type: 'string', id: 3 },
            avatar: { type: 'string', id: 1 },
            h5Url: { type: 'string', id: 5 },
            id: { type: 'string', id: 6 },
            isGame: { type: 'int32', id: 10 },
            isRecom: { type: 'int32', id: 9 },
            link: { type: 'string', id: 7 },
            name: { type: 'string', id: 2 },
            nawsAppId: { type: 'uint64', id: 8 },
            pic: { type: 'string', id: 4 }
          }
        },
        SortOption: {
          fields: {
            name: { type: 'string', id: 1 },
            sortType: { type: 'int32', id: 2 }
          }
        },
        StarEnter: {
          fields: {
            bazhuMark: { type: 'int32', id: 10 },
            icon: { type: 'string', id: 1 },
            text: { type: 'string', id: 8 },
            time: { type: 'int32', id: 6 },
            title: { type: 'string', id: 2 },
            type: { type: 'int32', id: 4 },
            url: { type: 'string', id: 5 },
            weight: { type: 'int32', id: 3 }
          }
        },
        TaskInfo: {
          fields: {
            bgimg: { type: 'string', id: 3 },
            cardType: { type: 'int32', id: 15 },
            endTime: { type: 'int64', id: 6 },
            floorGodReply: { type: 'string', id: 14 },
            forumId: { type: 'int64', id: 8 },
            forumName: { type: 'string', id: 9 },
            isGodReply: { type: 'int32', id: 13 },
            objId: { type: 'string', id: 10 },
            rewardCard: { type: 'RewardCard', id: 12 },
            startTime: { type: 'int64', id: 5 },
            taskId: { type: 'int64', id: 1 },
            threadId: { type: 'int64', id: 2 },
            threadImg: { type: 'string', id: 4 },
            threadImgSize: { type: 'string', id: 7 },
            voteSchema: { type: 'VoteSchema', id: 11 }
          }
        },
        VoteSchema: {
          fields: {
            jumpUrl: { type: 'string', id: 3 },
            textAfterVote: { type: 'string', id: 2 },
            textBeforeVote: { type: 'string', id: 1 }
          }
        },
        ThreadIdListInfo: {
          fields: {
            isPartialVisible: { type: 'int32', id: 2 },
            tid: { type: 'int64', id: 1 }
          }
        },
        ThreadInfo: {
          fields: {
            _abstract: { rule: 'repeated', type: 'Abstract', id: 21 },
            abTag: { type: 'string', id: 108 },
            agree: { type: 'Agree', id: 126 },
            agreeNum: { type: 'int32', id: 124 },
            alaInfo: { type: 'AlaLiveInfo', id: 113 },
            articleCover: { type: 'string', id: 162 },
            author: { type: 'User', id: 18 },
            authorId: { type: 'int64', id: 56 },
            bjhContentTag: { type: 'int32', id: 163 },
            categoryName: { type: 'string', id: 73 },
            cheakRepeat: { type: 'uint32', id: 107 },
            clickMonitorUrl: { type: 'string', id: 206 },
            clickUrl: { type: 'string', id: 32 },
            collectMarkPid: { type: 'string', id: 51 },
            collectNum: { type: 'uint32', id: 190 },
            collectStatus: { type: 'int32', id: 50 },
            commentNum: { type: 'int32', id: 20 },
            createTime: { type: 'int32', id: 45 },
            customFigure: { type: 'CustomFigure', id: 211 },
            customState: { type: 'CustomState', id: 212 },
            dislikeInfo: { rule: 'repeated', type: 'DislikeInfo', id: 120 },
            exposureMonitorUrl: { type: 'string', id: 205 },
            fid: { type: 'int64', id: 27 },
            firstPostContent: { rule: 'repeated', type: 'PbContent', id: 142 },
            firstPostId: { type: 'int64', id: 40 },
            fname: { type: 'string', id: 28 },
            forumInfo: { type: 'SimpleForum', id: 155 },
            id: { type: 'int64', id: 1 },
            isActivity: { type: 'int32', id: 16 },
            isBakan: { type: 'int32', id: 12 },
            isBjh: { type: 'int32', id: 161 },
            isBookChapter: { type: 'uint32', id: 103 },
            isBub: { type: 'int32', id: 39 },
            isCalled: { type: 'int32', id: 136 },
            isDeal: { type: 'int32', id: 97 },
            isDeleted: { type: 'int32', id: 181 },
            isFrsMask: { type: 'int32', id: 198 },
            isGod: { type: 'int32', id: 131 },
            isGodthreadRecommend: { type: 'int32', id: 85 },
            isGood: { type: 'int32', id: 10 },
            isHeadlinepost: { type: 'int32', id: 165 },
            isHighlight: { type: 'int32', id: 213 },
            isLinkThread: { type: 'int32', id: 128 },
            isLivepost: { type: 'int32', id: 30 },
            isMeizhi: { type: 'int32', id: 14 },
            isMembertop: { type: 'int32', id: 54 },
            isMultiforumThread: { type: 'int32', id: 123 },
            isNotice: { type: 'int32', id: 17 },
            isNovel: { type: 'int32', id: 76 },
            isNovelReward: { type: 'int32', id: 78 },
            isNovelThank: { type: 'int32', id: 77 },
            isNtitle: { type: 'int32', id: 38 },
            isPartialVisible: { type: 'int32', id: 127 },
            isPic: { type: 'int32', id: 43 },
            isPictxt: { type: 'int32', id: 204 },
            isProtal: { type: 'int32', id: 13 },
            isSCard: { type: 'uint32', id: 170 },
            isShareThread: { type: 'int32', id: 143 },
            isTiebaplusAd: { type: 'string', id: 193 },
            isTop: { type: 'int32', id: 9 },
            isTopic: { type: 'int32', id: 148 },
            isVideobiggieRecomthread: { type: 'int32', id: 153 },
            isVoiceThread: { type: 'int32', id: 15 },
            isVote: { type: 'int32', id: 11 },
            lastReadPid: { type: 'uint64', id: 106 },
            lastReplyer: { type: 'User', id: 19 },
            lastTime: { type: 'string', id: 6 },
            lastTimeInt: { type: 'int32', id: 7 },
            legoCard: { type: 'string', id: 94 },
            livecoverSrc: { type: 'string', id: 67 },
            location: { type: 'Lbs', id: 62 },
            media: { rule: 'repeated', type: 'Media', id: 22 },
            mediaNum: { rule: 'repeated', type: 'MediaNum', id: 25 },
            nid: { type: 'string', id: 164 },
            originThreadInfo: { type: 'OriginThreadInfo', id: 141 },
            pbLinkInfo: { rule: 'repeated', type: 'PbLinkInfo', id: 178 },
            pollInfo: { type: 'PollInfo', id: 74 },
            postId: { type: 'int64', id: 52 },
            recomReason: { type: 'string', id: 109 },
            recomSource: { type: 'string', id: 104 },
            recomWeight: { type: 'string', id: 105 },
            recommendTip: { type: 'RecommendTip', id: 202 },
            replyNum: { type: 'int32', id: 4 },
            richAbstract: { rule: 'repeated', type: 'PbContent', id: 112 },
            richTitle: { rule: 'repeated', type: 'PbContent', id: 111 },
            scardPacketId: { type: 'string', id: 171 },
            shareNum: { type: 'int64', id: 135 },
            showCommented: { type: 'int32', id: 31 },
            storecount: { type: 'int32', id: 68 },
            tShareImg: { type: 'string', id: 159 },
            tabId: { type: 'int32', id: 175 },
            tabName: { type: 'string', id: 176 },
            threadRecommendInfos: {
              rule: 'repeated',
              type: 'ThreadRecommendInfo',
              id: 191
            },
            threadShareLink: { type: 'string', id: 172 },
            threadType: { type: 'int32', id: 26 },
            threadTypes: { type: 'int32', id: 8 },
            tid: { type: 'int64', id: 2 },
            tiebaplusCantDelete: { type: 'int32', id: 197 },
            tiebaplusExtraParam: { type: 'string', id: 196 },
            tiebaplusOrderId: { type: 'string', id: 194 },
            tiebaplusToken: { type: 'string', id: 195 },
            title: { type: 'string', id: 3 },
            topAgreePost: { type: 'Post', id: 125 },
            topic: { type: 'Topic', id: 47 },
            topicH5Url: { type: 'string', id: 150 },
            topicUserName: { type: 'string', id: 149 },
            twzhiboInfo: { type: 'ZhiBoInfoTW', id: 72 },
            videoInfo: { type: 'VideoInfo', id: 79 },
            viewNum: { type: 'int32', id: 5 },
            wonderfulPostInfo: { type: 'string', id: 177 },
            worksInfo: { type: 'WorksInfo', id: 189 },
            zan: { type: 'Zan', id: 41 },
            tiebaplusAd: { type: 'TiebaPlusAd', id: 201 },
            itemStar: { rule: 'repeated', type: 'HeadItem', id: 180 },
            threadRecommendTag: { type: 'ThreadRecommendTag', id: 210 },
            item: { type: 'Item', id: 179 },
            taskInfo: { type: 'TaskInfo', id: 83 },
            isXiuxiuThread: { type: 'int32', id: 214 },
            nawsInfo: { type: 'SmartApp', id: 156 }
          }
        },
        ThreadRecommendInfo: {
          fields: {
            backgroundColor: { type: 'ThemeColorInfo', id: 13 },
            recommendIcon: { type: 'string', id: 9 },
            recommendReason: { type: 'string', id: 5 },
            recommendReasonColor: { type: 'ThemeColorInfo', id: 11 },
            recommendType: { type: 'string', id: 7 },
            recommendTypeColor: { type: 'ThemeColorInfo', id: 10 },
            stripColor: { type: 'ThemeColorInfo', id: 12 },
            topicId: { type: 'int64', id: 6 },
            recommendTail: { type: 'string', id: 8 },
            jumpLink: { type: 'string', id: 14 }
          }
        },
        Topic: {
          fields: {
            isLpost: { type: 'int32', id: 1 },
            link: { type: 'string', id: 3 }
          }
        },
        ZhiBoInfoTW: {
          fields: {
            content: { type: 'string', id: 11 },
            copythreadRemind: { type: 'uint32', id: 20 },
            fieldEx: { type: 'string', id: 22 },
            forumId: { type: 'uint64', id: 8 },
            forumName: { type: 'string', id: 7 },
            freqNum: { type: 'uint32', id: 19 },
            isCopytwzhibo: { type: 'uint32', id: 21 },
            isHeadline: { type: 'int32', id: 17 },
            lastModifiedTime: { type: 'uint64', id: 9 },
            livecoverSrc: { type: 'string', id: 2 },
            livecoverSrcBsize: { type: 'string', id: 3 },
            livecoverSrcStatus: { type: 'string', id: 15 },
            postNum: { type: 'uint32', id: 4 },
            replyNum: { type: 'uint32', id: 5 },
            threadId: { type: 'uint64', id: 1 },
            title: { type: 'string', id: 10 },
            user: { type: 'User', id: 12 },
            zan: { type: 'Zan', id: 6 }
          }
        },
        Zan: {
          fields: {
            isLiked: { type: 'int32', id: 3 },
            lastTime: { type: 'int32', id: 4 },
            num: { type: 'int32', id: 1 }
          }
        },
        WorksInfo: {
          fields: {
            isWorks: { type: 'int32', id: 1 },
            tagList: { type: 'VideoTags', id: 3 }
          }
        },
        VideoTags: {
          fields: {
            first: { type: 'string', id: 1 },
            second: { type: 'string', id: 2 },
            tags: { rule: 'repeated', type: 'string', id: 3 }
          }
        },
        TiebaPlusAd: {
          fields: {
            adSource: { type: 'string', id: 3 },
            costUrl: { type: 'string', id: 1 },
            showUrl: { type: 'string', id: 2 }
          }
        },
        ThreadRecommendTag: {
          fields: {
            backgroundColor: { type: 'ThemeColorInfo', id: 3 },
            text: { type: 'string', id: 1 },
            textColor: { type: 'ThemeColorInfo', id: 2 }
          }
        },
        VitalityInfo: {
          fields: {
            frequentlyForumInfo: { type: 'FrequentlyForumInfo', id: 1 }
          }
        },
        frs: {
          nested: {
            ActivityHead: {
              fields: {
                activityTitle: { type: 'string', id: 2 },
                activityType: { type: 'int32', id: 1 },
                headImgs: { rule: 'repeated', type: 'HeadImgs', id: 3 },
                isAd: { type: 'bool', id: 13 },
                objId: { type: 'string', id: 5 },
                pullDownClickUrl: { type: 'string', id: 12 },
                pullDownExposureUrl: { type: 'string', id: 11 },
                pullDownInterval: { type: 'int32', id: 8 },
                pullDownPackageName: { type: 'string', id: 15 },
                pullDownPicAndroid: { type: 'string', id: 10 },
                pullDownPicIos: { type: 'string', id: 9 },
                pullDownSchema: { type: 'string', id: 14 },
                pullDownUrl: { type: 'string', id: 7 },
                topSize: { type: 'Size', id: 4 }
              }
            },
            CoverImageColor: {
              fields: {
                model: { type: 'int32', id: 2 },
                value: { type: 'string', id: 1 }
              }
            },
            DataRes: {
              fields: {
                activityhead: { type: 'ActivityHead', id: 23 },
                adSampleMapKey: { type: 'string', id: 114 },
                adShowSelect: { type: 'int32', id: 112 },
                agreeBanner: { type: 'AgreeBanner', id: 65 },
                anti: { type: 'Anti', id: 5 },
                aspShownInfo: { type: 'string', id: 56 },
                ctime: { type: 'int32', id: 12 },
                fortuneBag: { type: 'int32', id: 10 },
                fortuneDesc: { type: 'string', id: 19 },
                forum: { type: 'ForumInfo', id: 2 },
                forumRule: { type: 'ForumRuleStatus', id: 105 },
                frsStar: { type: 'StarInfo', id: 3 },
                frsTabDefault: { type: 'int32', id: 38 },
                frsTabInfo: { rule: 'repeated', type: 'FrsTabInfo', id: 22 },
                gameDefaultTabId: { type: 'int32', id: 74 },
                gconAccount: { type: 'GconAccount', id: 18 },
                group: { type: 'Group', id: 6 },
                hotUserEntry: { type: 'HotUserRankEntry', id: 102 },
                isGetHorseRaceLamp: { type: 'int32', id: 104 },
                isNewUrl: { type: 'int32', id: 9 },
                itemInfo: { type: 'ItemInfo', id: 103 },
                logid: { type: 'int64', id: 13 },
                navTabInfo: { type: 'NavTabInfo', id: 37 },
                needLog: { type: 'int32', id: 48 },
                page: { type: 'Page', id: 4 },
                partialVisibleToast: { type: 'string', id: 62 },
                privateForumActiveInfo: { type: 'ForumActiveInfo', id: 98 },
                serverTime: { type: 'int32', id: 14 },
                serviceArea: { rule: 'repeated', type: 'ServiceArea', id: 100 },
                showAdsense: { type: 'int32', id: 108 },
                smartFrsType: { type: 'int32', id: 47 },
                sortType: { type: 'int32', id: 39 },
                starEnter: { rule: 'repeated', type: 'StarEnter', id: 20 },
                threadIdList: { rule: 'repeated', type: 'int64', id: 8 },
                threadIdListInfo: {
                  rule: 'repeated',
                  type: 'ThreadIdListInfo',
                  id: 64
                },
                threadList: { rule: 'repeated', type: 'ThreadInfo', id: 7 },
                time: { type: 'int32', id: 11 },
                user: { type: 'User', id: 1 },
                userList: { rule: 'repeated', type: 'User', id: 17 },
                videoAutoPlay: { type: 'int32', id: 93 },
                vitalityInfo: { type: 'VitalityInfo', id: 42 },
                voiceRoomConfig: { type: 'int32', id: 111 },
                headSdk: { type: 'HeadSdk', id: 34 },
                frsGameTabInfo: {
                  rule: 'repeated',
                  type: 'FrsTabInfo',
                  id: 68
                },
                isMemberBroadcastForum: { type: 'int32', id: 119 }
              }
            },
            Fans: {
              fields: {
                isGet: { type: 'int32', id: 4 },
                leftTime: { type: 'int32', id: 2 },
                num: { type: 'int32', id: 5 },
                open: { type: 'int32', id: 3 },
                startTime: { type: 'int32', id: 1 }
              }
            },
            ForumInfo: {
              fields: {
                accelerateCotent: { type: 'string', id: 50 },
                albumOpenPhotoFrs: { type: 'int32', id: 23 },
                avatar: { type: 'string', id: 24 },
                banner: { type: 'Banner', id: 32 },
                bannerList: { type: 'BannerList', id: 33 },
                canUseAccelerate: { type: 'int32', id: 49 },
                curScore: { type: 'int32', id: 13 },
                deletedReasonInfo: { type: 'DeletedReasonInfo', id: 85 },
                fShareImg: { type: 'string', id: 78 },
                firstClass: { type: 'string', id: 3 },
                forumGameLabel: { type: 'string', id: 66 },
                forumShareLink: { type: 'string', id: 79 },
                forumvipShowIcon: { type: 'MemberShowIcon', id: 55 },
                gameName: { type: 'string', id: 54 },
                gameUrl: { type: 'string', id: 47 },
                goodClassify: { rule: 'repeated', type: 'Classify', id: 21 },
                hasFrsStar: { type: 'int32', id: 12 },
                hasGame: { type: 'int32', id: 46 },
                hasPostpre: { type: 'int32', id: 26 },
                id: { type: 'int64', id: 1 },
                isBrandForum: { type: 'int32', id: 71 },
                isFrsMask: { type: 'int32', id: 86 },
                isLike: { type: 'int32', id: 6 },
                isLiveGameForum: { type: 'int32', id: 63 },
                isNewGameForum: { type: 'int32', id: 65 },
                isPrivateForum: { type: 'int32', id: 75 },
                isShowAllTopThread: { type: 'int32', id: 72 },
                isShowBawutask: { type: 'int32', id: 77 },
                isShowForumrule: { type: 'int32', id: 84 },
                levelId: { type: 'int32', id: 35 },
                levelName: { type: 'string', id: 8 },
                levelupScore: { type: 'int32', id: 14 },
                managers: { rule: 'repeated', type: 'Manager', id: 17 },
                memberNum: { type: 'int32', id: 9 },
                name: { type: 'string', id: 2 },
                postNum: { type: 'int32', id: 11 },
                riskTipNotice: { type: 'string', id: 81 },
                riskTipPop: { type: 'string', id: 80 },
                riskTipPopTitle: { type: 'string', id: 82 },
                secondClass: { type: 'string', id: 4 },
                signInInfo: { type: 'SignInfo', id: 15 },
                slogan: { type: 'string', id: 25 },
                specialForumType: { type: 'string', id: 68 },
                superboy: { type: 'string', id: 40 },
                tagInfo: { type: 'TagInfo', id: 38 },
                themeColor: { type: 'ThemeColorInfo', id: 73 },
                threadNum: { type: 'int32', id: 10 },
                topicSpecialIcon: { type: 'string', id: 69 },
                topicSpecialIconRight: { type: 'string', id: 70 },
                userLevel: { type: 'int32', id: 7 },
                warningMsg: { type: 'string', id: 67 },
                postPrefix: { type: 'PostPrefix', id: 39 }
              }
            },
            FrsPageResIdl: {
              fields: {
                data: { type: 'DataRes', id: 2 },
                error: { type: 'Error', id: 1 }
              }
            },
            HeadImgs: {
              fields: {
                btnText: { type: 'string', id: 5 },
                coverImageColor: { type: 'CoverImageColor', id: 26 },
                coverUrl: { type: 'string', id: 24 },
                downloadAppid: { type: 'string', id: 23 },
                downloadAppname: { type: 'string', id: 13 },
                downloadDeveloper: { type: 'string', id: 14 },
                downloadImg: { type: 'string', id: 17 },
                downloadIsThirdpage: { type: 'int32', id: 12 },
                downloadItemId: { type: 'int32', id: 22 },
                downloadPackageName: { type: 'string', id: 21 },
                downloadPackageSize: { type: 'string', id: 15 },
                downloadPrivacyPolicy: { type: 'string', id: 20 },
                downloadUrl: { type: 'string', id: 16 },
                downloadUserPower: { type: 'string', id: 19 },
                downloadVersion: { type: 'string', id: 18 },
                hasSecondPage: { type: 'uint32', id: 10 },
                imgUrl: { type: 'string', id: 1 },
                packageName: { type: 'string', id: 11 },
                pcUrl: { type: 'string', id: 2 },
                playUrl: { type: 'string', id: 25 },
                schema: { type: 'string', id: 8 },
                subtitle: { type: 'string', id: 4 },
                tagNameUrl: { type: 'string', id: 6 },
                tagNameWh: { type: 'string', id: 7 },
                thirdStatisticsUrl: { rule: 'repeated', type: 'string', id: 9 },
                title: { type: 'string', id: 3 },
                videoImageColor: {
                  rule: 'repeated',
                  type: 'VideoImageColor',
                  id: 27
                }
              }
            },
            PostPrefix: {
              fields: {
                mode: { type: 'int32', id: 1 },
                text: { type: 'string', id: 2 },
                time: { type: 'string', id: 4 },
                type: { type: 'string', id: 3 }
              }
            },
            Size: {
              fields: {
                height: { type: 'int32', id: 2 },
                width: { type: 'int32', id: 1 }
              }
            },
            StarInfo: {
              fields: {
                hasFrsStar: { type: 'int32', id: 1 },
                head: { type: 'string', id: 3 },
                starForumHeadimg: { type: 'string', id: 17 },
                top: { type: 'string', id: 2 },
                fans: { type: 'Fans', id: 6 },
                topSize: { type: 'Size', id: 14 },
                headSize: { type: 'Size', id: 15 }
              }
            },
            TagInfo: {
              fields: {
                color: { type: 'int32', id: 4 },
                firstCategory: { type: 'string', id: 12 },
                forumId: { type: 'int64', id: 1 },
                hotValue: { type: 'int32', id: 5 },
                influence: { type: 'int32', id: 8 },
                opTime: { type: 'int32', id: 10 },
                recomTag: { type: 'RecomTagInfo', id: 11 },
                relationWeight: { type: 'int32', id: 9 },
                tagId: { type: 'int32', id: 2 },
                tagLevel: { type: 'int32', id: 7 },
                tagName: { type: 'string', id: 3 },
                tagType: { type: 'int32', id: 6 }
              }
            },
            VideoImageColor: {
              fields: {
                color: { type: 'string', id: 2 },
                time: { type: 'uint32', id: 1 }
              }
            }
          }
        },
        threadlist: {
          nested: {
            DataRes: {
              fields: {
                adSampleMapKey: { type: 'string', id: 8 },
                adShowSelect: { type: 'int32', id: 7 },
                bannerList: { type: 'BannerList', id: 3 },
                partialVisibleToast: { type: 'string', id: 5 },
                threadList: { rule: 'repeated', type: 'ThreadInfo', id: 1 },
                userList: { rule: 'repeated', type: 'User', id: 2 }
              }
            },
            ThreadListResIdl: {
              fields: {
                data: { type: 'DataRes', id: 2 },
                error: { type: 'Error', id: 1 }
              }
            }
          }
        },
        generaltablelist: {
          nested: {
            DataRes: {
              fields: {
                adSampleMapKey: { type: 'string', id: 13 },
                adShowSelect: { type: 'int32', id: 11 },
                appList: { rule: 'repeated', type: 'App', id: 10 },
                generalList: { rule: 'repeated', type: 'ThreadInfo', id: 1 },
                hasMore: { type: 'int32', id: 2 },
                itemInfo: { type: 'ItemInfo', id: 8 },
                sortType: { type: 'int32', id: 7 },
                userList: { rule: 'repeated', type: 'User', id: 3 },
                sortOption: { rule: 'repeated', type: 'SortOption', id: 9 }
              }
            },
            GeneralTabListResIdl: {
              fields: {
                data: { type: 'DataRes', id: 2 },
                error: { type: 'Error', id: 1 }
              }
            }
          }
        },
        pb: {
          nested: {
            BusinessPromotInfo: {
              fields: {
                isHeadlinepost: { type: 'int32', id: 2 },
                isPromot: { type: 'int64', id: 1 },
                isSCard: { type: 'int32', id: 3 }
              }
            },
            DataRes: {
              fields: {
                anti: { type: 'Anti', id: 4 },
                bannerList: { type: 'BannerList', id: 12 },
                businessPromotInfo: { type: 'BusinessPromotInfo', id: 53 },
                displayForum: { type: 'SimpleForum', id: 39 },
                foldTip: { type: 'string', id: 44 },
                forum: { type: 'SimpleForum', id: 2 },
                forumRule: { type: 'ForumRuleStatus', id: 60 },
                hasFloor: { type: 'int32', id: 7 },
                hasFoldComment: { type: 'int32', id: 68 },
                isBlackWhite: { type: 'int32', id: 62 },
                isNewUrl: { type: 'int32', id: 10 },
                isOfficialForum: { type: 'int32', id: 63 },
                isPurchase: { type: 'int32', id: 65 },
                page: { type: 'Page', id: 3 },
                partialVisibleToast: { type: 'string', id: 41 },
                pbNotice: { type: 'string', id: 67 },
                pbNoticeType: { type: 'int32', id: 66 },
                pbSortInfo: { rule: 'repeated', type: 'PbSortType', id: 49 },
                postList: { rule: 'repeated', type: 'Post', id: 6 },
                recomAlaInfo: { type: 'AlaLiveInfo', id: 55 },
                serverTime: { type: 'int32', id: 14 },
                showAdsense: { type: 'int32', id: 61 },
                sortType: { type: 'int32', id: 50 },
                switchReadOpen: { type: 'int32', id: 32 },
                thread: { type: 'ThreadInfo', id: 8 },
                threadFreqNum: { type: 'int64', id: 37 },
                threadTopic: {
                  rule: 'repeated',
                  type: 'RecomTopicList',
                  id: 48
                },
                user: { type: 'User', id: 1 },
                userList: { rule: 'repeated', type: 'User', id: 13 },
                floatingIcon: { type: 'FloatingIcon', id: 64 },
                firstFloorPost: { type: 'Post', id: 38 },
                topAnswer: { type: 'Post', id: 73 }
              }
            },
            FloatingIconItem: {
              fields: {
                clickStatisticsUrl: { type: 'string', id: 4 },
                deeplink: { type: 'string', id: 5 },
                displayAdIcon: { type: 'string', id: 13 },
                floatType: { type: 'string', id: 10 },
                foldLottie: { type: 'string', id: 8 },
                foldName: { type: 'string', id: 11 },
                iconUrl: { type: 'string', id: 2 },
                packageName: { type: 'string', id: 7 },
                scheme: { type: 'string', id: 6 },
                unfoldLottie: { type: 'string', id: 9 },
                unfoldName: { type: 'string', id: 12 },
                url: { type: 'string', id: 1 },
                viewStatisticsUrl: { type: 'string', id: 3 }
              }
            },
            FloatingIcon: {
              fields: { pbpage: { type: 'FloatingIconItem', id: 1 } }
            },
            PbPageResIdl: {
              fields: {
                data: { type: 'DataRes', id: 2 },
                error: { type: 'Error', id: 1 }
              }
            },
            PbSortType: {
              fields: {
                sortName: { type: 'string', id: 2 },
                sortType: { type: 'int32', id: 1 }
              }
            }
          }
        },
        personalized: {
          nested: {
            DataRes: {
              fields: {
                anti: { type: 'Anti', id: 16 },
                liveAnswer: { type: 'LiveAnswer', id: 17 },
                bannerList: { type: 'BannerList', id: 9 },
                freshCtrlNum: { type: 'int32', id: 21 },
                isNewUrl: { type: 'int32', id: 8 },
                sugSeconds: { type: 'uint32', id: 6 },
                threadList: { rule: 'repeated', type: 'ThreadInfo', id: 2 },
                threadPersonalized: {
                  rule: 'repeated',
                  type: 'ThreadPersonalized',
                  id: 7
                },
                userFollowLive: { type: 'UserFollowLive', id: 20 },
                showAdsense: { type: 'int32', id: 25 }
              }
            },
            DislikeReason: {
              fields: {
                dislikeId: { type: 'uint32', id: 2 },
                dislikeReason: { type: 'string', id: 1 },
                extra: { type: 'string', id: 3 }
              }
            },
            LiveAnswer: {
              fields: {
                bannerHigh: { type: 'int32', id: 3 },
                bannerUrl: { type: 'string', id: 1 },
                bannerWidth: { type: 'int32', id: 2 },
                jumpUrl: { type: 'string', id: 4 }
              }
            },
            PersonalizedResIdl: {
              fields: {
                data: { type: 'DataRes', id: 2 },
                error: { type: 'Error', id: 1 }
              }
            },
            ThreadPersonalized: {
              fields: {
                abtestTag: { type: 'string', id: 4 },
                dislikeResource: {
                  rule: 'repeated',
                  type: 'DislikeReason',
                  id: 5
                },
                extra: { type: 'string', id: 6 },
                source: { type: 'string', id: 3 },
                tid: { type: 'uint64', id: 1 },
                weight: { type: 'string', id: 2 }
              }
            },
            UserFollowLive: { fields: { _switch: { type: 'uint32', id: 2 } } }
          }
        }
      }
    }
  }
};
const tiebaRoot = protobuf.Root.fromJSON(tiebaJson);
const url = $request.url;
const isQuanX = typeof $task !== 'undefined';
const binaryBody = isQuanX
  ? new Uint8Array($response.bodyBytes)
  : $response.body;
let body;
if (url.includes('frs/page')) {
  let frsPageResIdlType = tiebaRoot.lookupType('model.frs.FrsPageResIdl');
  let frsPageResIdlObj = frsPageResIdlType.decode(binaryBody);

  frsPageResIdlObj.data.threadList = removeLive(
    frsPageResIdlObj.data.threadList
  );
  if (frsPageResIdlObj.data.activityhead?.isAd) {
    frsPageResIdlObj.data.activityhead = null;
  }
  body = frsPageResIdlType.encode(frsPageResIdlObj).finish();
} else if (url.includes('frs/threadlist')) {
  let threadListResIdlType = tiebaRoot.lookupType(
    'model.threadlist.ThreadListResIdl'
  );
  let threadListResIdlObj = threadListResIdlType.decode(binaryBody);
  body = threadListResIdlType.encode(threadListResIdlObj).finish();
} else if (url.includes('pb/page')) {
  let pbPageResIdlType = tiebaRoot.lookupType('model.pb.PbPageResIdl');
  let pbPageResIdlObj = pbPageResIdlType.decode(binaryBody);
  if (pbPageResIdlObj.data.postList?.length) {
    for (const post of pbPageResIdlObj.data.postList) {
      if (post.outerItem) {
        post.outerItem = null;
      }
    }
  }
  if (pbPageResIdlObj.data.recomAlaInfo?.liveId) {
    pbPageResIdlObj.data.recomAlaInfo = null;
  }
  body = pbPageResIdlType.encode(pbPageResIdlObj).finish();
} else if (url.includes('excellent/personalized')) {
  let personalizedResIdlType = tiebaRoot.lookupType(
    'model.personalized.PersonalizedResIdl'
  );
  let personalizedResIdlObj = personalizedResIdlType.decode(binaryBody);
  personalizedResIdlObj.data.threadList = removeLive(
    personalizedResIdlObj.data.threadList
  );
  if (personalizedResIdlObj.data.liveAnswer) {
    personalizedResIdlObj.data.liveAnswer = null;
  }
  body = personalizedResIdlType.encode(personalizedResIdlObj).finish();
} else if (url.includes('frs/generalTabList')) {
  let generalTabListResIdlType = tiebaRoot.lookupType(
    'model.generaltablelist.GeneralTabListResIdl'
  );
  let generalTabListResIdlObj = generalTabListResIdlType.decode(binaryBody);
  body = generalTabListResIdlType.encode(generalTabListResIdlObj).finish();
}
if (isQuanX) {
  $done({
    bodyBytes: body.buffer.slice(
      body.byteOffset,
      body.byteLength + body.byteOffset
    )
  });
} else {
  $done({ body });
}
function removeLive(threadList) {
  let newThreadList = threadList;
  const beforeLength = threadList?.length;
  if (beforeLength) {
    newThreadList = threadList.filter(item => {
      if (item.alaInfo) {
        return false;
      }
      return true;
    });
  }
  return newThreadList;
}
