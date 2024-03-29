import Head from 'next/head';
import stylex from '@ladifire-opensource/stylex';
import { useState } from 'react';
import axios from 'axios';
import Analysis from '../components/analysis';
import CopyableLink from '../components/copyableLink';
import { toast, ToastContainer } from 'react-toastify';
import BeatLoader from 'react-spinners/BeatLoader';

const styles = stylex.create({
  container: {
    position: 'relative',
    minHeight: '100vh',
    paddingTop: '5rem'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  analysis: {
    width: '100%',
    marginTop: '3rem'
  },
  title: {
    fontSize: '4rem',
    margin: 30
  },
  loading: {
    display: 'flex',
    justifyContent: 'center'
  },
  inputContainer: {
    width: '100%',
    maxWidth: '40rem',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    padding: '1rem',
    display: 'grid',
    gridTemplateColumns: 'auto 10rem',
    borderRadius: '10px',
    marginBottom: '5rem'
  },
  button: {
    color: '#fff',
    backgroundColor: '#1D4ED8',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    border: 'none',
    borderRadius: '5px',
    fontWeight: '700',
    letterSpacing: '2px',
    fontSize: '0.875rem',
    marginLeft: 15,
    cursor: 'pointer',
    transition: 'filter 500ms ease'
  },
  buttonDisabled: {
    cursor: 'not-allowed',
    filter: 'grayscale(1)'
  },
  input: {
    width: '100%',
    paddingTop: '0.9rem',
    paddingBottom: '0.9rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    ':focus-visible': {
      outline: 'none'
    }
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    marginBottom: '2rem',
    justifyContent: 'center',
    letterSpacing: '2px',
    fontWeight: '300'
  },
  spacer: {
    marginBottom: '10rem'
  }
});

const cleanInput = inputStr => {
  let inp = inputStr;
  const ghRe = new RegExp('github.com/(.+)/(.+)/');
  // Need this for regex to work
  if (!inputStr.endsWith('/')) inp += '/';

  const matches = inp.match(ghRe);
  if (inp.match(ghRe) && matches.length >= 3)
    return `${matches[1]}/${matches[2]}`;
  return inputStr;
};

export default function Home() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(20);
  const [analysis, setAnalysis] = useState(null);

  const filterInfo = info =>
    Object.entries(info).filter(([_, v]) => typeof v === 'boolean');

  const handleRepoRank = async () => {
    if (!!input.trim()) {
      const repoIdentifier = cleanInput(input.trim());
      try {
        setLoading(true);
        const {
          data: { score, info }
        } = await axios.get(`/api/${repoIdentifier}`);
        setAnalysis({ score, info: filterInfo(info) });
      } catch (err) {
        toast.error(err.message, {
          position: 'bottom-left'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={stylex(styles.container)}>
      <Head>
        <title>RepoRankr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer />

      <main className={stylex(styles.main)}>
        <h1 className={stylex(styles.title)}>RepoRankr</h1>
        <div className={stylex(styles.inputContainer)}>
          <input
            className={stylex(styles.input)}
            value={input}
            onKeyPress={({ key }) =>
              key === 'Enter' && !analysis && handleRepoRank()
            }
            onChange={e => {
              setScore(0);
              setAnalysis(null);
              setInput(e.target?.value);
            }}
            placeholder="ladifire-opensource/stylex"
          />
          <button
            onClick={handleRepoRank.bind(this)}
            className={stylex(
              styles.button,
              !input.trim() ? styles.buttonDisabled : ''
            )}
            disabled={loading}
          >
            ANALYZE
          </button>
        </div>
        {!!input.trim() && !loading && !!analysis && (
          <CopyableLink
            href={`![badge](${window.location.origin}/api/${cleanInput(
              input.trim()
            )}?badge=true)`}
          />
        )}
        <div className={stylex(styles.analysis, loading ? styles.loading : '')}>
          {loading ? (
            <BeatLoader loading size={20} color="#000000" />
          ) : (
            !!analysis && (
              <Analysis {...analysis} repo={cleanInput(input.trim())} />
            )
          )}
        </div>
        <div className={stylex(styles.spacer)}></div>
      </main>

      <footer className={stylex(styles.footer)}>
        <span>BUILT WITH STYLEX AND ❤️</span>
      </footer>
    </div>
  );
}
