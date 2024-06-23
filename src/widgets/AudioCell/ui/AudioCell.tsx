import { Cell, Div, Paragraph, Title } from "@vkontakte/vkui";
import React, { useState } from "react";
import { observer } from "mobx-react";
import { useAudio } from "@features/useAudio";
import { audioStore, formatTime } from "@entities/Song";
import { ActiveAudioImage } from "@features/activeAudioImage";
import styles from "./AudioCell.module.scss";
import { AudioPopover } from "@features/audioPopover";

interface AudioCellInterface {
    title: string;
    author: string;
    imagePath: string;
    audioPath: string;
    duration: number;
}

export const AudioCell: React.FC<AudioCellInterface> = observer(
    ({ title, author, imagePath, audioPath, duration }) => {
        const { handlePlayPause, currentTime, isPlaying } = useAudio(audioPath);
        const [isHovered, setIsHovered] = useState(false);

        const isCurrentSong = audioStore.currentSong === audioPath;
        const displayTime = isCurrentSong ? formatTime(currentTime) : formatTime(duration);

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        return (
            <Cell
                before={<ActiveAudioImage
                    imagePath={imagePath}
                    isPlaying={isPlaying}
                    hoverStatus={isHovered}
                    isCurrentSong={isCurrentSong}
                />}
                after={
                    <Div className={styles.details}>
                        <span className={styles.subtitle}>{displayTime}</span>
                        <AudioPopover />
                    </Div>
                }
                hasHover={true}
                hovered={isHovered}
                hoverClassName={styles.hover}
                baseClassName={styles.AudioCell}
                activeClassName={styles.active}
                onClick={handlePlayPause}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Div className={styles.infoContainer}>
                    <Title className={styles.title}>{title}</Title>
                    <Paragraph className={styles.subtitle}>{author}</Paragraph>
                </Div>
            </Cell>
        );
    }
);
