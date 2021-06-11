import stylex from '@ladifire-opensource/stylex';

// I don't know why but you can't make this a variable
// export const style = stylex.create({ - doesn't work
export default () => stylex.create({
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
  analysis: {
    paddingTop: '3rem',
    paddingBottom: '0.2rem',
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
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

  buttonSmall: {
    color: '#fff',
    backgroundColor: '#1D4ED8',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    paddingLeft: '0.35rem',
    paddingRight: '0.35rem',
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '0.25rem',
    fontSize: '0.95rem',
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