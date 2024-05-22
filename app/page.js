import Image from 'next/image';
import styles from './page.module.css';
import UseClient from '@/components/UseClient';

export default function Home() {
  return (
    <main className={styles.main}>
      <UseClient />
    </main>
  );
}
