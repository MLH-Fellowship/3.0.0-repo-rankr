import Head from 'next/head';
import stylex from '@ladifire-opensource/stylex';
import { useState } from 'react';
import axios from 'axios';
import Table from '../components/table';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import indexStyle from '../styles/index.style';

const styles = indexStyle();

export default function Home() {
  const [input, setInput] = useState('facebook/jest');
  const [loading, setLoading] = useState(false);
  const [analysisLoaded, setAnalysisLoading] = useState(false);
  const [score, setScore] = useState(20);
  const [analysis, setAnalysis] = useState([]);

  const handleCopySVGlink = () => {
    toast.success('Badge URL Copied!', {
      position: 'bottom-left'
    });
  };

  const handleRepoRank = async () => {
    if (!!input.trim()) {
      try {
        setLoading(true);
        const data = await axios.get(`/api/${input}`);
        const { info, score } = data.data;
        const result = Object.keys(info)
          .filter(key => 'boolean' === typeof info[key])
          .map(key => ({
            attribute: key,
            status: info[key] ? 'PASS' : 'FAIL'
          }));

        setScore(score);
        setAnalysis(result);
        setAnalysisLoading(true);
      } catch (error) {
        console.error.bind(this);
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
        <div className={stylex(styles.wrapper)}>
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

        <div className={stylex(styles.analysis)}>
          {analysisLoaded ? (
            <>
              <div>
                Your repo scores <strong>{`${score}`}</strong>
              </div>
              <br />
              <CopyToClipboard
                text={`${window.location.href}api/${input}?badge=true`}
              >
                <button
                  onClick={handleCopySVGlink.bind(this)}
                  className={stylex(styles.buttonSmall)}
                >
                  Copy Badge
                </button>
              </CopyToClipboard>
              <br />
              <Table rows={analysis} />
            </>
          ) : (
            loading && <div> Loading... </div>
          )}
        </div>
      </main>

      <footer className={stylex(styles.footer)}>
        <span className={stylex(styles.footerContent)}>
          Built with Stylex and ❤️
        </span>
      </footer>
    </div>
  );
}
