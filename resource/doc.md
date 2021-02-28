## vue-swiper API 文档

https://www.swiper.com.cn/api/index.html

## 跨域的几种实现方式

1. nginx 代理
   这种方式本地和线上的开发方式都比较简单；本地不需要添加.env.dev 和.env.prod 配置，以及 config.js 文件，只需要关系 vue.config.js 然后做环境地阿里即可；不同的环境，设置不同的代理域名

2. CORS 解决跨域
   这种方式不需要配置 nginx；但是本地需要维护多套环境，根据 process.env.NODE_DEV 来切换开发和线上环境地址；config 中做切换；

线上 nginx 配置：
location /api/ {
proxy_pass http://mall-pre.springboot.cn/;
}
线上 nginx 配置的时候，代理域名后面需要加/,这样在请求的时候会去掉/api，否则请求的时候会包含/api

## swiper 中文文档

https://www.swiper.com.cn/

## Css3 动画库

https://daneden.github.io/animate.css/

## 微信扫码支付开发文档

https://pay.weixin.qq.com/wiki/doc/api/index.html

https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=6_5

## 项目部署说明

1. 登录服务器
   ssh root@ip
   如何连接不成功，请绑定密钥对，通过 ssh -i 密钥路径 root@ip 访问；
2. 进入到服务器根目录
   cd /

3. 下载软件安装包
   a. rpm
   b. apt-get 可以用于运作 deb 包，例如在 Ubuntu 系统上对某个软件的管理：
   安装：apt-get install
   卸载：apt-get remove
   更新：apt-get update

c.yum 可以用于运作 rpm 包,类似仓库。如对包的管理操作：
安装：yum install
卸载：yum remove
更新：yum update

d.wget + 下载链接
Nodejs: wget https://npm.taobao.org/mirrors/node/v12.14.0/node-v12.14.0-linux-x64.tar.xz

SFTP 安装：
参考百度云文档：https://cloud.baidu.com/doc/BCC/s/ljxlpwkwv

解压缩文件：
tar -zxvf 压缩文件名.tar.gz
tar -xvf 压缩文件名.tar

# nginx 编译如果报错，需要安装编译器

yum install gcc gcc-c++ glibc -y  
yum install pcre-devel zlib-devel openssl-devel –y

# 指定安装路径

./configure --prefix=/usr/local/bin/nginx

4. 配置环境变量
   ln -s /soft/node-v12.14.0/bin/node /usr/local/bin/node
   ln -s /soft/node-v12.14.0/bin/npm /usr/local/bin/npm
