import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './content/Content';
import WebSocketsContextProvider from '../contexts/ws-context';
import ChessGameProvider from '../contexts/ChessBoardContext';

import '../static/style/scrollbar.css';
import '../static/style/layout.css';
import '../static/style/spacing.css';
import '../static/style/index.css';

function App() {
  return (
    <Router>
      <WebSocketsContextProvider>
        <ChessGameProvider>
          <Content />
        </ChessGameProvider>
      </WebSocketsContextProvider>
    </Router>
  );
}

export default App;
