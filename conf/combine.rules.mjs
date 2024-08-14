import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
// 未完工！！！
const RESOURCESJSON = {
  REJECTNONIPS: {
    FILENAME: 'vikingama.reject.non.ips.ini',
    SRC: [
      'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Hijacking.list',
      'https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/QuantumultX/rule/Adblock4limbo.list',
      'https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-surge2.txt',
      'https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/filter/fenliu.list',
      'https://raw.githubusercontent.com/Cats-Team/AdRules/main/adrules_domainset.txt'
    ]
  },
  REJECTIPS: {
    FILENAME: 'vikingama.reject.ips.ini',
    SRC: [
      'https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/stopforumspam_7d.ipset',
      'https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/firehol_level1.netset',
      'https://blocklist.greensnow.co/greensnow.txt',
      'https://cinsscore.com/list/ci-badguys.txt',
      'https://lists.blocklist.de/lists/all.txt'
    ]
  },
  PROXYNONIPS: {
    FILENAME: 'vikingama.proxy.non.ips.ini',
    SRC: []
  },
  PROXYNONIPS: {
    FILENAME: 'vikingama.proxy.ips.ini',
    SRC: []
  },
  DIRECTNONIPS: {
    FILENAME: 'vikingama.direct.non.ips.ini',
    SRC: [
      'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/BiliBili/BiliBili.list',
      'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/WeChat/WeChat.list',
      'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/CMB/CMB.list',
      'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Unbreak.list',
      'https://raw.githubusercontent.com/missuo/ASN-China/main/ASN.China.list'
    ]
  },
  DIRECTIPS: {
    FILENAME: 'vikingama.direct.ips.ini',
    SRC: []
  }
};
const resourses = [
  'https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-surge2.txt',
  'https://raw.githubusercontent.com/fmz200/wool_scripts/main/QuantumultX/filter/fenliu.list',
  'https://raw.githubusercontent.com/Cats-Team/AdRules/main/adrules_domainset.txt'
];
(async () => {
  const resoursesObject = await getResourses(resourses);
  const resoursesPureArr = combineResourses(resoursesObject);
  await writeResourses2File(resoursesPureArr);
})();
async function getResourses(resourses) {
  const temp = Object.create(null);
  try {
    for (const src of resourses) {
      const key = src.split('/').at(-1);
      const res = await fetch(src, {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
          'Content-Type': 'text/plain'
        }
      });
      if (res.ok) {
        const text = await res.text();
        temp[key] = text
          .split('\n')
          .map(text => {
            const textTemp = text.trim();
            if (textTemp.startsWith('+.')) {
              return `HOST-SUFFIX,${textTemp.replace('+.', '')}`;
            } else if (textTemp.startsWith('.')) {
              return `HOST-SUFFIX,${textTemp.substring(1)}`;
            } else if (textTemp.toUpperCase().startsWith('HOST,')) {
              return `HOST,${(textTemp.split(',')[1] || '').trim()}`;
            } else if (textTemp.toUpperCase().startsWith('HOST-SUFFIX,')) {
              const keyWord = (textTemp.split(',')[1] || '').trim();
              if (keyWord === 'byteimg.com') {
                return '';
              }
              return `HOST-SUFFIX,${keyWord}`;
            } else if (textTemp.toUpperCase().startsWith('HOST-KEYWORD,')) {
              const keyWord = (textTemp.split(',')[1] || '').trim();
              if (keyWord === 'volc') {
                return '';
              }
              return `HOST-KEYWORD,${keyWord}`;
            } else if (textTemp.toUpperCase().startsWith('IP-ASN,')) {
              return `IP-ASN,${(textTemp.split(',')[1] || '').trim()}`;
            } else if (textTemp.toUpperCase().startsWith('IP-CIDR,')) {
              return `IP-CIDR,${(textTemp.split(',')[1] || '').trim()}`;
            } else if (textTemp.toUpperCase().startsWith('IP-CIDR6,')) {
              return `IP6-CIDR,${(textTemp.split(',')[1] || '').trim()}`;
            } else if (textTemp.toUpperCase().startsWith('IP6-CIDR,')) {
              return `IP6-CIDR,${(textTemp.split(',')[1] || '').trim()}`;
            } else {
              return '';
            }
          })
          .filter(text => text.length !== 0);
      }
    }
  } catch (error) {
    console.error(error);
  }
  return temp;
}
function combineResourses(resoursesObject) {
  const temp = {};
  Object.keys(resoursesObject).forEach(key => {
    console.log(
      key.padEnd(25),
      resoursesObject[key].length.toString().padStart(8)
    );
    resoursesObject[key].forEach(rule => {
      temp[rule] = rule;
    });
  });
  const result = Object.keys(temp).sort();
  console.log(
    'vikingama.combine.ini'.padEnd(25),
    result.length.toString().padStart(8)
  );
  return result;
}
async function writeResourses2File(resoursesPureArr) {
  try {
    const scriptPath = fileURLToPath(import.meta.url);
    const temp = {
      value:
        '# https://raw.githubusercontent.com/Vikingama/plugins/beta/filter/vikingama.combine.ini\n'
    };
    resoursesPureArr.forEach(item => {
      temp.value = temp.value + item + '\n';
    });
    await writeFile(
      resolve(dirname(scriptPath), '../filter/vikingama.combine.ini'),
      temp.value
    );
  } catch (error) {
    console.error(error);
  }
}
