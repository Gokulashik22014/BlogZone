import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "./context";

const NavBar = () => {
  const toPage = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const gatherData = async () => {
    try {
      const data = await axios.get("http://localhost:3000/profile", {
        withCredentials: true,
      });
      // setUsername(data.data.info.username)
      // console.log(userInfo)
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      await axios.post("http://localhost:3000/login/logout", {
        withCredentials: true,
      });
      setUserInfo(null);
    } catch (error) {
      console.log(error);
    }
  };
  const username = userInfo?.username;
  useEffect(() => {
    gatherData();
  }, []);
  return (
    <main className="flex flex-col">
      <header className="flex justify-between px-16 py-5 bg-zinc-700 h-16">
        <div className="text-yellow-500 text-3xl">
          <h1 className="cursor-pointer" onClick={() => toPage("/")}>
            BlogZone
          </h1>
        </div>
        <nav>
          {username ? (
            <div className="flex flex-row text-md">
              <button className="text-white mx-2  uppercase bg-zinc-900 px-3 py-2 rounded-full hover:border hover:border-yellow-500">
                {username}
              </button>
              <button
                className="cursor-pointer mx-2 text-white bg-zinc-900 px-3 py-2 rounded-full hover:border hover:border-yellow-500"
                onClick={() => toPage("/create")}
              >
                New Post
              </button>
              <button
                className="cursor-pointer mx-2 text-white bg-zinc-900 px-3 py-2 rounded-full hover:border hover:border-yellow-500 "
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <h1 className="cursor-pointer text-white bg-zinc-900 px-3 py-2 rounded-full" onClick={() => toPage("/login")}>
              Login
            </h1>
          )}
        </nav>
      </header>
      <div className="flex flex-col items-center mt-14">
        <Outlet />
      </div>
    </main>
  );
};

export default NavBar;
