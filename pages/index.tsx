import { GetServerSideProps } from 'next';
import { Delegate } from '../types/Delegate';
import fetchDelegates from '../lib/fetchDelegates';
import DelegateCard from '../components/DelegateCard';
import styles from '../styles/DelegateCard.module.css';

interface HomePageProps {
  delegates: Delegate[];
}

export default function HomePage({ delegates }: HomePageProps) {
  return (
    <div className={styles.delegateGrid}>
      {delegates.map((delegate) => (
        <DelegateCard key={delegate.id} delegate={delegate} />
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const delegates = await fetchDelegates();
  return { props: { delegates } };
};