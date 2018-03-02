# vue-vux-iconan
vue-vux搭建的webapp和混合应用

``` bash
# 初始化
npm install

# 开发模式，端口7070
gulp dev
gulp dev -e test
gulp dev -e production

# 在安卓手机上调试（插好USB线）
gulp run.android
gulp run.android -e test
gulp run.android -e production

# 打包webapp
gulp build
gulp build -t webapp
gulp build -t webapp -e test
gulp build -t webapp -e production

# 打包安卓apk
gulp build -t mobile
gulp build -t mobile -e test
gulp build -t mobile -e production
```

# 在线预览地址
http://meleong.duapp.com/iconan/index.html
  
![iconan在线预览二维码](https://github.com/shamoyuu/picture/blob/master/iconan.jpg)
