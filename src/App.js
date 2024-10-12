import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import ComponentContainer from './ComponentContainer.js';
import ComponentItem from './ComponentItem.js';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import Form from './Form.js';
import Later from './Later.js';
import { Provider } from 'react-redux';
import { store } from './store.js';
function App(){
  const [lang,setLang] = useState("es");
  const [progress, setProgress] = useState(10)
  const [api, setApi] = useState(process.env.REACT_APP_NEWS_API)
    return (
      
         <Provider store={store}>
      <Router>
      <div className="App">
         <Navbar lang={lang}/>
         <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
          <Route path="/" element={<ComponentContainer setProgress={setProgress} api={api} lang={"en"}/>}/>
          <Route path="/ComponentItem" element={<ComponentItem />} />
          <Route path="/later" element={<Later />} />
          <Route path="/form" element={<Form />} />
          <Route path="/de" element={<ComponentContainer setProgress={setProgress} api={api} lang={"de"}/>}/>
          <Route path="/en" element={<ComponentContainer setProgress={setProgress} api={api} lang={"en"}/>}/>
          <Route path="/es" element={<ComponentContainer setProgress={setProgress} api={api} lang={"es"}/>}/>
          <Route path="/fr" element={<ComponentContainer setProgress={setProgress} api={api} lang={"fr"}/>}/>
          <Route path="/he" element={<ComponentContainer setProgress={setProgress} api={api} lang={"he"}/>}/>
          <Route path="/it" element={<ComponentContainer setProgress={setProgress} api={api} lang={"it"}/>}/>
          <Route path="/nl" element={<ComponentContainer setProgress={setProgress} api={api} lang={"nl"}/>}/>
          <Route path="/no" element={<ComponentContainer setProgress={setProgress} api={api} lang={"no"}/>}/>
          <Route path="/pt" element={<ComponentContainer setProgress={setProgress} api={api} lang={"pt"}/>}/>
          <Route path="/ru" element={<ComponentContainer setProgress={setProgress} api={api} lang={"ru"}/>}/>
          <Route path="/sv" element={<ComponentContainer setProgress={setProgress} api={api} lang={"sv"}/>}/>
          <Route path="/ud" element={<ComponentContainer setProgress={setProgress} api={api} lang={"ud"}/>}/>
          <Route path="/zh" element={<ComponentContainer setProgress={setProgress} api={api} lang={"zh"}/>}/>
        </Routes>
      </div>
      </Router>
          </Provider>
    )
}

export default App;


