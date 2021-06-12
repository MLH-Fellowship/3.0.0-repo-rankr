import PropTypes from 'prop-types';
import stylex from '@ladifire-opensource/stylex';
import { toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const styles = stylex.create({
  container: {
    color: '#FFF',
    backgroundColor: '#30343A',
    padding: '2rem',
    width: '100%',
    maxWidth: '50rem',
    borderRadius: '10px',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 250ms ease',
    ':hover img': {
      filter: 'opacity(0.75)' // for lighter gray
    },
    ':hover': {
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    }
  },
  icon: {
    filter: 'opacity(0)',
    position: 'absolute',
    transition: 'filter 250ms ease',
    top: '1rem',
    right: '1rem',
    width: '1.25rem'
  }
});

const CopyableLink = ({ href }) => {
  const handleCopySVGLink = () => {
    toast.success('Markdown Badge Copied!', {
      position: 'bottom-left'
    });
  };

  return (
    <CopyToClipboard text={href}>
      <div
        className={stylex(styles.container)}
        onClick={handleCopySVGLink.bind(this)}
      >
        <code>{href}</code>
        <img
          className={stylex(styles.icon)}
          src="/clipboard-regular.svg"
          alt="clipboard icon"
        />
      </div>
    </CopyToClipboard>
  );
};

CopyableLink.propTypes = {
  href: PropTypes.string
};

export default CopyableLink;
