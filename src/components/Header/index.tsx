import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.container}>
      <Link href="/">
        <img src="/logo.svg" alt="Podcastr" style={{ cursor: 'pointer' }} />
      </Link>
      <p>O melhor para você ouvir sempre</p>
      <span>{currentDate}</span>
    </header>
  );
}
