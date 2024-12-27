import { useContext, useEffect } from 'react';
import './App.css';
import Routering from './Router';
import { DataContext } from './components/DataProvider/DataProvider';
import {Type} from "./Utility/action.type";
import { auth } from './Utility/firebase';
function App() {
  const [{user}, dispatch] = useContext(DataContext)
  useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch({
        type: Type.SET_USER,
        user: authUser,
      });
    } else {
      dispatch({
        type: Type.SET_USER,
        user: null,
      });
    }
  });
}, []); // Add an empty dependency array to run this effect only once.

  return (
    <Routering/>
  );
}

export default App;
