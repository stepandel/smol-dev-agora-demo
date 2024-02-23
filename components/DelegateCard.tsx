import React from 'react';
import { Delegate } from '../interfaces/Delegate';
import styles from '../styles/DelegateCard.module.css';

interface DelegateCardProps {
  delegate: Delegate;
}

const DelegateCard: React.FC<DelegateCardProps> = ({ delegate }) => {
  return (
    <div className={styles.delegateCard} id="delegate-card">
      <img src={delegate.image} alt={delegate.ensName || delegate.walletAddress} />
      <h2>{delegate.ensName || delegate.walletAddress}</h2>
      <p>{delegate.statement}</p>
      <p>Voting Power: {delegate.votingPower}</p>
      <button className={styles.delegateButton}>Delegate</button>
    </div>
  );
};

export default DelegateCard;