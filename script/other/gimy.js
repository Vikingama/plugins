let Old = '</body>';
let New =
  '<link rel="stylesheet" href="https://raw.githubusercontent.com/Vikingama/plugins/main/web/gimy.css" type="text/css"><script type="text/javascript" src="https://raw.githubusercontent.com/Vikingama/plugins/main/web/gimy.js"></script></body>';
let body = $response.body.replace(Old, New);
$done({ body });
