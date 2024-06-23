import {AudioCell} from "@widgets/AudioCell";
import {Group} from "@vkontakte/vkui";
import styles from "./app.module.css";
import Feel from "../../public/Seo-Jayeong-Lies-of-P-OST-Feel.mp3"
import GLAZA from "../../public/kayyo-GLAZA.mp3"
import VKUI from "../../public/VKUI.png"

function App() {

  return (
      <Group separator={"hide"} className={styles.container} header={"Осторожней - 1-ый тихий, 2-ой громкий"}>
          <AudioCell
              title={"Трек"}
              author={"Исполнитель"}
              imagePath={VKUI as string}
              audioPath={Feel as string}
              duration={203}
          />
          <AudioCell
              title={"Трек"}
              author={"Исполнитель"}
              imagePath={VKUI as string}
              audioPath={GLAZA as string}
              duration={203}
          />
      </Group>
  )
}

export default App
