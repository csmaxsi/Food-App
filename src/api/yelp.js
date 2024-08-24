import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer A7vTk0-G1Ww5jtbkR0iFdzxgFYD6jFO7OnPk23UTIAP7pKH9vnatj1yWJ7zHden3iMcyQ8sm1RHzLIpKMz7rhgCdHJZSpu9m_bEcECiPVoUdzenwWCMOWiUlUtDIZnYx',
  },
});