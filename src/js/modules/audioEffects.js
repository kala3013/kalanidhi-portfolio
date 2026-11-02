/**
 * Cybernetic Web Audio Synthesizer & Sound Effects
 * Generates lightweight, tactile futuristic micro-sounds using native Web Audio API (zero external assets).
 * Muted by default to respect user browsing privacy.
 */

let audioCtx = null;
let isMuted = true;

// Restore user preference if previously chosen
try {
  const saved = localStorage.getItem('portfolio_sfx_muted');
  if (saved !== null) {
    isMuted = saved === 'true';
  }
} catch (e) {
  // localStorage fallback
}

function getAudioContext() {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isAudioMuted() {
  return isMuted;
}

export function setAudioMuted(muted) {
  isMuted = muted;
  try {
    localStorage.setItem('portfolio_sfx_muted', String(muted));
  } catch (e) {}
  updateAudioUi();
}

export function toggleAudio() {
  const next = !isMuted;
  setAudioMuted(next);
  if (!next) {
    getAudioContext();
    playSuccessTone();
  }
  return next;
}

export function playTactileClick() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.045);
  } catch (e) {}
}

export function playAdTransition() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.035, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(now + 0.11);
  } catch (e) {}
}

export function playAdTune() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.linearRampToValueAtTime(740, now + 0.12);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(900, now);
    filter.Q.setValueAtTime(3, now);

    gain.gain.setValueAtTime(0.025, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(now + 0.15);
  } catch (e) {}
}

export function playSuccessTone() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99]; // C5, E5, G5 chord
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.03, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.26);
    });
  } catch (e) {}
}

export function updateAudioUi() {
  const toggleBtn = document.getElementById('audio-sfx-toggle');
  if (!toggleBtn) return;

  if (isMuted) {
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-pressed', 'false');
    toggleBtn.setAttribute('title', 'Enable Futuristic Audio SFX');
    toggleBtn.innerHTML = `
      <svg class="audio-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
      </svg>
      <span class="audio-label">SFX: OFF</span>
    `;
  } else {
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-pressed', 'true');
    toggleBtn.setAttribute('title', 'Mute Futuristic Audio SFX');
    toggleBtn.innerHTML = `
      <svg class="audio-icon pulse-sound" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
      </svg>
      <span class="audio-label">SFX: ON</span>
    `;
  }
}

export function initAudioEffects() {
  const toggleBtn = document.getElementById('audio-sfx-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      toggleAudio();
    });
  }
  updateAudioUi();
}

