let [link0, content0, subinfo] = [
  $resource.link,
  $resource.content,
  $resource.info
];
let version =
  typeof $environment != 'undefined'
    ? Number($environment.version.split('build')[1])
    : 0;
let Perror = 0;
const subtag = typeof $resource.tag != 'undefined' ? $resource.tag : '';
content0 =
  content0.indexOf('DOCTYPE html') != -1 && link0.indexOf('github.com') != -1
    ? ToRaw(content0)
    : content0;
var para = /^(http|https)\:\/\//.test(link0) ? link0 : content0.split('\n')[0];
var para1 = para
  .slice(para.indexOf('#') + 1)
  .replace(/\$type/g, 'node_type_para_prefix')
  .replace(/\$emoji/g, 'node_emoji_flag_prefix')
  .replace(/\$tag/g, 'node_tag_prefix')
  .replace(/\$index/g, 'node_index_prefix');
var mark0 = para.indexOf('#') != -1 ? true : false;
var Pinfo =
  mark0 && para1.indexOf('info=') != -1
    ? para1.split('info=')[1].split('&')[0]
    : 0;
var ntf_flow = 0;
const Base64 = new Base64Code();
const escapeRegExp = str => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
var link1 = link0.split('#')[0];
const qxpng =
  'https://raw.githubusercontent.com/crossutility/Quantumult-X/master/quantumult-x.png';
const subinfo_link = {
  'open-url': 'https://t.me/QuanX_API',
  'media-url': 'https://shrtm.nu/ebAr'
};
const subinfo_link1 = {
  'open-url': link1,
  'media-url': 'https://shrtm.nu/uo13'
};
const rwrite_link = { 'open-url': link1, 'media-url': 'https://shrtm.nu/x3o2' };
const rwhost_link = { 'open-url': link1, 'media-url': 'https://shrtm.nu/0n5J' };
const rule_link = { 'open-url': link1, 'media-url': 'https://shrtm.nu/cpHD' };
const nan_link = { 'open-url': link1, 'media-url': qxpng };
const bug_link = {
  'open-url': 'https://t.me/Shawn_Parser_Bot',
  'media-url': 'https://shrtm.nu/obcB'
};
const sub_link = { 'open-url': link1, 'media-url': 'https://shrtm.nu/ebAr' };
const update_link = {
  'open-url': 'https://apps.apple.com/us/app/quantumult-x/id1443988620',
  'media-url': qxpng
};
const plink0 = { 'open-url': link0, 'media-url': qxpng };
const ADDRes = `quantumult-x:///add-resource?remote-resource=url-encoded-json`;
var RLink0 = {
  filter_remote: [],
  rewrite_remote: [],
  server_remote: []
};
const Field = {
  filter: 'filter_remote',
  rewrite: 'rewrite_remote',
  server: 'server_remote'
};
SubFlow();
var Pin0 =
  mark0 && para1.indexOf('in=') != -1
    ? para1.split('in=')[1].split('&')[0].split('+').map(decodeURIComponent)
    : null;
var Pout0 =
  mark0 && (para.indexOf('#out=') != -1 || para.indexOf('&out=') != -1)
    ? (para.indexOf('#out=') != -1
        ? para.split('#out=')
        : para.split('&out='))[1]
        .split('&')[0]
        .split('+')
        .map(decodeURIComponent)
    : null;
var Psfilter =
  mark0 && para1.indexOf('sfilter=') != -1
    ? Base64.decode(para1.split('sfilter=')[1].split('&')[0])
    : null;
var Preg =
  mark0 && para1.indexOf('regex=') != -1
    ? decodeURIComponent(para1.split('regex=')[1].split('&')[0]).replace(
        /\，/g,
        ','
      )
    : null;
var Pregout =
  mark0 && para1.indexOf('regout=') != -1
    ? decodeURIComponent(para1.split('regout=')[1].split('&')[0]).replace(
        /\，/g,
        ','
      )
    : null;
var Pregdel =
  mark0 && para1.indexOf('delreg=') != -1
    ? decodeURIComponent(para1.split('delreg=')[1].split('&')[0]).replace(
        /\，/g,
        ','
      )
    : null;
var Phin0 =
  mark0 && para1.indexOf('inhn=') != -1
    ? para1.split('inhn=')[1].split('&')[0].split('+').map(decodeURIComponent)
    : null;
var Phout0 =
  mark0 && para1.indexOf('outhn=') != -1
    ? para1.split('outhn=')[1].split('&')[0].split('+').map(decodeURIComponent)
    : null;
var Preplace =
  mark0 && para1.indexOf('replace=') != -1
    ? para1.split('replace=')[1].split('&')[0]
    : null;
var Pemoji =
  mark0 && para1.indexOf('emoji=') != -1
    ? para1.split('emoji=')[1].split('&')[0]
    : null;
var Pdbg =
  mark0 && para1.indexOf('dbg=') != -1
    ? para1.split('dbg=')[1].split('&')[0]
    : null;
var Pudp0 =
  mark0 && para1.indexOf('udp=') != -1
    ? para1.split('udp=')[1].split('&')[0]
    : 0;
var Ptfo0 =
  mark0 && para1.indexOf('tfo=') != -1
    ? para1.split('tfo=')[1].split('&')[0]
    : 0;
var Prname =
  mark0 && /(^|\&)rename=/.test(para1)
    ? para1
        .split(/(^|\&)rename\=/)[2]
        .split('&')[0]
        .split('+')
    : null;
var Psrename =
  mark0 && para1.indexOf('srename=') != -1
    ? Base64.decode(para1.split('srename=')[1].split('&')[0])
    : null;
var Prrname =
  mark0 && para1.indexOf('rrname=') != -1
    ? para1.split('rrname=')[1].split('&')[0].split('+')
    : null;
var Psuffix =
  mark0 && para1.indexOf('suffix=') != -1
    ? para1.split('suffix=')[1].split('&')[0]
    : 0;
var Ppolicy =
  mark0 && para1.indexOf('policy=') != -1
    ? decodeURIComponent(para1.split('policy=')[1].split('&')[0])
    : 'Shawn';
var Ppolicyset =
  mark0 && para1.indexOf('pset=') != -1
    ? decodeURIComponent(para1.split('pset=')[1].split('&')[0])
    : '';
var Pcert0 =
  mark0 && para1.indexOf('cert=') != -1
    ? para1.split('cert=')[1].split('&')[0]
    : 0;
var Psort0 =
  mark0 && para1.indexOf('sort=') != -1
    ? para1.split('sort=')[1].split('&')[0]
    : 0;
var PsortX =
  mark0 && para1.indexOf('sortx=') != -1
    ? para1.split('sortx=')[1].split('&')[0]
    : 0;
var PTls13 =
  mark0 && para1.indexOf('tls13=') != -1
    ? para1.split('tls13=')[1].split('&')[0]
    : 0;
var Pntf0 =
  mark0 && para1.indexOf('ntf=') != -1
    ? para1.split('ntf=')[1].split('&')[0]
    : 2;
var Phide =
  mark0 && para1.indexOf('hide=') != -1
    ? para1.split('hide=')[1].split('&')[0]
    : 1;
var Pb64 =
  mark0 && para1.indexOf('b64=') != -1
    ? para1.split('b64=')[1].split('&')[0]
    : 0;
var emojino = [
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
];
var pfi = mark0 && Pin0 ? 'in=' + Pin0.join(', ') + ',  ' : '';
var pfo = mark0 && Pout0 ? 'out=' + Pout0.join(', ') : '';
var pfihn = mark0 && Phin0 ? 'inhn=' + Phin0.join(', ') + ',  ' : '';
var pfohn = mark0 && Phout0 ? 'outhn=' + Phout0.join(', ') : '';
var Pcnt =
  mark0 && para1.indexOf('cnt=') != -1
    ? para1.split('cnt=')[1].split('&')[0]
    : 0;
var Pcap =
  mark0 && para1.indexOf('cap=') != -1
    ? para1.split('cap=')[1].split('&')[0]
    : '';
var Pptn =
  mark0 && para1.indexOf('ptn=') != -1
    ? para1.split('ptn=')[1].split('&')[0]
    : '';
var Pnptn =
  mark0 && para1.indexOf('npt=') != -1
    ? para1.split('npt=')[1].split('&')[0]
    : '';
var Pcdn =
  mark0 && para1.indexOf('cdn=') != -1
    ? para1.split('cdn=')[1].split('&')[0]
    : '';
let [flow, exptime, errornode, total] = '';
var Pdel =
  mark0 && para1.indexOf('del=') != -1
    ? para1.split('del=')[1].split('&')[0]
    : 0;
var typeU =
  mark0 && para1.indexOf('type=') != -1
    ? para1.split('type=')[1].split('&')[0]
    : '';
var Pfcr =
  mark0 && para1.indexOf('fcr=') != -1
    ? para1.split('fcr=')[1].split('&')[0]
    : '';
var Pvia =
  mark0 && para1.indexOf('via=') != -1
    ? para1.split('via=')[1].split('&')[0]
    : '';
var Paead =
  mark0 && para1.indexOf('aead=') != -1
    ? para1.split('aead=')[1].split('&')[0]
    : '';
var Phost =
  mark0 && (para.indexOf('#host=') != -1 || para.indexOf('&host=') != -1)
    ? (para.indexOf('#host=') != -1
        ? para.split('#host=')
        : para.split('&host='))[1].split('&')[0]
    : '';
var Pcsha256 =
  mark0 && para1.indexOf('csha=') != -1 && version >= 646
    ? para1.split('csha=')[1].split('&')[0]
    : '';
var Ppsha256 =
  mark0 && para1.indexOf('psha=') != -1 && version >= 646
    ? para1.split('psha=')[1].split('&')[0]
    : '';
var typeQ = $resource.type ? $resource.type : 'unsupported';
var PRelay =
  mark0 && para1.indexOf('relay=') != -1
    ? decodeURIComponent(para1.split('relay=')[1].split('&')[0])
    : '';
var PUOT =
  mark0 && para1.indexOf('uot=') != -1 && version >= 665
    ? para1.split('uot=')[1].split('&')[0]
    : '';
var PcheckU =
  mark0 && para1.indexOf('checkurl=') != -1
    ? decodeURIComponent(para1.split('checkurl=')[1].split('&')[0])
    : '';
typeQ = PRelay != '' ? 'server' : typeQ;
var typec = '';
var Pflow =
  mark0 && para1.indexOf('flow=') != -1
    ? para1.split('flow=')[1].split('&')[0]
    : 0;
var PProfile =
  mark0 && para1.indexOf('profile=') != -1
    ? para1.split('profile=')[1].split('&')[0]
    : 0;
var Palpn =
  mark0 && para1.indexOf('alpn=') != -1 && version >= 712
    ? para1.split('alpn=')[1].split('&')[0]
    : '';
var Pobfs =
  mark0 && para1.indexOf('obfs=') != -1 && version >= 770
    ? para1.split('obfs=')[1].split('&')[0]
    : '';
var Psession =
  mark0 && para1.indexOf('tsession=') != -1 && version >= 771
    ? para1.split('tsession=')[1].split('&')[0]
    : '';
var RegoutList = [];
var ADDres = `quantumult-x:///add-resource?remote-resource=url-encoded-json`;
var RLink = `{
  "server_remote": [
    sremoteposition
  ],
  "filter_remote": [
    fremoteposition
  ],
  "rewrite_remote": [
    rremoteposition
  ]
}`;
var ProfileInfo = {
  server: '',
  filter: '',
  rewrite: ''
};
function VCheck(cnt) {
  cnts = cnt
    .split('\n')
    .filter(Boolean)
    .map(item => item.trim())
    .filter(item => /^http/.test(item))
    .map(item => '"' + item + '"');
  cnts = cnts.join(',\n');
  return cnts;
}
function Profile_Handle() {
  let a = content0;
  PProfile = PProfile == 1 ? '001' : PProfile;
  PProfile = PProfile == 8 ? '010' : PProfile;
  PProfile = PProfile == 9 ? '011' : PProfile;
  srm =
    a.split('[server_remote]')[1] && String(PProfile)[0] == '1'
      ? VCheck(a.split('[server_remote]')[1].split('[')[0])
      : '';
  frm =
    a.split('[filter_remote]')[1] && String(PProfile)[1] == '1'
      ? VCheck(a.split('[filter_remote]')[1].split('[')[0])
      : '';
  rrm =
    a.split('[rewrite_remote]')[1] && String(PProfile)[2] == '1'
      ? VCheck(a.split('[rewrite_remote]')[1].split('[')[0])
      : '';
  RLink = RLink.replace('sremoteposition', srm)
    .replace('fremoteposition', frm)
    .replace('rremoteposition', rrm);
  ADDres = ADDres.replace('url-encoded-json', encodeURIComponent(RLink));
}
var Finfo = {};
if (Pflow != 0) {
  Pflow = Pflow.split(':');
  var Bdate = Date.parse(new Date(Pflow[0])) / 1000;
  var Btotal = Pflow[1] ? Pflow[1] * 1024 * 1024 * 1024 : 0;
  var Bused = Pflow[2] ? Pflow[2] * 1024 * 1024 * 1024 : 0;
  var Bremain = Btotal != 0 ? Btotal - Bused : 1;
  var BJson = {
    bytes_used: Bused,
    bytes_remaining: Bremain,
    expire_date: Bdate
  };
  Finfo = BJson;
}
var pat = [];
pat[0] = [
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
];
pat[1] = [
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
];
pat[2] = [
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
];
pat[3] = [
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
];
pat[4] = [
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
];
pat[5] = [
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
];
pat[6] = [
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
];
pat[7] = [
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
];
pat[8] = [
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
];
var patn = [];
patn[0] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
patn[1] = ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];
patn[2] = ['⓪', '❶', '❷', '❸', '❹', '❺', '❻', '❼', '❽', '❾'];
patn[3] = ['⓪', '⓵', '⓶', '⓷', '⓸', '⓹', '⓺', '⓼', '⓻', '⓽'];
patn[4] = ['𝟘', '𝟙', '𝟚', '𝟛', '𝟜', '𝟝', '𝟞', '𝟟', '𝟠', '𝟡'];
patn[5] = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
patn[6] = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
patn[7] = ['𝟎', '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟳', '𝟖', '𝟗'];
patn[8] = ['𝟶', '𝟷', '𝟸', '𝟹', '𝟺', '𝟻', '𝟼', '𝟽', '𝟾', '𝟿'];
const getValue = (fn, defaultVaule) => {
  try {
    return fn();
  } catch (error) {
    return defaultVaule;
  }
};
var type0 = '';
var flag = 1;
function Parser() {
  type0 = Type_Check(content0);
  if (type0 != 'web' && type0 != 'wrong-field' && type0 != 'JS-0') {
    try {
      total = ResourceParse();
    } catch (error) {}
  } else if (type0 == 'wrong-field') {
    if (version >= 670 && typec != '') {
      RLink0[Field[typec]].push(
        $resource.link + ', opt-parser=true, tag=下次添加资源🉑️长点❤️8⃣️'
      );
    }
    total = '';
  } else {
    total = '';
  }
  $done({ content: total });
}
if (typeof $resource !== 'undefined' && PProfile == 0) {
  Parser();
  $done({ content: total, info: Finfo });
} else if (PProfile != 0) {
  try {
    Profile_Handle();
  } catch (error) {}
  openlink = { 'open-url': ADDres };
  total = ProfileInfo[typeQ];
  $done({ content: total });
}
function ParseUnknown(cnt) {
  try {
    cnt = JSON.parse(cnt);
  } catch (error) {}
}
function ResourceParse() {
  if (type0 == 'Subs-B64Encode') {
    total = Subs2QX(Base64.decode(content0), Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == 'Subs') {
    total = Subs2QX(content0, Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == 'QuanX' || type0 == 'Clash' || type0 == 'Surge') {
    total = Subs2QX(isQuanX(content0).join('\n'), Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == 'sgmodule') {
    flag = 2;
    total = Rewrite_Filter(
      isQuanXRewrite(content0.split('\n')),
      Pin0,
      Pout0,
      Preg,
      Pregout
    );
    if (Preplace) {
      total = ReplaceReg(total, Preplace);
    }
    total = total.filter((ele, pos) => total.indexOf(ele) == pos);
    if (Pcdn) {
      total = CDN(total);
    } else {
      total = total.join('\n');
    }
  } else if (type0 == 'rewrite') {
    flag = 2;
    total = Rewrite_Filter(
      isQuanXRewrite(content0.split('\n')),
      Pin0,
      Pout0,
      Preg,
      Pregout
    );
    if (Preplace) {
      total = ReplaceReg(total, Preplace);
    }
    total = total.filter((ele, pos) => total.indexOf(ele) == pos);
    if (Pcdn) {
      total = CDN(total);
    } else {
      total = total.join('\n');
    }
  } else if (type0 == 'Rule') {
    flag = 3;
    total = Rule_Handle(
      content0
        .split('\n')
        .map(item => item.trim())
        .filter(Boolean),
      Pout0,
      Pin0
    ).filter(Boolean);
    if (Preg && total.length != 0) {
      total = total.map(Regex).filter(Boolean);
      RegCheck(total, '分流引用', 'regex', Preg);
    }
    if (Pregout && total.length != 0) {
      total = total.map(RegexOut).filter(Boolean);
      RegCheck(total, '分流引用', 'regout', Pregout);
    }
    if (Preplace) {
      total = ReplaceReg(total, Preplace);
    }
    if (Ppolicyset) {
      total = policy_sets(total, Ppolicyset);
    }
    total =
      total.length < 100
        ? total.filter((ele, pos) => total.indexOf(ele) == pos)
        : total;
    total = total.join('\n');
  } else if (content0.trim() == '') {
    flag = 0;
  } else if (type0 == 'sub-http') {
    let url = VCheck(
      String(
        Base64.decode(content0.split('sub://')[1].split('#')[0]) +
          ', opt-parser=true, tag=' +
          new Date().getTime()
      )
    );
    RLink = RLink.replace('sremoteposition', url)
      .replace('fremoteposition', '')
      .replace('rremoteposition', '');
    let ADDres0 = ADDres.replace('url-encoded-json', encodeURIComponent(RLink));
    openlink = { 'open-url': ADDres0 };
    flag = -1;
    total = '';
  } else if (type0 == 'unknown') {
    ParseUnknown(content0);
    flag = -1;
  } else if (type0 == 'profile') {
    PProfile = '111';
    Profile_Handle();
    openlink = { 'open-url': ADDres };
    flag = -1;
    total = '';
  } else if (type0 == 'JS-0') {
    total = '';
  }
  if (flag == 1) {
    total = isQuanX(total.filter(Boolean).join('\n'));
    if (Pinfo == 1 && ntf_flow == 0) {
      flowcheck(total);
    }
    if (Pin0 || Pout0) {
      total = Filter(total, Pin0, Pout0);
    }
    if (Preg) {
      total = total.map(Regex).filter(Boolean);
      RegCheck(total, '节点订阅', 'regex', Preg);
    }
    if (Pregout) {
      total = total.map(RegexOut).filter(Boolean);
      RegCheck(total, '节点订阅', 'regout', Pregout);
    }
    if (Psfilter) {
      total = FilterScript(total, Psfilter);
    }
    if (Prrname) {
      Prn = Prrname;
      total = total.map(Rename);
    }
    if (Pregdel) {
      delreg = Pregdel;
      total = total.map(DelReg);
    }
    if (Psrename) {
      total = RenameScript(total, Psrename);
    }
    if (Preplace) {
      total = ReplaceReg(total, Preplace);
    }
    if (Prname) {
      Prn = Prname;
      total = total.map(Rename);
    }
    if (Pemoji) {
      total = emoji_handle(total, Pemoji);
    }
    if (total.length > 0) {
      if (Psuffix == 1 || Psuffix == -1) {
        total = Psuffix == 1 ? total.map(type_suffix) : total.map(type_prefix);
      }
      total = total.map(type_handle).map(emoji_prefix_handle).map(tag_handle);
      if (Psort0) {
        total = QXSort(total, Psort0);
      }
      total =
        para1.indexOf('node_index_prefix') != -1 ? index_handle(total) : total;
      total = TagCheck_QX(total).join('\n');
      if (PUOT == 1) {
        total = total.split('\n').map(UOT).join('\n');
      }
      total =
        PRelay == ''
          ? Base64.encode(total)
          : ServerRelay(total.split('\n'), PRelay);
      if (Pflow == 1) {
        $done({
          content: total,
          info: {
            bytes_used: 3073741824,
            bytes_remaining: 2147483648,
            expire_date: 1854193966
          }
        });
      } else {
        $done({ content: total });
      }
    } else {
      total = errornode;
      $done({ content: errornode });
    }
  } else if (flag == 0) {
    total = errornode;
    $done({ content: errornode });
  } else if (flag == -1) {
    total = content0;
    $done({ content: content0 });
  }
  return total;
}
function SubFlow() {
  if (Pinfo == 1 && subinfo) {
    var sinfo = subinfo.replace(/ /g, '').toLowerCase();
    if (sinfo.indexOf('expire=') != -1) {
      var epr = new Date(
        parseFloat(sinfo.split('expire=')[1].split(',')[0]) * 1000
      );
      var year = epr.getFullYear();
      var mth =
        epr.getMonth() + 1 < 10
          ? '0' + (epr.getMonth() + 1)
          : epr.getMonth() + 1;
      var day = epr.getDate() < 10 ? '0' + epr.getDate() : epr.getDate();
      epr = '过期时间: ' + year + '-' + mth + '-' + day;
    } else {
      epr = '';
    }
    ntf_flow = 1;
  }
}
function flowcheck(cnt) {
  for (var i = 0; i < cnt.length; i++) {
    var item = cnt[i];
    var nl = item.slice(item.indexOf('tag'));
    var nm = nl.slice(nl.indexOf('=') + 1);
    if (item.indexOf('剩余流量') != -1) {
      flow = nm;
    } else if (item.indexOf('期时间') != -1) {
      exptime = nm;
    }
  }
  flow = flow ? flow : '⚠️ 该订阅未返回任何流量信息';
  exptime = exptime ? exptime : '⚠️ 该订阅未返回套餐时间信息';
}
function RegCheck(total, typen, paraname, regpara) {
  if (total.length == 0) {
  } else if (
    (typen != '节点订阅' && Pntf0 != 0) ||
    (typen == '节点订阅' && Pntf0 == 1)
  ) {
  }
}
function Type_Check(subs) {
  var type = 'unknown';
  var RuleK = [
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
  ];
  var QuanXK = ['shadowsocks=', 'trojan=', 'vmess=', 'http=', 'socks5='];
  var SurgeK = [
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
  ];
  var ClashK = ['proxies:'];
  var SubK = [
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
  ];
  var RewriteK = [
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
  var SubK2 = [
    'ss://',
    'vmess://',
    'ssr://',
    'trojan://',
    'ssd://',
    '\nhttps://',
    '\nhttp://',
    'socks://',
    'ssocks://'
  ];
  var ModuleK = [
    '[Script]',
    '[Rule]',
    '[URL Rewrite]',
    '[Map Local]',
    '\nhttp-r',
    'script-path'
  ];
  var QXProfile = [
    '[filter_local]',
    '[filter_remote]',
    '[server_local]',
    '[server_remote]'
  ];
  var html = 'DOCTYPE html';
  var subi = subs.replace(/ /g, '');
  const RuleCheck = item => subi.toLowerCase().indexOf(item) != -1;
  const NodeCheck = item =>
    subi.toLowerCase().indexOf(item.toLowerCase()) != -1;
  const NodeCheck1 = item =>
    subi.toLowerCase().indexOf(item.toLowerCase()) != -1;
  const NodeCheck2 = item =>
    subi.toLowerCase().indexOf(item.toLowerCase()) != -1;
  const RewriteCheck = item => subs.indexOf(item) != -1;
  const ProfileCheck = item => subs.indexOf(item) != -1;
  var subsn = subs.split('\n');
  if (
    (subs.indexOf(html) != -1 || subs.indexOf('doctype html') != -1) &&
    link0.indexOf('github.com' == -1)
  ) {
    type = 'web';
  } else if (typeU == 'nodes' && typeQ == 'server') {
    type = typeQ == 'unsupported' || typeQ == 'server' ? 'Subs' : 'wrong-field';
  } else if (ClashK.some(NodeCheck) || typeU == 'clash') {
    type =
      typeQ == 'unsupported' || typeQ == 'server' ? 'Clash' : 'wrong-field';
    typec = 'server';
    content0 = Clash2QX(subs);
  } else if (
    (((ModuleK.some(RewriteCheck) || para1.indexOf('dst=rewrite') != -1) &&
      para1.indexOf('dst=filter') == -1 &&
      subs.indexOf('[Proxy]') == -1) ||
      typeU == 'module') &&
    typeU != 'nodes' &&
    typeU != 'rule' &&
    typeQ != 'filter'
  ) {
    typec = 'rewrite';
    type =
      typeQ == 'unsupported' || typeQ == 'rewrite' ? 'sgmodule' : 'wrong-field';
  } else if (
    (/(^hostname|\nhostname)\s*\=/.test(subi) || RewriteK.some(RewriteCheck)) &&
    para1.indexOf('dst=filter') == -1 &&
    subi.indexOf('securehostname') == -1 &&
    !/module|nodes|rule/.test(typeU) &&
    !(RuleK.some(RuleCheck) && typeQ == 'filter') &&
    !(typeQ != 'rewrite' && QXProfile.some(ProfileCheck))
  ) {
    typec = 'rewrite';
    type =
      typeQ == 'unsupported' || typeQ == 'rewrite' ? 'rewrite' : 'wrong-field';
  } else if (
    ((RuleK.some(RuleCheck) && subs.indexOf(html) == -1) ||
      typeU == 'rule' ||
      para1.indexOf('dst=filter') != -1) &&
    typeU != 'nodes' &&
    !(typeQ == 'server' && (QuanXK.some(NodeCheck) || SurgeK.some(NodeCheck)))
  ) {
    typec = 'filter';
    type = typeQ == 'unsupported' || typeQ == 'filter' ? 'Rule' : 'wrong-field';
  } else if (typeU == 'domain-set') {
    typec = 'filter-domain-set';
    type = typeQ == 'unsupported' || typeQ == 'filter' ? 'Rule' : 'wrong-field';
    content0 = Domain2Rule(content0);
  } else if (typeQ == 'filter' && subs.indexOf('payload:') == -1) {
    typec = 'filter-list';
    type = typeQ == 'unsupported' || typeQ == 'filter' ? 'Rule' : 'wrong-field';
    content0 = content0.split('\n').map(rule_list_handle).join('\n');
  } else if (subi.indexOf('sub://') == 0) {
    typec = 'sub-http';
    type = 'sub-http';
  } else if (typeQ == 'filter' && subs.indexOf('payload:') != -1) {
    typec = 'Clash-Provider';
    type = typeQ == 'unsupported' || typeQ == 'filter' ? 'Rule' : 'wrong-field';
  } else if (
    subsn.length >= 1 &&
    SubK2.some(NodeCheck2) &&
    !/\[(Proxy|filter_local)\]/.test(subs)
  ) {
    typec = 'server-uri';
    type =
      typeQ == 'unsupported' || typeQ == 'server' || typeQ == 'uri'
        ? 'Subs'
        : 'wrong-field';
  } else if (
    (subi.indexOf('tag=') != -1 &&
      QuanXK.some(NodeCheck) &&
      !/\[(Proxy|filter_local)\]/.test(subs)) ||
    typeU == 'list'
  ) {
    typec = 'server-quanx';
    type =
      typeQ == 'unsupported' || typeQ == 'server' || typeQ == 'uri'
        ? 'Subs'
        : 'wrong-field';
  } else if (subs.indexOf('[Proxy]') != -1) {
    typec = 'server-surge';
    type =
      typeQ == 'unsupported' || typeQ == 'server' || typeQ == 'uri'
        ? 'Surge'
        : 'wrong-field';
    content0 = Surge2QX(content0).join('\n');
  } else if (
    (SurgeK.some(NodeCheck) && !/\[(Proxy|filter_local)\]/.test(subs)) ||
    typeU == 'list'
  ) {
    typec = 'server-surge';
    type =
      typeQ == 'unsupported' || typeQ == 'server' || typeQ == 'uri'
        ? 'Subs'
        : 'wrong-field';
  } else if (subs.indexOf('[server_local]') != -1 && QuanXK.some(NodeCheck)) {
    typec = 'server-quanx';
    type =
      typeQ == 'unsupported' || typeQ == 'server' || typeQ == 'uri'
        ? 'Subs'
        : 'wrong-field';
  } else if (
    content0.indexOf('server') != -1 &&
    content0.indexOf('server_port') != -1
  ) {
    typec = 'server-sip008';
    type = typeQ == 'unsupported' || typeQ == 'server' ? 'Subs' : 'wrong-field';
    content0 = SIP2QuanX(content0);
  } else if (SubK.some(NodeCheck1)) {
    typec = 'server-b64';
    type =
      typeQ == 'unsupported' || typeQ == 'server'
        ? 'Subs-B64Encode'
        : 'wrong-field';
    if (content0.split('\n').length >= 2) {
      let tmp = content0.split('\n')[1];
      if (
        SubK.some(item => tmp.toLowerCase().indexOf(item.toLowerCase()) != -1)
      )
        content0 = tmp;
    }
  } else if (QXProfile.every(ProfileCheck)) {
    typec = 'profile';
    type = 'profile';
  } else if (/\.js/.test(link0)) {
    Perror = 1;
    type = 'JS-0';
  } else if (typeQ == 'server' && subs.length > 100) {
    typec = 'server-b64-unknown';
    type =
      typeQ == 'unsupported' || typeQ == 'server'
        ? 'Subs-B64Encode'
        : 'wrong-field';
  }
  return type;
}
function TagCheck_QX(content) {
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
    socks5: ['𝐬𝐨𝗰𝗸𝐬', '𝐒𝐎𝐂𝐊𝐒', '🅢🅞🅒🅚🅢', '🆂🅾🅲🅺🆂', 'ⓢⓄⒸⓀⓢ', '🅂🄾🄲🄺🅂', 'SOCKS']
  };
  var Olist = content.map(item => item.trim());
  var [Nlist, nmlist] = [[], []];
  var [nulllist, duplist] = [[], []];
  for (var i = 0; i < Olist.length; i++) {
    var item = Olist[i] ? Olist[i] : '';
    typefix['shadowsocks'] =
      item.indexOf('ssr-protocol') != -1
        ? typefix['shadowsocksr']
        : typefix['shadowsocks'];
    if (item.replace(/ /gm, '').indexOf('tag=') != -1) {
      var nl = item.slice(item.indexOf('tag'));
      var nm = nl.slice(nl.indexOf('=') + 1);
      if (nm == '') {
        tp = typefix[item.split('=')[0].trim()][3];
        nm = tp + ' | ' + item.split('=')[1].split(',')[0].split(':')[0];
        item = item.split('tag')[0] + 'tag=' + nm.replace('shadowsocks', 'ss');
        nulllist.push(nm.replace('shadowsocks', 'ss'));
      }
      var ni = 0;
      while (nmlist.indexOf(nm) != -1) {
        nm =
          ni == 0
            ? nm + NoReplace(ni + 1)
            : nm
                .split(' ')
                .slice(0, nm.split(' ').length - 2)
                .join(' ') + NoReplace(ni + 1);
        item = Pdel != 1 ? item.split('tag')[0] + 'tag=' + nm : '';
        ni = ni + 1;
      }
      if (ni != 0) {
        duplist.push(nm);
      }
      nmlist.push(nm);
      if (Pcap) {
        item = Capitalize(item, Pcap);
      }
      if (Pptn || Pnptn) {
        item = Pattern(item, Pptn, Pnptn);
      }
      ni = 0;
      if (item) {
        Nlist.push(item);
      }
    }
  }
  if (PcheckU != '') {
    Nlist = Nlist.map(Add_URL);
  }
  if (nulllist.length >= 1) {
    no = nulllist.length <= 10 ? emojino[nulllist.length] : nulllist.length;
  }
  if (duplist.length >= 1) {
    no = duplist.length <= 10 ? emojino[duplist.length] : duplist.length;
    if (Pdel != 1 && Pntf0 != 0) {
    } else if (Pdel == 1 && Pntf0 != 0) {
    }
  }
  return Nlist;
}
function Add_URL(cnt) {
  if (cnt) {
    cnt = cnt + ', server_check_url=' + PcheckU;
  }
  return cnt;
}
function NoReplace(cnt) {
  if (cnt) {
    for (var i = 0; i < 10; i++) {
      cnt = cnt.toString().replace(new RegExp(patn[0][i], 'gmi'), patn[5][i]);
    }
    return ' ' + cnt + ' ';
  }
}
function PatternN(cnt, para, npara) {
  if (cnt) {
    if (para != '') {
      for (var i = 0; i < 26; i++) {
        cnt = cnt.toLowerCase();
        cnt = cnt.replace(new RegExp(pat[0][i], 'gmi'), pat[para][i]);
      }
    }
    if (npara != '') {
      for (var i = 0; i < 10; i++) {
        cnt = cnt.replace(new RegExp(patn[0][i], 'gmi'), patn[npara][i]);
      }
    }
    return cnt;
  }
}
function Pattern(cnt, para, npara) {
  if (para != '' || npara != '') {
    cnt =
      cnt.split('tag=')[0] +
      'tag=' +
      PatternN(cnt.split('tag=')[1], para, npara);
  }
  return cnt;
}
function Capitalize(cnt, para) {
  if (para == 1) {
    cnt = cnt.split('tag=')[0] + 'tag=' + cnt.split('tag=')[1].toUpperCase();
  } else if (para == -1) {
    cnt = cnt.split('tag=')[0] + 'tag=' + cnt.split('tag=')[1].toLowerCase();
  } else if (para == 0) {
    cnt = cnt.split('tag=')[0] + 'tag=' + titleCase(cnt.split('tag=')[1]);
  }
  return cnt;
}
function titleCase(str) {
  var newStr = str.split(' ');
  for (var i = 0; i < newStr.length; i++) {
    newStr[i] =
      newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1).toLowerCase();
  }
  return newStr.join(' ');
}
function type_prefix(item) {
  if (item.trim() != '') {
    typefix = {
      shadowsocks: '「𝐬𝐬」',
      vmess: '「𝐯𝐦𝐞𝐬𝐬」',
      trojan: '「𝐭𝐫𝐨𝐣𝐚𝐧」',
      http: '「𝐡𝐭𝐭𝐩」',
      socks5: '「𝐬𝐨𝗰𝗸𝐬」'
    };
    typefix['shadowsocks'] =
      item.indexOf('ssr-protocol') != -1 ? '「𝐬𝐬𝐫」' : '「𝐬𝐬」';
    tp = typefix[item.split('=')[0].trim()];
    return [
      [item.split('tag=')[0] + 'tag=', tp, item.split('tag=')[1]].join(' ')
    ].join(' ');
  }
}
function type_suffix(item) {
  if (item.trim() != '') {
    typefix = {
      shadowsocks: '「𝐬𝐬」',
      vmess: '「𝐯𝐦𝐞𝐬𝐬」',
      trojan: '「𝐭𝐫𝐨𝐣𝐚𝐧」',
      http: '「𝐡𝐭𝐭𝐩」'
    };
    typefix['shadowsocks'] =
      item.indexOf('ssr-protocol') != -1 ? '「𝐬𝐬𝐫」' : '「𝐬𝐬」';
    tp = typefix[item.split('=')[0].trim()];
    return [item, tp].join(' ');
  }
}
function getnode_type(item, ind) {
  if (item.trim() != '' && item.indexOf('tag=') != -1) {
    ind = !/^(0|1|2|3|4|5|6|7)$/.test(ind) ? 8 : ind;
    typefix = {
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
      ]
    };
    typefix['shadowsocks'] =
      item.indexOf('ssr-protocol') != -1
        ? typefix['shadowsocksr']
        : typefix['shadowsocks'];
    tp = typefix[item.split('=')[0].trim()][ind];
    return tp;
  }
}
function type_handle(item) {
  if (item.indexOf('node_type_para_prefix') != -1) {
    item = item.replace(
      /node_type_para_prefix(\d{0,1})/g,
      getnode_type(item, item.split('node_type_para_prefix')[1][0])
    );
  }
  return item;
}
function index_handle(item) {
  items = item.map(item => item.trim()).filter(Boolean);
  for (var i = 0; i < items.length; i++) {
    if (items[i].indexOf('node_index_prefix') != -1) {
      ind = items[i].split('node_index_prefix')[1][0];
      ind = !/^(0|1|2|3|4|5|6|7|8)$/.test(ind) ? 0 : ind;
      items[i] = items[i].replace(
        /node_index_prefix(\d{0,1})/g,
        PatternN((i + 1).toString(), '', ind)
      );
    }
  }
  return items;
}
function emoji_prefix_handle(item) {
  if (item.indexOf('node_emoji_flag_prefix') != -1) {
    item = item.replace(
      /node_emoji_flag_prefix\d{0,1}/g,
      getnode_emoji(item, item.split('node_emoji_flag_prefix')[1][0])
    );
  }
  return item;
}
function getnode_emoji(item, ind) {
  ind = !/^(1|2)$/.test(ind) ? 2 : ind;
  if (item.indexOf('tag=') != -1) {
    return get_emoji(ind, item.split('tag=')[1])[1];
  }
}
function tag_handle(item) {
  if (item.indexOf('node_tag_prefix') != -1) {
    ptnn = /\d/.test(item.split('node_tag_prefix')[1][0])
      ? item.split('node_tag_prefix')[1][0]
      : '';
    nptnn = /\d/.test(item.split('node_tag_prefix')[1][1])
      ? item.split('node_tag_prefix')[1][1]
      : '';
    item = item.replace(
      /node_tag_prefix\d{0,2}/g,
      PatternN(subtag, ptnn, nptnn)
    );
  }
  return item;
}
function URI_TAG(cnt0, tag0) {
  cnt0 = cnt0.split('tag=')[0] + 'tag=' + tag0;
  return cnt0;
}
function ServerRelay(src, dst) {
  var rsts = [];
  for (var i = 0; i < src.length; i++) {
    serverA =
      src[i].indexOf('-host') == -1
        ? src[i].split('=')[1].split(':')[0].trim()
        : src[i].split('-host')[1].split('=')[1].split(',')[0].trim();
    type = /^[a-z]/.test(serverA) || /[a-z]$/.test(serverA) ? 'host' : 'ip';
    rst =
      type == 'ip'
        ? 'ip-cidr,' + serverA + '/32,' + dst
        : 'host-suffix,' + serverA + ',' + dst;
    rsts.push(rst);
  }
  return rsts.join('\n');
}
function rawtest(cnt) {
  var Preg0 = RegExp('.*js-file-line".*?</td>', 'i');
  if (Preg0.test(cnt)) {
    return cnt
      .replace(/(.*js-file-line\"\>)(.*?)(\<\/td\>)/g, '$2')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .trim();
  }
}
function ToRaw(cnt) {
  cnt = cnt.split('\n').map(rawtest).filter(Boolean).join('\n');
  return cnt;
}
function CDN(cnt) {
  cnt = cnt
    .join('\n')
    .replace(
      /https:\/\/raw.githubusercontent.com\/(.*?)\/(.*?)\/(.*)/gim,
      'https://fastly.jsdelivr.net/gh/$1/$2@$3'
    );
  return cnt;
}
function HOST_Handle(cnt, phost) {
  phost = 'host=' + phost + ',';
  if (phost.indexOf('☠️') == -1) {
    cnt = cnt.replace(/host\s*\=(.*?)\,/, phost);
  } else {
    phost = phost.split('☠️')[0];
    if (/-host\s*\=/.test(cnt)) {
      cnt = cnt.replace(/host\s*\=(.*?)\,/, phost + ', ');
    } else if (/over-tls\s*\=\s*true/.test(cnt)) {
      cnt = cnt + ', tls-' + phost;
    } else if (/obfs\s*\=/.test(cnt)) {
      cnt = cnt + ', obfs-' + phost;
    }
  }
  return cnt;
}
function OBFS_Handle(cnt, pobfs) {
  if (pobfs == 'shttp') {
    pobfs = 'obfs=' + 'shadowsocks-http';
  } else if (pobfs == 'vhttp') {
    pobfs = 'obfs=' + 'vmess-http';
  } else {
    pobfs = 'invalid';
  }
  if (/obfs\s*\=\s*http/.test(cnt) && pobfs != 'invalid') {
    cnt = cnt.replace(/obfs\s*\=\s*http/, pobfs);
  }
  return cnt;
}
function Session_Handle(cnt, psession) {
  let st = ', tls-no-session-ticket=true';
  let sr = ', tls-no-session-reuse=true';
  if (psession == 0) {
    cnt = cnt + st;
  } else if (psession == 1) {
    cnt = cnt + sr;
  } else if (psession == 2) {
    cnt = cnt + st + sr;
  }
  return cnt;
}
function SHA256_Handle(cnt, pcsha256, ppsha256) {
  if (cnt.indexOf('over-tls=true') != -1 || cnt.indexOf('obfs=wss') != -1) {
    cnt = cnt.replace(/tls-verification\s*\=\s*false(\s*)\,/, '');
    cnt =
      pcsha256 != ''
        ? cnt.replace(/tag\s*\=/, 'tls-cert-sha256=' + pcsha256 + ', tag=')
        : cnt;
    cnt =
      ppsha256 != ''
        ? cnt.replace(/tag\s*\=/, 'tls-pubkey-sha256=' + ppsha256 + ', tag=')
        : cnt;
  }
  return cnt;
}
function ALPN_Handle(cnt, palpn) {
  cnti = cnt.replace(/\s/gim, '');
  if (
    cnti.indexOf('obfs=over-tls') != -1 ||
    cnti.indexOf('over-tls=true') != -1
  ) {
    cnt = cnt + ', tls-alpn=' + palpn;
  }
  return cnt;
}
function Mock2QXReject(row, filename) {
  if (/dict/i.test(filename)) {
    return row.replace(/ /g, '').split('data=')[0] + ' url ' + 'reject-dict';
  } else if (/array/i.test(filename)) {
    return row.replace(/ /g, '').split('data=')[0] + ' url ' + 'reject-array';
  } else if (/(txt|html)/i.test(filename)) {
    return row.replace(/ /g, '').split('data=')[0] + ' url ' + 'reject-200';
  } else if (/(png|jpg|gif)/i.test(filename)) {
    return row.replace(/ /g, '').split('data=')[0] + ' url ' + 'reject-img';
  } else {
    return row.replace(/ /g, '').split('data=')[0] + ' url ' + 'reject';
  }
}
function URX2QX(subs) {
  var nrw = [];
  var rw = '';
  subs = subs.split('\n');
  var NoteK = ['//', '#', ';'];
  for (var i = 0; i < subs.length; i++) {
    const notecheck = item => subs[i].indexOf(item) == 0;
    if (!NoteK.some(notecheck)) {
      if (subs[i].slice(0, 9) == 'URL-REGEX') {
        if (subs[i].indexOf('REJECT') != -1 || subs[i].split(',').length == 2) {
          if (
            subs[i]
              .replace(/ /g, '')
              .split(',REJECT')[0]
              .split('GEX,')[1]
              .slice(0, 1) != '*'
          ) {
            rw =
              subs[i].replace(/ /g, '').split(',REJECT')[0].split('GEX,')[1] +
              ' url ' +
              'reject-200';
            nrw.push(rw);
          }
        }
      } else if (
        subs[i].indexOf('data=') != -1 &&
        subs.indexOf('[Map Local]') != -1
      ) {
        let fn = subs[i].match(/data=.+\/(.+)"/)
          ? subs[i].match(/data=.+\/(.+)"/)[1]
          : null;
        if (!/header=".*content-type/i.test(subs[i]) && /blank/i.test(fn)) {
          rw = Mock2QXReject(subs[i], fn);
        } else {
          rw =
            subs[i].replace(/ /g, '').split('data=')[0].replace(/\"/g, '') +
            ' url echo-response text/html echo-response ' +
            subs[i]
              .split('data=')[1]
              .split(' ')[0]
              .replace(/\"/g, '')
              .replace(/ /g, '');
          if (subs[i].indexOf('header=') != -1) {
            if (subs[i].indexOf('Content-Type:') != -1) {
              let tpe = subs[i]
                .split('header=')[1]
                .split('Content-Type:')[1]
                .split(',')[0]
                .replace(/\"/g, '');
              rw = rw.replace(/text\/html/g, tpe);
            }
          }
        }
        nrw.push(rw);
      }
    }
  }
  return nrw;
}
function SCP2QX(subs) {
  var nrw = [];
  var rw = '';
  var RewriteK = [
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
  subs = subs.split('\n').map(x => x.trim().replace(/\s+/g, ' '));
  for (var i = 0; i < subs.length; i++) {
    try {
      subs[i] = subs[i].replace('^http', 'http');
      if (subs[i].slice(0, 8) == 'hostname') {
        hn = subs[i].replace(/\%.*\%/g, '').replace(/\:\d*/g, '');
        nrw.push(hn);
      }
      var SC = ['type=', '.js', 'pattern=', 'script-path='];
      var NoteK = ['//', '#', ';'];
      const sccheck = item => subs[i].indexOf(item) != -1;
      const notecheck = item => subs[i].indexOf(item) == 0;
      const RewriteCheck = item => subs[i].indexOf(item) != -1;
      if (!NoteK.some(notecheck) && !RewriteK.some(RewriteCheck)) {
        if (SC.every(sccheck)) {
          ptn = subs[i].replace(/\s/gi, '').split('pattern=')[1].split(',')[0];
          js = subs[i]
            .replace(/\s/gi, '')
            .split('script-path=')[1]
            .split(',')[0];
          type = subs[i]
            .replace(/\s/gi, '')
            .split('type=')[1]
            .split(',')[0]
            .trim();
          subsi = subs[i].replace(/ /g, '').replace(/\=true/g, '=1');
          if (
            type == 'http-response' &&
            subsi.indexOf('requires-body=1') != -1
          ) {
            type = 'script-response-body ';
          } else if (
            type == 'http-response' &&
            subsi.indexOf('requires-body=1') == -1
          ) {
            type = 'script-response-header ';
          } else if (
            type == 'http-request' &&
            subsi.indexOf('requires-body=1') != -1
          ) {
            type = 'script-request-body ';
          } else if (
            type == 'http-request' &&
            subsi.indexOf('requires-body=1') == -1
          ) {
            type = 'script-request-header ';
          } else {
            type = '';
          }
          if (type != '') {
            rw = ptn + ' url ' + type + js;
            nrw.push(rw);
          }
        } else if (/\s30(7|2)$/.test(subs[i])) {
          rw =
            subs[i].split(' ')[0] +
            ' url ' +
            subs[i].split(' ')[2] +
            ' ' +
            subs[i].split(' ')[1].trim();
          nrw.push(rw);
        } else if (/\s\-\s30(2|7)\s/.test(subs[i])) {
          rw = subs[i].replace(' - ', ' url ');
          nrw.push(rw);
        } else if (subs[i].split(' ')[2] == 'header') {
          var pget = subs[i].split(' ')[0].split('.com')[1];
          var pgetn = subs[i].split(' ')[1].split('.com')[1];
          rw = subs[i].split(' ')[0] + ' url 302 ' + subs[i].split(' ')[1];
          nrw.push(rw);
        } else if (subs[i].split(' ')[1] == 'header-replace') {
          var pget = subs[i].split('header-replace')[1].split(':')[0].trim();
          var pgetn = subs[i].split('header-replace')[1].trim();
          rw =
            subs[i].split(' ')[0] +
            ' url request-header ' +
            '(.+\\r\\n)' +
            pget +
            ':.+(\\r\\n) request-header ' +
            '$1' +
            pgetn +
            '$2';
          nrw.push(rw);
        } else if (subs[i].indexOf(' _ reject') != -1) {
          rw = subs[i].split(' ')[0] + ' url reject-200';
          nrw.push(rw);
        } else if (
          subs[i].indexOf(' - reject') != -1 ||
          subs[i].indexOf(' - REJECT') != -1
        ) {
          rw = subs[i].replace(' - ', ' url ').toLowerCase();
          nrw.push(rw);
        } else if (
          subs[i].split(' ').length == 2 &&
          (/\s(reject)$/.test(subs[i]) || /\s(reject\-)/.test(subs[i]))
        ) {
          rw = subs[i].replace(' reject', ' url reject');
          nrw.push(rw);
        } else if (subs[i].indexOf('script-path') != -1) {
          type = subs[i].replace(/\s+/g, ' ').split(' ')[0];
          js = subs[i].split('script-path')[1].split('=')[1].split(',')[0];
          ptn = subs[i].replace(/\s+/g, ' ').split(' ')[1];
          subsi = subs[i].replace(/ /g, '').replace(/\=true/g, '=1');
          if (
            type == 'http-response' &&
            subsi.indexOf('requires-body=1') != -1
          ) {
            type = 'script-response-body ';
          } else if (
            type == 'http-response' &&
            subsi.indexOf('requires-body=1') == -1
          ) {
            type = 'script-response-header ';
          } else if (
            type == 'http-request' &&
            subsi.indexOf('requires-body=1') != -1
          ) {
            type = 'script-request-body ';
          } else if (
            type == 'http-request' &&
            subsi.indexOf('requires-body=1') == -1
          ) {
            type = 'script-request-header ';
          } else {
            type = '';
          }
          if (type != '') {
            rw = ptn + ' url ' + type + js;
            nrw.push(rw);
          }
        }
      } else if (RewriteK.some(RewriteCheck)) {
        nrw.push(subs[i]);
      }
    } catch (error) {}
  }
  return nrw;
}
function SGMD2QX(subs) {
  var nrw0 = URX2QX(subs);
  var nrw1 = SCP2QX(subs);
  var nrwt = [...nrw0, ...nrw1];
  return nrwt;
}
function Rewrite_Filter(subs, Pin, Pout, Preg, Pregout) {
  var Nlist = [];
  var noteK = ['//', '#', ';'];
  var hnc = 0;
  var dwrite = [];
  var hostname = '';
  for (var i = 0; i < subs.length; i++) {
    subi = subs[i].trim();
    var subii = subi.replace(/ /g, '');
    if (
      subi != '' &&
      (subi.indexOf(' url ') != -1 ||
        subi.indexOf(' url-and-header ') != -1 ||
        /^hostname\=/.test(subii))
    ) {
      const notecheck = item => subi.indexOf(item) == 0;
      if (noteK.some(notecheck)) {
        continue;
      } else if (hnc == 0 && subii.indexOf('hostname=') == 0) {
        hostname =
          Phin0 || Phout0 || Preg || Pregout
            ? HostNamecheck(subi, Phin0, Phout0)
            : subi;
      } else if (subii.indexOf('hostname=') != 0) {
        var inflag = Rcheck(subi, Pin);
        var outflag = Rcheck(subi, Pout);
        if (outflag == 1 || inflag == 0) {
          dwrite.push(
            subi.replace(' url ', ' - ').replace(' url-and-header ', ' - ')
          );
        } else if (outflag == 0 && inflag != 0) {
          Nlist.push(subi);
        } else if (outflag == 2 && inflag != 0) {
          Nlist.push(subi);
        }
      }
    }
  }
  if (Pntf0 != 0) {
    nowrite = dwrite.length <= 10 ? emojino[dwrite.length] : dwrite.length;
    no1write = Nlist.length <= 10 ? emojino[Nlist.length] : Nlist.length;
    if (Pin0 && no1write != ' 0️⃣ ') {
    } else if (dwrite.length > 0) {
    }
  }
  if (Preg) {
    Nlist = Nlist.map(Regex).filter(Boolean);
    RegCheck(Nlist, '重写引用', 'regex', Preg);
  }
  if (Pregout) {
    Nlist = Nlist.map(RegexOut).filter(Boolean);
    RegCheck(Nlist, '重写引用', 'regout', Pregout);
  }
  if (hostname != '') {
    Nlist.push(hostname);
  }
  Nlist = Phide == 1 ? Nlist : [...dwrite, ...Nlist];
  return Nlist;
}
function HostNamecheck(content, parain, paraout) {
  var hname = content.replace(/ /g, '').split('=')[1].split(',');
  var nname = [];
  var dname = [];
  for (var i = 0; i < hname.length; i++) {
    dd = hname[i];
    const excludehn = item => dd.indexOf(item) != -1;
    if (paraout && paraout != '') {
      if (!paraout.some(excludehn)) {
        if (parain && parain != '') {
          if (parain.some(excludehn)) {
            nname.push(hname[i]);
          } else {
            dname.push(hname[i]);
          }
        } else {
          nname.push(hname[i]);
        }
      } else {
        dname.push(hname[i]);
      }
    } else if (parain && parain != '') {
      if (parain.some(excludehn)) {
        nname.push(hname[i]);
      } else {
        dname.push(hname[i]);
      }
    } else {
      nname.push(hname[i]);
    }
  }
  if (Preg) {
    nname = nname.map(Regex).filter(Boolean);
    RegCheck(nname, '主机名 hostname', 'regex', Preg);
  }
  if (Pregout) {
    nname = nname.map(RegexOut).filter(Boolean);
    RegCheck(nname, '主机名 hostname', 'regout', Pregout);
  }
  hname = 'hostname=' + nname.join(', ');
  return hname;
}
function Rcheck(content, param) {
  name = content.toUpperCase();
  if (param) {
    var flag = 0;
    const checkpara = item => name.indexOf(item.toUpperCase()) != -1;
    if (param.some(checkpara)) {
      flag = 1;
    }
    return flag;
  } else {
    return 2;
  }
}
function Rule_Handle(subs, Pout, Pin) {
  cnt = subs;
  Tin = Pin;
  Tout = Pout;
  ply = Ppolicy;
  var nlist = [];
  var RuleK = ['//', '#', ';', '[', '^'];
  if (Tout != '' && Tout != null) {
    var dlist = [];
    for (var i = 0; i < cnt.length; i++) {
      cc = cnt[i]
        .replace(/^\s*\-\s/g, '')
        .replace(/\"|\'/g, '')
        .trim();
      const exclude = item => cc.indexOf(item) != -1;
      const CommentCheck = item => cc.toLowerCase().indexOf(item) == 0;
      if (Tout.some(exclude) && !RuleK.some(CommentCheck)) {
        dlist.push('-' + Rule_Policy(cc));
      } else if (!RuleK.some(CommentCheck) && cc) {
        dd = Rule_Policy(cc);
        if (Tin != '' && Tin != null) {
          const include = item => dd.indexOf(item) != -1;
          if (Tin.some(include)) {
            nlist.push(dd);
          }
        } else {
          nlist.push(dd);
        }
      }
    }
    nlist = Phide == 1 ? nlist : [...dlist, ...nlist];
  } else if (Tin != '' && Tin != null) {
    var dlist = [];
    for (var i = 0; i < cnt.length; i++) {
      cc = cnt[i].replace(/^\s*\-\s/g, '').trim();
      const CommentCheck = item => cc.toLowerCase().indexOf(item) == 0;
      if (!RuleK.some(CommentCheck) && cc) {
        dd = Rule_Policy(cc);
        const include = item => dd.indexOf(item) != -1;
        if (Tin.some(include)) {
          nlist.push(dd);
        } else {
          dlist.push('-' + dd);
        }
      }
    }
    nlist = Phide == 1 ? nlist : [...dlist, ...nlist];
  } else {
    nlist = cnt.map(Rule_Policy);
  }
  nlist =
    Pfcr == 1
      ? nlist.filter(Boolean).map(item => item + ', force-cellular')
      : nlist.filter(Boolean);
  nlist =
    Pfcr == 2
      ? nlist.filter(Boolean).map(item => item + ', multi-interface')
      : nlist.filter(Boolean);
  nlist =
    Pfcr == 3
      ? nlist.filter(Boolean).map(item => item + ', multi-interface-balance')
      : nlist.filter(Boolean);
  if (Pvia != '') {
    nlist =
      Pvia == 0
        ? nlist.filter(Boolean).map(item => item + ', via-interface=%TUN%')
        : nlist.filter(Boolean).map(item => item + ', via-interface=' + Pvia);
  }
  nlist = nlist.map(item =>
    item
      .replace(/:\d*\s*,/g, ',')
      .replace(/(\'|\")/g, '')
      .replace(/(\-suffix|\-SUFFIX)\s*\,\s*\./g, '$1, ')
  );
  return nlist;
}
function Rule_Policy(content) {
  var cnt = content
    .replace(/^\s*\-\s/g, '')
    .replace(/REJECT-TINYGIF/gi, 'reject')
    .replace(/REJECT-DROP/gi, 'reject')
    .trim()
    .split('//')[0]
    .trim()
    .split(',');
  var RuleK = [
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
  var RuleK1 = [
    'host',
    'domain',
    'ip-cidr',
    'geoip',
    'user-agent',
    'ip6-cidr',
    'ip-asn'
  ];
  const RuleCheck = item => cnt[0].trim().toLowerCase().indexOf(item) == 0;
  const RuleCheck1 = item => cnt[0].trim().toLowerCase().indexOf(item) == 0;
  if (RuleK1.some(RuleCheck1) && !RuleK.some(RuleCheck)) {
    if (cnt.length == 3 && cnt.indexOf('no-resolve') == -1) {
      ply0 = Ppolicy != 'Shawn' ? Ppolicy : cnt[2];
      nn = cnt[0] + ', ' + cnt[1] + ', ' + ply0;
    } else if (cnt.length == 4 && cnt.indexOf('no-resolve') != -1) {
      nn = cnt.join(',').replace(',no-resolve', '');
    } else if (cnt.length == 2) {
      ply0 = Ppolicy != 'Shawn' ? Ppolicy : 'Shawn';
      nn = cnt[1].trim() != '' ? cnt[0] + ', ' + cnt[1] + ', ' + ply0 : '';
    } else if (cnt.length == 3 && cnt[2].indexOf('no-resolve') != -1) {
      ply0 = Ppolicy != 'Shawn' ? Ppolicy : 'Shawn';
      nn = cnt[0] + ', ' + cnt[1] + ', ' + ply0;
    } else if (cnt.length == 4 && cnt[3].indexOf('no-resolve') != -1) {
      ply0 = Ppolicy != 'Shawn' ? Ppolicy : cnt[2];
      nn = cnt[0] + ', ' + cnt[1] + ', ' + ply0;
    } else if (!RuleK.some(RuleCheck) && content) {
      return '';
    } else {
      return '';
    }
    if (cnt[0].indexOf('URL-REGEX') != -1 || cnt[0].indexOf('PROCESS') != -1) {
      nn = '';
    } else {
      nn = nn.replace('IP-CIDR6', 'ip6-cidr');
    }
    return nn;
  } else if (
    cnt.length == 1 &&
    !RuleK.some(RuleCheck) &&
    cnt[0] != '' &&
    cnt[0].indexOf('payload:') == -1 &&
    cnt[0].indexOf('=') == -1 &&
    cnt[0].trim() != 'https:'
  ) {
    return rule_list_handle(cnt[0]);
  } else {
    return '';
  }
}
function rule_list_handle(cnt) {
  var RuleK = ['//', '#', ';', '[', '!', '/'];
  const RuleCheck = item => cnt.trim().indexOf(item) == 0;
  const nocheck = item => /^\d+$/.test(item);
  cnt = cnt.split('#')[0].trim();
  if (
    cnt.trim().indexOf(' ') == -1 &&
    cnt.trim() != '' &&
    !RuleK.some(RuleCheck)
  ) {
    if (cnt.indexOf('::') != -1 && cnt.indexOf('/') != -1) {
      cnt = 'ip6-cidr, ' + cnt;
      cnt = Ppolicy == 'Shawn' ? cnt + ', Shawn' : cnt + ', ' + Ppolicy;
    } else if (cnt.split('/').length == 2) {
      cnt = 'ip-cidr, ' + cnt;
      cnt = Ppolicy == 'Shawn' ? cnt + ', Shawn' : cnt + ', ' + Ppolicy;
    } else if (cnt.split('.').length == 4 && cnt.split('.').every(nocheck)) {
      cnt = 'ip-cidr, ' + cnt + '/32';
      cnt = Ppolicy == 'Shawn' ? cnt + ', Shawn' : cnt + ', ' + Ppolicy;
    } else if (cnt.indexOf('payload:') == -1) {
      if (!/^('|")/.test(cnt)) {
        if (!/\*|\+/.test(cnt[0])) {
          cnt = cnt[0] == '.' ? cnt.replace('.', '') : cnt;
          cnt = 'host-suffix, ' + cnt;
        } else {
          cnt = 'host-wildcard, ' + cnt;
        }
      } else {
        cnt = cnt.replace(/'|"/g, '').trim();
        if (/^\.|\*\./.test(cnt) || cnt.indexOf('*') != -1) {
          cnt = 'host-wildcard, ' + cnt.replace(/^\.|\*\./, '*.');
        } else {
          cnt = 'host-suffix, ' + cnt.replace(/^(\+\.)/, '');
        }
      }
      cnt = Ppolicy == 'Shawn' ? cnt + ', Shawn' : cnt + ', ' + Ppolicy;
    }
  }
  return cnt;
}
function Domain2Rule(content) {
  var cnt = content.split('\n');
  var RuleK = ['//', '#', ';', '['];
  var nlist = [];
  for (var i = 0; i < cnt.length; i++) {
    cc = cnt[i].trim();
    const RuleCheck = item => cc.indexOf(item) != -1;
    if (!RuleK.some(RuleCheck) && cc) {
      if (cc[0] == '.') {
        nlist.push('host-suffix, ' + cc.slice(1, cc.length));
      } else {
        nlist.push('host, ' + cc);
      }
    }
  }
  return nlist.join('\n');
}
function policy_sets(cnt, para) {
  pcnt = para.split('+');
  cnt = cnt;
  for (i = 0; i < pcnt.length; i++) {
    if (pcnt[i].indexOf('@') != -1) {
      cnt = cnt.map(item => filter_set(item, pcnt[i]));
    }
  }
  cnt = cnt.filter(Boolean);
  return cnt;
}
function filter_set(cnt, para) {
  if (cnt) {
    paras = [
      para.split('@')[0],
      para.slice(para.split('@')[0].length + '@'.length)
    ];
    cnt = cnt.split(',');
    reg = RegExp(paras[0]);
    if (cnt.length == 3) {
      if (reg.test(cnt[1]) || reg.test(cnt[2])) {
        cnt[2] = paras[1];
      }
    }
    return cnt.join(',');
  }
}
function ReplaceReg(cnt, para) {
  var cnt0 = cnt;
  var pp = para
    .replace(/\\\@/g, 'atsymbol')
    .replace(/\\\+/g, 'plussymbol')
    .split('+');
  for (var i = 0; i < pp.length; i++) {
    var p1 = decodeURIComponent(pp[i].split('@')[0])
      .replace(/atsymbol/g, '@')
      .replace(/plussymbol/g, '\\+')
      .replace(/\，/g, ',');
    var p2 = decodeURIComponent(pp[i].split('@')[1])
      .replace(/atsymbol/g, '@')
      .replace(/plussymbol/g, '+')
      .replace(/\，/g, ',');
    p1 = new RegExp(p1, 'gmi');
    cnt0 = cnt0.map(item => item.replace(p1, p2));
  }
  return cnt0;
}
function Subs2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  var list0 = subs.split('\n');
  var QuanXK = ['shadowsocks=', 'trojan=', 'vmess=', 'http=', 'socks5='];
  var SurgeK = [
    '=ss,',
    '=vmess,',
    '=trojan,',
    '=http,',
    '=https,',
    '=custom,',
    '=socks5',
    '=socks5-tls'
  ];
  var LoonK = ['=shadowsocks', '=shadowsocksr'];
  var QXlist = [];
  var failedList = [];
  for (var i = 0; i < list0.length; i++) {
    var node = '';
    if (
      list0[i].trim().length > 3 &&
      !/\;|\/|\#/.test(list0[i][0]) &&
      list0[i].indexOf(' url ') == -1
    ) {
      var type = list0[i].split('://')[0].trim();
      var listi = list0[i].replace(/ /g, '');
      var tag0 =
        list0[i].indexOf('tag=') != -1
          ? list0[i]
              .split(/\&*(emoji|udp|tfo|cert|rename|replace)\=/)[0]
              .split('tag=')[1]
          : '';
      list0[i] = type == 'ssr' ? list0[i].split(/#|,|，/)[0] : list0[i];
      const NodeCheck = item => listi.toLowerCase().indexOf(item) != -1;
      const NodeCheck1 = item => listi.toLowerCase().indexOf(item) == 0;
      try {
        if (
          type == 'vmess' &&
          list0[i].indexOf('remark=') == -1 &&
          list0[i].indexOf('remarks=') == -1 &&
          !/(obfs|alterId|type)\=/.test(list0[i])
        ) {
          var bnode = Base64.decode(list0[i].split('vmess://')[1]);
          if (bnode.indexOf('over-tls=') == -1) {
            node = V2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13);
          } else {
            node = VQ2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13);
          }
          node = tag0 != '' ? URI_TAG(node, tag0) : node;
        } else if (
          type == 'vmess' &&
          (list0[i].indexOf('remark=') != -1 ||
            list0[i].indexOf('remarks=') != -1 ||
            /(obfs|alterId|type)\=/.test(list0[i]))
        ) {
          node = VR2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13);
          node = tag0 != '' ? URI_TAG(node, tag0) : node;
        } else if (type == 'socks' && list0[i].indexOf('remarks=') != -1) {
          node = S5R2QX(list0[i]);
          node = tag0 != '' ? URI_TAG(node, tag0) : node;
        } else if (type == 'ssocks' && list0[i].indexOf('remarks=') != -1) {
          node = S5R2QX(list0[i], (tlsp = 'over-tls'));
          node = tag0 != '' ? URI_TAG(node, tag0) : node;
        } else if (type == 'ssr') {
          node = SSR2QX(list0[i], Pudp, Ptfo);
          node = tag0 != '' ? URI_TAG(node, tag0) : node;
        } else if (type == 'ss') {
          node = SS2QX(list0[i], Pudp, Ptfo);
          node = tag0 != '' ? URI_TAG(node, tag0) : node;
        } else if (type == 'ssd') {
          node = SSD2QX(list0[i], Pudp, Ptfo);
        } else if (type == 'trojan') {
          node = TJ2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13);
          node = tag0 != '' ? URI_TAG(node, tag0) : node;
        } else if (
          (type == 'https' || type == 'http') &&
          list0[i].indexOf(',') == -1
        ) {
          if (listi.indexOf('@') != -1) {
            node = HPS2QX(list0[i], Ptfo, Pcert0, PTls13);
            node = tag0 != '' ? URI_TAG(node, tag0) : node;
          } else {
            var listh = Base64.decode(
              listi
                .split(type + '://')[1]
                .split('#')[0]
                .split('?')[0]
            );
            listh = list0[i].replace(
              listi
                .split(type + '://')[1]
                .split('#')[0]
                .split('?')[0],
              listh
            );
            node = HPS2QX(listh, Ptfo, Pcert0, PTls13);
            node = tag0 != '' ? URI_TAG(node, tag0) : node;
          }
        } else if (QuanXK.some(NodeCheck1)) {
          node = QX_TLS(isQuanX(list0[i])[0], Pcert0, PTls13);
        } else if (SurgeK.some(NodeCheck)) {
          node = QX_TLS(Surge2QX(list0[i])[0], Pcert0, PTls13);
        } else if (LoonK.some(NodeCheck)) {
          node = Loon2QX(list0[i]);
        } else if (type == 'vless') {
          Perror = 1;
        }
      } catch (e) {
        failedList.push(`<<<\nContent: ${list0[i]}\nError: ${e}`);
      }
      if (Paead != '') {
        node = AeadVmess(node, Paead);
      }
      if (Phost != '') {
        node = HOST_Handle(node, Phost);
      }
      if (Pobfs != '') {
        node = OBFS_Handle(node, Pobfs);
      }
      if (Psession != '') {
        node = Session_Handle(node, Psession);
      }
      if (Pcsha256 != '' || Ppsha256 != '') {
        node = SHA256_Handle(node, Pcsha256, Ppsha256);
      }
      if (Palpn != '') {
        node = ALPN_Handle(node, Palpn);
      }
      node = TLS_Check(node);
      if (node instanceof Array) {
        for (var j in node) {
          node[j] = Pudp != 0 ? XUDP(node[j], Pudp) : node[j];
          node[j] = Ptfo != 0 ? XTFO(node[j], Ptfo) : node[j];
          QXlist.push(node[j]);
        }
      } else if (node != '' && node) {
        node = Pudp != 0 ? XUDP(node, Pudp) : node;
        node = Ptfo != 0 ? XTFO(node, Ptfo) : node;
        QXlist.push(node);
      }
    }
  }
  return QXlist;
}
function AeadVmess(cnt, aeadp) {
  let paead = aeadp == -1 ? 'aead=false' : 'aead=true';
  if (/^vmess\s*\=/.test(cnt)) {
    if (/aead\s*\=/.test(cnt)) {
      cnt = cnt.replace(/aead\s*\=.*\,/, paead + ',');
    } else {
      cnts = cnt.split(',');
      cnts.push(paead);
      cnt = cnts.join(', ');
    }
  }
  return cnt;
}
function TLS_Check(cnt) {
  cnt =
    cnt.indexOf('tls-cert-sha256') != -1 ||
    cnt.indexOf('tls-pubkey-sha256') != -1
      ? cnt.replace(
          /tls-verification\s*\=\s*false.*?\,/,
          'tls-verification=true,'
        )
      : cnt;
  return cnt;
}
function QX_TLS(cnt, Pcert0, PTls13) {
  cnt = cnt.replace(/tag\s*\=/gm, 'tag=');
  var cert0 =
    Pcert0 == 1 ? 'tls-verification=true, ' : 'tls-verification=false, ';
  var tls13 = PTls13 == 1 ? 'tls13=true, ' : '';
  if (cnt.indexOf('tls-verification') != -1) {
    cnt =
      Pcert0 == -1 || Pcert0 == 1
        ? cnt.replace(RegExp('tls-verification.*?,', 'gmi'), cert0)
        : cnt;
  } else if (
    cnt.indexOf('obfs=over-tls') != -1 ||
    /over\-tls\s*\=\s*true/.test(cnt) ||
    cnt.indexOf('obfs=wss') != -1
  ) {
    cnt = cnt.replace(new RegExp('tag.*?=', 'gmi'), cert0 + 'tag=');
  }
  if (tls13 != '') {
    if (cnt.indexOf('tls13') != -1) {
      cnt = cnt.replace(RegExp('tls13.*?,', 'gmi'), tls13);
    } else if (
      cnt.indexOf('obfs=over-tls') != -1 ||
      /over\-tls\s*\=\s*true/.test(cnt) ||
      cnt.indexOf('obfs=wss') != -1
    ) {
      cnt = cnt.replace(new RegExp('tag.*?=', 'gmi'), tls13 + 'tag=');
    }
  }
  if (!/^(shadowsocks|trojan|vmess)/.test(cnt.trim())) {
    udp = 'udp-relay=false, ';
    if (cnt.indexOf('udp-relay') != -1) {
      var cnt = cnt.replace(RegExp('udp-relay.*?,', 'gmi'), udp);
    } else {
      var cnt = cnt.replace(new RegExp('tag.*?=', 'gmi'), udp + 'tag=');
    }
  }
  return cnt;
}
function SIP2QuanX(cnt) {
  cnt = JSON.parse(cnt);
  ll = cnt.length;
  nodes = [];
  for (i = 0; i < ll; i++) {
    node = 'shadowsocks= ';
    cnti = cnt[i];
    ip = cnti.server + ':' + cnti.server_port;
    mtd = 'method=' + cnti.method;
    pwd = 'password=' + cnti.password;
    obfs = cnti.plugin_opts ? cnti.plugin_opts.replace(';', ', ') : '';
    tag = 'tag=' + cnti.remarks;
    node = node + [ip, pwd, mtd, obfs, tag].filter(Boolean).join(', ');
    nodes.push(node);
  }
  return nodes.join('\n');
}
function HPS2QX(subs, Ptfo, Pcert0, PTls13) {
  var type = subs.indexOf('https://') != -1 ? 'https' : 'http';
  var server = subs.replace('https://', '').replace('http://', '').trim();
  var nss = [];
  if (server != '') {
    if (server.indexOf('@') != -1) {
      var ipport =
        'http=' +
        server.split('@')[1].split('#')[0].split('/')[0].split('?')[0];
      var uname = 'username=' + server.split(':')[0];
      var pwd = 'password=' + server.split('@')[0].split(':')[1];
    } else {
      var ipport =
        server.split('#')[0].indexOf(':') == -1
          ? 'http=' + Base64.decode(server.split('#')[0].split('?')[0])
          : 'http=' + server.split('#')[0].split('?')[0];
    }
    var tag = 'tag=' + decodeURIComponent(server.split('#')[1]);
    var tls = type == 'https' ? 'over-tls=true' : '';
    var thost =
      subs.indexOf('peer=') != -1
        ? 'tls-host=' + subs.split('peer=')[1].split('#')[0].split('&')[0]
        : '';
    var cert = Pcert0 != 0 ? 'tls-verification=true' : 'tls-verification=false';
    var tfo = Ptfo == 1 ? 'fast-open=true' : 'fast-open=false';
    var tls13 = PTls13 == 1 ? 'tls13=true' : 'tls13=false';
    if (tls == '') {
      cert = '';
      tls13 = '';
    }
    nss.push(ipport, uname, pwd, tls, thost, cert, tfo, tls13, tag);
  }
  var QX = nss.filter(Boolean).join(',');
  return QX;
}
function VQ2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  var server = String(
    Base64.decode(subs.replace('vmess://', '').trim()).split('\u0000')[0]
  );
  var node = '';
  var ip =
    'vmess=' +
    server.split(',')[1].trim() +
    ':' +
    server.split(',')[2].trim() +
    ', ' +
    'method=aes-128-gcm, ' +
    'password=' +
    server.split(',')[4].split('"')[1] +
    ', ';
  var tag = 'tag=' + server.split('=')[0];
  var tfo =
    subs.indexOf('tfo=1') != -1 ? 'fast-open=true, ' : 'fast-open=false, ';
  var udp = Pudp == 1 ? 'udp-relay=false, ' : 'udp-relay=false, ';
  node = ip + tfo + udp;
  var obfs = '';
  if (server.indexOf('obfs=') == -1) {
    obfs = server.indexOf('over-tls=true') != -1 ? 'obfs=over-tls, ' : '';
    var host =
      server.indexOf('tls-host') != -1
        ? 'obfs-host=' + server.split('tls-host=')[1].split(',')[0] + ', '
        : '';
    obfs = obfs + host;
  } else if (server.indexOf('obfs=ws') != -1) {
    obfs = server.indexOf('over-tls=true') != -1 ? 'obfs=wss, ' : 'obfs=ws, ';
    var uri =
      server.indexOf('obfs-path=') != -1
        ? 'obfs-uri=' + server.split('obfs-path=')[1].split('"')[1] + ', '
        : 'obfs-uri=/, ';
    obfs = obfs + uri;
    var host =
      server.indexOf('obfs-header=') != -1
        ? 'obfs-host=' +
          server.split('obfs-header="Host:')[1].split('[')[0].trim() +
          ', '
        : '';
    obfs = obfs + host;
  } else if (server.indexOf('obfs=http') != -1) {
    obfs = 'obfs=http, ';
    var uri =
      server.indexOf('obfs-path=') != -1
        ? 'obfs-uri=' + server.split('obfs-path=')[1].split('"')[1] + ', '
        : 'obfs-uri=/, ';
    obfs = obfs + uri;
    var host =
      server.indexOf('obfs-header=') != -1
        ? 'obfs-host=' +
          server.split('obfs-header="Host:')[1].split('[')[0].trim() +
          ', '
        : '';
    obfs = obfs + host;
  }
  if (obfs.indexOf('obfs=over-tls') != -1 || obfs.indexOf('obfs=wss') != -1) {
    var cert =
      Pcert0 != 0 || subs.indexOf('allowInsecure=1') != -1
        ? 'tls-verification=false, '
        : 'tls-verification=true, ';
    var tls13 = PTls13 == 1 ? 'tls13=true, ' : '';
    obfs = obfs + cert + tls13;
  }
  node = node + obfs + tag;
  return node;
}
function VR2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  var server = String(
    Base64.decode(
      subs
        .replace('vmess://', '')
        .split('?remark')[0]
        .split('&remark')[0]
        .split('?')[0]
    ).trim()
  ).split('\u0000')[0];
  if (server.indexOf('@') == -1 && subs.indexOf('@') != -1) {
    server = subs.replace('vmess://', '').split('?')[0];
  }
  var node = '';
  var ip = 'vmess=' + server.split('@')[1] + ', ' + 'method=aes-128-gcm, ';
  var pwd = server.split('@')[0].split(':')[1]
    ? 'password=' + server.split('@')[0].split(':')[1] + ', '
    : 'password=' + server.split('@')[0] + ', ';
  if (subs.indexOf('#') == -1) {
    tag = /remarks*=/.test(subs)
      ? 'tag=' + decodeURIComponent(subs.split(/remarks*=/)[1].split('&')[0])
      : 'tag=' + server.split('@')[1];
  } else {
    tag = 'tag=' + subs.split('#')[1];
  }
  var tfo =
    subs.indexOf('tfo=1') != -1 ? 'fast-open=true, ' : 'fast-open=false, ';
  var udp = Pudp == 1 ? 'udp-relay=false, ' : 'udp-relay=false, ';
  var pdrop = 0;
  node = ip + pwd + tfo + udp;
  var obfs =
    subs.indexOf('obfs=') != -1
      ? subs.split('obfs=')[1].split('&')[0].trim()
      : 'none';
  if (obfs == 'none') {
    obfs = subs.indexOf('tls=1') != -1 ? 'obfs=over-tls, ' : '';
  } else if (obfs == 'websocket' || obfs == 'http') {
    obfs = obfs == 'http' ? 'obfs=http, ' : 'obfs=ws, ';
    obfs = subs.indexOf('tls=1') != -1 ? 'obfs=wss, ' : obfs;
    var ouri =
      subs.indexOf('&path=') != -1
        ? decodeURIComponent(subs.split('&path=')[1].split('&')[0])
        : '/';
    obfs = obfs + 'obfs-uri=' + ouri + ', ';
    var host =
      subs.indexOf('&obfsParam=') != -1
        ? decodeURIComponent(
            subs.split('&obfsParam=')[1].split('&')[0].split('\n')[0]
          )
            .split('\n')[0]
            .trim()
        : '';
    if (host.indexOf('"Host"') != -1 && host.indexOf('{') != -1) {
      host = JSON.parse(host)['Host'];
    }
    host = host != '{}' && host ? 'obfs-host=' + host + ', ' : '';
    obfs = obfs + host;
  } else if (obfs == 'grpc' || obfs == 'h2') {
    Perror = 1;
    pdrop = 1;
  }
  if (obfs.indexOf('obfs=over-tls') != -1 || obfs.indexOf('obfs=wss') != -1) {
    var cert =
      Pcert0 != 0 || subs.indexOf('allowInsecure=1') != -1
        ? 'tls-verification=false, '
        : 'tls-verification=true, ';
    var tls13 = PTls13 == 1 ? 'tls13=true, ' : '';
    obfs = obfs + cert + tls13;
  }
  caead = 'aead=false, ';
  if (subs.indexOf('alterId=') != -1) {
    caead =
      Number(subs.split('alterId=')[1].split('&')[0]) != 0
        ? 'aead=false, '
        : '';
  }
  node = pdrop == 0 ? node + obfs + caead + tag : '';
  return node;
}
function S5R2QX(cnt, tlsp = 'false') {
  var listh = Base64.decode(
    cnt.split('socks://')[1].split('#')[0].split('?')[0]
  );
  server = listh + '#' + cnt.split('?')[1];
  var nss = [];
  if (server != '') {
    var ipport = 'socks5=' + server.split('@')[1].split('#')[0].split('/')[0];
    var uname = 'username=' + server.split(':')[0];
    var pwd = 'password=' + server.split('@')[0].split(':')[1];
    var tag =
      'tag=' + decodeURIComponent(server.split('remarks=')[1].split('&')[0]);
    var tls = tlsp == 'false' ? '' : 'over-tls=true';
    var cert = Pcert0 != 0 ? 'tls-verification=true' : 'tls-verification=false';
    cert = tls == '' ? '' : cert;
    var tfo = Ptfo0 == 1 ? 'fast-open=true' : 'fast-open=false';
    nss.push(ipport, uname, pwd, tls, cert, tfo, tag);
  }
  var QX = nss.filter(Boolean).join(',');
  return QX;
}
function V2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  var cert = Pcert0;
  var tls13 = PTls13;
  var server = String(Base64.decode(subs.replace('vmess://', '')).trim()).split(
    '\u0000'
  )[0];
  var nss = [];
  if (server != '') {
    ss = JSON.parse(server);
    ip = 'vmess=' + ss.add + ':' + ss.port;
    pwd = 'password=' + ss.id;
    mtd = 'method=aes-128-gcm';
    try {
      tag = 'tag=' + decodeURIComponent(ss.ps);
    } catch (e) {
      tag = 'tag=' + ss.ps;
    }
    udp = Pudp == 1 ? 'udp-relay=false' : 'udp-relay=false';
    tfo = Ptfo == 1 ? 'fast-open=true' : 'fast-open=false';
    obfs = Fobfs(ss, cert, tls13);
    caead = ss.aid && ss.aid != '0' ? 'aead=false' : 'aead=true';
    if (obfs == '' || obfs == undefined) {
      nss.push(ip, mtd, pwd, tfo, udp, caead, tag);
    } else if (obfs != 'NOT-SUPPORTTED') {
      nss.push(ip, mtd, pwd, obfs, tfo, udp, caead, tag);
    }
    QX = nss.join(', ');
  }
  return QX;
}
function Fobfs(jsonl, Pcert0, PTls13) {
  var obfsi = [];
  var cert = Pcert0;
  tcert = cert == 0 ? 'tls-verification=false' : 'tls-verification=true';
  tls13 = PTls13 == 1 ? 'tls13=true' : 'tls13=false';
  if (jsonl.net == 'ws' && jsonl.tls == 'tls') {
    obfs0 = 'obfs=wss, ' + tcert + ', ' + tls13 + ', ';
    uri0 =
      jsonl.path && jsonl.path != '' ? 'obfs-uri=' + jsonl.path : 'obfs-uri=/';
    uri0 = uri0.indexOf('uri=/') != -1 ? uri0 : uri0.replace('uri=', 'uri=/');
    host0 =
      jsonl.host && jsonl.host != '' ? 'obfs-host=' + jsonl.host + ', ' : '';
    obfsi.push(obfs0 + host0 + uri0);
    return obfsi.join(', ');
  } else if (jsonl.net == 'ws') {
    obfs0 = 'obfs=ws';
    uri0 =
      jsonl.path && jsonl.path != '' ? 'obfs-uri=' + jsonl.path : 'obfs-uri=/';
    uri0 = uri0.indexOf('uri=/') != -1 ? uri0 : uri0.replace('uri=', 'uri=/');
    host0 =
      jsonl.host && jsonl.host != '' ? 'obfs-host=' + jsonl.host + ', ' : '';
    obfsi.push(obfs0, host0 + uri0);
    return obfsi.join(', ');
  } else if (
    jsonl.tls == 'tls' &&
    (jsonl.net == 'tcp' || jsonl.net == 'none')
  ) {
    obfs0 = 'obfs=over-tls, ' + tcert + ', ' + tls13;
    uri0 = jsonl.path && jsonl.path != '' ? 'obfs-uri=' + jsonl.path : '';
    uri0 = uri0.indexOf('uri=/') != -1 ? uri0 : uri0.replace('uri=', 'uri=/');
    host0 = jsonl.host && jsonl.host != '' ? ', obfs-host=' + jsonl.host : '';
    obfsi.push(obfs0 + host0);
    return obfsi.join(', ');
  } else if (
    (jsonl.net == 'tcp' || jsonl.net == 'none') &&
    jsonl.type == 'http'
  ) {
    obfs0 = 'obfs=http';
    uri0 =
      jsonl.path && jsonl.path != '' ? 'obfs-uri=' + jsonl.path : 'obfs-uri=/';
    uri0 = uri0.indexOf('uri=/') != -1 ? uri0 : uri0.replace('uri=', 'uri=/');
    host0 =
      jsonl.host && jsonl.host != '' ? 'obfs-host=' + jsonl.host + ', ' : '';
    obfsi.push(obfs0, host0 + uri0);
    return obfsi.join(', ');
  } else if (jsonl.net != 'tcp' && jsonl.net != 'none') {
    Perror = 1;
    return 'NOT-SUPPORTTED';
  } else if (
    (jsonl.net == 'tcp' || jsonl.net == 'none') &&
    jsonl.type != undefined &&
    jsonl.type != 'none' &&
    jsonl.type != '' &&
    jsonl.type != 'vmess'
  ) {
    return 'NOT-SUPPORTTED';
  } else {
    return '';
  }
}
function Dot2(cnt) {
  cnt = cnt ? cnt.replace(/\\\./g, '这是个点') : '';
  return cnt;
}
function ToDot(cnt) {
  cnt = cnt ? cnt.replace(/这是个点/g, '.') : '';
  return cnt;
}
function Regex(content) {
  var Preg0 = RegExp(Preg, 'i');
  cnt = content;
  if (Preg0.test(cnt)) {
    return content;
  }
}
function RegexOut(content) {
  var Preg0 = RegExp(Pregout, 'i');
  cnt = content;
  if (!Preg0.test(cnt)) {
    return content;
  } else {
    RegoutList.push(cnt);
  }
}
function Scheck(content, param) {
  name = content
    .replace(/tag\s*\=/g, 'tag=')
    .split('tag=')[1]
    .toUpperCase();
  param = param ? param.map(Dot2) : param;
  if (param) {
    var flag = 0;
    for (var i = 0; i < param.length; i++) {
      var params = param[i].split('.').map(ToDot);
      const checkpara = item => name.indexOf(item.toUpperCase()) != -1;
      if (params.every(checkpara)) {
        flag = 1;
      }
    }
    return flag;
  } else {
    return 2;
  }
}
function Filter(servers, Pin, Pout) {
  var Nlist = [];
  var Delist = [];
  var Nname = [];
  servers = servers.filter(Boolean);
  for (var i = 0; i < servers.length; i++) {
    if (Scheck(servers[i], Pin) != 0 && Scheck(servers[i], Pout) != 1) {
      Nlist.push(servers[i]);
      Nname.push(servers[i].replace(/ /g, '').split('tag=')[1]);
    } else {
      Delist.push(servers[i].replace(/ /g, '').split('tag=')[1]);
    }
  }
  return Nlist;
}
function FilterScript(servers, script) {
  try {
    eval(script);
    const nodes = Tools().getNodeInfo(servers);
    const IN = filter(nodes);
    const res = servers.filter((_, i) => IN[i]);
    return res;
  } catch (err) {
    return servers;
  }
}
function SSR2QX(subs, Pudp, Ptfo) {
  var nssr = [];
  var cnt = Base64.decode(
    subs.split('ssr://')[1].replace(/-/g, '+').replace(/_/g, '/')
  ).split('\u0000')[0];
  var obfshost = '';
  var oparam = '';
  if (cnt.split(':').length <= 8) {
    type = 'shadowsocks=';
    ip = cnt.split(':')[0] + ':' + cnt.split(':')[1];
    pwd =
      'password=' +
      Base64.decode(
        cnt.split('/?')[0].split(':')[5].replace(/-/g, '+').replace(/_/g, '/')
      ).split('\u0000')[0];
    mtd = 'method=' + cnt.split(':')[3];
    obfs = cnt.split(':')[4] != 'plain' ? 'obfs=' + cnt.split(':')[4] : '';
    ssrp =
      cnt.split(':')[2] != 'origin' ? 'ssr-protocol=' + cnt.split(':')[2] : '';
    if (cnt.indexOf('obfsparam=') != -1 && obfs != '') {
      obfshost =
        cnt.split('obfsparam=')[1].split('&')[0] != ''
          ? 'obfs-host=' +
            Base64.decode(
              cnt
                .split('obfsparam=')[1]
                .split('&')[0]
                .replace(/-/g, '+')
                .replace(/_/g, '/')
            )
              .split(',')[0]
              .split('\u0000')[0]
          : '';
    }
    if (cnt.indexOf('protoparam=') != -1) {
      oparam =
        cnt.split('protoparam=')[1].split('&')[0] != ''
          ? 'ssr-protocol-param=' +
            Base64.decode(
              cnt
                .split('protoparam=')[1]
                .split('&')[0]
                .replace(/-/g, '+')
                .replace(/_/g, '/')
            )
              .split(',')[0]
              .split('\u0000')[0]
          : '';
    }
    tag =
      'tag=' +
      Base64.decode(
        cnt
          .split('remarks=')[1]
          .split('&')[0]
          .replace(/-/g, '+')
          .replace(/_/g, '/')
      ).split('\u0000')[0];
    pudp = Pudp == 1 ? 'udp-relay=true' : 'udp-relay=false';
    ptfo = Ptfo == 1 ? 'fast-open=true' : 'fast-open=false';
    nssr.push(
      type + ip,
      pwd,
      mtd,
      obfs,
      obfshost,
      oparam,
      ssrp,
      pudp,
      ptfo,
      tag
    );
    QX = nssr.filter(Boolean).join(', ');
  } else {
    QX = '';
  }
  return QX;
}
function TJ2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  var ntrojan = [];
  var cnt = subs.split('trojan://')[1];
  type = 'trojan=';
  if (cnt.indexOf(':443') != -1) {
    ip = cnt.split('@')[1].split(':443')[0] + ':443';
  } else {
    ip = cnt.split('@')[1].split('?')[0].split('\n')[0].split('#')[0].trim();
  }
  pwd = cnt.split('@')[0]
    ? 'password=' + decodeURIComponent(cnt.split('@')[0])
    : '';
  obfs = 'over-tls=true';
  pcert =
    cnt.indexOf('allowInsecure=0') != -1
      ? 'tls-verification=true'
      : 'tls-verification=false';
  thost =
    cnt.indexOf('sni=') != -1
      ? 'tls-host=' + cnt.split('sni=')[1].split(/&|#/)[0]
      : '';
  thost =
    cnt.indexOf('peer=') != -1
      ? 'tls-host=' + cnt.split('peer=')[1].split(/&|#/)[0]
      : thost;
  ptls13 = PTls13 == 1 ? 'tls13=true' : 'tls13=false';
  puri = '';
  if (Pcert0 == 0) {
    pcert = 'tls-verification=false';
  } else if (Pcert0 == 1) {
    pcert = 'tls-verification=true';
  }
  pudp =
    Pudp == 1 || cnt.indexOf('udp=1') != -1
      ? 'udp-relay=true'
      : 'udp-relay=false';
  ptfo =
    Ptfo == 1 || cnt.indexOf('tfo=1') != -1
      ? 'fast-open=true'
      : 'fast-open=false';
  tag =
    cnt.indexOf('#') != -1
      ? 'tag=' + decodeURIComponent(cnt.split('#').slice(-1)[0])
      : 'tag= [trojan]' + ip;
  if (cnt.indexOf('&plugin=obfs-local') != -1) {
    obfs = cnt.indexOf('obfs=websocket') != -1 ? 'obfs=wss' : obfs;
    thost =
      cnt.indexOf('obfs-host=') == -1
        ? thost
        : 'obfs-host=' +
          decodeURIComponent(
            cnt.split('obfs-host=')[1].split(';')[0].split('#')[0]
          );
    puri =
      cnt.indexOf('obfs-uri=') == -1
        ? puri
        : 'obfs-uri=' +
          decodeURIComponent(
            cnt.split('obfs-uri=')[1].split(';')[0].split('#')[0]
          );
  } else if (cnt.indexOf('&type=ws') != -1 || cnt.indexOf('?type=ws') != -1) {
    obfs = cnt.indexOf('security=tls') != -1 ? 'obfs=wss' : obfs;
    thost =
      cnt.indexOf('&host=') == -1
        ? thost
        : 'obfs-host=' +
          decodeURIComponent(
            cnt.split('&host=')[1].split('&')[0].split('#')[0]
          );
    puri =
      cnt.indexOf('&path=') == -1
        ? puri
        : 'obfs-uri=' +
          decodeURIComponent(
            cnt.split('&path=')[1].split('&')[0].split('#')[0]
          );
  }
  ntrojan.push(type + ip, pwd, obfs, pcert, thost, puri, pudp, ptfo, tag);
  QX = ntrojan.filter(Boolean).join(', ');
  return QX;
}
function joinx(total, item) {
  return total + ':' + item;
}
function SS2QX(subs, Pudp, Ptfo) {
  var nssr = [];
  var cnt = subs.split('ss://')[1];
  QX = '';
  if (cnt.split(':').length <= 10) {
    type = 'shadowsocks=';
    let cntt = cnt.split('#')[0];
    if (cntt.indexOf('@') != -1 && cntt.indexOf(':') != -1) {
      ip = cnt.split('@')[1].split('#')[0].split('/')[0].split('?')[0];
      pwdmtd = Base64.decode(
        cnt.split('@')[0].replace(/-/g, '+').replace(/_/g, '/')
      )
        .split('\u0000')[0]
        .split(':');
    } else if (cntt.indexOf('?') == -1) {
      var cnt0 = Base64.decode(
        cnt
          .split('#')[0]
          .replace(/-/g, '+')
          .replace(/_/g, '/')
          .split('\u0000')[0]
      );
      ip = cnt0.split('@')[1].split('#')[0].split('/')[0];
      pwdmtd = cnt0.split('@')[0].split(':');
    } else if (cntt.indexOf('?') != -1) {
      var cnt0 = Base64.decode(
        cnt
          .split('#')[0]
          .split('?')[0]
          .replace(/-/g, '+')
          .replace(/_/g, '/')
          .split('\u0000')[0]
      );
      var cnt1 = Base64.decode(
        cnt
          .split('#')[0]
          .split('?')[1]
          .split('=')[1]
          .replace(/-/g, '+')
          .replace(/_/g, '/')
          .split('\u0000')[0]
      );
      ip = cnt0.split('@')[1].split('#')[0].split('/')[0];
      pwdmtd = cnt0.split('@')[0].split(':');
    }
    mtd = 'method=' + pwdmtd[0];
    pwdmtd.splice(0, 1);
    pwd = 'password=' + pwdmtd.reduce(joinx);
    if (
      cntt.indexOf('v2ray-plugin') == -1 &&
      cntt.indexOf('plugin=v2ray') == -1
    ) {
      obfs =
        cnt.split('obfs%3D')[1] != null
          ? ', obfs=' + cnt.split('obfs%3D')[1].split('%3B')[0].split('#')[0]
          : '';
      obfshost =
        cnt.split('obfs-host%3D')[1] != null
          ? ', obfs-host=' +
            cnt.split('obfs-host%3D')[1].split('&')[0].split('#')[0]
          : '';
    } else if (cnt1 != undefined) {
      cnt1 = JSON.parse(cnt1);
      obfs = cnt1.tls ? ', obfs=wss' : ', obfs=ws';
      obfshost = cnt1.host
        ? ', obfs-host=' + cnt1.host + ', tls-verification=false'
        : '';
    } else if (cntt.indexOf('v2ray-plugin') != -1) {
      cnt1 = decodeURIComponent(cntt.split('v2ray-plugin')[1]);
      obfs = cnt1.indexOf('tls') != -1 ? ', obfs=wss' : ', obfs=ws';
      obfshost =
        cnt1.indexOf('host=') != -1
          ? ', obfs-host=' +
            cnt1.split('host=')[1].split(';')[0].split('#')[0].trim()
          : '';
      obfshost = obfshost != 'obfs-host=' ? obfshost : '';
    } else if (cntt.indexOf('plugin=v2ray') != -1) {
      cnt1 = decodeURIComponent(cntt.split('plugin=v2ray')[1]);
      obfs = cnt1.indexOf('tls') != -1 ? ', obfs=wss' : ', obfs=ws';
      obfshost =
        cnt1.indexOf('host=') != -1
          ? ', obfs-host=' +
            cnt1.split('host=')[1].split(';')[0].split('#')[0].trim()
          : '';
      obfshost = obfshost != 'obfs-host=' ? obfshost : '';
    }
    tag =
      decodeURIComponent(cnt.split('#')[1]) != 'undefined'
        ? 'tag=' + decodeURIComponent(cnt.split('#')[1])
        : 'tag=' + ip;
    pudp = Pudp == 1 ? 'udp-relay=true' : 'udp-relay=false';
    ptfo = Ptfo == 1 ? 'fast-open=true' : 'fast-open=false';
    nssr.push(type + ip, pwd, mtd + obfs + obfshost, pudp, ptfo, tag);
    QX = nssr.join(', ');
  }
  return QX;
}
function SSD2QX(subs, Pudp, Ptfo) {
  var j = 0;
  var QX = [];
  var cnt = JSON.parse(Base64.decode(subs.split('ssd://')[1]));
  var type = 'shadowsocks=';
  var pwd = 'password=' + cnt.password;
  var mtd = 'method=' + cnt.encryption;
  var obfs = '';
  var obfshost = '';
  var port = cnt.port ? ':' + cnt.port : '';
  if (cnt.plugin_options) {
    obfs =
      cnt.plugin_options.split(';')[0] != null
        ? ', ' + cnt.plugin_options.split(';')[0]
        : '';
    obfshost =
      cnt.plugin_options.split(';')[1] != null
        ? ', ' + cnt.plugin_options.split(';')[1]
        : '';
  }
  pudp = Pudp == 1 ? 'udp-relay=true' : 'udp-relay=false';
  ptfo = Ptfo == 1 ? 'fast-open=true' : 'fast-open=false';
  for (var i in cnt.servers) {
    ip = cnt.servers[i].server;
    if (cnt.servers[i].plugin_options) {
      obfs =
        cnt.servers[i].plugin_options.split(';')[0] != null
          ? ', ' + cnt.servers[i].plugin_options.split(';')[0]
          : '';
      obfshost =
        cnt.servers[i].plugin_options.split(';')[1] != null
          ? ', ' + cnt.servers[i].plugin_options.split(';')[1]
          : '';
    }
    if (cnt.servers[i].encryption) {
      mtd = 'method=' + cnt.servers[i].encryption;
    }
    if (cnt.servers[i].password) {
      pwd = 'password=' + cnt.servers[i].password;
    }
    if (ip.indexOf('.') > 0) {
      port = cnt.servers[i].port ? ':' + cnt.servers[i].port : port;
      tag = 'tag=' + cnt.servers[i].remarks;
      QX[j] =
        type +
        ip +
        port +
        ', ' +
        pwd +
        ', ' +
        mtd +
        obfs +
        obfshost +
        ', ' +
        pudp +
        ', ' +
        ptfo +
        ', ' +
        tag;
      var j = j + 1;
    }
  }
  return QX;
}
function QXFix(cntf) {
  var cnti = cntf
    .replace(/\s*tag\s*\=/g, 'tag=')
    .replace('chacha20-poly', 'chacha20-ietf-poly');
  try {
    var hd = cnti.split(',tag=')[0];
    var tag = 'tag=' + cnti.split(',tag=')[1].split(',')[0].trim();
    var tail = cnti.split(tag + ',');
    cnti =
      tail.length <= 1
        ? cnti
        : String(hd + ',' + tail[1].split('\r')[0] + ',' + tag);
    cntis = cnti
      .split(',')
      .filter(Boolean)
      .map(item => item.trim());
    tagfix = '';
    cntii = '';
    for (i in cntis) {
      if (cntis[i].indexOf('=') == -1 && cntis[i].trim() != '') {
        tagfix += ',' + cntis[i];
      } else {
        cntis[i].indexOf('tag=') != 0
          ? (cntii += cntis[i] + ', ')
          : (cntii = cntii);
      }
    }
    cntii = cntii + tag + tagfix;
    return cntii;
  } catch (error) {}
  return '';
}
function isQuanX(content) {
  var cnts = content.split('\n');
  var nlist = [];
  for (var i = 0; i < cnts.length; i++) {
    var cnti = cnts[i];
    if (cnti.indexOf('=') != -1 && cnti.indexOf('tag') != -1) {
      var cnt = cnti.split('=')[0].trim();
      if (
        cnt == 'http' ||
        cnt == 'shadowsocks' ||
        cnt == 'trojan' ||
        cnt == 'vmess' ||
        cnt == 'socks5'
      ) {
        nlist.push(QXFix(cnti));
      }
    }
  }
  return nlist;
}
function isQuanXRewrite(content) {
  cnt = content;
  cnt0 = [];
  var RuleK = [
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
  for (var i = 0; i < cnt.length; i++) {
    if (cnt[i]) {
      var cnti = cnt[i].trim();
      const RuleCheck = item => cnti.toLowerCase().indexOf(item) != -1;
      if (
        (cnti.indexOf('pattern') != -1 && cnti.indexOf('type') != -1) ||
        cnti.indexOf('http-r') != -1
      ) {
        cnti = SGMD2QX(cnti)[0] ? SGMD2QX(cnti)[0] : '';
      } else if (
        (cnti.indexOf(' 302') != -1 ||
          cnti.indexOf(' 307') != -1 ||
          /\s(_|-)\s(reject|REJECT)/.test(cnti) ||
          /\sreject$/.test(cnti) ||
          /\sreject-/.test(cnti)) &&
        cnti.indexOf(' url ') == -1 &&
        cnti.indexOf(' url-and-header ') == -1
      ) {
        cnti = SGMD2QX(cnti)[0] ? SGMD2QX(cnti)[0] : '';
      } else if (cnti.indexOf(' data=') != -1) {
        cnti = SGMD2QX('[Map Local]\n' + cnti)[0]
          ? SGMD2QX('[Map Local]\n' + cnti)[0]
          : '';
      } else if (
        cnti.indexOf('URL-REGEX') != -1 ||
        cnti.indexOf(' header') != -1 ||
        cnti.replace(/ /g, '').indexOf('hostname=') != -1
      ) {
        cnti = SGMD2QX(cnti)[0] ? SGMD2QX(cnti)[0] : '';
      } else if (
        cnti.indexOf(' url ') != -1 &&
        cnti.indexOf(' simple-response ') == -1 &&
        cnti.indexOf(' url = ') == -1
      ) {
        cnti = cnti.replace('^http', 'http');
        cnti = cnti.split(' ')[1] == 'url' ? cnti : '';
      } else if (cnti.indexOf(' url-and-header ') != -1) {
        cnti = cnti;
      } else {
        cnti = '';
      }
      if (
        cnti != '' &&
        cnti.trim()[0] != '[' &&
        cnti.indexOf('RULE-SET') == -1 &&
        !/cronexp\=|type\=cron/.test(cnti.replace(/ /g, '')) &&
        !RuleK.some(RuleCheck)
      ) {
        if (!/\;$/.test(cnti)) {
          cnt0.push(cnti);
        }
      }
    }
  }
  return cnt0;
}
function QXSort(content, para) {
  var nlist = content;
  if (para == 1) {
    return nlist.sort(ToTag);
  } else if (para == -1) {
    return nlist.sort(ToTagR);
  } else if (para == 'x') {
    return shuffle(nlist);
  } else if (para == '0') {
    return nlist;
  } else {
    return Sort_KWD(nlist, para);
  }
}
function ToTag(elem1, elem2) {
  var tag1 = elem1.split('tag')[1].split('=')[1].trim();
  var tag2 = elem2.split('tag')[1].split('=')[1].trim();
  res = tag1 > tag2 ? 1 : -1;
  return res;
}
function ToTagR(elem1, elem2) {
  var tag1 = elem1.split('tag')[1].split('=')[1].trim();
  var tag2 = elem2.split('tag')[1].split('=')[1].trim();
  res = tag1 > tag2 ? -1 : 1;
  return res;
}
function shuffle(arr) {
  var input = arr;
  for (var i = input.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}
function Sort_KWD(cnt, strs) {
  strlist = strs.indexOf('<') != -1 ? strs.split('<') : strs.split('>');
  regj = strlist.map(item => RegExp(item, 'i'));
  dir = strs.indexOf('<') != -1 ? -1 : 1;
  var arr = new Array(strlist.length + 1);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = [];
  }
  for (var i = 0; i < cnt.length; i++) {
    flag = 0;
    for (var j = 0; j < strlist.length; j++) {
      if (regj[j].test(cnt[i])) {
        arr[j].push(cnt[i]);
        flag = 1;
        break;
      }
    }
    if (flag != 1) {
      arr[strlist.length].push(cnt[i]);
    }
  }
  arr = PsortX == -1 ? arr.map(item => item.sort(ToTagR)) : arr;
  arr = PsortX == 1 ? arr.map(item => item.sort(ToTag)) : arr;
  newarr = MixArr(arr, dir);
  return newarr;
}
function MixArr(cnt, dir) {
  var cnt0 = [];
  for (i = 0; i < cnt.length - 1; i++) {
    cnt0 =
      dir == 1 ? cnt0.concat(cnt[i]) : cnt0.concat(cnt[cnt.length - 2 - i]);
  }
  cnt0 =
    dir == 1
      ? cnt0.concat(cnt[cnt.length - 1].sort(ToTag))
      : cnt[cnt.length - 1].sort(ToTagR).concat(cnt0);
  return cnt0;
}
function DelReg(content) {
  delreg = RegExp(delreg, 'gmi');
  content = content.replace(/tag\s*\=\s*/, 'tag=');
  cnt0 = content.split('tag=')[0];
  cnt1 = content.split('tag=')[1].split(',')[0];
  cnt2 =
    content.split('tag=')[1].split(',').length == 1
      ? ''
      : content.split(cnt1)[1];
  cnt = cnt0 + 'tag=' + cnt1.replace(delreg, '') + cnt2;
  return cnt;
}
function Rename(str) {
  var server = str;
  if (server.indexOf('tag=') != -1) {
    hd = server.split('tag=')[0];
    name = server.split('tag=')[1].split(',')[0].trim();
    tail =
      server.split('tag=')[1].split(',').length <= 1
        ? ''
        : server.split('tag=')[1].split(name)[1];
    for (var i = 0; i < Prn.length; i++) {
      nname = Prn[i].split('@')[1]
        ? decodeURIComponent(Prn[i].split('@')[1])
        : Prn[i].split('@')[1];
      oname = Prn[i].split('@')[0]
        ? decodeURIComponent(Prn[i].split('@')[0])
        : Prn[i].split('@')[0];
      if (oname && nname) {
        var rn = escapeRegExp(oname);
        name = name.replace(new RegExp(rn, 'gmi'), nname);
      } else if (oname && nname == '') {
        var nemoji = emoji_del(name);
        if ((Pemoji == 1 || Pemoji == 2) && Prname) {
          name = oname + nemoji;
        } else {
          name = oname + name.trim();
        }
      } else if (nname && oname == '') {
        name = name.trim() + nname;
      } else if (oname && oname.indexOf('☠️') != -1) {
        hh = Dot2(oname.slice(0, oname.length - 2)).split('.');
        for (j = 0; j < hh.length; j++) {
          var nn = escapeRegExp(ToDot(hh[j]));
          var del = new RegExp(nn, 'gmi');
          name = name.replace(del, '');
        }
      } else if (oname == '' && nname == '') {
        name = name.replace(/@/g, '');
      } else {
        name = name;
      }
      nserver = hd + 'tag=' + name + tail;
    }
    return nserver;
  } else {
    return server;
  }
}
function RenameScript(servers, script) {
  try {
    const nodes = Tools().getNodeInfo(servers);
    eval(script);
    const newNames = rename(nodes);
    return servers.map((s, i) => s.split('tag=')[0] + 'tag=' + newNames[i]);
  } catch (err) {
    return servers;
  }
}
function emoji_del(str) {
  return str
    .replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, '')
    .trim();
}
function get_emoji(emojip, sname) {
  var Lmoji = {
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
    '🌏': ['亚洲', 'Asia']
  };
  str1 = JSON.stringify(Lmoji);
  aa = JSON.parse(str1);
  bb = JSON.parse(str1.replace(/🇹🇼/g, ' 🇨🇳'));
  var cnt = emojip == 1 ? aa : bb;
  var flag = 0;
  for (var key in cnt) {
    dd = cnt[key];
    for (i in dd) {
      if (sname.indexOf(dd[i]) != -1) {
        flag = 1;
        nname =
          key +
          ' ' +
          sname
            .replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, '')
            .trim();
        return [nname, key];
      }
    }
  }
  if (flag == 0) {
    return [
      '🏴‍☠️ ' +
        sname
          .replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, '')
          .trim(),
      '🏴‍☠️'
    ];
  }
}
function emoji_handle(servers, Pemoji) {
  var nlist = [];
  var ser0 = servers;
  for (var i = 0; i < ser0.length; i++) {
    if (ser0[i].indexOf('tag=') != -1) {
      var oname = ser0[i].split('tag=')[1].trim();
      var hd = ser0[i].split('tag=')[0];
      var nname = oname;
      if (Pemoji == 1) {
        var nname = get_emoji(1, nname)[0];
      } else if (Pemoji == 2) {
        var nname = get_emoji(2, nname)[0];
      } else if (Pemoji == -1) {
        nname = emoji_del(oname);
      }
      var nserver = hd + 'tag=' + nname.replace('  ', ' ').trim();
      nlist.push(nserver);
    }
  }
  return nlist;
}
function Surge2QX(conf) {
  var QXlist = conf.split('\n').map(isSurge).filter(Boolean);
  var Nlist = [];
  var node = '';
  for (var i = 0; i < QXlist.length; i++) {
    var cnt = QXlist[i];
    if (cnt.split('=')[1].split(',')[0].indexOf('trojan') != -1) {
      node = Strojan2QX(cnt);
    } else if (cnt.split('=')[1].split(',')[0].indexOf('http') != -1) {
      node = Shttp2QX(cnt);
    } else if (cnt.split('=')[1].split(',')[0].indexOf('vmess') != -1) {
      node = SVmess2QX(cnt);
    } else if (cnt.split('=')[1].split(',')[0].indexOf('ss') != -1) {
      node = SSS2QX(cnt);
    } else if (cnt.split('=')[1].split(',')[0].indexOf('socks5') != -1) {
      node = SS52QX(cnt);
    } else if (cnt.split('=')[1].split(',')[0].indexOf('custom') != -1) {
      node = SCT2QX(cnt);
    }
    node = Pudp0 != 0 ? XUDP(node, Pudp0) : node;
    node = Ptfo0 != 0 ? XTFO(node, Ptfo0) : node;
    if (cnt.indexOf('test-url') != -1) {
      var checkurl =
        ', server_check_url' + cnt.split('test-url')[1].split(',')[0];
      node = node.replace(/\,(\s)*tag/, checkurl + ', tag');
    }
    Nlist.push(node);
  }
  return Nlist;
}
function SCT2QX(content) {
  var cnt = content;
  var tag = 'tag=' + cnt.split('=')[0].trim();
  var ipport = cnt.split(',')[1].trim() + ':' + cnt.split(',')[2].trim();
  var pmtd = 'method=' + cnt.split(',')[3].trim();
  var pwd = 'password=' + cnt.split(',')[4].trim();
  if (cnt.indexOf('obfs') != -1) {
    pobfs =
      'obfs=' +
      cnt
        .replace(/obfs-host/, '')
        .split('obfs')[1]
        .split(',')[0]
        .split('=')[1];
  } else {
    pobfs = '';
  }
  var phost =
    cnt.indexOf('obfs-host') != -1
      ? 'obfs-host' + cnt.split('obfs-host')[1].split(',')[0].trim()
      : '';
  if (phost != '') {
    pobfs = pobfs + ', ' + phost;
  }
  var ptfo =
    paraCheck(cnt, 'tfo') == 'true' ? 'fast-open=true' : 'fast-open=false';
  var pudp =
    paraCheck(cnt, 'udp-relay') == 'true'
      ? 'udp-relay=true'
      : 'udp-relay=false';
  var nserver =
    pobfs != ''
      ? 'shadowsocks= ' + [ipport, pmtd, pwd, pobfs, ptfo, pudp, tag].join(', ')
      : 'shadowsocks= ' + [ipport, pmtd, pwd, ptfo, pudp, tag].join(', ');
  return nserver;
}
function SSS2QX(content) {
  var cnt = content;
  var tag = 'tag=' + cnt.split('=')[0].trim();
  var ipport = cnt.split(',')[1].trim() + ':' + cnt.split(',')[2].trim();
  var pmtd =
    'method=' + cnt.split('encrypt-method')[1].split(',')[0].split('=')[1];
  var pwd = 'password=' + cnt.split('password')[1].split(',')[0].split('=')[1];
  if (cnt.indexOf('obfs') != -1) {
    pobfs =
      'obfs=' +
      cnt
        .replace(/obfs-host/, '')
        .split('obfs')[1]
        .split(',')[0]
        .split('=')[1];
  } else {
    pobfs = '';
  }
  var phost =
    cnt.indexOf('obfs-host') != -1
      ? 'obfs-host' + cnt.split('obfs-host')[1].split(',')[0].trim()
      : '';
  if (phost != '') {
    pobfs = pobfs + ', ' + phost;
  }
  var ptfo =
    paraCheck(cnt, 'tfo') == 'true' ? 'fast-open=true' : 'fast-open=false';
  var pudp =
    paraCheck(cnt, 'udp-relay') == 'true'
      ? 'udp-relay=true'
      : 'udp-relay=false';
  var nserver =
    pobfs != ''
      ? 'shadowsocks= ' + [ipport, pmtd, pwd, pobfs, ptfo, pudp, tag].join(', ')
      : 'shadowsocks= ' + [ipport, pmtd, pwd, ptfo, pudp, tag].join(', ');
  return nserver;
}
function SVmess2QX(content) {
  var cnt = content;
  var tag = 'tag=' + cnt.split('=')[0].trim();
  var ipport = cnt.split(',')[1].trim() + ':' + cnt.split(',')[2].trim();
  var puname =
    cnt.indexOf('username') != -1
      ? 'password=' +
        cnt.split('username')[1].split(',')[0].split('=')[1].trim()
      : '';
  var pmtd = 'method=aes-128-gcm';
  var ptls13 = paraCheck(cnt, 'tls13') == 'true' ? 'tls13=true' : 'tls13=false';
  var pverify =
    cnt.replace(/ /g, '').indexOf('skip-cert-verify=false') != -1
      ? 'tls-verification=true'
      : 'tls-verification=false';
  pvefify = Pcert0 == 1 ? 'tls-verification=true' : pverify;
  if (
    paraCheck(cnt.replace(/tls13/, ''), 'tls') == 'true' &&
    paraCheck(cnt.replace(/ws-header/, ''), 'ws') == 'true'
  ) {
    pobfs = 'obfs=wss' + ', ' + ptls13 + ', ' + pverify;
  } else if (paraCheck(cnt.replace(/ws-header/, ''), 'ws') == 'true') {
    pobfs = 'obfs=ws';
  } else if (paraCheck(cnt.replace(/tls13/, ''), 'tls') != 'false') {
    pobfs = 'obfs=over-tls' + ', ' + ptls13 + ', ' + pverify;
  } else if (paraCheck(cnt.replace(/ws-header/, ''), 'ws') == 'false') {
    pobfs = '';
  }
  var puri =
    paraCheck(cnt, 'ws-path') != 'false'
      ? 'obfs-uri=' + cnt.split('ws-path')[1].split(',')[0].split('=')[1].trim()
      : 'obfs-uri=/';
  var phost =
    cnt.indexOf('ws-headers') != -1
      ? 'obfs-host=' +
        cnt
          .split('ws-headers')[1]
          .split(',')[0]
          .split('=')[1]
          .split(':')[1]
          .trim()
      : '';
  if (pobfs.indexOf('ws' || 'wss') != -1) {
    if (phost != '') {
      pobfs = pobfs + ', ' + puri + ', ' + phost;
    } else {
      pobfs = pobfs + ', ' + puri;
    }
  }
  var ptfo =
    paraCheck(cnt, 'tfo') == 'true' ? 'fast-open=true' : 'fast-open=false';
  var nserver =
    pobfs != ''
      ? 'vmess= ' + [ipport, puname, pmtd, pobfs, ptfo, tag].join(', ')
      : 'vmess= ' + [ipport, puname, pmtd, ptfo, tag].join(', ');
  return nserver;
}
function isSurge(content) {
  if (content.indexOf('=') != -1) {
    cnt = content.split('=')[1].split(',')[0].trim();
    if (
      cnt == 'http' ||
      cnt == 'ss' ||
      cnt == 'trojan' ||
      cnt == 'vmess' ||
      cnt == 'custom' ||
      cnt == 'https' ||
      cnt == 'socks5' ||
      cnt == 'socks5-tls'
    ) {
      return content;
    }
  }
}
function paraCheck(content, para) {
  content = content.replace(/ /g, '');
  if (content.indexOf(para + '=') == -1) {
    return 'false';
  } else {
    return content
      .split(para + '=')[1]
      .split(',')[0]
      .trim();
  }
}
function Strojan2QX(content) {
  var cnt = content;
  var tag = 'tag=' + cnt.split('=')[0].trim();
  var ipport = cnt.split(',')[1].trim() + ':' + cnt.split(',')[2].trim();
  var pwd =
    'password=' + cnt.split('password')[1].split(',')[0].split('=')[1].trim();
  var ptls = 'over-tls=true';
  var ptfo =
    paraCheck(cnt, 'tfo') == 'true' ? 'fast-open=true' : 'fast-open=false';
  var pverify =
    cnt.replace(/ /g, '').indexOf('skip-cert-verify=false') != -1
      ? 'tls-verification=true'
      : 'tls-verification=false';
  var phost =
    cnt.indexOf('sni') != -1
      ? 'tls-host=' + cnt.split('sni')[1].split(',')[0].split('=')[1]
      : '';
  pvefify = Pcert0 == 1 ? 'tls-verification=true' : pverify;
  var ptls13 = paraCheck(cnt, 'tls13') == 'true' ? 'tls13=true' : 'tls13=false';
  var nserver =
    'trojan= ' +
    [ipport, pwd, ptls, ptfo, ptls13, phost, pverify, tag]
      .filter(Boolean)
      .join(', ');
  return nserver;
}
function Shttp2QX(content) {
  var cnt = content;
  var tag = 'tag=' + cnt.split('=')[0].trim();
  var ipport = cnt.split(',')[1].trim() + ':' + cnt.split(',')[2].trim();
  var puname =
    cnt.indexOf('username') != -1
      ? 'username=' +
        cnt.split('username')[1].split(',')[0].split('=')[1].trim()
      : '';
  var pwd =
    cnt.indexOf('password') != -1
      ? 'password=' +
        cnt.split('password')[1].split(',')[0].split('=')[1].trim()
      : '';
  var ptls =
    cnt.split('=')[1].split(',')[0].trim() == 'https'
      ? 'over-tls=true'
      : 'over-tls=false';
  var ptfo =
    paraCheck(cnt, 'tfo') == 'true' ? 'fast-open=true' : 'fast-open=false';
  if (ptls == 'over-tls=true') {
    var pverify =
      cnt.replace(/ /g, '').indexOf('skip-cert-verify=false') != -1
        ? 'tls-verification=true'
        : 'tls-verification=false';
    pvefify = Pcert0 == 1 ? 'tls-verification=true' : pverify;
    var ptls13 =
      paraCheck(cnt, 'tls13') == 'true' ? 'tls13=true' : 'tls13=false';
    ptls = ptls + ', ' + pverify + ', ' + ptls13;
  }
  var nserver =
    puname != ''
      ? 'http= ' + [ipport, puname, pwd, ptls, ptfo, tag].join(', ')
      : 'http= ' + [ipport, ptls, ptfo, tag].join(', ');
  return nserver;
}
function SS52QX(content) {
  var cnt = content;
  var tag = 'tag=' + cnt.split('=')[0].trim();
  var ipport = cnt.split(',')[1].trim() + ':' + cnt.split(',')[2].trim();
  var puname =
    cnt.indexOf('username') != -1
      ? 'username=' +
        cnt.split('username')[1].split(',')[0].split('=')[1].trim()
      : '';
  var pwd =
    cnt.indexOf('password') != -1
      ? 'password=' +
        cnt.split('password')[1].split(',')[0].split('=')[1].trim()
      : '';
  var ptls =
    cnt.split('=')[1].split(',')[0].trim() == 'socks5-tls'
      ? 'over-tls=true'
      : 'over-tls=false';
  var ptfo =
    paraCheck(cnt, 'tfo') == 'true' ? 'fast-open=true' : 'fast-open=false';
  if (ptls == 'over-tls=true') {
    var pverify =
      cnt.replace(/ /g, '').indexOf('skip-cert-verify=false') != -1
        ? 'tls-verification=true'
        : 'tls-verification=false';
    pvefify = Pcert0 == 1 ? 'tls-verification=true' : pverify;
    var ptls13 =
      paraCheck(cnt, 'tls13') == 'true' ? 'tls13=true' : 'tls13=false';
    ptls = ptls + ', ' + pverify + ', ' + ptls13;
  }
  var nserver =
    puname != ''
      ? 'socks5= ' + [ipport, puname, pwd, ptls, ptfo, tag].join(', ')
      : 'socks5= ' + [ipport, ptls, ptfo, tag].join(', ');
  return nserver;
}
function Loon2QX(cnt) {
  var type = cnt.split('=')[1].split(',')[0].trim();
  var node = '';
  if (type == 'Shadowsocks') {
    node = LoonSS2QX(cnt);
  } else if (type == 'ShadowsocksR') {
    node = LoonSSR2QX(cnt);
  }
  return node;
}
function LoonSS2QX(cnt) {
  var node = 'shadowsocks=';
  var ip = [cnt.split(',')[1].trim(), cnt.split(',')[2].trim()].join(':');
  var mtd = 'method=' + cnt.split(',')[3].trim();
  var pwd = 'password=' + cnt.split(',')[4].trim().split('"')[1];
  var obfs =
    cnt.split(',').length == 7
      ? ', ' +
        [
          'obfs=' + cnt.split(',')[5].trim(),
          'obfs-host=' + cnt.split(',')[6].trim()
        ].join(',')
      : '';
  var tag = ', tag=' + cnt.split('=')[0].trim();
  node = node + [ip, mtd, pwd].join(', ') + obfs + tag;
  return node;
}
function LoonSSR2QX(cnt) {
  var node = 'shadowsocks=';
  var ip = [cnt.split(',')[1].trim(), cnt.split(',')[2].trim()].join(':');
  var mtd = 'method=' + cnt.split(',')[3].trim();
  var pwd = 'password=' + cnt.split(',')[4].trim().split('"')[1];
  var ssrp = 'ssr-protocol=' + cnt.split(',')[5].trim();
  var ssrpara =
    'ssr-protocol-param=' + cnt.split(',')[6].replace(/\{|\}/g, '').trim();
  var obfs = 'obfs=' + cnt.split(',')[7].trim();
  var obfshost = 'obfs-host=' + cnt.split(',')[8].replace(/\{|\}/g, '').trim();
  var tag = ', tag=' + cnt.split('=')[0].trim();
  node = node + [ip, mtd, pwd, ssrp, ssrpara, obfs, obfshost].join(', ') + tag;
  return node;
}
function YAMLFix(cnt) {
  cnt = cnt
    .replace(/\[/g, 'yaml@bug1')
    .replace(/\\r/g, '')
    .replace(/\*/g, 'yaml@bug2');
  if (cnt.indexOf('{') != -1 && /\{\s*\"*(name|type|server)/.test(cnt)) {
    cnt = cnt
      .replace(/(^|\n)- /g, '$1  - ')
      .replace(/    - /g, '  - ')
      .replace(/:(?!\s)/g, ': ')
      .replace(/\,\"/g, ', "')
      .replace(/: {/g, ': {,   ')
      .replace(/, (Host|host|path|mux)/g, ',   $1');
    cnt = cnt.replace(/{\s*name: (.*?), (.*?):/g, '{name: "$1", $2:');
    cnt = cnt.replace(/{|}/g, '').replace(/,/g, '\n   ');
  }
  cnt = cnt
    .replace(/\n\s*\-\s*\n.*name/g, '\n  - name')
    .replace(/\$|\`/g, '')
    .split('proxy-providers:')[0]
    .split('proxy-groups:')[0]
    .replace(
      /\"(name|type|server|port|cipher|password|uuid|alterId|udp)(\"*)/g,
      '$1'
    );
  cnt = cnt
    .replace(/\n\s{2}([a-zA-Z]+.*\:)/g, '\n    $1')
    .replace(/\n(\-.*)/g, '\n  $1');
  cnt = cnt
    .replace(/name\:(.*?)\:(.*?)\n/gim, 'name:$1冒号$2\n')
    .replace(/\s{6}Host\:/g, '      Host:');
  items = cnt.split('\n').map(yamlcheck);
  cnt = items.join('\n');
  cnt =
    cnt.indexOf('proxies:') != -1 && /\n\s{4}server/.test(cnt)
      ? cnt
          .replace(/\n\s{4}(headers|path)/g, '\n      $1')
          .replace(/\n\s{6}Host/g, '\n        Host')
          .replace(/\t/g, '')
      : cnt;
  cnt =
    cnt.indexOf('proxies:') == -1
      ? 'proxies:\n' + cnt
      : 'proxies:' + cnt.split('proxies:')[1];
  return cnt;
}
function yamlcheck(cnt) {
  if (cnt.indexOf('name') != -1) {
    for (var i = 0; i < 10; i++) {
      cnt = cnt.replace(new RegExp(patn[0][i], 'gmi'), patn[4][i]);
    }
  }
  if (/(:|-)/.test(cnt)) {
    return cnt;
  }
}
function Clash2QX(cnt) {
  const yaml = new YAML();
  var aa = JSON.stringify(yaml.parse(YAMLFix(cnt)))
    .replace(/yaml@bug𝟙/g, '[')
    .replace(/冒号/gim, ':')
    .replace(/yaml@bug𝟚/g, '*');
  for (var i = 0; i < 10; i++) {
    aa = aa.replace(new RegExp(patn[4][i], 'gmi'), patn[0][i]);
  }
  var bb = JSON.parse(aa).proxies;
  var nl = bb.length;
  var nodelist = [];
  var node = '';
  for (i = 0; i < nl; i++) {
    try {
      node = bb[i];
      typecc = node.type;
      if (typecc == 'ss') {
        node = CSS2QX(node);
      } else if (typecc == 'ssr') {
        node = CSSR2QX(node);
      } else if (typecc == 'vmess') {
        node = CV2QX(node);
      } else if (typecc == 'trojan') {
        node = CT2QX(node);
      } else if (typecc == 'http') {
        node = CH2QX(node);
      } else if (typecc == 'socks5') {
        node = CS52QX(node);
      }
      node = Pudp0 != 0 ? XUDP(node, Pudp0) : node;
      node = Ptfo0 != 0 ? XTFO(node, Ptfo0) : node;
      nodelist.push(node);
    } catch (error) {}
  }
  return nodelist.join('\n');
}
function CSS2QX(cnt) {
  tag = 'tag=' + cnt.name.replace(/\\U.+?\s{1}/gi, '');
  ipt = cnt.server + ':' + cnt.port;
  pwd = 'password=' + cnt.password;
  mtd = 'method=' + cnt.cipher;
  udp = cnt.udp ? 'udp-relay=true' : 'udp-relay=false';
  uot = cnt['udp-over-tcp'] ? 'udp-over-tcp=true' : 'udp-over-tcp=false';
  tfo = cnt.tfo ? 'fast-open=true' : 'fast-open=false';
  obfs = cnt['plugin-opts'] ? 'obfs=' + cnt['plugin-opts'].mode : '';
  ohost = cnt['plugin-opts'] ? 'obfs-host=' + cnt['plugin-opts'].host : '';
  ouri = '';
  cert = '';
  if (obfs.indexOf('websocket') != -1) {
    obfs = cnt['plugin-opts'].tls ? 'obfs=wss' : 'obfs=ws';
    ohost = cnt['plugin-opts'].host
      ? 'obfs-host=' + cnt['plugin-opts'].host
      : '';
    ouri = cnt['plugin-opts'].path ? 'obfs-uri=' + cnt['plugin-opts'].path : '';
    if (obfs == 'obfs=wss') {
      cert = Pcert0 == 1 ? '' : 'tls-verification =false';
    }
  }
  node =
    'shadowsocks=' +
    [ipt, pwd, mtd, udp, uot, tfo, obfs, ohost, ouri, cert, tag]
      .filter(Boolean)
      .join(', ');
  return node;
}
function CSSR2QX(cnt) {
  tag = 'tag=' + cnt.name.replace(/\\U.+?\s{1}/gi, '');
  ipt = cnt.server + ':' + cnt.port;
  pwd = 'password=' + cnt.password;
  mtd = 'method=' + cnt.cipher;
  udp = cnt.udp ? 'udp-relay=true' : 'udp-relay=false';
  tfo = cnt.tfo ? 'fast-open=true' : 'fast-open=false';
  prot = 'ssr-protocol=' + cnt.protocol;
  ohost = '';
  ppara = '';
  if (cnt['protocolparam']) {
    cnt['protocol-param'] = cnt['protocolparam'];
  }
  if (typeof cnt['protocol-param'] == 'string') {
    ppara = 'ssr-protocol-param=' + cnt['protocol-param'];
  } else if (typeof cnt['protocol-param'] == 'object') {
    ppara =
      'ssr-protocol-param=' +
      JSON.stringify(cnt['protocol-param']).replace(/{|}|\s|"/g, '');
  }
  obfs = 'obfs=' + cnt.obfs;
  if (cnt['obfs-param']) {
    ohost = 'obfs-host=' + cnt['obfs-param'];
  } else if (cnt['obfsparam']) {
    ohost = 'obfs-host=' + cnt['obfsparam'];
  }
  node =
    'shadowsocks=' +
    [ipt, pwd, mtd, udp, tfo, prot, ppara, obfs, ohost, tag]
      .filter(Boolean)
      .join(', ');
  return node;
}
function CV2QX(cnt) {
  tag = 'tag=' + cnt.name.replace(/\\U.+?\s{1}/gi, ' ');
  ipt = cnt.server + ':' + cnt.port;
  pwd = 'password=' + cnt.uuid;
  mtd = 'method=' + 'aes-128-gcm';
  udp = cnt.udp ? 'udp-relay=false' : 'udp-relay=false';
  tfo = cnt.tfo ? 'fast-open=true' : 'fast-open=false';
  obfs = '';
  if (cnt.network == 'ws' && cnt.tls) {
    obfs = 'obfs=wss';
  } else if (cnt.network == 'ws') {
    obfs = 'obfs=ws';
  } else if (cnt.network == 'http') {
    obfs = 'obfs=http';
  } else if (cnt.tls) {
    obfs = 'obfs=over-tls';
  }
  const phost = getValue(() => cnt['ws-opts']['headers']['Host']);
  ohost = cnt['ws-headers'] ? 'obfs-host=' + cnt['ws-headers']['Host'] : '';
  ohost = phost ? 'obfs-host=' + phost : ohost;
  ohost = cnt['servername'] ? 'obfs-host=' + cnt['servername'] : ohost;
  ouri = cnt['ws-path'] ? 'obfs-uri=' + cnt['ws-path'] : '';
  ouri = cnt['ws-opts'] ? 'obfs-uri=' + cnt['ws-opts']['path'] : ouri;
  cert = cnt['skip-cert-verify'] && cnt.tls ? 'tls-verification=false' : '';
  caead = cnt['alterId'] && cnt['alterId'] != 0 ? 'aead=false' : '';
  if (Pcert0 == 1 && cnt.tls) {
    cert = 'tls-verification=true';
  } else if (Pcert0 != 1 && cnt.tls) {
    cert = 'tls-verification=false';
  }
  node =
    'vmess=' +
    [ipt, pwd, mtd, udp, tfo, obfs, ohost, ouri, cert, caead, tag]
      .filter(Boolean)
      .join(', ');
  return node;
}
function CT2QX(cnt) {
  tag = 'tag=' + cnt.name.replace(/\\U.+?\s{1}/gi, ' ');
  ipt = cnt.server + ':' + cnt.port;
  pwd = 'password=' + cnt.password;
  otls = 'over-tls=true';
  opath = '';
  ohost = '';
  cert = cnt['skip-cert-verify']
    ? 'tls-verification=false'
    : 'tls-verification=true';
  cert = Pcert0 == 1 ? 'tls-verification=true' : 'tls-verification=false';
  tls13 = PTls13 == 1 ? 'tls13=true' : 'tls13=false';
  udp = cnt.udp ? 'udp-relay=false' : 'udp-relay=false';
  tfo = cnt.tfo ? 'fast-open=true' : 'fast-open=false';
  if (cnt.network == 'ws') {
    otls = 'obfs=wss';
    if (cnt['ws-opts']) {
      opath = cnt['ws-opts']['path']
        ? 'obfs-uri=' + cnt['ws-opts']['path']
        : '';
      ohost = cnt['ws-opts']['headers']
        ? 'obfs-host=' + cnt['ws-opts']['headers']['Host']
        : '';
    }
  }
  node =
    'trojan=' +
    [ipt, pwd, otls, opath, ohost, cert, tls13, udp, tfo, tag]
      .filter(Boolean)
      .join(', ');
  return node;
}
function CH2QX(cnt) {
  tag = 'tag=' + cnt.name.replace(/\\U.+?\s{1}/gi, ' ');
  ipt = cnt.server + ':' + cnt.port;
  uname = cnt.username ? 'username=' + cnt.username : '';
  pwd =
    cnt.password && typeof cnt.password == 'string'
      ? 'password=' + cnt.password
      : '';
  tls = cnt.tls ? 'over-tls=true' : '';
  cert = cnt['skip-cert-verify'] && cnt.tls ? 'tls-verification=false' : '';
  if (Pcert0 == 1 && cnt.tls) {
    cert = 'tls-verification=true';
  } else if (Pcert0 != 1 && cnt.tls) {
    cert = 'tls-verification=false';
  }
  node = 'http=' + [ipt, uname, pwd, tls, cert, tag].filter(Boolean).join(', ');
  return node;
}
function CS52QX(cnt) {
  tag = 'tag=' + cnt.name.replace(/\\U.+?\s{1}/gi, ' ');
  ipt = cnt.server + ':' + cnt.port;
  uname = cnt.username ? 'username=' + cnt.username : '';
  pwd =
    cnt.password && typeof cnt.password == 'string'
      ? 'password=' + cnt.password
      : '';
  tls = cnt.tls ? 'over-tls=true' : '';
  cert = cnt['skip-cert-verify'] && cnt.tls ? 'tls-verification=false' : '';
  if (Pcert0 == 1 && cnt.tls) {
    cert = 'tls-verification=true';
  } else if (Pcert0 != 1 && cnt.tls) {
    cert = 'tls-verification=false';
  }
  node =
    'socks5=' + [ipt, uname, pwd, tls, cert, tag].filter(Boolean).join(', ');
  return node;
}
function XUDP(cnt, pudp) {
  var udp =
    pudp == 1 && /^(shadowsocks|trojan|vmess)/.test(cnt.trim())
      ? 'udp-relay=true, '
      : 'udp-relay=false, ';
  if (cnt.indexOf('udp-relay') != -1) {
    var cnt0 = cnt.replace(RegExp('udp-relay.*?,', 'gmi'), udp);
  } else {
    var cnt0 = cnt.replace(new RegExp('tag.*?=', 'gmi'), udp + 'tag=');
  }
  return cnt0;
}
function XTFO(cnt, ptfo) {
  var tfo = ptfo == 1 ? 'fast-open=true, ' : 'fast-open=false, ';
  if (cnt.indexOf('fast-open') != -1) {
    var cnt0 = cnt.replace(RegExp('fast-open.*?,', 'gmi'), tfo);
  } else {
    var cnt0 = cnt.replace(RegExp('tag.*?=', 'gmi'), tfo + 'tag=');
  }
  return cnt0;
}
function UOT(cnt) {
  cnts = cnt.replace(/\s*/g, '');
  if (/^shadowsocks=/.test(cnts)) {
    cnt =
      cnts.indexOf('udp-over-tcp') != -1
        ? cnt.replace(/udp-over-tcp\s*\=\s*false/g, 'udp-over-tcp=true')
        : cnt + ', udp-over-tcp=true';
  }
  return cnt;
}
function Base64Code() {
  var b64chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var b64tab = (function (bin) {
    var t = {};
    for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
    return t;
  })(b64chars);
  var fromCharCode = String.fromCharCode;
  var cb_utob = function (c) {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 0x80
        ? c
        : cc < 0x800
        ? fromCharCode(0xc0 | (cc >>> 6)) + fromCharCode(0x80 | (cc & 0x3f))
        : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
          fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
          fromCharCode(0x80 | (cc & 0x3f));
    } else {
      var cc =
        0x10000 +
        (c.charCodeAt(0) - 0xd800) * 0x400 +
        (c.charCodeAt(1) - 0xdc00);
      return (
        fromCharCode(0xf0 | ((cc >>> 18) & 0x07)) +
        fromCharCode(0x80 | ((cc >>> 12) & 0x3f)) +
        fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
        fromCharCode(0x80 | (cc & 0x3f))
      );
    }
  };
  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  var utob = function (u) {
    return u.replace(re_utob, cb_utob);
  };
  var cb_encode = function (ccc) {
    var padlen = [0, 2, 1][ccc.length % 3],
      ord =
        (ccc.charCodeAt(0) << 16) |
        ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) |
        (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
      chars = [
        b64chars.charAt(ord >>> 18),
        b64chars.charAt((ord >>> 12) & 63),
        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
      ];
    return chars.join('');
  };
  var btoa = function (b) {
    return b.replace(/[\s\S]{1,3}/g, cb_encode);
  };
  this.encode = function (u) {
    var isUint8Array =
      Object.prototype.toString.call(u) === '[object Uint8Array]';
    return isUint8Array ? u.toString('base64') : btoa(utob(String(u)));
  };
  var re_btou =
    /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
  var cb_btou = function (cccc) {
    switch (cccc.length) {
      case 4:
        var cp =
            ((0x07 & cccc.charCodeAt(0)) << 18) |
            ((0x3f & cccc.charCodeAt(1)) << 12) |
            ((0x3f & cccc.charCodeAt(2)) << 6) |
            (0x3f & cccc.charCodeAt(3)),
          offset = cp - 0x10000;
        return (
          fromCharCode((offset >>> 10) + 0xd800) +
          fromCharCode((offset & 0x3ff) + 0xdc00)
        );
      case 3:
        return fromCharCode(
          ((0x0f & cccc.charCodeAt(0)) << 12) |
            ((0x3f & cccc.charCodeAt(1)) << 6) |
            (0x3f & cccc.charCodeAt(2))
        );
      default:
        return fromCharCode(
          ((0x1f & cccc.charCodeAt(0)) << 6) | (0x3f & cccc.charCodeAt(1))
        );
    }
  };
  var btou = function (b) {
    return b.replace(re_btou, cb_btou);
  };
  var cb_decode = function (cccc) {
    var len = cccc.length,
      padlen = len % 4,
      n =
        (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) |
        (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) |
        (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) |
        (len > 3 ? b64tab[cccc.charAt(3)] : 0),
      chars = [
        fromCharCode(n >>> 16),
        fromCharCode((n >>> 8) & 0xff),
        fromCharCode(n & 0xff)
      ];
    chars.length -= [0, 0, 2, 1][padlen];
    return chars.join('');
  };
  var _atob = function (a) {
    return a.replace(/\S{1,4}/g, cb_decode);
  };
  var _decode = function (u) {
    return btou(_atob(u));
  };
  this.decode = function (a) {
    return _decode(
      String(a)
        .replace(/[-_]/g, function (m0) {
          return m0 == '-' ? '+' : '/';
        })
        .replace(/[^A-Za-z0-9\+\/]/g, '')
    )
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<');
  };
}
function YAML() {
  var errors = [],
    reference_blocks = [],
    processing_time = 0,
    regex = {
      array: new RegExp('\\[\\s*(.*)\\s*\\]'),
      comment: new RegExp(
        '([^\\\'\\"#]+([\\\'\\"][^\\\'\\"]*[\\\'\\"])*)*(#.*)?'
      ),
      dashesString: new RegExp('^\\s*\\"([^\\"]*)\\"\\s*$'),
      float: new RegExp('^[+-]?[0-9]+\\.[0-9]+(e[+-]?[0-9]+(\\.[0-9]+)?)?$'),
      integer: new RegExp('^[+-]?[0-9]+$'),
      invalidLine: new RegExp('^\\-\\-\\-|^\\.\\.\\.|^\\s*#.*|^\\s*$'),
      item: new RegExp('^-\\s+'),
      key_value: new RegExp('([a-z0-9_-][ a-z0-9_-]*):( .+)', 'i'),
      key: new RegExp('([a-z0-9_-][ a-z0-9_-]+):( .+)?', 'i'),
      map: new RegExp('\\{\\s*(.*)\\s*\\}'),
      quotesString: new RegExp("^\\s*\\'([^\\']*)\\'\\s*$"),
      regLevel: new RegExp('^([\\s\\-]+)'),
      single_key_value: new RegExp('^([a-z0-9_-][ a-z0-9_-]*):( .+?)$', 'i'),
      trim: new RegExp('^\\s+|\\s+$')
    };
  function Block(lvl) {
    return {
      children: [],
      length: 0,
      level: lvl,
      lines: [],
      parent: null,
      addChild: function (obj) {
        this.children.push(obj);
        obj.parent = this;
        ++this.length;
      }
    };
  }
  function parser(str) {
    var blocks = [];
    var curLevel = 0;
    var currentBlock = new Block(0);
    var invalidLine = regex['invalidLine'];
    var level = 0;
    var levels = [];
    var line = '';
    var lines = str.split('\n');
    var m;
    var regLevel = regex['regLevel'];
    var result = new Block(-1);
    result.addChild(currentBlock);
    blocks.push(currentBlock);
    levels.push(level);
    for (var i = 0, len = lines.length; i < len; ++i) {
      line = lines[i];
      if (line.match(invalidLine)) {
        continue;
      }
      if ((m = regLevel.exec(line))) {
        level = m[1].length;
      } else level = 0;
      if (level > curLevel) {
        var oldBlock = currentBlock;
        currentBlock = new Block(level);
        oldBlock.addChild(currentBlock);
        blocks.push(currentBlock);
        levels.push(level);
      } else if (level < curLevel) {
        var added = false;
        var k = levels.length - 1;
        for (; k >= 0; --k) {
          if (levels[k] == level) {
            currentBlock = new Block(level);
            blocks.push(currentBlock);
            levels.push(level);
            if (blocks[k].parent != null)
              blocks[k].parent.addChild(currentBlock);
            added = true;
            break;
          }
        }
        if (!added) {
          errors.push('Error: Invalid indentation at line ' + i + ': ' + line);
          return;
        }
      }
      currentBlock.lines.push(line.replace(regex['trim'], ''));
      curLevel = level;
    }
    return result;
  }
  function processValue(val) {
    val = val.replace(regex['trim'], '');
    var m = null;
    if (val == 'true') {
      return true;
    } else if (val == 'false') {
      return false;
    } else if (val == '.NaN') {
      return Number.NaN;
    } else if (val == 'null') {
      return null;
    } else if (val == '.inf') {
      return Number.POSITIVE_INFINITY;
    } else if (val == '-.inf') {
      return Number.NEGATIVE_INFINITY;
    } else if ((m = val.match(regex['dashesString']))) {
      return m[1];
    } else if ((m = val.match(regex['quotesString']))) {
      return m[1];
    } else if ((m = val.match(regex['float']))) {
      return parseFloat(m[0]);
    } else if ((m = val.match(regex['integer']))) {
      return parseInt(m[0]);
    } else if (!isNaN((m = Date.parse(val)))) {
      return new Date(m);
    } else if ((m = val.match(regex['single_key_value']))) {
      var res = {};
      res[m[1]] = processValue(m[2]);
      return res;
    } else if ((m = val.match(regex['array']))) {
      var c = ' ';
      var content = '';
      var count = 0;
      var res = [];
      var str = false;
      for (var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
        c = m[1][j];
        if (c == "'" || c == '"') {
          if (str === false) {
            str = c;
            content += c;
            continue;
          } else if ((c == "'" && str == "'") || (c == '"' && str == '"')) {
            str = false;
            content += c;
            continue;
          }
        } else if (str === false && (c == '[' || c == '{')) {
          ++count;
        } else if (str === false && (c == ']' || c == '}')) {
          --count;
        } else if (str === false && count == 0 && c == ',') {
          res.push(processValue(content));
          content = '';
          continue;
        }
        content += c;
      }
      if (content.length > 0) res.push(processValue(content));
      return res;
    } else if ((m = val.match(regex['map']))) {
      var c = ' ';
      var content = '';
      var count = 0;
      var res = [];
      var str = false;
      for (var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
        c = m[1][j];
        if (c == "'" || c == '"') {
          if (str === false) {
            str = c;
            content += c;
            continue;
          } else if ((c == "'" && str == "'") || (c == '"' && str == '"')) {
            str = false;
            content += c;
            continue;
          }
        } else if (str === false && (c == '[' || c == '{')) {
          ++count;
        } else if (str === false && (c == ']' || c == '}')) {
          --count;
        } else if (str === false && count == 0 && c == ',') {
          res.push(content);
          content = '';
          continue;
        }
        content += c;
      }
      if (content.length > 0) res.push(content);
      var newRes = {};
      for (var j = 0, lenJ = res.length; j < lenJ; ++j) {
        if ((m = res[j].match(regex['key_value']))) {
          newRes[m[1]] = processValue(m[2]);
        }
      }
      return newRes;
    } else return val;
  }
  function processFoldedBlock(block) {
    var lines = block.lines;
    var children = block.children;
    var str = lines.join(' ');
    var chunks = [str];
    for (var i = 0, len = children.length; i < len; ++i) {
      chunks.push(processFoldedBlock(children[i]));
    }
    return chunks.join('\n');
  }
  function processLiteralBlock(block) {
    var lines = block.lines;
    var str = lines.join('\n');
    var children = block.children;
    for (var i = 0, len = children.length; i < len; ++i) {
      str += processLiteralBlock(children[i]);
    }
    return str;
  }
  function processBlock(blocks) {
    var children = null;
    var currentObj = null;
    var isMap = true;
    var level = -1;
    var lines = null;
    var m = null;
    var processedBlocks = [];
    var res = {};
    for (var j = 0, lenJ = blocks.length; j < lenJ; ++j) {
      if (level != -1 && level != blocks[j].level) continue;
      processedBlocks.push(j);
      level = blocks[j].level;
      lines = blocks[j].lines;
      children = blocks[j].children;
      currentObj = null;
      for (var i = 0, len = lines.length; i < len; ++i) {
        var line = lines[i];
        if ((m = line.match(regex['key']))) {
          var key = m[1];
          if (key[0] == '-') {
            key = key.replace(regex['item'], '');
            if (isMap) {
              isMap = false;
              if (typeof res.length === 'undefined') {
                res = [];
              }
            }
            if (currentObj != null) res.push(currentObj);
            currentObj = {};
            isMap = true;
          }
          if (typeof m[2] != 'undefined') {
            var value = m[2].replace(regex['trim'], '');
            if (value[0] == '&') {
              var nb = processBlock(children);
              if (currentObj != null) currentObj[key] = nb;
              else res[key] = nb;
              reference_blocks[value.substr(1)] = nb;
            } else if (value[0] == '|') {
              if (currentObj != null)
                currentObj[key] = processLiteralBlock(children.shift());
              else res[key] = processLiteralBlock(children.shift());
            } else if (value[0] == '*') {
              var v = value.substr(1);
              var no = {};
              if (typeof reference_blocks[v] == 'undefined') {
                errors.push("Reference '" + v + "' not found!");
              } else {
                for (var k in reference_blocks[v]) {
                  no[k] = reference_blocks[v][k];
                }
                if (currentObj != null) currentObj[key] = no;
                else res[key] = no;
              }
            } else if (value[0] == '>') {
              if (currentObj != null)
                currentObj[key] = processFoldedBlock(children.shift());
              else res[key] = processFoldedBlock(children.shift());
            } else {
              if (currentObj != null) currentObj[key] = processValue(value);
              else res[key] = processValue(value);
            }
          } else {
            if (currentObj != null) currentObj[key] = processBlock(children);
            else res[key] = processBlock(children);
          }
        } else if (line.match(/^-\s*$/)) {
          if (isMap) {
            isMap = false;
            if (typeof res.length === 'undefined') {
              res = [];
            }
          }
          if (currentObj != null) res.push(currentObj);
          currentObj = {};
          isMap = true;
          continue;
        } else if ((m = line.match(/^-\s*(.*)/))) {
          if (currentObj != null) currentObj.push(processValue(m[1]));
          else {
            if (isMap) {
              isMap = false;
              if (typeof res.length === 'undefined') {
                res = [];
              }
            }
            res.push(processValue(m[1]));
          }
          continue;
        }
      }
      if (currentObj != null) {
        if (isMap) {
          isMap = false;
          if (typeof res.length === 'undefined') {
            res = [];
          }
        }
        res.push(currentObj);
      }
    }
    for (var j = processedBlocks.length - 1; j >= 0; --j) {
      blocks.splice.call(blocks, processedBlocks[j], 1);
    }
    return res;
  }
  function semanticAnalysis(blocks) {
    var res = processBlock(blocks.children);
    return res;
  }
  function preProcess(src) {
    var m;
    var r = regex['comment'];
    var lines = src.split('\n');
    for (var i in lines) {
      if ((m = lines[i].match(r))) {
        if (typeof m[3] !== 'undefined') {
          lines[i] = m[0].substr(0, m[0].length - m[3].length);
        }
      }
    }
    return lines.join('\n');
  }
  this.parse = function eval0(str) {
    errors = [];
    reference_blocks = [];
    processing_time = new Date().getTime();
    var pre = preProcess(str);
    var doc = parser(pre);
    var res = semanticAnalysis(doc);
    processing_time = new Date().getTime() - processing_time;
    return res;
  };
}
function Tools() {
  const filter = (src, ...regex) => {
    const initial = [...Array(src.length).keys()].map(() => false);
    return regex.reduce(
      (a, expr) =>
        OR(
          a,
          src.map(item => expr.test(item))
        ),
      initial
    );
  };
  const rename = {
    replace: (src, old, now) => {
      return src.map(item => item.replace(old, now));
    },
    delete: (src, ...args) => {
      return src.map(item =>
        args.reduce((now, expr) => now.replace(expr, ''), item)
      );
    },
    trim: src => {
      return src.map(item => item.trim().replace(/[^\S\r\n]{2,}/g, ' '));
    }
  };
  const getNodeInfo = servers => {
    const nodes = {
      names: servers.map(s => s.split('tag=')[1]),
      types: servers.map(s => {
        const type = s.match(/^(vmess|trojan|shadowsocks|http)=/);
        return type ? type[1] : 'unknown';
      })
    };
    return nodes;
  };
  return {
    filter,
    getNodeInfo,
    rename
  };
}
function AND(...args) {
  return args.reduce((a, b) => a.map((c, i) => b[i] && c));
}
function OR(...args) {
  return args.reduce((a, b) => a.map((c, i) => b[i] || c));
}
function NOT(array) {
  return array.map(c => !c);
}
