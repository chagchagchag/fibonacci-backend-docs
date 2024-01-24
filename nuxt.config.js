import { withDocus } from 'docus'

// Learn more at https://docus.dev
export default withDocus({
  target: 'static',
  router: {
    base: '/fibonacci-backend-docs/'
  },
  docus: {
    // primaryColor: '#E24F55'
  }
})