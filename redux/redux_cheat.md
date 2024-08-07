## is used to access state from different components

### install

```
npm install @reduxjs/toolkit react-redux
```

create a file(eg:store) and paste

```
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

import the file and provider in main.jsx
eg:

```
'''
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'
'''
```

the main.jsx will look like this-

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
```

the whole app wrap to this provider.
you can wrap a specific portion of your app also in the same way.

## read these

[official](https://redux-toolkit.js.org/tutorials/quick-start)
[Harry source code](https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/tree/main/Video%20120)
