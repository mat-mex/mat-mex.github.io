import React, { Fragment } from 'react';
import Header from '../layout/Header';
import Content from '../layout/Content';
import Footer from '../layout/Footer';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Content>
        { children }
      </Content>
      <Footer/>
    </Fragment>
  );
}
