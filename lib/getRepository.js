import client from '../apollo'; 
import { GET_REPOSITORY } from '../apollo/queries';

const getRepository = async (owner, name) => {
  const data = await client.query({
    query: GET_REPOSITORY,
    variables: { owner, name }
  }).catch((err) => console.error(err));

  return data;
};

export default getRepository;