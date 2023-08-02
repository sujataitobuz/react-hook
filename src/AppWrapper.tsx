import React, { Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Images from './components/Images';
import ImagePath from './assets/Images/ImagePath';


const Login = React.lazy(() => import('./screens/Login/Login'));
const Home = React.lazy(() => import('./screens/Home/Home'));
const List = React.lazy(() => import('./screens/List/List'));
const Register = React.lazy(() => import('./screens/Register/Register'));

export default function AppWrapper() {
  return (
    <BrowserRouter>
    <Suspense fallback={<>Loading</>}>
     <nav className="navbar navbar-default navbar-static-top px-16 py-2 bg-black">
              <div className="pl-5 navbar-header navbar-center">
                <Images alt={'logo'} src={ImagePath.logo} size={40} />
              </div>
              <ul className="nav pr-5">
                <li className="nav-item text-yellow-50">
                  <Link to={routes.register} className="nav-link">
                    SignUp
                  </Link>
                </li>

                <li className="nav-item text-yellow-50">
                  <Link to={routes.login} className="nav-link">
                    SignIn
                  </Link>
                </li>

                <li className="nav-item text-yellow-50">
                  <Link to={routes.list} className="nav-link">
                    Todo
                  </Link>
                </li>
              </ul>
          </nav>
<Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.list} element={<List />} />
        <Route path={routes.home} element={<Home />} />
    </Routes>

    </Suspense>
    </BrowserRouter>
  )
}
