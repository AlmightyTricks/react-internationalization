import "./lib/i18n"
import NavBar from "./components/NavBar/NavBar"
import Registration from "./components/Registration/Registration";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation("home");
  return <>
    <NavBar />
    <center>
      <h1>{t("title")}</h1>
      <Registration />
    </center>
  </>;
}

export default App;
