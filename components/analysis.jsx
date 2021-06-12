import PropTypes from 'prop-types';
import stylex from '@ladifire-opensource/stylex';

const styles = stylex.create({
  container: {
    background: 'white',
    color: 'black',
    width: '100%',
    maxWidth: '50rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '3rem',
    borderRadius: '10px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  },
  scoreHeader: {
    fontWeight: 'normal',
    fontSize: '2.5rem',
    marginTop: 0
  },
  tableRow: {
    width: '100%',
    maxWidth: '25rem',
    display: 'grid',
    gridTemplateColumns: 'auto 5rem',
    marginTop: '1rem'
  },
  tableLabel: {
    fontSize: '1.125rem',
    marginBottom: '1.25rem',
    fontWeight: 'bold'
  },
  statusPass: {
    color: '#50b83c',
    fontWeight: 600
  },
  statusFail: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: '900',
    padding: '0.25rem',
    borderRadius: '2px'
  }
});

const camelToTitleCase = text =>
  text
    .replace(/([A-Z][a-z]|[A-Z]+(?=[A-Z]|$))/g, ' $1')
    .replace(/./, m => m.toUpperCase())
    .trim();

const Analysis = ({ repo, score, info }) => {
  return (
    <div className={stylex(styles.container)}>
      <h1 className={stylex(styles.scoreHeader)}>
        Score: <strong>{score}</strong>
      </h1>
      <img src={`${window.location.origin}/api/${repo}?badge=true`} alt="" />
      <div className={stylex(styles.tableRow, styles.tableLabel)}>
        <div className={stylex(styles.tableColumn)}>REQUIREMENTS</div>
        <div className={stylex(styles.tableColumn)}>STATUS</div>
      </div>
      {info.map(([attribute, status]) => (
        <div className={stylex(styles.tableRow)} key={attribute}>
          <div className={stylex(styles.tableColumn)}>
            {camelToTitleCase(attribute)}
          </div>
          <div className={stylex(styles.tableColumn)}>
            <span
              className={stylex(status ? styles.statusPass : styles.statusFail)}
            >
              {status ? 'PASS' : 'FAIL'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

Analysis.propTypes = {
  score: PropTypes.number,
  repo: PropTypes.string,
  info: PropTypes.arrayOf(PropTypes.array)
};

export default Analysis;
