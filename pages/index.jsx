import Head from 'next/head';
import Link from 'next/link';
import stylex from '@ladifire-opensource/stylex';

const styles = stylex.create({
  container: {
    color: '#fff',
    minHeight: '100vh',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(/images/patternpad.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  main: {
    paddingTop: '5rem',
    paddingBottom: '5rem',
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: '5rem',
    margin: 30
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center'
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
    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerContent: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default function Home() {
  return (
    <div className={stylex(styles.container)}>
      <Head>
        <title>Repo Rankr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={stylex(styles.main)}>
        <h1 className={stylex(styles.title)}>Repo Rankr</h1>
        <div className={stylex(styles.wrapper)}>
          <input
            className={stylex(styles.input)}
            placeholder="https://github.com/ladifire-opensource/stylex"
          />
          <button className={stylex(styles.button)}>Analyze</button>
        </div>
      </main>

      <footer className={stylex(styles.footer)}>
        <span className={stylex(styles.footerContent)}>
          This site is built with Stylex and ❤️
        </span>
      </footer>
    </div>
  );
}
