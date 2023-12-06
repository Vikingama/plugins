(() => {
  (function (l) {
    function e() {}
    function t() {}
    var n = String.fromCharCode,
      i = {}.toString,
      r = i.call(l.SharedArrayBuffer),
      f = i(),
      s = l.Uint8Array,
      o = s || Array,
      a = s ? ArrayBuffer : o,
      u =
        a.isView ||
        function (B) {
          return B && 'length' in B;
        },
      b = i.call(a.prototype);
    a = t.prototype;
    var w = l.TextEncoder,
      m = new (s ? Uint16Array : o)(32);
    (e.prototype.decode = function (B) {
      if (!u(B)) {
        var $ = i.call(B);
        if ($ !== b && $ !== r && $ !== f)
          throw TypeError(
            "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'"
          );
        B = s ? new o(B) : B || [];
      }
      for (
        var R = ($ = ''),
          g = 0,
          N = B.length | 0,
          se = (N - 32) | 0,
          O,
          x,
          E = 0,
          J = 0,
          L,
          D = 0,
          S = -1;
        g < N;

      ) {
        for (
          O = g <= se ? 32 : (N - g) | 0;
          D < O;
          g = (g + 1) | 0, D = (D + 1) | 0
        ) {
          switch (((x = B[g] & 255), x >> 4)) {
            case 15:
              if (((L = B[(g = (g + 1) | 0)] & 255), L >> 6 !== 2 || 247 < x)) {
                g = (g - 1) | 0;
                break;
              }
              (E = ((x & 7) << 6) | (L & 63)), (J = 5), (x = 256);
            case 14:
              (L = B[(g = (g + 1) | 0)] & 255),
                (E <<= 6),
                (E |= ((x & 15) << 6) | (L & 63)),
                (J = L >> 6 === 2 ? (J + 4) | 0 : 24),
                (x = (x + 256) & 768);
            case 13:
            case 12:
              (L = B[(g = (g + 1) | 0)] & 255),
                (E <<= 6),
                (E |= ((x & 31) << 6) | (L & 63)),
                (J = (J + 7) | 0),
                g < N && L >> 6 === 2 && E >> J && 1114112 > E
                  ? ((x = E),
                    (E = (E - 65536) | 0),
                    0 <= E &&
                      ((S = ((E >> 10) + 55296) | 0),
                      (x = ((E & 1023) + 56320) | 0),
                      31 > D
                        ? ((m[D] = S), (D = (D + 1) | 0), (S = -1))
                        : ((L = S), (S = x), (x = L))))
                  : ((x >>= 8), (g = (g - x - 1) | 0), (x = 65533)),
                (E = J = 0),
                (O = g <= se ? 32 : (N - g) | 0);
            default:
              m[D] = x;
              continue;
            case 11:
            case 10:
            case 9:
            case 8:
          }
          m[D] = 65533;
        }
        if (
          ((R += n(
            m[0],
            m[1],
            m[2],
            m[3],
            m[4],
            m[5],
            m[6],
            m[7],
            m[8],
            m[9],
            m[10],
            m[11],
            m[12],
            m[13],
            m[14],
            m[15],
            m[16],
            m[17],
            m[18],
            m[19],
            m[20],
            m[21],
            m[22],
            m[23],
            m[24],
            m[25],
            m[26],
            m[27],
            m[28],
            m[29],
            m[30],
            m[31]
          )),
          32 > D && (R = R.slice(0, (D - 32) | 0)),
          g < N)
        ) {
          if (((m[0] = S), (D = ~S >>> 31), (S = -1), R.length < $.length))
            continue;
        } else S !== -1 && (R += n(S));
        ($ += R), (R = '');
      }
      return $;
    }),
      (a.encode = function (B) {
        B = B === void 0 ? '' : '' + B;
        var $ = B.length | 0,
          R = new o((($ << 1) + 8) | 0),
          g,
          N = 0,
          se = !s;
        for (g = 0; g < $; g = (g + 1) | 0, N = (N + 1) | 0) {
          var O = B.charCodeAt(g) | 0;
          if (127 >= O) R[N] = O;
          else {
            if (2047 >= O) R[N] = 192 | (O >> 6);
            else {
              e: {
                if (55296 <= O)
                  if (56319 >= O) {
                    var x = B.charCodeAt((g = (g + 1) | 0)) | 0;
                    if (56320 <= x && 57343 >= x) {
                      if (((O = ((O << 10) + x - 56613888) | 0), 65535 < O)) {
                        (R[N] = 240 | (O >> 18)),
                          (R[(N = (N + 1) | 0)] = 128 | ((O >> 12) & 63)),
                          (R[(N = (N + 1) | 0)] = 128 | ((O >> 6) & 63)),
                          (R[(N = (N + 1) | 0)] = 128 | (O & 63));
                        continue;
                      }
                      break e;
                    }
                    O = 65533;
                  } else 57343 >= O && (O = 65533);
                !se &&
                  g << 1 < N &&
                  g << 1 < ((N - 7) | 0) &&
                  ((se = !0), (x = new o(3 * $)), x.set(R), (R = x));
              }
              (R[N] = 224 | (O >> 12)),
                (R[(N = (N + 1) | 0)] = 128 | ((O >> 6) & 63));
            }
            R[(N = (N + 1) | 0)] = 128 | (O & 63);
          }
        }
        return s ? R.subarray(0, N) : R.slice(0, N);
      }),
      w || ((l.TextDecoder = e), (l.TextEncoder = t));
  })(globalThis);
  function fe(l) {
    let e = typeof l;
    if (e == 'object') {
      if (Array.isArray(l)) return 'array';
      if (l === null) return 'null';
    }
    return e;
  }
  function fi(l) {
    return l !== null && typeof l == 'object' && !Array.isArray(l);
  }
  var A =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(
        ''
      ),
    ue = [];
  for (let l = 0; l < A.length; l++) ue[A[l].charCodeAt(0)] = l;
  ue['-'.charCodeAt(0)] = A.indexOf('+');
  ue['_'.charCodeAt(0)] = A.indexOf('/');
  function ui(l) {
    let e = (l.length * 3) / 4;
    l[l.length - 2] == '=' ? (e -= 2) : l[l.length - 1] == '=' && (e -= 1);
    let t = new Uint8Array(e),
      n = 0,
      i = 0,
      r,
      f = 0;
    for (let s = 0; s < l.length; s++) {
      if (((r = ue[l.charCodeAt(s)]), r === void 0))
        switch (l[s]) {
          case '=':
            i = 0;
          case `
`:
          case '\r':
          case '	':
          case ' ':
            continue;
          default:
            throw Error('invalid base64 string.');
        }
      switch (i) {
        case 0:
          (f = r), (i = 1);
          break;
        case 1:
          (t[n++] = (f << 2) | ((r & 48) >> 4)), (f = r), (i = 2);
          break;
        case 2:
          (t[n++] = ((f & 15) << 4) | ((r & 60) >> 2)), (f = r), (i = 3);
          break;
        case 3:
          (t[n++] = ((f & 3) << 6) | r), (i = 0);
          break;
      }
    }
    if (i == 1) throw Error('invalid base64 string.');
    return t.subarray(0, n);
  }
  function ci(l) {
    let e = '',
      t = 0,
      n,
      i = 0;
    for (let r = 0; r < l.length; r++)
      switch (((n = l[r]), t)) {
        case 0:
          (e += A[n >> 2]), (i = (n & 3) << 4), (t = 1);
          break;
        case 1:
          (e += A[i | (n >> 4)]), (i = (n & 15) << 2), (t = 2);
          break;
        case 2:
          (e += A[i | (n >> 6)]), (e += A[n & 63]), (t = 0);
          break;
      }
    return t && ((e += A[i]), (e += '='), t == 1 && (e += '=')), e;
  }
  var c;
  (function (l) {
    (l.symbol = Symbol.for('protobuf-ts/unknown')),
      (l.onRead = (t, n, i, r, f) => {
        (e(n) ? n[l.symbol] : (n[l.symbol] = [])).push({
          no: i,
          wireType: r,
          data: f
        });
      }),
      (l.onWrite = (t, n, i) => {
        for (let { no: r, wireType: f, data: s } of l.list(n))
          i.tag(r, f).raw(s);
      }),
      (l.list = (t, n) => {
        if (e(t)) {
          let i = t[l.symbol];
          return n ? i.filter(r => r.no == n) : i;
        }
        return [];
      }),
      (l.last = (t, n) => l.list(t, n).slice(-1)[0]);
    let e = t => t && Array.isArray(t[l.symbol]);
  })(c || (c = {}));
  var d;
  (function (l) {
    (l[(l.Varint = 0)] = 'Varint'),
      (l[(l.Bit64 = 1)] = 'Bit64'),
      (l[(l.LengthDelimited = 2)] = 'LengthDelimited'),
      (l[(l.StartGroup = 3)] = 'StartGroup'),
      (l[(l.EndGroup = 4)] = 'EndGroup'),
      (l[(l.Bit32 = 5)] = 'Bit32');
  })(d || (d = {}));
  function di() {
    let l = 0,
      e = 0;
    for (let n = 0; n < 28; n += 7) {
      let i = this.buf[this.pos++];
      if (((l |= (i & 127) << n), !(i & 128)))
        return this.assertBounds(), [l, e];
    }
    let t = this.buf[this.pos++];
    if (((l |= (t & 15) << 28), (e = (t & 112) >> 4), !(t & 128)))
      return this.assertBounds(), [l, e];
    for (let n = 3; n <= 31; n += 7) {
      let i = this.buf[this.pos++];
      if (((e |= (i & 127) << n), !(i & 128)))
        return this.assertBounds(), [l, e];
    }
    throw new Error('invalid varint');
  }
  function de(l, e, t) {
    for (let r = 0; r < 28; r = r + 7) {
      let f = l >>> r,
        s = !(!(f >>> 7) && e == 0),
        o = (s ? f | 128 : f) & 255;
      if ((t.push(o), !s)) return;
    }
    let n = ((l >>> 28) & 15) | ((e & 7) << 4),
      i = !!(e >> 3);
    if ((t.push((i ? n | 128 : n) & 255), !!i)) {
      for (let r = 3; r < 31; r = r + 7) {
        let f = e >>> r,
          s = !!(f >>> 7),
          o = (s ? f | 128 : f) & 255;
        if ((t.push(o), !s)) return;
      }
      t.push((e >>> 31) & 1);
    }
  }
  var ce = (1 << 16) * (1 << 16);
  function Pe(l) {
    let e = l[0] == '-';
    e && (l = l.slice(1));
    let t = 1e6,
      n = 0,
      i = 0;
    function r(f, s) {
      let o = Number(l.slice(f, s));
      (i *= t),
        (n = n * t + o),
        n >= ce && ((i = i + ((n / ce) | 0)), (n = n % ce));
    }
    return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, n, i];
  }
  function he(l, e) {
    if (e <= 2097151) return '' + (ce * e + (l >>> 0));
    let t = l & 16777215,
      n = (((l >>> 24) | (e << 8)) >>> 0) & 16777215,
      i = (e >> 16) & 65535,
      r = t + n * 6777216 + i * 6710656,
      f = n + i * 8147497,
      s = i * 2,
      o = 1e7;
    r >= o && ((f += Math.floor(r / o)), (r %= o)),
      f >= o && ((s += Math.floor(f / o)), (f %= o));
    function a(u, b) {
      let w = u ? String(u) : '';
      return b ? '0000000'.slice(w.length) + w : w;
    }
    return a(s, 0) + a(f, s) + a(r, 1);
  }
  function Ee(l, e) {
    if (l >= 0) {
      for (; l > 127; ) e.push((l & 127) | 128), (l = l >>> 7);
      e.push(l);
    } else {
      for (let t = 0; t < 9; t++) e.push((l & 127) | 128), (l = l >> 7);
      e.push(1);
    }
  }
  function hi() {
    let l = this.buf[this.pos++],
      e = l & 127;
    if (!(l & 128)) return this.assertBounds(), e;
    if (((l = this.buf[this.pos++]), (e |= (l & 127) << 7), !(l & 128)))
      return this.assertBounds(), e;
    if (((l = this.buf[this.pos++]), (e |= (l & 127) << 14), !(l & 128)))
      return this.assertBounds(), e;
    if (((l = this.buf[this.pos++]), (e |= (l & 127) << 21), !(l & 128)))
      return this.assertBounds(), e;
    (l = this.buf[this.pos++]), (e |= (l & 15) << 28);
    for (let t = 5; l & 128 && t < 10; t++) l = this.buf[this.pos++];
    if (l & 128) throw new Error('invalid varint');
    return this.assertBounds(), e >>> 0;
  }
  function Ei() {
    let l = new DataView(new ArrayBuffer(8));
    return globalThis.BigInt !== void 0 &&
      typeof l.getBigInt64 == 'function' &&
      typeof l.getBigUint64 == 'function' &&
      typeof l.setBigInt64 == 'function' &&
      typeof l.setBigUint64 == 'function'
      ? {
          MIN: BigInt('-9223372036854775808'),
          MAX: BigInt('9223372036854775807'),
          UMIN: BigInt('0'),
          UMAX: BigInt('18446744073709551615'),
          C: BigInt,
          V: l
        }
      : void 0;
  }
  var I = Ei();
  function pi(l) {
    if (!l)
      throw new Error(
        'BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support'
      );
  }
  var yi = /^-?[0-9]+$/,
    pe = (1 << 16) * (1 << 16),
    ye = class {
      constructor(e, t) {
        (this.lo = e | 0), (this.hi = t | 0);
      }
      isZero() {
        return this.lo == 0 && this.hi == 0;
      }
      toNumber() {
        let e = this.hi * pe + (this.lo >>> 0);
        if (!Number.isSafeInteger(e))
          throw new Error('cannot convert to safe number');
        return e;
      }
    },
    W = class extends ye {
      static from(e) {
        if (I)
          switch (typeof e) {
            case 'string':
              if (e == '0') return this.ZERO;
              if (e == '') throw new Error('string is no integer');
              e = I.C(e);
            case 'number':
              if (e === 0) return this.ZERO;
              e = I.C(e);
            case 'bigint':
              if (!e) return this.ZERO;
              if (e < I.UMIN) throw new Error('signed value for ulong');
              if (e > I.UMAX) throw new Error('ulong too large');
              return (
                I.V.setBigUint64(0, e, !0),
                new W(I.V.getInt32(0, !0), I.V.getInt32(4, !0))
              );
          }
        else
          switch (typeof e) {
            case 'string':
              if (e == '0') return this.ZERO;
              if (((e = e.trim()), !yi.test(e)))
                throw new Error('string is no integer');
              let [t, n, i] = Pe(e);
              if (t) throw new Error('signed value');
              return new W(n, i);
            case 'number':
              if (e == 0) return this.ZERO;
              if (!Number.isSafeInteger(e))
                throw new Error('number is no integer');
              if (e < 0) throw new Error('signed value for ulong');
              return new W(e, e / pe);
          }
        throw new Error('unknown value ' + typeof e);
      }
      toString() {
        return I ? this.toBigInt().toString() : he(this.lo, this.hi);
      }
      toBigInt() {
        return (
          pi(I),
          I.V.setInt32(0, this.lo, !0),
          I.V.setInt32(4, this.hi, !0),
          I.V.getBigUint64(0, !0)
        );
      }
    };
  W.ZERO = new W(0, 0);
  var T = class extends ye {
    static from(e) {
      if (I)
        switch (typeof e) {
          case 'string':
            if (e == '0') return this.ZERO;
            if (e == '') throw new Error('string is no integer');
            e = I.C(e);
          case 'number':
            if (e === 0) return this.ZERO;
            e = I.C(e);
          case 'bigint':
            if (!e) return this.ZERO;
            if (e < I.MIN) throw new Error('ulong too small');
            if (e > I.MAX) throw new Error('ulong too large');
            return (
              I.V.setBigInt64(0, e, !0),
              new T(I.V.getInt32(0, !0), I.V.getInt32(4, !0))
            );
        }
      else
        switch (typeof e) {
          case 'string':
            if (e == '0') return this.ZERO;
            if (((e = e.trim()), !yi.test(e)))
              throw new Error('string is no integer');
            let [t, n, i] = Pe(e),
              r = new T(n, i);
            return t ? r.negate() : r;
          case 'number':
            if (e == 0) return this.ZERO;
            if (!Number.isSafeInteger(e))
              throw new Error('number is no integer');
            return e > 0 ? new T(e, e / pe) : new T(-e, -e / pe).negate();
        }
      throw new Error('unknown value ' + typeof e);
    }
    isNegative() {
      return (this.hi & 2147483648) !== 0;
    }
    negate() {
      let e = ~this.hi,
        t = this.lo;
      return t ? (t = ~t + 1) : (e += 1), new T(t, e);
    }
    toString() {
      if (I) return this.toBigInt().toString();
      if (this.isNegative()) {
        let e = this.negate();
        return '-' + he(e.lo, e.hi);
      }
      return he(this.lo, this.hi);
    }
    toBigInt() {
      return (
        pi(I),
        I.V.setInt32(0, this.lo, !0),
        I.V.setInt32(4, this.hi, !0),
        I.V.getBigInt64(0, !0)
      );
    }
  };
  T.ZERO = new T(0, 0);
  var Fi = { readUnknownField: !0, readerFactory: l => new Ce(l) };
  function mi(l) {
    return l ? Object.assign(Object.assign({}, Fi), l) : Fi;
  }
  var Ce = class {
    constructor(e, t) {
      (this.varint64 = di),
        (this.uint32 = hi),
        (this.buf = e),
        (this.len = e.length),
        (this.pos = 0),
        (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (this.textDecoder =
          t ?? new TextDecoder('utf-8', { fatal: !0, ignoreBOM: !0 }));
    }
    tag() {
      let e = this.uint32(),
        t = e >>> 3,
        n = e & 7;
      if (t <= 0 || n < 0 || n > 5)
        throw new Error('illegal tag: field no ' + t + ' wire type ' + n);
      return [t, n];
    }
    skip(e) {
      let t = this.pos;
      switch (e) {
        case d.Varint:
          for (; this.buf[this.pos++] & 128; );
          break;
        case d.Bit64:
          this.pos += 4;
        case d.Bit32:
          this.pos += 4;
          break;
        case d.LengthDelimited:
          let n = this.uint32();
          this.pos += n;
          break;
        case d.StartGroup:
          let i;
          for (; (i = this.tag()[1]) !== d.EndGroup; ) this.skip(i);
          break;
        default:
          throw new Error('cant skip wire type ' + e);
      }
      return this.assertBounds(), this.buf.subarray(t, this.pos);
    }
    assertBounds() {
      if (this.pos > this.len) throw new RangeError('premature EOF');
    }
    int32() {
      return this.uint32() | 0;
    }
    sint32() {
      let e = this.uint32();
      return (e >>> 1) ^ -(e & 1);
    }
    int64() {
      return new T(...this.varint64());
    }
    uint64() {
      return new W(...this.varint64());
    }
    sint64() {
      let [e, t] = this.varint64(),
        n = -(e & 1);
      return (
        (e = ((e >>> 1) | ((t & 1) << 31)) ^ n),
        (t = (t >>> 1) ^ n),
        new T(e, t)
      );
    }
    bool() {
      let [e, t] = this.varint64();
      return e !== 0 || t !== 0;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
      return new W(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return new T(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
      let e = this.uint32(),
        t = this.pos;
      return (this.pos += e), this.assertBounds(), this.buf.subarray(t, t + e);
    }
    string() {
      return this.textDecoder.decode(this.bytes());
    }
  };
  function k(l, e) {
    if (!l) throw new Error(e);
  }
  var Ci = 34028234663852886e22,
    $i = -34028234663852886e22,
    Di = 4294967295,
    ji = 2147483647,
    Li = -2147483648;
  function K(l) {
    if (typeof l != 'number') throw new Error('invalid int 32: ' + typeof l);
    if (!Number.isInteger(l) || l > ji || l < Li)
      throw new Error('invalid int 32: ' + l);
  }
  function v(l) {
    if (typeof l != 'number') throw new Error('invalid uint 32: ' + typeof l);
    if (!Number.isInteger(l) || l > Di || l < 0)
      throw new Error('invalid uint 32: ' + l);
  }
  function X(l) {
    if (typeof l != 'number') throw new Error('invalid float 32: ' + typeof l);
    if (Number.isFinite(l) && (l > Ci || l < $i))
      throw new Error('invalid float 32: ' + l);
  }
  var gi = { writeUnknownFields: !0, writerFactory: () => new $e() };
  function ki(l) {
    return l ? Object.assign(Object.assign({}, gi), l) : gi;
  }
  var $e = class {
    constructor(e) {
      (this.stack = []),
        (this.textEncoder = e ?? new TextEncoder()),
        (this.chunks = []),
        (this.buf = []);
    }
    finish() {
      this.chunks.push(new Uint8Array(this.buf));
      let e = 0;
      for (let i = 0; i < this.chunks.length; i++) e += this.chunks[i].length;
      let t = new Uint8Array(e),
        n = 0;
      for (let i = 0; i < this.chunks.length; i++)
        t.set(this.chunks[i], n), (n += this.chunks[i].length);
      return (this.chunks = []), t;
    }
    fork() {
      return (
        this.stack.push({ chunks: this.chunks, buf: this.buf }),
        (this.chunks = []),
        (this.buf = []),
        this
      );
    }
    join() {
      let e = this.finish(),
        t = this.stack.pop();
      if (!t) throw new Error('invalid state, fork stack empty');
      return (
        (this.chunks = t.chunks),
        (this.buf = t.buf),
        this.uint32(e.byteLength),
        this.raw(e)
      );
    }
    tag(e, t) {
      return this.uint32(((e << 3) | t) >>> 0);
    }
    raw(e) {
      return (
        this.buf.length &&
          (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
        this.chunks.push(e),
        this
      );
    }
    uint32(e) {
      for (v(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
      return this.buf.push(e), this;
    }
    int32(e) {
      return K(e), Ee(e, this.buf), this;
    }
    bool(e) {
      return this.buf.push(e ? 1 : 0), this;
    }
    bytes(e) {
      return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
      let t = this.textEncoder.encode(e);
      return this.uint32(t.byteLength), this.raw(t);
    }
    float(e) {
      X(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
    }
    double(e) {
      let t = new Uint8Array(8);
      return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
    }
    fixed32(e) {
      v(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
    }
    sfixed32(e) {
      K(e);
      let t = new Uint8Array(4);
      return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
    }
    sint32(e) {
      return K(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), Ee(e, this.buf), this;
    }
    sfixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        i = T.from(e);
      return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t);
    }
    fixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        i = W.from(e);
      return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t);
    }
    int64(e) {
      let t = T.from(e);
      return de(t.lo, t.hi, this.buf), this;
    }
    sint64(e) {
      let t = T.from(e),
        n = t.hi >> 31,
        i = (t.lo << 1) ^ n,
        r = ((t.hi << 1) | (t.lo >>> 31)) ^ n;
      return de(i, r, this.buf), this;
    }
    uint64(e) {
      let t = W.from(e);
      return de(t.lo, t.hi, this.buf), this;
    }
  };
  var wi = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0
    },
    bi = { ignoreUnknownFields: !1 };
  function Bi(l) {
    return l ? Object.assign(Object.assign({}, bi), l) : bi;
  }
  function Ti(l) {
    return l ? Object.assign(Object.assign({}, wi), l) : wi;
  }
  var y = Symbol.for('protobuf-ts/message-type');
  function De(l) {
    let e = !1,
      t = [];
    for (let n = 0; n < l.length; n++) {
      let i = l.charAt(n);
      i == '_'
        ? (e = !0)
        : /\d/.test(i)
        ? (t.push(i), (e = !0))
        : e
        ? (t.push(i.toUpperCase()), (e = !1))
        : n == 0
        ? t.push(i.toLowerCase())
        : t.push(i);
    }
    return t.join('');
  }
  var h;
  (function (l) {
    (l[(l.DOUBLE = 1)] = 'DOUBLE'),
      (l[(l.FLOAT = 2)] = 'FLOAT'),
      (l[(l.INT64 = 3)] = 'INT64'),
      (l[(l.UINT64 = 4)] = 'UINT64'),
      (l[(l.INT32 = 5)] = 'INT32'),
      (l[(l.FIXED64 = 6)] = 'FIXED64'),
      (l[(l.FIXED32 = 7)] = 'FIXED32'),
      (l[(l.BOOL = 8)] = 'BOOL'),
      (l[(l.STRING = 9)] = 'STRING'),
      (l[(l.BYTES = 12)] = 'BYTES'),
      (l[(l.UINT32 = 13)] = 'UINT32'),
      (l[(l.SFIXED32 = 15)] = 'SFIXED32'),
      (l[(l.SFIXED64 = 16)] = 'SFIXED64'),
      (l[(l.SINT32 = 17)] = 'SINT32'),
      (l[(l.SINT64 = 18)] = 'SINT64');
  })(h || (h = {}));
  var U;
  (function (l) {
    (l[(l.BIGINT = 0)] = 'BIGINT'),
      (l[(l.STRING = 1)] = 'STRING'),
      (l[(l.NUMBER = 2)] = 'NUMBER');
  })(U || (U = {}));
  var oe;
  (function (l) {
    (l[(l.NO = 0)] = 'NO'),
      (l[(l.PACKED = 1)] = 'PACKED'),
      (l[(l.UNPACKED = 2)] = 'UNPACKED');
  })(oe || (oe = {}));
  function Ni(l) {
    var e, t, n, i;
    return (
      (l.localName =
        (e = l.localName) !== null && e !== void 0 ? e : De(l.name)),
      (l.jsonName = (t = l.jsonName) !== null && t !== void 0 ? t : De(l.name)),
      (l.repeat = (n = l.repeat) !== null && n !== void 0 ? n : oe.NO),
      (l.opt =
        (i = l.opt) !== null && i !== void 0
          ? i
          : l.repeat || l.oneof
          ? !1
          : l.kind == 'message'),
      l
    );
  }
  function Ri(l) {
    if (typeof l != 'object' || l === null || !l.hasOwnProperty('oneofKind'))
      return !1;
    switch (typeof l.oneofKind) {
      case 'string':
        return l[l.oneofKind] === void 0 ? !1 : Object.keys(l).length == 2;
      case 'undefined':
        return Object.keys(l).length == 1;
      default:
        return !1;
    }
  }
  var Fe = class {
    constructor(e) {
      var t;
      this.fields = (t = e.fields) !== null && t !== void 0 ? t : [];
    }
    prepare() {
      if (this.data) return;
      let e = [],
        t = [],
        n = [];
      for (let i of this.fields)
        if (i.oneof)
          n.includes(i.oneof) ||
            (n.push(i.oneof), e.push(i.oneof), t.push(i.oneof));
        else
          switch ((t.push(i.localName), i.kind)) {
            case 'scalar':
            case 'enum':
              (!i.opt || i.repeat) && e.push(i.localName);
              break;
            case 'message':
              i.repeat && e.push(i.localName);
              break;
            case 'map':
              e.push(i.localName);
              break;
          }
      this.data = { req: e, known: t, oneofs: Object.values(n) };
    }
    is(e, t, n = !1) {
      if (t < 0) return !0;
      if (e == null || typeof e != 'object') return !1;
      this.prepare();
      let i = Object.keys(e),
        r = this.data;
      if (
        i.length < r.req.length ||
        r.req.some(f => !i.includes(f)) ||
        (!n && i.some(f => !r.known.includes(f)))
      )
        return !1;
      if (t < 1) return !0;
      for (let f of r.oneofs) {
        let s = e[f];
        if (!Ri(s)) return !1;
        if (s.oneofKind === void 0) continue;
        let o = this.fields.find(a => a.localName === s.oneofKind);
        if (!o || !this.field(s[s.oneofKind], o, n, t)) return !1;
      }
      for (let f of this.fields)
        if (f.oneof === void 0 && !this.field(e[f.localName], f, n, t))
          return !1;
      return !0;
    }
    field(e, t, n, i) {
      let r = t.repeat;
      switch (t.kind) {
        case 'scalar':
          return e === void 0
            ? t.opt
            : r
            ? this.scalars(e, t.T, i, t.L)
            : this.scalar(e, t.T, t.L);
        case 'enum':
          return e === void 0
            ? t.opt
            : r
            ? this.scalars(e, h.INT32, i)
            : this.scalar(e, h.INT32);
        case 'message':
          return e === void 0
            ? !0
            : r
            ? this.messages(e, t.T(), n, i)
            : this.message(e, t.T(), n, i);
        case 'map':
          if (typeof e != 'object' || e === null) return !1;
          if (i < 2) return !0;
          if (!this.mapKeys(e, t.K, i)) return !1;
          switch (t.V.kind) {
            case 'scalar':
              return this.scalars(Object.values(e), t.V.T, i, t.V.L);
            case 'enum':
              return this.scalars(Object.values(e), h.INT32, i);
            case 'message':
              return this.messages(Object.values(e), t.V.T(), n, i);
          }
          break;
      }
      return !0;
    }
    message(e, t, n, i) {
      return n ? t.isAssignable(e, i) : t.is(e, i);
    }
    messages(e, t, n, i) {
      if (!Array.isArray(e)) return !1;
      if (i < 2) return !0;
      if (n) {
        for (let r = 0; r < e.length && r < i; r++)
          if (!t.isAssignable(e[r], i - 1)) return !1;
      } else
        for (let r = 0; r < e.length && r < i; r++)
          if (!t.is(e[r], i - 1)) return !1;
      return !0;
    }
    scalar(e, t, n) {
      let i = typeof e;
      switch (t) {
        case h.UINT64:
        case h.FIXED64:
        case h.INT64:
        case h.SFIXED64:
        case h.SINT64:
          switch (n) {
            case U.BIGINT:
              return i == 'bigint';
            case U.NUMBER:
              return i == 'number' && !isNaN(e);
            default:
              return i == 'string';
          }
        case h.BOOL:
          return i == 'boolean';
        case h.STRING:
          return i == 'string';
        case h.BYTES:
          return e instanceof Uint8Array;
        case h.DOUBLE:
        case h.FLOAT:
          return i == 'number' && !isNaN(e);
        default:
          return i == 'number' && Number.isInteger(e);
      }
    }
    scalars(e, t, n, i) {
      if (!Array.isArray(e)) return !1;
      if (n < 2) return !0;
      if (Array.isArray(e)) {
        for (let r = 0; r < e.length && r < n; r++)
          if (!this.scalar(e[r], t, i)) return !1;
      }
      return !0;
    }
    mapKeys(e, t, n) {
      let i = Object.keys(e);
      switch (t) {
        case h.INT32:
        case h.FIXED32:
        case h.SFIXED32:
        case h.SINT32:
        case h.UINT32:
          return this.scalars(
            i.slice(0, n).map(r => parseInt(r)),
            t,
            n
          );
        case h.BOOL:
          return this.scalars(
            i.slice(0, n).map(r => (r == 'true' ? !0 : r == 'false' ? !1 : r)),
            t,
            n
          );
        default:
          return this.scalars(i, t, n, U.STRING);
      }
    }
  };
  function C(l, e) {
    switch (e) {
      case U.BIGINT:
        return l.toBigInt();
      case U.NUMBER:
        return l.toNumber();
      default:
        return l.toString();
    }
  }
  var me = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      var e;
      if (this.fMap === void 0) {
        this.fMap = {};
        let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
        for (let n of t)
          (this.fMap[n.name] = n),
            (this.fMap[n.jsonName] = n),
            (this.fMap[n.localName] = n);
      }
    }
    assert(e, t, n) {
      if (!e) {
        let i = fe(n);
        throw (
          ((i == 'number' || i == 'boolean') && (i = n.toString()),
          new Error(`Cannot parse JSON ${i} for ${this.info.typeName}#${t}`))
        );
      }
    }
    read(e, t, n) {
      this.prepare();
      let i = [];
      for (let [r, f] of Object.entries(e)) {
        let s = this.fMap[r];
        if (!s) {
          if (!n.ignoreUnknownFields)
            throw new Error(
              `Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${r}`
            );
          continue;
        }
        let o = s.localName,
          a;
        if (s.oneof) {
          if (i.includes(s.oneof))
            throw new Error(
              `Multiple members of the oneof group "${s.oneof}" of ${this.info.typeName} are present in JSON.`
            );
          i.push(s.oneof), (a = t[s.oneof] = { oneofKind: o });
        } else a = t;
        if (s.kind == 'map') {
          if (f === null) continue;
          this.assert(fi(f), s.name, f);
          let u = a[o];
          for (let [b, w] of Object.entries(f)) {
            this.assert(w !== null, s.name + ' map value', null);
            let m;
            switch (s.V.kind) {
              case 'message':
                m = s.V.T().internalJsonRead(w, n);
                break;
              case 'enum':
                if (
                  ((m = this.enum(s.V.T(), w, s.name, n.ignoreUnknownFields)),
                  m === !1)
                )
                  continue;
                break;
              case 'scalar':
                m = this.scalar(w, s.V.T, s.V.L, s.name);
                break;
            }
            this.assert(m !== void 0, s.name + ' map value', w);
            let B = b;
            s.K == h.BOOL && (B = B == 'true' ? !0 : B == 'false' ? !1 : B),
              (B = this.scalar(B, s.K, U.STRING, s.name).toString()),
              (u[B] = m);
          }
        } else if (s.repeat) {
          if (f === null) continue;
          this.assert(Array.isArray(f), s.name, f);
          let u = a[o];
          for (let b of f) {
            this.assert(b !== null, s.name, null);
            let w;
            switch (s.kind) {
              case 'message':
                w = s.T().internalJsonRead(b, n);
                break;
              case 'enum':
                if (
                  ((w = this.enum(s.T(), b, s.name, n.ignoreUnknownFields)),
                  w === !1)
                )
                  continue;
                break;
              case 'scalar':
                w = this.scalar(b, s.T, s.L, s.name);
                break;
            }
            this.assert(w !== void 0, s.name, f), u.push(w);
          }
        } else
          switch (s.kind) {
            case 'message':
              if (f === null && s.T().typeName != 'google.protobuf.Value') {
                this.assert(
                  s.oneof === void 0,
                  s.name + ' (oneof member)',
                  null
                );
                continue;
              }
              a[o] = s.T().internalJsonRead(f, n, a[o]);
              break;
            case 'enum':
              let u = this.enum(s.T(), f, s.name, n.ignoreUnknownFields);
              if (u === !1) continue;
              a[o] = u;
              break;
            case 'scalar':
              a[o] = this.scalar(f, s.T, s.L, s.name);
              break;
          }
      }
    }
    enum(e, t, n, i) {
      if (
        (e[0] == 'google.protobuf.NullValue' &&
          k(
            t === null,
            `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`
          ),
        t === null)
      )
        return 0;
      switch (typeof t) {
        case 'number':
          return (
            k(
              Number.isInteger(t),
              `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`
            ),
            t
          );
        case 'string':
          let r = t;
          e[2] &&
            t.substring(0, e[2].length) === e[2] &&
            (r = t.substring(e[2].length));
          let f = e[1][r];
          return typeof f > 'u' && i
            ? !1
            : (k(
                typeof f == 'number',
                `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`
              ),
              f);
      }
      k(
        !1,
        `Unable to parse field ${
          this.info.typeName
        }#${n}, cannot parse enum value from ${typeof t}".`
      );
    }
    scalar(e, t, n, i) {
      let r;
      try {
        switch (t) {
          case h.DOUBLE:
          case h.FLOAT:
            if (e === null) return 0;
            if (e === 'NaN') return Number.NaN;
            if (e === 'Infinity') return Number.POSITIVE_INFINITY;
            if (e === '-Infinity') return Number.NEGATIVE_INFINITY;
            if (e === '') {
              r = 'empty string';
              break;
            }
            if (typeof e == 'string' && e.trim().length !== e.length) {
              r = 'extra whitespace';
              break;
            }
            if (typeof e != 'string' && typeof e != 'number') break;
            let f = Number(e);
            if (Number.isNaN(f)) {
              r = 'not a number';
              break;
            }
            if (!Number.isFinite(f)) {
              r = 'too large or small';
              break;
            }
            return t == h.FLOAT && X(f), f;
          case h.INT32:
          case h.FIXED32:
          case h.SFIXED32:
          case h.SINT32:
          case h.UINT32:
            if (e === null) return 0;
            let s;
            if (
              (typeof e == 'number'
                ? (s = e)
                : e === ''
                ? (r = 'empty string')
                : typeof e == 'string' &&
                  (e.trim().length !== e.length
                    ? (r = 'extra whitespace')
                    : (s = Number(e))),
              s === void 0)
            )
              break;
            return t == h.UINT32 ? v(s) : K(s), s;
          case h.INT64:
          case h.SFIXED64:
          case h.SINT64:
            if (e === null) return C(T.ZERO, n);
            if (typeof e != 'number' && typeof e != 'string') break;
            return C(T.from(e), n);
          case h.FIXED64:
          case h.UINT64:
            if (e === null) return C(W.ZERO, n);
            if (typeof e != 'number' && typeof e != 'string') break;
            return C(W.from(e), n);
          case h.BOOL:
            if (e === null) return !1;
            if (typeof e != 'boolean') break;
            return e;
          case h.STRING:
            if (e === null) return '';
            if (typeof e != 'string') {
              r = 'extra whitespace';
              break;
            }
            try {
              encodeURIComponent(e);
            } catch (o) {
              o = 'invalid UTF8';
              break;
            }
            return e;
          case h.BYTES:
            if (e === null || e === '') return new Uint8Array(0);
            if (typeof e != 'string') break;
            return ui(e);
        }
      } catch (f) {
        r = f.message;
      }
      this.assert(!1, i + (r ? ' - ' + r : ''), e);
    }
  };
  var ge = class {
    constructor(e) {
      var t;
      this.fields = (t = e.fields) !== null && t !== void 0 ? t : [];
    }
    write(e, t) {
      let n = {},
        i = e;
      for (let r of this.fields) {
        if (!r.oneof) {
          let a = this.field(r, i[r.localName], t);
          a !== void 0 && (n[t.useProtoFieldName ? r.name : r.jsonName] = a);
          continue;
        }
        let f = i[r.oneof];
        if (f.oneofKind !== r.localName) continue;
        let s =
            r.kind == 'scalar' || r.kind == 'enum'
              ? Object.assign(Object.assign({}, t), { emitDefaultValues: !0 })
              : t,
          o = this.field(r, f[r.localName], s);
        k(o !== void 0), (n[t.useProtoFieldName ? r.name : r.jsonName] = o);
      }
      return n;
    }
    field(e, t, n) {
      let i;
      if (e.kind == 'map') {
        k(typeof t == 'object' && t !== null);
        let r = {};
        switch (e.V.kind) {
          case 'scalar':
            for (let [o, a] of Object.entries(t)) {
              let u = this.scalar(e.V.T, a, e.name, !1, !0);
              k(u !== void 0), (r[o.toString()] = u);
            }
            break;
          case 'message':
            let f = e.V.T();
            for (let [o, a] of Object.entries(t)) {
              let u = this.message(f, a, e.name, n);
              k(u !== void 0), (r[o.toString()] = u);
            }
            break;
          case 'enum':
            let s = e.V.T();
            for (let [o, a] of Object.entries(t)) {
              k(a === void 0 || typeof a == 'number');
              let u = this.enum(s, a, e.name, !1, !0, n.enumAsInteger);
              k(u !== void 0), (r[o.toString()] = u);
            }
            break;
        }
        (n.emitDefaultValues || Object.keys(r).length > 0) && (i = r);
      } else if (e.repeat) {
        k(Array.isArray(t));
        let r = [];
        switch (e.kind) {
          case 'scalar':
            for (let o = 0; o < t.length; o++) {
              let a = this.scalar(e.T, t[o], e.name, e.opt, !0);
              k(a !== void 0), r.push(a);
            }
            break;
          case 'enum':
            let f = e.T();
            for (let o = 0; o < t.length; o++) {
              k(t[o] === void 0 || typeof t[o] == 'number');
              let a = this.enum(f, t[o], e.name, e.opt, !0, n.enumAsInteger);
              k(a !== void 0), r.push(a);
            }
            break;
          case 'message':
            let s = e.T();
            for (let o = 0; o < t.length; o++) {
              let a = this.message(s, t[o], e.name, n);
              k(a !== void 0), r.push(a);
            }
            break;
        }
        (n.emitDefaultValues || r.length > 0 || n.emitDefaultValues) && (i = r);
      } else
        switch (e.kind) {
          case 'scalar':
            i = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
            break;
          case 'enum':
            i = this.enum(
              e.T(),
              t,
              e.name,
              e.opt,
              n.emitDefaultValues,
              n.enumAsInteger
            );
            break;
          case 'message':
            i = this.message(e.T(), t, e.name, n);
            break;
        }
      return i;
    }
    enum(e, t, n, i, r, f) {
      if (e[0] == 'google.protobuf.NullValue') return null;
      if (t === void 0) {
        k(i);
        return;
      }
      if (!(t === 0 && !r && !i))
        return (
          k(typeof t == 'number'),
          k(Number.isInteger(t)),
          f || !e[1].hasOwnProperty(t) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
        );
    }
    message(e, t, n, i) {
      return t === void 0
        ? i.emitDefaultValues
          ? null
          : void 0
        : e.internalJsonWrite(t, i);
    }
    scalar(e, t, n, i, r) {
      if (t === void 0) {
        k(i);
        return;
      }
      let f = r || i;
      switch (e) {
        case h.INT32:
        case h.SFIXED32:
        case h.SINT32:
          return t === 0 ? (f ? 0 : void 0) : (K(t), t);
        case h.FIXED32:
        case h.UINT32:
          return t === 0 ? (f ? 0 : void 0) : (v(t), t);
        case h.FLOAT:
          X(t);
        case h.DOUBLE:
          return t === 0
            ? f
              ? 0
              : void 0
            : (k(typeof t == 'number'),
              Number.isNaN(t)
                ? 'NaN'
                : t === Number.POSITIVE_INFINITY
                ? 'Infinity'
                : t === Number.NEGATIVE_INFINITY
                ? '-Infinity'
                : t);
        case h.STRING:
          return t === '' ? (f ? '' : void 0) : (k(typeof t == 'string'), t);
        case h.BOOL:
          return t === !1 ? (f ? !1 : void 0) : (k(typeof t == 'boolean'), t);
        case h.UINT64:
        case h.FIXED64:
          k(
            typeof t == 'number' || typeof t == 'string' || typeof t == 'bigint'
          );
          let s = W.from(t);
          return s.isZero() && !f ? void 0 : s.toString();
        case h.INT64:
        case h.SFIXED64:
        case h.SINT64:
          k(
            typeof t == 'number' || typeof t == 'string' || typeof t == 'bigint'
          );
          let o = T.from(t);
          return o.isZero() && !f ? void 0 : o.toString();
        case h.BYTES:
          return (
            k(t instanceof Uint8Array), t.byteLength ? ci(t) : f ? '' : void 0
          );
      }
    }
  };
  function le(l, e = U.STRING) {
    switch (l) {
      case h.BOOL:
        return !1;
      case h.UINT64:
      case h.FIXED64:
        return C(W.ZERO, e);
      case h.INT64:
      case h.SFIXED64:
      case h.SINT64:
        return C(T.ZERO, e);
      case h.DOUBLE:
      case h.FLOAT:
        return 0;
      case h.BYTES:
        return new Uint8Array(0);
      case h.STRING:
        return '';
      default:
        return 0;
    }
  }
  var ke = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      var e;
      if (!this.fieldNoToField) {
        let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
        this.fieldNoToField = new Map(t.map(n => [n.no, n]));
      }
    }
    read(e, t, n, i) {
      this.prepare();
      let r = i === void 0 ? e.len : e.pos + i;
      for (; e.pos < r; ) {
        let [f, s] = e.tag(),
          o = this.fieldNoToField.get(f);
        if (!o) {
          let w = n.readUnknownField;
          if (w == 'throw')
            throw new Error(
              `Unknown field ${f} (wire type ${s}) for ${this.info.typeName}`
            );
          let m = e.skip(s);
          w !== !1 && (w === !0 ? c.onRead : w)(this.info.typeName, t, f, s, m);
          continue;
        }
        let a = t,
          u = o.repeat,
          b = o.localName;
        switch (
          (o.oneof &&
            ((a = a[o.oneof]),
            a.oneofKind !== b && (a = t[o.oneof] = { oneofKind: b })),
          o.kind)
        ) {
          case 'scalar':
          case 'enum':
            let w = o.kind == 'enum' ? h.INT32 : o.T,
              m = o.kind == 'scalar' ? o.L : void 0;
            if (u) {
              let R = a[b];
              if (s == d.LengthDelimited && w != h.STRING && w != h.BYTES) {
                let g = e.uint32() + e.pos;
                for (; e.pos < g; ) R.push(this.scalar(e, w, m));
              } else R.push(this.scalar(e, w, m));
            } else a[b] = this.scalar(e, w, m);
            break;
          case 'message':
            if (u) {
              let R = a[b],
                g = o.T().internalBinaryRead(e, e.uint32(), n);
              R.push(g);
            } else a[b] = o.T().internalBinaryRead(e, e.uint32(), n, a[b]);
            break;
          case 'map':
            let [B, $] = this.mapEntry(o, e, n);
            a[b][B] = $;
            break;
        }
      }
    }
    mapEntry(e, t, n) {
      let i = t.uint32(),
        r = t.pos + i,
        f,
        s;
      for (; t.pos < r; ) {
        let [o, a] = t.tag();
        switch (o) {
          case 1:
            e.K == h.BOOL
              ? (f = t.bool().toString())
              : (f = this.scalar(t, e.K, U.STRING));
            break;
          case 2:
            switch (e.V.kind) {
              case 'scalar':
                s = this.scalar(t, e.V.T, e.V.L);
                break;
              case 'enum':
                s = t.int32();
                break;
              case 'message':
                s = e.V.T().internalBinaryRead(t, t.uint32(), n);
                break;
            }
            break;
          default:
            throw new Error(
              `Unknown field ${o} (wire type ${a}) in map entry for ${this.info.typeName}#${e.name}`
            );
        }
      }
      if (f === void 0) {
        let o = le(e.K);
        f = e.K == h.BOOL ? o.toString() : o;
      }
      if (s === void 0)
        switch (e.V.kind) {
          case 'scalar':
            s = le(e.V.T, e.V.L);
            break;
          case 'enum':
            s = 0;
            break;
          case 'message':
            s = e.V.T().create();
            break;
        }
      return [f, s];
    }
    scalar(e, t, n) {
      switch (t) {
        case h.INT32:
          return e.int32();
        case h.STRING:
          return e.string();
        case h.BOOL:
          return e.bool();
        case h.DOUBLE:
          return e.double();
        case h.FLOAT:
          return e.float();
        case h.INT64:
          return C(e.int64(), n);
        case h.UINT64:
          return C(e.uint64(), n);
        case h.FIXED64:
          return C(e.fixed64(), n);
        case h.FIXED32:
          return e.fixed32();
        case h.BYTES:
          return e.bytes();
        case h.UINT32:
          return e.uint32();
        case h.SFIXED32:
          return e.sfixed32();
        case h.SFIXED64:
          return C(e.sfixed64(), n);
        case h.SINT32:
          return e.sint32();
        case h.SINT64:
          return C(e.sint64(), n);
      }
    }
  };
  var we = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      if (!this.fields) {
        let e = this.info.fields ? this.info.fields.concat() : [];
        this.fields = e.sort((t, n) => t.no - n.no);
      }
    }
    write(e, t, n) {
      this.prepare();
      for (let r of this.fields) {
        let f,
          s,
          o = r.repeat,
          a = r.localName;
        if (r.oneof) {
          let u = e[r.oneof];
          if (u.oneofKind !== a) continue;
          (f = u[a]), (s = !0);
        } else (f = e[a]), (s = !1);
        switch (r.kind) {
          case 'scalar':
          case 'enum':
            let u = r.kind == 'enum' ? h.INT32 : r.T;
            if (o)
              if ((k(Array.isArray(f)), o == oe.PACKED))
                this.packed(t, u, r.no, f);
              else for (let b of f) this.scalar(t, u, r.no, b, !0);
            else
              f === void 0 ? k(r.opt) : this.scalar(t, u, r.no, f, s || r.opt);
            break;
          case 'message':
            if (o) {
              k(Array.isArray(f));
              for (let b of f) this.message(t, n, r.T(), r.no, b);
            } else this.message(t, n, r.T(), r.no, f);
            break;
          case 'map':
            k(typeof f == 'object' && f !== null);
            for (let [b, w] of Object.entries(f)) this.mapEntry(t, n, r, b, w);
            break;
        }
      }
      let i = n.writeUnknownFields;
      i !== !1 && (i === !0 ? c.onWrite : i)(this.info.typeName, e, t);
    }
    mapEntry(e, t, n, i, r) {
      e.tag(n.no, d.LengthDelimited), e.fork();
      let f = i;
      switch (n.K) {
        case h.INT32:
        case h.FIXED32:
        case h.UINT32:
        case h.SFIXED32:
        case h.SINT32:
          f = Number.parseInt(i);
          break;
        case h.BOOL:
          k(i == 'true' || i == 'false'), (f = i == 'true');
          break;
      }
      switch ((this.scalar(e, n.K, 1, f, !0), n.V.kind)) {
        case 'scalar':
          this.scalar(e, n.V.T, 2, r, !0);
          break;
        case 'enum':
          this.scalar(e, h.INT32, 2, r, !0);
          break;
        case 'message':
          this.message(e, t, n.V.T(), 2, r);
          break;
      }
      e.join();
    }
    message(e, t, n, i, r) {
      r !== void 0 &&
        (n.internalBinaryWrite(r, e.tag(i, d.LengthDelimited).fork(), t),
        e.join());
    }
    scalar(e, t, n, i, r) {
      let [f, s, o] = this.scalarInfo(t, i);
      (!o || r) && (e.tag(n, f), e[s](i));
    }
    packed(e, t, n, i) {
      if (!i.length) return;
      k(t !== h.BYTES && t !== h.STRING), e.tag(n, d.LengthDelimited), e.fork();
      let [, r] = this.scalarInfo(t);
      for (let f = 0; f < i.length; f++) e[r](i[f]);
      e.join();
    }
    scalarInfo(e, t) {
      let n = d.Varint,
        i,
        r = t === void 0,
        f = t === 0;
      switch (e) {
        case h.INT32:
          i = 'int32';
          break;
        case h.STRING:
          (f = r || !t.length), (n = d.LengthDelimited), (i = 'string');
          break;
        case h.BOOL:
          (f = t === !1), (i = 'bool');
          break;
        case h.UINT32:
          i = 'uint32';
          break;
        case h.DOUBLE:
          (n = d.Bit64), (i = 'double');
          break;
        case h.FLOAT:
          (n = d.Bit32), (i = 'float');
          break;
        case h.INT64:
          (f = r || T.from(t).isZero()), (i = 'int64');
          break;
        case h.UINT64:
          (f = r || W.from(t).isZero()), (i = 'uint64');
          break;
        case h.FIXED64:
          (f = r || W.from(t).isZero()), (n = d.Bit64), (i = 'fixed64');
          break;
        case h.BYTES:
          (f = r || !t.byteLength), (n = d.LengthDelimited), (i = 'bytes');
          break;
        case h.FIXED32:
          (n = d.Bit32), (i = 'fixed32');
          break;
        case h.SFIXED32:
          (n = d.Bit32), (i = 'sfixed32');
          break;
        case h.SFIXED64:
          (f = r || T.from(t).isZero()), (n = d.Bit64), (i = 'sfixed64');
          break;
        case h.SINT32:
          i = 'sint32';
          break;
        case h.SINT64:
          (f = r || T.from(t).isZero()), (i = 'sint64');
          break;
      }
      return [n, i, r || f];
    }
  };
  function Ii(l) {
    let e = {};
    Object.defineProperty(e, y, { enumerable: !1, value: l });
    for (let t of l.fields) {
      let n = t.localName;
      if (!t.opt)
        if (t.oneof) e[t.oneof] = { oneofKind: void 0 };
        else if (t.repeat) e[n] = [];
        else
          switch (t.kind) {
            case 'scalar':
              e[n] = le(t.T, t.L);
              break;
            case 'enum':
              e[n] = 0;
              break;
            case 'map':
              e[n] = {};
              break;
          }
    }
    return e;
  }
  function p(l, e, t) {
    let n,
      i = t,
      r;
    for (let f of l.fields) {
      let s = f.localName;
      if (f.oneof) {
        let o = i[f.oneof];
        if (o?.oneofKind == null) continue;
        if (
          ((n = o[s]), (r = e[f.oneof]), (r.oneofKind = o.oneofKind), n == null)
        ) {
          delete r[s];
          continue;
        }
      } else if (((n = i[s]), (r = e), n == null)) continue;
      switch ((f.repeat && (r[s].length = n.length), f.kind)) {
        case 'scalar':
        case 'enum':
          if (f.repeat) for (let a = 0; a < n.length; a++) r[s][a] = n[a];
          else r[s] = n;
          break;
        case 'message':
          let o = f.T();
          if (f.repeat)
            for (let a = 0; a < n.length; a++) r[s][a] = o.create(n[a]);
          else r[s] === void 0 ? (r[s] = o.create(n)) : o.mergePartial(r[s], n);
          break;
        case 'map':
          switch (f.V.kind) {
            case 'scalar':
            case 'enum':
              Object.assign(r[s], n);
              break;
            case 'message':
              let a = f.V.T();
              for (let u of Object.keys(n)) r[s][u] = a.create(n[u]);
              break;
          }
          break;
      }
    }
  }
  function Oi(l, e, t) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    for (let n of l.fields) {
      let i = n.localName,
        r = n.oneof ? e[n.oneof][i] : e[i],
        f = n.oneof ? t[n.oneof][i] : t[i];
      switch (n.kind) {
        case 'enum':
        case 'scalar':
          let s = n.kind == 'enum' ? h.INT32 : n.T;
          if (!(n.repeat ? xi(s, r, f) : Ui(s, r, f))) return !1;
          break;
        case 'map':
          if (
            !(n.V.kind == 'message'
              ? Wi(n.V.T(), be(r), be(f))
              : xi(n.V.kind == 'enum' ? h.INT32 : n.V.T, be(r), be(f)))
          )
            return !1;
          break;
        case 'message':
          let o = n.T();
          if (!(n.repeat ? Wi(o, r, f) : o.equals(r, f))) return !1;
          break;
      }
    }
    return !0;
  }
  var be = Object.values;
  function Ui(l, e, t) {
    if (e === t) return !0;
    if (l !== h.BYTES) return !1;
    let n = e,
      i = t;
    if (n.length !== i.length) return !1;
    for (let r = 0; r < n.length; r++) if (n[r] != i[r]) return !1;
    return !0;
  }
  function xi(l, e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!Ui(l, e[n], t[n])) return !1;
    return !0;
  }
  function Wi(l, e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!l.equals(e[n], t[n])) return !1;
    return !0;
  }
  var F = class {
    constructor(e, t, n) {
      (this.defaultCheckDepth = 16),
        (this.typeName = e),
        (this.fields = t.map(Ni)),
        (this.options = n ?? {}),
        (this.refTypeCheck = new Fe(this)),
        (this.refJsonReader = new me(this)),
        (this.refJsonWriter = new ge(this)),
        (this.refBinReader = new ke(this)),
        (this.refBinWriter = new we(this));
    }
    create(e) {
      let t = Ii(this);
      return e !== void 0 && p(this, t, e), t;
    }
    clone(e) {
      let t = this.create();
      return p(this, t, e), t;
    }
    equals(e, t) {
      return Oi(this, e, t);
    }
    is(e, t = this.defaultCheckDepth) {
      return this.refTypeCheck.is(e, t, !1);
    }
    isAssignable(e, t = this.defaultCheckDepth) {
      return this.refTypeCheck.is(e, t, !0);
    }
    mergePartial(e, t) {
      p(this, e, t);
    }
    fromBinary(e, t) {
      let n = mi(t);
      return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n);
    }
    fromJson(e, t) {
      return this.internalJsonRead(e, Bi(t));
    }
    fromJsonString(e, t) {
      let n = JSON.parse(e);
      return this.fromJson(n, t);
    }
    toJson(e, t) {
      return this.internalJsonWrite(e, Ti(t));
    }
    toJsonString(e, t) {
      var n;
      let i = this.toJson(e, t);
      return JSON.stringify(
        i,
        null,
        (n = t?.prettySpaces) !== null && n !== void 0 ? n : 0
      );
    }
    toBinary(e, t) {
      let n = ki(t);
      return this.internalBinaryWrite(e, n.writerFactory(), n).finish();
    }
    internalJsonRead(e, t, n) {
      if (e !== null && typeof e == 'object' && !Array.isArray(e)) {
        let i = n ?? this.create();
        return this.refJsonReader.read(e, i, t), i;
      }
      throw new Error(
        `Unable to parse message ${this.typeName} from JSON ${fe(e)}.`
      );
    }
    internalJsonWrite(e, t) {
      return this.refJsonWriter.write(e, t);
    }
    internalBinaryWrite(e, t, n) {
      return this.refBinWriter.write(e, t, n), t;
    }
    internalBinaryRead(e, t, n, i) {
      let r = i ?? this.create();
      return this.refBinReader.read(e, r, n, t), r;
    }
  };
  var Dt = class extends F {
      constructor() {
        super('Browse', [
          { no: 9, name: 'n1F9', kind: 'message', T: () => je },
          { no: 10, name: 'n1F10', kind: 'message', T: () => Y }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 9:
              r.n1F9 = je.internalBinaryRead(e, e.uint32(), n, r.n1F9);
              break;
            case 10:
              r.n1F10 = Y.internalBinaryRead(e, e.uint32(), n, r.n1F10);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n1F9 &&
          je
            .internalBinaryWrite(e.n1F9, t.tag(9, d.LengthDelimited).fork(), n)
            .join(),
          e.n1F10 &&
            Y.internalBinaryWrite(
              e.n1F10,
              t.tag(10, d.LengthDelimited).fork(),
              n
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ti = new Dt(),
    jt = class extends F {
      constructor() {
        super('n1F9', [
          { no: 58173949, name: 'm2F58173949', kind: 'message', T: () => Le }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 58173949:
              r.m2F58173949 = Le.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.m2F58173949
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.m2F58173949 &&
          Le.internalBinaryWrite(
            e.m2F58173949,
            t.tag(58173949, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    je = new jt(),
    Lt = class extends F {
      constructor() {
        super('n1F10', [
          { no: 49399797, name: 'n2F49399797', kind: 'message', T: () => P }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 49399797:
              r.n2F49399797 = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n2F49399797
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n2F49399797 &&
          P.internalBinaryWrite(
            e.n2F49399797,
            t.tag(49399797, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Y = new Lt(),
    St = class extends F {
      constructor() {
        super('m2F58173949', [
          { no: 1, name: 'm3F1', kind: 'message', repeat: 1, T: () => Se }
        ]);
      }
      create(e) {
        let t = { m3F1: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.m3F1.push(Se.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.m3F1.length; r++)
          Se.internalBinaryWrite(
            e.m3F1[r],
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Le = new St(),
    At = class extends F {
      constructor() {
        super('m3F1', [
          { no: 58174010, name: 'm4F58174010', kind: 'message', T: () => Ae }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 58174010:
              r.m4F58174010 = Ae.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.m4F58174010
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.m4F58174010 &&
          Ae.internalBinaryWrite(
            e.m4F58174010,
            t.tag(58174010, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Se = new At(),
    _t = class extends F {
      constructor() {
        super('m4F58174010', [
          { no: 4, name: 'n1F10', kind: 'message', T: () => Y }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 4:
              r.n1F10 = Y.internalBinaryRead(e, e.uint32(), n, r.n1F10);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n1F10 &&
          Y.internalBinaryWrite(
            e.n1F10,
            t.tag(4, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ae = new _t(),
    Vt = class extends F {
      constructor() {
        super('n2F49399797', [
          { no: 1, name: 'n3F1', kind: 'message', repeat: 1, T: () => _e }
        ]);
      }
      create(e) {
        let t = { n3F1: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n3F1.push(_e.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.n3F1.length; r++)
          _e.internalBinaryWrite(
            e.n3F1[r],
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    P = new Vt(),
    Mt = class extends F {
      constructor() {
        super('n3F1', [
          { no: 50195462, name: 'n4F50195462', kind: 'message', T: () => Z },
          { no: 51845067, name: 'n4F51845067', kind: 'message', T: () => Ve }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 50195462:
              r.n4F50195462 = Z.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n4F50195462
              );
              break;
            case 51845067:
              r.n4F51845067 = Ve.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n4F51845067
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n4F50195462 &&
          Z.internalBinaryWrite(
            e.n4F50195462,
            t.tag(50195462, d.LengthDelimited).fork(),
            n
          ).join(),
          e.n4F51845067 &&
            Ve.internalBinaryWrite(
              e.n4F51845067,
              t.tag(51845067, d.LengthDelimited).fork(),
              n
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    _e = new Mt(),
    Kt = class extends F {
      constructor() {
        super('n4F50195462', [
          { no: 1, name: 'n5F1', kind: 'message', repeat: 1, T: () => z }
        ]);
      }
      create(e) {
        let t = { n5F1: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n5F1.push(z.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.n5F1.length; r++)
          z.internalBinaryWrite(
            e.n5F1[r],
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Z = new Kt(),
    Gt = class extends F {
      constructor() {
        super('n4F51845067', [
          { no: 5, name: 'n5F5', kind: 'message', T: () => Me }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 5:
              r.n5F5 = Me.internalBinaryRead(e, e.uint32(), n, r.n5F5);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n5F5 &&
          Me.internalBinaryWrite(
            e.n5F5,
            t.tag(5, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ve = new Gt(),
    Jt = class extends F {
      constructor() {
        super('n5F1', [
          { no: 153515154, name: 'n6F153515154', kind: 'message', T: () => Ke }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 153515154:
              r.n6F153515154 = Ke.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n6F153515154
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n6F153515154 &&
          Ke.internalBinaryWrite(
            e.n6F153515154,
            t.tag(153515154, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    z = new Jt(),
    vt = class extends F {
      constructor() {
        super('n5F5', [
          { no: 51431404, name: 'n6F51431404', kind: 'message', T: () => Ge }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 51431404:
              r.n6F51431404 = Ge.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n6F51431404
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n6F51431404 &&
          Ge.internalBinaryWrite(
            e.n6F51431404,
            t.tag(51431404, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Me = new vt(),
    Xt = class extends F {
      constructor() {
        super('n6F153515154', [
          { no: 172660663, name: 'n7F172660663', kind: 'message', T: () => Je }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 172660663:
              r.n7F172660663 = Je.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n7F172660663
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n7F172660663 &&
          Je.internalBinaryWrite(
            e.n7F172660663,
            t.tag(172660663, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ke = new Xt(),
    qt = class extends F {
      constructor() {
        super('n6F51431404', [
          { no: 1, name: 'n5F1', kind: 'message', repeat: 1, T: () => z }
        ]);
      }
      create(e) {
        let t = { n5F1: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n5F1.push(z.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.n5F1.length; r++)
          z.internalBinaryWrite(
            e.n5F1[r],
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ge = new qt(),
    Yt = class extends F {
      constructor() {
        super('n7F172660663', [
          { no: 1, name: 'n8F1', kind: 'message', T: () => Q },
          { no: 2, name: 'n8F2', kind: 'message', T: () => H },
          { no: 3, name: 'n8F3', kind: 'message', T: () => ve }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n8F1 = Q.internalBinaryRead(e, e.uint32(), n, r.n8F1);
              break;
            case 2:
              r.n8F2 = H.internalBinaryRead(e, e.uint32(), n, r.n8F2);
              break;
            case 3:
              r.n8F3 = ve.internalBinaryRead(e, e.uint32(), n, r.n8F3);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n8F1 &&
          Q.internalBinaryWrite(
            e.n8F1,
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join(),
          e.n8F2 &&
            H.internalBinaryWrite(
              e.n8F2,
              t.tag(2, d.LengthDelimited).fork(),
              n
            ).join(),
          e.n8F3 &&
            ve
              .internalBinaryWrite(
                e.n8F3,
                t.tag(3, d.LengthDelimited).fork(),
                n
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Je = new Yt(),
    Zt = class extends F {
      constructor() {
        super('n8F1', [
          { no: 168777401, name: 'n9F168777401', kind: 'message', T: () => Xe }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 168777401:
              r.n9F168777401 = Xe.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n9F168777401
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n9F168777401 &&
          Xe.internalBinaryWrite(
            e.n9F168777401,
            t.tag(168777401, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Q = new Zt(),
    zt = class extends F {
      constructor() {
        super('n8F2', [
          { no: 183314536, name: 'n9F183314536', kind: 'message', T: () => qe }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 183314536:
              r.n9F183314536 = qe.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n9F183314536
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n9F183314536 &&
          qe
            .internalBinaryWrite(
              e.n9F183314536,
              t.tag(183314536, d.LengthDelimited).fork(),
              n
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    H = new zt(),
    Qt = class extends F {
      constructor() {
        super('n8F3', [
          { no: 1, name: 'n8F1', kind: 'message', T: () => Q },
          { no: 2, name: 'n8F2', kind: 'message', T: () => H }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n8F1 = Q.internalBinaryRead(e, e.uint32(), n, r.n8F1);
              break;
            case 2:
              r.n8F2 = H.internalBinaryRead(e, e.uint32(), n, r.n8F2);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n8F1 &&
          Q.internalBinaryWrite(
            e.n8F1,
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join(),
          e.n8F2 &&
            H.internalBinaryWrite(
              e.n8F2,
              t.tag(2, d.LengthDelimited).fork(),
              n
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ve = new Qt(),
    Ht = class extends F {
      constructor() {
        super('n9F168777401', [
          { no: 3, name: 'n10F3', kind: 'message', T: () => Ye }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 3:
              r.n10F3 = Ye.internalBinaryRead(e, e.uint32(), n, r.n10F3);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n10F3 &&
          Ye.internalBinaryWrite(
            e.n10F3,
            t.tag(3, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Xe = new Ht(),
    en = class extends F {
      constructor() {
        super('n9F183314536', [{ no: 1, name: 'type', kind: 'scalar', T: 9 }]);
      }
      create(e) {
        let t = { type: '' };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.type = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.type !== '' && t.tag(1, d.LengthDelimited).string(e.type);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    qe = new en(),
    tn = class extends F {
      constructor() {
        super('n10F3', [
          { no: 172035250, name: 'n11F172035250', kind: 'message', T: () => Ze }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 172035250:
              r.n11F172035250 = Ze.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n11F172035250
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n11F172035250 &&
          Ze.internalBinaryWrite(
            e.n11F172035250,
            t.tag(172035250, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ye = new tn(),
    nn = class extends F {
      constructor() {
        super('n11F172035250', [{ no: 1, name: 'type', kind: 'scalar', T: 9 }]);
      }
      create(e) {
        let t = { type: '' };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.type = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.type !== '' && t.tag(1, d.LengthDelimited).string(e.type);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ze = new nn(),
    rn = class extends F {
      constructor() {
        super('Next', [
          { no: 7, name: 'a1F7', kind: 'message', T: () => ze },
          { no: 8, name: 'a1F8', kind: 'message', T: () => Qe }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 7:
              r.a1F7 = ze.internalBinaryRead(e, e.uint32(), n, r.a1F7);
              break;
            case 8:
              r.a1F8 = Qe.internalBinaryRead(e, e.uint32(), n, r.a1F8);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.a1F7 &&
          ze
            .internalBinaryWrite(e.a1F7, t.tag(7, d.LengthDelimited).fork(), n)
            .join(),
          e.a1F8 &&
            Qe.internalBinaryWrite(
              e.a1F8,
              t.tag(8, d.LengthDelimited).fork(),
              n
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ni = new rn(),
    an = class extends F {
      constructor() {
        super('a1F7', [
          { no: 51779735, name: 'a2F51779735', kind: 'message', T: () => He }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 51779735:
              r.a2F51779735 = He.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.a2F51779735
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.a2F51779735 &&
          He.internalBinaryWrite(
            e.a2F51779735,
            t.tag(51779735, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ze = new an(),
    sn = class extends F {
      constructor() {
        super('a1F8', [
          { no: 49399797, name: 'n2F49399797', kind: 'message', T: () => P }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 49399797:
              r.n2F49399797 = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n2F49399797
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n2F49399797 &&
          P.internalBinaryWrite(
            e.n2F49399797,
            t.tag(49399797, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Qe = new sn(),
    on = class extends F {
      constructor() {
        super('a2F51779735', [
          { no: 1, name: 'a3F1', kind: 'message', T: () => et }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.a3F1 = et.internalBinaryRead(e, e.uint32(), n, r.a3F1);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.a3F1 &&
          et
            .internalBinaryWrite(e.a3F1, t.tag(1, d.LengthDelimited).fork(), n)
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    He = new on(),
    ln = class extends F {
      constructor() {
        super('a3F1', [
          { no: 49399797, name: 'n2F49399797', kind: 'message', T: () => P }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 49399797:
              r.n2F49399797 = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n2F49399797
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n2F49399797 &&
          P.internalBinaryWrite(
            e.n2F49399797,
            t.tag(49399797, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    et = new ln(),
    fn = class extends F {
      constructor() {
        super('Search', [
          { no: 4, name: 's1F4', kind: 'message', T: () => tt },
          { no: 7, name: 's1F7', kind: 'message', T: () => nt }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 4:
              r.s1F4 = tt.internalBinaryRead(e, e.uint32(), n, r.s1F4);
              break;
            case 7:
              r.s1F7 = nt.internalBinaryRead(e, e.uint32(), n, r.s1F7);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.s1F4 &&
          tt
            .internalBinaryWrite(e.s1F4, t.tag(4, d.LengthDelimited).fork(), n)
            .join(),
          e.s1F7 &&
            nt
              .internalBinaryWrite(
                e.s1F7,
                t.tag(7, d.LengthDelimited).fork(),
                n
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ii = new fn(),
    un = class extends F {
      constructor() {
        super('s1F4', [
          { no: 49399797, name: 'n2F49399797', kind: 'message', T: () => P }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 49399797:
              r.n2F49399797 = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n2F49399797
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n2F49399797 &&
          P.internalBinaryWrite(
            e.n2F49399797,
            t.tag(49399797, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    tt = new un(),
    cn = class extends F {
      constructor() {
        super('s1F7', [
          { no: 50195462, name: 'n4F50195462', kind: 'message', T: () => Z },
          { no: 49399797, name: 'n2F49399797', kind: 'message', T: () => P }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 50195462:
              r.n4F50195462 = Z.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n4F50195462
              );
              break;
            case 49399797:
              r.n2F49399797 = P.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n2F49399797
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n4F50195462 &&
          Z.internalBinaryWrite(
            e.n4F50195462,
            t.tag(50195462, d.LengthDelimited).fork(),
            n
          ).join(),
          e.n2F49399797 &&
            P.internalBinaryWrite(
              e.n2F49399797,
              t.tag(49399797, d.LengthDelimited).fork(),
              n
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    nt = new cn(),
    dn = class extends F {
      constructor() {
        super('Shorts', [
          { no: 2, name: 't1F2', kind: 'message', repeat: 1, T: () => it }
        ]);
      }
      create(e) {
        let t = { t1F2: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 2:
              r.t1F2.push(it.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.t1F2.length; r++)
          it.internalBinaryWrite(
            e.t1F2[r],
            t.tag(2, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ri = new dn(),
    hn = class extends F {
      constructor() {
        super('t1F2', [{ no: 1, name: 'n2F1', kind: 'message', T: () => rt }]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.n2F1 = rt.internalBinaryRead(e, e.uint32(), n, r.n2F1);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n2F1 &&
          rt
            .internalBinaryWrite(e.n2F1, t.tag(1, d.LengthDelimited).fork(), n)
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    it = new hn(),
    pn = class extends F {
      constructor() {
        super('n2F1', [
          { no: 139608561, name: 'n3F139608561', kind: 'message', T: () => at }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 139608561:
              r.n3F139608561 = at.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n3F139608561
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n3F139608561 &&
          at
            .internalBinaryWrite(
              e.n3F139608561,
              t.tag(139608561, d.LengthDelimited).fork(),
              n
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    rt = new pn(),
    yn = class extends F {
      constructor() {
        super('n3F139608561', [
          { no: 8, name: 'n4F8', kind: 'message', T: () => st }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 8:
              r.n4F8 = st.internalBinaryRead(e, e.uint32(), n, r.n4F8);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n4F8 &&
          st
            .internalBinaryWrite(e.n4F8, t.tag(8, d.LengthDelimited).fork(), n)
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    at = new yn(),
    Fn = class extends F {
      constructor() {
        super('n4F8', [
          { no: 139970731, name: 'n4F139970731', kind: 'message', T: () => ot }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 139970731:
              r.n4F139970731 = ot.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.n4F139970731
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.n4F139970731 &&
          ot
            .internalBinaryWrite(
              e.n4F139970731,
              t.tag(139970731, d.LengthDelimited).fork(),
              n
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    st = new Fn(),
    mn = class extends F {
      constructor() {
        super('n4F139970731', [{ no: 12, name: 'f1', kind: 'scalar', T: 5 }]);
      }
      create(e) {
        let t = { f1: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 12:
              r.f1 = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.f1 !== 0 && t.tag(12, d.Varint).int32(e.f1);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ot = new mn(),
    gn = class extends F {
      constructor() {
        super('Guide', [
          { no: 4, name: 'g1F4', kind: 'message', repeat: 1, T: () => lt },
          { no: 6, name: 'g1F6', kind: 'message', repeat: 1, T: () => ft }
        ]);
      }
      create(e) {
        let t = { g1F4: [], g1F6: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 4:
              r.g1F4.push(lt.internalBinaryRead(e, e.uint32(), n));
              break;
            case 6:
              r.g1F6.push(ft.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.g1F4.length; r++)
          lt.internalBinaryWrite(
            e.g1F4[r],
            t.tag(4, d.LengthDelimited).fork(),
            n
          ).join();
        for (let r = 0; r < e.g1F6.length; r++)
          ft.internalBinaryWrite(
            e.g1F6[r],
            t.tag(6, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ai = new gn(),
    kn = class extends F {
      constructor() {
        super('g1F4', [
          { no: 117866661, name: 'g2F117866661', kind: 'message', T: () => ee }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 117866661:
              r.g2F117866661 = ee.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.g2F117866661
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.g2F117866661 &&
          ee
            .internalBinaryWrite(
              e.g2F117866661,
              t.tag(117866661, d.LengthDelimited).fork(),
              n
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    lt = new kn(),
    wn = class extends F {
      constructor() {
        super('g1F6', [
          { no: 117866661, name: 'g2F117866661', kind: 'message', T: () => ee }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 117866661:
              r.g2F117866661 = ee.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.g2F117866661
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.g2F117866661 &&
          ee
            .internalBinaryWrite(
              e.g2F117866661,
              t.tag(117866661, d.LengthDelimited).fork(),
              n
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ft = new wn(),
    bn = class extends F {
      constructor() {
        super('g2F117866661', [
          { no: 1, name: 'g3F1', kind: 'message', repeat: 1, T: () => ut }
        ]);
      }
      create(e) {
        let t = { g3F1: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.g3F1.push(ut.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.g3F1.length; r++)
          ut.internalBinaryWrite(
            e.g3F1[r],
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ee = new bn(),
    Bn = class extends F {
      constructor() {
        super('g3F1', [
          { no: 318370163, name: 'g4F318370163', kind: 'message', T: () => ct }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 318370163:
              r.g4F318370163 = ct.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.g4F318370163
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.g4F318370163 &&
          ct
            .internalBinaryWrite(
              e.g4F318370163,
              t.tag(318370163, d.LengthDelimited).fork(),
              n
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ut = new Bn(),
    Tn = class extends F {
      constructor() {
        super('g4F318370163', [{ no: 1, name: 'f1', kind: 'scalar', T: 9 }]);
      }
      create(e) {
        let t = { f1: '' };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.f1 = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.f1 !== '' && t.tag(1, d.LengthDelimited).string(e.f1);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ct = new Tn(),
    Nn = class extends F {
      constructor() {
        super('Name', [
          { no: 1, name: 'runs', kind: 'message', repeat: 1, T: () => dt }
        ]);
      }
      create(e) {
        let t = { runs: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.runs.push(dt.internalBinaryRead(e, e.uint32(), n));
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.runs.length; r++)
          dt.internalBinaryWrite(
            e.runs[r],
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    te = new Nn(),
    Rn = class extends F {
      constructor() {
        super('Name.Runs', [{ no: 1, name: 'text', kind: 'scalar', T: 9 }]);
      }
      create(e) {
        let t = { text: '' };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.text = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.text !== '' && t.tag(1, d.LengthDelimited).string(e.text);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    dt = new Rn(),
    In = class extends F {
      constructor() {
        super('Player', [
          { no: 7, name: 'p1F7', kind: 'message', repeat: 1, T: () => kt },
          { no: 2, name: 'p1F2', kind: 'message', T: () => gt },
          { no: 10, name: 'captions', kind: 'message', T: () => ht }
        ]);
      }
      create(e) {
        let t = { p1F7: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 7:
              r.p1F7.push(kt.internalBinaryRead(e, e.uint32(), n));
              break;
            case 2:
              r.p1F2 = gt.internalBinaryRead(e, e.uint32(), n, r.p1F2);
              break;
            case 10:
              r.captions = ht.internalBinaryRead(e, e.uint32(), n, r.captions);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.p1F7.length; r++)
          kt.internalBinaryWrite(
            e.p1F7[r],
            t.tag(7, d.LengthDelimited).fork(),
            n
          ).join();
        e.p1F2 &&
          gt
            .internalBinaryWrite(e.p1F2, t.tag(2, d.LengthDelimited).fork(), n)
            .join(),
          e.captions &&
            ht
              .internalBinaryWrite(
                e.captions,
                t.tag(10, d.LengthDelimited).fork(),
                n
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    si = new In(),
    xn = class extends F {
      constructor() {
        super('Player.Captions', [
          {
            no: 51621377,
            name: 'playerCaptionsTracklistRenderer',
            kind: 'message',
            T: () => pt
          }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 51621377:
              r.playerCaptionsTracklistRenderer = pt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.playerCaptionsTracklistRenderer
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.playerCaptionsTracklistRenderer &&
          pt
            .internalBinaryWrite(
              e.playerCaptionsTracklistRenderer,
              t.tag(51621377, d.LengthDelimited).fork(),
              n
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ht = new xn(),
    Wn = class extends F {
      constructor() {
        super('Player.Captions.PlayerCaptionsTracklistRenderer', [
          {
            no: 1,
            name: 'captionTracks',
            kind: 'message',
            repeat: 1,
            T: () => yt
          },
          {
            no: 2,
            name: 'audioTracks',
            kind: 'message',
            repeat: 1,
            T: () => Ft
          },
          {
            no: 3,
            name: 'translationLanguages',
            kind: 'message',
            repeat: 1,
            T: () => mt
          },
          {
            no: 4,
            name: 'defaultAudioTrackIndex',
            kind: 'scalar',
            opt: !0,
            T: 5
          },
          {
            no: 6,
            name: 'defaultCaptionTrackIndex',
            kind: 'scalar',
            jsonName: 'defaultAudioTrackIndex',
            opt: !0,
            T: 5
          }
        ]);
      }
      create(e) {
        let t = {
          captionTracks: [],
          audioTracks: [],
          translationLanguages: []
        };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.captionTracks.push(yt.internalBinaryRead(e, e.uint32(), n));
              break;
            case 2:
              r.audioTracks.push(Ft.internalBinaryRead(e, e.uint32(), n));
              break;
            case 3:
              r.translationLanguages.push(
                mt.internalBinaryRead(e, e.uint32(), n)
              );
              break;
            case 4:
              r.defaultAudioTrackIndex = e.int32();
              break;
            case 6:
              r.defaultCaptionTrackIndex = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.captionTracks.length; r++)
          yt.internalBinaryWrite(
            e.captionTracks[r],
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join();
        for (let r = 0; r < e.audioTracks.length; r++)
          Ft.internalBinaryWrite(
            e.audioTracks[r],
            t.tag(2, d.LengthDelimited).fork(),
            n
          ).join();
        for (let r = 0; r < e.translationLanguages.length; r++)
          mt.internalBinaryWrite(
            e.translationLanguages[r],
            t.tag(3, d.LengthDelimited).fork(),
            n
          ).join();
        e.defaultAudioTrackIndex !== void 0 &&
          t.tag(4, d.Varint).int32(e.defaultAudioTrackIndex),
          e.defaultCaptionTrackIndex !== void 0 &&
            t.tag(6, d.Varint).int32(e.defaultCaptionTrackIndex);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    pt = new Wn(),
    On = class extends F {
      constructor() {
        super('Player.Captions.PlayerCaptionsTracklistRenderer.CaptionTracks', [
          { no: 1, name: 'baseUrl', kind: 'scalar', T: 9 },
          { no: 2, name: 'name', kind: 'message', T: () => te },
          { no: 3, name: 'vssId', kind: 'scalar', T: 9 },
          { no: 4, name: 'languageCode', kind: 'scalar', T: 9 },
          { no: 5, name: 'kind', kind: 'scalar', opt: !0, T: 9 },
          { no: 6, name: 'rtl', kind: 'scalar', opt: !0, T: 8 },
          { no: 7, name: 'isTranslatable', kind: 'scalar', T: 8 }
        ]);
      }
      create(e) {
        let t = {
          baseUrl: '',
          vssId: '',
          languageCode: '',
          isTranslatable: !1
        };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.baseUrl = e.string();
              break;
            case 2:
              r.name = te.internalBinaryRead(e, e.uint32(), n, r.name);
              break;
            case 3:
              r.vssId = e.string();
              break;
            case 4:
              r.languageCode = e.string();
              break;
            case 5:
              r.kind = e.string();
              break;
            case 6:
              r.rtl = e.bool();
              break;
            case 7:
              r.isTranslatable = e.bool();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.baseUrl !== '' && t.tag(1, d.LengthDelimited).string(e.baseUrl),
          e.name &&
            te
              .internalBinaryWrite(
                e.name,
                t.tag(2, d.LengthDelimited).fork(),
                n
              )
              .join(),
          e.vssId !== '' && t.tag(3, d.LengthDelimited).string(e.vssId),
          e.languageCode !== '' &&
            t.tag(4, d.LengthDelimited).string(e.languageCode),
          e.kind !== void 0 && t.tag(5, d.LengthDelimited).string(e.kind),
          e.rtl !== void 0 && t.tag(6, d.Varint).bool(e.rtl),
          e.isTranslatable !== !1 && t.tag(7, d.Varint).bool(e.isTranslatable);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    yt = new On(),
    Un = class extends F {
      constructor() {
        super('Player.Captions.PlayerCaptionsTracklistRenderer.AudioTracks', [
          {
            no: 2,
            name: 'captionTrackIndices',
            kind: 'scalar',
            repeat: 2,
            T: 5
          },
          {
            no: 3,
            name: 'defaultCaptionTrackIndex',
            kind: 'scalar',
            opt: !0,
            T: 5
          },
          {
            no: 4,
            name: 'forcedCaptionTrackIndex',
            kind: 'scalar',
            opt: !0,
            T: 5
          },
          { no: 5, name: 'visibility', kind: 'scalar', opt: !0, T: 5 },
          { no: 6, name: 'hasDefaultTrack', kind: 'scalar', opt: !0, T: 8 },
          { no: 7, name: 'hasForcedTrack', kind: 'scalar', opt: !0, T: 8 },
          { no: 8, name: 'audioTrackId', kind: 'scalar', opt: !0, T: 9 },
          {
            no: 11,
            name: 'captionsInitialState',
            kind: 'scalar',
            opt: !0,
            T: 5
          }
        ]);
      }
      create(e) {
        let t = { captionTrackIndices: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 2:
              if (o === d.LengthDelimited)
                for (let b = e.int32() + e.pos; e.pos < b; )
                  r.captionTrackIndices.push(e.int32());
              else r.captionTrackIndices.push(e.int32());
              break;
            case 3:
              r.defaultCaptionTrackIndex = e.int32();
              break;
            case 4:
              r.forcedCaptionTrackIndex = e.int32();
              break;
            case 5:
              r.visibility = e.int32();
              break;
            case 6:
              r.hasDefaultTrack = e.bool();
              break;
            case 7:
              r.hasForcedTrack = e.bool();
              break;
            case 8:
              r.audioTrackId = e.string();
              break;
            case 11:
              r.captionsInitialState = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.captionTrackIndices.length; r++)
          t.tag(2, d.Varint).int32(e.captionTrackIndices[r]);
        e.defaultCaptionTrackIndex !== void 0 &&
          t.tag(3, d.Varint).int32(e.defaultCaptionTrackIndex),
          e.forcedCaptionTrackIndex !== void 0 &&
            t.tag(4, d.Varint).int32(e.forcedCaptionTrackIndex),
          e.visibility !== void 0 && t.tag(5, d.Varint).int32(e.visibility),
          e.hasDefaultTrack !== void 0 &&
            t.tag(6, d.Varint).bool(e.hasDefaultTrack),
          e.hasForcedTrack !== void 0 &&
            t.tag(7, d.Varint).bool(e.hasForcedTrack),
          e.audioTrackId !== void 0 &&
            t.tag(8, d.LengthDelimited).string(e.audioTrackId),
          e.captionsInitialState !== void 0 &&
            t.tag(11, d.Varint).int32(e.captionsInitialState);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ft = new Un(),
    Pn = class extends F {
      constructor() {
        super(
          'Player.Captions.PlayerCaptionsTracklistRenderer.TranslationLanguages',
          [
            { no: 1, name: 'languageCode', kind: 'scalar', T: 9 },
            { no: 2, name: 'languageName', kind: 'message', T: () => te }
          ]
        );
      }
      create(e) {
        let t = { languageCode: '' };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.languageCode = e.string();
              break;
            case 2:
              r.languageName = te.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.languageName
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.languageCode !== '' &&
          t.tag(1, d.LengthDelimited).string(e.languageCode),
          e.languageName &&
            te
              .internalBinaryWrite(
                e.languageName,
                t.tag(2, d.LengthDelimited).fork(),
                n
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    mt = new Pn(),
    En = class extends F {
      constructor() {
        super('p1F2', [
          { no: 21, name: 'p2F21', kind: 'message', T: () => bt },
          { no: 11, name: 'p2F11', kind: 'message', T: () => Bt }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 21:
              r.p2F21 = bt.internalBinaryRead(e, e.uint32(), n, r.p2F21);
              break;
            case 11:
              r.p2F11 = Bt.internalBinaryRead(e, e.uint32(), n, r.p2F11);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.p2F21 &&
          bt
            .internalBinaryWrite(
              e.p2F21,
              t.tag(21, d.LengthDelimited).fork(),
              n
            )
            .join(),
          e.p2F11 &&
            Bt.internalBinaryWrite(
              e.p2F11,
              t.tag(11, d.LengthDelimited).fork(),
              n
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    gt = new En(),
    Cn = class extends F {
      constructor() {
        super('p1F7', [
          { no: 84813246, name: 'p2F84813246', kind: 'message', T: () => wt }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 84813246:
              r.p2F84813246 = wt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.p2F84813246
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.p2F84813246 &&
          wt
            .internalBinaryWrite(
              e.p2F84813246,
              t.tag(84813246, d.LengthDelimited).fork(),
              n
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    kt = new Cn(),
    $n = class extends F {
      constructor() {
        super('p2F84813246', [{ no: 3, name: 'v', kind: 'scalar', T: 5 }]);
      }
      create(e) {
        let t = { v: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 3:
              r.v = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.v !== 0 && t.tag(3, d.Varint).int32(e.v);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    wt = new $n(),
    Dn = class extends F {
      constructor() {
        super('p2F21', [
          { no: 151635310, name: 'p3F151635310', kind: 'message', T: () => Tt }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 151635310:
              r.p3F151635310 = Tt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.p3F151635310
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.p3F151635310 &&
          Tt.internalBinaryWrite(
            e.p3F151635310,
            t.tag(151635310, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    bt = new Dn(),
    jn = class extends F {
      constructor() {
        super('p2F11', [
          { no: 64657230, name: 'p3F64657230', kind: 'message', T: () => Nt }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 64657230:
              r.p3F64657230 = Nt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.p3F64657230
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.p3F64657230 &&
          Nt.internalBinaryWrite(
            e.p3F64657230,
            t.tag(64657230, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Bt = new jn(),
    Ln = class extends F {
      constructor() {
        super('p3F151635310', [{ no: 1, name: 'pip', kind: 'scalar', T: 5 }]);
      }
      create(e) {
        let t = { pip: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.pip = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.pip !== 0 && t.tag(1, d.Varint).int32(e.pip);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Tt = new Ln(),
    Sn = class extends F {
      constructor() {
        super('p3F64657230', [
          { no: 1, name: 'backPlay', kind: 'scalar', T: 5 }
        ]);
      }
      create(e) {
        let t = { backPlay: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.backPlay = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.backPlay !== 0 && t.tag(1, d.Varint).int32(e.backPlay);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Nt = new Sn(),
    An = class extends F {
      constructor() {
        super('Setting', [
          { no: 6, name: 'st1F6', kind: 'message', repeat: 1, T: () => Rt },
          { no: 7, name: 'st1F7', kind: 'message', T: () => It },
          { no: 10, name: 'st1F10', kind: 'message', T: () => xt }
        ]);
      }
      create(e) {
        let t = { st1F6: [] };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 6:
              r.st1F6.push(Rt.internalBinaryRead(e, e.uint32(), n));
              break;
            case 7:
              r.st1F7 = It.internalBinaryRead(e, e.uint32(), n, r.st1F7);
              break;
            case 10:
              r.st1F10 = xt.internalBinaryRead(e, e.uint32(), n, r.st1F10);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.st1F6.length; r++)
          Rt.internalBinaryWrite(
            e.st1F6[r],
            t.tag(6, d.LengthDelimited).fork(),
            n
          ).join();
        e.st1F7 &&
          It.internalBinaryWrite(
            e.st1F7,
            t.tag(7, d.LengthDelimited).fork(),
            n
          ).join(),
          e.st1F10 &&
            xt
              .internalBinaryWrite(
                e.st1F10,
                t.tag(10, d.LengthDelimited).fork(),
                n
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    oi = new An(),
    _n = class extends F {
      constructor() {
        super('st1F6', [
          { no: 88478200, name: 'st2F88478200', kind: 'message', T: () => ie },
          { no: 66930374, name: 'st2F66930374', kind: 'message', T: () => Wt }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 88478200:
              r.st2F88478200 = ie.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.st2F88478200
              );
              break;
            case 66930374:
              r.st2F66930374 = Wt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.st2F66930374
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.st2F88478200 &&
          ie
            .internalBinaryWrite(
              e.st2F88478200,
              t.tag(88478200, d.LengthDelimited).fork(),
              n
            )
            .join(),
          e.st2F66930374 &&
            Wt.internalBinaryWrite(
              e.st2F66930374,
              t.tag(66930374, d.LengthDelimited).fork(),
              n
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Rt = new _n(),
    Vn = class extends F {
      constructor() {
        super('st1F7', [
          { no: 88478200, name: 'st2F88478200', kind: 'message', T: () => ie }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 88478200:
              r.st2F88478200 = ie.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.st2F88478200
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.st2F88478200 &&
          ie
            .internalBinaryWrite(
              e.st2F88478200,
              t.tag(88478200, d.LengthDelimited).fork(),
              n
            )
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    It = new Vn(),
    Mn = class extends F {
      constructor() {
        super('st1F10', [
          { no: 4, name: 'st2F4', kind: 'message', T: () => ne }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 4:
              r.st2F4 = ne.internalBinaryRead(e, e.uint32(), n, r.st2F4);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.st2F4 &&
          ne
            .internalBinaryWrite(e.st2F4, t.tag(4, d.LengthDelimited).fork(), n)
            .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    xt = new Mn(),
    Kn = class extends F {
      constructor() {
        super('st2F4', [
          { no: 1, name: 'f1', kind: 'scalar', T: 4 },
          { no: 2, name: 'f2', kind: 'scalar', T: 7 },
          { no: 3, name: 'f3', kind: 'scalar', T: 7 }
        ]);
      }
      create(e) {
        let t = { f1: '0', f2: 0, f3: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.f1 = e.uint64().toString();
              break;
            case 2:
              r.f2 = e.fixed32();
              break;
            case 3:
              r.f3 = e.fixed32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.f1 !== '0' && t.tag(1, d.Varint).uint64(e.f1),
          e.f2 !== 0 && t.tag(2, d.Bit32).fixed32(e.f2),
          e.f3 !== 0 && t.tag(3, d.Bit32).fixed32(e.f3);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ne = new Kn(),
    Gn = class extends F {
      constructor() {
        super('st2F88478200', [
          { no: 2, name: 'f2', kind: 'scalar', T: 5 },
          { no: 3, name: 'f3', kind: 'scalar', T: 5 },
          { no: 5, name: 'st3F5', kind: 'message', T: () => _ },
          { no: 6, name: 'f6', kind: 'scalar', T: 5 },
          { no: 7, name: 'f7', kind: 'scalar', T: 5 },
          { no: 8, name: 'f8', kind: 'scalar', T: 5 },
          { no: 9, name: 'f9', kind: 'scalar', T: 5 },
          { no: 10, name: 'f10', kind: 'scalar', T: 5 },
          { no: 12, name: 'f12', kind: 'scalar', T: 5 }
        ]);
      }
      create(e) {
        let t = { f2: 0, f3: 0, f6: 0, f7: 0, f8: 0, f9: 0, f10: 0, f12: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 2:
              r.f2 = e.int32();
              break;
            case 3:
              r.f3 = e.int32();
              break;
            case 5:
              r.st3F5 = _.internalBinaryRead(e, e.uint32(), n, r.st3F5);
              break;
            case 6:
              r.f6 = e.int32();
              break;
            case 7:
              r.f7 = e.int32();
              break;
            case 8:
              r.f8 = e.int32();
              break;
            case 9:
              r.f9 = e.int32();
              break;
            case 10:
              r.f10 = e.int32();
              break;
            case 12:
              r.f12 = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.f2 !== 0 && t.tag(2, d.Varint).int32(e.f2),
          e.f3 !== 0 && t.tag(3, d.Varint).int32(e.f3),
          e.st3F5 &&
            _.internalBinaryWrite(
              e.st3F5,
              t.tag(5, d.LengthDelimited).fork(),
              n
            ).join(),
          e.f6 !== 0 && t.tag(6, d.Varint).int32(e.f6),
          e.f7 !== 0 && t.tag(7, d.Varint).int32(e.f7),
          e.f8 !== 0 && t.tag(8, d.Varint).int32(e.f8),
          e.f9 !== 0 && t.tag(9, d.Varint).int32(e.f9),
          e.f10 !== 0 && t.tag(10, d.Varint).int32(e.f10),
          e.f12 !== 0 && t.tag(12, d.Varint).int32(e.f12);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    ie = new Gn(),
    Jn = class extends F {
      constructor() {
        super('st2F66930374', [
          { no: 3, name: 'st3F3', kind: 'message', repeat: 1, T: () => Ot },
          { no: 4, name: 'num', kind: 'scalar', T: 5 }
        ]);
      }
      create(e) {
        let t = { st3F3: [], num: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 3:
              r.st3F3.push(Ot.internalBinaryRead(e, e.uint32(), n));
              break;
            case 4:
              r.num = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.st3F3.length; r++)
          Ot.internalBinaryWrite(
            e.st3F3[r],
            t.tag(3, d.LengthDelimited).fork(),
            n
          ).join();
        e.num !== 0 && t.tag(4, d.Varint).int32(e.num);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Wt = new Jn(),
    vn = class extends F {
      constructor() {
        super('st3F1', [
          { no: 1, name: 'st4F1', kind: 'message', T: () => Ut }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.st4F1 = Ut.internalBinaryRead(e, e.uint32(), n, r.st4F1);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.st4F1 &&
          Ut.internalBinaryWrite(
            e.st4F1,
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Aa = new vn(),
    Xn = class extends F {
      constructor() {
        super('st3F3', [
          { no: 61331416, name: 'st4F61331416', kind: 'message', T: () => Pt }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 61331416:
              r.st4F61331416 = Pt.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.st4F61331416
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.st4F61331416 &&
          Pt.internalBinaryWrite(
            e.st4F61331416,
            t.tag(61331416, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ot = new Xn(),
    qn = class extends F {
      constructor() {
        super('st3F5', [
          { no: 1, name: 'f1', kind: 'scalar', T: 5 },
          { no: 2, name: 'f2', kind: 'scalar', T: 5 },
          { no: 3, name: 'f3', kind: 'scalar', T: 5 },
          { no: 4, name: 'st2F4', kind: 'message', T: () => ne }
        ]);
      }
      create(e) {
        let t = { f1: 0, f2: 0, f3: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.f1 = e.int32();
              break;
            case 2:
              r.f2 = e.int32();
              break;
            case 3:
              r.f3 = e.int32();
              break;
            case 4:
              r.st2F4 = ne.internalBinaryRead(e, e.uint32(), n, r.st2F4);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.f1 !== 0 && t.tag(1, d.Varint).int32(e.f1),
          e.f2 !== 0 && t.tag(2, d.Varint).int32(e.f2),
          e.f3 !== 0 && t.tag(3, d.Varint).int32(e.f3),
          e.st2F4 &&
            ne
              .internalBinaryWrite(
                e.st2F4,
                t.tag(4, d.LengthDelimited).fork(),
                n
              )
              .join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    _ = new qn(),
    Yn = class extends F {
      constructor() {
        super('st4F1', [{ no: 1, name: 'title', kind: 'scalar', T: 9 }]);
      }
      create(e) {
        let t = { title: '' };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.title = e.string();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.title !== '' && t.tag(1, d.LengthDelimited).string(e.title);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ut = new Yn(),
    Zn = class extends F {
      constructor() {
        super('st4F61331416', [
          { no: 5, name: 'st5F5', kind: 'message', T: () => q },
          { no: 6, name: 'st5F6', kind: 'message', T: () => q },
          { no: 13, name: 'st3F5', kind: 'message', T: () => _ },
          { no: 15, name: 'f15', kind: 'scalar', T: 5 }
        ]);
      }
      create(e) {
        let t = { f15: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 5:
              r.st5F5 = q.internalBinaryRead(e, e.uint32(), n, r.st5F5);
              break;
            case 6:
              r.st5F6 = q.internalBinaryRead(e, e.uint32(), n, r.st5F6);
              break;
            case 13:
              r.st3F5 = _.internalBinaryRead(e, e.uint32(), n, r.st3F5);
              break;
            case 15:
              r.f15 = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.st5F5 &&
          q
            .internalBinaryWrite(e.st5F5, t.tag(5, d.LengthDelimited).fork(), n)
            .join(),
          e.st5F6 &&
            q
              .internalBinaryWrite(
                e.st5F6,
                t.tag(6, d.LengthDelimited).fork(),
                n
              )
              .join(),
          e.st3F5 &&
            _.internalBinaryWrite(
              e.st3F5,
              t.tag(13, d.LengthDelimited).fork(),
              n
            ).join(),
          e.f15 !== 0 && t.tag(15, d.Varint).int32(e.f15);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Pt = new Zn(),
    zn = class extends F {
      constructor() {
        super('st5F5', [
          { no: 2, name: 'st3F5', kind: 'message', T: () => _ },
          { no: 81212182, name: 'st6F81212182', kind: 'message', T: () => Et }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 2:
              r.st3F5 = _.internalBinaryRead(e, e.uint32(), n, r.st3F5);
              break;
            case 81212182:
              r.st6F81212182 = Et.internalBinaryRead(
                e,
                e.uint32(),
                n,
                r.st6F81212182
              );
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.st3F5 &&
          _.internalBinaryWrite(
            e.st3F5,
            t.tag(2, d.LengthDelimited).fork(),
            n
          ).join(),
          e.st6F81212182 &&
            Et.internalBinaryWrite(
              e.st6F81212182,
              t.tag(81212182, d.LengthDelimited).fork(),
              n
            ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    q = new zn(),
    Qn = class extends F {
      constructor() {
        super('st6F81212182', [
          { no: 1, name: 'st7F1', kind: 'message', T: () => Ct }
        ]);
      }
      create(e) {
        let t = {};
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.st7F1 = Ct.internalBinaryRead(e, e.uint32(), n, r.st7F1);
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.st7F1 &&
          Ct.internalBinaryWrite(
            e.st7F1,
            t.tag(1, d.LengthDelimited).fork(),
            n
          ).join();
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Et = new Qn(),
    Hn = class extends F {
      constructor() {
        super('st7F1', [
          { no: 1, name: 'st8F1', kind: 'message', T: () => $t },
          { no: 3, name: 'f3', kind: 'scalar', T: 5 }
        ]);
      }
      create(e) {
        let t = { f3: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.st8F1 = $t.internalBinaryRead(e, e.uint32(), n, r.st8F1);
              break;
            case 3:
              r.f3 = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.st8F1 &&
          $t
            .internalBinaryWrite(e.st8F1, t.tag(1, d.LengthDelimited).fork(), n)
            .join(),
          e.f3 !== 0 && t.tag(3, d.Varint).int32(e.f3);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    Ct = new Hn(),
    ei = class extends F {
      constructor() {
        super('st8F1', [{ no: 1, name: 'f1', kind: 'scalar', T: 5 }]);
      }
      create(e) {
        let t = { f1: 0 };
        return (
          globalThis.Object.defineProperty(t, y, {
            enumerable: !1,
            value: this
          }),
          e !== void 0 && p(this, t, e),
          t
        );
      }
      internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
          f = e.pos + t;
        for (; e.pos < f; ) {
          let [s, o] = e.tag();
          switch (s) {
            case 1:
              r.f1 = e.int32();
              break;
            default:
              let a = n.readUnknownField;
              if (a === 'throw')
                throw new globalThis.Error(
                  `Unknown field ${s} (wire type ${o}) for ${this.typeName}`
                );
              let u = e.skip(o);
              a !== !1 && (a === !0 ? c.onRead : a)(this.typeName, r, s, o, u);
          }
        }
        return r;
      }
      internalBinaryWrite(e, t, n) {
        e.f1 !== 0 && t.tag(1, d.Varint).int32(e.f1);
        let i = n.writeUnknownFields;
        return i !== !1 && (i == !0 ? c.onWrite : i)(this.typeName, e, t), t;
      }
    },
    $t = new ei();
  var re = class {
      constructor(e, t, n) {
        this._times = new Map();
        (this.name = e ?? ''),
          (this.debug = n?.debug ?? !1),
          e && this.log(`${e} Start`),
          (this.className = t ?? ''),
          this.init();
      }
      static getInstance(e, t) {
        let n = typeof $task < 'u' ? 'QuanX' : 'Surge';
        return (
          re.instances[n] || (re.instances[n] = re.classNames[n](e, n, t)),
          re.instances[n]
        );
      }
      createProxy(e) {
        return new Proxy(e, { get: this.getFn, set: this.setFn });
      }
      getFn(e, t, n) {
        return e[t];
      }
      setFn(e, t, n, i) {
        return (e[t] = n), !0;
      }
      getJSON(e, t = {}) {
        let n = this.getVal(e);
        return n ? JSON.parse(n) : t;
      }
      setJSON(e, t) {
        this.setVal(JSON.stringify(e), t);
      }
      msg(e = this.name, t = '', n = '', i) {}
      log(e) {
        this.debug &&
          (typeof e == 'object' && (e = JSON.stringify(e)), console.log(e));
      }
      timeStart(e) {
        (this._times = this._times || {}), (this._times[e] = Date.now());
      }
      timeEnd(e) {
        if (this._times?.has(e)) {
          let t = Date.now() - this._times[e];
          this.log(`${e}: ${t}ms`), this._times.delete(e);
        } else this.log(`Timer with label ${e} does not exist.`);
      }
      exit() {
        $done({});
      }
      reject() {
        $done();
      }
    },
    M = re;
  (M.instances = {}),
    (M.classNames = {
      QuanX: (e, t, n) => new Te(e, t, n),
      Surge: (e, t, n) => new Be(e, t, n)
    });
  var Ne = class extends M {
      getFn(e, t, n) {
        let i = Ne.clientAdapter[t] || t;
        return super.getFn(e, i, n);
      }
      setFn(e, t, n, i) {
        let r = Ne.clientAdapter[t] || t;
        return super.setFn(e, r, n, i);
      }
      init() {
        try {
          (this.request = this.createProxy($request)),
            (this.response = this.createProxy($response));
        } catch (e) {
          this.log(e.toString());
        }
      }
      getVal(e) {
        return $persistentStore.read(e);
      }
      setVal(e, t) {
        $persistentStore.write(e, t);
      }
      msg(e = this.name, t = '', n = '', i) {
        $notification.post(e, t, n, { url: i ?? '' });
      }
      async fetch(e) {
        return await new Promise((t, n) => {
          let { method: i, body: r, bodyBytes: f, ...s } = e,
            o = f ?? r,
            a = o instanceof Uint8Array;
          $httpClient[i.toLowerCase()](
            { ...s, body: o, 'binary-mode': a },
            (u, b, w) => {
              u && n(u);
              let m = a ? 'bodyBytes' : 'body';
              t({ status: b.status, headers: b.headers, [m]: w });
            }
          );
        });
      }
      done(e) {
        let t = e.response ?? e,
          n,
          i;
        t.bodyBytes
          ? ((n = t.bodyBytes),
            delete t.bodyBytes,
            (i = { ...e }),
            i.response ? (i.response.body = n) : (i.body = n))
          : (i = e),
          $done(i);
      }
    },
    Be = Ne;
  Be.clientAdapter = { bodyBytes: 'body' };
  var V = class extends M {
      static transferBodyBytes(e, t) {
        return e instanceof ArrayBuffer
          ? t === 'Uint8Array'
            ? new Uint8Array(e)
            : e
          : e instanceof Uint8Array && t === 'ArrayBuffer'
          ? e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset)
          : e;
      }
      init() {
        try {
          (this.request = this.createProxy($request)),
            (this.response = this.createProxy($response));
        } catch (e) {
          this.log(e.toString());
        }
      }
      getFn(e, t, n) {
        let i = V.clientAdapter[t] || t,
          r = super.getFn(e, i, n);
        return (
          t === 'bodyBytes' && (r = V.transferBodyBytes(r, 'Uint8Array')), r
        );
      }
      setFn(e, t, n, i) {
        let r = V.clientAdapter[t] || t,
          f = n;
        return (
          t === 'bodyBytes' && (f = V.transferBodyBytes(f, 'Uint8Array')),
          super.setFn(e, r, f, i)
        );
      }
      getVal(e) {
        return $prefs.valueForKey(e)?.replace(/\0/g, '');
      }
      setVal(e, t) {
        $prefs.setValueForKey(e, t);
      }
      msg(e = this.name, t = '', n = '', i) {
        $notify(e, t, n, { 'open-url': i ?? '' });
      }
      async fetch(e) {
        return await new Promise(t => {
          let n = { url: '', method: 'GET' };
          for (let [i, r] of Object.entries(e))
            i === 'id'
              ? (n.sessionIndex = r)
              : i === 'bodyBytes'
              ? (n.bodyBytes = V.transferBodyBytes(r, 'ArrayBuffer'))
              : (n[i] = r);
          e.bodyBytes && delete n.body,
            $task.fetch(n).then(i => {
              let r = { status: 200, headers: {} };
              for (let [f, s] of Object.entries(i))
                f === 'sessionIndex'
                  ? (r.id = s)
                  : f === 'bodyBytes'
                  ? (r.bodyBytes = V.transferBodyBytes(s, 'Uint8Array'))
                  : f === 'statusCode'
                  ? (r.status = s)
                  : (r[f] = s);
              t(r);
            });
        });
      }
      done(e) {
        let t = e.response ?? e,
          n = {};
        for (let [i, r] of Object.entries(t))
          i === 'status'
            ? (n.status = `HTTP/1.1 ${r}`)
            : i === 'bodyBytes'
            ? (n.bodyBytes = V.transferBodyBytes(r, 'ArrayBuffer'))
            : (n[i] = r);
        $done(n);
      }
    },
    Te = V;
  Te.clientAdapter = { id: 'sessionIndex', status: 'statusCode' };
  var j = M.getInstance('YouTube', { debug: !1 });
  var G = class {
    constructor(e) {
      this.decoder = new TextDecoder('utf-8', { fatal: !1, ignoreBOM: !0 });
      j.log(e),
        Object.assign(
          this,
          j.getJSON('YouTubeAdvertiseInfo', {
            whiteNo: [],
            blackNo: [],
            whiteEml: [],
            blackEml: ['cell_divider.eml']
          })
        );
    }
    save() {
      if (this.needSave) {
        j.log('Update Config');
        let e = {
          whiteNo: this.whiteNo,
          blackNo: this.blackNo,
          whiteEml: this.whiteEml,
          blackEml: this.blackEml
        };
        j.setJSON(e, 'YouTubeAdvertiseInfo');
      }
    }
    done(e) {
      this.save();
      let t = e.bodyBytes;
      this.needProcess && (t = this.toBinary()),
        (e.headers['Content-Encoding'] = 'identity'),
        (e.headers['Content-Length'] = (t?.length ?? 0)?.toString()),
        j.done({ response: { ...e, bodyBytes: t } });
    }
    doneResponse(e) {
      this.save(),
        this.needProcess && (e = this.toBinary()),
        j.done({ bodyBytes: e });
    }
    iterate(e = {}, t, n, i) {
      let r = [];
      for (r.push(e); r.length; ) {
        let f = r.pop(),
          s = Object.keys(f);
        for (; s.length; ) {
          let o = s.pop();
          o === t
            ? n(f, r)
            : typeof f[o] == 'object' &&
              (r.push(f[o]), typeof i == 'function' && i(f, r));
        }
      }
    }
    isAdvertise(e) {
      let t = c.list(e)[0],
        n = t ? this.handleFieldNo(t) : this.handleFieldEml(e);
      return n && (this.needProcess = !0), n;
    }
    isUpload(e) {
      let t = e?.g4F318370163;
      return t && (this.needProcess = !0), t;
    }
    handleFieldNo(e) {
      let t = e.no;
      if (this.whiteNo.includes(t)) return !1;
      if (this.blackNo.includes(t)) return !0;
      let i = this.decoder.decode(e.data).includes('pagead');
      return (
        i ? this.blackNo.push(t) : this.whiteNo.push(t), (this.needSave = !0), i
      );
    }
    handleFieldEml(e) {
      let t = !1,
        n = !0,
        i = '';
      return (
        this.iterate(e, 'type', (r, f) => {
          (i = r.type.split('|')[0]),
            this.whiteEml.includes(i)
              ? (t = !1)
              : this.blackEml.includes(i) || /shorts(?!_pivot_item)/.test(i)
              ? (t = !0)
              : (n = !1),
            n && (f.length = 0);
        }),
        n ||
          (this.iterate(
            e,
            'type',
            () => {},
            (r, f) => {
              let s = c.list(r);
              for (let o of s)
                if (
                  o.data.length > 1e3 &&
                  ((t = this.decoder.decode(o.data).includes('pagead')), t)
                ) {
                  f.length = 0;
                  break;
                }
            }
          ),
          t ? this.blackEml.push(i) : this.whiteEml.push(i),
          (this.needSave = !0)),
        t
      );
    }
  };
  var ae = class extends G {
      constructor(e = 'Browse') {
        super(e);
      }
      fromBinary(e) {
        return (this.message = ti.fromBinary(e)), this;
      }
      pure() {
        return (
          this.iterate(this.message, 'n5F1', e => {
            for (let t = e.n5F1?.length - 1; t >= 0; t--)
              this.isAdvertise(e.n5F1[t]) && e.n5F1.splice(t, 1);
          }),
          this
        );
      }
      toBinary() {
        return ti.toBinary(this.message);
      }
    },
    Re = class extends ae {
      constructor(e = 'Next') {
        super(e);
      }
      fromBinary(e) {
        return (this.message = ni.fromBinary(e)), this;
      }
      toBinary() {
        return ni.toBinary(this.message);
      }
    },
    Ie = class extends G {
      constructor(e = 'Player') {
        super(e);
      }
      fromBinary(e) {
        return (this.message = si.fromBinary(e)), this;
      }
      pure() {
        this.message.p1F7?.length && (this.message.p1F7.length = 0);
        let e = this.message?.p1F2?.p2F21?.p3F151635310;
        typeof e == 'object' && (e.pip = 1);
        let t = { p2F11: { p3F64657230: { backPlay: 1 } } };
        return (
          typeof this.message?.p1F2 == 'object' &&
            Object.assign(this.message.p1F2, t),
          this.iterate(this.message, 'captionTracks', (n, i) => {
            let r = n.captionTracks;
            if (Array.isArray(r)) for (let f of r) f.isTranslatable = !0;
            (n.translationLanguages = [
              {
                languageCode: 'de',
                languageName: { runs: [{ text: 'Deutsch' }] }
              },
              {
                languageCode: 'ru',
                languageName: {
                  runs: [{ text: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439' }]
                }
              },
              {
                languageCode: 'fr',
                languageName: { runs: [{ text: 'Fran\xE7ais' }] }
              },
              {
                languageCode: 'fil',
                languageName: { runs: [{ text: 'Filipino' }] }
              },
              {
                languageCode: 'ko',
                languageName: { runs: [{ text: '\uD55C\uAD6D\uC5B4' }] }
              },
              {
                languageCode: 'ja',
                languageName: { runs: [{ text: '\u65E5\u672C\u8A9E' }] }
              },
              {
                languageCode: 'en',
                languageName: { runs: [{ text: 'English' }] }
              },
              {
                languageCode: 'vi',
                languageName: { runs: [{ text: 'Ti\u1EBFng Vi\u1EC7t' }] }
              },
              {
                languageCode: 'zh-Hant',
                languageName: {
                  runs: [{ text: '\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09' }]
                }
              },
              {
                languageCode: 'zh-Hans',
                languageName: {
                  runs: [{ text: '\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09' }]
                }
              },
              {
                languageCode: 'und',
                languageName: { runs: [{ text: '@VirgilClyne' }] }
              }
            ]),
              n?.defaultCaptionTrackIndex || (n.defaultCaptionTrackIndex = 0),
              (i.length = 0);
          }),
          (this.needProcess = !0),
          this
        );
      }
      toBinary() {
        return si.toBinary(this.message);
      }
    },
    xe = class extends ae {
      constructor(e = 'Search') {
        super(e);
      }
      fromBinary(e) {
        return (this.message = ii.fromBinary(e)), this;
      }
      toBinary() {
        return ii.toBinary(this.message);
      }
    },
    We = class extends G {
      constructor(e = 'Shorts') {
        super(e);
      }
      fromBinary(e) {
        return (this.message = ri.fromBinary(e)), this;
      }
      pure() {
        let e = this.message.t1F2?.length;
        if (e)
          for (let t = e - 1; t >= 0; t--)
            this.message.t1F2[t].n2F1?.n3F139608561?.n4F8 ||
              (this.message.t1F2.splice(t, 1), (this.needProcess = !0));
        return this;
      }
      toBinary() {
        return ri.toBinary(this.message);
      }
    },
    Oe = class extends G {
      constructor(e = 'Guide') {
        super(e);
      }
      fromBinary(e) {
        return (this.message = ai.fromBinary(e)), this;
      }
      pure() {
        return (
          this.iterate(this.message, 'g3F1', e => {
            for (let t = e.g3F1.length - 1; t >= 0; t--)
              this.isUpload(e.g3F1[t]) && e.g3F1.splice(t, 1);
          }),
          this
        );
      }
      toBinary() {
        return ai.toBinary(this.message);
      }
    },
    Ue = class extends G {
      constructor(e = 'Setting') {
        super(e);
      }
      fromBinary(e) {
        return (this.message = oi.fromBinary(e)), this;
      }
      pure() {
        this.iterate(this.message, 'num', t => {
          if (t.num === 10005) {
            let n = {
                f1: 135,
                f2: 20434,
                f3: 2,
                st2F4: this.message.st1F10.st2F4
              },
              i = {
                st4F61331416: {
                  f15: 0,
                  st5F5: {
                    st3F5: n,
                    st6F81212182: { st7F1: { st8F1: { f1: 151 }, f3: 1 } }
                  },
                  st5F6: {
                    st3F5: n,
                    st6F81212182: { st7F1: { st8F1: { f1: 151 }, f3: 0 } }
                  },
                  st3F5: n
                }
              };
            t.st3F3.push(i);
          }
        });
        let e = {
          st2F88478200: {
            f2: 1,
            f3: 1,
            st3F5: {
              f1: 2,
              f2: 20020,
              f3: 8,
              st2F4: this.message.st1F10.st2F4
            },
            f6: 0,
            f7: 1,
            f8: 1,
            f9: 1,
            f10: 1,
            f12: 1
          }
        };
        return (
          this.message.st1F6.push(JSON.parse(JSON.stringify(e))),
          (e.st2F88478200.st3F5.f1 = 1),
          (e.st2F88478200.st3F5.f3 = 9),
          (this.message.st1F7 = e),
          (this.needProcess = !0),
          this
        );
      }
      toBinary() {
        return oi.toBinary(this.message);
      }
    };
  var Si = new Map([
    ['browse', ae],
    ['next', Re],
    ['player', Ie],
    ['search', xe],
    ['reel_watch_sequence', We],
    ['guide', Oe],
    ['get_setting', Ue]
  ]);
  function li(l) {
    for (let [e, t] of Si.entries()) if (l.includes(e)) return new t();
    return null;
  }
  var Pi = li(j.request.url);
  if (Pi)
    try {
      let l = j.response.bodyBytes;
      Pi.fromBinary(l).pure().doneResponse(l);
    } catch (l) {}
  else
    j.msg(
      'YouTubeAds',
      '\u811A\u672C\u9700\u8981\u66F4\u65B0',
      '\u5916\u90E8\u8D44\u6E90 -> \u5168\u90E8\u66F4\u65B0'
    ),
      j.exit();
})();
