# English Zero 最小垂直切片计划

## 1. 切片目标

先实现一个可以从首页进入、完成引导、学习前三节课、记录进度并继续下一课的最小闭环。

该切片用于验证：

- 静态页面是否能承载课程流程。
- 孩子是否能理解 Day 0 引导。
- TTS 标准音是否足够支撑早期开发。
- 录音与回放是否能形成“标准音参照 + 自我对比”的反馈闭环。
- `localStorage` 是否能满足“打开页面知道学到哪”的最低需求。

## 2. 首批包含内容

首批范围：

```text
Day 0 引导页
Lesson 1：Short A / cat, hat, bat
Lesson 2：-at family / mat, sat, Sam
Lesson 3：Mini Review，复习前两课
```

首批功能：

- 首页自动判断进度。
- Day 0 引导。
- 课程页渲染。
- TTS 标准音播放。
- 录音与回放。
- 完成本课写入 localStorage。
- 进入下一课。

## 3. 首批不包含内容

本切片不做：

- 不生成完整 48 课数据。
- 不制作或接入正式 mp3 音频。
- 不创建图片资源。
- 不做自动语音评分。
- 不做账号系统。
- 不做跨设备同步。
- 不做复杂打卡或激励系统。
- 不做复杂课程列表管理。
- 不做第三方 TTS API 调用。
- 不做自动判分。

## 4. 页面清单

### 4.1 首页

职责：

- 读取本地进度。
- 判断下一步进入 Day 0、Lesson 1、Lesson 2、Lesson 3 或完成提示。
- 显示“继续学习”按钮。

首页判断规则：

- 无进度：进入 Day 0。
- `lastCompletedLessonId = 0`：进入 Lesson 1。
- `lastCompletedLessonId = 1`：进入 Lesson 2。
- `lastCompletedLessonId = 2`：进入 Lesson 3。
- `lastCompletedLessonId >= 3`：显示首批切片已完成。

### 4.2 Day 0 引导页

职责：

- 告诉孩子点击 Listen 听标准音。
- 告诉孩子模仿读出来。
- 告诉孩子点击 Record 录自己的声音。
- 告诉孩子点击 Play My Voice 回放。
- 告诉孩子点击 Complete 完成本课。

### 4.3 课程页

职责：

- 按 lesson id 渲染课程。
- 展示本课标题、重点、单词、句子和练习。
- 为每个单词或句子提供 Listen 按钮。
- 提供录音、停止和回放按钮。
- 提供 Complete 按钮。

## 5. 课程清单

### 5.1 Day 0：How to Learn

目标：让孩子知道如何使用页面。

内容：

- Listen：听标准音。
- Say：自己跟读。
- Record：录自己的声音。
- Play My Voice：回放自己的声音。
- Complete：完成并进入下一课。

### 5.2 Lesson 1：Short A

目标：认识 short a 的 /æ/ 音，并能读 cat / hat / bat。

单词：

- cat
- hat
- bat

句子：

- A cat.
- A hat.
- A bat.

练习：

- 听标准音。
- 跟读。
- 录音。
- 回放对比。

### 5.3 Lesson 2：-at family

目标：理解 -at family 的拼读模式，并能读 mat / sat / Sam。

单词：

- mat
- sat
- Sam

句子：

- Sam sat.
- Sam sat on a mat.

练习：

- 听标准音。
- 跟读。
- 录音。
- 回放对比。
- 复习 Lesson 1 的 cat / hat / bat。

### 5.4 Lesson 3：Mini Review

目标：复习 Lesson 1 和 Lesson 2，不引入新知识。

复习单词：

- cat
- hat
- bat
- mat
- sat
- Sam

复习句子：

- A cat.
- A hat.
- Sam sat.
- Sam sat on a mat.

练习：

- 混合听音。
- 混合跟读。
- 录音回放。
- 完成首批切片。

## 6. 功能清单

### 6.1 进度功能

- 使用 `localStorage` 存储已完成课程。
- 首页根据进度自动显示下一课入口。
- 完成课程后更新 `lastCompletedLessonId`。
- 课程完成后可跳转下一课。

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

### 6.2 标准音播放

- 使用浏览器 `speechSynthesis` 播放英文单词和句子。
- 语言优先设置为 `en-US`。
- 每个单词或句子旁边有 Listen 按钮。
- 本切片不要求 mp3。

### 6.3 录音与回放

- 使用 `navigator.mediaDevices.getUserMedia` 请求麦克风权限。
- 使用 `MediaRecorder` 录音。
- 点击 Stop 后生成本次录音回放。
- 点击 Play My Voice 播放孩子自己的录音。
- 不保存录音，不上传录音。

### 6.4 课程渲染

- 根据课程数据渲染标题、重点、单词、句子和练习按钮。
- Day 0 与普通课程可共用部分渲染逻辑，也可以先用独立简单页面实现。
- 页面文案应短、清楚、适合儿童理解。

## 7. 数据样例

首批课程数据可采用如下结构：

```js
const lessons = [
  {
    id: 0,
    type: 'onboarding',
    title: 'Day 0: How to Learn',
    focus: 'learn_how_to_use_the_page',
    steps: [
      'Listen.',
      'Say it.',
      'Record.',
      'Play my voice.',
      'Complete.'
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
    game: ['listen', 'shadow_read', 'record_playback']
  },
  {
    id: 2,
    type: 'regular',
    title: 'Lesson 2: -at Family',
    focus: 'at_family',
    words: ['mat', 'sat', 'Sam'],
    sentences: ['Sam sat.', 'Sam sat on a mat.'],
    reviewLessons: [1],
    game: ['listen', 'shadow_read', 'record_playback']
  },
  {
    id: 3,
    type: 'consolidation',
    title: 'Lesson 3: Mini Review',
    focus: 'review_lessons_1_2',
    words: ['cat', 'hat', 'bat', 'mat', 'sat', 'Sam'],
    sentences: ['A cat.', 'A hat.', 'Sam sat.', 'Sam sat on a mat.'],
    sourceLessons: [1, 2],
    game: ['listen', 'shadow_read', 'record_playback']
  }
];
```

## 8. 执行步骤

最小切片开发阶段建议按以下顺序执行：

1. 创建最少必要前端文件。
2. 建立课程数据，先只包含 Day 0 和 Lesson 1~3。
3. 实现首页进度判断。
4. 实现 Day 0 引导页。
5. 实现课程页基础渲染。
6. 接入 TTS 标准音播放。
7. 接入录音、停止和回放。
8. 实现 Complete 按钮写入 `localStorage`。
9. 实现完成后进入下一课。
10. 在目标浏览器中手动验证完整流程。

注意：当前文档落盘阶段不执行以上开发步骤，只将计划写入文档。

## 9. 验收标准

### 9.1 首页验收

- 首次打开时能引导进入 Day 0。
- 完成 Day 0 后再次打开首页，能进入 Lesson 1。
- 完成 Lesson 1 后，能进入 Lesson 2。
- 完成 Lesson 2 后，能进入 Lesson 3。
- 完成 Lesson 3 后，显示首批切片完成。

### 9.2 Day 0 验收

- 页面能说明 Listen / Record / Play My Voice / Complete 的用途。
- 孩子能根据页面提示理解基本操作顺序。
- 点击 Complete 后写入 Day 0 已完成状态。

### 9.3 Lesson 1 验收

- 页面显示 Short A。
- 页面显示 cat / hat / bat。
- 每个词可以点击播放标准音。
- 可以录音并回放。
- 完成本课后进入 Lesson 2。

### 9.4 Lesson 2 验收

- 页面显示 -at family。
- 页面显示 mat / sat / Sam。
- 页面包含 Lesson 1 的复习内容。
- 可以播放标准音、录音和回放。
- 完成本课后进入 Lesson 3。

### 9.5 Lesson 3 验收

- 页面显示 Mini Review。
- 页面复习 cat / hat / bat / mat / sat / Sam。
- 不引入新知识点。
- 可以播放标准音、录音和回放。
- 完成本课后显示首批切片完成。

### 9.6 技术验收

- `localStorage` 中能看到 `ezp.progress.v1`。
- 录音不上传到任何服务。
- 不调用第三方 TTS API。
- 不需要后端服务。
- 刷新页面后进度仍保留。

## 10. 当前文档阶段验收

本轮只做文档整理与落盘，验收标准为：

- `docs/README.md` 存在，且说明文档索引。
- `docs/development-plan.md` 存在，且包含完整开发计划。
- `docs/minimum-slice-plan.md` 存在，且包含首批最小切片计划。
- `lesson_design.md` 末尾追加实施文档入口。
- 不创建 `index.html`、`lesson.html`、`assets/js/*` 等前端实现文件。
