import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

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
