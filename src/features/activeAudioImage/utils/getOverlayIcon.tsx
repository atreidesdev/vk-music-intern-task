import { Icon28PauseCircleFillWhite, Icon28PlayCircleFillWhite } from "@vkontakte/icons";
import React from "react";
import Icon16AnimatedPlayingAudio from "../../../../public/Icon16AnimatedPlayingAudio.svg"
import Icon16AudioPaused from "../../../../public/Icon16AudioPaused.svg"


export const getOverlayIcon = (isCurrentSong: boolean, isPlaying: boolean, hoverStatus: boolean): React.ReactElement | null => {
    const iconMap: { [key: string]: React.ReactElement | null } = {
        'default': null,
        'notCurrentHover': <Icon28PlayCircleFillWhite width={16} height={16} />,
        'currentPlaying': <img src={Icon16AnimatedPlayingAudio as string}
                               alt={"AnimatedAudio"} />,
        'currentPlayingHover': <Icon28PauseCircleFillWhite width={16} height={16} />,
        'currentNotPlaying': <img src={Icon16AudioPaused as string}
                                  alt={"AudioPaused"} />,
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