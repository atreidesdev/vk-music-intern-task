import React from 'react';
import { Image } from '@vkontakte/vkui';
import styles from "./ActiveAudioImage.module.scss";
import { getOverlayIcon } from "@features/activeAudioImage";

interface ActiveAudioImageInterface {
    imagePath: string | undefined;
    isCurrentSong: boolean;
    isPlaying: boolean;
    hoverStatus: boolean;
}

export const ActiveAudioImage: React.FC<ActiveAudioImageInterface> = ({ imagePath, isCurrentSong, isPlaying, hoverStatus }) => {
    const overlayIcon = getOverlayIcon(isCurrentSong, isPlaying, hoverStatus);

    return (
        <div className={styles.container}>
            <Image
                borderRadius={'m'}
                size={40}
                src={imagePath}
                className={styles.image}
            />
            {overlayIcon && (
                <Image.Overlay className={styles.overlay} visibility={"always"}>
                    {React.isValidElement(overlayIcon) ? overlayIcon : <span>{overlayIcon}</span>}
                </Image.Overlay>
            )}
        </div>
    );
};