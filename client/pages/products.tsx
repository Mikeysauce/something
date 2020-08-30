import { GetServerSideProps, NextApiResponse } from 'next';
import axios from 'axios';
import { Products } from '../components/Products/Products';
import withSession from '../util/session';
import { SessionRequest } from './api/users';

const ProductsPage = ({ data }) => <Products data={data} />;

export const getServerSideProps: GetServerSideProps = withSession(
  async function ({ req, res }) {
    const { isLoggedIn } = req.session.get('user') || { isLoggedIn: false };
    const { data } = await axios.get('http://localhost:8000/products');
    try {
      return {
        props: {
          isLoggedIn,
          data,
        },
      };
    } catch (error) {
      return {
        props: {},
      };
    }
  }
);
export default ProductsPage;
