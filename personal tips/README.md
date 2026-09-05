# 优势罗盘 GitHub Pages 部署包

本目录是无需服务器、数据库或构建工具的静态网站版本，包含完整测试、五维性格雷达图、职业方向、结果卡片、非临床测评声明、隐私政策和退款规则。

## 文件说明

- `index.html`：网站首页与测试界面
- `app.js`：题目、评分、结果报告和卡片生成功能
- `styles.css`：测试页面样式
- `disclaimer.html`：非临床测评声明
- `privacy.html`：隐私政策
- `refund.html`：退款规则
- `legal.css`：政策页面样式

## 上传到 GitHub Pages

1. 在 GitHub 新建一个仓库。使用免费账户时，请将仓库设为 `Public`。
2. 解压下载的 ZIP。GitHub 网页不会自动解压 ZIP，因此请上传解压后的全部文件，而不是只上传压缩包。
3. 确保 `index.html` 位于仓库根目录，不要在外面再套一层文件夹。
4. 打开仓库的 `Settings`，进入 `Pages`。
5. 在 `Build and deployment` 中选择 `Deploy from a branch`。
6. 分支选择 `main`，目录选择 `/(root)`，点击 `Save`。
7. 等待发布完成。GitHub 提示可能需要最多约10分钟。

普通项目仓库的访问地址通常为：

```text
https://你的GitHub用户名.github.io/仓库名称/
```

如果仓库名称设置为 `你的GitHub用户名.github.io`，访问地址通常为：

```text
https://你的GitHub用户名.github.io/
```

GitHub 官方说明：<https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site>

## 上线前注意事项

- 当前支付按钮处于演示状态，不会真实收款。
- 正式接入9.9元支付前，需要填写经营主体、客服联系方式和支付服务商信息，并复核退款规则。
- 用户昵称、答案和结果在浏览器本地处理；如后续增加账户、统计或支付功能，应同步更新隐私政策。
- GitHub Pages 网站默认可以被互联网访问，不要在仓库中放入密码、密钥、订单信息或其他敏感数据。

## 本地查看

可直接双击 `index.html` 进行基本预览。结果卡片下载等功能在正式网页地址下运行更稳定，建议完成 GitHub Pages 发布后再做最终测试。
