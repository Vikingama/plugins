const version = 'V1.0.6';
let body = $response.body;
if (body) {
  switch (!0) {
    case /api\/sns\/v\d\/homefeed\/categories\?/.test($request.url):
      try {
        let e = JSON.parse(body);
        (e.data.categories = e.data.categories.filter(
          e => !('homefeed.shop' == e.oid || 'homefeed.live' == e.oid)
        )),
          (body = JSON.stringify(e));
      } catch (t) {}
      break;
    case /api\/sns\/v\d\/search\/hint/.test($request.url):
      try {
        let s = JSON.parse(body);
        s.data?.hint_words &&
          (s.data.hint_words = [
            {
              title: '搜索笔记',
              type: 'firstEnterOther#itemCfRecWord#搜索笔记#1',
              search_word: '搜索笔记'
            }
          ]),
          (body = JSON.stringify(s));
      } catch (a) {}
      break;
    case /api\/sns\/v\d\/search\/hot_list/.test($request.url):
      try {
        let r = JSON.parse(body);
        (r.data = {
          scene: '',
          title: '',
          items: [],
          host: '',
          background_color: {},
          word_request_id: ''
        }),
          (body = JSON.stringify(r));
      } catch (d) {}
      break;
    case /api\/sns\/v\d\/search\/trending/.test($request.url):
      try {
        let i = JSON.parse(body);
        (i.data = { title: '', queries: [], type: '', word_request_id: '' }),
          (body = JSON.stringify(i));
      } catch (o) {}
      break;
    case /api\/sns\/v\d\/system_service\/splash_config/.test($request.url):
      try {
        let c = JSON.parse(body);
        c.data.ads_groups.forEach(e => {
          (e.start_time = '2208963661'),
            (e.end_time = '2209050061'),
            e.ads &&
              e.ads.forEach(e => {
                (e.start_time = '2208963661'), (e.end_time = '2209050061');
              });
        }),
          (body = JSON.stringify(c));
      } catch (l) {}
      break;
    case /api\/sns\/v\d\/homefeed\?/.test($request.url):
      try {
        let y = JSON.parse(body);
        (y.data = y.data.filter(e => !e.is_ads)), (body = JSON.stringify(y));
      } catch (h) {}
      break;
    case /api\/sns\/v\d\/system_service\/config\?/.test($request.url):
      try {
        let n = JSON.parse(body),
          g = ['store', 'splash', 'loading_img', 'app_theme', 'cmt_words'];
        for (let b of g) n.data?.[b] && delete n.data[b];
        body = JSON.stringify(n);
      } catch (f) {}
      break;
    default:
      $done({});
  }
  $done({ body });
} else $done({});
