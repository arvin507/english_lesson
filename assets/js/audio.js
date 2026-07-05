let voices = [];

function loadVoices() {
  if (!('speechSynthesis' in window)) {
    voices = [];
    return voices;
  }

  voices = window.speechSynthesis.getVoices();
  return voices;
}

export function initVoices() {
  loadVoices();

  if ('speechSynthesis' in window) {
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
  }
}

export function getPreferredVoice() {
  if (!voices.length) {
    loadVoices();
  }

  return (
    voices.find((voice) => voice.lang === 'en-US') ||
    voices.find((voice) => voice.lang && voice.lang.startsWith('en')) ||
    voices[0] ||
    null
  );
}

export function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export function speakText(text) {
  if (!('speechSynthesis' in window) || !window.SpeechSynthesisUtterance) {
    return { ok: false, message: '这个设备暂时不能播放标准音。' };
  }

  const cleanText = String(text || '').trim();
  if (!cleanText) {
    return { ok: false, message: '这里没有可以播放的内容。' };
  }

  stopSpeech();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  const voice = getPreferredVoice();

  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || 'en-US';
  } else {
    utterance.lang = 'en-US';
  }

  utterance.rate = 0.55;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);

  return { ok: true, message: `正在播放：${cleanText}` };
}
