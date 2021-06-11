const { makeBadge } = require('badge-maker');

const getColor = score => {
  const intScore = parseInt(score);
  if (intScore >= 90) {
    return 'brightgreen';
  } else if (intScore >= 75) {
    return 'green';
  } else if (intScore >= 60) {
    return 'yellow';
  } else if (intScore >= 45) {
    return 'yellowgreen';
  } else if (intScore >= 30) {
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
