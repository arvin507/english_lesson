function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function bilingualText(primary, secondary) {
  if (!secondary) {
    return escapeHtml(primary);
  }

  return `
    <span class="zh-text">${escapeHtml(secondary)}</span>
    <span class="en-text">${escapeHtml(primary)}</span>
  `;
}

function instructionText(item) {
  if (item && typeof item === 'object') {
    return bilingualText(item.en, item.zh);
  }

  return escapeHtml(item);
}

function normalizePracticeItem(item) {
  if (item && typeof item === 'object') {
    return {
      text: item.text,
      listenText: item.listenText || item.text,
      hint: item.hint || null
    };
  }

  return {
    text: item,
    listenText: item,
    hint: null
  };
}

function itemCard(item, kind) {
  const practiceItem = normalizePracticeItem(item);
  const label = kind === 'word' ? `Listen to ${practiceItem.text}` : `Listen to sentence: ${practiceItem.text}`;

  return `
    <article class="practice-card ${kind === 'word' ? 'word-card' : 'sentence-card'}">
      <p class="practice-text">${escapeHtml(practiceItem.text)}</p>
      <p class="practice-hint">${practiceItem.hint ? escapeHtml(practiceItem.hint) : '先听，再读 / Listen, then say it.'}</p>
      <button class="btn btn-listen" type="button" data-listen="${escapeHtml(practiceItem.listenText)}" aria-label="${escapeHtml(label)}">
        Listen 听
      </button>
    </article>
  `;
}

function recorderPanel() {
  return `
    <section class="card recorder-card" aria-labelledby="voice-title">
      <div>
        <p class="eyebrow">Your turn 轮到你</p>
        <h2 id="voice-title">录下来，自己听一听</h2>
        <p class="card-copy">选一个词或一句话录音，回放后再听标准音对比。</p>
      </div>
      <div class="button-row recorder-actions">
        <button class="btn btn-primary" type="button" data-action="record">Record 录音</button>
        <button class="btn btn-stop" type="button" data-action="stop">Stop 停止</button>
        <button class="btn btn-secondary" type="button" data-action="play-voice">Play My Voice 听我的声音</button>
      </div>
      <p class="status-message" data-status aria-live="polite">Ready. 准备好了。</p>
    </section>
  `;
}

export function renderHome(container, viewModel) {
  const isComplete = viewModel.nextRoute.type === 'complete';
  const completedCount = viewModel.progress.completedLessonIds.length;

  container.innerHTML = `
    <section class="hero hero-home">
      <div class="hero-copy">
        <p class="eyebrow">English Zero</p>
        <h1>${isComplete ? '第一组课程完成了。' : '今天学哪一课？'}</h1>
        <p class="hero-text">打开就知道下一步。先听，再读，录下来自己对比。</p>
      </div>
      <div class="hero-card card">
        <p class="eyebrow">Next step 下一步</p>
        <h2>${escapeHtml(viewModel.nextRoute.label)}</h2>
        <p class="card-copy">这个页面会在本设备记住学习进度。</p>
        ${isComplete
          ? '<a class="btn btn-primary" href="index.html">Stay on Home 留在首页</a>'
          : `<button class="btn btn-primary" type="button" data-action="continue" data-href="${escapeHtml(viewModel.nextRoute.href)}">${escapeHtml(viewModel.nextRoute.label)}</button>`}
      </div>
    </section>

    <section class="card progress-card" aria-labelledby="progress-title">
      <p class="eyebrow">Progress 进度</p>
      <h2 id="progress-title">已完成 ${completedCount} 步</h2>
      <p class="card-copy">完成记录：${completedCount ? escapeHtml(viewModel.progress.completedLessonIds.join(', ')) : '还没有完成课程'}。</p>
    </section>
  `;
}

export function renderOnboarding(container, lesson) {
  container.innerHTML = `
    <nav class="top-nav" aria-label="Page navigation">
      <a class="back-link" href="index.html">Home</a>
    </nav>
    <section class="hero lesson-hero">
      <div class="hero-copy">
        <p class="eyebrow">Day 0</p>
        <h1>${escapeHtml(lesson.titleZh || lesson.title)}</h1>
        <p class="hero-text">${bilingualText(lesson.focus, lesson.focusZh)}</p>
      </div>
      <div class="hero-card card phrase-card">
        <p class="eyebrow">Try this 试一试</p>
        <p class="practice-text">${escapeHtml(lesson.samplePhrase)}</p>
        <button class="btn btn-listen" type="button" data-listen="${escapeHtml(lesson.samplePhrase)}" aria-label="Listen to ${escapeHtml(lesson.samplePhrase)}">
          Listen 听
        </button>
      </div>
    </section>

    <section class="card" aria-labelledby="steps-title">
      <p class="eyebrow">How it works 怎么学</p>
      <h2 id="steps-title">照这个顺序做</h2>
      <ol class="step-list">
        ${lesson.steps.map((step) => `<li>${instructionText(step)}</li>`).join('')}
      </ol>
    </section>

    ${recorderPanel()}

    <section class="complete-panel card">
      <h2>准备开始第1课了吗？</h2>
      <p class="card-copy">你知道怎么听、怎么录、怎么回放后，就点 Complete。</p>
      <button class="btn btn-primary btn-large" type="button" data-action="complete">Complete 完成</button>
    </section>
  `;
}

function renderReviewSection(lesson) {
  if (!lesson.reviewWords.length && !lesson.reviewSentences.length) {
    return '';
  }

  return `
    <section class="lesson-section" aria-labelledby="review-title">
      <div class="section-heading">
        <p class="eyebrow">Review 复习</p>
        <h2 id="review-title">先读旧内容</h2>
      </div>
      <div class="practice-grid compact-grid">
        ${lesson.reviewWords.map((word) => itemCard(word, 'word')).join('')}
      </div>
      ${lesson.reviewSentences.length
        ? `<div class="sentence-list">${lesson.reviewSentences.map((sentence) => itemCard(sentence, 'sentence')).join('')}</div>`
        : ''}
    </section>
  `;
}

function renderNewSoundSection(lesson) {
  if (!lesson.newSound) {
    return '';
  }

  return `
    <section class="lesson-section" aria-labelledby="sound-title">
      <div class="section-heading">
        <p class="eyebrow">New sound 新内容</p>
        <h2 id="sound-title">${bilingualText(lesson.newSound.label, lesson.newSound.labelZh)}</h2>
        <p class="section-copy">${bilingualText(lesson.newSound.text, lesson.newSound.textZh)}</p>
      </div>
      <div class="button-row sound-examples">
        ${lesson.newSound.examples.map((example) => {
          const practiceItem = normalizePracticeItem(example);
          return `
          <button class="btn btn-secondary" type="button" data-listen="${escapeHtml(practiceItem.listenText)}">
            ${escapeHtml(practiceItem.text)}
          </button>
        `;
        }).join('')}
      </div>
    </section>
  `;
}

function renderPracticeGuide(lesson) {
  if (!lesson.practice?.length) {
    return '';
  }

  return `
    <section class="card" aria-labelledby="practice-title">
      <p class="eyebrow">Practice 练习</p>
      <h2 id="practice-title">按顺序完成</h2>
      <ol class="step-list">
        ${lesson.practice.map((step) => `<li>${instructionText(step)}</li>`).join('')}
      </ol>
    </section>
  `;
}

export function renderLesson(container, lesson) {
  document.title = `${lesson.title} | English Zero`;

  container.innerHTML = `
    <nav class="top-nav" aria-label="Page navigation">
      <a class="back-link" href="index.html">Home</a>
    </nav>
    <section class="hero lesson-hero">
      <div class="hero-copy">
        <p class="eyebrow">${lesson.type === 'consolidation' ? 'Review 复习课' : `Lesson ${lesson.id}`}</p>
        <h1>${escapeHtml(lesson.titleZh || lesson.title)}</h1>
        <p class="hero-text">先听，再看，再读，再录音对比。</p>
      </div>
      <div class="hero-card card focus-card">
        <p class="eyebrow">Focus 本课重点</p>
        <h2>${bilingualText(lesson.focus, lesson.focusZh)}</h2>
      </div>
    </section>

    ${renderReviewSection(lesson)}
    ${renderNewSoundSection(lesson)}

    <section class="lesson-section" aria-labelledby="words-title">
      <div class="section-heading">
        <p class="eyebrow">Words 单词</p>
        <h2 id="words-title">${escapeHtml(lesson.wordsTitleZh || '先听，再读这些词')}</h2>
      </div>
      <div class="practice-grid">
        ${lesson.words.map((word) => itemCard(word, 'word')).join('')}
      </div>
    </section>

    <section class="lesson-section" aria-labelledby="sentences-title">
      <div class="section-heading">
        <p class="eyebrow">Reading 阅读</p>
        <h2 id="sentences-title">${escapeHtml(lesson.sentencesTitleZh || '读短句')}</h2>
      </div>
      <div class="sentence-list">
        ${lesson.sentences.map((sentence) => itemCard(sentence, 'sentence')).join('')}
      </div>
    </section>

    ${renderPracticeGuide(lesson)}

    ${recorderPanel()}

    <section class="complete-panel card">
      <h2>今天完成了吗？</h2>
      <p class="card-copy">都听过、读过、录过一次后，点 Complete 保存进度。</p>
      <button class="btn btn-primary btn-large" type="button" data-action="complete">Complete 完成</button>
    </section>
  `;
}

export function renderCompletion(container) {
  container.innerHTML = `
    <section class="hero hero-home">
      <div class="hero-copy">
        <p class="eyebrow">English Zero</p>
        <h1>第一组课程完成了。</h1>
        <p class="hero-text">你练了短音 a、-at、-an、I see a 和课堂指令。</p>
      </div>
      <div class="hero-card card">
        <p class="eyebrow">Complete 完成</p>
        <h2>Day 0 + Lessons 1-6 are done.</h2>
        <a class="btn btn-primary" href="index.html">Go Home 回首页</a>
      </div>
    </section>
  `;
}

export function renderMessage(container, title, message) {
  container.innerHTML = `
    <section class="card message-card">
      <h1>${escapeHtml(title)}</h1>
      <p class="card-copy">${escapeHtml(message)}</p>
      <a class="btn btn-primary" href="index.html">Go Home 回首页</a>
    </section>
  `;
}
