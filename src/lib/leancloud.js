
var AV = require('leancloud-storage');
var { Realtime } = require('leancloud-realtime');

var APP_ID = 'uJppLrGaJYubfmUeNSOpg2w4-gzGzoHsz';
var APP_KEY = 'A4RW0CTzwIpLdQKux02HBQ3D';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV