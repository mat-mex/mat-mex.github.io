import React from 'react';
import Layout from './layout/Layout';
import './styles.css';
import Home from "./routes/Home";

export default function App() {
  return (
    <Layout>
      <Home/>
    </Layout>
  );
}
