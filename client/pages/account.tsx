import { GetServerSideProps } from 'next';
import withSession from '../util/session';
import Axios from 'axios';
import { Table } from '../components/Table/Table';

const Account = ({ user, orders, pendingOrders }) => {
  const fullName = `${user.first_name} ${user.last_name}`;
  const Order = {
    rows: [
      'Order ID',
      'Status',
      'Number of items',
      'Total Price',
      'Order Updated',
    ],
  };
  return (
    <div style={{ padding: '1rem' }}>
      <div className="heading__group">
        <h4 style={{ marginBottom: '1rem' }}>Hello, {fullName}</h4>
        <p>Below is a list of your most recent orders</p>
      </div>
      <div>
        <div>
          <p style={{ marginBottom: '6px' }}>Pending Orders</p>
          <Table rows={Order.rows} orders={pendingOrders} />
        </div>

        <div>
          <p style={{ marginBottom: '6px' }}>Completed Orders</p>
          <Table rows={Order.rows} orders={orders} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withSession(
  async function ({ req, res }) {
    const { isLoggedIn, ...user } = req.session.get('user') || {
      isLoggedIn: false,
    };

    if (!isLoggedIn) {
      res.writeHead(301, {
        Location: '/',
      });
      return res.end();
    }

    let pendingOrders = [];
    let orders = [];

    const { data } = await Axios.get(
      `http://localhost:8000/users/${user.data.id}/orders`
    );

    for (const order of data) {
      if (order.status === 'Delivered') {
        orders.push(order);
      } else {
        pendingOrders.push(order);
      }
    }

    try {
      return {
        props: {
          isLoggedIn,
          user: user.data,
          orders,
          pendingOrders,
        },
      };
    } catch (error) {
      return {
        props: {},
      };
    }
  }
);

export default Account;
