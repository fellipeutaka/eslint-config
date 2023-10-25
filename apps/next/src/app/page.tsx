import { Counter } from "~/components/Counter";
import styles from "~/styles/home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <Counter />
    </main>
  );
}
