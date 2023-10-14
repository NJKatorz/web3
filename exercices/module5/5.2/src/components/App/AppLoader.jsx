import { ProviderWrapper as SortedOpinionsProviderWrapper } from "contexts/sortedOpinions";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <SortedOpinionsProviderWrapper >
        <App />
      </SortedOpinionsProviderWrapper >
  )
}

export default AppLoader;