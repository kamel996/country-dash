import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from './lib/error/ErrorBoundaryRoutes';
import PageNotFound from './lib/components/NotFound';
import CountriesRoutes from './features/countries';


const AppRoutes = () => {

  return (
    <div>
      <ErrorBoundaryRoutes>

        <Route
          path="/*"
          element={
              <CountriesRoutes />
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </ErrorBoundaryRoutes>
    </div>
  );
};

export default AppRoutes;
