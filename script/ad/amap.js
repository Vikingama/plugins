const version = 'V1.0.27';
var obj = JSON.parse($response.body);
if (-1 != $request.url.indexOf('valueadded/alimama/splash_screen')) {
  if (obj.data && obj.data.ad)
    for (let a of obj.data.ad)
      (a.set.setting.display_time = 0),
        (a.creative[0].start_time = 2240150400),
        (a.creative[0].end_time = 2240150400);
  $done({ body: JSON.stringify(obj) });
} else if (-1 != $request.url.indexOf('faas/amap-navigation/main-page'))
  obj.data?.cardList &&
    (obj.data.cardList = Object.values(obj.data.cardList).filter(
      a => 'LoginCard' == a.dataType
    )),
    obj.data?.pull3?.msgs && (obj.data.pull3.msgs = []),
    obj.data?.mapBizList && (obj.data.mapBizList = []),
    $done({ body: JSON.stringify(obj) });
else if (-1 != $request.url.indexOf('profile/index/node'))
  delete obj.data.tipData,
    obj.data?.cardList &&
      (obj.data.cardList = Object.values(obj.data.cardList).filter(
        a => 'MyOrderCard' == a.dataType || 'GdRecommendCard' == a.dataType
      )),
    $done({ body: JSON.stringify(obj) });
else if (-1 != $request.url.indexOf('new_hotword'))
  obj.data?.header_hotword && (obj.data.header_hotword = []),
    $done({ body: JSON.stringify(obj) });
else if (-1 != $request.url.indexOf('ws/promotion-web/resource')) {
  let e = ['icon', 'banner', 'tips', 'popup', 'bubble'];
  for (let o of e) obj.data?.[o] && (obj.data[o] = []);
  $done({ body: JSON.stringify(obj) });
} else if (-1 != $request.url.indexOf('ws/msgbox/pull'))
  obj.msgs && (obj.msgs = []),
    obj.pull3?.msgs && (obj.pull3.msgs = []),
    $done({ body: JSON.stringify(obj) });
else if (-1 != $request.url.indexOf('ws/message/notice/list'))
  obj.data?.noticeList && (obj.data.noticeList = []),
    $done({ body: JSON.stringify(obj) });
else if (-1 != $request.url.indexOf('ws/shield/frogserver/aocs')) {
  for (let t of [
    'gd_notch_logo',
    'home_business_position_config',
    'his_input_tip',
    'operation_layer'
  ])
    obj.data?.[t] && (obj.data[t] = { status: 1, version: '', value: '' });
  $done({ body: JSON.stringify(obj) });
} else if (-1 != $request.url.indexOf('search/nearbyrec_smart')) {
  let i = ['coupon', 'scene', 'activity', 'commodity_rec'];
  obj.data &&
    (i.forEach(a => {
      delete obj.data[a];
    }),
    obj.data.modules &&
      (obj.data.modules = obj.data.modules.filter(a => !i.includes(a)))),
    $done({ body: JSON.stringify(obj) });
} else $done({});
