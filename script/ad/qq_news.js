let url = $request.url;
let method = $request.method;
if (!$response.body) {
  $done({});
}
let body = JSON.parse($response.body);
if (method !== 'POST') {
  $notification.post('腾讯新闻 App 脚本错误', 'method 错误：', method);
}
if (url.includes('r.inews.qq.com/gw/page/event_detail')) {
  removeAdList('event_detail');
} else if (url.includes('r.inews.qq.com/gw/page/channel_feed')) {
  removeAdList('channel_feed');
} else {
  let name = '';
  if (url.includes('news.ssp.qq.com/app')) {
    name = '开屏页';
  } else if (url.includes('r.inews.qq.com/getQQNewsUnreadList')) {
    name = '要闻/财经等';
  } else if (url.includes('r.inews.qq.com/news_feed/hot_module_list')) {
    name = '财经精选 - 更多';
  } else if (url.includes('r.inews.qq.com/gw/event/list')) {
    name = '专题 gw/event/list';
  } else if (url.includes('r.inews.qq.com/getTwentyFourHourNews')) {
    name = '热点精选 getTwentyFourHourNews';
  } else if (url.includes('r.inews.qq.com/getQQNewsListItems')) {
    name = '热点精选 getQQNewsListItems';
  } else if (url.includes('r.inews.qq.com/getTagFeedList')) {
    name = 'getTagFeedList';
  } else {
    $notification.post('腾讯新闻 App 脚本错误', '路径匹配错误：', url);
  }
  if (!body.adList) {
  } else {
    body.adList = null;
  }
}
body = JSON.stringify(body);
$done({
  body
});
function removeAdList(name) {
  if (body.data.widget_list) {
    body.data.widget_list = body.data.widget_list.filter(item => {
      if (item.widget_type === 'ad_list') {
        return false;
      }
      return true;
    });
  } else {
    $notification.post('腾讯新闻 App 脚本错误', name, '无 widget_list 字段');
  }
}
