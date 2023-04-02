const Group = $prefs.valueForKey('BiliArea_Policy') || '港台番剧';
const message = {
  action: 'set_policy_state',
  content: { [Group]: 'direct' }
};

$configuration.sendMessage(message).then(
  resolve => {
    $done();
  },
  reject => {
    $done();
  }
);
