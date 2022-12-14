import React from 'react';
import socialLinks from './socialLinksData';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import './App.css';

function App() {
  const buttons = socialLinks.map(item => (
    <Button site={item.site} href={item.href} key={item.id} />
  ));
  console.log(buttons);
  return (
    <section>
      <Header />
      {buttons}
      <Footer />
    </section>
  );
}

export default App;
