import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from '../../lib/error/ErrorBoundaryRoutes';
import Country from './Country';
import CountryInfo from './CountryInfo';


const CountriesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Country />} />
    <Route path=":countryName" element={<CountryInfo />} />
  </ErrorBoundaryRoutes>
);

export default CountriesRoutes;
