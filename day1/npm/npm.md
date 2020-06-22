## 第三方模块
- 通过npm安装 node package manager
### 全局安装 -g （只能在命令行中使用）
默认的本地安装路径是 npm root -g

```
npm install nrm -g // nrm改变npm源地址的 node registry manager
nrm ls // 显示所有可用源 taobao cnpm 等等
nrm test // 显示所有源的速度
nrm use taobao // 切换源
// nrm不会自动加入windows环境变量中,而是通过npm文件夹里面的快捷方式映射

npm i http-server -g // 在需要起服务的文件夹打开命令行，输入http-server
// 可以在本地和局域网起服务，手机可以访问
```


###本地安装
- 不要-g参数，安装之前需要初始化，记录安装依赖的

```
npm init // 初始化，产生package.json
// 如果没有这个初始化，本地安装默认先找当前目录的package.json,找不到会往上层目录找，都找不到才安装到当前目录，很可能会发生装到上层目录的非期望结果。所以一定要先init生成packge.json.
```

> package.json , 目录不能有中文，特殊字符，大写， package.json中可以配scripts配置快捷命令

#### 项目依赖
- 开发时使用，线上也需要
```$xslt
npm install jquery --save // 新版node不用加save，会写到package.json的依赖中，默认时项目依赖
```

#### 开发依赖
- 开发时使用，线上不用
```$xslt
npm install less --save --dev // --dev 开发依赖
```

## 想发包
- 先回到npm, nrm use npm
- 包名不能和已有的包一致
- 入口文件，做整合用的
- 注册npm账号，登录
- 发布npm包
```$xslt
npm publish
```

## 使用npm包

- require('vue')，默认node_modules文件夹，引包中package.json中的main。 本node_modules找不到，会往上层文件夹找node_modules，直到计算机根目录为止
