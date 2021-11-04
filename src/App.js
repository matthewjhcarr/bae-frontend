import Amplify from "aws-amplify";
import React from "react";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import logo from './logo.png'
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MailToButton from "./components/MailToButton";

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <MailToButton label={<i class="far fa-life-ring"></i>} mailto='mailto:help@testemail.com' />
      </header>
      <AmplifyAuthenticator>
        <div>
          My App
          <AmplifySignOut />
        </div>
      </AmplifyAuthenticator>
    </Router>
  );
}

export default App;
