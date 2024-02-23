import { GetServerSideProps } from 'next'
import { Delegate } from '../interfaces/Delegate'
import DelegateCard from '../components/DelegateCard'
import Pagination from '../components/Pagination'
import fetchDelegates from '../utils/fetchDelegates'

interface HomeProps {
  delegates: Delegate[]
}

const Home: React.FC<HomeProps> = ({ delegates }) => {
  return (
    <div className="container">
      <div className="delegate-grid">
        {delegates.map((delegate, index) => (
          <DelegateCard key={index} delegate={delegate} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const delegates = await fetchDelegates()
  return { props: { delegates } }
}

export default Home