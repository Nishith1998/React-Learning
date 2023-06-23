import styles from "./App.module.css";
import { Layout } from "./Components/Layout/Layout";
import { Card } from "./Components/UI/Card/Card";

function App() {
  return (
    <Card className={styles.card}>
      <Layout />
    </Card>
  );
}

export default App;
