import axios from 'axios';

const Home = ({ todos }) => (
  <div>
    <p>hello</p>
    {JSON.stringify(todos)}
  </div>
);

export const getServerSideProps = async (req, res, query) => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/users');
    return {
      props: {
        todos: data,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Home;
