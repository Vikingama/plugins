let rHead = '<head>';
let newStyle =
  '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/Vikingama/plugins/main/web/avple.css" type="text/css">';
let rBody = '</body>';
let newJavaScript =
  '<script type="text/javascript" src="https://raw.githubusercontent.com/Vikingama/plugins/main/web/avple.js"></script></body>';
let body = $response.body
  .replace(rHead, newStyle)
  .replace(rBody, newJavaScript);
$done({ body });
