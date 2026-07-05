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
    phase: 'alphabet_sounds',
    title: 'Lesson 1: Aa Bb Cc',
    titleZh: '第1课：字母声音 Aa Bb Cc',
    focus: 'Hear the first sound in Aa, Bb, Cc words.',
    focusZh: '分清字母名和单词里的音：A 的字母名像“诶”，但 apple 里是短音 /a/。',
    newSound: {
      label: 'Aa / Bb / Cc',
      labelZh: '字母声音',
      text: 'A is in apple. B is in bag. C is in cat.',
      textZh: '先听“单词里的音”。字母名可以知道，但拼单词时主要用 sound。',
      examples: ['apple', 'bag', 'cat']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: [
      { text: 'Aa apple', listenText: 'apple', meaningZh: '苹果' },
      { text: 'Aa ant', listenText: 'ant', meaningZh: '蚂蚁' },
      { text: 'Bb bag', listenText: 'bag', meaningZh: '包' },
      { text: 'Bb boy', listenText: 'boy', meaningZh: '男孩' },
      { text: 'Cc cat', listenText: 'cat', meaningZh: '猫' },
      { text: 'Cc cup', listenText: 'cup', meaningZh: '杯子' }
    ],
    blendDrillTitleZh: '听辨练习',
    blendDrill: [
      { text: 'apple / ant', listenText: 'apple, ant' },
      { text: 'bag / boy', listenText: 'bag, boy' },
      { text: 'cat / cup', listenText: 'cat, cup' }
    ],
    wordsTitleZh: '今天认识的词',
    words: [
      { text: 'apple', meaningZh: '苹果' },
      { text: 'ant', meaningZh: '蚂蚁' },
      { text: 'bag', meaningZh: '包' },
      { text: 'boy', meaningZh: '男孩' },
      { text: 'cat', meaningZh: '猫' },
      { text: 'cup', meaningZh: '杯子' }
    ],
    sentencesTitleZh: '短句跟读',
    sentences: [
      { text: 'A cat.', meaningZh: '一只猫。' },
      { text: 'A cup.', meaningZh: '一个杯子。' },
      { text: 'I see a cat.', meaningZh: '我看到一只猫。' }
    ],
    classroomEnglishTitleZh: '今天会说：打招呼',
    classroomEnglish: [
      { text: 'Good morning!', meaningZh: '早上好！' },
      { text: 'Good afternoon!', meaningZh: '下午好！' },
      { text: 'Listen.', meaningZh: '听。' },
      { text: 'Say cat.', meaningZh: '说 cat。' }
    ],
    reviewWords: [],
    reviewSentences: [],
    practice: [
      { en: 'Listen to each word first.', zh: '每个词先听，再跟读。' },
      { en: 'Find the first sound.', zh: '听一听开头声音。' },
      { en: 'Record cat and cup.', zh: '录 cat 和 cup，听开头像不像。' }
    ]
  },
  {
    id: 2,
    type: 'regular',
    week: 1,
    phase: 'alphabet_sounds',
    title: 'Lesson 2: Dd Ee Ff',
    titleZh: '第2课：字母声音 Dd Ee Ff',
    focus: 'Hear Dd, Ee, Ff at the beginning of words.',
    focusZh: '听 Dd、Ee、Ff 在单词开头的声音。',
    newSound: {
      label: 'Dd / Ee / Ff',
      labelZh: '字母声音',
      text: 'D is in dog. E is in egg. F is in fish.',
      textZh: '继续听单词开头的声音。',
      examples: ['dog', 'egg', 'fish']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: [
      { text: 'Dd dog', listenText: 'dog', meaningZh: '狗' },
      { text: 'Dd duck', listenText: 'duck', meaningZh: '鸭子' },
      { text: 'Ee egg', listenText: 'egg', meaningZh: '鸡蛋' },
      { text: 'Ee elf', listenText: 'elf', meaningZh: '小精灵' },
      { text: 'Ff fish', listenText: 'fish', meaningZh: '鱼' },
      { text: 'Ff frog', listenText: 'frog', meaningZh: '青蛙' }
    ],
    blendDrillTitleZh: '听辨练习',
    blendDrill: [
      { text: 'dog / duck', listenText: 'dog, duck' },
      { text: 'egg / elf', listenText: 'egg, elf' },
      { text: 'fish / frog', listenText: 'fish, frog' }
    ],
    wordsTitleZh: '今天认识的词',
    words: [
      { text: 'dog', meaningZh: '狗' },
      { text: 'duck', meaningZh: '鸭子' },
      { text: 'egg', meaningZh: '鸡蛋' },
      { text: 'fish', meaningZh: '鱼' },
      { text: 'frog', meaningZh: '青蛙' }
    ],
    sentencesTitleZh: '短句跟读',
    sentences: [
      { text: 'A dog.', meaningZh: '一只狗。' },
      { text: 'An egg.', meaningZh: '一个鸡蛋。' },
      { text: 'I see a fish.', meaningZh: '我看到一条鱼。' }
    ],
    classroomEnglishTitleZh: '今天会说：名字',
    classroomEnglish: [
      { text: 'What is your name?', meaningZh: '你叫什么名字？' },
      { text: 'My name is Shirley.', meaningZh: '我叫雪梨。' },
      { text: 'Listen.', meaningZh: '听。' },
      { text: 'Say dog.', meaningZh: '说 dog。' }
    ],
    reviewWords: ['apple', 'bag', 'cat'],
    reviewSentences: [{ text: 'I see a cat.', meaningZh: '我看到一只猫。' }],
    practice: [
      { en: 'Listen to dog, egg, fish.', zh: '听 dog、egg、fish。' },
      { en: 'Copy the first sound.', zh: '模仿开头声音。' },
      { en: 'Record I see a fish.', zh: '录一句 I see a fish.。' }
    ]
  },
  {
    id: 3,
    type: 'regular',
    week: 1,
    phase: 'alphabet_sounds',
    title: 'Lesson 3: Gg Hh Ii',
    titleZh: '第3课：字母声音 Gg Hh Ii',
    focus: 'Hear Gg, Hh, Ii in words.',
    focusZh: '听 Gg、Hh、Ii 在单词里的声音。',
    newSound: {
      label: 'Gg / Hh / Ii',
      labelZh: '字母声音',
      text: 'G is in goat. H is in hat. I is in insect.',
      textZh: '这节继续练听开头音。',
      examples: ['goat', 'hat', 'insect']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: [
      { text: 'Gg goat', listenText: 'goat', meaningZh: '山羊' },
      { text: 'Gg goose', listenText: 'goose', meaningZh: '鹅' },
      { text: 'Hh hat', listenText: 'hat', meaningZh: '帽子' },
      { text: 'Hh hen', listenText: 'hen', meaningZh: '母鸡' },
      { text: 'Ii insect', listenText: 'insect', meaningZh: '昆虫' },
      { text: 'Ii iguana', listenText: 'iguana', meaningZh: '鬣蜥' }
    ],
    blendDrillTitleZh: '听辨练习',
    blendDrill: [
      { text: 'goat / goose', listenText: 'goat, goose' },
      { text: 'hat / hen', listenText: 'hat, hen' },
      { text: 'insect / iguana', listenText: 'insect, iguana' }
    ],
    wordsTitleZh: '今天认识的词',
    words: [
      { text: 'goat', meaningZh: '山羊' },
      { text: 'hat', meaningZh: '帽子' },
      { text: 'hen', meaningZh: '母鸡' },
      { text: 'insect', meaningZh: '昆虫' }
    ],
    sentencesTitleZh: '短句跟读',
    sentences: [
      { text: 'A hat.', meaningZh: '一顶帽子。' },
      { text: 'A hen.', meaningZh: '一只母鸡。' },
      { text: 'I see a hat.', meaningZh: '我看到一顶帽子。' }
    ],
    classroomEnglishTitleZh: '今天会说：年龄',
    classroomEnglish: [
      { text: 'How old are you?', meaningZh: '你几岁了？' },
      { text: 'I am five.', meaningZh: '我5岁。' },
      { text: 'Look.', meaningZh: '看。' },
      { text: 'Say hat.', meaningZh: '说 hat。' }
    ],
    reviewWords: ['dog', 'egg', 'fish'],
    reviewSentences: [{ text: 'A dog.', meaningZh: '一只狗。' }],
    practice: [
      { en: 'Listen to the first sound.', zh: '听单词开头。' },
      { en: 'Say hat and hen.', zh: '读 hat 和 hen。' },
      { en: 'Record I see a hat.', zh: '录一句 I see a hat.。' }
    ]
  },
  {
    id: 4,
    type: 'regular',
    week: 1,
    phase: 'alphabet_sounds',
    title: 'Lesson 4: Jj Kk Ll Mm',
    titleZh: '第4课：字母声音 Jj Kk Ll Mm',
    focus: 'Hear four new first sounds.',
    focusZh: '听四个新的开头声音。',
    newSound: {
      label: 'Jj / Kk / Ll / Mm',
      labelZh: '字母声音',
      text: 'J is in jam. K is in kid. L is in lion. M is in map.',
      textZh: '继续用单词听字母声音。',
      examples: ['jam', 'kid', 'lion', 'map']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: [
      { text: 'Jj jam', listenText: 'jam', meaningZh: '果酱' },
      { text: 'Kk kid', listenText: 'kid', meaningZh: '小孩' },
      { text: 'Ll lion', listenText: 'lion', meaningZh: '狮子' },
      { text: 'Mm map', listenText: 'map', meaningZh: '地图' },
      { text: 'Mm milk', listenText: 'milk', meaningZh: '牛奶' }
    ],
    blendDrillTitleZh: '听辨练习',
    blendDrill: [
      { text: 'jam / kid', listenText: 'jam, kid' },
      { text: 'lion / map', listenText: 'lion, map' },
      { text: 'milk / map', listenText: 'milk, map' }
    ],
    wordsTitleZh: '今天认识的词',
    words: [
      { text: 'jam', meaningZh: '果酱' },
      { text: 'kid', meaningZh: '小孩' },
      { text: 'lion', meaningZh: '狮子' },
      { text: 'map', meaningZh: '地图' },
      { text: 'milk', meaningZh: '牛奶' }
    ],
    sentencesTitleZh: '短句跟读',
    sentences: [
      { text: 'A map.', meaningZh: '一张地图。' },
      { text: 'I see a map.', meaningZh: '我看到一张地图。' },
      { text: 'A kid.', meaningZh: '一个小孩。' }
    ],
    classroomEnglishTitleZh: '今天会说：状态',
    classroomEnglish: [
      { text: 'Are you OK?', meaningZh: '你还好吗？' },
      { text: 'Yes, I am OK.', meaningZh: '我挺好的。' },
      { text: 'Point.', meaningZh: '指出来。' },
      { text: 'Point to map.', meaningZh: '指向 map。' }
    ],
    reviewWords: ['goat', 'hat', 'hen'],
    reviewSentences: [{ text: 'I see a hat.', meaningZh: '我看到一顶帽子。' }],
    practice: [
      { en: 'Listen to jam, kid, lion, map.', zh: '听 jam、kid、lion、map。' },
      { en: 'Point to the word you hear.', zh: '听到哪个词，就指哪个词。' },
      { en: 'Record I see a map.', zh: '录一句 I see a map.。' }
    ]
  },
  {
    id: 5,
    type: 'regular',
    week: 1,
    phase: 'alphabet_sounds',
    title: 'Lesson 5: Nn Oo Pp Qq',
    titleZh: '第5课：字母声音 Nn Oo Pp Qq',
    focus: 'Hear Nn, Oo, Pp, Qq in words.',
    focusZh: '听 Nn、Oo、Pp、Qq 在单词里的声音。',
    newSound: {
      label: 'Nn / Oo / Pp / Qq',
      labelZh: '字母声音',
      text: 'N is in nail. O is in ox. P is in pan. Q is in queen.',
      textZh: '继续建立字母和声音的联系。',
      examples: ['nail', 'ox', 'pan', 'queen']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: [
      { text: 'Nn nail', listenText: 'nail', meaningZh: '钉子' },
      { text: 'Nn nose', listenText: 'nose', meaningZh: '鼻子' },
      { text: 'Oo ox', listenText: 'ox', meaningZh: '公牛' },
      { text: 'Pp pan', listenText: 'pan', meaningZh: '平底锅' },
      { text: 'Pp panda', listenText: 'panda', meaningZh: '熊猫' },
      { text: 'Qq queen', listenText: 'queen', meaningZh: '女王' }
    ],
    blendDrillTitleZh: '听辨练习',
    blendDrill: [
      { text: 'nail / nose', listenText: 'nail, nose' },
      { text: 'pan / panda', listenText: 'pan, panda' },
      { text: 'ox / queen', listenText: 'ox, queen' }
    ],
    wordsTitleZh: '今天认识的词',
    words: [
      { text: 'nail', meaningZh: '钉子' },
      { text: 'nose', meaningZh: '鼻子' },
      { text: 'ox', meaningZh: '公牛' },
      { text: 'pan', meaningZh: '平底锅' },
      { text: 'panda', meaningZh: '熊猫' },
      { text: 'queen', meaningZh: '女王' }
    ],
    sentencesTitleZh: '短句跟读',
    sentences: [
      { text: 'A pan.', meaningZh: '一个平底锅。' },
      { text: 'I see a pan.', meaningZh: '我看到一个平底锅。' },
      { text: 'A panda.', meaningZh: '一只熊猫。' }
    ],
    classroomEnglishTitleZh: '今天会说：告别',
    classroomEnglish: [
      { text: 'Good-bye!', meaningZh: '再见！' },
      { text: 'See you tomorrow!', meaningZh: '明天见！' },
      { text: 'Circle.', meaningZh: '圈出来。' },
      { text: 'Circle pan.', meaningZh: '把 pan 圈出来。' }
    ],
    reviewWords: ['jam', 'kid', 'map'],
    reviewSentences: [{ text: 'I see a map.', meaningZh: '我看到一张地图。' }],
    practice: [
      { en: 'Listen and point.', zh: '听音并指出单词。' },
      { en: 'Say pan and panda.', zh: '读 pan 和 panda。' },
      { en: 'Record I see a pan.', zh: '录一句 I see a pan.。' }
    ]
  },
  {
    id: 6,
    type: 'consolidation',
    week: 1,
    phase: 'alphabet_review_1',
    scope: 'week',
    sourceLessons: [1, 2, 3, 4, 5],
    title: 'Lesson 6: Alphabet Review A-Q',
    titleZh: '第6课：字母声音复习 A-Q',
    focus: 'Review first sounds from A to Q.',
    focusZh: '复习 A 到 Q 的字母声音。',
    newSound: {
      label: 'A-Q review',
      labelZh: '字母声音复习',
      text: 'No new sound today. Listen, point, say, and record.',
      textZh: '今天不学新声音，只复习。',
      examples: ['apple', 'cat', 'dog', 'fish', 'hat', 'map', 'pan']
    },
    soundDrillTitleZh: '声音复习',
    soundDrill: ['apple', 'bag', 'cat', 'dog', 'egg', 'fish', 'hat', 'map', 'pan'],
    blendDrillTitleZh: '听辨复习',
    blendDrill: [
      { text: 'cat / cup', listenText: 'cat, cup' },
      { text: 'dog / duck', listenText: 'dog, duck' },
      { text: 'hat / hen', listenText: 'hat, hen' },
      { text: 'map / pan', listenText: 'map, pan' }
    ],
    wordsTitleZh: '复习词',
    words: [
      { text: 'apple', meaningZh: '苹果' },
      { text: 'cat', meaningZh: '猫' },
      { text: 'dog', meaningZh: '狗' },
      { text: 'fish', meaningZh: '鱼' },
      { text: 'hat', meaningZh: '帽子' },
      { text: 'map', meaningZh: '地图' },
      { text: 'pan', meaningZh: '平底锅' }
    ],
    sentencesTitleZh: '综合跟读',
    sentences: [
      { text: 'I see a cat.', meaningZh: '我看到一只猫。' },
      { text: 'I see a map.', meaningZh: '我看到一张地图。' },
      { text: 'I see a pan.', meaningZh: '我看到一个平底锅。' }
    ],
    classroomEnglishTitleZh: '口语复习：问好和告别',
    classroomEnglish: [
      { text: 'Good morning!', meaningZh: '早上好！' },
      { text: 'What is your name?', meaningZh: '你叫什么名字？' },
      { text: 'My name is Shirley.', meaningZh: '我叫雪梨。' },
      { text: 'How old are you?', meaningZh: '你几岁了？' },
      { text: 'Are you OK?', meaningZh: '你还好吗？' },
      { text: 'Good-bye!', meaningZh: '再见！' },
      { text: 'Listen.', meaningZh: '听。' },
      { text: 'Look.', meaningZh: '看。' },
      { text: 'Point.', meaningZh: '指出来。' },
      { text: 'Circle.', meaningZh: '圈出来。' }
    ],
    reviewWords: [],
    reviewSentences: [],
    practice: [
      { en: 'Read the words in mixed order.', zh: '打乱顺序读这些词。' },
      { en: 'Point to the word you hear.', zh: '听到哪个词，就指哪个词。' },
      { en: 'Record one sentence.', zh: '任选一句录音。' }
    ]
  },
  {
    id: 7,
    type: 'regular',
    week: 2,
    phase: 'alphabet_sounds',
    title: 'Lesson 7: Rr Ss Tt Uu',
    titleZh: '第7课：字母声音 Rr Ss Tt Uu',
    focus: 'Hear Rr, Ss, Tt, Uu in words.',
    focusZh: '继续完成 26 个字母声音。',
    newSound: {
      label: 'Rr / Ss / Tt / Uu',
      labelZh: '字母声音',
      text: 'R is in rat. S is in sun. T is in tent. U is in umbrella.',
      textZh: '听每个单词开头的声音。',
      examples: ['rat', 'sun', 'tent', 'umbrella']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: [
      { text: 'Rr rat', listenText: 'rat', meaningZh: '老鼠' },
      { text: 'Rr robot', listenText: 'robot', meaningZh: '机器人' },
      { text: 'Ss sun', listenText: 'sun', meaningZh: '太阳' },
      { text: 'Ss sand', listenText: 'sand', meaningZh: '沙子' },
      { text: 'Tt tent', listenText: 'tent', meaningZh: '帐篷' },
      { text: 'Uu up', listenText: 'up', meaningZh: '向上' }
    ],
    blendDrillTitleZh: '听辨练习',
    blendDrill: [
      { text: 'rat / robot', listenText: 'rat, robot' },
      { text: 'sun / sand', listenText: 'sun, sand' },
      { text: 'tent / up', listenText: 'tent, up' }
    ],
    wordsTitleZh: '今天认识的词',
    words: [
      { text: 'rat', meaningZh: '老鼠' },
      { text: 'robot', meaningZh: '机器人' },
      { text: 'sun', meaningZh: '太阳' },
      { text: 'sand', meaningZh: '沙子' },
      { text: 'tent', meaningZh: '帐篷' },
      { text: 'up', meaningZh: '向上' }
    ],
    sentencesTitleZh: '短句跟读',
    sentences: [
      { text: 'A rat.', meaningZh: '一只老鼠。' },
      { text: 'The sun.', meaningZh: '太阳。' },
      { text: 'I see a tent.', meaningZh: '我看到一个帐篷。' }
    ],
    classroomEnglishTitleZh: '今天会说：回答近况',
    classroomEnglish: [
      { text: "How's everything?", meaningZh: '最近怎么样？' },
      { text: 'Good!', meaningZh: '很好！' },
      { text: 'Very well.', meaningZh: '非常好。' },
      { text: 'Read.', meaningZh: '读。' }
    ],
    reviewWords: ['apple', 'cat', 'dog', 'map'],
    reviewSentences: [{ text: 'I see a cat.', meaningZh: '我看到一只猫。' }],
    practice: [
      { en: 'Listen to rat, sun, tent.', zh: '听 rat、sun、tent。' },
      { en: 'Copy the first sound.', zh: '模仿开头声音。' },
      { en: 'Record I see a tent.', zh: '录一句 I see a tent.。' }
    ]
  },
  {
    id: 8,
    type: 'regular',
    week: 2,
    phase: 'alphabet_sounds',
    title: 'Lesson 8: Vv Ww Xx Yy Zz',
    titleZh: '第8课：字母声音 Vv Ww Xx Yy Zz',
    focus: 'Finish the alphabet sound map.',
    focusZh: '完成 26 个字母声音地图。',
    newSound: {
      label: 'Vv / Ww / Xx / Yy / Zz',
      labelZh: '字母声音',
      text: 'V is in volcano. W is in web. X is in fox. Y is in yellow. Z is in zebra.',
      textZh: '注意 X 常常在词尾听到。',
      examples: ['volcano', 'web', 'fox', 'yellow', 'zebra']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: [
      { text: 'Vv volcano', listenText: 'volcano', meaningZh: '火山' },
      { text: 'Ww web', listenText: 'web', meaningZh: '网' },
      { text: 'Ww wig', listenText: 'wig', meaningZh: '假发' },
      { text: 'Xx fox', listenText: 'fox', meaningZh: '狐狸' },
      { text: 'Yy yellow', listenText: 'yellow', meaningZh: '黄色' },
      { text: 'Zz zebra', listenText: 'zebra', meaningZh: '斑马' }
    ],
    blendDrillTitleZh: '听辨练习',
    blendDrill: [
      { text: 'web / wig', listenText: 'web, wig' },
      { text: 'fox / six', listenText: 'fox, six' },
      { text: 'yellow / zebra', listenText: 'yellow, zebra' }
    ],
    wordsTitleZh: '今天认识的词',
    words: [
      { text: 'volcano', meaningZh: '火山' },
      { text: 'web', meaningZh: '网' },
      { text: 'wig', meaningZh: '假发' },
      { text: 'fox', meaningZh: '狐狸' },
      { text: 'yellow', meaningZh: '黄色' },
      { text: 'zebra', meaningZh: '斑马' }
    ],
    sentencesTitleZh: '短句跟读',
    sentences: [
      { text: 'A fox.', meaningZh: '一只狐狸。' },
      { text: 'A zebra.', meaningZh: '一只斑马。' },
      { text: 'I see a fox.', meaningZh: '我看到一只狐狸。' }
    ],
    classroomEnglishTitleZh: '今天会说：表扬',
    classroomEnglish: [
      { text: 'You are good!', meaningZh: '你真好！' },
      { text: 'You are clever!', meaningZh: '你真聪明！' },
      { text: 'Great!', meaningZh: '非常好！' },
      { text: 'Repeat.', meaningZh: '再读一遍。' }
    ],
    reviewWords: ['rat', 'sun', 'tent', 'up'],
    reviewSentences: [{ text: 'I see a tent.', meaningZh: '我看到一个帐篷。' }],
    practice: [
      { en: 'Listen to the word first.', zh: '每个词先听。' },
      { en: 'Say the word after Listen.', zh: '听完再跟读。' },
      { en: 'Record I see a fox.', zh: '录一句 I see a fox.。' }
    ]
  },
  {
    id: 9,
    type: 'regular',
    week: 2,
    phase: 'short_a_families',
    title: 'Lesson 9: ad ag at',
    titleZh: '第9课：短音组合 ad / ag / at',
    focus: 'Read short-a word families.',
    focusZh: '开始拼读短音 a 的词族。',
    newSound: {
      label: 'ad / ag / at',
      labelZh: '短音 a 词族',
      text: 'Keep the middle short-a sound clear.',
      textZh: '中间的短音 a 要读清楚。',
      examples: ['dad', 'bag', 'hat']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: ['a', 'ad', 'ag', 'at'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['d-ad -> dad', 'b-ag -> bag', 'h-at -> hat', 'r-at -> rat'],
    wordsTitleZh: '短 a 单词',
    words: [
      { text: 'dad', meaningZh: '爸爸' },
      { text: 'sad', meaningZh: '伤心的' },
      { text: 'bag', meaningZh: '包' },
      { text: 'tag', meaningZh: '标签' },
      { text: 'hat', meaningZh: '帽子' },
      { text: 'rat', meaningZh: '老鼠' }
    ],
    sentencesTitleZh: '短句阅读',
    sentences: [
      { text: 'Dad is sad.', meaningZh: '爸爸伤心了。' },
      { text: 'A bag.', meaningZh: '一个包。' },
      { text: 'A rat in a hat.', meaningZh: '一只戴帽子的老鼠。' }
    ],
    classroomEnglishTitleZh: '今天会说：感谢',
    classroomEnglish: [
      { text: 'Thank you very much!', meaningZh: '非常感谢你！' },
      { text: 'Very nice!', meaningZh: '非常棒！' },
      { text: 'Wonderful!', meaningZh: '太棒了！' },
      { text: 'Read it.', meaningZh: '读它。' }
    ],
    reviewWords: ['cat', 'hat', 'rat', 'bag'],
    reviewSentences: [{ text: 'I see a cat.', meaningZh: '我看到一只猫。' }],
    practice: [
      { en: 'Read the ending first.', zh: '先读后面的词族。' },
      { en: 'Change only the first sound.', zh: '只换开头声音。' },
      { en: 'Record dad, bag, hat.', zh: '录 dad、bag、hat。' }
    ]
  },
  {
    id: 10,
    type: 'regular',
    week: 2,
    phase: 'short_a_families',
    title: 'Lesson 10: am an ap',
    titleZh: '第10课：短音组合 am / an / ap',
    focus: 'Read more short-a word families.',
    focusZh: '继续拼读短音 a 的词族。',
    newSound: {
      label: 'am / an / ap',
      labelZh: '短音 a 词族',
      text: 'Jam, fan, map all have short a.',
      textZh: 'jam、fan、map 中间都是短音 a。',
      examples: ['jam', 'fan', 'map']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: ['a', 'am', 'an', 'ap'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['j-am -> jam', 'f-an -> fan', 'p-an -> pan', 'm-ap -> map', 'c-ap -> cap'],
    wordsTitleZh: '短 a 单词',
    words: [
      { text: 'jam', meaningZh: '果酱' },
      { text: 'ham', meaningZh: '火腿' },
      { text: 'fan', meaningZh: '风扇' },
      { text: 'pan', meaningZh: '平底锅' },
      { text: 'map', meaningZh: '地图' },
      { text: 'cap', meaningZh: '鸭舌帽' },
      { text: 'nap', meaningZh: '小睡' }
    ],
    sentencesTitleZh: '短句阅读',
    sentences: [
      { text: 'I see a fan.', meaningZh: '我看到一个风扇。' },
      { text: 'I see a map.', meaningZh: '我看到一张地图。' },
      { text: 'A cat can nap.', meaningZh: '一只猫会小睡。' }
    ],
    classroomEnglishTitleZh: '今天会说：道歉',
    classroomEnglish: [
      { text: 'I am sorry.', meaningZh: '对不起。' },
      { text: 'Never mind.', meaningZh: '没关系。' },
      { text: 'Excuse me!', meaningZh: '打扰一下！' },
      { text: 'Point to map.', meaningZh: '指向 map。' }
    ],
    reviewWords: ['dad', 'bag', 'hat', 'rat'],
    reviewSentences: [{ text: 'A rat in a hat.', meaningZh: '一只戴帽子的老鼠。' }],
    practice: [
      { en: 'Read am, an, ap.', zh: '先读 am、an、ap。' },
      { en: 'Blend the first sound.', zh: '再拼开头声音。' },
      { en: 'Record I see a fan.', zh: '录一句 I see a fan.。' }
    ]
  },
  {
    id: 11,
    type: 'regular',
    week: 2,
    phase: 'short_e_families',
    title: 'Lesson 11: ed eg en et',
    titleZh: '第11课：短音组合 ed / eg / en / et',
    focus: 'Start short-e word families.',
    focusZh: '开始学习短音 e 的词族。',
    newSound: {
      label: 'short e',
      labelZh: '短音 e',
      text: 'Red, leg, hen, pet have short e.',
      textZh: 'red、leg、hen、pet 中间都是短音 e。',
      examples: ['red', 'leg', 'hen', 'pet']
    },
    soundDrillTitleZh: '声音热身',
    soundDrill: ['e', 'ed', 'eg', 'en', 'et'],
    blendDrillTitleZh: '拼读练习',
    blendDrill: ['r-ed -> red', 'l-eg -> leg', 'h-en -> hen', 'p-et -> pet', 't-en -> ten'],
    wordsTitleZh: '短 e 单词',
    words: [
      { text: 'red', meaningZh: '红色' },
      { text: 'bed', meaningZh: '床' },
      { text: 'leg', meaningZh: '腿' },
      { text: 'hen', meaningZh: '母鸡' },
      { text: 'pen', meaningZh: '钢笔' },
      { text: 'ten', meaningZh: '十' },
      { text: 'pet', meaningZh: '宠物' }
    ],
    sentencesTitleZh: '短句阅读',
    sentences: [
      { text: 'A red pen.', meaningZh: '一支红色的钢笔。' },
      { text: 'A hen.', meaningZh: '一只母鸡。' },
      { text: 'I see a pet.', meaningZh: '我看到一个宠物。' }
    ],
    classroomEnglishTitleZh: '今天会说：有趣和天气',
    classroomEnglish: [
      { text: 'How funny!', meaningZh: '太有趣了！' },
      { text: "Wow! It's so nice!", meaningZh: '哇！太好了！' },
      { text: "It's a nice day!", meaningZh: '美好的一天！' },
      { text: 'Circle pen.', meaningZh: '把 pen 圈出来。' }
    ],
    reviewWords: ['jam', 'fan', 'map', 'cap'],
    reviewSentences: [{ text: 'I see a fan.', meaningZh: '我看到一个风扇。' }],
    practice: [
      { en: 'Compare short a and short e.', zh: '对比短 a 和短 e。' },
      { en: 'Read red, hen, pet.', zh: '拼读 red、hen、pet。' },
      { en: 'Record A red pen.', zh: '录一句 A red pen.。' }
    ]
  },
  {
    id: 12,
    type: 'consolidation',
    week: 2,
    phase: 'phase_review_1',
    scope: 'phase',
    sourceLessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    title: 'Lesson 12: Alphabet + Short a/e Review',
    titleZh: '第12课：字母声音 + 短 a/e 复习',
    focus: 'Review alphabet sounds and short a/e word families.',
    focusZh: '复习 26 个字母声音，以及短 a、短 e 词族。',
    newSound: {
      label: 'review',
      labelZh: '阶段复习',
      text: 'No new sound today. Mix alphabet words and short-vowel words.',
      textZh: '今天不学新声音，打乱复习。',
      examples: ['cat', 'bag', 'fan', 'red', 'hen', 'pet']
    },
    soundDrillTitleZh: '声音复习',
    soundDrill: ['apple', 'cat', 'dog', 'fish', 'hat', 'map', 'pan', 'fox', 'red', 'hen'],
    blendDrillTitleZh: '混合拼读',
    blendDrill: ['c-at -> cat', 'b-ag -> bag', 'f-an -> fan', 'm-ap -> map', 'r-ed -> red', 'h-en -> hen', 'p-et -> pet'],
    wordsTitleZh: '混合单词',
    words: [
      { text: 'cat', meaningZh: '猫' },
      { text: 'bag', meaningZh: '包' },
      { text: 'fan', meaningZh: '风扇' },
      { text: 'map', meaningZh: '地图' },
      { text: 'red', meaningZh: '红色' },
      { text: 'hen', meaningZh: '母鸡' },
      { text: 'pen', meaningZh: '钢笔' },
      { text: 'pet', meaningZh: '宠物' }
    ],
    sentencesTitleZh: '综合阅读',
    sentences: [
      { text: 'I see a cat.', meaningZh: '我看到一只猫。' },
      { text: 'I see a fan.', meaningZh: '我看到一个风扇。' },
      { text: 'A red pen.', meaningZh: '一支红色的钢笔。' },
      { text: 'I see a pet.', meaningZh: '我看到一个宠物。' }
    ],
    classroomEnglishTitleZh: '口语复习：问好、表扬、感谢、道歉',
    classroomEnglish: [
      { text: 'Good morning!', meaningZh: '早上好！' },
      { text: 'How are you?', meaningZh: '你好吗？' },
      { text: 'I am fine, thank you.', meaningZh: '我很好，谢谢。' },
      { text: 'Great!', meaningZh: '非常好！' },
      { text: 'Thank you very much!', meaningZh: '非常感谢你！' },
      { text: 'I am sorry.', meaningZh: '对不起。' },
      { text: 'Never mind.', meaningZh: '没关系。' },
      { text: 'Listen.', meaningZh: '听。' },
      { text: 'Look.', meaningZh: '看。' },
      { text: 'Point.', meaningZh: '指出来。' },
      { text: 'Circle.', meaningZh: '圈出来。' },
      { text: 'Read.', meaningZh: '读。' },
      { text: 'Repeat.', meaningZh: '再读一遍。' }
    ],
    reviewWords: [],
    reviewSentences: [],
    practice: [
      { en: 'Read mixed words without memorizing order.', zh: '打乱顺序读，不靠背。' },
      { en: 'Sort short a and short e words.', zh: '把短 a 和短 e 单词分开。' },
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
