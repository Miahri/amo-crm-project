import React from 'react';
import './App.css';
import {DealsTable} from "./components/DealsTable";

function App() {
  /*const dispatch: AppDispatch = useDispatch();
  const { accessToken, loading, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(fetchAccessToken());
  }, [dispatch]);

  if (loading) {
    return <p>Loading authentication...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!accessToken) {
    return <p>No access token available. Please authorize.</p>;
  }*/

  return (
    <div>
      <h1>Deals Dashboard</h1>
      <DealsTable />
    </div>
  );
}

export default App;
