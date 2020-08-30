import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import ChatList from './pages/ChatList';

const Routes: React.FC = () => {
  return (
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
        <Route path="/chat" component={ChatList} />
      </BrowserRouter>
  );
}

export default Routes;