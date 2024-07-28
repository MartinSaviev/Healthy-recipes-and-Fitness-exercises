import { useNavigate } from "react-router-dom";
import { UserContext } from "../../src/context/AuthContext";
import { useContext, useEffect } from "react";
import * as requester from "../../src/api/requester";
import { urls } from "../../public/allUrls/urls";

export default function Logout() {
  const contextData = useContext(UserContext);
  const accessToken = contextData.accessToken;

  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {

        await requester.get(urls.logout, '', accessToken);
        contextData.changeAuthState({});
        navigate("/");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    logout();
  }, [accessToken, contextData, navigate]);

  return null;
}
