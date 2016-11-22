# express-node-server 
A basic express-node-server update architecture

注意：下载本项目的同时，请下载react-redux-webpack前端项目。  

一个基于express实现的node服务器，跟我在git上开源的另外一个前端版本做前后端交互，本项目实现了服务器端返回index.html模板，
解决了跨域访问接口和cookie不能跨域存储的问题。

#### 安装

克隆开源代码到本地
```
git clone https://github.com/hyy1115/node-express-server.git  
```

安装依赖包
```
npm install
```

运行服务器，开启9009端口
```
npm start
```

前端代码访问首页，请在浏览器输入服务器地址，原理就是由服务器端返回html。
```
http://localhost:9000
```