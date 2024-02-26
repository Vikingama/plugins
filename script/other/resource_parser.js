// prettier-ignore
let[link0,content0,subinfo]=[$resource.link,$resource.content,$resource.info],version="undefined"!=typeof $environment?Number($environment.version.split("build")[1]):0,Perror=0;
const subtag = void 0 !== $resource.tag ? $resource.tag : '';
content0 =
  -1 != content0.indexOf('DOCTYPE html') && -1 != link0.indexOf('github.com')
    ? ToRaw(content0)
    : content0;
let para = /^(http|https)\:\/\//.test(link0) ? link0 : content0.split('\n')[0],
  para1 = para
    .slice(para.indexOf('#') + 1)
    .replace(/\$type/g, 'node_type_para_prefix')
    .replace(/\$emoji/g, 'node_emoji_flag_prefix')
    .replace(/\$tag/g, 'node_tag_prefix')
    .replace(/\$index/g, 'node_index_prefix'),
  mark0 = -1 != para.indexOf('#'),
  Pinfo =
    mark0 && -1 != para1.indexOf('info=')
      ? para1.split('info=')[1].split('&')[0]
      : 0,
  ntf_flow = 0;
const Base64 = new Base64Code(),
  escapeRegExp = e => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
let link1 = link0.split('#')[0];
const ADDRes = 'quantumult-x:///add-resource?remote-resource=url-encoded-json';
let RLink0 = { filter_remote: [], rewrite_remote: [], server_remote: [] };
const Field = {
  filter: 'filter_remote',
  rewrite: 'rewrite_remote',
  server: 'server_remote'
};
SubFlow();
let Pin0 =
    mark0 && -1 != para1.indexOf('in=')
      ? para1.split('in=')[1].split('&')[0].split('+').map(decodeURIComponent)
      : null,
  Pout0 =
    !mark0 || (-1 == para.indexOf('#out=') && -1 == para.indexOf('&out='))
      ? null
      : (-1 != para.indexOf('#out=')
          ? para.split('#out=')
          : para.split('&out='))[1]
          .split('&')[0]
          .split('+')
          .map(decodeURIComponent),
  Psfilter =
    mark0 && -1 != para1.indexOf('sfilter=')
      ? Base64.decode(para1.split('sfilter=')[1].split('&')[0])
      : null,
  Preg =
    mark0 && -1 != para1.indexOf('regex=')
      ? decodeURIComponent(para1.split('regex=')[1].split('&')[0]).replace(
          /\，/g,
          ','
        )
      : null,
  Pregout =
    mark0 && -1 != para1.indexOf('regout=')
      ? decodeURIComponent(para1.split('regout=')[1].split('&')[0]).replace(
          /\，/g,
          ','
        )
      : null,
  Pregdel =
    mark0 && -1 != para1.indexOf('delreg=')
      ? decodeURIComponent(para1.split('delreg=')[1].split('&')[0]).replace(
          /\，/g,
          ','
        )
      : null,
  Phin0 =
    mark0 && -1 != para1.indexOf('inhn=')
      ? para1.split('inhn=')[1].split('&')[0].split('+').map(decodeURIComponent)
      : null,
  Phout0 =
    mark0 && -1 != para1.indexOf('outhn=')
      ? para1
          .split('outhn=')[1]
          .split('&')[0]
          .split('+')
          .map(decodeURIComponent)
      : null,
  Preplace =
    mark0 && -1 != para1.indexOf('replace=')
      ? para1.split('replace=')[1].split('&')[0]
      : null,
  Pemoji =
    mark0 && -1 != para1.indexOf('emoji=')
      ? para1.split('emoji=')[1].split('&')[0]
      : null,
  Pdbg =
    mark0 && -1 != para1.indexOf('dbg=')
      ? para1.split('dbg=')[1].split('&')[0]
      : null,
  Pudp0 =
    mark0 && -1 != para1.indexOf('udp=')
      ? para1.split('udp=')[1].split('&')[0]
      : 0,
  Ptfo0 =
    mark0 && -1 != para1.indexOf('tfo=')
      ? para1.split('tfo=')[1].split('&')[0]
      : 0,
  Prname =
    mark0 && /(^|\&)rename=/.test(para1)
      ? para1
          .split(/(^|\&)rename\=/)[2]
          .split('&')[0]
          .split('+')
      : null,
  Psrename =
    mark0 && -1 != para1.indexOf('srename=')
      ? Base64.decode(para1.split('srename=')[1].split('&')[0])
      : null,
  Prrname =
    mark0 && -1 != para1.indexOf('rrname=')
      ? para1.split('rrname=')[1].split('&')[0].split('+')
      : null,
  Psuffix =
    mark0 && -1 != para1.indexOf('suffix=')
      ? para1.split('suffix=')[1].split('&')[0]
      : 0,
  Ppolicy =
    mark0 && -1 != para1.indexOf('policy=')
      ? decodeURIComponent(para1.split('policy=')[1].split('&')[0])
      : 'Shawn',
  Ppolicyset =
    mark0 && -1 != para1.indexOf('pset=')
      ? decodeURIComponent(para1.split('pset=')[1].split('&')[0])
      : '',
  Pcert0 =
    mark0 && -1 != para1.indexOf('cert=')
      ? para1.split('cert=')[1].split('&')[0]
      : 0,
  Psort0 =
    mark0 && -1 != para1.indexOf('sort=')
      ? para1.split('sort=')[1].split('&')[0]
      : 0,
  PsortX =
    mark0 && -1 != para1.indexOf('sortx=')
      ? para1.split('sortx=')[1].split('&')[0]
      : 0,
  PTls13 =
    mark0 && -1 != para1.indexOf('tls13=')
      ? para1.split('tls13=')[1].split('&')[0]
      : 0,
  Pntf0 =
    mark0 && -1 != para1.indexOf('ntf=')
      ? para1.split('ntf=')[1].split('&')[0]
      : 2,
  Phide =
    mark0 && -1 != para1.indexOf('hide=')
      ? para1.split('hide=')[1].split('&')[0]
      : 1,
  Pb64 =
    mark0 && -1 != para1.indexOf('b64=')
      ? para1.split('b64=')[1].split('&')[0]
      : 0,
  emojino = [
    ' 0️⃣ ',
    ' 1⃣️ ',
    ' 2⃣️ ',
    ' 3⃣️ ',
    ' 4⃣️ ',
    ' 5⃣️ ',
    ' 6⃣️ ',
    ' 7⃣️ ',
    ' 8⃣️ ',
    ' 9⃣️ ',
    ' 🔟 '
  ],
  pfi = mark0 && Pin0 ? 'in=' + Pin0.join(', ') + ',  ' : '',
  pfo = mark0 && Pout0 ? 'out=' + Pout0.join(', ') : '',
  pfihn = mark0 && Phin0 ? 'inhn=' + Phin0.join(', ') + ',  ' : '',
  pfohn = mark0 && Phout0 ? 'outhn=' + Phout0.join(', ') : '',
  Pcnt =
    mark0 && -1 != para1.indexOf('cnt=')
      ? para1.split('cnt=')[1].split('&')[0]
      : 0,
  Pcap =
    mark0 && -1 != para1.indexOf('cap=')
      ? para1.split('cap=')[1].split('&')[0]
      : '',
  Pptn =
    mark0 && -1 != para1.indexOf('ptn=')
      ? para1.split('ptn=')[1].split('&')[0]
      : '',
  Pnptn =
    mark0 && -1 != para1.indexOf('npt=')
      ? para1.split('npt=')[1].split('&')[0]
      : '',
  Pcdn =
    mark0 && -1 != para1.indexOf('cdn=')
      ? para1.split('cdn=')[1].split('&')[0]
      : '',
  [flow, exptime, errornode, total] = '',
  Pdel =
    mark0 && -1 != para1.indexOf('del=')
      ? para1.split('del=')[1].split('&')[0]
      : 0,
  typeU =
    mark0 && -1 != para1.indexOf('type=')
      ? para1.split('type=')[1].split('&')[0]
      : '',
  Pfcr =
    mark0 && -1 != para1.indexOf('fcr=')
      ? para1.split('fcr=')[1].split('&')[0]
      : '',
  Pvia =
    mark0 && -1 != para1.indexOf('via=')
      ? para1.split('via=')[1].split('&')[0]
      : '',
  Paead =
    mark0 && -1 != para1.indexOf('aead=')
      ? para1.split('aead=')[1].split('&')[0]
      : '',
  Phost =
    !mark0 || (-1 == para.indexOf('#host=') && -1 == para.indexOf('&host='))
      ? ''
      : (-1 != para.indexOf('#host=')
          ? para.split('#host=')
          : para.split('&host='))[1].split('&')[0],
  Pcsha256 =
    mark0 && -1 != para1.indexOf('csha=') && version >= 646
      ? para1.split('csha=')[1].split('&')[0]
      : '',
  Ppsha256 =
    mark0 && -1 != para1.indexOf('psha=') && version >= 646
      ? para1.split('psha=')[1].split('&')[0]
      : '',
  typeQ = $resource.type ? $resource.type : 'unsupported',
  PRelay =
    mark0 && -1 != para1.indexOf('relay=')
      ? decodeURIComponent(para1.split('relay=')[1].split('&')[0])
      : '',
  PUOT =
    mark0 && -1 != para1.indexOf('uot=') && version >= 665
      ? para1.split('uot=')[1].split('&')[0]
      : '',
  PcheckU =
    mark0 && -1 != para1.indexOf('checkurl=')
      ? decodeURIComponent(para1.split('checkurl=')[1].split('&')[0])
      : '';
typeQ = '' != PRelay ? 'server' : typeQ;
let typec = '',
  Pflow =
    mark0 && -1 != para1.indexOf('flow=')
      ? para1.split('flow=')[1].split('&')[0]
      : 0,
  PProfile =
    mark0 && -1 != para1.indexOf('profile=')
      ? para1.split('profile=')[1].split('&')[0]
      : 0,
  Palpn =
    mark0 && -1 != para1.indexOf('alpn=') && version >= 712
      ? para1.split('alpn=')[1].split('&')[0]
      : '',
  Pobfs =
    mark0 && -1 != para1.indexOf('obfs=') && version >= 770
      ? para1.split('obfs=')[1].split('&')[0]
      : '',
  Psession =
    mark0 && -1 != para1.indexOf('tsession=') && version >= 771
      ? para1.split('tsession=')[1].split('&')[0]
      : '',
  RegoutList = [],
  ADDres = 'quantumult-x:///add-resource?remote-resource=url-encoded-json',
  RLink =
    '{\n  "server_remote": [\n    sremoteposition\n  ],\n  "filter_remote": [\n    fremoteposition\n  ],\n  "rewrite_remote": [\n    rremoteposition\n  ]\n}',
  ProfileInfo = { server: '', filter: '', rewrite: '' };
function VCheck(e) {
  return (
    (cnts = e
      .split('\n')
      .filter(Boolean)
      .map(e => e.trim())
      .filter(e => /^http/.test(e))
      .map(e => '"' + e + '"')),
    (cnts = cnts.join(',\n')),
    cnts
  );
}
function Profile_Handle() {
  let e = content0;
  (PProfile = 1 == PProfile ? '001' : PProfile),
    (PProfile = 8 == PProfile ? '010' : PProfile),
    (PProfile = 9 == PProfile ? '011' : PProfile),
    (srm =
      e.split('[server_remote]')[1] && '1' == String(PProfile)[0]
        ? VCheck(e.split('[server_remote]')[1].split('[')[0])
        : ''),
    (frm =
      e.split('[filter_remote]')[1] && '1' == String(PProfile)[1]
        ? VCheck(e.split('[filter_remote]')[1].split('[')[0])
        : ''),
    (rrm =
      e.split('[rewrite_remote]')[1] && '1' == String(PProfile)[2]
        ? VCheck(e.split('[rewrite_remote]')[1].split('[')[0])
        : ''),
    (RLink = RLink.replace('sremoteposition', srm)
      .replace('fremoteposition', frm)
      .replace('rremoteposition', rrm)),
    (ADDres = ADDres.replace('url-encoded-json', encodeURIComponent(RLink)));
}
let Finfo = {};
if (0 != Pflow) {
  Pflow = Pflow.split(':');
  let e = Date.parse(new Date(Pflow[0])) / 1e3,
    t = Pflow[1] ? 1024 * Pflow[1] * 1024 * 1024 : 0,
    s = Pflow[2] ? 1024 * Pflow[2] * 1024 * 1024 : 0,
    r = 0 != t ? t - s : 1,
    i = { bytes_used: s, bytes_remaining: r, expire_date: e };
  Finfo = i;
}
let pat = [];
(pat[0] = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'k',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]),
  (pat[1] = [
    '🅰',
    '🅱',
    '🅲',
    '🅳',
    '🅴',
    '🅵',
    '🅶',
    '🅷',
    '🅸',
    '🅹',
    '🅺',
    '🅻',
    '🅼',
    '🅽',
    '🅾',
    '🅿',
    '🅺',
    '🆁',
    '🆂',
    '🆃',
    '🆄',
    '🆅',
    '🆆',
    '🆇',
    '🆈',
    '🆉'
  ]),
  (pat[2] = [
    '🄰',
    '🄱',
    '🄲',
    '🄳',
    '🄴',
    '🄵',
    '🄶',
    '🄷',
    '🄸',
    '🄹',
    '🄺',
    '🄻',
    '🄼',
    '🄽',
    '🄾',
    '🄿',
    '🄺',
    '🅁',
    '🅂',
    '🅃',
    '🅄',
    '🅅',
    '🅆',
    '🅇',
    '🅈',
    '🅉'
  ]),
  (pat[3] = [
    '𝐀',
    '𝐁',
    '𝐂',
    '𝐃',
    '𝐄',
    '𝐅',
    '𝐆',
    '𝐇',
    '𝐈',
    '𝐉',
    '𝐊',
    '𝐋',
    '𝐌',
    '𝐍',
    '𝐎',
    '𝐏',
    '𝐊',
    '𝐑',
    '𝐒',
    '𝐓',
    '𝐔',
    '𝐕',
    '𝐖',
    '𝐗',
    '𝐘',
    '𝐙'
  ]),
  (pat[4] = [
    '𝗮',
    '𝗯',
    '𝗰',
    '𝗱',
    '𝗲',
    '𝗳',
    '𝗴',
    '𝗵',
    'i',
    '𝗷',
    '𝗸',
    '𝗹',
    '𝗺',
    '𝗻',
    '𝗼',
    '𝗽',
    '𝗸',
    '𝗿',
    '𝘀',
    '𝐭',
    '𝘂',
    '𝘃',
    '𝘄',
    '𝘅',
    '𝘆',
    '𝘇'
  ]),
  (pat[5] = [
    '𝔸',
    '𝔹',
    'ℂ',
    '𝔻',
    '𝔼',
    '𝔽',
    '𝔾',
    'ℍ',
    '𝕀',
    '𝕁',
    '𝕂',
    '𝕃',
    '𝕄',
    'ℕ',
    '𝕆',
    'ℙ',
    '𝕂',
    'ℝ',
    '𝕊',
    '𝕋',
    '𝕌',
    '𝕍',
    '𝕎',
    '𝕏',
    '𝕐',
    'ℤ'
  ]),
  (pat[6] = [
    '𝕒',
    '𝕓',
    '𝕔',
    '𝕕',
    '𝕖',
    '𝕗',
    '𝕘',
    '𝕙',
    '𝕚',
    '𝕛',
    '𝕜',
    '𝕝',
    '𝕞',
    '𝕟',
    '𝕠',
    '𝕡',
    '𝕜',
    '𝕣',
    '𝕤',
    '𝕥',
    '𝕦',
    '𝕧',
    '𝕨',
    '𝕩',
    '𝕪',
    '𝕫'
  ]),
  (pat[7] = [
    'ᵃ',
    'ᵇ',
    'ᶜ',
    'ᵈ',
    'ᵉ',
    'ᶠ',
    'ᵍ',
    'ʰ',
    'ⁱ',
    'ʲ',
    'ᵏ',
    'ˡ',
    'ᵐ',
    'ⁿ',
    'ᵒ',
    'ᵖ',
    'ᵒ⃒',
    'ʳ',
    'ˢ',
    'ᵗ',
    'ᵘ',
    'ᵛ',
    'ʷ',
    'ˣ',
    'ʸ',
    'ᙆ'
  ]),
  (pat[8] = [
    'ᴬ',
    'ᴮ',
    'ᒼ',
    'ᴰ',
    'ᴱ',
    'ᶠ',
    'ᴳ',
    'ᴴ',
    'ᴵ',
    'ᴶ',
    'ᴷ',
    'ᴸ',
    'ᴹ',
    'ᴺ',
    'ᴼ',
    'ᴾ',
    'ᴼ̴',
    'ᴿ',
    'ˢ',
    'ᵀ',
    'ᵁ',
    'ᵛ',
    'ᵂ',
    'ˣ',
    'ʸ',
    'ᙆ'
  ]);
let patn = [];
(patn[0] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']),
  (patn[1] = ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨']),
  (patn[2] = ['⓪', '❶', '❷', '❸', '❹', '❺', '❻', '❼', '❽', '❾']),
  (patn[3] = ['⓪', '⓵', '⓶', '⓷', '⓸', '⓹', '⓺', '⓼', '⓻', '⓽']),
  (patn[4] = ['𝟘', '𝟙', '𝟚', '𝟛', '𝟜', '𝟝', '𝟞', '𝟟', '𝟠', '𝟡']),
  (patn[5] = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹']),
  (patn[6] = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉']),
  (patn[7] = ['𝟎', '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟳', '𝟖', '𝟗']),
  (patn[8] = ['𝟶', '𝟷', '𝟸', '𝟹', '𝟺', '𝟻', '𝟼', '𝟽', '𝟾', '𝟿']);
const getValue = (e, t) => {
  try {
    return e();
  } catch (e) {
    return t;
  }
};
let type0 = '',
  flag = 1;
function Parser() {
  if (
    ((type0 = Type_Check(content0)),
    'web' != type0 && 'wrong-field' != type0 && 'JS-0' != type0)
  )
    try {
      Pdbg && $notify(link0, type0, content0), (total = ResourceParse());
    } catch (e) {
      0 == Perror && $notify();
    }
  else
    'wrong-field' == type0
      ? (version >= 670 && '' != typec
          ? (RLink0[Field[typec]].push(
              $resource.link + ', opt-parser=true, tag=下次添加资源🉑️长点❤️8⃣️'
            ),
            $notify())
          : $notify(),
        (total = ''))
      : (total = '');
  $done({ content: total });
}
if ('undefined' != typeof $resource && 0 == PProfile)
  Parser(), $done({ content: total, info: Finfo });
else if (0 != PProfile) {
  try {
    Profile_Handle();
  } catch (e) {
    0 == Perror && $notify();
  }
  (openlink = { 'open-url': ADDres }),
    $notify(),
    (total = ProfileInfo[typeQ]),
    $done({ content: total });
}
function ParseUnknown(e) {
  try {
    (e = JSON.parse(e)) && $notify();
  } catch (t) {
    /error|block|invalid|support/.test(e.toLowerCase()), $notify();
  }
}
function ResourceParse() {
  if ('Subs-B64Encode' == type0)
    Pdbg && $notify('original content', 'node-b64', content0),
      (total = Subs2QX(Base64.decode(content0), Pudp0, Ptfo0, Pcert0, PTls13));
  else if ('Subs' == type0)
    total = Subs2QX(content0, Pudp0, Ptfo0, Pcert0, PTls13);
  else if ('QuanX' == type0 || 'Clash' == type0 || 'Surge' == type0)
    total = Subs2QX(isQuanX(content0).join('\n'), Pudp0, Ptfo0, Pcert0, PTls13);
  else if ('sgmodule' == type0)
    (flag = 2),
      (total = Rewrite_Filter(
        isQuanXRewrite(content0.split('\n')),
        Pin0,
        Pout0,
        Preg,
        Pregout
      )),
      Preplace && (total = ReplaceReg(total, Preplace)),
      (total = total.filter((e, t) => total.indexOf(e) == t)),
      (total = Pcdn ? CDN(total) : total.join('\n'));
  else if ('rewrite' == type0)
    (flag = 2),
      (total = Rewrite_Filter(
        isQuanXRewrite(content0.split('\n')),
        Pin0,
        Pout0,
        Preg,
        Pregout
      )),
      Preplace && (total = ReplaceReg(total, Preplace)),
      (total = total.filter((e, t) => total.indexOf(e) == t)),
      (total = Pcdn ? CDN(total) : total.join('\n'));
  else if ('Rule' == type0)
    (flag = 3),
      (total = Rule_Handle(
        content0
          .split('\n')
          .map(e => e.trim())
          .filter(Boolean),
        Pout0,
        Pin0
      ).filter(Boolean)),
      Preg &&
        0 != total.length &&
        ((total = total.map(Regex).filter(Boolean)),
        RegCheck(total, '分流引用', 'regex', Preg)),
      Pregout &&
        0 != total.length &&
        ((total = total.map(RegexOut).filter(Boolean)),
        RegCheck(total, '分流引用', 'regout', Pregout)),
      Preplace && (total = ReplaceReg(total, Preplace)),
      Ppolicyset && (total = policy_sets(total, Ppolicyset)),
      (total =
        total.length < 100
          ? total.filter((e, t) => total.indexOf(e) == t)
          : total),
      (total = total.join('\n'));
  else if ('' == content0.trim()) $notify(), (flag = 0);
  else if ('sub-http' == type0) {
    let e = VCheck(
      String(
        Base64.decode(content0.split('sub://')[1].split('#')[0]) +
          ', opt-parser=true, tag=' +
          new Date().getTime()
      )
    );
    RLink = RLink.replace('sremoteposition', e)
      .replace('fremoteposition', '')
      .replace('rremoteposition', '');
    let t = ADDres.replace('url-encoded-json', encodeURIComponent(RLink));
    (openlink = { 'open-url': t }), (flag = -1), (total = '');
  } else
    'unknown' == type0
      ? (ParseUnknown(content0), (flag = -1))
      : 'profile' == type0
      ? ((PProfile = '111'),
        Profile_Handle(),
        (openlink = { 'open-url': ADDres }),
        (flag = -1),
        (total = ''))
      : 'JS-0' == type0 && (total = '');
  return (
    1 == flag
      ? ((total = isQuanX(total.filter(Boolean).join('\n'))),
        1 == Pinfo && 0 == ntf_flow && flowcheck(total),
        (Pin0 || Pout0) && (total = Filter(total, Pin0, Pout0)),
        Preg &&
          ((total = total.map(Regex).filter(Boolean)),
          RegCheck(total, '节点订阅', 'regex', Preg)),
        Pregout &&
          ((total = total.map(RegexOut).filter(Boolean)),
          RegCheck(total, '节点订阅', 'regout', Pregout)),
        Psfilter && (total = FilterScript(total, Psfilter)),
        Prrname && ((Prn = Prrname), (total = total.map(Rename))),
        Pregdel && ((delreg = Pregdel), (total = total.map(DelReg))),
        Psrename && (total = RenameScript(total, Psrename)),
        Preplace && (total = ReplaceReg(total, Preplace)),
        Prname &&
          ((Prn = Prname),
          (total = total.map(Rename)),
          1 == Pdbg && $notify('rename', 'content', total)),
        Pemoji && (total = emoji_handle(total, Pemoji)),
        total.length > 0
          ? ((1 != Psuffix && -1 != Psuffix) ||
              (total =
                1 == Psuffix ? total.map(type_suffix) : total.map(type_prefix)),
            (total = total
              .map(type_handle)
              .map(emoji_prefix_handle)
              .map(tag_handle)),
            Psort0 && (total = QXSort(total, Psort0)),
            (total =
              -1 != para1.indexOf('node_index_prefix')
                ? index_handle(total)
                : total),
            (total = TagCheck_QX(total).join('\n')),
            1 == PUOT && (total = total.split('\n').map(UOT).join('\n')),
            1 == Pcnt && $notify(),
            (total =
              '' == PRelay
                ? Base64.encode(total)
                : ServerRelay(total.split('\n'), PRelay)),
            1 == Pflow
              ? $done({
                  content: total,
                  info: {
                    bytes_used: 3073741824,
                    bytes_remaining: 2147483648,
                    expire_date: 1854193966
                  }
                })
              : $done({ content: total }))
          : (0 == Perror && $notify(),
            (total = errornode),
            $done({ content: errornode })))
      : 0 == flag
      ? ((total = errornode), $done({ content: errornode }))
      : -1 == flag && ((total = content0), $done({ content: content0 })),
    1 == Pcnt &&
      1 != flag &&
      $notify(
        '解析后最终返回内容',
        '总数量： ' + total.split('\n').length,
        total
      ),
    total
  );
}
function SubFlow() {
  if (1 == Pinfo && subinfo) {
    let t = subinfo.replace(/ /g, '').toLowerCase();
    (parseFloat(t.split('total=')[1].split(',')[0]) / 1024 ** 3).toFixed(2),
      (
        (parseFloat(
          -1 != t.indexOf('upload') ? t.split('upload=')[1].split(',')[0] : '0'
        ) +
          parseFloat(t.split('download=')[1].split(',')[0])) /
        1024 ** 3
      ).toFixed(2),
      (
        parseFloat(t.split('total=')[1].split(',')[0]) / 1024 ** 3 -
        (parseFloat(
          -1 != t.indexOf('upload') ? t.split('upload=')[1].split(',')[0] : '0'
        ) +
          parseFloat(t.split('download=')[1].split(',')[0])) /
          1024 ** 3
      ).toFixed(2);
    if (-1 != t.indexOf('expire=')) {
      var e = new Date(1e3 * parseFloat(t.split('expire=')[1].split(',')[0]));
      let s = e.getFullYear(),
        r = e.getMonth() + 1 < 10 ? '0' + (e.getMonth() + 1) : e.getMonth() + 1,
        i = e.getDate() < 10 ? '0' + e.getDate() : e.getDate();
      e = '过期时间: ' + s + '-' + r + '-' + i;
    } else e = '';
    (ntf_flow = 1), $notify();
  }
}
function flowcheck(e) {
  for (let t = 0; t < e.length; t++) {
    let s = e[t],
      r = s.slice(s.indexOf('tag')),
      i = r.slice(r.indexOf('=') + 1);
    -1 != s.indexOf('剩余流量')
      ? (flow = i)
      : -1 != s.indexOf('期时间') && (exptime = i);
  }
  (flow = flow || '⚠️ 该订阅未返回任何流量信息'),
    (exptime = exptime || '⚠️ 该订阅未返回套餐时间信息'),
    '' != flow && $notify();
}
function RegCheck(e, t, s, r) {
  if (0 == e.length) $notify();
  else if (('节点订阅' != t && 0 != Pntf0) || ('节点订阅' == t && 1 == Pntf0)) {
    e.length <= 10 ? emojino[e.length] : e.length;
    $notify();
  }
}
function Type_Check(e) {
  let t = 'unknown',
    s = [
      'host,',
      '-suffix,',
      'domain,',
      '-keyword,',
      'ip-cidr,',
      'ip-cidr6,',
      'geoip,',
      'user-agent,',
      'ip6-cidr,',
      'ip-asn'
    ],
    r = ['shadowsocks=', 'trojan=', 'vmess=', 'http=', 'socks5='],
    i = [
      '=ss,',
      '=vmess,',
      '=trojan,',
      '=http,',
      '=custom,',
      '=https,',
      '=shadowsocks',
      '=shadowsocksr',
      '=sock5',
      '=sock5-tls'
    ],
    n = [
      '[filter_local]',
      '[filter_remote]',
      '[server_local]',
      '[server_remote]'
    ],
    o = 'DOCTYPE html',
    l = e.replace(/ /g, '');
  const p = e => -1 != l.toLowerCase().indexOf(e),
    a = e => -1 != l.toLowerCase().indexOf(e.toLowerCase()),
    f = t => -1 != e.indexOf(t),
    c = t => -1 != e.indexOf(t);
  let d = e.split('\n');
  return (
    (-1 == e.indexOf(o) && -1 == e.indexOf('doctype html')) ||
    !link0.indexOf(!1)
      ? 'nodes' == typeU && 'server' == typeQ
        ? (t =
            'unsupported' == typeQ || 'server' == typeQ
              ? 'Subs'
              : 'wrong-field')
        : ['proxies:'].some(a) || 'clash' == typeU
        ? ((t =
            'unsupported' == typeQ || 'server' == typeQ
              ? 'Clash'
              : 'wrong-field'),
          (typec = 'server'),
          (content0 = Clash2QX(e)))
        : (((![
            '[Script]',
            '[Rule]',
            '[URL Rewrite]',
            '[Map Local]',
            '\nhttp-r',
            'script-path'
          ].some(f) &&
            -1 == para1.indexOf('dst=rewrite')) ||
            -1 != para1.indexOf('dst=filter') ||
            -1 != e.indexOf('[Proxy]')) &&
            'module' != typeU) ||
          'nodes' == typeU ||
          'rule' == typeU ||
          'filter' == typeQ
        ? (!/(^hostname|\nhostname)\s*\=/.test(l) &&
            ![
              ' url 302',
              ' url 307',
              ' url reject',
              ' url script',
              ' url req',
              ' url res',
              ' url echo',
              ' url-and-header 302',
              ' url-and-header 307',
              ' url-and-header reject',
              ' url-and-header script',
              ' url-and-header req',
              ' url-and-header res',
              ' url-and-header echo'
            ].some(f)) ||
          -1 != para1.indexOf('dst=filter') ||
          -1 != l.indexOf('securehostname') ||
          /module|nodes|rule/.test(typeU) ||
          (s.some(p) && 'filter' == typeQ) ||
          ('rewrite' != typeQ && n.some(c))
          ? !(
              (s.some(p) && -1 == e.indexOf(o)) ||
              'rule' == typeU ||
              -1 != para1.indexOf('dst=filter')
            ) ||
            'nodes' == typeU ||
            ('server' == typeQ && (r.some(a) || i.some(a)))
            ? 'domain-set' == typeU
              ? ((typec = 'filter-domain-set'),
                (t =
                  'unsupported' == typeQ || 'filter' == typeQ
                    ? 'Rule'
                    : 'wrong-field'),
                (content0 = Domain2Rule(content0)))
              : 'filter' == typeQ && -1 == e.indexOf('payload:')
              ? ((typec = 'filter-list'),
                (t =
                  'unsupported' == typeQ || 'filter' == typeQ
                    ? 'Rule'
                    : 'wrong-field'),
                (content0 = content0
                  .split('\n')
                  .map(rule_list_handle)
                  .join('\n')))
              : 0 == l.indexOf('sub://')
              ? ((typec = 'sub-http'), (t = 'sub-http'))
              : 'filter' == typeQ && -1 != e.indexOf('payload:')
              ? ((typec = 'Clash-Provider'),
                (t =
                  'unsupported' == typeQ || 'filter' == typeQ
                    ? 'Rule'
                    : 'wrong-field'))
              : d.length >= 1 &&
                [
                  'ss://',
                  'vmess://',
                  'ssr://',
                  'trojan://',
                  'ssd://',
                  '\nhttps://',
                  '\nhttp://',
                  'socks://',
                  'ssocks://',
                  'vless://'
                ].some(e => -1 != l.toLowerCase().indexOf(e.toLowerCase())) &&
                !/\[(Proxy|filter_local)\]/.test(e)
              ? ((typec = 'server-uri'),
                (t =
                  'unsupported' == typeQ || 'server' == typeQ || 'uri' == typeQ
                    ? 'Subs'
                    : 'wrong-field'))
              : (-1 != l.indexOf('tag=') &&
                  r.some(a) &&
                  !/\[(Proxy|filter_local)\]/.test(e)) ||
                'list' == typeU
              ? ((typec = 'server-quanx'),
                (t =
                  'unsupported' == typeQ || 'server' == typeQ || 'uri' == typeQ
                    ? 'Subs'
                    : 'wrong-field'))
              : -1 != e.indexOf('[Proxy]')
              ? ((typec = 'server-surge'),
                (t =
                  'unsupported' == typeQ || 'server' == typeQ || 'uri' == typeQ
                    ? 'Surge'
                    : 'wrong-field'),
                (content0 = Surge2QX(content0).join('\n')))
              : (i.some(a) && !/\[(Proxy|filter_local)\]/.test(e)) ||
                'list' == typeU
              ? ((typec = 'server-surge'),
                (t =
                  'unsupported' == typeQ || 'server' == typeQ || 'uri' == typeQ
                    ? 'Subs'
                    : 'wrong-field'))
              : -1 != e.indexOf('[server_local]') && r.some(a)
              ? ((typec = 'server-quanx'),
                (t =
                  'unsupported' == typeQ || 'server' == typeQ || 'uri' == typeQ
                    ? 'Subs'
                    : 'wrong-field'))
              : -1 != content0.indexOf('server') &&
                -1 != content0.indexOf('server_port')
              ? ((typec = 'server-sip008'),
                (t =
                  'unsupported' == typeQ || 'server' == typeQ
                    ? 'Subs'
                    : 'wrong-field'),
                (content0 = SIP2QuanX(content0)))
              : [
                  'dm1lc3M',
                  'c3NyOi8v',
                  'CnNzOi8',
                  'dHJvamFu',
                  'c3M6Ly',
                  'c3NkOi8v',
                  'c2hhZG93',
                  'aHR0cDovLw',
                  'aHR0cHM6L',
                  'CnRyb2phbjo',
                  'aHR0cD0',
                  'aHR0cCA',
                  'U1RBVFVT'
                ].some(e => -1 != l.toLowerCase().indexOf(e.toLowerCase()))
              ? ((typec = 'server-b64'),
                (t =
                  'unsupported' == typeQ || 'server' == typeQ
                    ? 'Subs-B64Encode'
                    : 'wrong-field'))
              : n.every(c)
              ? ((typec = 'profile'), (t = 'profile'))
              : /\.js/.test(link0)
              ? ((Perror = 1), $notify(), (t = 'JS-0'))
              : 'server' == typeQ &&
                e.length > 100 &&
                ((typec = 'server-b64-unknown'),
                (t =
                  'unsupported' == typeQ || 'server' == typeQ
                    ? 'Subs-B64Encode'
                    : 'wrong-field'))
            : ((typec = 'filter'),
              (t =
                'unsupported' == typeQ || 'filter' == typeQ
                  ? 'Rule'
                  : 'wrong-field'))
          : ((typec = 'rewrite'),
            (t =
              'unsupported' == typeQ || 'rewrite' == typeQ
                ? 'rewrite'
                : 'wrong-field'))
        : ((typec = 'rewrite'),
          (t =
            'unsupported' == typeQ || 'rewrite' == typeQ
              ? 'sgmodule'
              : 'wrong-field'))
      : ($notify(), (t = 'web')),
    'X' == typeU && $notify('该链接判定类型', t + ' : ' + typec, e),
    t
  );
}
function TagCheck_QX(e) {
  typefix = {
    shadowsocks: ['𝐬𝐬', '𝐒𝐒', '🅢🅢', '🆂🆂', 'ⓢⓢ', '🅂🅂', 'SS'],
    shadowsocksr: ['𝐬𝐬𝐫', '𝐒𝐒𝐑', '🅢🅢🅡', '🆂🆂🆁', 'ⓢⓢⓡ', '🅂🅂🅁', 'SSR'],
    vmess: ['𝐯𝐦𝐞𝐬𝐬', '𝐕𝐌𝐄𝐒𝐒', '🅥🅜🅔🅢🅢', '🆅🅼🅴🆂🆂', 'ⓥⓜⓔⓢⓢ', '🅅🄼🄴🅂🅂', 'VMESS'],
    trojan: [
      '𝐭𝐫𝐨𝐣𝐚𝐧',
      '𝐓𝐑𝐎𝐉𝐀𝐍',
      '🅣🅡🅞🅙🅐🅝',
      '🆃🆁🅾🅹🅰🅽',
      'ⓣⓡⓞⓙⓐⓝ',
      '🅃🅁🄾🄹🄰🄽',
      'TROJAN'
    ],
    http: ['𝐡𝐭𝐭𝐩', '𝐇𝐓𝐓𝐏', '🅗🅣🅣🅟', '🅷🆃🆃🅿', 'ⓗⓣⓣⓟ', '🄷🅃🅃🄿', 'HTTP'],
    socks5: ['𝐬𝐨𝗰𝗸𝐬', '𝐒𝐎𝐂𝐊𝐒', '🅢🅞🅒🅚🅢', '🆂🅾🅲🅺🆂', 'ⓢⓄⒸⓀⓢ', '🅂🄾🄲🄺🅂', 'SOCKS'],
    vless: ['𝐯𝐥𝐞𝐬𝐬', '𝐕𝐋𝐄𝐒𝐒', '🅥🅛🅔🅢🅢', '🆅🅻🅴🆂🆂', 'ⓥⓛⓔⓢⓢ', '🅅🄻🄴🅂🅂', 'VLESS']
  };
  let t = e.map(e => e.trim()),
    [s, r] = [[], []],
    [i, n] = [[], []],
    o = 0;
  for (let e = 0; e < t.length; e++) {
    let o = t[e] ? t[e] : '';
    if (
      ((typefix.shadowsocks =
        -1 != o.indexOf('ssr-protocol')
          ? typefix.shadowsocksr
          : typefix.shadowsocks),
      -1 != o.replace(/ /gm, '').indexOf('tag='))
    ) {
      let e = o.slice(o.indexOf('tag')),
        t = e.slice(e.indexOf('=') + 1);
      '' == t &&
        ((tp = typefix[o.split('=')[0].trim()][3]),
        (t = tp + ' | ' + o.split('=')[1].split(',')[0].split(':')[0]),
        (o = o.split('tag')[0] + 'tag=' + t.replace('shadowsocks', 'ss')),
        i.push(t.replace('shadowsocks', 'ss')));
      let l = 0;
      for (; -1 != r.indexOf(t); )
        (t =
          0 == l
            ? t + NoReplace(l + 1)
            : t
                .split(' ')
                .slice(0, t.split(' ').length - 2)
                .join(' ') + NoReplace(l + 1)),
          (o = 1 != Pdel ? o.split('tag')[0] + 'tag=' + t : ''),
          (l += 1);
      0 != l && n.push(t),
        r.push(t),
        Pcap && (o = Capitalize(o, Pcap)),
        (Pptn || Pnptn) && (o = Pattern(o, Pptn, Pnptn)),
        (l = 0),
        o && s.push(o);
    }
  }
  return (
    '' != PcheckU && (s = s.map(Add_URL)),
    i.length >= 1 &&
      ((o = i.length <= 10 ? emojino[i.length] : i.length), $notify()),
    n.length >= 1 &&
      ((o = n.length <= 10 ? emojino[n.length] : n.length),
      ((1 != Pdel && 0 != Pntf0) || (1 == Pdel && 0 != Pntf0)) && $notify()),
    s
  );
}
function Add_URL(e) {
  return e && (e = e + ', server_check_url=' + PcheckU), e;
}
function NoReplace(e) {
  if (e) {
    for (let t = 0; t < 10; t++)
      e = e.toString().replace(new RegExp(patn[0][t], 'gmi'), patn[5][t]);
    return ' ' + e + ' ';
  }
}
function PatternN(e, t, s) {
  if (e) {
    if ('' != t)
      for (var r = 0; r < 26; r++)
        e = (e = e.toLowerCase()).replace(
          new RegExp(pat[0][r], 'gmi'),
          pat[t][r]
        );
    if ('' != s)
      for (r = 0; r < 10; r++)
        e = e.replace(new RegExp(patn[0][r], 'gmi'), patn[s][r]);
    return e;
  }
}
function Pattern(e, t, s) {
  return (
    ('' == t && '' == s) ||
      (e = e.split('tag=')[0] + 'tag=' + PatternN(e.split('tag=')[1], t, s)),
    e
  );
}
function Capitalize(e, t) {
  return (
    1 == t
      ? (e = e.split('tag=')[0] + 'tag=' + e.split('tag=')[1].toUpperCase())
      : -1 == t
      ? (e = e.split('tag=')[0] + 'tag=' + e.split('tag=')[1].toLowerCase())
      : 0 == t &&
        (e = e.split('tag=')[0] + 'tag=' + titleCase(e.split('tag=')[1])),
    e
  );
}
function titleCase(e) {
  let t = e.split(' ');
  for (let e = 0; e < t.length; e++)
    t[e] = t[e].slice(0, 1).toUpperCase() + t[e].slice(1).toLowerCase();
  return t.join(' ');
}
function type_prefix(e) {
  if ('' != e.trim())
    return (
      (typefix = {
        shadowsocks: '「𝐬𝐬」',
        vmess: '「𝐯𝐦𝐞𝐬𝐬」',
        trojan: '「𝐭𝐫𝐨𝐣𝐚𝐧」',
        http: '「𝐡𝐭𝐭𝐩」',
        socks5: '「𝐬𝐨𝗰𝗸𝐬」',
        vless: '「𝐯𝐥𝐞𝐬𝐬」'
      }),
      (typefix.shadowsocks =
        -1 != e.indexOf('ssr-protocol') ? '「𝐬𝐬𝐫」' : '「𝐬𝐬」'),
      (tp = typefix[e.split('=')[0].trim()]),
      [[e.split('tag=')[0] + 'tag=', tp, e.split('tag=')[1]].join(' ')].join(
        ' '
      )
    );
}
function type_suffix(e) {
  if ('' != e.trim())
    return (
      (typefix = {
        shadowsocks: '「𝐬𝐬」',
        vmess: '「𝐯𝐦𝐞𝐬𝐬」',
        trojan: '「𝐭𝐫𝐨𝐣𝐚𝐧」',
        http: '「𝐡𝐭𝐭𝐩」',
        vless: '「𝐯𝐥𝐞𝐬𝐬」'
      }),
      (typefix.shadowsocks =
        -1 != e.indexOf('ssr-protocol') ? '「𝐬𝐬𝐫」' : '「𝐬𝐬」'),
      (tp = typefix[e.split('=')[0].trim()]),
      [e, tp].join(' ')
    );
}
function getnode_type(e, t) {
  if ('' != e.trim() && -1 != e.indexOf('tag='))
    return (
      (t = /^(0|1|2|3|4|5|6|7)$/.test(t) ? t : 8),
      (typefix = {
        shadowsocks: ['𝐬𝐬', '𝐒𝐒', '🅢🅢', '🆂🆂', 'ⓢⓢ', '🅂🅂', '𝕊𝕊', 'ˢˢ', 'SS'],
        shadowsocksr: [
          '𝐬𝐬𝐫',
          '𝐒𝐒𝐑',
          '🅢🅢🅡',
          '🆂🆂🆁',
          'ⓢⓢⓡ',
          '🅂🅂🅁',
          '𝕊𝕊ℝ',
          'ˢˢʳ',
          'SSR'
        ],
        vmess: [
          '𝐯𝐦𝐞𝐬𝐬',
          '𝐕𝐌𝐄𝐒𝐒',
          '🅥🅜🅔🅢🅢',
          '🆅🅼🅴🆂🆂',
          'ⓥⓜⓔⓢⓢ',
          '🅅🄼🄴🅂🅂',
          '𝕍𝕞𝕖𝕤𝕤',
          'ᵛᵐᵉˢˢ',
          'VMESS'
        ],
        trojan: [
          '𝐭𝐫𝐨𝐣𝐚𝐧',
          '𝐓𝐑𝐎𝐉𝐀𝐍',
          '🅣🅡🅞🅙🅐🅝',
          '🆃🆁🅾🅹🅰🅽',
          'ⓣⓡⓞⓙⓐⓝ',
          '🅃🅁🄾🄹🄰🄽',
          '𝕋𝕣𝕠𝕛𝕒𝕟',
          'ᵀʳᵒʲᵃⁿ',
          'TROJAN'
        ],
        http: [
          '𝐡𝐭𝐭𝐩',
          '𝐇𝐓𝐓𝐏',
          '🅗🅣🅣🅟',
          '🅷🆃🆃🅿',
          'ⓗⓣⓣⓟ',
          '🄷🅃🅃🄿',
          '𝕙𝕥𝕥𝕡',
          'ʰᵗᵗᵖ',
          'HTTP'
        ],
        socks5: [
          '𝐬𝐨𝗰𝗸𝐬',
          '𝐒𝐎𝐂𝐊𝐒',
          '🅢🅞🅒🅚🅢',
          '🆂🅾🅲🅺🆂',
          'ⓢⓞⓒⓚⓢ',
          '🅂🄾🄲🄺🅂',
          '𝕤𝕠𝕔𝕜𝕤',
          'ˢᵒᶜᵏˢ',
          'SOCKS'
        ],
        vless: [
          '𝐯𝐥𝐞𝐬𝐬',
          '𝐕𝐋𝐄𝐒𝐒',
          '🅥🅛🅔🅢🅢',
          '🆅🅻🅴🆂🆂',
          'ⓥⓛⓔⓢⓢ',
          '🅅🄻🄴🅂🅂',
          '𝕍𝕝𝕖𝕤𝕤',
          'ᵛˡᵉˢˢ',
          'VLESS'
        ]
      }),
      (typefix.shadowsocks =
        -1 != e.indexOf('ssr-protocol')
          ? typefix.shadowsocksr
          : typefix.shadowsocks),
      (tp = typefix[e.split('=')[0].trim()][t]),
      tp
    );
}
function type_handle(e) {
  return (
    -1 != e.indexOf('node_type_para_prefix') &&
      (e = e.replace(
        /node_type_para_prefix(\d{0,1})/g,
        getnode_type(e, e.split('node_type_para_prefix')[1][0])
      )),
    e
  );
}
function index_handle(e) {
  (items = e.map(e => e.trim()).filter(Boolean)),
    Array.from(new Array(items.length), (e, t) => t + 1);
  for (let e = 0; e < items.length; e++)
    -1 != items[e].indexOf('node_index_prefix') &&
      ((ind = items[e].split('node_index_prefix')[1][0]),
      (ind = /^(0|1|2|3|4|5|6|7|8)$/.test(ind) ? ind : 0),
      (items[e] = items[e].replace(
        /node_index_prefix(\d{0,1})/g,
        PatternN((e + 1).toString(), '', ind)
      )));
  return items;
}
function emoji_prefix_handle(e) {
  return (
    -1 != e.indexOf('node_emoji_flag_prefix') &&
      (e = e.replace(
        /node_emoji_flag_prefix\d{0,1}/g,
        getnode_emoji(e, e.split('node_emoji_flag_prefix')[1][0])
      )),
    e
  );
}
function getnode_emoji(e, t) {
  if (((t = /^(1|2)$/.test(t) ? t : 2), -1 != e.indexOf('tag=')))
    return get_emoji(t, e.split('tag=')[1])[1];
}
function tag_handle(e) {
  return (
    -1 != e.indexOf('node_tag_prefix') &&
      ((ptnn = /\d/.test(e.split('node_tag_prefix')[1][0])
        ? e.split('node_tag_prefix')[1][0]
        : ''),
      (nptnn = /\d/.test(e.split('node_tag_prefix')[1][1])
        ? e.split('node_tag_prefix')[1][1]
        : ''),
      (e = e.replace(
        /node_tag_prefix\d{0,2}/g,
        PatternN(subtag, ptnn, nptnn)
      ))),
    e
  );
}
function URI_TAG(e, t) {
  return e.split('tag=')[0] + 'tag=' + t;
}
function ServerRelay(e, t) {
  let s = [];
  for (let r = 0; r < e.length; r++)
    (serverA =
      -1 == e[r].indexOf('-host')
        ? e[r].split('=')[1].split(':')[0].trim()
        : e[r].split('-host')[1].split('=')[1].split(',')[0].trim()),
      (type = /^[a-z]/.test(serverA) || /[a-z]$/.test(serverA) ? 'host' : 'ip'),
      (rst =
        'ip' == type
          ? 'ip-cidr,' + serverA + '/32,' + t
          : 'host-suffix,' + serverA + ',' + t),
      s.push(rst);
  return s.join('\n');
}
function rawtest(e) {
  if (RegExp('.*js-file-line".*?</td>', 'i').test(e))
    return e
      .replace(/(.*js-file-line\"\>)(.*?)(\<\/td\>)/g, '$2')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .trim();
}
function ToRaw(e) {
  e = e.split('\n').map(rawtest).filter(Boolean).join('\n');
  link0.replace('github.com', 'raw.githubusercontent.com').replace('/blob', '');
  return (e || -1 != content0.indexOf('gridcell')) && $notify(), e;
}
function CDN(e) {
  return e
    .join('\n')
    .replace(
      /https:\/\/raw.githubusercontent.com\/(.*?)\/(.*?)\/(.*)/gim,
      'https://fastly.jsdelivr.net/gh/$1/$2@$3'
    );
}
function HOST_Handle(e, t) {
  return (
    -1 == (t = 'host=' + t + ',').indexOf('☠️')
      ? (e = e.replace(/host\s*\=(.*?)\,/, t))
      : ((t = t.split('☠️')[0]),
        /-host\s*\=/.test(e)
          ? (e = e.replace(/host\s*\=(.*?)\,/, t + ', '))
          : /over-tls\s*\=\s*true/.test(e)
          ? (e = e + ', tls-' + t)
          : /obfs\s*\=/.test(e) && (e = e + ', obfs-' + t)),
    e
  );
}
function OBFS_Handle(e, t) {
  return (
    (t =
      'shttp' == t
        ? 'obfs=shadowsocks-http'
        : 'vhttp' == t
        ? 'obfs=vmess-http'
        : 'invalid'),
    /obfs\s*\=\s*http/.test(e) &&
      'invalid' != t &&
      (e = e.replace(/obfs\s*\=\s*http/, t)),
    e
  );
}
function Session_Handle(e, t) {
  let s = ', tls-no-session-ticket=true',
    r = ', tls-no-session-reuse=true';
  return 0 == t ? (e += s) : 1 == t ? (e += r) : 2 == t && (e = e + s + r), e;
}
function SHA256_Handle(e, t, s) {
  return (
    (-1 == e.indexOf('over-tls=true') && -1 == e.indexOf('obfs=wss')) ||
      ((e = e.replace(/tls-verification\s*\=\s*false(\s*)\,/, '')),
      (e =
        '' != t ? e.replace(/tag\s*\=/, 'tls-cert-sha256=' + t + ', tag=') : e),
      (e =
        '' != s
          ? e.replace(/tag\s*\=/, 'tls-pubkey-sha256=' + s + ', tag=')
          : e)),
    e
  );
}
function ALPN_Handle(e, t) {
  return (
    (cnti = e.replace(/\s/gim, '')),
    (-1 == cnti.indexOf('obfs=over-tls') &&
      -1 == cnti.indexOf('over-tls=true')) ||
      (e = e + ', tls-alpn=' + t),
    e
  );
}
function Mock2QXReject(e, t) {
  return /dict/i.test(t)
    ? e.replace(/ /g, '').split('data=')[0] + ' url reject-dict'
    : /array/i.test(t)
    ? e.replace(/ /g, '').split('data=')[0] + ' url reject-array'
    : /(txt|html)/i.test(t)
    ? e.replace(/ /g, '').split('data=')[0] + ' url reject-200'
    : /(png|jpg|gif)/i.test(t)
    ? e.replace(/ /g, '').split('data=')[0] + ' url reject-img'
    : e.replace(/ /g, '').split('data=')[0] + ' url reject';
}
function URX2QX(e) {
  let t = [],
    s = '';
  e = e.split('\n');
  let r = ['//', '#', ';'];
  for (var i = 0; i < e.length; i++) {
    const n = t => 0 == e[i].indexOf(t);
    if (!r.some(n))
      if ('URL-REGEX' == e[i].slice(0, 9))
        (-1 == e[i].indexOf('REJECT') && 2 != e[i].split(',').length) ||
          ('*' !=
            e[i]
              .replace(/ /g, '')
              .split(',REJECT')[0]
              .split('GEX,')[1]
              .slice(0, 1) &&
            ((s =
              e[i].replace(/ /g, '').split(',REJECT')[0].split('GEX,')[1] +
              ' url reject-200'),
            t.push(s)));
      else if (-1 != e[i].indexOf('data=') && -1 != e.indexOf('[Map Local]')) {
        let r = e[i].match(/data=.+\/(.+)"/)
          ? e[i].match(/data=.+\/(.+)"/)[1]
          : null;
        if (!/header=".*content-type/i.test(e[i]) && /blank/i.test(r))
          s = Mock2QXReject(e[i], r);
        else if (
          ((s =
            e[i].replace(/ /g, '').split('data=')[0].replace(/\"/g, '') +
            ' url echo-response text/html echo-response ' +
            e[i]
              .split('data=')[1]
              .split(' ')[0]
              .replace(/\"/g, '')
              .replace(/ /g, '')),
          -1 != e[i].indexOf('header=') && -1 != e[i].indexOf('Content-Type:'))
        ) {
          let t = e[i]
            .split('header=')[1]
            .split('Content-Type:')[1]
            .split(',')[0]
            .replace(/\"/g, '');
          s = s.replace(/text\/html/g, t);
        }
        t.push(s);
      }
  }
  return t;
}
function SCP2QX(e) {
  let t = [],
    s = '',
    r = [
      ' url 302',
      ' url 307',
      ' url reject',
      ' url script',
      ' url req',
      ' url res',
      ' url echo',
      ' url-and-header 302',
      ' url-and-header 307',
      ' url-and-header reject',
      ' url-and-header script',
      ' url-and-header req',
      ' url-and-header res',
      ' url-and-header echo'
    ];
  e = e.split('\n').map(e => e.trim().replace(/\s+/g, ' '));
  for (var i = 0; i < e.length; i++)
    try {
      (e[i] = e[i].replace('^http', 'http')),
        'hostname' == e[i].slice(0, 8) &&
          ((hn = e[i].replace(/\%.*\%/g, '').replace(/\:\d*/g, '')),
          t.push(hn));
      let l = ['type=', '.js', 'pattern=', 'script-path='];
      const p = t => -1 != e[i].indexOf(t),
        a = t => -1 != e[i].indexOf(t);
      if (['//', '#', ';'].some(t => 0 == e[i].indexOf(t)) || r.some(a))
        r.some(a) && t.push(e[i]);
      else if ((1 == Pdbg && $notify('rewrite-check', '', e[i]), l.every(p)))
        (ptn = e[i]
          .replace(/\s/gi, '')
          .split('pattern=')[1]
          .split(/\,[a-zA-Z]/)[0]),
          (js = e[i]
            .replace(/\s/gi, '')
            .split('script-path=')[1]
            .split(',')[0]),
          (type = e[i]
            .replace(/\s/gi, '')
            .split('type=')[1]
            .split(',')[0]
            .trim()),
          (subsi = e[i].replace(/ /g, '').replace(/\=true/g, '=1')),
          'http-response' == type && -1 != subsi.indexOf('requires-body=1')
            ? (type = 'script-response-body ')
            : 'http-response' == type && -1 == subsi.indexOf('requires-body=1')
            ? (type = 'script-response-header ')
            : 'http-request' == type && -1 != subsi.indexOf('requires-body=1')
            ? (type = 'script-request-body ')
            : 'http-request' == type && -1 == subsi.indexOf('requires-body=1')
            ? (type = 'script-request-header ')
            : (type = ''),
          '' != type && ((s = ptn + ' url ' + type + js), t.push(s));
      else if (/\s30(7|2)$/.test(e[i]))
        (s =
          e[i].split(' ')[0] +
          ' url ' +
          e[i].split(' ')[2] +
          ' ' +
          e[i].split(' ')[1].trim()),
          t.push(s);
      else if (/\s\-\s30(2|7)\s/.test(e[i]))
        (s = e[i].replace(' - ', ' url ')), t.push(s);
      else if ('header' == e[i].split(' ')[2]) {
        var n = e[i].split(' ')[0].split('.com')[1],
          o = e[i].split(' ')[1].split('.com')[1];
        (s = e[i].split(' ')[0] + ' url 302 ' + e[i].split(' ')[1]), t.push(s);
      } else
        'header-replace' == e[i].split(' ')[1]
          ? ((n = e[i].split('header-replace')[1].split(':')[0].trim()),
            (o = e[i].split('header-replace')[1].trim()),
            (s =
              e[i].split(' ')[0] +
              ' url request-header (.+\\r\\n)' +
              n +
              ':.+(\\r\\n) request-header $1' +
              o +
              '$2'),
            t.push(s))
          : -1 != e[i].indexOf(' _ reject')
          ? ((s = e[i].split(' ')[0] + ' url reject-200'), t.push(s))
          : -1 != e[i].indexOf(' - reject') || -1 != e[i].indexOf(' - REJECT')
          ? ((s = e[i].replace(' - ', ' url ').toLowerCase()), t.push(s))
          : 2 == e[i].split(' ').length &&
            (/\s(reject)$/.test(e[i]) || /\s(reject\-)/.test(e[i]))
          ? ((s = e[i].replace(' reject', ' url reject')), t.push(s))
          : -1 != e[i].indexOf('script-path') &&
            ((type = e[i].replace(/\s+/g, ' ').split(' ')[0]),
            (js = e[i].split('script-path')[1].split('=')[1].split(',')[0]),
            (ptn = e[i].replace(/\s+/g, ' ').split(' ')[1]),
            (subsi = e[i].replace(/ /g, '').replace(/\=true/g, '=1')),
            'http-response' == type && -1 != subsi.indexOf('requires-body=1')
              ? (type = 'script-response-body ')
              : 'http-response' == type &&
                -1 == subsi.indexOf('requires-body=1')
              ? (type = 'script-response-header ')
              : 'http-request' == type && -1 != subsi.indexOf('requires-body=1')
              ? (type = 'script-request-body ')
              : 'http-request' == type && -1 == subsi.indexOf('requires-body=1')
              ? (type = 'script-request-header ')
              : (type = ''),
            '' != type && ((s = ptn + ' url ' + type + js), t.push(s)));
    } catch (t) {
      $notify('解析此条时出现错误，已忽略', e[i], t);
    }
  return t;
}
function SGMD2QX(e) {
  return [...URX2QX(e), ...SCP2QX(e)];
}
function Rewrite_Filter(e, t, s, r, i) {
  let n = [],
    o = ['//', '#', ';'],
    l = [],
    p = '';
  for (let a = 0; a < e.length; a++) {
    subi = e[a].trim();
    let f = subi.replace(/ /g, '');
    if (
      '' != subi &&
      (-1 != subi.indexOf(' url ') ||
        -1 != subi.indexOf(' url-and-header ') ||
        /^hostname\=/.test(f))
    ) {
      const e = e => 0 == subi.indexOf(e);
      if (o.some(e)) continue;
      if (0 == f.indexOf('hostname='))
        p =
          Phin0 || Phout0 || r || i ? HostNamecheck(subi, Phin0, Phout0) : subi;
      else if (0 != f.indexOf('hostname=')) {
        let e = Rcheck(subi, t),
          r = Rcheck(subi, s);
        1 == r || 0 == e
          ? l.push(
              subi.replace(' url ', ' - ').replace(' url-and-header ', ' - ')
            )
          : ((0 == r && 0 != e) || (2 == r && 0 != e)) && n.push(subi);
      }
    }
  }
  return (
    0 != Pntf0 &&
      ((nowrite = l.length <= 10 ? emojino[l.length] : l.length),
      (no1write = n.length <= 10 ? emojino[n.length] : n.length),
      Pin0 && ' 0️⃣ ' != no1write
        ? 0 != s && $notify()
        : l.length > 0 && 0 != Pout0 && $notify()),
    0 == n.length && $notify(),
    r &&
      ((n = n.map(Regex).filter(Boolean)), RegCheck(n, '重写引用', 'regex', r)),
    i &&
      ((n = n.map(RegexOut).filter(Boolean)),
      RegCheck(n, '重写引用', 'regout', i)),
    '' != p && n.push(p),
    (n = 1 == Phide ? n : [...l, ...n]),
    n
  );
}
function HostNamecheck(e, t, s) {
  let r = e.replace(/ /g, '').split('=')[1].split(','),
    i = [],
    n = [];
  for (let e = 0; e < r.length; e++) {
    dd = r[e];
    const o = e => -1 != dd.indexOf(e);
    s && '' != s && s.some(o)
      ? n.push(r[e])
      : t && '' != t
      ? t.some(o)
        ? i.push(r[e])
        : n.push(r[e])
      : i.push(r[e]);
  }
  if (0 != Pntf0 && (s || t)) {
    n.length <= 10 ? emojino[n.length] : n.length;
    let e = i.length <= 10 ? emojino[i.length] : i.length;
    ((t && ' 0️⃣ ' != e) || n.length > 0) && $notify();
  }
  return (
    0 == i.length && $notify(),
    Preg &&
      ((i = i.map(Regex).filter(Boolean)),
      RegCheck(i, '主机名 hostname', 'regex', Preg)),
    Pregout &&
      ((i = i.map(RegexOut).filter(Boolean)),
      RegCheck(i, '主机名 hostname', 'regout', Pregout)),
    (r = 'hostname=' + i.join(', ')),
    r
  );
}
function Rcheck(e, t) {
  if (((name = e.toUpperCase()), t)) {
    let e = 0;
    const s = e => -1 != name.indexOf(e.toUpperCase());
    return t.some(s) && (e = 1), e;
  }
  return 2;
}
function Rule_Handle(e, t, s) {
  (cnt = e), (Tin = s), (Tout = t), (ply = Ppolicy);
  let r = [],
    i = ['//', '#', ';', '[', '^'];
  if ('' != Tout && null != Tout) {
    for (var n = [], o = 0; o < cnt.length; o++) {
      cc = cnt[o]
        .replace(/^\s*\-\s/g, '')
        .replace(/\"|\'/g, '')
        .trim();
      const e = e => -1 != cc.indexOf(e),
        t = e => 0 == cc.toLowerCase().indexOf(e);
      if (Tout.some(e) && !i.some(t)) n.push('-' + Rule_Policy(cc));
      else if (!i.some(t) && cc)
        if (((dd = Rule_Policy(cc)), '' != Tin && null != Tin)) {
          const e = e => -1 != dd.indexOf(e);
          Tin.some(e) && r.push(dd);
        } else r.push(dd);
    }
    n.length <= 10 ? emojino[n.length] : n.length;
    if (
      (n.length > 0 ? 0 != Pntf0 && $notify() : $notify(),
      '' != Tin && null != Tin)
    )
      if (r.length > 0) {
        r.length <= 10 ? emojino[r.length] : r.length;
        0 != Pntf0 && $notify();
      } else $notify();
    else 0 == r.length && $notify();
    r = 1 == Phide ? r : [...n, ...r];
  } else if ('' != Tin && null != Tin) {
    for (n = [], o = 0; o < cnt.length; o++) {
      cc = cnt[o].replace(/^\s*\-\s/g, '').trim();
      const e = e => 0 == cc.toLowerCase().indexOf(e);
      if (!i.some(e) && cc) {
        dd = Rule_Policy(cc);
        const e = e => -1 != dd.indexOf(e);
        Tin.some(e) ? r.push(dd) : n.push('-' + dd);
      }
    }
    if (r.length > 0) {
      r.length <= 10 ? emojino[r.length] : r.length;
      0 != Pntf0 && $notify();
    } else $notify();
    r = 1 == Phide ? r : [...n, ...r];
  } else r = cnt.map(Rule_Policy);
  return (
    (r =
      1 == Pfcr
        ? r.filter(Boolean).map(e => e + ', force-cellular')
        : r.filter(Boolean)),
    (r =
      2 == Pfcr
        ? r.filter(Boolean).map(e => e + ', multi-interface')
        : r.filter(Boolean)),
    (r =
      3 == Pfcr
        ? r.filter(Boolean).map(e => e + ', multi-interface-balance')
        : r.filter(Boolean)),
    '' != Pvia &&
      (r =
        0 == Pvia
          ? r.filter(Boolean).map(e => e + ', via-interface=%TUN%')
          : r.filter(Boolean).map(e => e + ', via-interface=' + Pvia)),
    (r = r.map(e =>
      e
        .replace(/:\d*\s*,/g, ',')
        .replace(/(\'|\")/g, '')
        .replace(/(\-suffix|\-SUFFIX)\s*\,\s*\./g, '$1, ')
    )),
    r
  );
}
function Rule_Policy(e) {
  let t = e
      .replace(/^\s*\-\s/g, '')
      .replace(/REJECT-TINYGIF/gi, 'reject')
      .replace(/REJECT-DROP/gi, 'reject')
      .trim()
      .split('//')[0]
      .trim()
      .split(','),
    s = [
      '//',
      '#',
      ';',
      '[',
      '/',
      'hostname',
      'no-ipv6',
      'no-system',
      '<',
      '{',
      '}',
      ']',
      '^'
    ];
  const r = e => 0 == t[0].trim().toLowerCase().indexOf(e);
  if (
    [
      'host',
      'domain',
      'ip-cidr',
      'geoip',
      'user-agent',
      'ip6-cidr',
      'ip-asn'
    ].some(e => 0 == t[0].trim().toLowerCase().indexOf(e)) &&
    !s.some(r)
  ) {
    if (3 == t.length && -1 == t.indexOf('no-resolve'))
      (ply0 = 'Shawn' != Ppolicy ? Ppolicy : t[2]),
        (nn = t[0] + ', ' + t[1] + ', ' + ply0);
    else if (4 == t.length && -1 != t.indexOf('no-resolve'))
      nn = t.join(',').replace(',no-resolve', '');
    else if (2 == t.length)
      (ply0 = 'Shawn' != Ppolicy ? Ppolicy : 'Shawn'),
        (nn = '' != t[1].trim() ? t[0] + ', ' + t[1] + ', ' + ply0 : '');
    else if (3 == t.length && -1 != t[2].indexOf('no-resolve'))
      (ply0 = 'Shawn' != Ppolicy ? Ppolicy : 'Shawn'),
        (nn = t[0] + ', ' + t[1] + ', ' + ply0);
    else {
      if (4 != t.length || -1 == t[3].indexOf('no-resolve'))
        return s.some(r), '';
      (ply0 = 'Shawn' != Ppolicy ? Ppolicy : t[2]),
        (nn = t[0] + ', ' + t[1] + ', ' + ply0);
    }
    return (
      -1 != t[0].indexOf('URL-REGEX') || -1 != t[0].indexOf('PROCESS')
        ? (nn = '')
        : (nn = nn.replace('IP-CIDR6', 'ip6-cidr')),
      nn
    );
  }
  return 1 != t.length ||
    s.some(r) ||
    '' == t[0] ||
    -1 != t[0].indexOf('payload:') ||
    -1 != t[0].indexOf('=') ||
    'https:' == t[0].trim()
    ? ''
    : rule_list_handle(t[0]);
}
function rule_list_handle(e) {
  return (
    -1 != (e = e.split('#')[0].trim()).trim().indexOf(' ') ||
      '' == e.trim() ||
      ['//', '#', ';', '[', '!', '/'].some(t => 0 == e.trim().indexOf(t)) ||
      (-1 != e.indexOf('::') && -1 != e.indexOf('/')
        ? ((e = 'ip6-cidr, ' + e),
          (e = 'Shawn' == Ppolicy ? e + ', Shawn' : e + ', ' + Ppolicy))
        : 2 == e.split('/').length
        ? ((e = 'ip-cidr, ' + e),
          (e = 'Shawn' == Ppolicy ? e + ', Shawn' : e + ', ' + Ppolicy))
        : 4 == e.split('.').length && e.split('.').every(e => /^\d+$/.test(e))
        ? ((e = 'ip-cidr, ' + e + '/32'),
          (e = 'Shawn' == Ppolicy ? e + ', Shawn' : e + ', ' + Ppolicy))
        : -1 == e.indexOf('payload:') &&
          (/^('|")/.test(e)
            ? ((e = e.replace(/'|"/g, '').trim()),
              (e =
                /^\.|\*\./.test(e) || -1 != e.indexOf('*')
                  ? 'host-wildcard, ' + e.replace(/^\.|\*\./, '*.')
                  : 'host-suffix, ' + e.replace(/^(\+\.)/, '')))
            : (e = /\*|\+/.test(e[0])
                ? 'host-wildcard, ' + e
                : 'host-suffix, ' + (e = '.' == e[0] ? e.replace('.', '') : e)),
          (e = 'Shawn' == Ppolicy ? e + ', Shawn' : e + ', ' + Ppolicy))),
    e
  );
}
function Domain2Rule(e) {
  let t = e.split('\n'),
    s = ['//', '#', ';', '['],
    r = [];
  for (let e = 0; e < t.length; e++) {
    cc = t[e].trim();
    const i = e => -1 != cc.indexOf(e);
    !s.some(i) &&
      cc &&
      ('.' == cc[0]
        ? r.push('host-suffix, ' + cc.slice(1, cc.length))
        : r.push('host, ' + cc));
  }
  return r.join('\n');
}
function policy_sets(e, t) {
  for (pcnt = t.split('+'), i = 0; i < pcnt.length; i++)
    -1 != pcnt[i].indexOf('@') && (e = e.map(e => filter_set(e, pcnt[i])));
  return e.filter(Boolean);
}
function filter_set(e, t) {
  if (e)
    return (
      (paras = [t.split('@')[0], t.slice(t.split('@')[0].length + 1)]),
      (e = e.split(',')),
      (reg = RegExp(paras[0])),
      3 == e.length && (reg.test(e[1]) || reg.test(e[2])) && (e[2] = paras[1]),
      e.join(',')
    );
}
function ReplaceReg(e, t) {
  let s = e,
    r = t
      .replace(/\\\@/g, 'atsymbol')
      .replace(/\\\+/g, 'plussymbol')
      .split('+');
  for (let e = 0; e < r.length; e++) {
    var i = decodeURIComponent(r[e].split('@')[0])
        .replace(/atsymbol/g, '@')
        .replace(/plussymbol/g, '\\+')
        .replace(/\，/g, ','),
      n = decodeURIComponent(r[e].split('@')[1])
        .replace(/atsymbol/g, '@')
        .replace(/plussymbol/g, '+')
        .replace(/\，/g, ',');
    (i = new RegExp(i, 'gmi')), (s = s.map(e => e.replace(i, n)));
  }
  return s;
}
function Subs2QX(e, t, s, r, i) {
  Pdbg && $notify('subs', 'node', e);
  let n = e.split('\n'),
    o = ['shadowsocks=', 'trojan=', 'vmess=', 'http=', 'socks5='],
    l = [
      '=ss,',
      '=vmess,',
      '=trojan,',
      '=http,',
      '=https,',
      '=custom,',
      '=socks5',
      '=socks5-tls'
    ],
    p = ['=shadowsocks', '=shadowsocksr', '=vless'],
    a = [],
    f = [];
  for (let e = 0; e < n.length; e++) {
    let d = '';
    if (
      n[e].trim().length > 3 &&
      !/\;|\/|\#/.test(n[e][0]) &&
      -1 == n[e].indexOf(' url ')
    ) {
      let u = n[e].split('://')[0].trim();
      var c = n[e].replace(/ /g, '');
      let h =
        -1 != n[e].indexOf('tag=')
          ? n[e]
              .split(/\&*(emoji|udp|tfo|cert|rename|replace)\=/)[0]
              .split('tag=')[1]
          : '';
      n[e] = 'ssr' == u ? n[e].split(/#|,|，/)[0] : n[e];
      const g = e => -1 != c.toLowerCase().indexOf(e),
        m = e => 0 == c.toLowerCase().indexOf(e);
      try {
        if (
          (Pdbg && $notify(e, u, n[e]),
          'vmess' != u ||
            -1 != n[e].indexOf('remark=') ||
            -1 != n[e].indexOf('remarks=') ||
            /(obfs|alterId|type|\@)\=/.test(n[e]))
        )
          if (
            'vmess' != u ||
            (-1 == n[e].indexOf('remark=') &&
              -1 == n[e].indexOf('remarks=') &&
              !/(obfs|alterId|type|\@)\=/.test(n[e]))
          )
            if ('socks' == u && -1 != n[e].indexOf('remarks='))
              (d = S5R2QX(n[e])), (d = '' != h ? URI_TAG(d, h) : d);
            else if ('ssocks' == u && -1 != n[e].indexOf('remarks='))
              (d = S5R2QX(n[e], (tlsp = 'over-tls'))),
                (d = '' != h ? URI_TAG(d, h) : d);
            else if ('ssr' == u)
              (d = SSR2QX(n[e], t, s)), (d = '' != h ? URI_TAG(d, h) : d);
            else if ('ss' == u)
              (d = SS2QX(n[e], t, s)), (d = '' != h ? URI_TAG(d, h) : d);
            else if ('ssd' == u) d = SSD2QX(n[e], t, s);
            else if ('trojan' == u)
              (d = TJ2QX(n[e], t, s, r, i)), (d = '' != h ? URI_TAG(d, h) : d);
            else if (('https' != u && 'http' != u) || -1 != n[e].indexOf(','))
              'vless' == u && version < 821
                ? ((Perror = 1), $notify())
                : 'vless' == u
                ? (d = VL2QX(n[e], t, s, r, i))
                : o.some(m)
                ? (d = QX_TLS(isQuanX(n[e])[0], r, i))
                : l.some(g)
                ? (d = QX_TLS(Surge2QX(n[e])[0], r, i))
                : p.some(g) && (d = Loon2QX(n[e]));
            else if (-1 != c.indexOf('@'))
              (d = HPS2QX(n[e], s, r, i)), (d = '' != h ? URI_TAG(d, h) : d);
            else {
              let t = Base64.decode(
                c
                  .split(u + '://')[1]
                  .split('#')[0]
                  .split('?')[0]
              );
              (t = n[e].replace(
                c
                  .split(u + '://')[1]
                  .split('#')[0]
                  .split('?')[0],
                t
              )),
                (d = HPS2QX(t, s, r, i)),
                (d = '' != h ? URI_TAG(d, h) : d);
            }
          else (d = VR2QX(n[e], t, s, r, i)), (d = '' != h ? URI_TAG(d, h) : d);
        else
          (d =
            -1 == Base64.decode(n[e].split('vmess://')[1]).indexOf('over-tls=')
              ? V2QX(n[e], t, s, r, i)
              : VQ2QX(n[e], t, s, r, i)),
            (d = '' != h ? URI_TAG(d, h) : d);
      } catch (t) {
        f.push(`<<<\nContent: ${n[e]}\nError: ${t}`);
      }
      if (
        ('' != Paead && (d = AeadVmess(d, Paead)),
        '' != Phost && (d = HOST_Handle(d, Phost)),
        '' != Pobfs && (d = OBFS_Handle(d, Pobfs)),
        '' != Psession && (d = Session_Handle(d, Psession)),
        ('' == Pcsha256 && '' == Ppsha256) ||
          (d = SHA256_Handle(d, Pcsha256, Ppsha256)),
        '' != Palpn && (d = ALPN_Handle(d, Palpn)),
        (d = TLS_Check(d)),
        d instanceof Array)
      )
        for (let e in d)
          (d[e] = 0 != t ? XUDP(d[e], t) : d[e]),
            (d[e] = 0 != s ? XTFO(d[e], s) : d[e]),
            a.push(d[e]);
      else
        '' != d &&
          d &&
          ((d = 0 != t ? XUDP(d, t) : d),
          (d = 0 != s ? XTFO(d, s) : d),
          a.push(d));
    }
  }
  return f.length > 0 && 0 != Pntf0 && $notify(), a;
}
function AeadVmess(e, t) {
  let s = -1 == t ? 'aead=false' : 'aead=true';
  return (
    /^vmess\s*\=/.test(e) &&
      (/aead\s*\=/.test(e)
        ? (e = e.replace(/aead\s*\=.*\,/, s + ','))
        : ((cnts = e.split(',')), cnts.push(s), (e = cnts.join(', ')))),
    e
  );
}
function TLS_Check(e) {
  return -1 != e.indexOf('tls-cert-sha256') ||
    -1 != e.indexOf('tls-pubkey-sha256')
    ? e.replace(/tls-verification\s*\=\s*false.*?\,/, 'tls-verification=true,')
    : e;
}
function QX_TLS(e, t, s) {
  let r = 1 == t ? 'tls-verification=true, ' : 'tls-verification=false, ',
    i = 1 == s ? 'tls13=true, ' : '';
  return (
    -1 != (e = e.replace(/tag\s*\=/gm, 'tag=')).indexOf('tls-verification')
      ? (e =
          -1 == t || 1 == t
            ? e.replace(RegExp('tls-verification.*?,', 'gmi'), r)
            : e)
      : (-1 != e.indexOf('obfs=over-tls') ||
          /over\-tls\s*\=\s*true/.test(e) ||
          -1 != e.indexOf('obfs=wss')) &&
        (e = e.replace(new RegExp('tag.*?=', 'gmi'), r + 'tag=')),
    '' != i &&
      (-1 != e.indexOf('tls13')
        ? (e = e.replace(RegExp('tls13.*?,', 'gmi'), i))
        : (-1 != e.indexOf('obfs=over-tls') ||
            /over\-tls\s*\=\s*true/.test(e) ||
            -1 != e.indexOf('obfs=wss')) &&
          (e = e.replace(new RegExp('tag.*?=', 'gmi'), i + 'tag='))),
    /^(shadowsocks|trojan|vmess)/.test(e.trim()) ||
      ((udp = 'udp-relay=false, '),
      (e =
        -1 != e.indexOf('udp-relay')
          ? e.replace(RegExp('udp-relay.*?,', 'gmi'), udp)
          : e.replace(new RegExp('tag.*?=', 'gmi'), udp + 'tag='))),
    e
  );
}
function SIP2QuanX(e) {
  for (e = JSON.parse(e), ll = e.length, nodes = [], i = 0; i < ll; i++)
    (node = 'shadowsocks= '),
      (cnti = e[i]),
      (ip = cnti.server + ':' + cnti.server_port),
      (mtd = 'method=' + cnti.method),
      (pwd = 'password=' + cnti.password),
      (obfs = cnti.plugin_opts ? cnti.plugin_opts.replace(';', ', ') : ''),
      (tag = 'tag=' + cnti.remarks),
      (node += [ip, pwd, mtd, obfs, tag].filter(Boolean).join(', ')),
      nodes.push(node);
  return nodes.join('\n');
}
function HPS2QX(e, t, s, r) {
  let i = -1 != e.indexOf('https://') ? 'https' : 'http',
    n = e.replace('https://', '').replace('http://', '').trim(),
    o = [];
  if ('' != n) {
    if (-1 != n.indexOf('@'))
      var l =
          'http=' + n.split('@')[1].split('#')[0].split('/')[0].split('?')[0],
        p = 'username=' + n.split(':')[0],
        a = 'password=' + n.split('@')[0].split(':')[1];
    else
      l =
        -1 == n.split('#')[0].indexOf(':')
          ? 'http=' + Base64.decode(n.split('#')[0].split('?')[0])
          : 'http=' + n.split('#')[0].split('?')[0];
    let f = 'tag=' + decodeURIComponent(n.split('#')[1]),
      c = 'https' == i ? 'over-tls=true' : '',
      d =
        -1 != e.indexOf('peer=')
          ? 'tls-host=' + e.split('peer=')[1].split('#')[0].split('&')[0]
          : '',
      u = 0 != s ? 'tls-verification=true' : 'tls-verification=false',
      h = 1 == t ? 'fast-open=true' : 'fast-open=false',
      g = 1 == r ? 'tls13=true' : 'tls13=false';
    '' == c && ((u = ''), (g = '')), o.push(l, p, a, c, d, u, h, g, f);
  }
  return o.filter(Boolean).join(',');
}
function VQ2QX(e, t, s, r, i) {
  let n = String(
      Base64.decode(e.replace('vmess://', '').trim()).split('\0')[0]
    ),
    o = '',
    l =
      'vmess=' +
      n.split(',')[1].trim() +
      ':' +
      n.split(',')[2].trim() +
      ', method=aes-128-gcm, password=' +
      n.split(',')[4].split('"')[1] +
      ', ',
    p = 'tag=' + n.split('=')[0];
  o =
    l +
    (-1 != e.indexOf('tfo=1') ? 'fast-open=true, ' : 'fast-open=false, ') +
    'udp-relay=false, ';
  let a = '';
  return (
    -1 == n.indexOf('obfs=')
      ? ((a = -1 != n.indexOf('over-tls=true') ? 'obfs=over-tls, ' : ''),
        (a +=
          -1 != n.indexOf('tls-host')
            ? 'obfs-host=' + n.split('tls-host=')[1].split(',')[0] + ', '
            : ''))
      : -1 != n.indexOf('obfs=ws')
      ? ((a = -1 != n.indexOf('over-tls=true') ? 'obfs=wss, ' : 'obfs=ws, '),
        (a +=
          -1 != n.indexOf('obfs-path=')
            ? 'obfs-uri=' + n.split('obfs-path=')[1].split('"')[1] + ', '
            : 'obfs-uri=/, '),
        (a +=
          -1 != n.indexOf('obfs-header=')
            ? 'obfs-host=' +
              n.split('obfs-header="Host:')[1].split('[')[0].trim() +
              ', '
            : ''))
      : -1 != n.indexOf('obfs=http') &&
        ((a = 'obfs=http, '),
        (a +=
          -1 != n.indexOf('obfs-path=')
            ? 'obfs-uri=' + n.split('obfs-path=')[1].split('"')[1] + ', '
            : 'obfs-uri=/, '),
        (a +=
          -1 != n.indexOf('obfs-header=')
            ? 'obfs-host=' +
              n.split('obfs-header="Host:')[1].split('[')[0].trim() +
              ', '
            : '')),
    (-1 == a.indexOf('obfs=over-tls') && -1 == a.indexOf('obfs=wss')) ||
      (a =
        a +
        (0 != r || -1 != e.indexOf('allowInsecure=1')
          ? 'tls-verification=false, '
          : 'tls-verification=true, ') +
        (1 == i ? 'tls13=true, ' : '')),
    (o = o + a + p),
    o
  );
}
function VR2QX(e, t, s, r, i) {
  let n = String(
    Base64.decode(
      e
        .replace('vmess://', '')
        .split('?remark')[0]
        .split('&remark')[0]
        .split('?')[0]
    ).trim()
  ).split('\0')[0];
  1 == Pdbg && $notify('Shadowrocket-Vmess-URI', '..', e + '\n\n' + n),
    -1 == n.indexOf('@') &&
      -1 != e.indexOf('@') &&
      (n = e.replace('vmess://', '').split('?')[0]);
  let o = '',
    l = 'vmess=' + n.split('@')[1] + ', method=aes-128-gcm, ',
    p = n.split('@')[0].split(':')[1]
      ? 'password=' + n.split('@')[0].split(':')[1] + ', '
      : 'password=' + n.split('@')[0] + ', ';
  -1 == e.indexOf('#')
    ? (tag = /remarks*=/.test(e)
        ? 'tag=' + decodeURIComponent(e.split(/remarks*=/)[1].split('&')[0])
        : 'tag=' + n.split('@')[1])
    : (tag = 'tag=' + e.split('#')[1]);
  let a = 0;
  o =
    l +
    p +
    (-1 != e.indexOf('tfo=1') ? 'fast-open=true, ' : 'fast-open=false, ') +
    'udp-relay=false, ';
  let f =
    -1 != e.indexOf('obfs=')
      ? e.split('obfs=')[1].split('&')[0].trim()
      : 'none';
  if ('none' == f) f = -1 != e.indexOf('tls=1') ? 'obfs=over-tls, ' : '';
  else if ('websocket' == f || 'http' == f) {
    (f = 'http' == f ? 'obfs=http, ' : 'obfs=ws, '),
      (f = -1 != e.indexOf('tls=1') ? 'obfs=wss, ' : f),
      (f =
        f +
        'obfs-uri=' +
        (-1 != e.indexOf('&path=')
          ? decodeURIComponent(e.split('&path=')[1].split('&')[0])
          : '/') +
        ', ');
    let t =
      -1 != e.indexOf('&obfsParam=')
        ? decodeURIComponent(
            e.split('&obfsParam=')[1].split('&')[0].split('\n')[0]
          )
            .split('\n')[0]
            .trim()
        : '';
    -1 != t.indexOf('"Host"') &&
      -1 != t.indexOf('{') &&
      (t = JSON.parse(t).Host),
      (t = '{}' != t && t ? 'obfs-host=' + t + ', ' : ''),
      (f += t);
  } else
    ('grpc' != f && 'h2' != f) ||
      ((Perror = 1), 0 != Pntf0 && $notify(), (a = 1));
  return (
    (-1 == f.indexOf('obfs=over-tls') && -1 == f.indexOf('obfs=wss')) ||
      (f =
        f +
        (0 != r || -1 != e.indexOf('allowInsecure=1')
          ? 'tls-verification=false, '
          : 'tls-verification=true, ') +
        (1 == i ? 'tls13=true, ' : '')),
    (caead = 'aead=false, '),
    -1 != e.indexOf('alterId=') &&
      (caead =
        0 != Number(e.split('alterId=')[1].split('&')[0])
          ? 'aead=false, '
          : ''),
    (o = 0 == a ? o + f + caead + tag : ''),
    o
  );
}
function S5R2QX(e, t = 'false') {
  let s = Base64.decode(e.split('socks://')[1].split('#')[0].split('?')[0]);
  server = s + '#' + e.split('?')[1];
  let r = [];
  if ('' != server) {
    let e = 'socks5=' + server.split('@')[1].split('#')[0].split('/')[0],
      s = 'username=' + server.split(':')[0],
      i = 'password=' + server.split('@')[0].split(':')[1],
      n =
        'tag=' + decodeURIComponent(server.split('remarks=')[1].split('&')[0]),
      o = 'false' == t ? '' : 'over-tls=true',
      l = 0 != Pcert0 ? 'tls-verification=true' : 'tls-verification=false';
    l = '' == o ? '' : l;
    let p = 1 == Ptfo0 ? 'fast-open=true' : 'fast-open=false';
    r.push(e, s, i, o, l, p, n);
  }
  return r.filter(Boolean).join(',');
}
function V2QX(e, t, s, r, i) {
  let n = r,
    o = i,
    l = String(Base64.decode(e.replace('vmess://', '')).trim()).split('\0')[0],
    p = [];
  if ('' != l) {
    (ss = JSON.parse(l)),
      Pdbg && $notify('Vmess-URI', '', JSON.stringify(ss)),
      (ip = 'vmess=' + ss.add + ':' + ss.port),
      (pwd = 'password=' + ss.id),
      (mtd = 'method=aes-128-gcm');
    try {
      tag = 'tag=' + decodeURIComponent(ss.ps);
    } catch (e) {
      tag = 'tag=' + ss.ps;
    }
    (udp = 'udp-relay=false'),
      (tfo = 1 == s ? 'fast-open=true' : 'fast-open=false'),
      (obfs = Fobfs(ss, n, o)),
      (caead = ss.aid && '0' != ss.aid ? 'aead=false' : 'aead=true'),
      '' == obfs || null == obfs
        ? p.push(ip, mtd, pwd, tfo, udp, caead, tag)
        : 'NOT-SUPPORTTED' != obfs &&
          p.push(ip, mtd, pwd, obfs, tfo, udp, caead, tag),
      (QX = p.join(', '));
  }
  return QX;
}
function Fobfs(e, t, s) {
  let r = [];
  return (
    (tcert = 0 == t ? 'tls-verification=false' : 'tls-verification=true'),
    (tls13 = 1 == s ? 'tls13=true' : 'tls13=false'),
    'ws' == e.net && 'tls' == e.tls
      ? ((obfs0 = 'obfs=wss, ' + tcert + ', ' + tls13 + ', '),
        (uri0 = e.path && '' != e.path ? 'obfs-uri=' + e.path : 'obfs-uri=/'),
        (uri0 =
          -1 != uri0.indexOf('uri=/') ? uri0 : uri0.replace('uri=', 'uri=/')),
        (host0 = e.host && '' != e.host ? 'obfs-host=' + e.host + ', ' : ''),
        r.push(obfs0 + host0 + uri0),
        r.join(', '))
      : 'ws' == e.net
      ? ((obfs0 = 'obfs=ws'),
        (uri0 = e.path && '' != e.path ? 'obfs-uri=' + e.path : 'obfs-uri=/'),
        (uri0 =
          -1 != uri0.indexOf('uri=/') ? uri0 : uri0.replace('uri=', 'uri=/')),
        (host0 = e.host && '' != e.host ? 'obfs-host=' + e.host + ', ' : ''),
        r.push(obfs0, host0 + uri0),
        r.join(', '))
      : 'tls' != e.tls || ('tcp' != e.net && 'none' != e.net)
      ? ('tcp' != e.net && 'none' != e.net) || 'http' != e.type
        ? 'tcp' != e.net && 'none' != e.net
          ? ((Perror = 1), $notify(), 'NOT-SUPPORTTED')
          : ('tcp' != e.net && 'none' != e.net) ||
            null == e.type ||
            'none' == e.type ||
            '' == e.type ||
            'vmess' == e.type
          ? ''
          : 'NOT-SUPPORTTED'
        : ((obfs0 = 'obfs=http'),
          (uri0 = e.path && '' != e.path ? 'obfs-uri=' + e.path : 'obfs-uri=/'),
          (uri0 =
            -1 != uri0.indexOf('uri=/') ? uri0 : uri0.replace('uri=', 'uri=/')),
          (host0 = e.host && '' != e.host ? 'obfs-host=' + e.host + ', ' : ''),
          r.push(obfs0, host0 + uri0),
          r.join(', '))
      : ((obfs0 = 'obfs=over-tls, ' + tcert + ', ' + tls13),
        (uri0 = e.path && '' != e.path ? 'obfs-uri=' + e.path : ''),
        (uri0 =
          -1 != uri0.indexOf('uri=/') ? uri0 : uri0.replace('uri=', 'uri=/')),
        (host0 = e.host && '' != e.host ? ', obfs-host=' + e.host : ''),
        r.push(obfs0 + host0),
        r.join(', '))
  );
}
function Dot2(e) {
  return e ? e.replace(/\\\./g, '这是个点') : '';
}
function ToDot(e) {
  return e ? e.replace(/这是个点/g, '.') : '';
}
function Regex(e) {
  let t = RegExp(Preg, 'i');
  if (((cnt = e), t.test(cnt))) return e;
}
function RegexOut(e) {
  let t = RegExp(Pregout, 'i');
  if (((cnt = e), !t.test(cnt))) return e;
  RegoutList.push(cnt);
}
function Scheck(e, t) {
  if (
    ((name = e
      .replace(/tag\s*\=/g, 'tag=')
      .split('tag=')[1]
      .toUpperCase()),
    (t = t ? t.map(Dot2) : t))
  ) {
    let e = 0;
    for (let s = 0; s < t.length; s++) {
      const r = e => -1 != name.indexOf(e.toUpperCase());
      t[s].split('.').map(ToDot).every(r) && (e = 1);
    }
    return e;
  }
  return 2;
}
function Filter(e, t, s) {
  let r = [],
    i = [],
    n = [];
  e = e.filter(Boolean);
  for (let o = 0; o < e.length; o++)
    0 != Scheck(e[o], t) && 1 != Scheck(e[o], s)
      ? (r.push(e[o]), n.push(e[o].replace(/ /g, '').split('tag=')[1]))
      : i.push(e[o].replace(/ /g, '').split('tag=')[1]);
  let o = i.length <= 10 ? emojino[i.length] : i.length,
    l = r.length <= 10 ? emojino[r.length] : r.length;
  return (
    1 == Pntf0 && i.length >= 1
      ? ((t && l > 0) || (s && o > 0)) && $notify()
      : (0 != l && null != l) || $notify(),
    r
  );
}
function FilterScript(servers, script) {
  $notify('启用脚本进行筛选', '', script);
  try {
    const $ = Tools();
    eval(script);
    const nodes = Tools().getNodeInfo(servers),
      IN = filter(nodes),
      res = servers.filter((e, t) => IN[t]);
    return 0 === res.length && $notify(), res;
  } catch (e) {
    return $notify('脚本筛选出现错误', '', e), servers;
  }
}
function SSR2QX(e, t, s) {
  let r = [],
    i = Base64.decode(
      e.split('ssr://')[1].replace(/-/g, '+').replace(/_/g, '/')
    ).split('\0')[0],
    n = '',
    o = '';
  return (
    1 == Pdbg && $notify('ssr', 'content', i),
    i.split(':').length <= 8
      ? ((type = 'shadowsocks='),
        (ip = i.split(':')[0] + ':' + i.split(':')[1]),
        (pwd =
          'password=' +
          Base64.decode(
            i.split('/?')[0].split(':')[5].replace(/-/g, '+').replace(/_/g, '/')
          ).split('\0')[0]),
        (mtd = 'method=' + i.split(':')[3]),
        (obfs = 'plain' != i.split(':')[4] ? 'obfs=' + i.split(':')[4] : ''),
        (ssrp =
          'origin' != i.split(':')[2] ? 'ssr-protocol=' + i.split(':')[2] : ''),
        -1 != i.indexOf('obfsparam=') &&
          '' != obfs &&
          (n =
            '' != i.split('obfsparam=')[1].split('&')[0]
              ? 'obfs-host=' +
                Base64.decode(
                  i
                    .split('obfsparam=')[1]
                    .split('&')[0]
                    .replace(/-/g, '+')
                    .replace(/_/g, '/')
                )
                  .split(',')[0]
                  .split('\0')[0]
              : ''),
        -1 != i.indexOf('protoparam=') &&
          (o =
            '' != i.split('protoparam=')[1].split('&')[0]
              ? 'ssr-protocol-param=' +
                Base64.decode(
                  i
                    .split('protoparam=')[1]
                    .split('&')[0]
                    .replace(/-/g, '+')
                    .replace(/_/g, '/')
                )
                  .split(',')[0]
                  .split('\0')[0]
              : ''),
        (tag =
          'tag=' +
          Base64.decode(
            i
              .split('remarks=')[1]
              .split('&')[0]
              .replace(/-/g, '+')
              .replace(/_/g, '/')
          ).split('\0')[0]),
        (pudp = 1 == t ? 'udp-relay=true' : 'udp-relay=false'),
        (ptfo = 1 == s ? 'fast-open=true' : 'fast-open=false'),
        r.push(type + ip, pwd, mtd, obfs, n, o, ssrp, pudp, ptfo, tag),
        (QX = r.filter(Boolean).join(', ')))
      : (QX = ''),
    QX
  );
}
function VL2QX(e, t, s, r, i) {
  let n = [],
    o = e.split('vless://')[1];
  return (
    (type = 'vless='),
    (mtd = 'method=none'),
    (obfs = ''),
    (thost = ''),
    -1 == o.indexOf('remarks=') && -1 != o.indexOf('@')
      ? ((typeU = 'URI'),
        (ip = o.split('@')[1].split('encry')[0].split('?')[0]),
        (pwd = o.split('@')[0] ? 'password=' + o.split('@')[0] : ''),
        (pcert =
          -1 != o.indexOf('allowInsecure=0')
            ? 'tls-verification=true'
            : 'tls-verification=false'),
        (thost =
          -1 != o.indexOf('sni=')
            ? 'tls-host=' + o.split('sni=')[1].split(/&|#/)[0]
            : ''),
        (thost =
          -1 != o.indexOf('peer=')
            ? 'tls-host=' + o.split('peer=')[1].split(/&|#/)[0]
            : thost),
        (tag =
          -1 != o.indexOf('#')
            ? 'tag=' + decodeURIComponent(o.split('#').slice(-1)[0])
            : 'tag= [vless]' + ip))
      : ((typeU = 'SR-URI'),
        (tag =
          -1 != o.indexOf('remarks=')
            ? 'tag=' + decodeURIComponent(o.split('remarks=')[1].split('&')[0])
            : 'tag= [vless]' + ip),
        (b64part = Base64.decode(o.split('?')[0])),
        (ip = b64part.split('@')[1]),
        (pwd = 'password=' + b64part.split('@')[0].split(':')[1])),
    (puri = ''),
    (pudp =
      1 == t || -1 != o.indexOf('udp=1')
        ? 'udp-relay=true'
        : 'udp-relay=false'),
    (ptfo =
      1 == s || -1 != o.indexOf('tfo=1')
        ? 'fast-open=true'
        : 'fast-open=false'),
    'SR-URI' == typeU
      ? (-1 != o.indexOf('obfs=none') && -1 == o.indexOf('tls=1')
          ? (obfs = '')
          : -1 != o.indexOf('obfs=none') && -1 != o.indexOf('tls=1')
          ? (obfs = 'obfs=over-tls')
          : -1 != o.indexOf('obfs=http')
          ? (obfs = 'obfs=http')
          : -1 != o.indexOf('obfs=websocket') &&
            (obfs = -1 != o.indexOf('tls=1') ? 'obfs=wss' : 'obfs=ws'),
        (thost =
          -1 == o.indexOf('obfsParam=')
            ? thost
            : 'obfs-host=' +
              decodeURIComponent(
                o.split('obfsParam=')[1].split('&')[0].split('#')[0]
              )),
        (puri =
          -1 == o.indexOf('path=')
            ? puri
            : 'obfs-uri=' +
              decodeURIComponent(
                o.split('path=')[1].split('&')[0].split('#')[0]
              )))
      : -1 != o.indexOf('&type=ws') ||
        -1 != o.indexOf('?type=ws') ||
        -1 != o.indexOf('type=http') ||
        -1 != o.indexOf('security=tls')
      ? (-1 != o.indexOf('type=http')
          ? (obfs = 'obfs=http')
          : -1 != o.indexOf('type=ws')
          ? (obfs = -1 != o.indexOf('security=tls') ? 'obfs=wss' : 'obfs=ws')
          : -1 != o.indexOf('security=tls') && (obfs = 'obfs=over-tls'),
        (thost =
          -1 == o.indexOf('&host=')
            ? thost
            : 'obfs-host=' +
              decodeURIComponent(
                o.split('&host=')[1].split('&')[0].split('#')[0]
              )),
        (puri =
          -1 == o.indexOf('&path=')
            ? puri
            : 'obfs-uri=' +
              decodeURIComponent(
                o.split('&path=')[1].split('&')[0].split('#')[0]
              )))
      : (-1 != o.indexOf('security=xtls') ||
          (-1 != o.indexOf('type=') && -1 == o.indexOf('type=tcp'))) &&
        (type = 'NS'),
    'obfs=wss' == obfs && 'obfs=over-tls' == obfs
      ? ((ptls13 = 1 == i ? 'tls13=true' : 'tls13=false'),
        0 == r
          ? (pcert = 'tls-verification=false')
          : 1 == r && (pcert = 'tls-verification=true'))
      : ((pcert = ''), (ptls13 = '')),
    n.push(type + ip, pwd, mtd, obfs, pcert, thost, puri, pudp, ptfo, tag),
    (QX = 'NS' != type ? n.filter(Boolean).join(', ') : ''),
    QX
  );
}
function TJ2QX(e, t, s, r, i) {
  let n = [],
    o = e.split('trojan://')[1];
  return (
    (type = 'trojan='),
    -1 != o.indexOf(':443')
      ? (ip = o.split('@')[1].split(':443')[0] + ':443')
      : (ip = o
          .split('@')[1]
          .split('?')[0]
          .split('\n')[0]
          .split('#')[0]
          .trim()),
    (pwd = o.split('@')[0]
      ? 'password=' + decodeURIComponent(o.split('@')[0])
      : ''),
    (obfs = 'over-tls=true'),
    (pcert =
      -1 != o.indexOf('allowInsecure=0')
        ? 'tls-verification=true'
        : 'tls-verification=false'),
    (thost =
      -1 != o.indexOf('sni=')
        ? 'tls-host=' + o.split('sni=')[1].split(/&|#/)[0]
        : ''),
    (thost =
      -1 != o.indexOf('peer=')
        ? 'tls-host=' + o.split('peer=')[1].split(/&|#/)[0]
        : thost),
    (ptls13 = 1 == i ? 'tls13=true' : 'tls13=false'),
    (puri = ''),
    0 == r
      ? (pcert = 'tls-verification=false')
      : 1 == r && (pcert = 'tls-verification=true'),
    (pudp =
      1 == t || -1 != o.indexOf('udp=1')
        ? 'udp-relay=true'
        : 'udp-relay=false'),
    (ptfo =
      1 == s || -1 != o.indexOf('tfo=1')
        ? 'fast-open=true'
        : 'fast-open=false'),
    (tag =
      -1 != o.indexOf('#')
        ? 'tag=' + decodeURIComponent(o.split('#').slice(-1)[0])
        : 'tag= [trojan]' + ip),
    -1 != o.indexOf('&plugin=obfs-local')
      ? ((obfs = -1 != o.indexOf('obfs=websocket') ? 'obfs=wss' : obfs),
        (thost =
          -1 == o.indexOf('obfs-host=')
            ? thost
            : 'obfs-host=' +
              decodeURIComponent(
                o.split('obfs-host=')[1].split(';')[0].split('#')[0]
              )),
        (puri =
          -1 == o.indexOf('obfs-uri=')
            ? puri
            : 'obfs-uri=' +
              decodeURIComponent(
                o.split('obfs-uri=')[1].split(';')[0].split('#')[0]
              )))
      : (-1 == o.indexOf('&type=ws') && -1 == o.indexOf('?type=ws')) ||
        ((obfs = -1 != o.indexOf('security=tls') ? 'obfs=wss' : obfs),
        (thost =
          -1 == o.indexOf('&host=')
            ? thost
            : 'obfs-host=' +
              decodeURIComponent(
                o.split('&host=')[1].split('&')[0].split('#')[0]
              )),
        (puri =
          -1 == o.indexOf('&path=')
            ? puri
            : 'obfs-uri=' +
              decodeURIComponent(
                o.split('&path=')[1].split('&')[0].split('#')[0]
              ))),
    n.push(type + ip, pwd, obfs, pcert, thost, puri, pudp, ptfo, tag),
    (QX = n.filter(Boolean).join(', ')),
    QX
  );
}
function joinx(e, t) {
  return e + ':' + t;
}
function SS2QX(e, t, s) {
  let r = [],
    i = e.split('ss://')[1];
  if (((QX = ''), i.split(':').length <= 10)) {
    type = 'shadowsocks=';
    let e = i.split('#')[0];
    if (-1 != e.indexOf('@') && -1 != e.indexOf(':'))
      (ip = i.split('@')[1].split('#')[0].split('/')[0].split('?')[0]),
        (pwdmtd = Base64.decode(
          i.split('@')[0].replace(/-/g, '+').replace(/_/g, '/')
        )
          .split('\0')[0]
          .split(':'));
    else if (-1 == e.indexOf('?')) {
      var n = Base64.decode(
        i.split('#')[0].replace(/-/g, '+').replace(/_/g, '/').split('\0')[0]
      );
      (ip = n.split('@')[1].split('#')[0].split('/')[0]),
        (pwdmtd = n.split('@')[0].split(':'));
    } else if (-1 != e.indexOf('?')) {
      n = Base64.decode(
        i
          .split('#')[0]
          .split('?')[0]
          .replace(/-/g, '+')
          .replace(/_/g, '/')
          .split('\0')[0]
      );
      var o = Base64.decode(
        i
          .split('#')[0]
          .split('?')[1]
          .split('=')[1]
          .replace(/-/g, '+')
          .replace(/_/g, '/')
          .split('\0')[0]
      );
      (ip = n.split('@')[1].split('#')[0].split('/')[0]),
        (pwdmtd = n.split('@')[0].split(':'));
    }
    (mtd = 'method=' + pwdmtd[0]),
      pwdmtd.splice(0, 1),
      (pwd = 'password=' + pwdmtd.reduce(joinx)),
      -1 == e.indexOf('v2ray-plugin') && -1 == e.indexOf('plugin=v2ray')
        ? ((obfs =
            null != i.split('obfs%3D')[1]
              ? ', obfs=' + i.split('obfs%3D')[1].split('%3B')[0].split('#')[0]
              : ''),
          (obfshost =
            null != i.split('obfs-host%3D')[1]
              ? ', obfs-host=' +
                i.split('obfs-host%3D')[1].split('&')[0].split('#')[0]
              : ''))
        : null != o
        ? ((o = JSON.parse(o)),
          (obfs = o.tls ? ', obfs=wss' : ', obfs=ws'),
          (obfshost = o.host
            ? ', obfs-host=' + o.host + ', tls-verification=false'
            : ''))
        : -1 != e.indexOf('v2ray-plugin')
        ? ((o = decodeURIComponent(e.split('v2ray-plugin')[1])),
          (obfs = -1 != o.indexOf('tls') ? ', obfs=wss' : ', obfs=ws'),
          (obfshost =
            -1 != o.indexOf('host=')
              ? ', obfs-host=' +
                o.split('host=')[1].split(';')[0].split('#')[0].trim()
              : ''),
          (obfshost = 'obfs-host=' != obfshost ? obfshost : ''))
        : -1 != e.indexOf('plugin=v2ray') &&
          ((o = decodeURIComponent(e.split('plugin=v2ray')[1])),
          (obfs = -1 != o.indexOf('tls') ? ', obfs=wss' : ', obfs=ws'),
          (obfshost =
            -1 != o.indexOf('host=')
              ? ', obfs-host=' +
                o.split('host=')[1].split(';')[0].split('#')[0].trim()
              : ''),
          (obfshost = 'obfs-host=' != obfshost ? obfshost : '')),
      (tag =
        'undefined' != decodeURIComponent(i.split('#')[1])
          ? 'tag=' + decodeURIComponent(i.split('#')[1])
          : 'tag=' + ip),
      (pudp = 1 == t ? 'udp-relay=true' : 'udp-relay=false'),
      (ptfo = 1 == s ? 'fast-open=true' : 'fast-open=false'),
      r.push(type + ip, pwd, mtd + obfs + obfshost, pudp, ptfo, tag),
      (QX = r.join(', ')),
      1 == Pdbg && $notify('ss', 'content', i + '\n' + QX);
  }
  return QX;
}
function SSD2QX(e, t, s) {
  var r = 0;
  let i = [],
    n = JSON.parse(Base64.decode(e.split('ssd://')[1])),
    o = 'password=' + n.password,
    l = 'method=' + n.encryption,
    p = '',
    a = '',
    f = n.port ? ':' + n.port : '';
  n.plugin_options &&
    ((p =
      null != n.plugin_options.split(';')[0]
        ? ', ' + n.plugin_options.split(';')[0]
        : ''),
    (a =
      null != n.plugin_options.split(';')[1]
        ? ', ' + n.plugin_options.split(';')[1]
        : '')),
    (pudp = 1 == t ? 'udp-relay=true' : 'udp-relay=false'),
    (ptfo = 1 == s ? 'fast-open=true' : 'fast-open=false');
  for (let e in n.servers)
    (ip = n.servers[e].server),
      n.servers[e].plugin_options &&
        ((p =
          null != n.servers[e].plugin_options.split(';')[0]
            ? ', ' + n.servers[e].plugin_options.split(';')[0]
            : ''),
        (a =
          null != n.servers[e].plugin_options.split(';')[1]
            ? ', ' + n.servers[e].plugin_options.split(';')[1]
            : '')),
      n.servers[e].encryption && (l = 'method=' + n.servers[e].encryption),
      n.servers[e].password && (o = 'password=' + n.servers[e].password),
      ip.indexOf('.') > 0 &&
        ((f = n.servers[e].port ? ':' + n.servers[e].port : f),
        (tag = 'tag=' + n.servers[e].remarks),
        (i[r] =
          'shadowsocks=' +
          ip +
          f +
          ', ' +
          o +
          ', ' +
          l +
          p +
          a +
          ', ' +
          pudp +
          ', ' +
          ptfo +
          ', ' +
          tag),
        (r += 1));
  return i;
}
function QXFix(e) {
  let t = e
    .replace(/\s*tag\s*\=/g, 'tag=')
    .replace('chacha20-poly', 'chacha20-ietf-poly');
  try {
    let e = t.split(',tag=')[0],
      s = 'tag=' + t.split(',tag=')[1].split(',')[0].trim(),
      r = t.split(s + ',');
    for (i in ((t =
      r.length <= 1 ? t : String(e + ',' + r[1].split('\r')[0] + ',' + s)),
    (cntis = t
      .split(',')
      .filter(Boolean)
      .map(e => e.trim())),
    (tagfix = ''),
    (cntii = ''),
    cntis))
      -1 == cntis[i].indexOf('=') && '' != cntis[i].trim()
        ? (tagfix += ',' + cntis[i])
        : 0 != cntis[i].indexOf('tag=')
        ? (cntii += cntis[i] + ', ')
        : (cntii = cntii);
    return (cntii = cntii + s + tagfix), cntii;
  } catch (t) {
    0 == Perror && $notify();
  }
  return '';
}
function isQuanX(e) {
  let t = e.split('\n'),
    s = [];
  for (let e = 0; e < t.length; e++) {
    let r = t[e];
    if (-1 != r.indexOf('=') && -1 != r.indexOf('tag')) {
      let e = r.split('=')[0].trim();
      ('http' != e &&
        'shadowsocks' != e &&
        'trojan' != e &&
        'vmess' != e &&
        'socks5' != e &&
        'vless' != e) ||
        s.push(QXFix(r));
    }
  }
  return s;
}
function isQuanXRewrite(e) {
  (cnt = e), (cnt0 = []);
  let t = [
    'host,',
    '-suffix,',
    'domain,',
    '-keyword,',
    'ip-cidr,',
    'ip-cidr6,',
    'geoip,',
    'user-agent,',
    'ip6-cidr,',
    'force-http',
    'ip-asn'
  ];
  for (let e = 0; e < cnt.length; e++)
    if (cnt[e]) {
      var s = cnt[e].trim();
      const r = e => -1 != s.toLowerCase().indexOf(e);
      (-1 != s.indexOf('pattern') && -1 != s.indexOf('type')) ||
      -1 != s.indexOf('http-r') ||
      ((-1 != s.indexOf(' 302') ||
        -1 != s.indexOf(' 307') ||
        /\s(_|-)\s(reject|REJECT)/.test(s) ||
        /\sreject$/.test(s) ||
        /\sreject-/.test(s)) &&
        -1 == s.indexOf(' url ') &&
        -1 == s.indexOf(' url-and-header '))
        ? (s = SGMD2QX(s)[0] ? SGMD2QX(s)[0] : '')
        : -1 != s.indexOf(' data=')
        ? (s = SGMD2QX('[Map Local]\n' + s)[0]
            ? SGMD2QX('[Map Local]\n' + s)[0]
            : '')
        : -1 != s.indexOf('URL-REGEX') ||
          -1 != s.indexOf(' header') ||
          -1 != s.replace(/ /g, '').indexOf('hostname=')
        ? (s = SGMD2QX(s)[0] ? SGMD2QX(s)[0] : '')
        : -1 != s.indexOf(' url ') &&
          -1 == s.indexOf(' simple-response ') &&
          -1 == s.indexOf(' url = ')
        ? (s = 'url' == (s = s.replace('^http', 'http')).split(' ')[1] ? s : '')
        : -1 != s.indexOf(' url-and-header ') || (s = ''),
        '' == s ||
          '[' == s.trim()[0] ||
          -1 != s.indexOf('RULE-SET') ||
          /cronexp\=|type\=cron/.test(s.replace(/ /g, '')) ||
          t.some(r) ||
          /\;$/.test(s) ||
          cnt0.push(s);
    }
  return cnt0;
}
function QXSort(e, t) {
  let s = e;
  return 1 == t
    ? s.sort(ToTag)
    : -1 == t
    ? s.sort(ToTagR)
    : 'x' == t
    ? shuffle(s)
    : '0' == t
    ? s
    : Sort_KWD(s, t);
}
function ToTag(e, t) {
  let s = e.split('tag')[1].split('=')[1].trim(),
    r = t.split('tag')[1].split('=')[1].trim();
  return (res = s > r ? 1 : -1), res;
}
function ToTagR(e, t) {
  let s = e.split('tag')[1].split('=')[1].trim(),
    r = t.split('tag')[1].split('=')[1].trim();
  return (res = s > r ? -1 : 1), res;
}
function shuffle(e) {
  let t = e;
  for (let e = t.length - 1; e >= 0; e--) {
    let s = Math.floor(Math.random() * (e + 1)),
      r = t[s];
    (t[s] = t[e]), (t[e] = r);
  }
  return t;
}
function Sort_KWD(e, t) {
  (strlist = -1 != t.indexOf('<') ? t.split('<') : t.split('>')),
    (regj = strlist.map(e => RegExp(e, 'i'))),
    (dir = -1 != t.indexOf('<') ? -1 : 1);
  let s = new Array(strlist.length + 1);
  for (var r = 0; r < s.length; r++) s[r] = [];
  for (r = 0; r < e.length; r++) {
    flag = 0;
    for (let t = 0; t < strlist.length; t++)
      if (regj[t].test(e[r])) {
        s[t].push(e[r]), (flag = 1);
        break;
      }
    1 != flag && s[strlist.length].push(e[r]);
  }
  return (
    (s = -1 == PsortX ? s.map(e => e.sort(ToTagR)) : s),
    (s = 1 == PsortX ? s.map(e => e.sort(ToTag)) : s),
    (newarr = MixArr(s, dir)),
    newarr
  );
}
function MixArr(e, t) {
  let s = [];
  for (i = 0; i < e.length - 1; i++)
    s = 1 == t ? s.concat(e[i]) : s.concat(e[e.length - 2 - i]);
  return (
    (s =
      1 == t
        ? s.concat(e[e.length - 1].sort(ToTag))
        : e[e.length - 1].sort(ToTagR).concat(s)),
    s
  );
}
function DelReg(e) {
  return (
    (delreg = RegExp(delreg, 'gmi')),
    (e = e.replace(/tag\s*\=\s*/, 'tag=')),
    (cnt0 = e.split('tag=')[0]),
    (cnt1 = e.split('tag=')[1].split(',')[0]),
    (cnt2 = 1 == e.split('tag=')[1].split(',').length ? '' : e.split(cnt1)[1]),
    (cnt = cnt0 + 'tag=' + cnt1.replace(delreg, '') + cnt2),
    cnt
  );
}
function Rename(e) {
  let t = e;
  if (-1 != t.indexOf('tag=')) {
    (hd = t.split('tag=')[0]),
      (name = t.split('tag=')[1].split(',')[0].trim()),
      (tail =
        t.split('tag=')[1].split(',').length <= 1
          ? ''
          : t.split('tag=')[1].split(name)[1]);
    for (let e = 0; e < Prn.length; e++) {
      if (
        ((nname = Prn[e].split('@')[1]
          ? decodeURIComponent(Prn[e].split('@')[1])
          : Prn[e].split('@')[1]),
        (oname = Prn[e].split('@')[0]
          ? decodeURIComponent(Prn[e].split('@')[0])
          : Prn[e].split('@')[0]),
        oname && nname)
      ) {
        let e = escapeRegExp(oname);
        name = name.replace(new RegExp(e, 'gm'), nname);
      } else if (oname && '' == nname) {
        let e = emoji_del(name);
        name =
          (1 != Pemoji && 2 != Pemoji) || !Prname
            ? oname + name.trim()
            : oname + e;
      } else if (nname && '' == oname) name = name.trim() + nname;
      else if (oname && -1 != oname.indexOf('☠️'))
        for (
          hh = Dot2(oname.slice(0, oname.length - 2)).split('.'), j = 0;
          j < hh.length;
          j++
        ) {
          let e = escapeRegExp(ToDot(hh[j])),
            t = new RegExp(e, 'gm');
          name = name.replace(t, '');
        }
      else
        '' == oname && '' == nname
          ? (name = name.replace(/@/g, ''))
          : (name = name);
      nserver = hd + 'tag=' + name + tail;
    }
    return nserver;
  }
  return t;
}
function RenameScript(servers, script) {
  $notify('启用脚本进行重命名', '', script);
  try {
    const $ = Tools().rename,
      nodes = Tools().getNodeInfo(servers);
    eval(script);
    const newNames = rename(nodes);
    return servers.map((e, t) => e.split('tag=')[0] + 'tag=' + newNames[t]);
  } catch (e) {
    return $notify('脚本重命名出现错误', '', e), servers;
  }
}
function emoji_del(e) {
  return e
    .replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, '')
    .trim();
}
function get_emoji(e, t) {
  (str1 = JSON.stringify({
    '🏳️‍🌈': [
      '流量',
      '套餐',
      '剩余',
      '重置',
      '到期',
      '时间',
      '应急',
      '过期',
      'Bandwidth',
      'expire',
      'Traffic',
      'traffic'
    ],
    '🇴🇲': ['阿曼', ' OM '],
    '🇦🇩': ['安道尔', '安道爾', 'Andorra'],
    '🇦🇴': ['安哥拉'],
    '🇦🇫': ['阿富汗'],
    '🇩🇿': ['阿尔及利亚', '阿爾及利亞'],
    '🇫🇴': ['法羅群島', '法罗群岛'],
    '🇧🇲': ['百慕大'],
    '🇦🇽': ['奧蘭群島', '奥兰群岛'],
    '🇦🇿': ['阿塞拜疆', 'Azerbaijan'],
    '🇦🇹': ['奥地利', '奧地利', 'Austria', '维也纳'],
    '🇦🇺': [
      'AU',
      'Australia',
      'Sydney',
      '澳大利亚',
      '澳洲',
      '墨尔本',
      '悉尼',
      '土澳',
      '京澳',
      '廣澳',
      '滬澳',
      '沪澳',
      '广澳'
    ],
    '🇧🇪': ['BE', '比利時', '比利时', 'Belgium'],
    '🇧🇬': ['保加利亚', '保加利亞', 'Bulgaria'],
    '🇵🇰': ['巴基斯坦', 'Pakistan', 'PAKISTAN'],
    '🇧🇭': ['巴林', 'Bahrain'],
    '🇵🇾': ['巴拉圭', 'Paraguay'],
    '🇧🇧': ['巴巴多斯'],
    '🇬🇶': ['赤道几内亚', '赤道幾內亞'],
    '🇹🇱': ['东帝汶', '東帝汶'],
    '🇰🇭': ['柬埔寨', 'Cambodia'],
    '🇿🇼': ['津巴布韦', '津巴布韋'],
    '🇺🇦': ['烏克蘭', '乌克兰', 'Ukraine'],
    '🇺🇿': ['乌兹别克斯坦', '烏茲別克斯坦', 'Uzbekistan'],
    '🇭🇷': ['克罗地亚', 'HR', '克羅地亞', 'Croatia'],
    '🇨🇦': [
      'CA',
      'Canada',
      'CANADA',
      'CAN',
      'Waterloo',
      '加拿大',
      '蒙特利尔',
      '温哥华',
      '楓葉',
      '枫叶',
      '滑铁卢',
      '多伦多'
    ],
    '🇨🇭': ['瑞士', '苏黎世', 'Switzerland', 'CH '],
    '🇳🇬': ['尼日利亚', 'NG', '尼日利亞', '拉各斯', 'Nigeria'],
    '🇨🇿': ['Czechia', '捷克'],
    '🇸🇰': ['斯洛伐克', 'SK', 'Slovakia'],
    '🇸🇮': ['斯洛文尼亚', '斯洛文尼亞', 'Slovenia'],
    '🇦🇲': ['亚美尼亚', '亞美尼亞', 'Armenia'],
    '🇷🇸': ['RS ', 'RS_', '塞尔维亚', '塞爾維亞', 'Seville', 'Sevilla'],
    '🇲🇩': ['摩爾多瓦', ' MD-', '摩尔多瓦', 'Moldova', ' MD '],
    '🇩🇪': [
      'DE ',
      'DE-',
      'DE_',
      'German',
      'GERMAN',
      '德国',
      '德國',
      '法兰克福',
      '京德',
      '滬德',
      '廣德',
      '沪德',
      '广德'
    ],
    '🇩🇰': ['DK', 'DNK', '丹麦', '丹麥', 'Denmark'],
    '🇪🇸': ['ES', '西班牙', 'Spain'],
    '🇪🇺': ['EU', '欧盟', '欧罗巴', '欧洲', 'European'],
    '🇫🇮': ['Finland', '芬兰', '芬蘭', '赫尔辛基'],
    '🇫🇷': ['FR', 'France', '法国', '法國', '巴黎'],
    '🇷🇪': ['留尼汪', '留尼旺', 'Réunion', 'Reunion'],
    '🇨🇼': ['库拉索', '庫拉索', 'Curaçao'],
    '🇬🇧': [
      'UK',
      'GB ',
      'England',
      'United Kingdom',
      '英国',
      '伦敦',
      '英',
      'Britain'
    ],
    '🇲🇴': ['MO', 'Macao', 'Macau', 'MAC', '澳门', '澳門', 'CTM'],
    '🇰🇿': ['哈萨克斯坦', '哈薩克斯坦', 'Kazakhstan'],
    '🇱🇦': ['老挝', '老挝', 'Laos'],
    '🇭🇺': ['匈牙利', 'Hungary'],
    '🇭🇳': ['洪都拉斯'],
    '🇱🇹': ['立陶宛', 'Lithuania'],
    '🇱🇰': ['斯里兰卡', '斯里蘭卡', 'Sri Lanka'],
    '🇧🇾': [
      'BY',
      '白俄罗斯',
      '白俄羅斯',
      'White Russia',
      'Republic of Belarus',
      'Belarus'
    ],
    '🇷🇺': [
      'RU ',
      'RU-',
      'RU_',
      'RUS',
      'Russia',
      '俄罗斯',
      '毛子',
      '俄国',
      '俄羅斯',
      '伯力',
      '莫斯科',
      '圣彼得堡',
      '西伯利亚',
      '新西伯利亚',
      '京俄',
      '杭俄',
      '廣俄',
      '滬俄',
      '广俄',
      '沪俄'
    ],
    '🇸🇬': [
      'SG',
      'Singapore',
      'SINGAPORE',
      '新加坡',
      '狮城',
      '獅城',
      '沪新',
      '京新',
      '泉新',
      '穗新',
      '深新',
      '杭新',
      '广新',
      '廣新',
      '滬新'
    ],
    '🇺🇸': [
      'US',
      'USA',
      'America',
      'United States',
      '美国',
      '美',
      '京美',
      '波特兰',
      '达拉斯',
      '俄勒冈',
      '凤凰城',
      '费利蒙',
      '硅谷',
      '矽谷',
      '拉斯维加斯',
      '洛杉矶',
      '圣何塞',
      '圣荷西',
      '圣克拉拉',
      '西雅图',
      '芝加哥',
      '沪美',
      '哥伦布',
      '纽约'
    ],
    '🇹🇼': [
      'TW',
      'Taiwan',
      'TAIWAN',
      '台湾',
      '台北',
      '台中',
      '新北',
      '彰化',
      'CHT',
      '台',
      'HINET'
    ],
    '🇮🇩': ['ID ', 'IDN ', 'Indonesia', '印尼', '印度尼西亚', '雅加达'],
    '🇮🇪': ['Ireland', 'IRELAND', 'IE ', '爱尔兰', '愛爾蘭', '都柏林'],
    '🇮🇱': ['Israel', '以色列'],
    '🇮🇳': ['India', 'IND', 'INDIA', '印度', '孟买', 'Mumbai', 'IN '],
    '🇮🇸': ['IS', 'ISL', '冰岛', '冰島', 'Iceland'],
    '🇰🇵': ['KP', '朝鲜', 'North Korea', '朝鮮'],
    '🇰🇷': ['KR', 'Korea', 'KOR', '韩国', '首尔', '韩', '韓', '春川'],
    '🇬🇭': ['加纳', 'Ghana', '迦納'],
    '🇱🇺': ['卢森堡', '盧森堡', 'LU ', 'Luxembourg'],
    '🇱🇻': ['Latvia', 'Latvija', '拉脱维亚'],
    '🇧🇩': ['孟加拉', 'Bengal'],
    '🇲🇽️': [' MEX', 'MX', '墨西哥', 'Mexico', 'MEXICO'],
    '🇲🇾': [
      ' MY',
      'Malaysia',
      'MALAYSIA',
      '马来西亚',
      '马来',
      '馬來',
      '大马',
      '大馬',
      '馬來西亞',
      '吉隆坡'
    ],
    '🇲🇲': ['缅甸', '緬甸'],
    '🇳🇮': ['尼加拉瓜'],
    '🇳🇱': [' NL', 'Netherlands', '荷兰', '荷蘭', '尼德蘭', '阿姆斯特丹'],
    '🇵🇭': [' PH', 'Philippines', '菲律宾', '菲律賓'],
    '🇷🇴': [' RO ', '罗马尼亚', 'Rumania', '羅馬尼亞'],
    '🇸🇦': ['沙特', '利雅得', 'Saudi Arabia', 'Saudi'],
    '🇸🇪': ['SE', 'Sweden', '瑞典'],
    '🇹🇭': [' TH', 'Thailand', '泰国', '泰國', '曼谷'],
    '🇹🇷': ['TR ', 'TR-', 'TR_', 'TUR', 'Turkey', '土耳其', '伊斯坦布尔'],
    '🇻🇳': ['VN', '越南', '胡志明市', 'Vietnam'],
    '🇮🇹': ['Italy', ' IT ', 'Nachash', '意大利', '米兰', '義大利'],
    '🇿🇦': ['South Africa', '南非', 'Johannesburg'],
    '🇦🇪': ['United Arab Emirates', '阿联酋', 'AE ', '迪拜', '阿聯酋', 'Dubai'],
    '🇧🇷': ['BR', 'Brazil', '巴西', '圣保罗'],
    '🇯🇵': [
      'JP',
      'Japan',
      'JAPAN',
      '日本',
      '东京',
      '大阪',
      '埼玉',
      '京日',
      '苏日',
      '沪日',
      '上日',
      '穗日',
      '川日',
      '中日',
      '泉日',
      '杭日',
      '深日',
      '辽日',
      '广日',
      'Tokyo'
    ],
    '🇦🇷': ['AR ', 'Argentina', '阿根廷', 'AR-'],
    '🇳🇴': ['Norway', '挪威', 'NO'],
    '🇵🇱': [' PL', 'POL', '波兰', '波蘭', 'Poland'],
    '🇨🇱': ['智利', 'Chile', 'CHILE'],
    '🇳🇿': ['新西蘭', '新西兰', 'New Zealand'],
    '🇬🇷': ['希腊', '希臘', 'Greece'],
    '🇪🇬': ['埃及', 'Egypt'],
    '🇮🇲': ['马恩岛', '馬恩島', 'Isle of Man', 'Mannin'],
    '🇵🇹': ['葡萄牙', 'Portugal'],
    '🇲🇳': ['蒙古', 'Mongolia'],
    '🇵🇪': ['秘鲁', '祕魯', 'Peru'],
    '🇨🇴': ['哥伦比亚', '哥倫比亞', 'Colombia'],
    '🇪🇪': ['爱沙尼亚', '愛沙尼亞', 'Estonia'],
    '🇱🇾': ['利比亚', '利比亞', 'Libya'],
    '🇲🇰': ['马其顿', '馬其頓', 'Macedonia'],
    '🇲🇹': ['马耳他', '馬其他', 'Malta'],
    '🇻🇪': ['委内瑞拉', 'Venezuela'],
    '🇧🇦': ['波黑共和国', '波黑', 'Bosnia and Herzegovina'],
    '🇬🇪': ['格魯吉亞', '格鲁吉亚', 'Georgia'],
    '🇦🇱': ['阿爾巴尼亞', '阿尔巴尼亚', 'Albania'],
    '🇨🇾': ['CY', '塞浦路斯', 'Cyprus'],
    '🇨🇷': ['哥斯达黎加', '哥斯達尼加', 'Costa Rica'],
    '🇹🇳': ['突尼斯', 'Tunisia'],
    '🇻🇦': ['梵蒂冈', '梵蒂岡'],
    '🇷🇼': ['卢旺达', '盧旺達'],
    '🇵🇦': ['巴拿马', '巴拿馬', 'Panama'],
    '🇮🇷': ['伊朗', 'Iran'],
    '🇯🇴': ['约旦', '約旦', 'Jordan'],
    '🇺🇾': ['乌拉圭', '烏拉圭', 'Uruguay'],
    '🇰🇪': ['肯尼亚', '肯尼亞', 'Kenya'],
    '🇰🇬': ['吉尔吉斯坦', '吉尔吉斯斯坦', 'Kyrghyzstan'],
    '🇳🇵': ['尼泊尔', '尼泊爾', 'Nepal'],
    '🇽🇰': ['科索沃', 'Kosovo'],
    '🇲🇦': ['摩洛哥', 'Morocco'],
    '🇪🇨': ['厄瓜多尔', '厄瓜多爾', 'EC', 'Ecuador'],
    '🇲🇺': ['毛里求斯', 'Mauritius'],
    '🇵🇷': ['波多黎各', 'PR ', 'PR-', 'Puerto Rico'],
    '🇬🇹': ['危地马拉', '危地馬拉', ' GT '],
    '🇭🇰': [
      'HK',
      'Hongkong',
      'Hong Kong',
      'HongKong',
      'HONG KONG',
      '香港',
      '深港',
      '沪港',
      '呼港',
      'HKT',
      'HKBN',
      'HGC',
      'WTT',
      'CMI',
      '穗港',
      '京港',
      '港'
    ],
    '🇨🇳': [
      'CN',
      'China',
      '回国',
      '中国',
      '中國',
      '江苏',
      '北京',
      '上海',
      '广州',
      '深圳',
      '杭州',
      '徐州',
      '青岛',
      '宁波',
      '镇江',
      'back'
    ],
    '🇨🇺': ['古巴'],
    '🇸🇲': ['圣马力诺', '聖馬利諾'],
    '🇰🇾': ['开曼群岛', '開曼群島'],
    '🇫🇯': ['斐济', '斐濟'],
    '🇬🇱': ['格陵兰', '格陵蘭'],
    '🇬🇮': ['直布罗陀', '直布羅陀'],
    '🇲🇪': ['黑山'],
    '🇱🇮': ['列支敦士登'],
    '🇬🇺': ['关岛', '關島'],
    '🇦🇶': ['南极', '南極'],
    '🇧🇹': ['不丹'],
    '🇲🇻': ['马尔代夫', '馬爾代夫'],
    '🇮🇶': ['伊拉克'],
    '🇸🇨': ['塞舌尔', '塞舌爾'],
    '🇶🇦': ['卡塔尔', '卡塔爾', ' QA '],
    '🇸🇾': ['叙利亚', '敘利亞', ' SY '],
    '🇱🇧': ['黎巴嫩', 'LB', 'Lebanon'],
    '🇧🇳': ['文莱', '汶萊', 'BRN', 'Negara Brunei Darussalam'],
    '🇨🇻': ['佛得角'],
    '🇸🇷': ['苏里南', '蘇里南'],
    '🇲🇨': ['摩纳哥', '摩納哥'],
    '🇯🇲': ['牙买加', '牙買加 '],
    '🌏': ['亚洲', 'Asia'],
    '🇹🇬': ['多哥'],
    '🇵🇸': ['巴勒斯坦'],
    '🇬🇫': ['法屬圭亞那', '法属圭亚那'],
    '🇹🇹': ['特立尼达和多巴哥', '特立尼達和多巴哥']
  })),
    (aa = JSON.parse(str1)),
    (bb = JSON.parse(str1.replace(/🇹🇼/g, ' 🇨🇳')));
  let s = 1 == e ? aa : bb,
    r = 0;
  for (let e in s)
    for (i in ((dd = s[e]), dd))
      if (-1 != t.indexOf(dd[i]))
        return (
          (r = 1),
          (nname =
            e +
            ' ' +
            t
              .replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, '')
              .trim()),
          [nname, e]
        );
  if (0 == r)
    return [
      '🏴‍☠️ ' +
        t.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, '').trim(),
      '🏴‍☠️'
    ];
}
function emoji_handle(e, t) {
  let s = [],
    r = e;
  for (let e = 0; e < r.length; e++)
    if (-1 != r[e].indexOf('tag=')) {
      let n = r[e].split('tag=')[1].trim(),
        o = r[e].split('tag=')[0];
      var i = n;
      1 == t
        ? (i = get_emoji(1, i)[0])
        : 2 == t
        ? (i = get_emoji(2, i)[0])
        : -1 == t && (i = emoji_del(n));
      let l = o + 'tag=' + i.replace('  ', ' ').trim();
      s.push(l);
    }
  return s;
}
function Surge2QX(e) {
  let t = e.split('\n').map(isSurge).filter(Boolean),
    s = [],
    r = '';
  for (let e = 0; e < t.length; e++) {
    let i = t[e];
    if (
      (-1 != i.split('=')[1].split(',')[0].indexOf('trojan')
        ? (r = Strojan2QX(i))
        : -1 != i.split('=')[1].split(',')[0].indexOf('http')
        ? (r = Shttp2QX(i))
        : -1 != i.split('=')[1].split(',')[0].indexOf('vmess')
        ? (r = SVmess2QX(i))
        : -1 != i.split('=')[1].split(',')[0].indexOf('ss')
        ? (r = SSS2QX(i))
        : -1 != i.split('=')[1].split(',')[0].indexOf('socks5')
        ? (r = SS52QX(i))
        : -1 != i.split('=')[1].split(',')[0].indexOf('custom') &&
          (r = SCT2QX(i)),
      (r = 0 != Pudp0 ? XUDP(r, Pudp0) : r),
      (r = 0 != Ptfo0 ? XTFO(r, Ptfo0) : r),
      -1 != i.indexOf('test-url'))
    ) {
      let e = ', server_check_url' + i.split('test-url')[1].split(',')[0];
      r = r.replace(/\,(\s)*tag/, e + ', tag');
    }
    s.push(r);
  }
  return s;
}
function SCT2QX(e) {
  let t = e,
    s = 'tag=' + t.split('=')[0].trim(),
    r = t.split(',')[1].trim() + ':' + t.split(',')[2].trim(),
    i = 'method=' + t.split(',')[3].trim(),
    n = 'password=' + t.split(',')[4].trim();
  -1 != t.indexOf('obfs')
    ? (pobfs =
        'obfs=' +
        t
          .replace(/obfs-host/, '')
          .split('obfs')[1]
          .split(',')[0]
          .split('=')[1])
    : (pobfs = '');
  let o =
    -1 != t.indexOf('obfs-host')
      ? 'obfs-host' + t.split('obfs-host')[1].split(',')[0].trim()
      : '';
  '' != o && (pobfs = pobfs + ', ' + o);
  let l = 'true' == paraCheck(t, 'tfo') ? 'fast-open=true' : 'fast-open=false',
    p =
      'true' == paraCheck(t, 'udp-relay')
        ? 'udp-relay=true'
        : 'udp-relay=false';
  return '' != pobfs
    ? 'shadowsocks= ' + [r, i, n, pobfs, l, p, s].join(', ')
    : 'shadowsocks= ' + [r, i, n, l, p, s].join(', ');
}
function SSS2QX(e) {
  let t = e,
    s = 'tag=' + t.split('=')[0].trim(),
    r = t.split(',')[1].trim() + ':' + t.split(',')[2].trim(),
    i = 'method=' + t.split('encrypt-method')[1].split(',')[0].split('=')[1],
    n = 'password=' + t.split('password')[1].split(',')[0].split('=')[1];
  -1 != t.indexOf('obfs')
    ? (pobfs =
        'obfs=' +
        t
          .replace(/obfs-host/, '')
          .split('obfs')[1]
          .split(',')[0]
          .split('=')[1])
    : (pobfs = '');
  let o =
    -1 != t.indexOf('obfs-host')
      ? 'obfs-host' + t.split('obfs-host')[1].split(',')[0].trim()
      : '';
  '' != o && (pobfs = pobfs + ', ' + o);
  let l = 'true' == paraCheck(t, 'tfo') ? 'fast-open=true' : 'fast-open=false',
    p =
      'true' == paraCheck(t, 'udp-relay')
        ? 'udp-relay=true'
        : 'udp-relay=false';
  return '' != pobfs
    ? 'shadowsocks= ' + [r, i, n, pobfs, l, p, s].join(', ')
    : 'shadowsocks= ' + [r, i, n, l, p, s].join(', ');
}
function SVmess2QX(e) {
  let t = e,
    s = 'tag=' + t.split('=')[0].trim(),
    r = t.split(',')[1].trim() + ':' + t.split(',')[2].trim(),
    i =
      -1 != t.indexOf('username')
        ? 'password=' +
          t.split('username')[1].split(',')[0].split('=')[1].trim()
        : '',
    n = 'method=aes-128-gcm',
    o = 'true' == paraCheck(t, 'tls13') ? 'tls13=true' : 'tls13=false',
    l =
      -1 != t.replace(/ /g, '').indexOf('skip-cert-verify=false')
        ? 'tls-verification=true'
        : 'tls-verification=false';
  (pvefify = 1 == Pcert0 ? 'tls-verification=true' : l),
    'true' == paraCheck(t.replace(/tls13/, ''), 'tls') &&
    'true' == paraCheck(t.replace(/ws-header/, ''), 'ws')
      ? (pobfs = 'obfs=wss, ' + o + ', ' + l)
      : 'true' == paraCheck(t.replace(/ws-header/, ''), 'ws')
      ? (pobfs = 'obfs=ws')
      : 'false' != paraCheck(t.replace(/tls13/, ''), 'tls')
      ? (pobfs = 'obfs=over-tls, ' + o + ', ' + l)
      : 'false' == paraCheck(t.replace(/ws-header/, ''), 'ws') && (pobfs = '');
  let p =
      'false' != paraCheck(t, 'ws-path')
        ? 'obfs-uri=' + t.split('ws-path')[1].split(',')[0].split('=')[1].trim()
        : 'obfs-uri=/',
    a =
      -1 != t.indexOf('ws-headers')
        ? 'obfs-host=' +
          t
            .split('ws-headers')[1]
            .split(',')[0]
            .split('=')[1]
            .split(':')[1]
            .trim()
        : '';
  -1 != pobfs.indexOf('ws') &&
    (pobfs = '' != a ? pobfs + ', ' + p + ', ' + a : pobfs + ', ' + p);
  let f = 'true' == paraCheck(t, 'tfo') ? 'fast-open=true' : 'fast-open=false';
  return '' != pobfs
    ? 'vmess= ' + [r, i, n, pobfs, f, s].join(', ')
    : 'vmess= ' + [r, i, n, f, s].join(', ');
}
function isSurge(e) {
  if (
    -1 != e.indexOf('=') &&
    ((cnt = e.split('=')[1].split(',')[0].trim()),
    'http' == cnt ||
      'ss' == cnt ||
      'trojan' == cnt ||
      'vmess' == cnt ||
      'custom' == cnt ||
      'https' == cnt ||
      'socks5' == cnt ||
      'socks5-tls' == cnt)
  )
    return e;
}
function paraCheck(e, t) {
  return -1 == (e = e.replace(/ /g, '')).indexOf(t + '=')
    ? 'false'
    : e
        .split(t + '=')[1]
        .split(',')[0]
        .trim();
}
function Strojan2QX(e) {
  let t = e,
    s = 'tag=' + t.split('=')[0].trim(),
    r = t.split(',')[1].trim() + ':' + t.split(',')[2].trim(),
    i = 'password=' + t.split('password')[1].split(',')[0].split('=')[1].trim(),
    n = 'true' == paraCheck(t, 'tfo') ? 'fast-open=true' : 'fast-open=false',
    o =
      -1 != t.replace(/ /g, '').indexOf('skip-cert-verify=false')
        ? 'tls-verification=true'
        : 'tls-verification=false',
    l =
      -1 != t.indexOf('sni')
        ? 'tls-host=' + t.split('sni')[1].split(',')[0].split('=')[1]
        : '';
  return (
    (pvefify = 1 == Pcert0 ? 'tls-verification=true' : o),
    'trojan= ' +
      [
        r,
        i,
        'over-tls=true',
        n,
        'true' == paraCheck(t, 'tls13') ? 'tls13=true' : 'tls13=false',
        l,
        o,
        s
      ]
        .filter(Boolean)
        .join(', ')
  );
}
function Shttp2QX(e) {
  let t = e,
    s = 'tag=' + t.split('=')[0].trim(),
    r = t.split(',')[1].trim() + ':' + t.split(',')[2].trim(),
    i =
      -1 != t.indexOf('username')
        ? 'username=' +
          t.split('username')[1].split(',')[0].split('=')[1].trim()
        : '',
    n =
      -1 != t.indexOf('password')
        ? 'password=' +
          t.split('password')[1].split(',')[0].split('=')[1].trim()
        : '',
    o =
      'https' == t.split('=')[1].split(',')[0].trim()
        ? 'over-tls=true'
        : 'over-tls=false',
    l = 'true' == paraCheck(t, 'tfo') ? 'fast-open=true' : 'fast-open=false';
  if ('over-tls=true' == o) {
    let e =
      -1 != t.replace(/ /g, '').indexOf('skip-cert-verify=false')
        ? 'tls-verification=true'
        : 'tls-verification=false';
    (pvefify = 1 == Pcert0 ? 'tls-verification=true' : e),
      (o =
        o +
        ', ' +
        e +
        ', ' +
        ('true' == paraCheck(t, 'tls13') ? 'tls13=true' : 'tls13=false'));
  }
  return '' != i
    ? 'http= ' + [r, i, n, o, l, s].join(', ')
    : 'http= ' + [r, o, l, s].join(', ');
}
function SS52QX(e) {
  let t = e,
    s = 'tag=' + t.split('=')[0].trim(),
    r = t.split(',')[1].trim() + ':' + t.split(',')[2].trim(),
    i =
      -1 != t.indexOf('username')
        ? 'username=' +
          t.split('username')[1].split(',')[0].split('=')[1].trim()
        : '',
    n =
      -1 != t.indexOf('password')
        ? 'password=' +
          t.split('password')[1].split(',')[0].split('=')[1].trim()
        : '',
    o =
      'socks5-tls' == t.split('=')[1].split(',')[0].trim()
        ? 'over-tls=true'
        : 'over-tls=false',
    l = 'true' == paraCheck(t, 'tfo') ? 'fast-open=true' : 'fast-open=false';
  if ('over-tls=true' == o) {
    let e =
      -1 != t.replace(/ /g, '').indexOf('skip-cert-verify=false')
        ? 'tls-verification=true'
        : 'tls-verification=false';
    (pvefify = 1 == Pcert0 ? 'tls-verification=true' : e),
      (o =
        o +
        ', ' +
        e +
        ', ' +
        ('true' == paraCheck(t, 'tls13') ? 'tls13=true' : 'tls13=false'));
  }
  return '' != i
    ? 'socks5= ' + [r, i, n, o, l, s].join(', ')
    : 'socks5= ' + [r, o, l, s].join(', ');
}
function Loon2QX(e) {
  let t = e.split('=')[1].split(',')[0].trim(),
    s = '';
  return (
    'Shadowsocks' == t
      ? (s = LoonSS2QX(e))
      : 'ShadowsocksR' == t
      ? (s = LoonSSR2QX(e))
      : 'VLESS' == t && (s = LoonVL2QX(e)),
    s
  );
}
function LoonSS2QX(e) {
  let t = 'shadowsocks=',
    s = [e.split(',')[1].trim(), e.split(',')[2].trim()].join(':'),
    r = 'method=' + e.split(',')[3].trim(),
    i = 'password=' + e.split(',')[4].trim().split('"')[1],
    n =
      7 == e.split(',').length
        ? ', ' +
          [
            'obfs=' + e.split(',')[5].trim(),
            'obfs-host=' + e.split(',')[6].trim()
          ].join(',')
        : '',
    o = ', tag=' + e.split('=')[0].trim();
  return (t = t + [s, r, i].join(', ') + n + o), t;
}
function LoonSSR2QX(e) {
  let t = 'shadowsocks=',
    s = [e.split(',')[1].trim(), e.split(',')[2].trim()].join(':'),
    r = 'method=' + e.split(',')[3].trim(),
    i = 'password=' + e.split(',')[4].trim().split('"')[1],
    n = 'ssr-protocol=' + e.split(',')[5].trim(),
    o = 'ssr-protocol-param=' + e.split(',')[6].replace(/\{|\}/g, '').trim(),
    l = 'obfs=' + e.split(',')[7].trim(),
    p = 'obfs-host=' + e.split(',')[8].replace(/\{|\}/g, '').trim(),
    a = ', tag=' + e.split('=')[0].trim();
  return (t = t + [s, r, i, n, o, l, p].join(', ') + a), t;
}
function LoonVL2QX(e) {
  let t = ', tag=' + e.split('=')[0].trim(),
    s = 'vless=',
    r = [
      (e = e.replace(' ', '')).split(',')[1].trim(),
      e.split(',')[2].trim()
    ].join(':'),
    i = 'password=' + e.split(',')[3].trim().split('"')[1];
  return (
    -1 != e.indexOf('transport=tcp')
      ? (obfs = '-1' == e.indexOf('over-tls=true') ? '' : 'obfs=over-tls')
      : -1 != e.indexOf('transport=http')
      ? (obfs = 'obfs=http')
      : -1 != e.indexOf('transport=ws') &&
        (obfs = '-1' == e.indexOf('over-tls=true') ? 'obfs=ws' : 'obfs=wss'),
    (vpath =
      -1 == e.indexOf('path=')
        ? ''
        : 'obfs-uri=' + e.split('path=')[1].split(',')[0]),
    -1 != e.indexOf('host=')
      ? (obfshost = 'obfs-host=' + e.split('host=')[1].split(',')[0])
      : -1 != e.indexOf('tls-name=') &&
        (obfshost = 'obfs-host=' + e.split('tls-name=')[1].split(',')[0]),
    (s = s + [r, 'method=none', i, obfs, obfshost, vpath].join(', ') + t),
    s
  );
}
function YAMLFix(e) {
  return (
    -1 !=
      (e = e
        .replace(/\[/g, 'yaml@bug1')
        .replace(/\\r/g, '')
        .replace(/\*/g, 'yaml@bug2')).indexOf('{') &&
      /\{\s*\"*(name|type|server)/.test(e) &&
      (e = (e = (e = e
        .replace(/(^|\n)- /g, '$1  - ')
        .replace(/ {4}- /g, '  - ')
        .replace(/:(?!\s)/g, ': ')
        .replace(/\,\"/g, ', "')
        .replace(/: {/g, ': {,   ')
        .replace(/, (Host|host|path|mux)/g, ',   $1')).replace(
        /{\s*name: (.*?), (.*?):/g,
        '{name: "$1", $2:'
      ))
        .replace(/{\s*|\s*}/g, '')
        .replace(/,/g, '\n   ')),
    (e = e
      .replace(/\n\s*\-\s*\n.*name/g, '\n  - name')
      .replace(/\$|\`/g, '')
      .split('proxy-providers:')[0]
      .split('proxy-groups:')[0]
      .replace(
        /\"(name|type|server|port|cipher|password|uuid|alterId|udp)(\"*)/g,
        '$1'
      )),
    1 == Pdbg &&
      $notify(
        'part-fix0:',
        '',
        'part-fix0:\nproxies:\n' + e.split('proxies:')[1]
      ),
    (e = e
      .replace(/\n\s{2}([a-zA-Z]+.*\:)/g, '\n    $1')
      .replace(/\n(\-.*)/g, '\n  $1')),
    1 == Pdbg &&
      $notify(
        'part-fix1:',
        '',
        'part-fix1:\nproxies:\n' + e.split('proxies:')[1]
      ),
    (e = e
      .replace(/name\:(.*?)\:(.*?)\n/gim, 'name:$1冒号$2\n')
      .replace(/\s{6}Host\:/g, '      Host:')),
    (items = e.split('\n').map(yamlcheck)),
    (e =
      -1 ==
      (e =
        -1 != (e = items.join('\n')).indexOf('proxies:') &&
        /\n\s{4}server/.test(e)
          ? e
              .replace(/\n\s{4}(headers|path)/g, '\n      $1')
              .replace(/\n\s{6}Host/g, '\n        Host')
              .replace(/\t/g, '')
          : e).indexOf('proxies:')
        ? 'proxies:\n' + e
        : 'proxies:' + e.split('proxies:')[1]),
    1 == Pdbg && $notify('After-Fix', 'this is', 'After-fix:\n' + e),
    e
  );
}
function yamlcheck(e) {
  if (-1 != e.indexOf('name'))
    for (let t = 0; t < 10; t++)
      e = e.replace(new RegExp(patn[0][t], 'gmi'), patn[4][t]);
  if (/(:|-)/.test(e)) return e;
}
function Clash2QX(e) {
  const t = new YAML();
  1 == Pdbg && $notify('Before YAML Parse', 'content', e);
  let s = JSON.stringify(t.parse(YAMLFix(e)))
    .replace(/yaml@bug𝟙/g, '[')
    .replace(/冒号/gim, ':')
    .replace(/yaml@bug𝟚/g, '*');
  for (var r = 0; r < 10; r++)
    s = s.replace(new RegExp(patn[4][r], 'gmi'), patn[0][r]);
  let i = JSON.parse(s).proxies;
  1 == Pdbg && $notify('After YAML Parse', 'content', JSON.stringify(i));
  let n = i.length,
    o = [],
    l = '';
  for (r = 0; r < n; r++)
    try {
      (l = i[r]),
        (typecc = l.type),
        'ss' == typecc
          ? (l = CSS2QX(l))
          : 'ssr' == typecc
          ? (l = CSSR2QX(l))
          : 'vmess' == typecc
          ? (l = CV2QX(l))
          : 'trojan' == typecc
          ? (l = CT2QX(l))
          : 'http' == typecc
          ? (l = CH2QX(l))
          : 'socks5' == typecc && (l = CS52QX(l)),
        (l = 0 != Pudp0 ? XUDP(l, Pudp0) : l),
        (l = 0 != Ptfo0 ? XTFO(l, Ptfo0) : l),
        o.push(l);
    } catch (e) {}
  return o.join('\n');
}
function CSS2QX(e) {
  return (
    (tag = 'tag=' + e.name.replace(/\\U.+?\s{1}/gi, '')),
    (ipt = e.server + ':' + e.port),
    (pwd = 'password=' + e.password),
    (mtd = 'method=' + e.cipher),
    (udp = e.udp ? 'udp-relay=true' : 'udp-relay=false'),
    (uot = e['udp-over-tcp'] ? 'udp-over-tcp=true' : 'udp-over-tcp=false'),
    (tfo = e.tfo ? 'fast-open=true' : 'fast-open=false'),
    (obfs = e['plugin-opts'] ? 'obfs=' + e['plugin-opts'].mode : ''),
    (ohost = e['plugin-opts'] ? 'obfs-host=' + e['plugin-opts'].host : ''),
    (ouri = ''),
    (cert = ''),
    -1 != obfs.indexOf('websocket') &&
      ((obfs = e['plugin-opts'].tls ? 'obfs=wss' : 'obfs=ws'),
      (ohost = e['plugin-opts'].host
        ? 'obfs-host=' + e['plugin-opts'].host
        : ''),
      (ouri = e['plugin-opts'].path ? 'obfs-uri=' + e['plugin-opts'].path : ''),
      'obfs=wss' == obfs &&
        (cert = 1 == Pcert0 ? '' : 'tls-verification =false')),
    (node =
      'shadowsocks=' +
      [ipt, pwd, mtd, udp, uot, tfo, obfs, ohost, ouri, cert, tag]
        .filter(Boolean)
        .join(', ')),
    node
  );
}
function CSSR2QX(e) {
  return (
    (tag = 'tag=' + e.name.replace(/\\U.+?\s{1}/gi, '')),
    (ipt = e.server + ':' + e.port),
    (pwd = 'password=' + e.password),
    (mtd = 'method=' + e.cipher),
    (udp = e.udp ? 'udp-relay=true' : 'udp-relay=false'),
    (tfo = e.tfo ? 'fast-open=true' : 'fast-open=false'),
    (prot = 'ssr-protocol=' + e.protocol),
    (ohost = ''),
    (ppara = ''),
    e.protocolparam && (e['protocol-param'] = e.protocolparam),
    'string' == typeof e['protocol-param']
      ? (ppara = 'ssr-protocol-param=' + e['protocol-param'])
      : 'object' == typeof e['protocol-param'] &&
        (ppara =
          'ssr-protocol-param=' +
          JSON.stringify(e['protocol-param']).replace(/{|}|\s|"/g, '')),
    (obfs = 'obfs=' + e.obfs),
    e['obfs-param']
      ? (ohost = 'obfs-host=' + e['obfs-param'])
      : e.obfsparam && (ohost = 'obfs-host=' + e.obfsparam),
    (node =
      'shadowsocks=' +
      [ipt, pwd, mtd, udp, tfo, prot, ppara, obfs, ohost, tag]
        .filter(Boolean)
        .join(', ')),
    node
  );
}
function CV2QX(e) {
  (tag = 'tag=' + e.name.replace(/\\U.+?\s{1}/gi, ' ')),
    (ipt = e.server + ':' + e.port),
    (pwd = 'password=' + e.uuid),
    (mtd = 'method=aes-128-gcm'),
    (udp = (e.udp, 'udp-relay=false')),
    (tfo = e.tfo ? 'fast-open=true' : 'fast-open=false'),
    (obfs = ''),
    'ws' == e.network && e.tls
      ? (obfs = 'obfs=wss')
      : 'ws' == e.network
      ? (obfs = 'obfs=ws')
      : 'http' == e.network
      ? (obfs = 'obfs=http')
      : e.tls && (obfs = 'obfs=over-tls');
  const t = getValue(() => e['ws-opts'].headers.Host);
  return (
    (ohost = e['ws-headers'] ? 'obfs-host=' + e['ws-headers'].Host : ''),
    (ohost = t ? 'obfs-host=' + t : ohost),
    (ohost = e.servername ? 'obfs-host=' + e.servername : ohost),
    (ouri = e['ws-path'] ? 'obfs-uri=' + e['ws-path'] : ''),
    (ouri = e['ws-opts'] ? 'obfs-uri=' + e['ws-opts'].path : ouri),
    (cert = e['skip-cert-verify'] && e.tls ? 'tls-verification=false' : ''),
    (caead = e.alterId && 0 != e.alterId ? 'aead=false' : ''),
    1 == Pcert0 && e.tls
      ? (cert = 'tls-verification=true')
      : 1 != Pcert0 && e.tls && (cert = 'tls-verification=false'),
    (node =
      'vmess=' +
      [ipt, pwd, mtd, udp, tfo, obfs, ohost, ouri, cert, caead, tag]
        .filter(Boolean)
        .join(', ')),
    node
  );
}
function CT2QX(e) {
  return (
    (tag = 'tag=' + e.name.replace(/\\U.+?\s{1}/gi, ' ')),
    (ipt = e.server + ':' + e.port),
    (pwd = 'password=' + e.password),
    (otls = 'over-tls=true'),
    (opath = ''),
    (ohost = ''),
    (cert = e['skip-cert-verify']
      ? 'tls-verification=false'
      : 'tls-verification=true'),
    (cert = 1 == Pcert0 ? 'tls-verification=true' : 'tls-verification=false'),
    (tls13 = 1 == PTls13 ? 'tls13=true' : 'tls13=false'),
    (udp = (e.udp, 'udp-relay=false')),
    (tfo = e.tfo ? 'fast-open=true' : 'fast-open=false'),
    'ws' == e.network &&
      ((otls = 'obfs=wss'),
      e['ws-opts'] &&
        ((opath = e['ws-opts'].path ? 'obfs-uri=' + e['ws-opts'].path : ''),
        (ohost = e['ws-opts'].headers
          ? 'obfs-host=' + e['ws-opts'].headers.Host
          : ''))),
    (node =
      'trojan=' +
      [ipt, pwd, otls, opath, ohost, cert, tls13, udp, tfo, tag]
        .filter(Boolean)
        .join(', ')),
    node
  );
}
function CH2QX(e) {
  return (
    (tag = 'tag=' + e.name.replace(/\\U.+?\s{1}/gi, ' ')),
    (ipt = e.server + ':' + e.port),
    (uname = e.username ? 'username=' + e.username : ''),
    (pwd =
      e.password && 'string' == typeof e.password
        ? 'password=' + e.password
        : ''),
    (tls = e.tls ? 'over-tls=true' : ''),
    (cert = e['skip-cert-verify'] && e.tls ? 'tls-verification=false' : ''),
    1 == Pcert0 && e.tls
      ? (cert = 'tls-verification=true')
      : 1 != Pcert0 && e.tls && (cert = 'tls-verification=false'),
    (node =
      'http=' + [ipt, uname, pwd, tls, cert, tag].filter(Boolean).join(', ')),
    node
  );
}
function CS52QX(e) {
  return (
    (tag = 'tag=' + e.name.replace(/\\U.+?\s{1}/gi, ' ')),
    (ipt = e.server + ':' + e.port),
    (uname = e.username ? 'username=' + e.username : ''),
    (pwd =
      e.password && 'string' == typeof e.password
        ? 'password=' + e.password
        : ''),
    (tls = e.tls ? 'over-tls=true' : ''),
    (cert = e['skip-cert-verify'] && e.tls ? 'tls-verification=false' : ''),
    1 == Pcert0 && e.tls
      ? (cert = 'tls-verification=true')
      : 1 != Pcert0 && e.tls && (cert = 'tls-verification=false'),
    (node =
      'socks5=' + [ipt, uname, pwd, tls, cert, tag].filter(Boolean).join(', ')),
    node
  );
}
function XUDP(e, t) {
  let s =
    1 == t && /^(shadowsocks|trojan|vmess)/.test(e.trim())
      ? 'udp-relay=true, '
      : 'udp-relay=false, ';
  if (-1 != e.indexOf('udp-relay'))
    var r = e.replace(RegExp('udp-relay.*?,', 'gmi'), s);
  else r = e.replace(new RegExp('tag.*?=', 'gmi'), s + 'tag=');
  return r;
}
function XTFO(e, t) {
  let s = 1 == t ? 'fast-open=true, ' : 'fast-open=false, ';
  if (-1 != e.indexOf('fast-open'))
    var r = e.replace(RegExp('fast-open.*?,', 'gmi'), s);
  else r = e.replace(RegExp('tag.*?=', 'gmi'), s + 'tag=');
  return r;
}
function UOT(e) {
  return (
    (cnts = e.replace(/\s*/g, '')),
    /^shadowsocks=/.test(cnts) &&
      (e =
        -1 != cnts.indexOf('udp-over-tcp')
          ? e.replace(/udp-over-tcp\s*\=\s*false/g, 'udp-over-tcp=true')
          : e + ', udp-over-tcp=true'),
    e
  );
}
function Base64Code() {
  let e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    t = (function (e) {
      let t = {};
      for (let s = 0, r = e.length; s < r; s++) t[e.charAt(s)] = s;
      return t;
    })(e),
    s = String.fromCharCode,
    r = function (e) {
      if (e.length < 2)
        return (t = e.charCodeAt(0)) < 128
          ? e
          : t < 2048
          ? s(192 | (t >>> 6)) + s(128 | (63 & t))
          : s(224 | ((t >>> 12) & 15)) +
            s(128 | ((t >>> 6) & 63)) +
            s(128 | (63 & t));
      var t =
        65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
      return (
        s(240 | ((t >>> 18) & 7)) +
        s(128 | ((t >>> 12) & 63)) +
        s(128 | ((t >>> 6) & 63)) +
        s(128 | (63 & t))
      );
    },
    i = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    n = function (t) {
      let s = [0, 2, 1][t.length % 3];
      var r =
        (t.charCodeAt(0) << 16) |
        ((t.length > 1 ? t.charCodeAt(1) : 0) << 8) |
        (t.length > 2 ? t.charCodeAt(2) : 0);
      return [
        e.charAt(r >>> 18),
        e.charAt((r >>> 12) & 63),
        s >= 2 ? '=' : e.charAt((r >>> 6) & 63),
        s >= 1 ? '=' : e.charAt(63 & r)
      ].join('');
    };
  this.encode = function (e) {
    return '[object Uint8Array]' === Object.prototype.toString.call(e)
      ? e.toString('base64')
      : ((t = (function (e) {
          return e.replace(i, r);
        })(String(e))),
        t.replace(/[\s\S]{1,3}/g, n));
  };
  let o =
      /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    l = function (e) {
      switch (e.length) {
        case 4:
          var t =
            (((7 & e.charCodeAt(0)) << 18) |
              ((63 & e.charCodeAt(1)) << 12) |
              ((63 & e.charCodeAt(2)) << 6) |
              (63 & e.charCodeAt(3))) -
            65536;
          return s(55296 + (t >>> 10)) + s(56320 + (1023 & t));
        case 3:
          return s(
            ((15 & e.charCodeAt(0)) << 12) |
              ((63 & e.charCodeAt(1)) << 6) |
              (63 & e.charCodeAt(2))
          );
        default:
          return s(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
      }
    },
    p = function (e) {
      let r = e.length;
      var i = r % 4,
        n =
          (r > 0 ? t[e.charAt(0)] << 18 : 0) |
          (r > 1 ? t[e.charAt(1)] << 12 : 0) |
          (r > 2 ? t[e.charAt(2)] << 6 : 0) |
          (r > 3 ? t[e.charAt(3)] : 0),
        o = [s(n >>> 16), s((n >>> 8) & 255), s(255 & n)];
      return (o.length -= [0, 0, 2, 1][i]), o.join('');
    },
    a = function (e) {
      return (function (e) {
        return e.replace(/\S{1,4}/g, p);
      })(e).replace(o, l);
    };
  this.decode = function (e) {
    return a(
      String(e)
        .replace(/[-_]/g, function (e) {
          return '-' == e ? '+' : '/';
        })
        .replace(/[^A-Za-z0-9\+\/]/g, '')
    )
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<');
  };
}
function YAML() {
  let e = [];
  var t = [],
    s = 0,
    r = {
      regLevel: new RegExp('^([\\s\\-]+)'),
      invalidLine: new RegExp('^\\-\\-\\-|^\\.\\.\\.|^\\s*#.*|^\\s*$'),
      dashesString: new RegExp('^\\s*\\"([^\\"]*)\\"\\s*$'),
      quotesString: new RegExp("^\\s*\\'([^\\']*)\\'\\s*$"),
      float: new RegExp('^[+-]?[0-9]+\\.[0-9]+(e[+-]?[0-9]+(\\.[0-9]+)?)?$'),
      integer: new RegExp('^[+-]?[0-9]+$'),
      array: new RegExp('\\[\\s*(.*)\\s*\\]'),
      map: new RegExp('\\{\\s*(.*)\\s*\\}'),
      key_value: new RegExp('([a-z0-9_-][ a-z0-9_-]*):( .+)', 'i'),
      single_key_value: new RegExp('^([a-z0-9_-][ a-z0-9_-]*):( .+?)$', 'i'),
      key: new RegExp('([a-z0-9_-][ a-z0-9_-]+):( .+)?', 'i'),
      item: new RegExp('^-\\s+'),
      trim: new RegExp('^\\s+|\\s+$'),
      comment: new RegExp(
        '([^\\\'\\"#]+([\\\'\\"][^\\\'\\"]*[\\\'\\"])*)*(#.*)?'
      )
    };
  function i(e) {
    return {
      parent: null,
      length: 0,
      level: e,
      lines: [],
      children: [],
      addChild: function (e) {
        this.children.push(e), (e.parent = this), ++this.length;
      }
    };
  }
  function n(e) {
    let t = null;
    if ('true' == (e = e.replace(r.trim, ''))) return !0;
    if ('false' == e) return !1;
    if ('.NaN' == e) return Number.NaN;
    if ('null' == e) return null;
    if ('.inf' == e) return Number.POSITIVE_INFINITY;
    if ('-.inf' == e) return Number.NEGATIVE_INFINITY;
    if ((t = e.match(r.dashesString))) return t[1];
    if ((t = e.match(r.quotesString))) return t[1];
    if ((t = e.match(r.float))) return parseFloat(t[0]);
    if ((t = e.match(r.integer))) return parseInt(t[0]);
    if (isNaN((t = Date.parse(e)))) {
      if ((t = e.match(r.single_key_value)))
        return ((o = {})[t[1]] = n(t[2])), o;
      if ((t = e.match(r.array))) {
        for (
          var s = 0, i = ' ', o = [], l = '', p = !1, a = 0, f = t[1].length;
          a < f;
          ++a
        ) {
          if ("'" == (i = t[1][a]) || '"' == i) {
            if (!1 === p) {
              (p = i), (l += i);
              continue;
            }
            if (("'" == i && "'" == p) || ('"' == i && '"' == p)) {
              (p = !1), (l += i);
              continue;
            }
          } else if (!1 !== p || ('[' != i && '{' != i))
            if (!1 !== p || (']' != i && '}' != i)) {
              if (!1 === p && 0 == s && ',' == i) {
                o.push(n(l)), (l = '');
                continue;
              }
            } else --s;
          else ++s;
          l += i;
        }
        return l.length > 0 && o.push(n(l)), o;
      }
      if ((t = e.match(r.map))) {
        for (
          s = 0, i = ' ', o = [], l = '', p = !1, a = 0, f = t[1].length;
          a < f;
          ++a
        ) {
          if ("'" == (i = t[1][a]) || '"' == i) {
            if (!1 === p) {
              (p = i), (l += i);
              continue;
            }
            if (("'" == i && "'" == p) || ('"' == i && '"' == p)) {
              (p = !1), (l += i);
              continue;
            }
          } else if (!1 !== p || ('[' != i && '{' != i))
            if (!1 !== p || (']' != i && '}' != i)) {
              if (!1 === p && 0 == s && ',' == i) {
                o.push(l), (l = '');
                continue;
              }
            } else --s;
          else ++s;
          l += i;
        }
        l.length > 0 && o.push(l);
        let e = {};
        for (a = 0, f = o.length; a < f; ++a)
          (t = o[a].match(r.key_value)) && (e[t[1]] = n(t[2]));
        return e;
      }
      return e;
    }
    return new Date(t);
  }
  function o(e) {
    let t = e.lines,
      s = e.children,
      r = [t.join(' ')];
    for (let e = 0, t = s.length; e < t; ++e) r.push(o(s[e]));
    return r.join('\n');
  }
  function l(e) {
    let t = e.lines,
      s = e.children,
      r = t.join('\n');
    for (let e = 0, t = s.length; e < t; ++e) r += l(s[e]);
    return r;
  }
  function p(s) {
    let i = null,
      a = {},
      f = null,
      c = null,
      d = null,
      u = -1,
      h = [],
      g = !0;
    for (var m = 0, x = s.length; m < x; ++m)
      if (-1 == u || u == s[m].level) {
        h.push(m),
          (u = s[m].level),
          (f = s[m].lines),
          (c = s[m].children),
          (d = null);
        for (let s = 0, u = f.length; s < u; ++s) {
          let u = f[s];
          if ((i = u.match(r.key))) {
            let s = i[1];
            if (
              ('-' == s[0] &&
                ((s = s.replace(r.item, '')),
                g && ((g = !1), void 0 === a.length && (a = [])),
                null != d && a.push(d),
                (d = {}),
                (g = !0)),
              void 0 !== i[2])
            ) {
              let f = i[2].replace(r.trim, '');
              if ('&' == f[0]) {
                let e = p(c);
                null != d ? (d[s] = e) : (a[s] = e), (t[f.substr(1)] = e);
              } else if ('|' == f[0])
                null != d ? (d[s] = l(c.shift())) : (a[s] = l(c.shift()));
              else if ('*' == f[0]) {
                let r = f.substr(1),
                  i = {};
                if (void 0 === t[r]) e.push("Reference '" + r + "' not found!");
                else {
                  for (let e in t[r]) i[e] = t[r][e];
                  null != d ? (d[s] = i) : (a[s] = i);
                }
              } else
                '>' == f[0]
                  ? null != d
                    ? (d[s] = o(c.shift()))
                    : (a[s] = o(c.shift()))
                  : null != d
                  ? (d[s] = n(f))
                  : (a[s] = n(f));
            } else null != d ? (d[s] = p(c)) : (a[s] = p(c));
          } else {
            if (u.match(/^-\s*$/)) {
              g && ((g = !1), void 0 === a.length && (a = [])),
                null != d && a.push(d),
                (d = {}),
                (g = !0);
              continue;
            }
            if ((i = u.match(/^-\s*(.*)/))) {
              null != d
                ? d.push(n(i[1]))
                : (g && ((g = !1), void 0 === a.length && (a = [])),
                  a.push(n(i[1])));
              continue;
            }
          }
        }
        null != d &&
          (g && ((g = !1), void 0 === a.length && (a = [])), a.push(d));
      }
    for (m = h.length - 1; m >= 0; --m) s.splice.call(s, h[m], 1);
    return a;
  }
  this.parse = function (n) {
    (e = []), (t = []), (s = new Date().getTime());
    let o = (function (t) {
        let s,
          n = r.regLevel,
          o = r.invalidLine,
          l = t.split('\n'),
          p = 0;
        var a = 0;
        let f = [],
          c = new i(-1),
          d = new i(0);
        c.addChild(d);
        let u = [],
          h = '';
        f.push(d), u.push(p);
        for (let t = 0, c = l.length; t < c; ++t)
          if (((h = l[t]), !h.match(o))) {
            if (((p = (s = n.exec(h)) ? s[1].length : 0), p > a)) {
              let e = d;
              (d = new i(p)), e.addChild(d), f.push(d), u.push(p);
            } else if (p < a) {
              let s = !1,
                r = u.length - 1;
              for (; r >= 0; --r)
                if (u[r] == p) {
                  (d = new i(p)),
                    f.push(d),
                    u.push(p),
                    null != f[r].parent && f[r].parent.addChild(d),
                    (s = !0);
                  break;
                }
              if (!s)
                return void e.push(
                  'Error: Invalid indentation at line ' + t + ': ' + h
                );
            }
            d.lines.push(h.replace(r.trim, '')), (a = p);
          }
        return c;
      })(
        (function (e) {
          let t,
            s = e.split('\n'),
            i = r.comment;
          for (let e in s)
            (t = s[e].match(i)) &&
              void 0 !== t[3] &&
              (s[e] = t[0].substr(0, t[0].length - t[3].length));
          return s.join('\n');
        })(n)
      ),
      l = (function (e) {
        return p(e.children);
      })(o);
    return (s = new Date().getTime() - s), l;
  };
}
function Tools() {
  return {
    filter: (e, ...t) => {
      const s = [...Array(e.length).keys()].map(() => !1);
      return t.reduce(
        (t, s) =>
          OR(
            t,
            e.map(e => s.test(e))
          ),
        s
      );
    },
    rename: {
      replace: (e, t, s) => e.map(e => e.replace(t, s)),
      delete: (e, ...t) => e.map(e => t.reduce((e, t) => e.replace(t, ''), e)),
      trim: e => e.map(e => e.trim().replace(/[^\S\r\n]{2,}/g, ' '))
    },
    getNodeInfo: e => ({
      names: e.map(e => e.split('tag=')[1]),
      types: e.map(e => {
        const t = e.match(/^(vmess|trojan|shadowsocks|http)=/);
        return t ? t[1] : 'unknown';
      })
    })
  };
}
function AND(...e) {
  return e.reduce((e, t) => e.map((e, s) => t[s] && e));
}
function OR(...e) {
  return e.reduce((e, t) => e.map((e, s) => t[s] || e));
}
function NOT(e) {
  return e.map(e => !e);
}
