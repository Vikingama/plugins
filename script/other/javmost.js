let regex_1 = '<title>';
let body_1 =
  '<link rel="stylesheet" href="https://raw.githubusercontent.com/Vikingama/plugins/main/web/javmost.css" type="text/css"><script type="text/javascript" async="async" src="https://raw.githubusercontent.com/Vikingama/plugins/main/web/javmost.js"></script><title>';
let body = $response.body.replace(regex_1, body_1);
$done({ body });
