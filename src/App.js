import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import LatestBlogposts1 from "./components/Blogs/LatestBlogposts1";
import LatestBlogposts2 from "./components/Blogs/LatestBlogposts2";
import OurAwesomeTeam1 from "./components/Teams/OurAwesomeTeam1";
import OurAwesomeTeam2 from "./components/Teams/OurAwesomeTeam2";

function App() {
  return (
    <div>
      <Header />
      <LatestBlogposts1 />
      <LatestBlogposts2 />
      <OurAwesomeTeam1 />
      <OurAwesomeTeam2 />
    </div>
  );
}

export default App;
