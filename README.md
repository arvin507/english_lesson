# English Zero

面向小学 2 升 3 孩子的暑期英语打基础静态课程。

## 本地预览

这个项目是纯静态页面，不需要后端服务。因为页面使用了 JavaScript ES Module，本地双击打开 HTML 可能会被浏览器拦截模块加载。建议在项目目录启动一个临时静态服务器预览：

```powershell
python -m http.server 8000
```

然后打开：

```text
http://localhost:8000/
```

## 发布到 GitHub Pages

可以直接发布整个仓库根目录，不需要构建步骤。

推荐设置：

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

发布后访问 GitHub Pages 地址即可使用。进度会保存在当前设备浏览器的 `localStorage` 中，不依赖后端。

## 更新后刷新缓存

HTML 中的 CSS 和 JS 引用带有版本号，例如：

```html
assets/js/app.js?v=202607051548
```

每次更新课程内容、样式或脚本后，把 `index.html`、`lesson.html`、`onboarding.html` 和 `assets/js/app.js` 里的版本号统一改成新的时间戳，例如 `202607061030`。这样 GitHub Pages 发布后，浏览器会自动拉取新资源。

## 当前课程内容

当前页面已按讲义融合版落地 Day 0 和前两周课程：

- Day 0：学会听音、录音、回放、完成课程
- Week 1：字母声音地图 A-Q
- Week 2：完成 26 个字母声音，并进入短音 a/e 词族

系统化课程设计见：

- [`docs/curriculum-shirley-integrated-v3.md`](docs/curriculum-shirley-integrated-v3.md)
- [`docs/oral-english-integration.md`](docs/oral-english-integration.md)
- [`docs/curriculum-system-v2.md`](docs/curriculum-system-v2.md)
