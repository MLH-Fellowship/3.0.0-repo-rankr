const { makeBadge } = require('badge-maker');

const getColor = score => {
  const intScore = parseInt(score);
  if (intScore == 'A+') {
    return 'brightgreen';
  } else if (intScore == 'A') {
    return 'green';
  } else if (intScore == 'B+') {
    return 'yellow';
  } else if (intScore == 'B') {
    return 'yellowgreen';
  } else if (intScore == 'C+') {
    return 'orange';
  } else {
    return 'red';
  }
};

const generateSvg = score => {
  const format = {
    label: 'Rankr',
    message: score + '',
    color: getColor(score)
  };

  return makeBadge(format);
};

export default generateSvg;
