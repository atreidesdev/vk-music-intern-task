import { makeAutoObservable } from "mobx";

class AudioStore {
    currentSong: string | null = null;
    isPlaying: boolean = false;
    currentTime: number = 0;
    audioElement: HTMLAudioElement | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setAudioElement(element: HTMLAudioElement | null) {
        this.audioElement = element;
    }

    playTrack(track: string) {
        this.currentSong = track;
        this.isPlaying = true;
    }

    pauseTrack() {
        this.isPlaying = false;
    }

}

export const audioStore = new AudioStore();
