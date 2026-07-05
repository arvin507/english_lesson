import { getLessonById, getNextLessonId } from './lessons.js';
import { completeLesson, getNextRoute, getProgress } from './progress.js';
import { initVoices, speakText, stopSpeech } from './audio.js';
import { getRecorderState, playRecording, startRecording, stopRecording } from './recorder.js';
import { renderHome, renderLesson, renderMessage, renderOnboarding } from './render.js';

const container = document.querySelector('#app');

function setStatus(message) {
  const status = document.querySelector('[data-status]');
  if (status) {
    status.textContent = message;
  }
}

function updateRecorderButtons() {
  const state = getRecorderState();
  const recordButton = document.querySelector('[data-action="record"]');
  const stopButton = document.querySelector('[data-action="stop"]');
  const playButton = document.querySelector('[data-action="play-voice"]');

  if (recordButton) {
    recordButton.disabled = state.isRecording;
  }

  if (stopButton) {
    stopButton.disabled = !state.isRecording;
  }

  if (playButton) {
    playButton.disabled = !state.hasRecording || state.isRecording;
  }
}

function goTo(href) {
  window.location.href = href;
}

function bindCommonActions(lessonId) {
  updateRecorderButtons();

  container.addEventListener('click', async (event) => {
    const button = event.target.closest('button');
    if (!button) {
      return;
    }

    const listenText = button.dataset.listen;
    const action = button.dataset.action;

    if (listenText) {
      const result = speakText(listenText);
      setStatus(result.message);
      return;
    }

    if (action === 'record') {
      stopSpeech();
      const result = await startRecording();
      setStatus(result.message);
      updateRecorderButtons();
      return;
    }

    if (action === 'stop') {
      const result = await stopRecording();
      setStatus(result.message);
      updateRecorderButtons();
      return;
    }

    if (action === 'play-voice') {
      const result = await playRecording();
      setStatus(result.message);
      updateRecorderButtons();
      return;
    }

    if (action === 'complete') {
      completeLesson(lessonId);
      const nextLessonId = getNextLessonId(lessonId);
      if (nextLessonId === null) {
        goTo('index.html');
      } else if (nextLessonId === 1) {
        goTo('lesson.html?lesson=1');
      } else {
        goTo(`lesson.html?lesson=${nextLessonId}`);
      }
    }
  });
}

function initHome() {
  const progress = getProgress();
  const nextRoute = getNextRoute(progress);
  renderHome(container, { progress, nextRoute });

  container.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action="continue"]');
    if (button) {
      goTo(button.dataset.href);
    }
  });
}

function initOnboarding() {
  const lesson = getLessonById(0);
  renderOnboarding(container, lesson);
  bindCommonActions(0);
}

function parseLessonId() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('lesson'));
  return Number.isInteger(id) ? id : null;
}

function initLesson() {
  const lessonId = parseLessonId();
  const lesson = getLessonById(lessonId);

  if (!lesson || lesson.id === 0) {
    renderMessage(container, 'Lesson not found', 'Go home and continue from the next lesson.');
    return;
  }

  renderLesson(container, lesson);
  bindCommonActions(lesson.id);
}

function init() {
  if (!container) {
    return;
  }

  initVoices();

  const page = document.body.dataset.page;

  if (page === 'home') {
    initHome();
    return;
  }

  if (page === 'onboarding') {
    initOnboarding();
    return;
  }

  if (page === 'lesson') {
    initLesson();
    return;
  }

  renderMessage(container, 'Page not found', 'This page is not ready yet.');
}

init();
