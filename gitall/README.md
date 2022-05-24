## github 访问配置
### 国内访问慢点解决办法
#### ping github.com 查看链接情况
#### 修改hosts文件

```
修改完hosts文件，记着刷新DNS
Mac OS X v10.6 及以上

sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder;say DNS cache has been flushed
window：

在cmd命令行执行 ipconfig /flushdns 
几个解决方案地址参考 push代码都不理想 看运气
https://baijiahao.baidu.com/s?id=1717359593414824641&wfr=spider&for=pc

```

### 配置默认访问账户
### ssh 配置
1. 本地创间密钥
2. 复制密钥
3. github-settings-

### vscode 登录github账户

git push origin develop 弹出vs登录github授权弹框 
确认跳转网页授权
服务器无法访问 尝试其他方案
输入验证码授权