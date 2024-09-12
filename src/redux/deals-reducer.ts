import {Deal, DealsState} from "../api/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../api/deals-api";

const initialState: DealsState = {
  deals: [],
  selectedDeal: null,
  loading: false,
  error: null,
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchDeals = createAsyncThunk('deals/fetchAll', async (_, { rejectWithValue }) => {
  const limit = 3;
  const delayTime = 1000;
  let allDeals: Deal[] = [];
  let offset = 0;

  try {
    while (true) {
      const dealsBatch = await api.getDeals(limit, offset);
      allDeals = [...allDeals, ...dealsBatch];
      offset += limit;

      if (dealsBatch.length < limit) break;

      await delay(delayTime);
    }

    return allDeals;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Error fetching deals');
  }
});

export const fetchDealById = createAsyncThunk('deals/fetchById', async (id: number, { rejectWithValue }) => {
  try {
    return await api.getDealById(id);
  } catch (error: any) {
    return rejectWithValue(error.response?.data || `Error fetching deal with id ${id}`);
  }
});

const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state: DealsState) => {
      state.loading = true;
      state.error = null;
    };

    const handleFulfilled = (state: DealsState, action: any, type: string) => {
      state.loading = false;
      if (type === 'deals/fetchAll') {
        state.deals = action.payload;
      } else if (type === 'deals/fetchById') {
        state.selectedDeal = action.payload;
      }
    };

    const handleRejected = (state: DealsState, action: any) => {
      state.loading = false;
      state.error = action.payload || 'An error occurred';
    };

    builder
      .addCase(fetchDeals.pending, (state) => handlePending(state))
      .addCase(fetchDeals.fulfilled, (state, action) => handleFulfilled(state, action, 'deals/fetchAll'))
      .addCase(fetchDeals.rejected, (state, action) => handleRejected(state, action))
      .addCase(fetchDealById.pending, (state) => handlePending(state))
      .addCase(fetchDealById.fulfilled, (state, action) => handleFulfilled(state, action, 'deals/fetchById'))
      .addCase(fetchDealById.rejected, (state, action) => handleRejected(state, action));
  },
});

export default dealsSlice.reducer;
