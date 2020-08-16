import { GetServerSideProps } from "next";
import axios from "axios";

const Home = ({ data }) => (
  <div>
    <h1>Home</h1>
  </div>
);

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/users");
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Home;
