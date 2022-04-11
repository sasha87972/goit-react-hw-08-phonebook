import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { authSelectors, authOperations } from "./redux/auth";
import AppBar from "./components/appBar";
import Container from "./components/container";
import Loader from "./components/loader";
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "HomePage" */)
);
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage" /* webpackChunkName: "RegisterPage" */)
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: "LoginPage" */)
);
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage.js" /* webpackChunkName: "ContactsPage" */)
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <AppBar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <PublicRoute restricted>
                  <HomePage />
                </PublicRoute>
              }
            />

            <Route
              exact
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              exact
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route
              exact
              path="/contacts"
              element={
                <PrivateRoute restricted>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      )}
      <Toaster position="top-right" />
    </Container>
  );
}
