import axios from 'axios';

export default async function getTodos(req, res) {
  try {
    const { data } = await axios.get('http://localhost:8000/users');
    res.send(data);
  } catch (error) {
    console.log(error);
  }
}
