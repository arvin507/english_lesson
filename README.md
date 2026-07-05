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

## 当前课程内容

当前页面已落地 Day 0 和前两周课程：

- Day 0：学会听音、录音、回放、完成课程
- Week 1：辅音开头音、短元音 a、声音拼读、-at / -an 词族、综合复习
- Week 2：辅音扩展、短元音 i、-it / -in / -ig 词族、阶段复习

系统化 8 周课程设计见：

- [`docs/curriculum-system-v2.md`](docs/curriculum-system-v2.md)
