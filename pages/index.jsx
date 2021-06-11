import Head from 'next/head';
import stylex from '@ladifire-opensource/stylex';
import { useState } from 'react';
import axios from 'axios';
import Analysis from '../components/analysis';
import { toast, ToastContainer } from 'react-toastify';
import BeatLoader from 'react-spinners/BeatLoader';

const styles = stylex.create({
  container: {
    color: '#fff',
    minHeight: '100vh',
    paddingTop: '5rem',
    background: 'url(/images/patternpad.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
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
    color: '#fff',
    fontSize: '5rem',
    margin: 30
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem'
  },
  button: {
    color: '#fff',
    backgroundColor: '#1D4ED8',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '0.25rem',
    fontSize: '1.25rem',
    marginLeft: 15,
    cursor: 'pointer',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  },
  input: {
    width: 350,
    paddingTop: '0.9rem',
    paddingBottom: '0.9rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    border: 'none',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    marginBottom: '2rem',
    justifyContent: 'center'
  }
});

export default function Home() {
  const [input, setInput] = useState('facebook/jest');
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(20);
  const [analysis, setAnalysis] = useState(null);

  const handleCopySVGLink = () => {
    toast.success('Badge URL Copied!', {
      position: 'bottom-left'
    });
  };

  const filterInfo = info =>
    Object.entries(info).filter(([_, v]) => typeof v === 'boolean');

  const handleRepoRank = async () => {
    if (!!input.trim()) {
      try {
        setLoading(true);
        const {
          data: { score, info }
        } = await axios.get(`/api/${input}`);
        setAnalysis({ score, info: filterInfo(info) });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={stylex(styles.container)}>
      <Head>
        <title>Repo Rankr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer />

      <main className={stylex(styles.main)}>
        <h1 className={stylex(styles.title)}>Repo Rankr</h1>
        <div>
          <input
            className={stylex(styles.input)}
            value={input}
            onChange={e => setInput(e.target?.value)}
            placeholder="ladifire-opensource/stylex"
          />
          <button
            onClick={handleRepoRank.bind(this)}
            className={stylex(styles.button)}
            disabled={loading}
          >
            Analyze
          </button>
        </div>
        <div className={stylex(styles.analysis, loading ? styles.loading : '')}>
          {loading ? (
            <BeatLoader loading size={20} color="#ffffff" />
          ) : (
            !!analysis && <Analysis {...analysis} repo={input} />
          )}
        </div>
      </main>

      <footer className={stylex(styles.footer)}>
        <span>Built with Stylex and ❤️</span>
      </footer>
    </div>
  );
}
