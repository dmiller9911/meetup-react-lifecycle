export const styles = {
  composition: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d1f21',
  },
  card: {
    height: 400,
    width: 400,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  resultText: matches => ({
    fontSize: 36,
    color: matches ? '#859900' : '#dc322f',
  }),
};
