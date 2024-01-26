import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getUserLogged, putAccessToken } from "./utils/api";
import ArsipPage from "./ArsipPage";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
import CreatePage from "./CreatePage";
import LoginPage from "./LoginPage";
import DetailPage from "./DetailPage";
import NotFound from "./NotFound";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserLogged();
        setUser(data);
        setIsLoading(false);
      } catch (error) {
        console.error("gagal fetch data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    try {
      const { data } = await getUserLogged();
      setUser(data);
    } catch (error) {
      console.error("gagal fetch data abis login:", error);
    }
  };

  const onLogout = () => {
    setUser(null);
    putAccessToken("");
  };

  if (isLoading) {
    return null;
  }

  return (
    <Routes>
      {!user ? (
        <>
          <Route path={"/register"} element={<RegisterPage />} />
          <Route
            path={"/*"}
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          />
        </>
      ) : (
        <>
          <Route path={"/*"} element={<NotFound />} />
          <Route path={"/"} element={<HomePage logout={onLogout} />} />
          <Route path={"/create"} element={<CreatePage logout={onLogout} />} />
          <Route path={"/archived"} element={<ArsipPage logout={onLogout} />} />
          <Route
            path={"/note/:id"}
            element={<DetailPage logout={onLogout} />}
          />
        </>
      )}
    </Routes>
  );
};

export default App;
