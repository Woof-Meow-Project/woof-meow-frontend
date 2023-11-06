import { Outlet } from 'react-router';
import styles from './App.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
