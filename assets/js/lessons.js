export const LESSONS = [
  {
    id: 0,
    type: 'onboarding',
    title: 'Day 0: How to Learn',
    titleZh: '第0课：学会怎么用',
    focus: 'Listen first. Then copy the sound.',
    focusZh: '先听标准音，再模仿读出来。',
    samplePhrase: 'Hello.',
    steps: [
      { en: 'Tap Listen.', zh: '点 Listen，先听标准音。' },
      { en: 'Look at the word.', zh: '看清楚这个词。' },
      { en: 'Say it out loud.', zh: '自己大声读出来。' },
      { en: 'Tap Record.', zh: '点 Record，录自己的声音。' },
      { en: 'Tap Stop.', zh: '读完点 Stop。' },
      { en: 'Tap Play My Voice.', zh: '点 Play My Voice，听自己的声音。' },
      { en: 'Listen again and compare.', zh: '再听标准音，自己对比哪里不一样。' },
      { en: 'Tap Complete.', zh: '完成后点 Complete，进入下一课。' }
    ]
  },
  {
    id: 1,
    type: 'regular',
    phase: 'sound_system',
    title: 'Lesson 1: First Sounds',
    titleZh: '第1课：辅音开头音',
    focus: 'Hear and copy m, s, t.',
    focusZh: '先练3个开头声音：m, s, t。',
    newSound: {
      label: 'm / s / t',
      labelZh: '辅音声音',
      text: 'These letters have sounds. Listen and copy the sound, not the letter name.',
      textZh: '字母有自己的声音。先模仿声音，不背字母名。',
      examples: [
        { text: 'm', listenText: 'mmm' },
        { text: 's', listenText: 'sss' },
        { text: 't', listenText: 't' }
      ]
    },
    wordsTitleZh: '声音卡',
    words: [
      { text: 'm', listenText: 'mmm' },
      { text: 's', listenText: 'sss' },
      { text: 't', listenText: 't' }
    ],
    sentencesTitleZh: '跟读节奏',
    sentences: ['m m m', 's s s', 't t t'],
    reviewWords: [],
    reviewSentences: [],
    practice: [
      { en: 'Listen and copy one sound at a time.', zh: '一次只听一个声音，再模仿。' },
      { en: 'Do not say the letter name yet.', zh: '先不要背字母名，只练声音。' },
      { en: 'Record m, s, or t and compare.', zh: '任选 m、s、t 录音，对比标准音。' }
    ]
  },
  {
    id: 2,
    type: 'regular',
    phase: 'sound_system',
    title: 'Lesson 2: Short a',
    titleZh: '第2课：短元音 a',
    focus: 'Hear the middle sound in cat.',
    focusZh: '今天只听 cat 中间的短音 a。',
    newSound: {
      label: 'short a',
      labelZh: '短元音 a',
      text: 'The middle sound in cat, mat, sat is short a.',
      textZh: 'cat、mat、sat 中间都有同一个短音 a。',
      examples: ['cat', 'mat', 'sat']
    },
    wordsTitleZh: '听中间音',
    words: ['cat', 'mat', 'sat'],
    sentencesTitleZh: '短句跟读',
    sentences: ['A cat.', 'A mat.', 'Sam sat.'],
    reviewWords: [
      { text: 'm', listenText: 'mmm' },
      { text: 's', listenText: 'sss' },
      { text: 't', listenText: 't' }
    ],
    reviewSentences: ['m m m', 's s s', 't t t'],
    practice: [
      { en: 'Listen for the middle sound.', zh: '听每个词中间的 a。' },
      { en: 'Say cat, mat, sat slowly.', zh: '慢慢读 cat、mat、sat。' },
      { en: 'Record one word and compare.', zh: '录一个词，再听标准音对比。' }
    ]
  },
  {
    id: 3,
    type: 'regular',
    phase: 'blending',
    title: 'Lesson 3: Blend Sounds',
    titleZh: '第3课：把声音拼起来',
    focus: 'Blend m + a + t into mat.',
    focusZh: '把 m + a + t 合成 mat。',
    newSound: {
      label: 'blend',
      labelZh: '拼读',
      text: 'Say the sounds slowly, then faster: m-a-t, mat.',
      textZh: '先慢慢读每个声音，再连快：m-a-t, mat。',
      examples: ['m-a-t', 'mat', 's-a-t', 'sat']
    },
    wordsTitleZh: '拼读词',
    words: ['mat', 'sat', 'at'],
    sentencesTitleZh: '可拼读短句',
    sentences: ['A mat.', 'Sam sat.', 'Mat. Sat.'],
    reviewWords: ['cat', 'mat', 'sat'],
    reviewSentences: ['A cat.'],
    practice: [
      { en: 'Point to each sound: m, a, t.', zh: '用手指点每个声音：m、a、t。' },
      { en: 'Slide the sounds together.', zh: '把声音连起来读。' },
      { en: 'Record mat and sat.', zh: '录 mat 和 sat，听听有没有连起来。' }
    ]
  },
  {
    id: 4,
    type: 'regular',
    phase: 'word_family',
    title: 'Lesson 4: -at Family',
    titleZh: '第4课：-at 词族',
    focus: 'Change the first sound. Keep -at.',
    focusZh: '换开头声音，后面都保留 -at。',
    newSound: {
      label: '-at',
      labelZh: '-at 词族',
      text: 'c-at, h-at, b-at: same ending, new first sound.',
      textZh: 'cat、hat、bat 后面一样，开头不同。',
      examples: ['cat', 'hat', 'bat']
    },
    wordsTitleZh: '-at 单词',
    words: ['cat', 'hat', 'bat', 'mat', 'sat'],
    sentencesTitleZh: '短句阅读',
    sentences: ['A cat.', 'A hat.', 'A bat.', 'A cat sat.'],
    reviewWords: ['mat', 'sat', 'at'],
    reviewSentences: ['A mat.', 'Sam sat.'],
    practice: [
      { en: 'Read the ending first: at.', zh: '先读后面的 at。' },
      { en: 'Change only the first sound.', zh: '只换第一个声音。' },
      { en: 'Record cat, hat, bat.', zh: '录 cat、hat、bat，听开头有没有变。' }
    ]
  },
  {
    id: 5,
    type: 'regular',
    phase: 'word_family',
    title: 'Lesson 5: -an Family',
    titleZh: '第5课：-an 词族',
    focus: 'Blend words with -an.',
    focusZh: '练另一个词族：-an。',
    newSound: {
      label: '-an',
      labelZh: '-an 词族',
      text: 'c-an, f-an, p-an: same ending, new first sound.',
      textZh: 'can、fan、pan 后面一样，开头不同。',
      examples: ['can', 'fan', 'pan']
    },
    wordsTitleZh: '-an 单词',
    words: ['can', 'fan', 'pan'],
    sentencesTitleZh: '短句阅读',
    sentences: ['A can.', 'A fan.', 'I see a pan.'],
    reviewWords: ['cat', 'hat', 'bat', 'mat', 'sat'],
    reviewSentences: ['A cat sat.'],
    practice: [
      { en: 'Listen for the ending: an.', zh: '先听每个词后面的 an。' },
      { en: 'Read can, fan, pan without spelling letters.', zh: '直接拼读，不要一个字母一个字母背。' },
      { en: 'Record I see a pan.', zh: '录一句 I see a pan.，再对比。' }
    ]
  },
  {
    id: 6,
    type: 'consolidation',
    phase: 'week_review',
    scope: 'week',
    sourceLessons: [1, 2, 3, 4, 5],
    title: 'Lesson 6: Week 1 Review',
    titleZh: '第6课：第一周综合复习',
    focus: 'Decode mixed short-a words.',
    focusZh: '不学新内容，把本周声音混起来拼读。',
    newSound: {
      label: 'no new sound',
      labelZh: '没有新声音',
      text: 'Review m, s, t, short a, -at, and -an.',
      textZh: '复习 m、s、t、短音 a、-at 和 -an。',
      examples: ['mat', 'sat', 'cat', 'can', 'fan', 'pan']
    },
    wordsTitleZh: '混合拼读',
    words: ['mat', 'sat', 'cat', 'hat', 'bat', 'can', 'fan', 'pan'],
    sentencesTitleZh: '综合阅读',
    sentences: ['A cat sat.', 'I see a mat.', 'I see a fan.', 'I see a pan.'],
    reviewWords: [],
    reviewSentences: [],
    practice: [
      { en: 'Read the words in a mixed order.', zh: '打乱顺序读这些词。' },
      { en: 'Find the words with -at.', zh: '找出带 -at 的词。' },
      { en: 'Find the words with -an.', zh: '找出带 -an 的词。' },
      { en: 'Record one sentence and compare.', zh: '录一句话，再和标准音对比。' }
    ]
  }
];

export function getLessonById(id) {
  return LESSONS.find((lesson) => lesson.id === Number(id)) || null;
}

export function getNextLessonId(id) {
  const currentIndex = LESSONS.findIndex((lesson) => lesson.id === Number(id));
  const nextLesson = LESSONS[currentIndex + 1];
  return nextLesson ? nextLesson.id : null;
}

export function getFinalLessonId() {
  return LESSONS
    .filter((lesson) => lesson.type !== 'onboarding')
    .reduce((maxId, lesson) => Math.max(maxId, lesson.id), 0);
}
