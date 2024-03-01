import React from 'react';
import Image from 'next/image';
import styles from '../styles/DelegateCard.module.css';

interface DelegateCardProps {
  image: string;
  ensName: string;
  walletAddress: string;
  delegateStatement: string;
  votingPower: number;
}

const DelegateCard: React.FC<DelegateCardProps> = ({ image, ensName, walletAddress, delegateStatement, votingPower }) => {
  return (
    <div className={styles.card}>
      <Image src={image || '/images/default-delegate.png'} alt="Delegate Image" width={200} height={200} />
      <h2 className={styles.name}>{ensName || walletAddress}</h2>
      <p className={styles.statement}>{delegateStatement}</p>
      <p className={styles.power}>Voting Power: {votingPower}</p>
      <button className={styles.delegateButton}>Delegate</button>
    </div>
  );
};

export default DelegateCard;