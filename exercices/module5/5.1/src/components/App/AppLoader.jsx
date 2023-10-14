import { ProviderWrapper as CountersProviderWrapper } from "contexts/countersContext";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <CountersProviderWrapper >
        <App />
      </CountersProviderWrapper >
  )
}

export default AppLoader;