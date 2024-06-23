import { useEffect, useRef, useState } from "react";
import { audioStore } from "@entities/Song";

export const useAudio = (audioPath: string) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let isMounted = true;

        if (!audioRef.current) {
            audioRef.current = new Audio(audioPath);
            audioStore.setAudioElement(audioRef.current);
        } else {
            if ("src" in audioRef.current) {
                audioRef.current.src = audioPath;
            }
        }

        const handleTimeUpdate = () => {
            if (isMounted && audioRef.current) {
                if ("currentTime" in audioRef.current) {
                    setCurrentTime(audioRef.current.currentTime);
                }
            }
        };

        const handlePlayPauseUpdate = () => {
            if (isMounted && audioRef.current) {
                if ("paused" in audioRef.current) {
                    setIsPlaying(!audioRef.current.paused);
                }
            }
        };

        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.addEventListener("timeupdate", handleTimeUpdate);
            audioElement.addEventListener("play", handlePlayPauseUpdate);
            audioElement.addEventListener("pause", handlePlayPauseUpdate);
        }

        return () => {
            isMounted = false;
            if (audioElement) {
                audioElement.pause();
                audioElement.currentTime = 0.0;
                audioElement.removeEventListener("timeupdate", handleTimeUpdate);
                audioElement.removeEventListener("play", handlePlayPauseUpdate);
                audioElement.removeEventListener("pause", handlePlayPauseUpdate);
            }
        };
    }, [audioPath]);

    const handlePlayPause = async () => {
        const audioElement = audioRef.current;

        if (!audioElement) {
            console.error("Audio element not initialized.");
            return;
        }

        try {
            if (audioStore.currentSong === audioPath) {
                if (audioStore.isPlaying) {
                    audioStore.pauseTrack();
                    await audioElement.pause();
                } else {
                    audioStore.playTrack(audioPath);
                    await audioElement.play();
                }
            } else {
                if (audioStore.audioElement) {
                    await audioStore.audioElement.pause();
                    audioStore.audioElement.currentTime = 0;
                    audioStore.setAudioElement(null);
                }

                audioStore.playTrack(audioPath);
                audioElement.src = audioPath;
                await audioElement.play();
                audioStore.setAudioElement(audioElement);
            }
        } catch (error) {
            console.error("Failed to play/pause audio:", error);
        }
    };

    return { handlePlayPause, audioRef, currentTime, isPlaying };
};
