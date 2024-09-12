import axios from "axios";

/*
const CLIENT_ID = '683afdfd-3679-4fdf-adca-e6dc9b161dbf';
const CLIENT_SECRET = 'OLMhuNp4ly0OTECq2p0eZIS8G4fS4AbQtNSZL9qlVgTUdaCm4qns9o43Gh8HGP0r';
const REDIRECT_URI = 'https://miahri.github.io/silk-road/';
const AUTHORIZATION_CODE = 'def502005eb2591e90d3918298141c0e8537c012443b66377f7fd2c76ab752d87ceb90cc82e3c163a144b764ecbdeb652d346d845741aac44ae4c2a5998fa1a561804d0482bb87b377605718a47fdbc190ba67e8c2bca19f575b7c1f137eb9482fa14863936e87976fc540c6b1d1ae7e0ed9e231f620194a2ddf5c0a315798763f4aecdb1dd93331b10089c48ee768cd27a044b5f3b96583005626f79106da06fb5a05b1af4d39c286f06a7643354c95dbf706d2308aa56268eab23ecd9d6dabc9449a8fd02a0e8dbb794624cab5f2c6bf4522fd4d478192acaf1066f0ada9578109c42beb899e13cf82ebf9987b420f54a66e7ec4ee497d6e0201635aefc6c16171e6e63f64bfa15c6c3a925c90d6fdcbfd79e4e8f43a79ac99321609a7ad53eedc6427d6317cd38f4980a7ed66801ef8cac4f9363f4376658146b9b738be2b02eb2e653776b658ea6dfcad56e58c210af563847c8e6412278e3894d0440783849b72015253bc174cfdbe25fb52d7390af699bb2ef427366255a8b06b6ab3feddafdcd0d36b04ef730ab486d16a2f6b9626dccace0c8b8cc2cf93ba0df071a3397b208170c6e4998cd19e334654e0a3afadb4ac0a54e646474c44be8c8e8bd4b0c38c7c73298a6aad48906c9d737d2970c60447484ec11b10af800295a7037d231074b4b951f4ea076b157e2a038b773d91867572c8'
*/
const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY1YmFiNWU1NDFkNTRhODcxZjFkYTM1YTNhZTI0NjZlNzhjYmNkMjMzMmMzMTFhY2YxMjEwZDE4ZDE3ZmFlMjU1Njg3NGRkYTc5MDUxMDg3In0.eyJhdWQiOiI2ODNhZmRmZC0zNjc5LTRmZGYtYWRjYS1lNmRjOWIxNjFkYmYiLCJqdGkiOiJmNWJhYjVlNTQxZDU0YTg3MWYxZGEzNWEzYWUyNDY2ZTc4Y2JjZDIzMzJjMzExYWNmMTIxMGQxOGQxN2ZhZTI1NTY4NzRkZGE3OTA1MTA4NyIsImlhdCI6MTcyNjEzNzg3MCwibmJmIjoxNzI2MTM3ODcwLCJleHAiOjE3MjYyMjQyNzAsInN1YiI6IjExNDkyNjI2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTM5OTc0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNmQ3YzE5Y2YtOWVhMi00NGQwLThjNDctZWZkZTQwN2RlMmYzIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.jpp5MNb0-IzW8c7QLCewmb9ykWI_G0xstqWPQf3XAocyw7zGo7iut5q7iaxbVn5QSL2bmpWZadsFTDMGv_eIhdHffKXJI1mCuUNDt-5cW1vyaXH7WsiE9PL2f4zhcYKch6pA0R3ruK1UYzSoO93pZcUGWU9KmxiisNdS7p7EOvthn68DmyiFhSM8kzsG-h-iFax_NL_EN4p7lpVm47bIV9levVJwTRShXxhyUJgIj7o3hjUoPSyB2jmmoiGToBjuW1C-hz9MZUBBXxiH8dWCHFwqIJpnuO2VVSt0MBZG_y34kj1v0taF-xDYT7q9kneQ8D-Hv3Mw-YyzZLPYnGGfhQ';
const BASE_URL = 'https://mahrihommadova.amocrm.ru/';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ACCESS_TOKEN}`, // Добавляем токен напрямую
  },
});

/*instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);*/

export const api = {
  /*getAuth: async () => {
    try {
      const response = await instance.post(
        'oauth2/access_token',
        {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          grant_type: 'authorization_code',
          code: AUTHORIZATION_CODE,
          redirect_uri: REDIRECT_URI,
        }
      );
      const { access_token } = response.data;

      localStorage.setItem('access_token', access_token);
      return access_token;
    } catch (error) {
      console.error('Error fetching access token:', error);
      throw error;
    }
  },*/
  getDeals: async (limit = 3, offset = 0) => {
    try {
      const response = await instance.get('api/v4/leads', {
        params: {
          limit,
          offset
        },
      });
      return response.data._embedded.leads;
    } catch (error) {
      console.error('Error fetching deals:', error);
      throw error;
    }
  },
  getDealById: async (dealId: number) => {
    try {
      const response = await instance.get(`api/v4/leads/${dealId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching deal with id ${dealId}:`, error);
      throw error;
    }
  }
}

