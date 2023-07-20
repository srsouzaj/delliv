import styles from "./Home.module.css"
import { BoxHome } from "./components/BoxHome"
import { CardList } from "./components/CardList"
import { FilterSection } from "./components/Filters"

export const HomeScreen = () => {
    return (
        <div className={styles.container}>
            <BoxHome />
            <FilterSection />
            {/* <CardList /> */}
        </div>
    )
}