import { GetServerSideProps } from 'next';
import { fetchDelegates } from '../lib/fetchDelegates';
import { Delegate } from '../types/index';
import DelegateCard from '../components/DelegateCard';
import Pagination from '../components/Pagination';
import styles from '../styles/DelegateCard.module.css';

interface HomeProps {
  delegates: Delegate[];
}

export default function Home({ delegates }: HomeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.delegateList}>
        {delegates.map((delegate, index) => (
          <DelegateCard key={index} delegate={delegate} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const delegates = await fetchDelegates();
  return { props: { delegates } };
};