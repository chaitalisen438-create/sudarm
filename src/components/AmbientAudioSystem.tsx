/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Heart, Sparkles, Volume1 } from 'lucide-react';

export default function AmbientAudioSystem() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<'raga' | 'terenaam'>('terenaam');
  const [showSelector, setShowSelector] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(85); // Boosted default volume level (85%)
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const activeNodesRef = useRef<AudioNode[]>([]);
  const timeoutsRef = useRef<number[]>([]);
  
  // Persistence keys
  const LOCAL_STORAGE_KEY = 'sundaram_music_pref';
  const LOCAL_STORAGE_TRACK_KEY = 'sundaram_track_pref';
  const LOCAL_STORAGE_VOL_KEY = 'sundaram_volume_pref';

  useEffect(() => {
    // Check saved preferences on mount
    const savedPref = localStorage.getItem(LOCAL_STORAGE_KEY);
    const savedTrack = localStorage.getItem(LOCAL_STORAGE_TRACK_KEY) as 'raga' | 'terenaam';
    const savedVol = localStorage.getItem(LOCAL_STORAGE_VOL_KEY);
    
    if (savedTrack === 'raga' || savedTrack === 'terenaam') {
      setSelectedTrack(savedTrack);
    } else {
      setSelectedTrack('terenaam');
    }
    if (savedVol) {
      setVolumeLevel(parseInt(savedVol, 10));
    }
    
    return () => {
      stopAllAudio();
    };
  }, []);

  // Update Gain Node dynamically when volume level slider is changed
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      const targetGain = (volumeLevel / 100) * 0.45; // Triple-boosted maximum gain scale (0.45 max gain instead of 0.12)
      masterGainRef.current.gain.linearRampToValueAtTime(targetGain, audioCtxRef.current.currentTime + 0.1);
    }
    localStorage.setItem(LOCAL_STORAGE_VOL_KEY, volumeLevel.toString());
  }, [volumeLevel]);

  const initAudio = () => {
    if (audioCtxRef.current) return;

    // Create AudioContext (supports standard & legacy)
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;

    // Create a feedback delay line to act as a beautiful premium boutique reverberant space
    const delayNode = ctx.createDelay(2.0);
    const feedbackNode = ctx.createGain();
    const delayFilterNode = ctx.createBiquadFilter();

    delayNode.delayTime.value = 0.6; // 600ms echo
    feedbackNode.gain.value = 0.45; // 45% echo decay
    delayFilterNode.type = 'lowpass';
    delayFilterNode.frequency.value = 1000; // Warm low-pass echoes

    // Connect delay loop
    delayNode.connect(delayFilterNode);
    delayFilterNode.connect(feedbackNode);
    feedbackNode.connect(delayNode);

    // Create Master Gain Node
    const masterGain = ctx.createGain();
    // Dynamic scale calculation based on slider
    const initialGain = (volumeLevel / 100) * 0.45; 
    masterGain.gain.setValueAtTime(initialGain, ctx.currentTime);
    masterGainRef.current = masterGain;

    // Connect to destination
    masterGain.connect(ctx.destination);
    
    // Connect Delay directly to master
    delayNode.connect(masterGain);
    feedbackNode.connect(masterGain);

    // Store delay connection points for synths
    (ctx as any).delayNode = delayNode;
    (ctx as any).masterGain = masterGain;

    // Start background threads for synthesis
    startDroneSequence();
    startMelodySequence();
    startChimeSequence();
  };

  // 1. Warm Ambient Drone (Mimicking Indian classical Tanpura / boutique pad chords)
  const startDroneSequence = () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const baseFreqs = [65.41, 98.0, 130.81, 196.0];

    baseFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(180 + idx * 40, ctx.currentTime);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      
      const connectDrone = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const now = ctx.currentTime;
        const cycleLen = 12 + idx * 2;
        
        gain.gain.setValueAtTime(0, now);
        // Boosted drone amplitude for robust, fuller acoustic space
        gain.gain.linearRampToValueAtTime(0.045, now + cycleLen / 2);
        gain.gain.linearRampToValueAtTime(0, now + cycleLen);

        const timeoutId = window.setTimeout(connectDrone, cycleLen * 1000);
        timeoutsRef.current.push(timeoutId);
      };

      osc.connect(filter);
      filter.connect(gain);
      gain.connect((ctx as any).masterGain);

      osc.start(ctx.currentTime);
      activeNodesRef.current.push(osc);
      
      connectDrone();
    });
  };

  // 2. Soft Bamboo Flute Tones (High volume flute model)
  const playFluteNote = (freq: number, duration: number, volume: number) => {
    const ctx = audioCtxRef.current;
    if (!ctx || ctx.state === 'suspended') return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const vibrato = ctx.createOscillator();
    const vibratoGain = ctx.createGain();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    vibrato.frequency.setValueAtTime(5.5, now);
    vibratoGain.gain.setValueAtTime(3.5, now);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);

    gain.gain.setValueAtTime(0, now);
    // Double-boosted flute notes for high volume clarity
    gain.gain.linearRampToValueAtTime(volume * 2.5, now + 0.15); 
    gain.gain.setValueAtTime(volume * 2.5, now + duration - 0.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc.frequency);
    osc.connect(filter);
    filter.connect(gain);
    
    gain.connect((ctx as any).masterGain);
    if ((ctx as any).delayNode) {
      const sendGain = ctx.createGain();
      sendGain.gain.setValueAtTime(0.3, now); 
      gain.connect(sendGain);
      sendGain.connect((ctx as any).delayNode);
    }

    vibrato.start(now);
    osc.start(now);

    vibrato.stop(now + duration + 0.1);
    osc.stop(now + duration + 0.1);

    activeNodesRef.current.push(osc);
    activeNodesRef.current.push(vibrato);
  };

  // 3. Sitar plucks (High volume sitar model)
  const playSitarPluck = (freq: number, volume: number) => {
    const ctx = audioCtxRef.current;
    if (!ctx || ctx.state === 'suspended') return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, now);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 1.8, now);
    filter.Q.setValueAtTime(1.5, now);

    gain.gain.setValueAtTime(0, now);
    // Double-boosted Sitar pluck amplitude
    gain.gain.linearRampToValueAtTime(volume * 2.5, now + 0.005); 
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect((ctx as any).masterGain);

    if ((ctx as any).delayNode) {
      const sendGain = ctx.createGain();
      sendGain.gain.setValueAtTime(0.4, now); 
      gain.connect(sendGain);
      sendGain.connect((ctx as any).delayNode);
    }

    osc.start(now);
    osc.stop(now + 2.0);

    activeNodesRef.current.push(osc);
  };

  // 4. Raag Yaman Melodic Sequence Thread
  const startMelodySequence = () => {
    const scale = [261.63, 293.66, 329.63, 369.99, 392.00, 440.00, 493.88, 523.25];
    
    const phrases = [
      [1, 2, 0, 1],       
      [2, 3, 4, 3, 2],    
      [4, 5, 6, 5],       
      [6, 7, 6, 5, 4, 3], 
      [4, 3, 2, 1, 0]     
    ];

    let currentPhraseIdx = 0;
    let noteIdx = 0;

    const triggerNextNote = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed' || selectedTrack !== 'raga') {
        const timeoutId = window.setTimeout(triggerNextNote, 2000);
        timeoutsRef.current.push(timeoutId);
        return;
      }

      const phrase = phrases[currentPhraseIdx];
      const scaleDegree = phrase[noteIdx];
      const freq = scale[scaleDegree];

      const roll = Math.random();
      if (roll > 0.65) {
        playSitarPluck(freq, 0.045); // Boosted from 0.022
      } else {
        playFluteNote(freq, 1.8, 0.030); // Boosted from 0.012
      }

      const rhythmChoice = Math.random();
      let stepDelay = 920;
      
      if (rhythmChoice > 0.8) {
        stepDelay = 1840;
      } else if (rhythmChoice < 0.2) {
        stepDelay = 460;
      }

      noteIdx++;
      if (noteIdx >= phrase.length) {
        noteIdx = 0;
        currentPhraseIdx = (currentPhraseIdx + 1) % phrases.length;
        stepDelay = 2800; 
      }

      const timeoutId = window.setTimeout(triggerNextNote, stepDelay);
      timeoutsRef.current.push(timeoutId);
    };

    triggerNextNote();
  };

  // 5. Crystalline Chimes / Soft Bells
  const startChimeSequence = () => {
    const triggerChime = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed' || selectedTrack !== 'raga') {
        const timeoutId = window.setTimeout(triggerChime, 8000);
        timeoutsRef.current.push(timeoutId);
        return;
      }
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;

      const frequencies = [1479.98, 1760.0, 1975.53, 2217.46];
      const chimeFreq = frequencies[Math.floor(Math.random() * frequencies.length)];

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(chimeFreq, now);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(chimeFreq * 1.503, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.012, now + 0.01); // Boosted bell gain
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect((ctx as any).masterGain);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 2.6);
      osc2.stop(now + 2.6);

      const nextDelay = 8000 + Math.random() * 7000;
      const timeoutId = window.setTimeout(triggerChime, nextDelay);
      timeoutsRef.current.push(timeoutId);
    };

    triggerChime();
  };

  // Stop All Audio Nodes
  const stopAllAudio = () => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];

    activeNodesRef.current.forEach((node) => {
      try {
        (node as any).stop();
      } catch (e) {}
    });
    activeNodesRef.current = [];
  };

  // Main Toggle Handle
  const handleToggleMusic = async () => {
    if (selectedTrack === 'terenaam') {
      setIsPlaying(!isPlaying);
      localStorage.setItem(LOCAL_STORAGE_KEY, !isPlaying ? 'ON' : 'OFF');
      return;
    }

    const ctxClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!ctxClass) return;

    if (!isPlaying) {
      try {
        initAudio();
        const ctx = audioCtxRef.current;
        if (ctx) {
          if (ctx.state === 'suspended') {
            await ctx.resume();
          }
          const now = ctx.currentTime;
          const targetGain = (volumeLevel / 100) * 0.45;
          masterGainRef.current?.gain.setValueAtTime(0, now);
          masterGainRef.current?.gain.linearRampToValueAtTime(targetGain, now + 1.0);
        }
        setIsPlaying(true);
        localStorage.setItem(LOCAL_STORAGE_KEY, 'ON');
      } catch (err) {
        console.warn('Audio Context initialization failed:', err);
      }
    } else {
      const ctx = audioCtxRef.current;
      if (ctx && masterGainRef.current) {
        const now = ctx.currentTime;
        masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, now);
        masterGainRef.current.gain.linearRampToValueAtTime(0, now + 1.0);
        
        const timeoutId = window.setTimeout(() => {
          ctx.suspend();
        }, 1000);
        timeoutsRef.current.push(timeoutId);
      }
      setIsPlaying(false);
      localStorage.setItem(LOCAL_STORAGE_KEY, 'OFF');
    }
  };

  const handleTrackChange = async (track: 'raga' | 'terenaam') => {
    if (isPlaying) {
      if (selectedTrack === 'raga') {
        const ctx = audioCtxRef.current;
        if (ctx && masterGainRef.current) {
          masterGainRef.current.gain.setValueAtTime(0, ctx.currentTime);
          ctx.suspend();
        }
      }
      setIsPlaying(false);
    }
    
    setSelectedTrack(track);
    localStorage.setItem(LOCAL_STORAGE_TRACK_KEY, track);
    setShowSelector(false);

    // Auto-trigger on change
    setTimeout(async () => {
      if (track === 'terenaam') {
        setIsPlaying(true);
        localStorage.setItem(LOCAL_STORAGE_KEY, 'ON');
      } else {
        const ctxClass = window.AudioContext || (window as any).webkitAudioContext;
        if (ctxClass) {
          try {
            initAudio();
            const ctx = audioCtxRef.current;
            if (ctx) {
              if (ctx.state === 'suspended') {
                await ctx.resume();
              }
              const now = ctx.currentTime;
              const targetGain = (volumeLevel / 100) * 0.45;
              masterGainRef.current?.gain.setValueAtTime(0, now);
              masterGainRef.current?.gain.linearRampToValueAtTime(targetGain, now + 1.0);
            }
            setIsPlaying(true);
            localStorage.setItem(LOCAL_STORAGE_KEY, 'ON');
          } catch (e) {
            console.warn(e);
          }
        }
      }
    }, 150);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Collapsible Selector Panel with interactive Volume Slider */}
      {showSelector && (
        <div className="bg-[#4B315C] border border-[#C7A86B]/30 rounded-2xl p-4 shadow-2xl w-60 text-left animate-scale-in text-white mb-1">
          <p className="text-[9px] font-bold tracking-widest text-[#C7A86B] uppercase mb-2 flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> SELECT SOUNDSCAPE
          </p>
          
          <div className="space-y-2 mb-4">
            <button
              onClick={() => handleTrackChange('raga')}
              className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                selectedTrack === 'raga'
                  ? 'border-[#C7A86B] bg-white/10 font-bold text-white'
                  : 'border-white/10 hover:border-white/30 text-white/70'
              }`}
            >
              <span className="flex flex-col">
                <span>🎼 Yaman Raga Synth</span>
                <span className="text-[9px] text-[#C7A86B] font-normal">Sitar & Bamboo Flute</span>
              </span>
            </button>

            <button
              onClick={() => handleTrackChange('terenaam')}
              className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                selectedTrack === 'terenaam'
                  ? 'border-[#C7A86B] bg-white/10 font-bold text-white'
                  : 'border-white/10 hover:border-white/30 text-white/70'
              }`}
            >
              <span className="flex flex-col">
                <span className="flex items-center gap-1">💖 Tere Naam track <Heart className="h-3 w-3 text-red-400 fill-red-400" /></span>
                <span className="text-[9px] text-[#C7A86B] font-normal">Soulful Classic Melody</span>
              </span>
            </button>
          </div>

          {/* REAL INTERACTIVE VOLUME SLIDER */}
          <div className="border-t border-white/10 pt-3">
            <div className="flex items-center justify-between text-[10px] text-white/80 font-semibold tracking-wider uppercase mb-1">
              <span className="flex items-center gap-1">
                {volumeLevel > 50 ? <Volume2 className="h-3.5 w-3.5 text-[#C7A86B]" /> : <Volume1 className="h-3.5 w-3.5 text-[#C7A86B]" />}
                VOLUME CONTROL
              </span>
              <span className="text-[#C7A86B] tabular-nums font-bold">{volumeLevel}%</span>
            </div>
            
            <input
              type="range"
              min="0"
              max="100"
              value={volumeLevel}
              onChange={(e) => setVolumeLevel(parseInt(e.target.value, 10))}
              className="w-full h-1.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#C7A86B] transition-all focus:outline-none focus:ring-1 focus:ring-[#C7A86B]/40"
            />
            
            <p className="text-[8px] text-[#C7A86B] font-medium tracking-wide mt-1 text-right">
              {volumeLevel >= 85 ? '🔥 BOOSTED / HIGH SOUND' : volumeLevel >= 40 ? '👍 MEDIUM SOUND' : '💤 GENTLE SOUND'}
            </p>
          </div>
        </div>
      )}

      {/* Trigger & Play buttons */}
      <div className="flex items-center gap-2">
        {/* Track change trigger */}
        <button
          onClick={() => setShowSelector(!showSelector)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4B315C] border border-[#C7A86B]/30 text-[#C7A86B] hover:border-[#C7A86B] hover:scale-105 transition-all shadow-xl"
          aria-label="Change Ambient Track"
        >
          <Music className="h-4 w-4" />
        </button>

        {/* Play toggle trigger */}
        <button
          onClick={handleToggleMusic}
          aria-label="Toggle luxury ambient music"
          className="group relative flex h-14 items-center justify-between gap-3 rounded-full bg-[#4B315C] border border-[#C7A86B]/40 px-5 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#C7A86B]"
        >
          {isPlaying && (
            <span className="absolute inset-0 rounded-full bg-[#B79ACF]/15 animate-ping" />
          )}

          <div className="flex items-center justify-center relative">
            {isPlaying ? (
              <div className="flex items-end gap-0.5 h-4 w-4">
                <span className="w-[2px] bg-[#C7A86B] rounded-full h-2.5 animate-[bounce_0.8s_infinite]" style={{ animationDelay: '0.1s' }} />
                <span className="w-[2px] bg-[#B79ACF] rounded-full h-3.5 animate-[bounce_0.8s_infinite]" style={{ animationDelay: '0.3s' }} />
                <span className="w-[2px] bg-[#C7A86B] rounded-full h-2 animate-[bounce_0.8s_infinite]" style={{ animationDelay: '0s' }} />
                <span className="w-[2px] bg-[#D9A6B8] rounded-full h-3 animate-[bounce_0.8s_infinite]" style={{ animationDelay: '0.5s' }} />
              </div>
            ) : (
              <VolumeX className="h-4 w-4 text-[#C7A86B]" />
            )}
          </div>

          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#FCF9F5] uppercase select-none whitespace-nowrap">
            {isPlaying 
              ? `${selectedTrack === 'terenaam' ? 'TERE NAAM ON' : 'MUSIC ON'}` 
              : 'MUSIC OFF'
            }
          </span>
        </button>
      </div>

      {/* Hidden YouTube audio player with volume damping controls bypass */}
      {selectedTrack === 'terenaam' && isPlaying && (
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/QMSIPuKEvps?autoplay=1&loop=1&playlist=QMSIPuKEvps&controls=0&mute=0"
          title="Tere Naam title track background stream"
          allow="autoplay; encrypted-media"
          className="hidden pointer-events-none"
        />
      )}

    </div>
  );
}
