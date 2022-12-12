import React, { useState } from 'react';
import { Layout } from 'antd';
import AuthForm from './components/AuthForm/AuthForm';
import IndexesForm from './components/IndexesForm/IndexesForm';
import ResultBlock from './components/ResultBlock/ResultBlock';

const { Header, Content } = Layout;

function App() {
  const [currentView, setCurrentView] = useState('auth');
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    alfa: '',
    beta: '',
    delta: '',
    teta: '',
  });

  const renderView = () => {
    switch (currentView) {
      case 'auth':
        return <AuthForm data={data} setData={setData} setCurrentView={setCurrentView} />;
      case 'indexes':
        return <IndexesForm data={data} setData={setData} setCurrentView={setCurrentView} />;
      case 'result':
        return <ResultBlock data={data} />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Header>
        <h3 className="header-title">Отслеживание ЭЭГ при когнитивной нагрузке</h3>
      </Header>
      <Content>
        <div className="container">{renderView()}</div>
      </Content>
    </Layout>
  );
}

export default App;
