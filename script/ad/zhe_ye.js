const blackAnswersIdKey = 'zhihu_black_answers';
const blockedUsersKey = 'zhihu_blocked_users';
const currentUserInfoKey = 'zhihu_current_userinfo';
const defaultAnswerBlockedUsers = ['会员推荐', '盐选推荐'];
const keywordBlockKey = 'zhihu_keyword_block';
const keywordMaxCount = 1e3;
const scriptName = '哲也同学';
const userCreditScoreKey = 'zhihu_credit_score';
const zheyeServerKey = 'zheye_server_url';
const $ = MagicJS(scriptName, 'INFO');
function getUserInfo() {
  let defaultUserInfo = { id: 'default', is_vip: false };
  try {
    let userInfo = $.data.read(currentUserInfoKey);
    if (typeof userInfo === 'string') userInfo = JSON.parse(userInfo);
    if (!!userInfo && userInfo.hasOwnProperty('id')) {
      return userInfo;
    } else {
      return defaultUserInfo;
    }
  } catch (err) {
    $.logger.error(`获取用户信息出现异常：${err}`);
    return defaultUserInfo;
  }
}
function modifyAppConfig() {
  let response = null;
  try {
    if (!!$.response.body) {
      let obj = JSON.parse($.response.body);
      obj['config']['homepage_feed_tab']['tab_infos'] = obj['config'][
        'homepage_feed_tab'
      ]['tab_infos'].filter(e => {
        if (e['tab_type'] === 'activity_tab') {
          e['end_time'] = (new Date() - 12e4).toString().slice(0, 10);
          return true;
        } else {
          return false;
        }
      });
      obj['config']['zvideo_max_number'] = 1;
      obj['config']['is_show_followguide_alert'] = false;
      delete obj['config']['hp_channel_tab'];
      if (obj['config']['zombie_conf']) {
        obj['config']['zombie_conf']['zombieEnable'] = false;
      }
      if (obj['config']['gray_mode']) {
        obj['config']['gray_mode']['enable'] = false;
        obj['config']['gray_mode']['start_time'] = '4092566400';
        obj['config']['gray_mode']['end_time'] = '4092566400';
      }
      if (obj['config'].hasOwnProperty('zhcnh_thread_sync')) {
        $.logger.debug(JSON.stringify(obj['config']['zhcnh_thread_sync']));
        obj['config']['zhcnh_thread_sync']['LocalDNSSetHostWhiteList'] = [];
        obj['config']['zhcnh_thread_sync']['isOpenLocalDNS'] = '0';
        obj['config']['zhcnh_thread_sync']['ZHBackUpIP_Switch_Open'] = '0';
        obj['config']['zhcnh_thread_sync']['dns_ip_detector_operation_lock'] =
          '1';
        obj['config']['zhcnh_thread_sync'][
          'ZHHTTPSessionManager_setupZHHTTPHeaderField'
        ] = '1';
      }
      response = { body: JSON.stringify(obj) };
    }
  } catch (err) {
    $.logger.error(`优化软件配置出现异常：${err}`);
  }
  return response;
}
function modifyAppTabConfig() {
  let response = null;
  try {
    if (!!$.response.body) {
      let obj = JSON.parse($.response.body);
      if (obj.more_sections) {
        let sectionsToRemove = $.data
          .read('zheye_remove_feed_tabs', '')
          .split(';');
        obj.selected_sections = obj.selected_sections.filter(
          item => !sectionsToRemove.includes(item['section_name'])
        );
        obj.selected_sections.forEach(item => {
          item['show_type'] = 'adjustable';
        });
      }
      $.logger.debug(JSON.stringify(obj));
      response = { body: JSON.stringify(obj) };
    }
  } catch (err) {
    $.logger.error(`优化软件配置出现异常：${err}`);
  }
  return response;
}
function modifyMCloudConfig() {
  let response = null;
  try {
    if (!!$.response.body) {
      let obj = JSON.parse($.response.body);
      if (obj.data && obj.data['configs']) {
        obj.data['configs'].forEach(element => {
          if (element['configKey'] === 'feed_gray_theme') {
            element['configValue'].start_time = '1669824000';
            element['configValue'].end_time = '1669824001';
            element.status = false;
          }
        });
      }
      const body = JSON.stringify(obj);
      $.logger.debug(body);
      response = { body: body };
    }
  } catch (err) {
    $.logger.error(`优化软件配置出现异常：${err}`);
  }
  return response;
}
function unlockBlockedKeywords() {
  let response = null;
  try {
    const userInfo = getUserInfo();
    if ($.request.method === 'GET') {
      let keywords = $.data.read(keywordBlockKey, null, userInfo.id);
      if (!keywords) {
        keywords = [];
      }
      let headers = {
        'Cache-Control':
          'no-cache, no-store, must-revalidate, private, max-age=0',
        'Content-Type': 'application/json;charset=utf-8',
        'Referrer-Policy': 'no-referrer-when-downgrade',
        'X-Cache-Lookup': 'Cache Miss',
        'x-cdn-provider': 'tencent',
        Connection: 'keep-alive',
        Pragma: 'no-cache',
        Server: 'CLOUD ELB 1.0.0',
        Vary: 'Accept-Encoding'
      };
      let body = JSON.stringify({
        data: keywords,
        is_vip: true,
        kw_max_count: keywordMaxCount,
        kw_max_length: 100,
        kw_min_length: 2,
        success: true
      });
      if ($.env.isQuanX) {
        response = { body: body, headers: headers, status: 'HTTP/1.1 200 OK' };
      } else {
        response = { response: { body: body, headers: headers, status: 200 } };
      }
      $.logger.debug(`获取本地脚本屏蔽关键词：\n${keywords.join('、')}`);
    } else if ($.request.method === 'POST') {
      if (!!$.request.body) {
        let headers = {
          'Cache-Control':
            'no-cache, no-store, must-revalidate, private, max-age=0',
          'Content-Type': 'application/json;charset=utf-8',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'X-Cache-Lookup': 'Cache Miss',
          'x-cdn-provider': 'tencent',
          Connection: 'keep-alive',
          Pragma: 'no-cache',
          Server: 'CLOUD ELB 1.0.0',
          Vary: 'Accept-Encoding'
        };
        let keyword = decodeURIComponent($.request.body).match(
          /keyword=(.*)/
        )[1];
        let keywords = $.data.read(keywordBlockKey, null, userInfo.id);
        if (!keywords) {
          keywords = [];
        }
        let keywordExists = false;
        for (let i = 0; i < keywords.length; i++) {
          if (keyword === keywords[i]) {
            keywordExists = true;
            break;
          }
        }
        if (keywordExists === false) {
          keywords.push(keyword);
          $.data.write(keywordBlockKey, keywords, userInfo.id);
          let body = JSON.stringify({ success: true });
          if ($.env.isQuanX) {
            response = {
              body: body,
              headers: headers,
              status: 'HTTP/1.1 200 OK'
            };
          } else {
            response = {
              response: { body: body, headers: headers, status: 200 }
            };
          }
          $.logger.debug(`添加本地脚本屏蔽关键词“${keyword}”`);
        } else {
          let body = JSON.stringify({
            error: { message: '关键词已存在', code: 100002 }
          });
          if ($.env.isQuanX) {
            response = {
              body: body,
              headers: headers,
              status: 'HTTP/1.1 400 Bad Request'
            };
          } else {
            response = {
              response: { body: body, headers: headers, status: 400 }
            };
          }
        }
      }
    } else if ($.request.method === 'DELETE') {
      let keyword = decodeURIComponent($.request.url).match(/keyword=(.*)/)[1];
      let keywords = $.data.read(keywordBlockKey, null, userInfo.id);
      if (!keywords) {
        keywords = [];
      }
      keywords = keywords.filter(e => {
        return e !== keyword;
      });
      $.data.write(keywordBlockKey, keywords, userInfo.id);
      let headers = {
        'Cache-Control':
          'no-cache, no-store, must-revalidate, private, max-age=0',
        'Content-Type': 'application/json;charset=utf-8',
        'Referrer-Policy': 'no-referrer-when-downgrade',
        'X-Cache-Lookup': 'Cache Miss',
        'x-cdn-provider': 'tencent',
        Connection: 'keep-alive',
        Pragma: 'no-cache',
        Server: 'CLOUD ELB 1.0.0',
        Vary: 'Accept-Encoding'
      };
      let body = JSON.stringify({ success: true });
      if ($.env.isQuanX) {
        response = { body: body, headers: headers, status: 'HTTP/1.1 200 OK' };
      } else {
        response = { response: { body: body, headers: headers, status: 200 } };
      }
      $.logger.debug(`删除本地脚本屏蔽关键词：“${keyword}”`);
    }
  } catch (err) {
    $.logger.debug(`关键词屏蔽操作出现异常：${err}`);
  }
  return response;
}
function processUserInfo() {
  let response = null;
  try {
    let obj = JSON.parse($.response.body);
    $.data.write(blackAnswersIdKey, []);
    $.logger.debug(`用户登录用户信息，接口响应：${$.response.body}`);
    if (
      obj &&
      obj['id'] &&
      obj.hasOwnProperty('vip_info') &&
      obj['vip_info'].hasOwnProperty('is_vip')
    ) {
      const userInfo = {
        id: obj['id'],
        is_vip: obj['vip_info']['is_vip']
          ? obj['vip_info']['is_vip'] !== undefined
          : false
      };
      $.logger.debug(
        `当前用户 id：${obj['id']}，是否为 VIP：${obj['vip_info']['is_vip']}`
      );
      $.data.write(currentUserInfoKey, userInfo);
      if (
        $.data.read('zhihu_settings_fake_vip') !== false &&
        obj['vip_info']['is_vip'] === false
      ) {
        obj['vip_info']['is_vip'] = true;
        obj['vip_info']['vip_type'] = 2;
        obj['vip_info']['vip_icon'] = {
          url: 'https://picx.zhimg.com/v2-aa8a1823abfc46f14136f01d55224925.jpg?source=88ceefae',
          night_mode_url:
            'https://picx.zhimg.com/v2-aa8a1823abfc46f14136f01d55224925.jpg?source=88ceefae'
        };
        obj['vip_info']['vip_icon_v2'] = {
          url: 'https://picx.zhimg.com/v2-aa8a1823abfc46f14136f01d55224925.jpg?source=88ceefae',
          night_mode_url:
            'https://picx.zhimg.com/v2-aa8a1823abfc46f14136f01d55224925.jpg?source=88ceefae'
        };
        obj['vip_info']['entrance'] = {
          icon: {
            url: 'https://pic3.zhimg.com/v2-5b7012c8c22fd520f5677305e1e551bf.png',
            night_mode_url:
              'https://pic4.zhimg.com/v2-e51e3252d7a2cb016a70879defd5da0b.png'
          },
          button_jump_url: 'zhihu://vip/purchase',
          button_text: '首月 9 元',
          expires_day: '2099-12-31',
          identity: 'super_svip',
          jump_url: 'zhihu://vip/purchase',
          sub_title_new: null,
          sub_title: null,
          title: '盐选会员 为你严选好内容'
        };
        obj['vip_info']['entrance_new'] = {
          left_button: {
            description: '为您严选好内容',
            jump_url: 'zhihu://market/home',
            title: '精选会员内容'
          },
          right_button: {
            description: '畅享 10w+ 场优质内容等特权',
            jump_url: 'zhihu://vip/purchase',
            title: '开通盐选会员'
          }
        };
        obj['vip_info']['entrance_v2'] = {
          button_text: '查看会员',
          card_jump_url: 'zhihu://market/home',
          jump_url: 'zhihu://market/home',
          sub_title_color: '#F8E2C4',
          sub_title_list: ['畅享 5000W+ 优质内容'],
          sub_title: '畅享 5000W+ 优质内容',
          title: '我的超级盐选会员'
        };
        $.logger.debug('设置用户为本地盐选会员');
        response = { body: JSON.stringify(obj) };
      }
    } else {
      $.logger.warning(
        `没有获取到本次登录用户信息，如未对功能造成影响，请忽略此日志。`
      );
    }
  } catch (err) {
    $.logger.error(`获取当前用户信息出现异常：${err}`);
  }
  return response;
}
function manageBlackUser() {
  const userInfo = getUserInfo();
  let defaultBlockedUsers = {};
  let customBlockedUsers = $.data.read(blockedUsersKey, '', userInfo.id);
  customBlockedUsers =
    typeof customBlockedUsers === 'object' && !!customBlockedUsers
      ? customBlockedUsers
      : {};
  defaultAnswerBlockedUsers.forEach(element => {
    customBlockedUsers[element] = '00000000000000000000000000000000';
    defaultBlockedUsers[element] = '00000000000000000000000000000000';
  });
  $.logger.debug(
    `当前用户 id：${userInfo.id}，脚本黑名单：${JSON.stringify(
      customBlockedUsers
    )}`
  );
  if ($.request.method === 'GET') {
    try {
      if ($.request.url.indexOf('offset') < 0) {
        customBlockedUsers = defaultBlockedUsers;
        $.logger.debug(
          '脚本黑名单已清空，请滑动至黑名单末尾保证重新获取完成。'
        );
        $.notification.post(
          '开始同步黑名单数据，请滑动至黑名单末尾，直至弹出“同步成功”的通知。'
        );
      }
      let obj = JSON.parse($.response.body);
      if (!!obj['data']) {
        $.logger.debug(
          `本次滑动获取的黑名单信息：${JSON.stringify(obj['data'])}`
        );
        obj['data'].forEach(element => {
          if (element['name'] !== '[已重置]') {
            customBlockedUsers[element['name']] = element['id'];
          }
        });
        $.data.write(blockedUsersKey, customBlockedUsers, userInfo.id);
        if (obj['paging']['is_end'] === true) {
          $.notification.post(
            `同步黑名单数据成功！当前黑名单共${
              Object.keys(customBlockedUsers).length -
              defaultAnswerBlockedUsers.length
            }人。\n脚本内置黑名单${defaultAnswerBlockedUsers.length}人。`
          );
          $.logger.debug(
            `脚本黑名单内容：${JSON.stringify(customBlockedUsers)}。`
          );
        }
      } else {
        $.logger.warning(`获取黑名单失败，接口响应不合法：${$.response.body}`);
      }
    } catch (err) {
      $.data.del(blockedUsersKey);
      $.logger.error(`获取黑名单失败，异常信息：${err}`);
      $.notification.post('获取黑名单失败，执行异常，已清空黑名单。');
    }
  } else if ($.request.method === 'POST') {
    try {
      let obj = JSON.parse($.response.body);
      if (obj.hasOwnProperty('name') && obj.hasOwnProperty('id')) {
        $.logger.debug(
          `当前需要加入黑名单的用户 Id：${obj['id']}，用户名：${obj['name']}`
        );
        if (obj['id']) {
          customBlockedUsers[obj['name']] = obj['id'];
          $.data.write(blockedUsersKey, customBlockedUsers, userInfo.id);
          $.logger.debug(
            `${
              obj['name']
            }写入脚本黑名单成功，当前脚本黑名单数据：${JSON.stringify(
              customBlockedUsers
            )}`
          );
          $.notification.post(`已将用户“${obj['name']}”写入脚本黑名单。`);
        } else {
          $.logger.error(
            `${obj['name']}写入脚本黑名单失败，没有获取到用户 Id。`
          );
          $.notification.post(`将用户“${obj['name']}”写入脚本黑名单失败！`);
        }
      } else {
        $.logger.warning(`写入黑名单失败，接口响应不合法：${$.response.body}`);
        $.notification.post('写入脚本黑名单失败，接口返回不合法。');
      }
    } catch (err) {
      $.logger.error(`写入黑名单失败，异常信息：${err}`);
      $.notification.post('写入脚本黑名单失败，执行异常，请查阅日志。');
    }
  } else if ($.request.method === 'DELETE') {
    try {
      let obj = JSON.parse($.response.body);
      if (obj.success) {
        let user_id = $.request.url.match(
          /^https?:\/\/api\.zhihu\.com\/settings\/blocked_users\/([0-9a-zA-Z]*)/
        )[1];
        if (user_id) {
          $.logger.debug(`当前需要移出黑名单的用户 Id：${user_id}`);
          for (let username in customBlockedUsers) {
            if (customBlockedUsers[username] === user_id) {
              delete customBlockedUsers[username];
              $.data.write(blockedUsersKey, customBlockedUsers, userInfo.id);
              $.logger.debug(
                `${username}移出脚本黑名单成功，当前脚本黑名单数据：${JSON.stringify(
                  customBlockedUsers
                )}`
              );
              $.notification.post(`已将用户“${username}”移出脚本黑名单！`);
              break;
            }
          }
        } else {
          $.logger.error(
            '将用户移出脚本黑名单失败！\n建议从设置中刷新黑名单数据。'
          );
          $.notification.post(
            `将用户移出脚本黑名单失败，没有获取到用户 Id。\n建议从设置中刷新黑名单数据。`
          );
        }
      } else {
        $.logger.warning(`移出黑名单失败，接口响应不合法：${$.response.body}`);
        $.notification.post('移出脚本黑名单失败，接口返回不合法。');
      }
    } catch (err) {
      $.logger.error(`移出黑名单失败，异常信息：${err}`);
      $.notification.post('移出脚本黑名单失败，执行异常，请查阅日志。');
    }
  }
}
function autoInsertBlackList() {
  let response = null;
  try {
    let obj = JSON.parse($.response.body);
    delete obj['mcn_user_info'];
    response = { body: JSON.stringify(obj) };
    if (obj.name && obj.id && obj['is_blocking'] === true) {
      const userInfo = getUserInfo();
      let customBlockedUsers = $.data.read(blockedUsersKey, '', userInfo.id);
      customBlockedUsers =
        typeof customBlockedUsers === 'object' && !!customBlockedUsers
          ? customBlockedUsers
          : {};
      if (!customBlockedUsers[obj.name]) {
        $.logger.debug(
          `当前需要加入黑名单的用户 Id：${obj['id']}，用户名：${obj['name']}`
        );
        customBlockedUsers[obj['name']] = obj['id'];
        $.data.write(blockedUsersKey, customBlockedUsers, userInfo.id);
        $.logger.debug(
          `${
            obj['name']
          }写入脚本黑名单成功，当前脚本黑名单数据：${JSON.stringify(
            customBlockedUsers
          )}`
        );
        $.notification.post(`已自动将用户“${obj['name']}”写入脚本黑名单。`);
      }
    }
  } catch (err) {
    $.logger.error(`去除 MCN 信息出现异常：${err}`);
  }
  return response;
}
function removeMoments() {
  let response = null;
  try {
    let obj = JSON.parse(
      $.response.body.replace(/(\w+"+\s?):\s?(\d{15,})/g, '$1:"$2"')
    );
    const user_info = getUserInfo();
    let customBlockedUsers = $.data.read(blockedUsersKey, '', user_info.id);
    customBlockedUsers = !!customBlockedUsers ? customBlockedUsers : {};
    let data;
    const settings_remove_stream = $.data.read(
      'zhihu_settings_moments_stream',
      false
    );
    const settings_remove_recommend = $.data.read(
      'zhihu_settings_moments_recommend',
      false
    );
    const settings_remove_activity = $.data.read(
      'zhihu_settings_moments_activity',
      false
    );
    const settings_blocked_users = $.data.read(
      'zhihu_settings_blocked_users',
      false
    );
    data = obj.data.filter(item => {
      const isBlackUserPin =
        settings_blocked_users &&
        item.target &&
        item.target['origin_pin'] &&
        item.target['origin_pin'].author &&
        typeof customBlockedUsers[item.target['origin_pin'].author.name] !=
          'undefined';
      const isStream =
        settings_remove_stream && item['target_type'] === 'zvideo';
      const isRecommend =
        settings_remove_recommend && item.type === 'recommend_user_card_list';
      const isActivity =
        settings_remove_activity && item.type === 'message_activity_card';
      return !(isBlackUserPin || isStream || isRecommend || isActivity);
    });
    obj['data'] = data;
    response = { body: JSON.stringify(obj) };
  } catch (err) {
    $.logger.error(`关注列表去广告出现异常：${err}`);
  }
  return response;
}
function _setRecommendTag(item, text, color = 'GBK02A') {
  if (!item['common_card']['footline']) {
    item['common_card']['footline'] = { elements: [] };
  }
  item['common_card']['footline']['elements'].unshift({
    tag: { text: text, color: color, type: 'MASK_ROUNDED_RECTANGLE' }
  });
}
async function _checkPaidContentByCloud(filteredUrls, newData) {
  const zheyeServer = $.data.read(zheyeServerKey);
  if (!zheyeServer) {
    $.notification.post(
      '未设置服务端地址，无法进行付费/推广内容探测。\n请配置服务端地址，或使用本地探测。'
    );
  } else {
    $.logger.debug(`向云端请求以下链接\n${filteredUrls.join('\n')}`);
    const url = `${zheyeServer}/api/v1/answer/links`;
    $.logger.debug(`服务端地址\n${url}`);
    await $.http
      .post({
        url: url,
        headers: { 'Content-Type': 'application/json' },
        body: filteredUrls
      })
      .then(resp => {
        $.logger.debug(
          `云端探测结果<${typeof resp.body}>\n${JSON.stringify(resp.body)}`
        );
        for (let i = 0; i < resp.body.length; i++) {
          try {
            let tagText = resp.body[i];
            if (tagText !== '') {
              _setRecommendTag(newData[i], tagText, 'GBK02A');
            }
          } catch (err) {
            $.logger.error(err);
          }
        }
      })
      .catch(err => {
        $.logger.error(`云端请求出现异常\n${JSON.stringify(err)}`);
      });
  }
}
async function _checkPaidContentByLocal(filteredUrls, newData) {
  $.logger.debug(`将在本地请求以下链接\n${filteredUrls.join('\n')}`);
  let requestPromise = [];
  function _requestAnswerContent(i) {
    return new Promise(resolve => {
      const url = filteredUrls[i];
      if (
        !url ||
        url === '' ||
        !url.startsWith('https://www.zhihu.com/appview/v2/answer')
      ) {
        resolve('');
      } else {
        $.http
          .get({ url: filteredUrls[i], timeout: 1e3 })
          .then(resp => {
            const body = resp.body;
            if (
              (body.indexOf('查看完整内容') >= 0 ||
                body.indexOf('查看全部章节') >= 0) &&
              body.indexOf('paid') >= 0
            ) {
              resolve('付费内容');
            } else if (
              body.indexOf('ad-link-card') >= 0 ||
              body.indexOf('xg.zhihu.com') >= 0 ||
              body.indexOf('营销平台') >= 0
            ) {
              resolve('营销推广');
            } else if (body.indexOf('mcn-link-card') >= 0) {
              resolve('购物推广');
            } else {
              resolve('');
            }
          })
          .catch(err => {
            $.logger.error(`本地请求出现异常\n${JSON.stringify(err)}`);
            resolve('');
          });
      }
    });
  }
  for (let i = 0; i < filteredUrls.length; i++) {
    requestPromise.push(_requestAnswerContent(i));
  }
  await Promise.all(requestPromise).then(result => {
    $.logger.debug(`本地探测结果<${result.length}>\n${JSON.stringify(result)}`);
    for (let i = 0; i < result.length; i++) {
      try {
        let tagText = result[i];
        if (tagText !== '') {
          _setRecommendTag(newData[i], tagText, 'GBK02A');
        }
      } catch (err) {
        $.logger.error(err);
      }
    }
  });
}
async function removeRecommend() {
  let response = null;
  try {
    const settings_remove_pin = $.data.read(
      'zhihu_settings_recommend_pin',
      false
    );
    const settings_recommend_stream = $.data.read(
      'zhihu_settings_recommend_stream',
      false
    );
    const settings_remove_article = $.data.read(
      'zhihu_settings_remove_article',
      false
    );
    const settings_blocked_users = $.data.read(
      'zhihu_settings_blocked_users',
      false
    );
    const settings_blocked_keywords = $.data.read(
      'zhihu_settings_blocked_keywords',
      true
    );
    const settings_check_paid_content = $.data.read(
      'zhihu_settings_check_paid_content',
      false
    );
    const settings_request_content = $.data.read(
      'zhihu_settings_request_content',
      'local'
    );
    const user_info = getUserInfo();
    let keywords = $.data.read(keywordBlockKey, '', user_info.id);
    keywords = settings_blocked_keywords && !!keywords ? keywords : [];
    let customBlockedUsers = $.data.read(blockedUsersKey, '', user_info.id);
    customBlockedUsers =
      settings_blocked_users && !!customBlockedUsers ? customBlockedUsers : {};
    const dataFilter = element => {
      const elementStr = JSON.stringify(element);
      const isAd =
        element['card_type'] === 'slot_event_card' ||
        element['card_type'] === 'slot_video_event_card' ||
        element.hasOwnProperty('ad') ||
        (element['brief'] && element['brief'].indexOf('slot_card') >= 0) ||
        (element['extra'] && element['extra']['type'] === 'Training');
      const isStream =
        isAd !== true &&
        elementStr.search(
          /"(type|style)+"\s?:\s?"(drama|zvideo|Video|BIG_IMAGE)+"/i
        ) >= 0;
      const removeStream = isStream && settings_recommend_stream;
      const isPin =
        isStream !== true &&
        elementStr.search(/"(type|style)+"\s?:\s?"pin"/i) >= 0;
      const removePin = isPin && settings_remove_pin;
      const isArticle =
        elementStr.search(/"(type|style)+"\s?:\s?"article"/i) >= 0;
      const removeArticle = isArticle && settings_remove_article;
      let matchKeyword = false;
      if (isStream !== true && settings_blocked_keywords) {
        for (let i = 0; i < keywords.length; i++) {
          if (elementStr.search(keywords[i]) >= 0) {
            if ($.isDebug) {
              let elementTitle =
                element['common_card']['feed_content']['title']['panel_text'];
              let elementContent =
                element['common_card']['feed_content']['content']['panel_text'];
              let actionUrl = '';
              try {
                actionUrl =
                  element['common_card']['feed_content']['title']['action'][
                    'intent_url'
                  ];
              } catch {}
              $.logger.debug(
                `匹配关键字：\n${keywords[i]}\n标题：\n${elementTitle}\n内容：\n${elementContent}`
              );
              $.notification.debug(
                scriptName,
                `关键字：${keywords[i]}`,
                `${elementTitle}\n${elementContent}`,
                actionUrl
              );
            }
            matchKeyword = true;
            break;
          }
        }
      }
      let isBlockedUser;
      try {
        isBlockedUser =
          matchKeyword !== true &&
          settings_blocked_users &&
          customBlockedUsers &&
          element['common_card']['feed_content']['source_line']['elements'][1][
            'text'
          ]['panel_text'] in customBlockedUsers;
      } catch {
        isBlockedUser = false;
      }
      return !(
        isAd ||
        removePin ||
        removeArticle ||
        removeStream ||
        matchKeyword ||
        isBlockedUser
      );
    };
    let obj = JSON.parse(
      $.response.body.replace(/(\w+"+\s?):\s?(\d{15,})/g, '$1:"$2"')
    );
    let newData = obj['data'].filter(dataFilter);
    if (settings_check_paid_content === true) {
      let filteredUrls = [];
      for (let i = 0; i < newData.length; i++) {
        if (newData[i]) {
          try {
            let url =
              newData[i]['common_card']['feed_content']['title']['action'][
                'intent_url'
              ];
            url = url.replace(
              /^https:\/\/zhihu\.com\/question\/\d+\/answer\//,
              'https://www.zhihu.com/appview/v2/answer/'
            );
            filteredUrls.push(url);
          } catch {
            filteredUrls.push('');
          }
        }
      }
      if (filteredUrls.length > 0 && settings_request_content === 'cloud') {
        await _checkPaidContentByCloud(filteredUrls, newData);
      } else if (
        filteredUrls.length > 0 &&
        settings_request_content === 'local'
      ) {
        await _checkPaidContentByLocal(filteredUrls, newData);
      }
    }
    obj['data'] = newData;
    response = { body: JSON.stringify(obj) };
  } catch (err) {
    $.logger.error(`推荐列表去广告出现异常：${err}`);
  }
  return response;
}
function removeQuestions() {
  let response = null;
  try {
    const userInfo = getUserInfo();
    let customBlockedUsers = $.data.read(blockedUsersKey, '', userInfo.id);
    customBlockedUsers = !!customBlockedUsers ? customBlockedUsers : {};
    let obj = JSON.parse($.response.body);
    const settingsBlockedUsers = $.data.read(
      'zhihu_settings_blocked_users',
      false
    );
    $.logger.debug(`当前黑名单列表：${JSON.stringify(customBlockedUsers)}`);
    let blackUserAnswersId = $.data.read(blackAnswersIdKey, []);
    delete obj['ad_info'];
    if (obj['data']) {
      let newData = [];
      for (let element of obj.data) {
        let blackUserName = '';
        const answerId = element.target.id.toString();
        try {
          if ('target' in element) {
            blackUserName = element['target']['author']['name'];
          }
        } catch (ex) {
          $.logger.error(`获取回答列表用户名出现异常：${ex}`);
        }
        const isBlackUser =
          typeof customBlockedUsers[blackUserName] != 'undefined';
        const removeBlackUserAnswer = settingsBlockedUsers && isBlackUser;
        if ('target' in element) {
          element['target']['visible_only_to_author'] = false;
          element['target']['is_visible'] = true;
          element['target']['is_copyable'] = true;
        }
        if (!removeBlackUserAnswer) {
          newData.push(element);
        } else if (
          removeBlackUserAnswer === true &&
          blackUserAnswersId.includes(answerId) === false
        ) {
          blackUserAnswersId.push(answerId);
          $.notification.debug(
            `记录黑名单用户${blackUserName}的回答 Id:${answerId}`
          );
        }
      }
      obj.data = newData;
    }
    $.data.write(blackAnswersIdKey, blackUserAnswersId);
    const body = JSON.stringify(obj);
    $.logger.debug(`修改后的回答列表数据：${body}`);
    response = { body: body };
  } catch (err) {
    $.logger.error(`回答列表去广告出现异常：${err}`);
  }
  return response;
}
function modifyAnswer() {
  let response = null;
  try {
    let html = $.response.body;
    let insertText = '';
    if (
      (html.indexOf('查看完整内容') >= 0 ||
        html.indexOf('查看全部章节') >= 0) &&
      html.indexOf('paid') >= 0
    ) {
      insertText =
        '<a style="height: 42px;padding: 0 12px;border-radius: 6px;background-color: rgb(247 104 104 / 8%);display: block;text-decoration: none;" href="#"><div style="color: #f36;display: flex;-webkit-box-align: center;align-items: center;height: 100%;"><svg style="width: 1.2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024"><path d="M821.333333 138.666667c64.8 0 117.333333 52.533333 117.333334 117.333333v149.333333a32 32 0 0 1-32 32 74.666667 74.666667 0 0 0 0 149.333334 32 32 0 0 1 32 32v149.333333c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V618.666667a32 32 0 0 1 32-32 74.666667 74.666667 0 0 0 0-149.333334 32 32 0 0 1-32-32V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666zM428.576 329.994667a32 32 0 0 0-43.733333-2.581334l-1.514667 1.344a32 32 0 0 0-2.581333 43.733334L452.565333 458.666667H405.333333l-1.877333 0.053333A32 32 0 0 0 373.333333 490.666667l0.053334 1.877333A32 32 0 0 0 405.333333 522.666667h80v42.666666H405.333333l-1.877333 0.053334A32 32 0 0 0 373.333333 597.333333l0.053334 1.877334A32 32 0 0 0 405.333333 629.333333h80v42.666667l0.053334 1.877333A32 32 0 0 0 517.333333 704l1.877334-0.053333A32 32 0 0 0 549.333333 672v-42.666667H618.666667l1.877333-0.053333A32 32 0 0 0 650.666667 597.333333l-0.053334-1.877333A32 32 0 0 0 618.666667 565.333333h-69.333334v-42.666666H618.666667l1.877333-0.053334A32 32 0 0 0 650.666667 490.666667l-0.053334-1.877334A32 32 0 0 0 618.666667 458.666667h-47.253334l71.84-86.186667 1.248-1.589333a32 32 0 0 0-50.421333-39.381334L512 430.016l-82.08-98.506667z"></path></svg><div style="flex: 1 1;white-space: nowrap;text-overflow: ellipsis;padding-left:4px"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;line-height: 20px;color: #f36;white-space: nowrap;font-weight: 600;">本文为付费内容</span></div><div></div></div></a>';
    } else if (
      html.indexOf('ad-link-card') >= 0 ||
      html.indexOf('xg.zhihu.com') >= 0 ||
      html.indexOf('营销平台') >= 0
    ) {
      insertText =
        '<a style="height: 42px;padding: 0 12px;border-radius: 6px;background-color: rgb(8 188 212 / 8%);display: block;text-decoration: none;" href="#"><div style="color: #00bcd4;display: flex;-webkit-box-align: center;align-items: center;height: 100%;"><svg style="width: 1.2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024"><path d="M128 765.952q0 26.624 18.432 45.056t45.056 18.432l191.488 0 0 128-254.976 0q-26.624 0-49.664-10.24t-40.448-27.648-27.648-40.448-10.24-49.664l0-637.952q0-25.6 10.24-49.152t27.648-40.448 40.448-27.136 49.664-10.24l701.44 0q26.624 0 49.664 10.24t40.448 27.136 27.648 40.448 10.24 49.152l0 251.904-128 1.024 0-61.44q0-26.624-18.432-45.056t-45.056-18.432l-574.464 0q-26.624 0-45.056 18.432t-18.432 45.056l0 382.976zM990.208 705.536q21.504 18.432 22.016 34.304t-20.992 33.28q-21.504 18.432-51.2 41.472t-60.928 48.128-61.952 49.152-55.296 43.52q-26.624 20.48-43.52 15.36t-16.896-31.744q1.024-16.384 0-40.448t-1.024-41.472q0-19.456-10.752-24.064t-31.232-4.608q-21.504 0-39.936-0.512t-35.84-0.512-36.352-0.512-41.472-0.512q-9.216 0-19.968-2.048t-19.456-7.168-14.336-15.36-5.632-27.648l0-80.896q0-31.744 15.36-42.496t48.128-10.752q30.72 1.024 61.44 1.024t71.68 1.024q29.696 0 46.08-5.12t16.384-25.6q-1.024-14.336 0.512-35.328t1.536-37.376q0-26.624 14.336-33.28t36.864 10.752q22.528 18.432 52.736 43.008t61.952 50.688 62.976 51.2 54.784 44.544z"></path></svg><div style="flex: 1 1;white-space: nowrap;text-overflow: ellipsis;padding-left:4px"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;line-height: 20px;color: #00bcd4;white-space: nowrap;font-weight: 600;">本文含有营销推广</span></div><div></div></div></a>';
    } else if (html.indexOf('mcn-link-card') >= 0) {
      insertText =
        '<a style="height: 42px;padding: 0 12px;border-radius: 6px;background-color: rgb(8 188 212 / 8%);display: block;text-decoration: none;" href="#"><div style="color: #00bcd4;display: flex;-webkit-box-align: center;align-items: center;height: 100%;"><svg style="width: 1.2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024"><path d="M346.112 806.912q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM772.096 808.96q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM944.128 227.328q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.328t-38.4 14.848l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-13.312l21.504 0 21.504 0 25.6 0 34.816 0q20.48 0 32.768 6.144t19.456 15.36 10.24 19.456 5.12 17.408q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM867.328 194.56l-374.784 0 135.168-135.168q23.552-23.552 51.712-24.064t51.712 23.04z"></path></svg><div style="flex: 1 1;white-space: nowrap;text-overflow: ellipsis;padding-left:4px"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;line-height: 20px;color: #00bcd4;white-space: nowrap;font-weight: 600;">本文含有购物推广</span></div><div></div></div></a>';
    } else if (Math.floor(Math.random() * 200) === 7) {
      insertText =
        '<a style="height: 42px;padding: 0 12px;border-radius: 6px;background-color: rgb(74 162 56 / 8%);display: block;text-decoration: none;" href="#"><div style="color: #619201;display: flex;-webkit-box-align: center;align-items: center;height: 100%;"><svg class="icon" style="width: 1.2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024"><path d="M512 85.333333c71.477333 0 159.68 57.546667 229.258667 147.018667C817.845333 330.826667 864 455.978667 864 586.666667c0 211.808-148.501333 352-352 352S160 798.474667 160 586.666667c0-130.688 46.144-255.84 122.741333-354.314667C352.32 142.88 440.522667 85.333333 512 85.333333z m0 64c-48.213333 0-120.096 46.912-178.741333 122.314667C265.109333 359.253333 224 470.762667 224 586.666667c0 175.616 119.050667 288 288 288s288-112.384 288-288c0-115.904-41.109333-227.402667-109.258667-315.018667C632.096 196.234667 560.213333 149.333333 512 149.333333z m-74.666667 522.666667a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667z m-96-128a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z"></path></svg><div style="flex: 1 1;white-space: nowrap;text-overflow: ellipsis;padding-left:4px"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;line-height: 20px;color: #619201;white-space: nowrap;font-weight: 600;">本文为免费内容</span></div><div></div></div></a>';
    }
    if (insertText !== '') {
      const matchStr = html.match(/(richText[^<]*>)(.)/)[1];
      const start = html.lastIndexOf(matchStr) + matchStr.length;
      response = {
        body: html.slice(0, start) + insertText + html.slice(start)
      };
    }
  } catch (err) {
    $.logger.error(`付费内容提醒出现异常：${err}`);
  }
  return response;
}
function removeComment() {
  let response = null;
  try {
    if (!!$.response.body) {
      let obj = JSON.parse($.response.body);
      obj['ad_info'] = {};
      if ($.data.read('zhihu_settings_blocked_users', false) === true) {
        let user_info = getUserInfo();
        let customBlockedUsers = $.data.read(blockedUsersKey, '', user_info.id);
        customBlockedUsers = !!customBlockedUsers ? customBlockedUsers : {};
        let newComments = [];
        let blockCommentIdObj = {};
        if (typeof obj.root != 'undefined') {
          const rootUserName = obj.root.author.name;
          const isBlackRootUser =
            typeof customBlockedUsers[rootUserName] != 'undefined';
          if (isBlackRootUser === true) {
            obj.root.is_delete = true;
            obj.root.can_reply = false;
            obj.root.can_like = false;
            obj.root.author.name = '黑名单用户';
            obj.root.author.avatar_url =
              'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg';
          }
        }
        if (typeof obj.data != 'undefined') {
          obj.data.forEach(comment => {
            const commentUserName = comment.author.name;
            let replyUserName = '';
            if (comment['reply_to_author'] && comment['reply_to_author'].name) {
              replyUserName = comment['reply_to_author'].name;
            }
            const isSubComment = replyUserName !== '';
            const isBlackCommentUser =
              typeof customBlockedUsers[commentUserName] != 'undefined';
            const isBlackReplyUser =
              typeof customBlockedUsers[replyUserName] != 'undefined';
            if (isBlackCommentUser === true || isBlackReplyUser === true) {
              if (
                isBlackCommentUser &&
                !isSubComment &&
                $.request.url.indexOf('root_comment') > 0
              ) {
                $.notification.debug(
                  `屏蔽黑名单用户“${commentUserName}”的主评论。`
                );
              } else if (
                !isBlackCommentUser &&
                isSubComment &&
                !isBlackReplyUser &&
                $.request.url.indexOf('child_comment') > 0
              ) {
                $.notification.debug(
                  `屏蔽黑名单用户“${commentUserName}”的子评论。`
                );
              } else if (
                isBlackCommentUser &&
                !isBlackReplyUser &&
                $.request.url.indexOf('child_comment') > 0
              ) {
                $.notification.debug(
                  `屏蔽黑名单用户“${commentUserName}”回复“${replyUserName}”的子评论。`
                );
              } else if (
                isBlackCommentUser &&
                isBlackReplyUser &&
                $.request.url.indexOf('child_comment') > 0
              ) {
                $.notification.debug(
                  `屏蔽黑名单用户“${commentUserName}”回复黑名单用户“${replyUserName}”的子评论。`
                );
              }
              blockCommentIdObj[comment.id] = commentUserName;
              if (isBlackCommentUser) {
                comment.is_delete = true;
                comment.can_reply = false;
                comment.can_like = false;
                comment.author.exposed_medal = {};
                comment.author.name = '[黑名单用户]';
                comment.author.avatar_url =
                  'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg';
              }
              if (isBlackReplyUser) {
                comment['reply_to_author'].name = '[黑名单用户]';
                comment['reply_to_author'].exposed_medal = {};
                comment['reply_to_author'].avatar_url =
                  'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg';
              }
            }
            if (comment.child_comments) {
              let newChildComments = [];
              comment.child_comments.forEach(childComment => {
                const childCommentUserName = childComment.author.name;
                const childCommentReplyUserName =
                  typeof childComment['reply_to_author'] != 'undefined'
                    ? childComment['reply_to_author'].name
                    : '';
                const isChildBlackCommentUser =
                  typeof customBlockedUsers[childCommentUserName] !=
                  'undefined';
                const isChildBlackReplyUser =
                  typeof customBlockedUsers[childCommentReplyUserName] !=
                  'undefined';
                if (isChildBlackCommentUser || isChildBlackReplyUser) {
                  if (isChildBlackCommentUser === true) {
                    $.notification.debug(
                      `屏蔽黑名单用户“${childCommentUserName}”的子评论。`
                    );
                    blockCommentIdObj[childComment.id] = childCommentUserName;
                    childComment.is_delete = true;
                    childComment.can_reply = false;
                    childComment.can_like = false;
                    childComment.author.name = '[黑名单用户]';
                    childComment.author.exposed_medal = {};
                    childComment.author.avatar_url =
                      'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg';
                  }
                  if (isChildBlackReplyUser === true) {
                    $.logger.debug(
                      `修改前的子评论数据:\n${JSON.stringify(childComment)}`
                    );
                    childComment['reply_to_author'].name = '[黑名单用户]';
                    childComment['reply_to_author'].exposed_medal = {};
                    childComment['reply_to_author'].avatar_url =
                      'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg';
                    $.notification.debug(
                      `隐藏“${childCommentUserName}”回复黑名单用户“${childCommentReplyUserName}”的名称与头像。`
                    );
                    $.logger.debug(
                      `修改后的子评论数据:\n${JSON.stringify(childComment)}`
                    );
                  }
                }
                newChildComments.push(childComment);
              });
              comment.child_comments = newChildComments;
            }
            newComments.push(comment);
          });
        }
        obj.data = newComments;
      }
      const body = JSON.stringify(obj);
      $.logger.debug(`过滤后的评论数据：\n${body}`);
      response = { body: body };
    }
  } catch (err) {
    $.logger.error(`去除评论广告出现异常：${err}`);
  }
  return response;
}
function removeArticleAd() {
  let response = null;
  try {
    if (!!$.response.body) {
      let obj = JSON.parse($.response.body);
      obj['ad_info'] = {};
      const body = JSON.stringify(obj);
      $.logger.debug(`过滤后的文章数据：\n${body}`);
      response = { body: body };
    }
  } catch (err) {
    $.logger.error(`去除文章广告出现异常：${err}`);
  }
  return response;
}
function removeMarketingMsg() {
  let response = null;
  try {
    let obj = JSON.parse($.response.body);
    let newItems = [];
    for (let item of obj['data']) {
      if (item['detail_title'] === '官方帐号消息') {
        let unread_count = item['unread_count'];
        if (unread_count > 0) {
          item['content']['text'] = '未读消息' + unread_count + '条';
        } else {
          item['content']['text'] = '全部消息已读';
        }
        item['is_read'] = true;
        item['unread_count'] = 0;
        newItems.push(item);
      } else if (item['detail_title'] !== '活动助手') {
        newItems.push(item);
      }
    }
    obj['data'] = newItems;
    response = { body: JSON.stringify(obj) };
  } catch (err) {
    $.logger.error(`屏蔽官方营销消息出现异常：${err}`);
  }
  return response;
}
function removeHotListAds() {
  let response = null;
  try {
    if (!!$.response.body) {
      let obj = JSON.parse($.response.body);
      if ('data' in obj) {
        obj['data'] = obj['data'].filter(e => {
          return (
            e['type'] === 'hot_list_feed' || e['type'] === 'hot_list_feed_video'
          );
        });
      }
      response = { body: JSON.stringify(obj) };
    }
  } catch (err) {
    $.logger.error(`去除热榜广告出现异常：${err}`);
  }
  return response;
}
function removeKeywordAds() {
  let response = null;
  try {
    if (!!$.response.body) {
      $.logger.debug(`预置关键字返回：${$.response.body}`);
      let obj = JSON.parse($.response.body);
      if (obj.hasOwnProperty('preset_words') && obj['preset_words']['words']) {
        obj['preset_words']['words'] = obj['preset_words']['words'].filter(
          element => {
            return element['type'] !== 'ad';
          }
        );
        response = { body: JSON.stringify(obj) };
      }
    }
  } catch (err) {
    $.logger.error(`去除预置关键字广告出现异常：${err}`);
  }
  return response;
}
function removeNextBlackUserAnswer() {
  let response = null;
  try {
    if (!!$.response.body) {
      let obj = JSON.parse($.response.body);
      const blackUserAnswersId = $.data.read(blackAnswersIdKey, []);
      if (blackUserAnswersId.length > 0) {
        let newData = [];
        obj.data.forEach(element => {
          const tag = blackUserAnswersId.includes(element.id.toString());
          if (tag === false) {
            element.ad_info = { data: '' };
            newData.push(element);
          } else {
            $.notification.debug(
              `屏蔽翻页过程中出现的黑名单用户回答 Id:${element.id}`
            );
          }
        });
        for (let i = 0; i < newData.length; i++) {
          if (newData[i]['extra'] && newData[i]['extra']['question_index']) {
            newData[i]['extra']['question_index'] = i + 1;
          }
          if (newData[i]['strategy_info']) {
            newData[i]['strategy_info']['global_index'] = i + 1;
            newData[i]['strategy_info']['strategy_index'] = i + 1;
          }
        }
        obj.data = newData;
      }
      response = { body: JSON.stringify(obj) };
    }
  } catch (err) {
    $.logger.error(`屏蔽下翻黑名单用户的回答出现异常：${err}`);
  }
  return response;
}
function modifyAnswersNextData() {
  let response = null;
  try {
    if (!!$.response.body) {
      let obj = JSON.parse($.response.body);
      let user_info = getUserInfo();
      let customBlockedUsers = $.data.read(blockedUsersKey, {}, user_info.id);
      $.logger.debug(`脚本黑名单用户：\n${JSON.stringify(customBlockedUsers)}`);
      let newData = [];
      obj.data.data.forEach(element => {
        const isAd =
          element['resource_type'] === 'ad' ||
          element['extra']['recommend_start'] === true ||
          element['next_guide']['change_type'] === 1 ||
          element['next_guide']['title'] === '推荐的相关内容';
        if (isAd === true) {
          return;
        }
        element['ad_info'] = { data: '' };
        const isBlackUser =
          typeof customBlockedUsers[element.data.author.name] != 'undefined';
        $.logger.debug(
          `用户${element.data.author.name}是否在黑名单中：${isBlackUser}`
        );
        if (
          $.data.read('zhihu_settings_blocked_users', false) === false ||
          isBlackUser === false
        ) {
          newData.push(element);
        }
      });
      obj.data.data = newData;
      response = { body: JSON.stringify(obj) };
    }
  } catch (err) {
    $.logger.error(`屏蔽回答信息流黑名单用户及广告：${err}`);
  }
  return response;
}
function modifyAnswersNextBff() {
  let response = null;
  try {
    if (!!$.response.body) {
      let obj = JSON.parse($.response.body);
      let user_info = getUserInfo();
      let customBlockedUsers = $.data.read(blockedUsersKey, {}, user_info.id);
      $.logger.debug(`脚本黑名单用户：\n${JSON.stringify(customBlockedUsers)}`);
      let newData = [];
      obj.data.forEach(element => {
        const isAd = element['origin_data']['resource_type'] !== 'normal';
        if (isAd === true) {
          return;
        }
        element['origin_data']['ad_info'] = { data: '' };
        const authorName = element['origin_data']['data']['author']['name'];
        const isBlackUser =
          typeof customBlockedUsers[authorName] != 'undefined';
        $.logger.debug(`用户${authorName}是否在黑名单中：${isBlackUser}`);
        if (
          $.data.read('zhihu_settings_blocked_users', false) === false ||
          isBlackUser === false
        ) {
          newData.push(element);
        }
      });
      obj.data = newData;
      response = { body: JSON.stringify(obj) };
    }
  } catch (err) {
    $.logger.error(`屏蔽回答信息流黑名单用户及广告：${err}`);
  }
  return response;
}
function modifyAnswersNextRender() {
  let response = null;
  try {
    if (!!$.response.body) {
      let obj = JSON.parse($.response.body);
      let user_info = getUserInfo();
      let customBlockedUsers = $.data.read(blockedUsersKey, {}, user_info.id);
      $.logger.debug(`脚本黑名单用户：\n${JSON.stringify(customBlockedUsers)}`);
      let newData = [];
      obj.data.forEach(element => {
        const isAd =
          (element['ad_info'] && element['ad_info']['data'] !== '') ||
          (element['biz_type_list'] && element['biz_type_list'].length !== 1) ||
          (element['biz_type_list'] &&
            element['biz_type_list'][0] !== 'answer') ||
          element['type'] === 'ad';
        if (isAd === true) {
          return;
        }
        const authorName = element['author']['fullname'];
        const isBlackUser =
          typeof customBlockedUsers[authorName] != 'undefined';
        $.logger.debug(`用户${authorName}是否在黑名单中：${isBlackUser}`);
        if (
          $.data.read('zhihu_settings_blocked_users', false) === false ||
          isBlackUser === false
        ) {
          newData.push(element);
        }
      });
      obj.data = newData;
      response = { body: JSON.stringify(obj) };
    }
  } catch (err) {
    $.logger.error(`屏蔽回答信息流黑名单用户及广告：${err}`);
  }
  return response;
}
function changeUserCredit() {
  $.notification.debug('开始修改用户盐值');
  let response = null;
  try {
    if (!!$.response.body) {
      const score = parseInt($.data.read(userCreditScoreKey, 780));
      $.logger.debug(`准备修改用户盐值为${score}`);
      let obj = JSON.parse($.response.body);
      if (obj['credit_basis'].total_score < score) {
        obj['credit_basis'].total_score = score;
        $.logger.debug(`已修改用户盐值为:${score}`);
      }
      response = { body: JSON.stringify(obj) };
    }
  } catch (err) {
    $.logger.error(`修改用户盐值出现异常：${err}`);
  }
  return response;
}
(async () => {
  let response = null;
  if ($.isResponse) {
    switch (true) {
      case /^https:\/\/api\.zhihu\.com\/people\/self$/.test($.request.url):
        response = processUserInfo();
        break;
      case $.data.read('zhihu_settings_app_conf', false) === true &&
        /^https?:\/\/appcloud2\.zhihu\.com\/v\d+\/config/.test($.request.url):
        response = modifyAppConfig();
        break;
      case $.data.read('zhihu_settings_app_conf', false) === true &&
        /^https?:\/\/m-cloud\.zhihu\.com\/api\/cloud\/config\/all\?/.test(
          $.request.url
        ):
        response = modifyMCloudConfig();
        break;
      case $.data.read('zhihu_settings_app_conf', false) === true &&
        /^https?:\/\/api\.zhihu\.com\/feed\/render\/tab\/config/.test(
          $.request.url
        ):
        response = modifyAppTabConfig();
        break;
      case /^https?:\/\/api\.zhihu\.com\/user-credit\/basis/.test(
        $.request.url
      ):
        response = changeUserCredit();
        break;
      case /^https:\/\/api\.zhihu\.com\/topstory\/recommend/.test(
        $.request.url
      ):
        response = await removeRecommend();
        break;
      case /^https?:\/\/api\.zhihu\.com\/(v4\/)?questions\/\d+/.test(
        $.request.url
      ):
        response = removeQuestions();
        break;
      case /^https?:\/\/api\.zhihu\.com\/next-data\?/.test($.request.url):
        response = modifyAnswersNextData();
        break;
      case /^https?:\/\/api\.zhihu\.com\/next-bff\?/.test($.request.url):
        response = modifyAnswersNextBff();
        break;
      case /^https?:\/\/api\.zhihu\.com\/next-render\?/.test($.request.url):
        response = modifyAnswersNextRender();
        break;
      case $.data.read('zhihu_settings_sys_msg', true) !== false &&
        /^https?:\/\/api\.zhihu\.com\/notifications\/v3\/message/.test(
          $.request.url
        ):
        response = removeMarketingMsg();
        break;
      case /^https?:\/\/api\.zhihu\.com\/comment_v5\/(answers|pins|comments?|articles)\/\d+\/(root|child)_comment/.test(
        $.request.url
      ):
        response = removeComment();
        break;
      case /^https?:\/\/www\.zhihu\.com\/api\/v\d\/articles\/\d+\/recommendation\?/.test(
        $.request.url
      ):
        response = removeArticleAd();
        break;
      case /^https?:\/\/www\.zhihu\.com\/api\/v4\/comment_v5\/answers\/\d+\/abstract_comment\?/.test(
        $.request.url
      ):
        response = removeComment();
        break;
      case $.data.read('zhihu_settings_answer_tip', true) === true &&
        /^https?:\/\/www\.zhihu\.com\/appview\/v2\/answer\/.*(entry=(?!(preload-topstory|preload-search|preload-subscription)))?/.test(
          $.request.url
        ):
        response = modifyAnswer();
        break;
      case $.data.read('zhihu_settings_blocked_users', false) !== false &&
        /^https?:\/\/api\.zhihu\.com\/next\?/.test($.request.url):
        response = removeNextBlackUserAnswer();
        break;
      case $.data.read('zhihu_settings_blocked_users', true) === true &&
        /^https?:\/\/api\.zhihu\.com\/people\/((?!self).)*$/.test(
          $.request.url
        ):
        response = autoInsertBlackList();
        break;
      case /^https?:\/\/api\.zhihu\.com\/moments_v3\?/.test($.request.url):
        response = removeMoments();
        break;
      case $.data.read('zhihu_settings_hot_list', true) === true &&
        /^https?:\/\/api\.zhihu\.com\/topstory\/hot-lists(\?|\/)/.test(
          $.request.url
        ):
        response = removeHotListAds();
        break;
      case $.data.read('zhihu_settings_preset_words', true) === true &&
        /^https?:\/\/api\.zhihu\.com\/search\/preset_words\?/.test(
          $.request.url
        ):
        response = removeKeywordAds();
        break;
      case $.data.read('zhihu_settings_blocked_users', false) !== false &&
        /^https?:\/\/api\.zhihu\.com\/settings\/blocked_users/.test(
          $.request.url
        ):
        manageBlackUser();
        break;
      default:
        $.logger.debug('没有匹配到任何请求，请确认配置正确。');
        break;
    }
  } else if ($.isRequest) {
    if (
      $.data.read('zhihu_settings_blocked_keywords', false) !== false &&
      /^https?:\/\/api\.zhihu\.com\/feed-root\/block/.test($.request.url) ===
        true
    ) {
      response = unlockBlockedKeywords(response);
    }
  } else {
    $.data.del(currentUserInfoKey);
    $.data.del(blockedUsersKey);
    $.data.del(keywordBlockKey);
    $.notification.post('哲也同学数据清理完毕');
  }
  if (response) {
    $.done(response);
  } else {
    $.done();
  }
})();
function MagicJS(scriptName = 'MagicJS', logLevel = 'INFO') {
  const MagicEnvironment = () => {
    const isLoon = typeof $loon !== 'undefined';
    const isQuanX = typeof $task !== 'undefined';
    const isNode = typeof module !== 'undefined';
    const isSurge = typeof $httpClient !== 'undefined' && !isLoon;
    const isStorm = typeof $storm !== 'undefined';
    const isStash =
      typeof $environment !== 'undefined' &&
      typeof $environment['stash-build'] !== 'undefined';
    const isSurgeLike = isSurge || isLoon || isStorm || isStash;
    const isScriptable = typeof importModule !== 'undefined';
    return {
      isLoon: isLoon,
      isQuanX: isQuanX,
      isNode: isNode,
      isSurge: isSurge,
      isStorm: isStorm,
      isStash: isStash,
      isSurgeLike: isSurgeLike,
      isScriptable: isScriptable,
      get name() {
        if (isLoon) {
          return 'Loon';
        } else if (isQuanX) {
          return 'QuantumultX';
        } else if (isNode) {
          return 'NodeJS';
        } else if (isSurge) {
          return 'Surge';
        } else if (isScriptable) {
          return 'Scriptable';
        } else {
          return 'unknown';
        }
      },
      get build() {
        if (isSurge) {
          return $environment['surge-build'];
        } else if (isStash) {
          return $environment['stash-build'];
        } else if (isStorm) {
          return $storm.buildVersion;
        }
      },
      get language() {
        if (isSurge || isStash) {
          return $environment['language'];
        }
      },
      get version() {
        if (isSurge) {
          return $environment['surge-version'];
        } else if (isStash) {
          return $environment['stash-version'];
        } else if (isStorm) {
          return $storm.appVersion;
        } else if (isNode) {
          return process.version;
        }
      },
      get system() {
        if (isSurge) {
          return $environment['system'];
        } else if (isNode) {
          return process.platform;
        }
      },
      get systemVersion() {
        if (isStorm) {
          return $storm.systemVersion;
        }
      },
      get deviceName() {
        if (isStorm) {
          return $storm.deviceName;
        }
      }
    };
  };
  const MagicLogger = (scriptName, logLevel = 'INFO') => {
    let _level = logLevel;
    const logLevels = {
      CRITICAL: 0,
      DEBUG: 5,
      ERROR: 1,
      INFO: 4,
      NONE: -1,
      NOTIFY: 3,
      SNIFFER: 6,
      WARNING: 2
    };
    const logEmoji = {
      CRITICAL: '❌ ',
      DEBUG: '',
      ERROR: '❌ ',
      INFO: '',
      NONE: '',
      NOTIFY: '',
      SNIFFER: '',
      WARNING: '❗ '
    };
    const _log = (msg, level = 'INFO') => {
      if (!(logLevels[_level] < logLevels[level.toUpperCase()]))
        console.log(
          `[${level}] [${scriptName}]\n${logEmoji[level.toUpperCase()]}${msg}\n`
        );
    };
    const setLevel = logLevel => {
      _level = logLevel;
    };
    return {
      getLevel: () => {
        return _level;
      },
      setLevel: setLevel,
      sniffer: msg => {
        _log(msg, 'SNIFFER');
      },
      debug: msg => {
        _log(msg, 'DEBUG');
      },
      info: msg => {
        _log(msg, 'INFO');
      },
      notify: msg => {
        _log(msg, 'NOTIFY');
      },
      warning: msg => {
        _log(msg, 'WARNING');
      },
      error: msg => {
        _log(msg, 'ERROR');
      },
      retry: msg => {
        _log(msg, 'RETRY');
      }
    };
  };
  return new (class {
    constructor(scriptName, logLevel) {
      this._startTime = Date.now();
      this.version = '3.0.0';
      this.scriptName = scriptName;
      this.env = MagicEnvironment();
      this.logger = MagicLogger(scriptName, logLevel);
      this.http =
        typeof MagicHttp === 'function'
          ? MagicHttp(this.env, this.logger)
          : undefined;
      this.data =
        typeof MagicData === 'function'
          ? MagicData(this.env, this.logger)
          : undefined;
      this.notification =
        typeof MagicNotification === 'function'
          ? MagicNotification(this.scriptName, this.env, this.logger, this.http)
          : undefined;
      this.utils =
        typeof MagicUtils === 'function'
          ? MagicUtils(this.env, this.logger)
          : undefined;
      this.qinglong =
        typeof MagicQingLong === 'function'
          ? MagicQingLong(this.env, this.data, this.logger)
          : undefined;
      if (typeof this.data !== 'undefined') {
        let magicLoglevel = this.data.read('magic_loglevel');
        const barkUrl = this.data.read('magic_bark_url');
        if (magicLoglevel) {
          this.logger.setLevel(magicLoglevel.toUpperCase());
        }
        if (barkUrl) {
          this.notification.setBark(barkUrl);
        }
      }
    }
    get isRequest() {
      return (
        typeof $request !== 'undefined' && typeof $response === 'undefined'
      );
    }
    get isResponse() {
      return typeof $response !== 'undefined';
    }
    get isDebug() {
      return this.logger.level === 'DEBUG';
    }
    get request() {
      return typeof $request !== 'undefined' ? $request : undefined;
    }
    get response() {
      if (typeof $response !== 'undefined') {
        if ($response.hasOwnProperty('status'))
          $response['statusCode'] = $response['status'];
        if ($response.hasOwnProperty('statusCode'))
          $response['status'] = $response['statusCode'];
        return $response;
      } else {
        return undefined;
      }
    }
    done = (value = {}) => {
      this._endTime = Date.now();
      let span = (this._endTime - this._startTime) / 1e3;
      this.logger.info(`SCRIPT COMPLETED: ${span} S.`);
      if (typeof $done !== 'undefined') {
        $done(value);
      }
    };
  })(scriptName, logLevel);
}
function MagicNotification(scriptName, env, logger, http) {
  let _barkUrl = null;
  let _barkKey = null;
  const setBark = url => {
    try {
      let _url = url.replace(/\/+$/g, '');
      _barkUrl = `${/^https?:\/\/([^/]*)/.exec(_url)[0]}/push`;
      _barkKey = /\/([^\/]+)\/?$/.exec(_url)[1];
    } catch (ex) {
      logger.error(`Bark url error: ${ex}.`);
    }
  };
  function post(title = scriptName, subTitle = '', body = '', opts = '') {
    const _adaptOpts = _opts => {
      try {
        let newOpts = {};
        if (typeof _opts === 'string') {
          if (env.isLoon) newOpts = { openUrl: _opts };
          else if (env.isQuanX) newOpts = { 'open-url': _opts };
          else if (env.isSurge) newOpts = { url: _opts };
        } else if (typeof _opts === 'object') {
          if (env.isLoon) {
            newOpts['openUrl'] = !!_opts['open-url'] ? _opts['open-url'] : '';
            newOpts['mediaUrl'] = !!_opts['media-url']
              ? _opts['media-url']
              : '';
          } else if (env.isQuanX) {
            newOpts = !!_opts['open-url'] || !!_opts['media-url'] ? _opts : {};
          } else if (env.isSurge) {
            let openUrl = _opts['open-url'] || _opts['openUrl'];
            newOpts = openUrl ? { url: openUrl } : {};
          }
        }
        return newOpts;
      } catch (err) {
        logger.error(`通知选项转换失败${err}`);
      }
      return _opts;
    };
    opts = _adaptOpts(opts);
    if (arguments.length === 1) {
      title = scriptName;
      (subTitle = ''), (body = arguments[0]);
    }
    logger.notify(
      `title:${title}\nsubTitle:${subTitle}\nbody:${body}\noptions:${
        typeof opts === 'object' ? JSON.stringify(opts) : opts
      }`
    );
    if (env.isSurge) {
    } else if (env.isLoon) {
    } else if (env.isQuanX) {
    }
    if (_barkUrl && _barkKey) {
      bark(title, subTitle, body);
    }
  }
  function debug(title = scriptName, subTitle = '', body = '', opts = '') {
    if (logger.getLevel() === 'DEBUG') {
      if (arguments.length === 1) {
        title = scriptName;
        subTitle = '';
        body = arguments[0];
      }
      this.post(title, subTitle, body, opts);
    }
  }
  function bark(title = scriptName, subTitle = '', body = '', opts = '') {
    if (typeof http === 'undefined' || typeof http.post === 'undefined') {
      throw 'Bark notification needs to import MagicHttp module.';
    }
    let options = {
      url: _barkUrl,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: {
        title: title,
        body: subTitle ? `${subTitle}\n${body}` : body,
        device_key: _barkKey
      }
    };
    http.post(options).catch(ex => {
      logger.error(`Bark notify error: ${ex}`);
    });
  }
  return { post: post, debug: debug, bark: bark, setBark: setBark };
}
function MagicData(env, logger) {
  let node = { fs: undefined, data: {} };
  if (env.isNode) {
    node.fs = require('fs');
    try {
      node.fs.accessSync(
        './magic.json',
        node.fs.constants.R_OK | node.fs.constants.W_OK
      );
    } catch (err) {
      node.fs.writeFileSync('./magic.json', '{}', { encoding: 'utf8' });
    }
    node.data = require('./magic.json');
  }
  const defaultValueComparator = (oldVal, newVal) => {
    if (typeof newVal === 'object') {
      return false;
    } else {
      return oldVal === newVal;
    }
  };
  const _typeConvertor = val => {
    if (val === 'true') {
      return true;
    } else if (val === 'false') {
      return false;
    } else if (typeof val === 'undefined') {
      return null;
    } else {
      return val;
    }
  };
  const _valConvertor = (val, default_, session, read_no_session) => {
    if (session) {
      try {
        if (typeof val === 'string') val = JSON.parse(val);
        if (val['magic_session'] === true) {
          val = val[session];
        } else {
          val = null;
        }
      } catch {
        val = null;
      }
    }
    if (typeof val === 'string' && val !== 'null') {
      try {
        val = JSON.parse(val);
      } catch {}
    }
    if (read_no_session === false && !!val && val['magic_session'] === true) {
      val = null;
    }
    if (
      (val === null || typeof val === 'undefined') &&
      default_ !== null &&
      typeof default_ !== 'undefined'
    ) {
      val = default_;
    }
    val = _typeConvertor(val);
    return val;
  };
  const convertToObject = obj => {
    if (typeof obj === 'string') {
      let data = {};
      try {
        data = JSON.parse(obj);
        const type = typeof data;
        if (
          type !== 'object' ||
          data instanceof Array ||
          type === 'bool' ||
          data === null
        ) {
          data = {};
        }
      } catch {}
      return data;
    } else if (
      obj instanceof Array ||
      obj === null ||
      typeof obj === 'undefined' ||
      obj !== obj ||
      typeof obj === 'boolean'
    ) {
      return {};
    } else {
      return obj;
    }
  };
  const readForNode = (
    key,
    default_ = null,
    session = '',
    read_no_session = false,
    externalData = null
  ) => {
    let data = externalData || node.data;
    if (!!data && typeof data[key] !== 'undefined' && data[key] !== null) {
      val = data[key];
    } else {
      val = !!session ? {} : null;
    }
    val = _valConvertor(val, default_, session, read_no_session);
    return val;
  };
  const read = (
    key,
    default_ = null,
    session = '',
    read_no_session = false,
    externalData = null
  ) => {
    let val = '';
    if (externalData || env.isNode) {
      val = readForNode(key, default_, session, read_no_session, externalData);
    } else {
      if (env.isSurgeLike) {
        val = $persistentStore.read(key);
      } else if (env.isQuanX) {
        val = $prefs.valueForKey(key);
      }
      val = _valConvertor(val, default_, session, read_no_session);
    }
    logger.debug(
      `READ DATA [${key}]${
        !!session ? `[${session}]` : ''
      } <${typeof val}>\n${JSON.stringify(val)}`
    );
    return val;
  };
  const writeForNode = (key, val, session = '', externalData = null) => {
    let data = externalData || node.data;
    data = convertToObject(data);
    if (!!session) {
      let obj = convertToObject(data[key]);
      obj['magic_session'] = true;
      obj[session] = val;
      data[key] = obj;
    } else {
      data[key] = val;
    }
    if (externalData !== null) {
      externalData = data;
    }
    return data;
  };
  const write = (key, val, session = '', externalData = null) => {
    if (typeof val === 'undefined' || val !== val) {
      return false;
    }
    if (!env.isNode && (typeof val === 'boolean' || typeof val === 'number')) {
      val = String(val);
    }
    let data = '';
    if (externalData || env.isNode) {
      data = writeForNode(key, val, session, externalData);
    } else {
      if (!session) {
        data = val;
      } else {
        if (env.isSurgeLike) {
          data = !!$persistentStore.read(key)
            ? $persistentStore.read(key)
            : data;
        } else if (env.isQuanX) {
          data = !!$prefs.valueForKey(key) ? $prefs.valueForKey(key) : data;
        }
        data = convertToObject(data);
        data['magic_session'] = true;
        data[session] = val;
      }
    }
    if (!!data && typeof data === 'object') {
      data = JSON.stringify(data, null, 4);
    }
    logger.debug(
      `WRITE DATA [${key}]${
        session ? `[${session}]` : ''
      } <${typeof val}>\n${JSON.stringify(val)}`
    );
    if (!externalData) {
      if (env.isSurgeLike) {
        return $persistentStore.write(data, key);
      } else if (env.isQuanX) {
        return $prefs.setValueForKey(data, key);
      } else if (env.isNode) {
        try {
          node.fs.writeFileSync('./magic.json', data);
          return true;
        } catch (err) {
          logger.error(err);
          return false;
        }
      }
    }
    return true;
  };
  const update = (
    key,
    val,
    session,
    comparator = defaultValueComparator,
    externalData = null
  ) => {
    val = _typeConvertor(val);
    const oldValue = read(key, null, session, false, externalData);
    if (comparator(oldValue, val) === true) {
      return false;
    } else {
      const result = write(key, val, session, externalData);
      let newVal = read(key, null, session, false, externalData);
      if (comparator === defaultValueComparator && typeof newVal === 'object') {
        return result;
      }
      return comparator(val, newVal);
    }
  };
  const delForNode = (key, session, externalData) => {
    let data = externalData || node.data;
    data = convertToObject(data);
    if (!!session) {
      obj = convertToObject(data[key]);
      delete obj[session];
      data[key] = obj;
    } else {
      delete data[key];
    }
    if (!!externalData) {
      externalData = data;
    }
    return data;
  };
  const del = (key, session = '', externalData = null) => {
    let data = {};
    if (externalData || env.isNode) {
      data = delForNode(key, session, externalData);
      if (!externalData) {
        node.fs.writeFileSync('./magic.json', JSON.stringify(data, null, 4));
      } else {
        externalData = data;
      }
    } else {
      if (!session) {
        if (env.isStorm) {
          return $persistentStore.remove(key);
        } else if (env.isSurgeLike) {
          return $persistentStore.write(null, key);
        } else if (env.isQuanX) {
          return $prefs.removeValueForKey(key);
        }
      } else {
        if (env.isSurgeLike) {
          data = $persistentStore.read(key);
        } else if (env.isQuanX) {
          data = $prefs.valueForKey(key);
        }
        data = convertToObject(data);
        delete data[session];
        const json = JSON.stringify(data, null, 4);
        write(key, json);
      }
    }
    logger.debug(`DELETE KEY [${key}]${!!session ? `[${session}]` : ''}`);
  };
  const allSessionNames = (key, externalData = null) => {
    let _sessions = [];
    let data = read(key, null, null, true, externalData);
    data = convertToObject(data);
    if (data['magic_session'] !== true) {
      _sessions = [];
    } else {
      _sessions = Object.keys(data).filter(key => key !== 'magic_session');
    }
    logger.debug(
      `READ ALL SESSIONS [${key}] <${typeof _sessions}>\n${JSON.stringify(
        _sessions,
        null,
        4
      )}`
    );
    return _sessions;
  };
  const allSessions = (key, externalData = null) => {
    let _sessions = {};
    let data = read(key, null, null, true, externalData);
    data = convertToObject(data);
    if (data['magic_session'] === true) {
      _sessions = { ...data };
      delete _sessions['magic_session'];
    }
    logger.debug(
      `READ ALL SESSIONS [${key}] <${typeof _sessions}>\n${JSON.stringify(
        _sessions,
        null,
        4
      )}`
    );
    return _sessions;
  };
  return {
    allSessionNames: allSessionNames,
    allSessions: allSessions,
    convertToObject: convertToObject,
    defaultValueComparator: defaultValueComparator,
    del: del,
    read: read,
    update: update,
    write: write
  };
}
function MagicHttp(env, logger) {
  let axiosInstance;
  if (env.isNode) {
    const axios = require('axios');
    axiosInstance = axios.create();
  }
  class InterceptorManager {
    constructor(isRequest = true) {
      this.handlers = [];
      this.isRequest = isRequest;
    }
    use(fulfilled, rejected, options) {
      if (typeof fulfilled === 'function') {
        logger.debug(`Register fulfilled ${fulfilled.name}`);
      }
      if (typeof rejected === 'function') {
        logger.debug(`Register rejected ${rejected.name}`);
      }
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous:
          options && typeof options.synchronous === 'boolean'
            ? options.synchronous
            : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    forEach(fn) {
      this.handlers.forEach(element => {
        if (element !== null) {
          fn(element);
        }
      });
    }
  }
  function paramsToQueryString(config) {
    let _config = { ...config };
    if (!!_config.params) {
      if (!env.isNode) {
        let qs = Object.keys(_config.params)
          .map(key => {
            const encodeKey = encodeURIComponent(key);
            _config.url = _config.url.replace(
              new RegExp(`${key}=[^&]*`, 'ig'),
              ''
            );
            _config.url = _config.url.replace(
              new RegExp(`${encodeKey}=[^&]*`, 'ig'),
              ''
            );
            return `${encodeKey}=${encodeURIComponent(_config.params[key])}`;
          })
          .join('&');
        if (_config.url.indexOf('?') < 0) _config.url += '?';
        if (!/(&|\?)$/g.test(_config.url)) {
          _config.url += '&';
        }
        _config.url += qs;
        delete _config.params;
        logger.debug(`Params to QueryString: ${_config.url}`);
      }
    }
    return _config;
  }
  const mergeConfig = (method, configOrUrl) => {
    let config =
      typeof configOrUrl === 'object'
        ? { headers: {}, ...configOrUrl }
        : { url: configOrUrl, headers: {} };
    if (!config.method) {
      config['method'] = method;
    }
    config = paramsToQueryString(config);
    if (config['rewrite'] === true) {
      if (env.isSurge) {
        config.headers['X-Surge-Skip-Scripting'] = false;
        delete config['rewrite'];
      } else if (env.isQuanX) {
        config['hints'] = false;
        delete config['rewrite'];
      }
    }
    if (env.isSurgeLike) {
      const contentType =
        config.headers['content-type'] || config.headers['Content-Type'];
      if (
        config['method'] !== 'GET' &&
        contentType &&
        contentType.indexOf('application/json') >= 0 &&
        config.body instanceof Array
      ) {
        config.body = JSON.stringify(config.body);
        logger.debug(`Convert Array object to String: ${config.body}`);
      }
    } else if (env.isQuanX) {
      if (config.hasOwnProperty('body') && typeof config['body'] !== 'string')
        config['body'] = JSON.stringify(config['body']);
      config['method'] = method;
    } else if (env.isNode) {
      if (
        method === 'POST' ||
        method === 'PUT' ||
        method === 'PATCH' ||
        method === 'DELETE'
      ) {
        config.data = config.data || config.body;
      } else if (method === 'GET') {
        config.params = config.params || config.body;
      }
      delete config.body;
    }
    return config;
  };
  const modifyResponse = (resp, config = null) => {
    if (resp) {
      let _resp = {
        ...resp,
        config: resp.config || config,
        status: resp.statusCode || resp.status,
        body: resp.body || resp.data,
        headers: resp.headers || resp.header
      };
      if (typeof _resp.body === 'string') {
        try {
          _resp.body = JSON.parse(_resp.body);
        } catch {}
      }
      delete _resp.data;
      return _resp;
    } else {
      return resp;
    }
  };
  const convertHeadersToLowerCase = headers => {
    return Object.keys(headers).reduce((acc, key) => {
      acc[key.toLowerCase()] = headers[key];
      return acc;
    }, {});
  };
  const convertHeadersToCamelCase = headers => {
    return Object.keys(headers).reduce((acc, key) => {
      const newKey = key
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join('-');
      acc[newKey] = headers[key];
      return acc;
    }, {});
  };
  const raiseExceptionByStatusCode = (resp, config = null) => {
    if (!!resp && resp.status >= 400) {
      logger.debug(`Raise exception when status code is ${resp.status}`);
      return {
        name: 'RequestException',
        message: `Request failed with status code ${resp.status}`,
        config: config || resp.config,
        response: resp
      };
    }
  };
  const interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(false)
  };
  let requestInterceptorChain = [];
  let responseInterceptorChain = [];
  let synchronousRequestInterceptors = true;
  function interceptConfig(config) {
    config = paramsToQueryString(config);
    logger.debug(
      `HTTP ${config['method'].toUpperCase()}:\n${JSON.stringify(config)}`
    );
    return config;
  }
  function interceptResponse(resp) {
    try {
      resp = !!resp ? modifyResponse(resp) : resp;
      logger.sniffer(
        `HTTP ${resp.config['method'].toUpperCase()}:\n${JSON.stringify(
          resp.config
        )}\nSTATUS CODE:\n${resp.status}\nRESPONSE:\n${
          typeof resp.body === 'object' ? JSON.stringify(resp.body) : resp.body
        }`
      );
      const err = raiseExceptionByStatusCode(resp);
      if (!!err) {
        return Promise.reject(err);
      }
      return resp;
    } catch (err) {
      logger.error(err);
      return resp;
    }
  }
  const registerInterceptors = config => {
    try {
      requestInterceptorChain = [];
      responseInterceptorChain = [];
      interceptors.request.forEach(interceptor => {
        if (
          typeof interceptor.runWhen === 'function' &&
          interceptor.runWhen(config) === false
        ) {
          return;
        }
        synchronousRequestInterceptors =
          synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(
          interceptor.fulfilled,
          interceptor.rejected
        );
      });
      interceptors.response.forEach(interceptor => {
        responseInterceptorChain.push(
          interceptor.fulfilled,
          interceptor.rejected
        );
      });
    } catch (err) {
      logger.error(`Failed to register interceptors: ${err}.`);
    }
  };
  const request = (method, config) => {
    let dispatchRequest;
    const _method = method.toUpperCase();
    config = mergeConfig(_method, config);
    if (env.isNode) {
      dispatchRequest = axiosInstance;
    } else {
      if (env.isSurgeLike) {
        dispatchRequest = config => {
          return new Promise((resolve, reject) => {
            $httpClient[method.toLowerCase()](config, (err, resp, body) => {
              if (err) {
                let newErr = {
                  config: config,
                  message: err.message || err,
                  name: err.name || err,
                  response: modifyResponse(resp),
                  stack: err.stack || err
                };
                reject(newErr);
              } else {
                resp.config = config;
                resp.body = body;
                resolve(resp);
              }
            });
          });
        };
      } else {
        dispatchRequest = config => {
          return new Promise((resolve, reject) => {
            $task
              .fetch(config)
              .then(resp => {
                resp = modifyResponse(resp, config);
                const err = raiseExceptionByStatusCode(resp, config);
                if (err) {
                  return Promise.reject(err);
                }
                resolve(resp);
              })
              .catch(err => {
                let newErr = {
                  config: config,
                  message: err.message || err.error,
                  name: err.message || err.error,
                  response: !!err.response
                    ? modifyResponse(err.response)
                    : null,
                  stack: err.error
                };
                reject(newErr);
              });
          });
        };
      }
    }
    let promise;
    registerInterceptors(config);
    const defaultRequestInterceptors = [interceptConfig, undefined];
    const defaultResponseInterceptors = [interceptResponse, undefined];
    if (!synchronousRequestInterceptors) {
      logger.debug('Interceptors are executed in asynchronous mode');
      let chain = [dispatchRequest, undefined];
      Array.prototype.unshift.apply(chain, defaultRequestInterceptors);
      Array.prototype.unshift.apply(chain, requestInterceptorChain);
      chain = chain.concat(defaultResponseInterceptors);
      chain = chain.concat(responseInterceptorChain);
      promise = Promise.resolve(config);
      while (chain.length) {
        try {
          let onFulfilled = chain.shift();
          let onRejected = chain.shift();
          if (
            !env.isNode &&
            config['timeout'] &&
            onFulfilled === dispatchRequest
          ) {
            onFulfilled = requestTimeout;
          }
          if (typeof onFulfilled === 'function') {
            logger.debug(`Executing request fulfilled ${onFulfilled.name}`);
          }
          if (typeof onRejected === 'function') {
            logger.debug(`Executing request rejected ${onRejected.name}`);
          }
          promise = promise.then(onFulfilled, onRejected);
        } catch (err) {
          logger.error(`request exception: ${err}`);
        }
      }
      return promise;
    } else {
      logger.debug('Interceptors are executed in synchronous mode');
      Array.prototype.unshift.apply(
        requestInterceptorChain,
        defaultRequestInterceptors
      );
      requestInterceptorChain = requestInterceptorChain.concat([
        interceptConfig,
        undefined
      ]);
      while (requestInterceptorChain.length) {
        let onFulfilled = requestInterceptorChain.shift();
        let onRejected = requestInterceptorChain.shift();
        try {
          if (typeof onFulfilled === 'function') {
            logger.debug(`Executing request fulfilled ${onFulfilled.name}`);
          }
          config = onFulfilled(config);
        } catch (error) {
          if (typeof onRejected === 'function') {
            logger.debug(`Executing request rejected ${onRejected.name}`);
          }
          onRejected(error);
          break;
        }
      }
      try {
        if (!env.isNode && config['timeout']) {
          promise = requestTimeout(config);
        } else {
          promise = dispatchRequest(config);
        }
      } catch (err) {
        return Promise.reject(err);
      }
      Array.prototype.unshift.apply(
        responseInterceptorChain,
        defaultResponseInterceptors
      );
      while (responseInterceptorChain.length) {
        promise = promise.then(
          responseInterceptorChain.shift(),
          responseInterceptorChain.shift()
        );
      }
      return promise;
    }
    function requestTimeout(config) {
      try {
        const timer = new Promise((_, reject) => {
          setTimeout(() => {
            let err = {
              message: `timeout of ${config['timeout']}ms exceeded.`,
              config: config
            };
            reject(err);
          }, config['timeout']);
        });
        return Promise.race([dispatchRequest(config), timer]);
      } catch (err) {
        logger.error(`Request Timeout exception: ${err}.`);
      }
    }
  };
  return {
    convertHeadersToCamelCase: convertHeadersToCamelCase,
    convertHeadersToLowerCase: convertHeadersToLowerCase,
    interceptors: interceptors,
    modifyResponse: modifyResponse,
    request: request,
    get: configOrUrl => {
      return request('GET', configOrUrl);
    },
    post: configOrUrl => {
      return request('POST', configOrUrl);
    },
    put: configOrUrl => {
      return request('PUT', configOrUrl);
    },
    patch: configOrUrl => {
      return request('PATCH', configOrUrl);
    },
    delete: configOrUrl => {
      return request('DELETE', configOrUrl);
    },
    head: configOrUrl => {
      return request('HEAD', configOrUrl);
    },
    options: configOrUrl => {
      return request('OPTIONS', configOrUrl);
    }
  };
}
