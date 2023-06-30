import React from 'react';
import styles from '../styles/DelegateCard.module.css';

interface Delegate {
  image: string;
  ensName: string;
  walletAddress: string;
  statement: string;
  votingPower: number;
}

interface DelegateCardProps {
  delegate: Delegate;
}

const DelegateCard: React.FC<DelegateCardProps> = ({ delegate }) => {
  return (
    <div className={styles.delegateCard} id="delegate-card">
      <img src={delegate.image || '/images/default-delegate.png'} alt={delegate.ensName || delegate.walletAddress} />
      <h2>{delegate.ensName || delegate.walletAddress}</h2>
      <p>{delegate.statement}</p>
      <p>Voting Power: {delegate.votingPower}</p>
      <button className={styles.delegateButton}>Delegate</button>
    </div>
  );
};

export default DelegateCard;