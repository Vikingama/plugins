let body = JSON.parse($response.body);
if (!body.data?.ad) {
} else {
  body.data.ad = null;
}
body = JSON.stringify(body);
$done({
  body
});
