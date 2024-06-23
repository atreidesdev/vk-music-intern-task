import {Popover} from "@vkontakte/vkui";
import {Icon16MoreVertical} from "@vkontakte/icons";
import styles from "./AudioPopover.module.scss";

export const AudioPopover = () => {
    return (
        <Popover
            role={"tooltip"}
            aria-describedby="tooltip-1"
            content={
                <ul>
                    <li>Добавить в плейлист</li>
                    <li>Открыть альбом</li>
                    <li>...</li>
                </ul>}
            trigger={"hover"}
            placement="right"
            hoverDelay={225}
        >
            <Icon16MoreVertical fill={"#2688EB"} className={styles.popover}/>
        </Popover>
    );
};