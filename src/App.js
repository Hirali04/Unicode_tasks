import './App.css';
import SettingsContext from './SettingsContext';
import Timer from './Timer';

function App() {
  const settingsInfo={
    workTime:25,
    breakTime:5
  }
  return (
    <main>
        <SettingsContext.Provider value={settingsInfo}>
          <Timer />
        </SettingsContext.Provider>
    </main>
  );
}

export default App;
