import { Icon28PauseCircleFillWhite, Icon28PlayCircleFillWhite } from "@vkontakte/icons";
import React from "react";

export const getOverlayIcon = (isCurrentSong: boolean, isPlaying: boolean, hoverStatus: boolean): React.ReactElement | null => {
    const iconMap: { [key: string]: React.ReactElement | null } = {
        'default': null,
        'notCurrentHover': <Icon28PlayCircleFillWhite width={16} height={16} />,
        'currentPlaying': <img src={"https://github.com/lovecloudzzz/vk-music-intern-task/tree/master/src/assets/Icon16AnimatedPlayingAudio.svg"} alt={"AnimatedAudio"} />,
        'currentPlayingHover': <Icon28PauseCircleFillWhite width={16} height={16} />,
        'currentNotPlaying': <img src={"https://github.com/lovecloudzzz/vk-music-intern-task/tree/master/src/assets/Icon16AudioPaused.svg"} alt={"AudioPaused"} />,
        'currentNotPlayingHover': <Icon28PlayCircleFillWhite width={16} height={16} />
    };

    let key: string = 'default';
    if (isCurrentSong && isPlaying) {
        key = hoverStatus ? 'currentPlayingHover' : 'currentPlaying';
    } else if (isCurrentSong && !isPlaying) {
        key = hoverStatus ? 'currentNotPlayingHover' : 'currentNotPlaying';
    } else if (!isCurrentSong && hoverStatus) {
        key = 'notCurrentHover';
    }

    return iconMap[key];
};