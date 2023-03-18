function current() {
  var d = new Date(),
    ear = d.getFullYear();
  onth = d.getMonth();
  atex = d.getDate();
  if (d.getHours() < 10) {
    ours = '0' + d.getHours();
  } else {
    ours = d.getHours();
  }
  inutes = d.getMinutes();
  return (
    ear + '-' + onth + '-' + atex + '%2' + ours + '%3A' + inutes + '%3A' + '01'
  );
}
let strx = 'CFWztgFirstShowTime_2899_Cookie = ';
let timex = current();
let total = strx + timex;
document.cookie = total;
var websiteTitle = document.title;
var keyword_1 = 'Attention';
var keyword_2 = 'Cloudflare';
var results_1 = websiteTitle.search(keyword_1);
var results_2 = websiteTitle.search(keyword_2);
var reference_0 = '0';
if (results_1 >= reference_0 || results_2 >= reference_0) {
  window.location.reload();
}
