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

const MEANING_ZH = {
  'a': '一个/一只',
  'A cat.': '一只猫。',
  'A mat.': '一个垫子。',
  'A bat.': '一只蝙蝠/一根球棒。',
  'A hat.': '一顶帽子。',
  'A can.': '一个罐子。',
  'A fan.': '一个风扇。',
  'A man.': '一个男人。',
  'A pan.': '一个平底锅。',
  'A pin.': '一枚别针。',
  'A bit.': '一点点。',
  'A big pig.': '一只大猪。',
  'A cat can nap.': '一只猫会小睡。',
  'A cat can sit.': '一只猫会坐。',
  'A cat sat.': '一只猫坐下了。',
  'A man can sit.': '一个男人会坐。',
  'A pig can sit.': '一只猪会坐。',
  'A big pig can sit.': '一只大猪会坐。',
  'A cat.': '一只猫。',
  'A pin.': '一枚别针。',
  'A pan.': '一个平底锅。',
  'at': '在...',
  'bat': '球棒/蝙蝠',
  'big': '大的',
  'bit': '一点点',
  'can': '能/罐子',
  'cap': '鸭舌帽',
  'cat': '猫',
  'Circle.': '圈出来。',
  'Circle cat.': '把 cat 圈出来。',
  'Circle fan.': '把 fan 圈出来。',
  'fan': '风扇',
  'fin': '鱼鳍',
  'hat': '帽子',
  'hit': '击打',
  'Hit it.': '打它。',
  'I see a cap.': '我看到一顶鸭舌帽。',
  'I see a cat.': '我看到一只猫。',
  'I see a fan.': '我看到一个风扇。',
  'I see a hat.': '我看到一顶帽子。',
  'I see a map.': '我看到一张地图。',
  'I see a mat.': '我看到一个垫子。',
  'I see a pan.': '我看到一个平底锅。',
  'I see a pig.': '我看到一只猪。',
  'I see a pin.': '我看到一枚别针。',
  'I see a pit.': '我看到一个坑。',
  'I see a wig.': '我看到一顶假发。',
  'Listen.': '听。',
  'Look.': '看。',
  'man': '男人',
  'map': '地图',
  'mat': '垫子',
  'nap': '小睡',
  'pan': '平底锅',
  'Pat a pan.': '轻拍一个平底锅。',
  'pat': '轻拍',
  'pig': '猪',
  'pin': '别针',
  'pit': '坑',
  'Point.': '指出来。',
  'Point to bat.': '指向 bat。',
  'Point to hat.': '指向 hat。',
  'Read.': '读。',
  'Read it.': '读它。',
  'Repeat.': '再读一遍。',
  'Sam': '人名 Sam',
  'Sam sat.': 'Sam 坐下了。',
  'Sam sat at a mat.': 'Sam 坐在垫子旁边。',
  'sat': '坐了',
  'Say.': '说出来。',
  'Say cat.': '说 cat。',
  'Say hat.': '说 hat。',
  'Say it.': '说出来。',
  'sit': '坐',
  'Sit.': '坐下。',
  'Stop.': '停。',
  'Try again.': '再试一次。',
  'wig': '假发'
};

function getMeaningZh(text, explicitMeaning) {
  if (explicitMeaning && !explicitMeaning.includes('?')) {
    return explicitMeaning;
  }

  return MEANING_ZH[text] || null;
}

function normalizePracticeItem(item) {
  if (item && typeof item === 'object') {
    const text = item.text;

    return {
      text,
      listenText: item.listenText || text,
      hint: item.hint || null,
      meaningZh: getMeaningZh(text, item.meaningZh)
    };
  }

  return {
    text: item,
    listenText: item,
    hint: null,
    meaningZh: getMeaningZh(item, null)
  };
}

function itemCard(item, kind) {
  const practiceItem = normalizePracticeItem(item);
  const label = kind === 'word' ? `Listen to ${practiceItem.text}` : `Listen to sentence: ${practiceItem.text}`;

  return `
    <article class="practice-card ${kind === 'word' ? 'word-card' : 'sentence-card'}">
      <p class="practice-text">${escapeHtml(practiceItem.text)}</p>
      ${practiceItem.meaningZh ? `<p class="meaning-hint">意思：${escapeHtml(practiceItem.meaningZh)}</p>` : ''}
      <p class="practice-hint">${practiceItem.hint ? escapeHtml(practiceItem.hint) : '先听，再读 / Listen, then say it.'}</p>
      <button class="btn btn-listen" type="button" data-listen="${escapeHtml(practiceItem.listenText)}" aria-label="${escapeHtml(label)}">
        Listen 听
      </button>
    </article>
  `;
}

function lessonCard(lesson, progress) {
  const isCompleted = progress.completedLessonIds.includes(lesson.id);
  const isNext = progress.lastCompletedLessonId === null
    ? lesson.id === 0
    : lesson.id === progress.lastCompletedLessonId + 1;
  const href = lesson.id === 0 ? 'onboarding.html' : `lesson.html?lesson=${lesson.id}`;
  const status = isCompleted ? '已完成' : isNext ? '下一课' : '可复习';

  return `
    <a class="lesson-map-card ${isCompleted ? 'is-complete' : ''} ${isNext ? 'is-next' : ''}" href="${href}">
      <span class="lesson-map-status">${status}</span>
      <span class="lesson-map-title">${escapeHtml(lesson.titleZh || lesson.title)}</span>
      <span class="lesson-map-focus">${escapeHtml(lesson.focusZh || lesson.focus || '')}</span>
    </a>
  `;
}

function renderLessonOverview(lessons, progress) {
  const groups = lessons.reduce((result, lesson) => {
    const groupName = lesson.id === 0 ? '开始' : `第 ${lesson.week || 1} 周`;
    if (!result.has(groupName)) {
      result.set(groupName, []);
    }
    result.get(groupName).push(lesson);
    return result;
  }, new Map());

  return [...groups.entries()].map(([groupName, groupLessons], index) => `
    <section class="lesson-map-group" aria-labelledby="lesson-map-group-${index}">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(groupName)}</p>
        <h3 id="lesson-map-group-${index}">${groupName === '开始' ? '使用引导' : `${escapeHtml(groupName)}课程`}</h3>
      </div>
      <div class="lesson-map-grid">
        ${groupLessons.map((lesson) => lessonCard(lesson, progress)).join('')}
      </div>
    </section>
  `).join('');
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

    <section class="card lesson-map" aria-labelledby="lesson-map-title">
      <p class="eyebrow">Course Map 课程总览</p>
      <h2 id="lesson-map-title">所有课程都可以点进去复习</h2>
      <p class="card-copy">“继续学习”负责带你去下一课；下面的总览可以回到任意旧课复习，不会丢进度。</p>
      ${renderLessonOverview(viewModel.lessons, viewModel.progress)}
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

function renderSimplePracticeSection({ titleId, eyebrow, title, items, kind = 'sentence' }) {
  if (!items?.length) {
    return '';
  }

  return `
    <section class="lesson-section" aria-labelledby="${titleId}">
      <div class="section-heading">
        <p class="eyebrow">${eyebrow}</p>
        <h2 id="${titleId}">${escapeHtml(title)}</h2>
      </div>
      <div class="${kind === 'word' ? 'practice-grid compact-grid' : 'sentence-list'}">
        ${items.map((item) => itemCard(item, kind)).join('')}
      </div>
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
    ${renderSimplePracticeSection({
      titleId: 'sound-drill-title',
      eyebrow: 'Sound Drill 声音热身',
      title: lesson.soundDrillTitleZh || '声音热身',
      items: lesson.soundDrill,
      kind: 'word'
    })}
    ${renderSimplePracticeSection({
      titleId: 'blend-drill-title',
      eyebrow: 'Blend 拼读',
      title: lesson.blendDrillTitleZh || '拼读练习',
      items: lesson.blendDrill,
      kind: 'sentence'
    })}

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

    ${renderSimplePracticeSection({
      titleId: 'classroom-title',
      eyebrow: 'Classroom English 课堂英语',
      title: lesson.classroomEnglishTitleZh || '今天能听懂',
      items: lesson.classroomEnglish,
      kind: 'sentence'
    })}

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
