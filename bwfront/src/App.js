import Routes from "./Routes";
import AppContextProvider from "./contexts/AppContext";
export default function App() {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}
