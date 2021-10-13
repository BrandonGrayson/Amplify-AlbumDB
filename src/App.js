import { DataStore } from '@aws-amplify/datastore';
import { Album } from './models';
import './App.css';
import { useEffect } from "react"

function App() {

  useEffect(() => {
    const pullData = async () => {
      const models = await DataStore.query(Album);
      console.log(models);
    }
    pullData()
  }, [])




  const AddAlbum = async () => {

    await DataStore.save(
      new Album({
        "title": window.prompt(),
        "description": window.prompt(),
        "order": 1020
      })
    );
  }

  return (
    <div className="App">
      <button onClick={AddAlbum}>Add Album</button>
    </div>
  );
}

export default App;
