# English Zero 完整开发计划

## 1. 项目目标

基于 `lesson_design.md` 的课程规范，开发一个面向 7~10 岁零基础儿童的静态英语学习前端。

核心目标：

- 用静态网页承载 8 周英语启蒙课程。
- 让孩子打开页面后知道自己应该学哪一课。
- 每课提供标准发音参照、跟读录音与回放对比。
- 不做自动评分、不做账号系统、不做后端服务。
- 以最低工程复杂度支持后续逐步扩展到完整课程。

## 2. 技术方案

采用纯前端静态实现：

- HTML：页面结构。
- CSS：视觉样式与响应式布局。
- Vanilla JavaScript：课程渲染、进度记录、音频播放、录音回放与页面跳转。

核心结论：

- 使用纯 `HTML + CSS + Vanilla JavaScript`。
- 不引入前端框架。
- 不引入构建工具作为首批必需项。
- 不依赖后端、数据库或账号系统。
- 所有课程数据先以本地 JS 数据文件维护。

## 3. 音频策略

音频分为开发阶段和正式阶段。

### 3.1 开发阶段：浏览器 TTS

开发初期使用浏览器内置 `speechSynthesis` 播放标准音，降低准备音频素材的成本。

适用内容：

- 单词：cat / hat / bat。
- 短句：A cat. / I see a cat.
- 引导提示语。

优点：

- 无需提前制作 mp3。
- 便于快速验证课程流程。
- 适合最小切片阶段。

限制：

- 不同浏览器、系统和设备的声音质量不一致。
- 离线能力取决于设备和浏览器。
- 儿童英语启蒙场景下，长期正式使用仍建议准备真人或高质量合成音频。

### 3.2 正式阶段：本地 mp3 优先，TTS 兜底

正式阶段优先播放本地 mp3 文件；当某个音频缺失或播放失败时，再使用浏览器 TTS 兜底。

策略：

1. 如果课程数据中存在 `audio` 路径，优先使用 `<audio>` 播放本地 mp3。
2. 如果 mp3 加载失败，调用浏览器 TTS 播放对应文本。
3. 如果浏览器不支持 TTS，则显示文字提示，让孩子或家长知道当前设备无法播放标准音。

核心结论：

- 正式阶段支持本地 mp3 优先，TTS 兜底。
- 静态前端不直接调用第三方 TTS API。
- 第三方 TTS 如需使用，应在离线制作阶段生成音频文件，再放入项目资源目录。

## 4. 页面结构

建议页面分为三类：

### 4.1 首页

职责：

- 读取 `localStorage` 中的进度。
- 判断孩子当前应该进入 Day 0、下一节课或复习课。
- 提供“继续学习”入口。
- 提供课程列表入口，便于家长查看。

### 4.2 Day 0 引导页

职责：

- 说明如何点击播放标准音。
- 说明如何录音、停止录音、回放自己的声音。
- 说明如何点击“完成本课”进入下一课。
- 只在首次使用时作为启动引导。

### 4.3 课程页

职责：

- 根据课程 ID 渲染课程内容。
- 展示 Review / New Sound / Word Practice / Reading / Practice Game / Summary。
- 提供标准音播放按钮。
- 提供录音、停止、回放按钮。
- 点击完成后写入本地进度，并进入下一课。

## 5. 文件结构

完整开发阶段建议结构：

```text
english_lesson/
  lesson_design.md
  docs/
    README.md
    development-plan.md
    minimum-slice-plan.md
  index.html
  lesson.html
  onboarding.html
  assets/
    css/
      styles.css
    js/
      app.js
      lessons.js
      progress.js
      audio.js
      recorder.js
      render.js
    audio/
      words/
      sentences/
    images/
```

说明：

- 当前文档落盘阶段不创建上述前端实现文件。
- 首批最小切片阶段可先创建最少必要文件，后续再按模块拆分。
- `docs/` 只存工程计划和执行文档，不承载课程正文。

## 6. JS 模块职责

### 6.1 `lessons.js`

维护课程数据。

职责：

- 导出课程数组或课程映射。
- 包含 lesson id、type、title、focus、words、sentences、review、game、audio 等字段。
- 首批只维护 Day 0 与 Lesson 1~3。
- 后续逐步扩展，不在首批生成完整 48 课数据。

### 6.2 `progress.js`

维护本地学习进度。

职责：

- 读取 `localStorage`。
- 写入已完成课程。
- 判断下一节课。
- 支持重置进度的内部调试能力，但首批页面不一定暴露给孩子。

### 6.3 `audio.js`

维护标准音播放。

职责：

- 优先播放本地 mp3。
- 本地 mp3 不存在或失败时使用 TTS。
- 封装浏览器 `speechSynthesis`。
- 避免在业务渲染代码中直接操作音频细节。

### 6.4 `recorder.js`

维护录音与回放。

职责：

- 调用 `navigator.mediaDevices.getUserMedia` 获取麦克风权限。
- 使用 `MediaRecorder` 录制孩子跟读。
- 生成临时 Blob URL 供本次回放。
- 不上传、不保存长期录音文件。

### 6.5 `render.js`

维护课程渲染。

职责：

- 根据课程数据生成页面内容。
- 渲染单词、句子、按钮与完成区域。
- 绑定播放、录音、回放与完成事件。

### 6.6 `app.js`

维护页面入口逻辑。

职责：

- 判断当前页面类型。
- 初始化首页、引导页或课程页。
- 组织其他模块协作。

## 7. 课程数据结构

建议课程数据保持简单、可读、可逐步扩展。

示例：

```js
const lessons = [
  {
    id: 0,
    type: 'onboarding',
    title: 'Day 0: How to Learn',
    focus: 'learn_how_to_use_the_page',
    steps: [
      'Tap Listen.',
      'Say it yourself.',
      'Record and play back.',
      'Tap Complete.'
    ]
  },
  {
    id: 1,
    type: 'regular',
    title: 'Lesson 1: Short A',
    focus: 'short_a',
    words: ['cat', 'hat', 'bat'],
    sentences: ['A cat.', 'A hat.', 'A bat.'],
    reviewLessons: [0],
    game: ['listen_match', 'shadow_read'],
    audio: {
      cat: 'assets/audio/words/cat.mp3',
      hat: 'assets/audio/words/hat.mp3',
      bat: 'assets/audio/words/bat.mp3'
    }
  }
];
```

字段建议：

- `id`：课程序号。Day 0 使用 `0`。
- `type`：`onboarding` / `regular` / `consolidation`。
- `title`：页面标题。
- `focus`：本课唯一重点。
- `words`：本课单词。
- `sentences`：本课短句。
- `reviewLessons`：本课复习来源。
- `game`：练习类型。
- `audio`：本地音频路径映射。

## 8. localStorage 进度设计

使用 `localStorage` 记录进度。

建议 key：

```text
ezp.progress.v1
```

建议 value：

```json
{
  "lastCompletedLessonId": 1,
  "completedLessonIds": [0, 1],
  "updatedAt": "2026-07-05T00:00:00.000Z"
}
```

基本规则：

- 没有进度时，首页进入 Day 0。
- Day 0 完成后，下一课为 Lesson 1。
- 完成 Lesson 1 后，下一课为 Lesson 2。
- 完成 Lesson 2 后，下一课为 Lesson 3。
- 完成全部已配置课程后，首页显示“已完成当前阶段”。

设计边界：

- 不做账号系统。
- 不做跨设备同步。
- 不处理浏览器清理数据后的恢复问题。
- 不把录音长期保存到 localStorage。

## 9. TTS fallback 设计

播放标准音时使用统一函数，例如：

```js
playStandardAudio({ text: 'cat', audioUrl: 'assets/audio/words/cat.mp3' })
```

逻辑：

1. 如果 `audioUrl` 存在，创建 Audio 对象播放。
2. 如果播放成功，流程结束。
3. 如果播放失败，调用 `speechSynthesis` 播放 `text`。
4. 如果 `speechSynthesis` 不可用，显示不可播放提示。

注意事项：

- TTS 语言优先设置为 `en-US`。
- 播放前可取消正在播放的旧语音，避免声音重叠。
- 静态前端不直接请求第三方 TTS 服务，避免暴露 API Key、产生跨域问题和不可控费用。

## 10. 本地 mp3 正式音频策略

正式音频建议按类型组织：

```text
assets/audio/
  words/
    cat.mp3
    hat.mp3
    bat.mp3
  sentences/
    a-cat.mp3
    i-see-a-cat.mp3
  prompts/
    listen.mp3
    record.mp3
```

命名原则：

- 使用小写英文。
- 空格使用短横线。
- 文件名与课程数据中的 key 尽量一致。
- 同一个单词只保留一份标准发音，多个课程复用。

制作流程建议：

1. 先用 TTS 完成页面开发和流程验证。
2. 确认课程文本稳定后，批量制作 mp3。
3. 将 mp3 放入 `assets/audio/`。
4. 更新课程数据中的 `audio` 路径。
5. 保留 TTS 兜底逻辑。

## 11. 录音回放策略

使用浏览器 `MediaRecorder` 实现。

流程：

1. 孩子点击“Record”。
2. 浏览器请求麦克风权限。
3. 开始录音。
4. 孩子点击“Stop”。
5. 页面生成本次录音的临时回放地址。
6. 孩子点击“Play My Voice”回放。
7. 孩子再次点击标准音，自行对比。

边界：

- 不上传录音。
- 不做自动语音识别。
- 不做自动评分。
- 不长期保存录音。
- 如果浏览器不支持或用户拒绝麦克风权限，显示提示，并允许继续课程。

## 12. 开发阶段拆分

### 阶段 0：文档落盘

- 创建 `docs/`。
- 写入完整开发计划。
- 写入最小切片计划。
- 在 `lesson_design.md` 末尾追加文档入口。
- 不创建前端实现文件。

### 阶段 1：最小垂直切片

- 创建首页、Day 0 引导页、课程页。
- 实现 Lesson 1~3 数据。
- 实现 TTS 标准音播放。
- 实现录音与回放。
- 实现本地进度记录。
- 实现完成本课并进入下一课。

### 阶段 2：首周课程扩展

- 扩展 Week 1 的课程数据。
- 增加更多 CVC 词和短句。
- 验证复习机制是否符合课序差值设计。

### 阶段 3：音频正式化

- 为稳定课程文本制作本地 mp3。
- 接入 mp3 优先、TTS fallback。
- 检查移动端浏览器播放限制。

### 阶段 4：完整课程扩展

- 按 Phase 1~4 逐步补齐课程。
- 增加综合复习课。
- 控制每课新词数量和陌生词比例。

### 阶段 5：体验打磨

- 优化移动端布局。
- 优化按钮大小和儿童可点击性。
- 优化麦克风权限失败提示。
- 优化完成状态和返回首页流程。

## 13. 验证方式

### 13.1 文档阶段验证

- `docs/README.md` 存在，且能说明文档索引。
- `docs/development-plan.md` 存在，且包含完整开发计划。
- `docs/minimum-slice-plan.md` 存在，且包含首批最小切片计划。
- `lesson_design.md` 原正文未被破坏，只追加文档入口。
- 没有创建前端实现文件。

### 13.2 最小切片阶段验证

- 首次打开首页时进入 Day 0。
- 完成 Day 0 后进入 Lesson 1。
- Lesson 1 能显示 cat / hat / bat。
- 标准音按钮可播放 TTS。
- 录音、停止、回放可用。
- 点击完成后写入 `localStorage`。
- 再次打开首页时进入下一课。
- 完成 Lesson 3 后显示当前切片完成状态。

### 13.3 浏览器验证

优先验证：

- Chrome 桌面版。
- Edge 桌面版。
- Android Chrome。
- iPad Safari 或 iPhone Safari（如目标设备包含 iOS）。

重点检查：

- TTS 是否可播放。
- 麦克风权限是否可申请。
- MediaRecorder 是否支持。
- 页面按钮是否适合儿童点击。

## 14. 风险与注意事项

### 14.1 TTS 声音不稳定

不同设备的 TTS 声音差异较大。解决方式是开发期使用 TTS，正式期逐步替换为本地 mp3。

### 14.2 iOS 浏览器能力限制

部分 iOS Safari 版本对自动播放、录音和 MediaRecorder 支持有限。需要在目标设备上实际验证。

### 14.3 麦克风权限失败

用户可能拒绝授权，或浏览器阻止麦克风。页面需要给出清晰提示，但不应阻塞课程继续学习。

### 14.4 localStorage 丢失

清理浏览器数据、更换设备或使用隐私模式会导致进度丢失。V1 接受该限制，不做云端同步。

### 14.5 静态前端不应暴露 API Key

不在浏览器中直接调用第三方 TTS API，避免泄露密钥、产生费用风险和跨域问题。

### 14.6 不过度开发

V1 不做账号、排行榜、自动评分、复杂动画、复杂打卡系统。当前核心是可持续学习流程：听标准音、自己读、回放对比、完成并进入下一课。
