Project Documentation
Overview
This project is a React application that uses Redux Toolkit (RTK) to fetch and manage data from the REST Countries API. The application allows users to view and filter countries based on various fields such as name, capital, currency, region, and more.

Tech Stack
React: A JavaScript library for building user interfaces.
PrimeReact: An open source UI components library for React.
Redux Toolkit (RTK): The official, opinionated, batteries-included toolset for efficient Redux development.
REST Countries API: A free, reliable and restful API to access information about countries.

Key Features
Country Data Fetching
The application uses RTK's createApi to fetch country data from the REST Countries API. This data is then stored in the Redux state and can be accessed by any component in the application.

Country Data Filtering
The application allows users to filter country data based on various fields. However, the REST Countries API does not support filtering on multiple fields simultaneously. To overcome this limitation, the application implements a custom filtering mechanism that filters the data one field at a time. This was a challenging aspect of the project, as it required careful management of the filtering state and the fetched data.

Code Structure
src/redux/RTK/country.api.ts: This file contains the RTK API slice that fetches the country data.
src/components/Country.tsx: This component fetches the country data from the Redux state, applies the filters, and renders the filtered data.
src/components/CountriesTable.tsx: This component renders the country data in a table format.

Future Improvements
Implement pagination to improve performance when dealing with large datasets.
Add more fields to the filtering mechanism to provide more granular control to the users.
Improve error handling and display more user-friendly error messages.