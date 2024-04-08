import * as React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Layout from "./Layout";
import DisplayChart from "./DisplayChart";

const App = ({ admin }) => {
  const { language } = useI18next();

  return (
    <Layout>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
      <div className="grid grid-cols-1 md:grid-cols-5 md:py-24 md:px-0 gap-2 md:gap-16 lg:gap-24 items-end max-w-6xl mx-auto">
        <div className="col-span-5 relative grid grid-cols-1 gap-2 content-start">
          <DisplayChart admin={admin} language={language} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
