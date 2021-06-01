import { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Index";
import Timeline from "../components/Timeline";
import useUser from "../hooks/use-user";
import LoggedInUserContext from "../context/logged-in-user";

const Dashboard = ({user: loggedInUser}) => {
  const { user, setActiveUser } = useUser(loggedInUser.uid);
  useEffect(() => {
    document.title = "Bat-a-Gram";
  }, []);
  return (
    <LoggedInUserContext.Provider value={{user, setActiveUser}}>
      <div className="by-gray-background">
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
};

export default Dashboard;
