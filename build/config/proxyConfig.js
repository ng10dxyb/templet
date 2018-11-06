
import ip from 'ip'; //ip地址

export default {
  devServerPort: 6888, // 开发服务器端口号
  proxyTarget: `http://${ip.address()}:6888`, // 代理目标API
  bkdServerPort: 6888
}
