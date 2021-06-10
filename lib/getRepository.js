import client from '../apollo';
import fetch from 'cross-fetch';
import { GET_REPOSITORY } from '../apollo/queries';
import { AUTH_HEADER } from '../apollo';

const getRepository = async (owner, name) => {
  const [repoInfo, contributors] = await Promise.all([
    // GraphQL call for repo data
    client.query({
      query: GET_REPOSITORY,
      variables: { owner, name }
    }),
    // REST call to get contributors
    fetch(`https://api.github.com/repos/${owner}/${name}/contributors`, {
      method: 'GET',
      headers: AUTH_HEADER
    }).then(res => res.json())
  ]).catch(console.error.bind(this));

  return {
    ...repoInfo.data.repository,
    contributors: contributors.length
  };
};

export default getRepository;
