import { GetServerSideProps } from 'next';
import withSession from '../../util/session';
import Axios from 'axios';
import { Order } from '../../components/Order';

const OrderPage = ({ order, mapData }) => (
  <Order {...order} mapData={mapData} />
);

export default OrderPage;

export const getServerSideProps: GetServerSideProps = withSession(
  async function ({ req, res, query }) {
    try {
      const { isLoggedIn, ...user } = req.session.get('user') || {
        isLoggedIn: false,
      };
      let order;
      if (isLoggedIn) {
        const { data } = await Axios.get(
          `http://localhost:8000/orders/${query.order}`
        );
        const mapData = await Axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.delivery_address}.json?access_token=pk.eyJ1IjoibWlrZXlzYXVjZSIsImEiOiJja2VndXBvMGQwNGZwMnRwYzZhOXFvYnJnIn0.nytCxEUbVRaVNG42mGmqwg`
        );
        return {
          props: {
            isLoggedIn,
            order: data,
            mapData: mapData.data,
          },
        };
      }
      return {
        props: {
          isLoggedIn,
          order,
        },
      };
    } catch (error) {
      return {
        props: {},
      };
    }
  }
);
