import './App.css';
import {Provider} from "react-redux";
import {store} from "../store";
import Layout from "../components/Layout/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TeamsPage from "../pages/TeamsPage/TeamsPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import MainPage from "../pages/MainPage/MainPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            {/* Я без понятия какая страница показывается сначала так что
                TODO: Исправить если неверно
             */}
            <Route index element={<MainPage/>}/>
            <Route path="projects" element={<ProjectsPage/>}/>
            <Route path="teams" element={<TeamsPage/>}/>
            <Route path='*' element={<div>404</div>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
