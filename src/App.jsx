import React, { useState } from 'react';
import socialLinks from './socialLinksData';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleDarkMode() {
    setIsDarkMode(prevState => !prevState);
  }

  const buttons = socialLinks.map(item => (
    <Button
      theme={isDarkMode}
      site={item.site}
      href={item.href}
      key={item.id}
    />
  ));

  return (
    <section className={`app ${isDarkMode ? '' : 'light'}`}>
      <Header theme={isDarkMode} handleClick={toggleDarkMode} />
      {buttons}
      <Footer theme={isDarkMode} />
    </section>
  );
}

export default App;
