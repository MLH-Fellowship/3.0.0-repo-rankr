const filter = require('object-key-filter');
/**
 * https://github.com/apollographql/apollo-client/issues/2881#issuecomment-455488805
 */
const cleanData = (data) => {
  return typeof data === 'object' ? filter(data, ['__typename'], true) : data;
};

const parseRepositoryData = data => {
  const model = cleanData(data);
  return model;
};

export default parseRepositoryData;
