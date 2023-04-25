const url = $request.url;
const method = $request.method;
if (!$response.body) {
  $done({});
}
let body = JSON.parse($response.body);
const getMethod = 'GET';
const postMethod = 'POST';
const noticeTitle = '广告联盟';
if (
  (url.includes('api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk') ||
    url.includes('is.snssdk.com/api/ad/union/sdk')) &&
  method === postMethod
) {
  if (!body.message) {
    if (!('status_code' in body)) {
      $notification.post(noticeTitle, '穿山甲', 'message/status_code 字段错误');
    }
  } else {
    body = {
      request_id: 'F5617E54-3FF4-4052-9B09-4227D09B5105',
      status_code: 20001,
      reason: 112,
      desc: '该代码位请求量过大且消耗过低，因此填充率控制在 10% 以内，该策略每日生效，如果当天该代码位的消耗上涨或请求量小于 5000，则次日不会命中该策略'
    };
  }
} else if (url.includes('mi.gdt.qq.com') && method === getMethod) {
  if ('ret' in body) {
    if (body.ret === 0) {
      body.ret = 102006;
    }
  } else {
    $notification.post(noticeTitle, '优量汇', '无 ret');
  }
} else if (url.includes('open.e.kuaishou.com') && method === postMethod) {
  if (body.result === 1) {
    body.result = 40003;
  }
} else {
  $notification.post(
    noticeTitle,
    '路径/请求方法匹配错误：',
    method + ',' + url
  );
}
body = JSON.stringify(body);
$done({
  body
});
