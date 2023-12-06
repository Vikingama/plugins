const version = 'V1.0.31';
let body = $response.body;
if (body) {
  switch (!0) {
    case /discovery-category\/customCategories/.test($request.url):
      try {
        let e = JSON.parse(body);
        e.customCategoryList &&
          (e.customCategoryList = e.customCategoryList.filter(
            e =>
              ('recommend' == e.itemType ||
                'template_category' == e.itemType ||
                'single_category' == e.itemType) &&
              1005 !== e.categoryId
          )),
          e.defaultTabList &&
            (e.defaultTabList = e.defaultTabList.filter(
              e =>
                ('recommend' == e.itemType ||
                  'template_category' == e.itemType ||
                  'single_category' == e.itemType) &&
                1005 !== e.categoryId
            )),
          (body = JSON.stringify(e));
      } catch (t) {}
      break;
    case /discovery-category\/v\d\/category/.test($request.url):
      try {
        let a = JSON.parse(body);
        a.focusImages &&
          a.focusImages.data &&
          (a.focusImages.data = a.focusImages.data.filter(
            e => -1 != e.realLink.indexOf('open') && !e.isAd
          )),
          (body = JSON.stringify(a));
      } catch (s) {}
      break;
    case /focus-mobile\/focusPic/.test($request.url):
      try {
        let r = JSON.parse(body);
        r.header &&
          r.header.length <= 1 &&
          (r.header[0].item.list[0].data = r.header[0].item.list[0].data.filter(
            e => -1 != e.realLink.indexOf('open') && !e.isAd
          )),
          (body = JSON.stringify(r));
      } catch (o) {}
      break;
    case /discovery-feed\/v\d\/mix/.test($request.url):
      try {
        let i = JSON.parse(body);
        (i.body = i.body.filter(
          e => e.item.playsCounts > 1e6 && !e.item.adInfo
        )),
          (body = JSON.stringify(i));
      } catch (d) {}
      break;
    case /mobile-user\/v\d\/homePage/.test($request.url):
      try {
        let c = new Set([210, 213, 215]),
          y = JSON.parse(body);
        if (y.data.serviceModule.entrances) {
          let l = y.data.serviceModule.entrances.filter(e => c.has(e.id));
          y.data.serviceModule.entrances = l;
        }
        body = JSON.stringify(y);
      } catch (g) {}
      break;
    default:
      $done({});
  }
  $done({ body });
} else $done({});
