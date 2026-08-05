import "./App.css";
import Badge from "./components/Badge";
import StatCard from "./components/StatCard";
import UserList from "./components/UserList";
import { users } from "./data/users";
import { SiTypescript } from "react-icons/si";

import { FaReact, FaCode } from "react-icons/fa";
function App() {

  return (
    <div className="container">
      <h1 className="page-title">React Components & Props Showcase</h1>

      <p className="subtitle">
        A simple React + TypeScript application demonstrating reusable
        components, typed props, list rendering, and conditional rendering.
      </p>

      <div className="badges">
        <Badge
          label={
            <>
              <FaReact style={{ marginRight: 8 }} />
              React
            </>
          }
          tone="info"
        />

        <Badge
          label={
            <>
              <SiTypescript style={{ marginRight: 8 }} />
              TypeScript
            </>
          }
          tone="success"
        />

        <Badge
          label={
            <>
              <FaCode style={{ marginRight: 8 }} />
              Assignment 1
            </>
          }
          tone="warning"
        />
      </div>

      <div className="stats">
<StatCard 
  title="Users"
  value={users.length}
/>
     </div>

      <h2 className="team-heading">Our Team</h2>

      <UserList users={users} />

      <footer className="footer">
  <p>
    <FaCode style={{ marginRight: "6px" }} />
    Developed by <strong>Alishba Tanveer</strong>
  </p>

  <p>
    React • TypeScript • Vite
  </p>

</footer>
    </div>
  );
}

export default App;