const state = {
  mediaStream: null,
  mediaRecorder: null,
  chunks: [],
  audioUrl: null,
  audioElement: null,
  status: 'idle'
};

function setStatus(status) {
  state.status = status;
}

function clearAudioUrl() {
  if (state.audioUrl) {
    URL.revokeObjectURL(state.audioUrl);
    state.audioUrl = null;
  }
  state.audioElement = null;
}

export function isRecordingSupported() {
  return Boolean(navigator.mediaDevices?.getUserMedia && window.MediaRecorder);
}

export function getRecorderState() {
  return {
    status: state.status,
    hasRecording: Boolean(state.audioUrl),
    isRecording: state.status === 'recording'
  };
}

export async function startRecording() {
  if (!isRecordingSupported()) {
    setStatus('unsupported');
    return { ok: false, status: state.status, message: '这个设备暂时不能录音。没关系，仍然可以完成课程。' };
  }

  try {
    clearAudioUrl();
    state.chunks = [];
    state.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.mediaRecorder = new MediaRecorder(state.mediaStream);

    state.mediaRecorder.addEventListener('dataavailable', (event) => {
      if (event.data.size > 0) {
        state.chunks.push(event.data);
      }
    });

    state.mediaRecorder.start();
    setStatus('recording');
    return { ok: true, status: state.status, message: '开始录音了，现在读出来。' };
  } catch (error) {
    setStatus(error?.name === 'NotAllowedError' ? 'denied' : 'error');
    stopTracks();
    return { ok: false, status: state.status, message: '麦克风被阻止了。没关系，仍然可以完成课程。' };
  }
}

export function stopRecording() {
  if (!state.mediaRecorder || state.status !== 'recording') {
    return Promise.resolve({ ok: false, status: state.status, message: '现在没有正在录音。' });
  }

  return new Promise((resolve) => {
    state.mediaRecorder.addEventListener('stop', () => {
      const blob = new Blob(state.chunks, { type: state.mediaRecorder.mimeType || 'audio/webm' });
      clearAudioUrl();
      state.audioUrl = URL.createObjectURL(blob);
      state.audioElement = new Audio(state.audioUrl);
      state.chunks = [];
      stopTracks();
      setStatus('ready');
      resolve({ ok: true, status: state.status, message: '录好了。点 Play My Voice 听自己的声音。' });
    }, { once: true });

    state.mediaRecorder.stop();
  });
}

export async function playRecording() {
  if (!state.audioElement) {
    return { ok: false, status: state.status, message: '请先录音。' };
  }

  try {
    state.audioElement.currentTime = 0;
    await state.audioElement.play();
    return { ok: true, status: state.status, message: '正在播放你的声音。' };
  } catch {
    setStatus('error');
    return { ok: false, status: state.status, message: '录音播放失败，可以再录一次。' };
  }
}

export function stopTracks() {
  if (state.mediaStream) {
    state.mediaStream.getTracks().forEach((track) => track.stop());
    state.mediaStream = null;
  }
}

export function cleanupRecording() {
  if (state.mediaRecorder && state.status === 'recording') {
    state.mediaRecorder.stop();
  }
  stopTracks();
  clearAudioUrl();
  state.chunks = [];
  setStatus('idle');
}
