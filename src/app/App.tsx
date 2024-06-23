import {AudioCell} from "@widgets/AudioCell";
import {Group} from "@vkontakte/vkui";
import styles from "./app.module.css";

function App() {

  return (
      <Group separator={"hide"} className={styles.container} header={"Осторожней - 1-ый тихий, 2-ой громкий"}>
          <AudioCell
              title={"Трек"}
              author={"Исполнитель"}
              imagePath={"/vk-music-intern-task/src/assets/VKUI.png"}
              audioPath={"/vk-music-intern-task/src/assets/Seo-Jayeong-Lies-of-P-OST-Feel.mp3"}
              duration={203}
          />
          <AudioCell
              title={"Трек"}
              author={"Исполнитель"}
              imagePath={"/vk-music-intern-task/src/assets/VKUI.png"}
              audioPath={"/vk-music-intern-task/src/assets/kayyo-GLAZA.mp3"}
              duration={203}
          />
      </Group>
  )
}

export default App
