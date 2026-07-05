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
    week: 1,
    phase: 'phonemic_awareness',
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
    soundDrillTitleZh: '声音热身',
    soundDrill: [
      { text: 'm', listenText: 'mmm' },
      { text: 's', listenText: 'sss' },
      { text: 't', listenText: 't' },
      { text: 'm s t', listenText: 'mmm sss t' }
    ],
    blendDrillTitleZh: '听辨练习',
    blendDrill: ['m or s?', 's or t?', 'm m s', 's s t'],
    wordsTitleZh: '声音卡',
    words: [
      { text: 'm', listenText: 'mmm' },
      { text: 's', listenText: 'sss' },
      { text: 't', listenText: 't' }
    ],
    sentencesTitleZh: '跟读节奏',
    sentences: ['m m m', 's s s', 't t t', 'm s t'],
    classroomEnglishTitleZh: '今天能听懂',
    classroomEnglish: ['Listen.', 'Say.', 'Stop.'],
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
    week: 1,
    phase: 'short_a',
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
    soundDrillTitleZh: '声音热身',
    soundDrill: [
      { text: 'a', listenText: 'a' },
      'cat',
      'mat',
      'sat'
    ],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['c-a-t', 'm-a-t', 's-a-t', 'cat / mat / sat'],
    wordsTitleZh: '听中间音',
    words: [
      { text: 'cat', meaningZh: '?' },
      { text: 'mat', meaningZh: '??' },
      { text: 'sat', meaningZh: '??' },
      { text: 'Sam', meaningZh: '?? Sam' }
    ],
    sentencesTitleZh: '短句跟读',
    sentences: ['A cat.', 'A mat.', 'Sam sat.', 'A cat sat.'],
    classroomEnglishTitleZh: '今天能听懂',
    classroomEnglish: ['Listen.', 'Say cat.', 'Stop.'],
    reviewWords: [
      { text: 'm', listenText: 'mmm' },
      { text: 's', listenText: 'sss' },
      { text: 't', listenText: 't' }
    ],
    reviewSentences: ['m m m', 's s s', 't t t'],
    practice: [
      { en: 'Listen for the middle sound.', zh: '听每个词中间的 a。' },
      { en: 'Say cat, mat, sat slowly.', zh: '慢慢读 cat、mat、sat。' },
      { en: 'Record A cat sat.', zh: '录一句 A cat sat.，再听标准音对比。' }
    ]
  },
  {
    id: 3,
    type: 'regular',
    week: 1,
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
    soundDrillTitleZh: '声音热身',
    soundDrill: ['m', 'a', 't', 's'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['m-a-t -> mat', 's-a-t -> sat', 'a-t -> at', 's-a-m -> Sam'],
    wordsTitleZh: '拼读词',
    words: [
      { text: 'mat', meaningZh: '??' },
      { text: 'sat', meaningZh: '??' },
      { text: 'at', meaningZh: '?...' },
      { text: 'Sam', meaningZh: '?? Sam' }
    ],
    sentencesTitleZh: '可拼读短句',
    sentences: ['A mat.', 'Sam sat.', 'Mat. Sat.', 'Sam sat at a mat.'],
    classroomEnglishTitleZh: '今天能听懂',
    classroomEnglish: ['Listen.', 'Look.', 'Say it.'],
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
    week: 1,
    phase: 'at_family',
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
    soundDrillTitleZh: '声音热身',
    soundDrill: ['c', 'h', 'b', 'at'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['c-at -> cat', 'h-at -> hat', 'b-at -> bat', 'm-at -> mat', 's-at -> sat'],
    wordsTitleZh: '-at 单词',
    words: [
      { text: 'cat', meaningZh: '?' },
      { text: 'hat', meaningZh: '??' },
      { text: 'bat', meaningZh: '??/??' },
      { text: 'mat', meaningZh: '??' },
      { text: 'sat', meaningZh: '??' }
    ],
    sentencesTitleZh: '短句阅读',
    sentences: ['A cat.', 'A hat.', 'A bat.', 'A cat sat.', 'Sam sat.'],
    classroomEnglishTitleZh: '今天能听懂',
    classroomEnglish: ['Look.', 'Say cat.', 'Say hat.'],
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
    week: 1,
    phase: 'an_family',
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
    soundDrillTitleZh: '声音热身',
    soundDrill: ['c', 'f', 'p', 'an'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['c-an -> can', 'f-an -> fan', 'p-an -> pan', 'm-an -> man'],
    wordsTitleZh: '-an 单词',
    words: [
      { text: 'can', meaningZh: '?/??' },
      { text: 'fan', meaningZh: '??' },
      { text: 'pan', meaningZh: '???' },
      { text: 'man', meaningZh: '??' }
    ],
    sentencesTitleZh: '短句阅读',
    sentences: ['A can.', 'A fan.', 'I see a pan.', 'A man can sit.'],
    classroomEnglishTitleZh: '今天能听懂',
    classroomEnglish: ['Listen.', 'Look.', 'I see a fan.'],
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
    week: 1,
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
    soundDrillTitleZh: '声音复习',
    soundDrill: ['m', 's', 't', 'a', 'at', 'an'],
    blendDrillTitleZh: '混合拼读',
    blendDrill: ['m-at', 's-at', 'c-an', 'f-an', 'p-an', 'b-at'],
    wordsTitleZh: '混合单词',
    words: [
      { text: 'mat', meaningZh: '??' },
      { text: 'sat', meaningZh: '??' },
      { text: 'cat', meaningZh: '?' },
      { text: 'hat', meaningZh: '??' },
      { text: 'bat', meaningZh: '??/??' },
      { text: 'can', meaningZh: '?/??' },
      { text: 'fan', meaningZh: '??' },
      { text: 'pan', meaningZh: '???' },
      { text: 'man', meaningZh: '??' }
    ],
    sentencesTitleZh: '综合阅读',
    sentences: ['A cat sat.', 'I see a mat.', 'I see a fan.', 'I see a pan.', 'A man can sit.'],
    classroomEnglishTitleZh: '课堂指令复习',
    classroomEnglish: ['Listen.', 'Look.', 'Say it.', 'Stop.'],
    reviewWords: [],
    reviewSentences: [],
    practice: [
      { en: 'Read the words in a mixed order.', zh: '打乱顺序读这些词。' },
      { en: 'Find the words with -at.', zh: '找出带 -at 的词。' },
      { en: 'Find the words with -an.', zh: '找出带 -an 的词。' },
      { en: 'Record one sentence and compare.', zh: '录一句话，再和标准音对比。' }
    ]
  },
  {
    id: 7,
    type: 'regular',
    week: 2,
    phase: 'consonant_expansion',
    title: 'Lesson 7: p / b / h',
    titleZh: '第7课：新开头音 p / b / h',
    focus: 'Add three first sounds.',
    focusZh: '新增3个开头声音：p、b、h。',
    newSound: {
      label: 'p / b / h',
      labelZh: '辅音扩展',
      text: 'Use new first sounds with old endings.',
      textZh: '用新的开头声音，拼旧的结尾。',
      examples: ['pat', 'bat', 'hat']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: ['p', 'b', 'h', 'p b h'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['p-at -> pat', 'b-at -> bat', 'h-at -> hat', 'p-an -> pan'],
    wordsTitleZh: '新旧混合词',
    words: [
      { text: 'pat', meaningZh: '??' },
      { text: 'bat', meaningZh: '??/??' },
      { text: 'hat', meaningZh: '??' },
      { text: 'pan', meaningZh: '???' }
    ],
    sentencesTitleZh: '短句阅读',
    sentences: ['Pat a pan.', 'A bat.', 'I see a hat.', 'A pan.'],
    classroomEnglishTitleZh: '今天能听懂',
    classroomEnglish: ['Point.', 'Point to bat.', 'Point to hat.'],
    reviewWords: ['cat', 'mat', 'sat', 'can', 'fan'],
    reviewSentences: ['I see a pan.'],
    practice: [
      { en: 'Listen to p and b carefully.', zh: '仔细听 p 和 b 的区别。' },
      { en: 'Blend p-at, b-at, h-at.', zh: '拼读 p-at、b-at、h-at。' },
      { en: 'Record Pat a pan.', zh: '录一句 Pat a pan.，再对比。' }
    ]
  },
  {
    id: 8,
    type: 'regular',
    week: 2,
    phase: 'consonant_expansion',
    title: 'Lesson 8: c / f / n',
    titleZh: '第8课：新开头音 c / f / n',
    focus: 'Use c, f, n with short a.',
    focusZh: '用 c、f、n 继续拼短音 a。',
    newSound: {
      label: 'c / f / n',
      labelZh: '辅音扩展',
      text: 'Change the first sound and keep the vowel clear.',
      textZh: '换开头声音，但中间的 a 要保持清楚。',
      examples: ['can', 'fan', 'nap']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: ['c', 'f', 'n', 'a'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['c-an -> can', 'f-an -> fan', 'n-ap -> nap', 'c-ap -> cap'],
    wordsTitleZh: '新旧混合词',
    words: [
      { text: 'can', meaningZh: '?/??' },
      { text: 'fan', meaningZh: '??' },
      { text: 'nap', meaningZh: '??' },
      { text: 'cap', meaningZh: '???' },
      { text: 'map', meaningZh: '??' }
    ],
    sentencesTitleZh: '短句阅读',
    sentences: ['I see a cap.', 'I see a map.', 'A fan.', 'A cat can nap.'],
    classroomEnglishTitleZh: '今天能听懂',
    classroomEnglish: ['Circle.', 'Circle cat.', 'Circle fan.'],
    reviewWords: ['pat', 'bat', 'hat', 'pan'],
    reviewSentences: ['Pat a pan.'],
    practice: [
      { en: 'Listen to c, f, n.', zh: '听 c、f、n 的开头声音。' },
      { en: 'Read can, fan, nap, cap.', zh: '拼读 can、fan、nap、cap。' },
      { en: 'Record I see a map.', zh: '录一句 I see a map.。' }
    ]
  },
  {
    id: 9,
    type: 'regular',
    week: 2,
    phase: 'short_i',
    title: 'Lesson 9: Short i',
    titleZh: '第9课：短元音 i',
    focus: 'Hear the middle sound in sit.',
    focusZh: '学习第二个短元音：sit 中间的 i。',
    newSound: {
      label: 'short i',
      labelZh: '短元音 i',
      text: 'The middle sound changes: sat and sit are different.',
      textZh: '中间音变了：sat 和 sit 不一样。',
      examples: ['sit', 'pin', 'big']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: ['a', 'i', 'sat', 'sit'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['s-i-t -> sit', 'p-i-n -> pin', 'b-i-g -> big', 'p-i-g -> pig'],
    wordsTitleZh: '短 i 单词',
    words: [
      { text: 'sit', meaningZh: '?' },
      { text: 'pin', meaningZh: '??' },
      { text: 'big', meaningZh: '??' },
      { text: 'pig', meaningZh: '?' }
    ],
    sentencesTitleZh: '短句阅读',
    sentences: ['Sit.', 'A big pig.', 'I see a pig.', 'A pin.'],
    classroomEnglishTitleZh: '今天能听懂',
    classroomEnglish: ['Read.', 'Read it.', 'Sit.'],
    reviewWords: ['cat', 'sat', 'cap', 'map'],
    reviewSentences: ['A cat can nap.'],
    practice: [
      { en: 'Compare sat and sit.', zh: '对比 sat 和 sit 的中间音。' },
      { en: 'Read short i words slowly.', zh: '慢慢拼读短 i 单词。' },
      { en: 'Record I see a pig.', zh: '录一句 I see a pig.。' }
    ]
  },
  {
    id: 10,
    type: 'regular',
    week: 2,
    phase: 'it_family',
    title: 'Lesson 10: -it Family',
    titleZh: '第10课：-it 词族',
    focus: 'Change the first sound. Keep -it.',
    focusZh: '换开头声音，保留 -it。',
    newSound: {
      label: '-it',
      labelZh: '-it 词族',
      text: 's-it, h-it, b-it: same ending, new first sound.',
      textZh: 'sit、hit、bit 后面一样，开头不同。',
      examples: ['sit', 'hit', 'bit']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: ['i', 'it', 's', 'h', 'b'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['s-it -> sit', 'h-it -> hit', 'b-it -> bit', 'p-it -> pit'],
    wordsTitleZh: '-it 单词',
    words: [
      { text: 'sit', meaningZh: '?' },
      { text: 'hit', meaningZh: '??' },
      { text: 'bit', meaningZh: '???' },
      { text: 'pit', meaningZh: '?' }
    ],
    sentencesTitleZh: '短句阅读',
    sentences: ['Sit.', 'A bit.', 'Hit it.', 'I see a pit.'],
    classroomEnglishTitleZh: '今天能听懂',
    classroomEnglish: ['Read.', 'Repeat.', 'Try again.'],
    reviewWords: ['pin', 'big', 'pig', 'sat'],
    reviewSentences: ['I see a pig.'],
    practice: [
      { en: 'Read the ending first: it.', zh: '先读结尾 it。' },
      { en: 'Change only the first sound.', zh: '只换第一个声音。' },
      { en: 'Record sit, hit, bit.', zh: '录 sit、hit、bit。' }
    ]
  },
  {
    id: 11,
    type: 'regular',
    week: 2,
    phase: 'in_ig_family',
    title: 'Lesson 11: -in and -ig',
    titleZh: '第11课：-in 和 -ig',
    focus: 'Read two short-i families.',
    focusZh: '练两个短 i 词族：-in 和 -ig。',
    newSound: {
      label: '-in / -ig',
      labelZh: '-in / -ig 词族',
      text: 'Keep short i clear in the middle.',
      textZh: '中间的短 i 要读清楚。',
      examples: ['pin', 'fin', 'big', 'pig']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: ['i', 'in', 'ig', 'pin', 'pig'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['p-in -> pin', 'f-in -> fin', 'b-ig -> big', 'p-ig -> pig'],
    wordsTitleZh: '短 i 混合词',
    words: [
      { text: 'pin', meaningZh: '??' },
      { text: 'fin', meaningZh: '??' },
      { text: 'big', meaningZh: '??' },
      { text: 'pig', meaningZh: '?' },
      { text: 'wig', meaningZh: '??' }
    ],
    sentencesTitleZh: '短句阅读',
    sentences: ['A big pig.', 'I see a pin.', 'I see a wig.', 'A pig can sit.'],
    classroomEnglishTitleZh: '今天能听懂',
    classroomEnglish: ['Point.', 'Circle.', 'Repeat.'],
    reviewWords: ['sit', 'hit', 'bit', 'pit'],
    reviewSentences: ['Hit it.'],
    practice: [
      { en: 'Read -in, then -ig.', zh: '先读 -in，再读 -ig。' },
      { en: 'Do not mix short a and short i.', zh: '不要把短 a 和短 i 混掉。' },
      { en: 'Record A big pig.', zh: '录一句 A big pig.。' }
    ]
  },
  {
    id: 12,
    type: 'consolidation',
    week: 2,
    phase: 'phase_review_1',
    scope: 'phase',
    sourceLessons: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
    title: 'Lesson 12: Phase Review 1',
    titleZh: '第12课：阶段复习 1',
    focus: 'Mix short a and short i.',
    focusZh: '混合复习短 a 和短 i。',
    newSound: {
      label: 'short a + short i',
      labelZh: '短 a + 短 i',
      text: 'Read mixed words. Look at the middle sound.',
      textZh: '打乱读单词，重点看中间音。',
      examples: ['cat', 'sit', 'pan', 'pin', 'bat', 'bit']
    },
    soundDrillTitleZh: '声音复习',
    soundDrill: ['a', 'i', 'at', 'an', 'it', 'in', 'ig'],
    blendDrillTitleZh: '混合拼读',
    blendDrill: ['c-at', 's-it', 'p-an', 'p-in', 'b-at', 'b-it', 'p-ig'],
    wordsTitleZh: '混合单词',
    words: [
      { text: 'cat', meaningZh: '?' },
      { text: 'sit', meaningZh: '?' },
      { text: 'pan', meaningZh: '???' },
      { text: 'pin', meaningZh: '??' },
      { text: 'bat', meaningZh: '??/??' },
      { text: 'bit', meaningZh: '???' },
      { text: 'pig', meaningZh: '?' },
      { text: 'mat', meaningZh: '??' },
      { text: 'map', meaningZh: '??' },
      { text: 'cap', meaningZh: '???' }
    ],
    sentencesTitleZh: '综合阅读',
    sentences: ['I see a cat.', 'I see a pig.', 'A cat can sit.', 'A big pig can sit.', 'Pat a pan.'],
    classroomEnglishTitleZh: '课堂指令复习',
    classroomEnglish: ['Listen.', 'Look.', 'Point.', 'Circle.', 'Read.', 'Repeat.'],
    reviewWords: [],
    reviewSentences: [],
    practice: [
      { en: 'Sort words by the middle sound.', zh: '按中间音给单词分类：a 或 i。' },
      { en: 'Read mixed words without memorizing order.', zh: '打乱顺序读，不靠背。' },
      { en: 'Record two sentences and compare.', zh: '录两句话，再和标准音对比。' }
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
