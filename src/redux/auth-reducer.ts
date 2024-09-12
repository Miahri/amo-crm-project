
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
/*import {AuthState} from "../api/types";
import {api} from "../api/deals-api";

const initialState: AuthState = {
  accessToken: null,
  loading: false,
  error: null,
};

export const fetchAccessToken = createAsyncThunk(
  'auth/fetchAccessToken',
  async (_, { rejectWithValue }) => {
    try {
      let token = await api.getAuth();
      localStorage.setItem('access_token', token);
      return token;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Error fetching access token');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
*/
