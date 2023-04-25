let url = $request.url;
let method = $request.method;
if (!$response.body) {
  $done({});
}
let body = JSON.parse($response.body);
const noticeTitle = '起点 App 脚本错误';
const getMethod = 'GET';
const postMethod = 'POST';
if (!body.Data) {
  $notification.post(noticeTitle, '起点', 'Data 为空');
} else {
  if (url.includes('v4/client/getsplashscreen') && method === getMethod) {
    if (!body.Data.List) {
      $notification.post(noticeTitle, '起点', 'List 字段空');
    } else {
      body.Data.List = null;
    }
    if ('EnableGDT' in body.Data) {
      if (body.Data.EnableGDT === 1) {
        body.Data.EnableGDT = 0;
      }
    } else {
      $notification.post(noticeTitle, '起点', 'EnableGDT 字段为空');
    }
  } else if (url.includes('v2/deeplink/geturl') && method === getMethod) {
    if (body.Data.ActionUrl === 'QDReader://Bookstore') {
      body.Data = null;
    }
  } else if (
    url.includes('v1/adv/getadvlistbatch?positions=iOS_tab') &&
    method === getMethod
  ) {
    if (!body.Data.iOS_tab) {
      $notification.post(noticeTitle, '起点-iOS_tab', 'iOS_tab 字段为空');
    } else {
      if (body.Data.iOS_tab.length === 0) {
      } else {
        body.Data.iOS_tab = [];
      }
    }
  } else if (
    url.includes('v1/dailyrecommend/getdailyrecommend') &&
    method === getMethod
  ) {
    if (body.Data.length) {
      body.Data = [];
    }
  } else if (url.includes('v1/bookshelf/getHoverAdv') && method === getMethod) {
    if (body.Data.ItemList?.length) {
      body.Data.ItemList = [];
    }
  } else if (url.includes('v1/client/getconf') && method === postMethod) {
    if (!body.Data.ActivityPopup?.Data) {
      $notification.post(
        noticeTitle,
        '起点-getconf',
        'ActivityPopup/Data 字段为空'
      );
    } else {
      body.Data.ActivityPopup = null;
    }
    if (body.Data.WolfEye === 1) {
      body.Data.WolfEye = 0;
    }
    if (body.Data.ActivityIcon?.Type !== 0) {
      $notification.post(
        noticeTitle,
        '起点-getconf',
        'ActivityIcon/Type 字段错误'
      );
    } else {
      if (body.Data.ActivityIcon.EndTime === 0) {
      } else {
        body.Data.ActivityIcon.StartTime = 0;
        body.Data.ActivityIcon.EndTime = 0;
        delete body.Data.ActivityIcon.Actionurl;
        delete body.Data.ActivityIcon.Icon;
      }
    }
    if (body.Data.EnableSearchUser === '1') {
    } else {
      body.Data.EnableSearchUser = '1';
    }
  } else {
    $notification.post(
      noticeTitle,
      '起点 App 路径/请求方法匹配错误：',
      method + ',' + url
    );
  }
}
body = JSON.stringify(body);
$done({
  body
});
