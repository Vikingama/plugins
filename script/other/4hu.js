let Old = '</body>';
let New =
  '<link rel="stylesheet" href="https://raw.githubusercontent.com/Vikingama/plugins/main/web/4hu.css" type="text/css"><script type="text/javascript"  src="https://raw.githubusercontent.com/Vikingama/plugins/main/web/4hu.js"></script></body>';
let body = $response.body.replace(Old, New);
$done({ body });
