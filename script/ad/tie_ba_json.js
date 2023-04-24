const url = $request.url;
const method = $request.method;
const postMethod = 'POST';
const notifyTitle = '贴吧脚本错误';
let body = JSON.parse($response.body);
if (url.includes('tiebaads/commonbatch') && method === postMethod) {
  let adCmd = getUrlParamValue(url, 'adcmd');
  if (!adCmd) {
  } else {
    if (body.error_code === 0) {
      if (!body.res.ad?.length) {
      } else {
        body.res.ad = [];
      }
    }
  }
} else if (url.includes('c/f/pb/picpage')) {
  const liveLength = body.recom_live_list?.length;
  if (liveLength) {
    body.recom_live_list = [];
  }
} else if (url.includes('c/s/sync')) {
  if ('floating_icon' in body) {
    if (body.floating_icon) {
      body.floating_icon = null;
    }
  }
  if ('advertisement_config' in body) {
    if (!body.advertisement_config?.advertisement_str) {
    } else {
      body.advertisement_config = null;
    }
  }
  if ('config' in body) {
    if (body.config?.switch) {
      for (const item of body.config.switch) {
        if (
          [
            'platform_csj_init',
            'platform_ks_init',
            'platform_gdt_init'
          ].includes(item.name)
        ) {
          item.type = '0';
        }
      }
    }
  }
  if ('screen_fill_data_result' in body) {
    if (
      body.screen_fill_data_result.screen_fill_advertisement_bear_switch === '1'
    ) {
      body.screen_fill_data_result.screen_fill_advertisement_bear_switch = '0';
    }
    if (
      body.screen_fill_data_result.screen_fill_advertisement_plj_cpc_switch ===
      '1'
    ) {
      body.screen_fill_data_result.screen_fill_advertisement_plj_cpc_switch =
        '0';
    }
    if (
      body.screen_fill_data_result.screen_fill_advertisement_plj_switch === '1'
    ) {
      body.screen_fill_data_result.screen_fill_advertisement_plj_switch = '0';
    }
  }
  if ('ad_stlog_switch' in body) {
    if (body.ad_stlog_switch === '1') {
      body.ad_stlog_switch = '0';
    }
  }
  if ('lcs_strategy' in body) {
    if (body.lcs_strategy.conn_conf === '0') {
      body.lcs_strategy.conn_conf = '1';
    }
  }
} else if (url.includes('c/f/frs/page')) {
  if (body.live_fuse_forum?.length) {
    body.live_fuse_forum = [];
  }
  if (body.activityhead?.is_ad) {
    body.activityhead = {};
  }
  body.thread_list = removeLive(body.thread_list);
  removeGoodsInfo(body.forum?.banner_list?.app);
} else if (url.includes('c/f/frs/threadlist')) {
} else if (url.includes('c/f/pb/page')) {
  if (body.recom_ala_info?.live_id) {
    body.recom_ala_info = null;
  }
  if (body.post_list?.length) {
    for (const post of body.post_list) {
      if (post.outer_item) {
        post.outer_item = null;
      }
    }
  }
  removeGoodsInfo(body.banner_list?.app);
  const bannerGoodsInfoLength =
    body.banner_list?.pb_banner_ad?.goods_info?.length;
  if (bannerGoodsInfoLength) {
    body.banner_list.pb_banner_ad.goods_info = [];
  }
} else if (url.includes('c/f/excellent/personalized')) {
  removeGoodsInfo(body.banner_list?.app);
  body.thread_list = removeLive(body.thread_list);
} else if (url.includes('c/f/frs/generalTabList')) {
}

body = JSON.stringify(body);
$done({
  body
});

function getUrlParamValue(url, queryName) {
  return Object.fromEntries(
    url
      .substring(url.indexOf('?') + 1)
      .split('&')
      .map(pair => pair.split('='))
  )[queryName];
}
function removeGoodsInfo(app) {
  if (app?.length) {
    let goodsInfoSize = 0;
    app.forEach(item => {
      if (item.goods_info?.length) {
        goodsInfoSize++;
        item.goods_info = [];
      }
    });
  }
}
function removeLive(threadList) {
  let newThreadList = threadList;
  const beforeLength = threadList?.length;
  if (beforeLength) {
    newThreadList = threadList.filter(item => {
      if (item.ala_info) {
        return false;
      }
      return true;
    });
  }
  return newThreadList;
}
