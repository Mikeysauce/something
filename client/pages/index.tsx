import { GetServerSideProps } from 'next';
import withSession from '../util/session';

const Home = ({ data }) => (
  <div>
    <h1>Home</h1>
  </div>
);

export const getServerSideProps: GetServerSideProps = withSession(
  async function ({ req, res }) {
    const { isLoggedIn } = req.session.get('user') || { isLoggedIn: false };
    try {
      return {
        props: {
          isLoggedIn,
        },
      };
    } catch (error) {
      return {
        props: {},
      };
    }
  }
);

export default Home;
