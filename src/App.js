import React, { Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import Layout from './components/Layout/Layout';
import { GlobalContextProvider } from "./context/GlobalState";


const Overview =  lazy(() => import('./containers/Overview/Overview'));
const Finance =  lazy(() => import('./containers/Finance/Finance'));
const PersonalDetails =  lazy(() => import('./components/PersonalDetails/PersonalDetails'));

function App() {
  return (
    <GlobalContextProvider>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/finance" component={Finance}/>
                <Route path="/details" component={PersonalDetails} />
                <Route path="/" component={Overview} />
            </Switch> 
          </Suspense>
      </Layout>
    </GlobalContextProvider>
  );
}


export default App;
