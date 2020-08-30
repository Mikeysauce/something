import axios from 'axios';
import { NextApiResponse } from 'next';
import { SessionRequest } from './users';
import withSession from '../../util/session';

async function handler(req: SessionRequest, res: NextApiResponse) {
  // get user from database then:
  try {
    const { data } = await axios.post(
      'http://localhost:8000/users/login',
      req.body
    );
    req.session.set('user', {
      isLoggedIn: true,
      data,
    });
    await req.session.save();
    res.send('Logged in');
  } catch (error) {
    res.status(403).send(error);
  }
}

export default withSession(handler);
