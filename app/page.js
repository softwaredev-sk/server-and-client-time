import UseServer from '@/components/UseServer';
import styles from './page.module.css';
import UseClient from '@/components/UseClient';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>Client and Server Local Time</p>
        <UseClient />
        <UseServer />
      </div>
    </main>
  );
}
