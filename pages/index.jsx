import Head from 'next/head';
import Link from 'next/link';
import stylex from '@ladifire-opensource/stylex';

const styles = stylex.create({
  topLogo: {
    height: '5em',
    marginBottom: 16
  },
  logo: {
    height: '1.5em'
  },
  container: {
    minHeight: '100vh',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    paddingTop: '5rem',
    paddingBottom: '5rem',
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
    lineHeight: 1.5,
    fontSize: '1.5rem'
  },
  code: {},
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: 800,
    marginTop: '3rem',

    // @ts-ignore
    '@media (max-width: 600px)': {
      width: '100%',
      flexDirection: 'column'
    }
  },
  card: {
    margin: '1rem',
    flexBasis: '45%',
    padding: '1.5rem',
    textAlign: 'left',
    border: '1px solid #eaeaea',
    borderRadius: 10,
    textDecoration: 'none',
    transition: 'color 0.15s ease, border-color 0.15s ease',

    ':hover': {
      color: '#0070f3',
      borderColor: '#0070f3'
    }
  },
  footer: {
    width: '100%',
    height: 100,
    borderTop: '1px solid #eaeaea',
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
        <title>Stylex - Write CSS in JS with atomic, like Facebook do!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={stylex(styles.main)}>
        <img
          src="/logo-black.png"
          alt="Vercel Logo"
          className={stylex(styles.topLogo)}
        />
        <h1 className={stylex(styles.title)}>Write CSS-in-JS with atomic!</h1>

        <p className={stylex(styles.description)}>like Facebook do.</p>

        <div className={stylex(styles.grid)}>
          <Link href="/setup">
            <a className={stylex(styles.card)}>
              <h3>Setup &rarr;</h3>
              <p>Learn how to setup Stylex for your project.</p>
            </a>
          </Link>
          <Link href="/docs">
            <a className={stylex(styles.card)}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Stylex features.</p>
            </a>
          </Link>
          <Link href="/showcases">
            <a className={stylex(styles.card)}>
              <h3>Showcases &rarr;</h3>
              <p>Something that&apos;s used with Stylex.</p>
            </a>
          </Link>
          <Link href="/community">
            <a className={stylex(styles.card)}>
              <h3>Community &rarr;</h3>
              <p>Joint Stylex community.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={stylex(styles.footer)}>
        <span className={stylex(styles.footerContent)}>
          This site&apos;s built with{' '}
          <img
            src="/logo-black.png"
            alt="Stylex Logo"
            className={stylex(styles.logo)}
          />
        </span>
      </footer>
    </div>
  );
}
