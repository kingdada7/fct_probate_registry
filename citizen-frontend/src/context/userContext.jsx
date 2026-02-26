import { createContext, useEffect, useState } from "react";
import { API_ENDPOINT } from "../utils/apiPaths.js";
import axiosInstance from "../utils/axiosInstance";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("token");

    if (!accessToken) {
      setLoading(false);
      return;
    }

    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get(API_ENDPOINT.AUTH.GET_PROFILE);

        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        clearUser();
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const updateUser = (userData) => {
    const { token, ...userInfo } = userData; // separate token from user data
    localStorage.setItem("token", token); // store token in localStorage
    setUser(userInfo); // store only user info in state
    setLoading(false); // stop loading
  };

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
