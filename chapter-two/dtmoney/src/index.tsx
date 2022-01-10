import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model} from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          type:  'deposit',
          category: 'Dev',
          amount: 6000,
          created_at: new Date('2022-01-07 12:30:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type:  'withdraw',
          category: 'despesa',
          amount: 1352.70,
          created_at: new Date('2022-01-10 12:25:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

