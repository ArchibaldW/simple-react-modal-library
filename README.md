# React Single Modal Library

This library is intended to works with React

## Installation

To install the library, use the following command :

```
npm i simple-react-modal-library
```

## Props

This commponents have 3 props :

_text_ (string) : The Text inside modal

_show_ (boolean) : Is the modal is shown or not

_hideModal_ (function) : Trigger when button pushed (Expected to hide the modal)

## Example

Usage example of modal component with react-redux

```js
import './App.css'
import Router from '../pages/router'
import { getModal } from '../store/selectors'
import { useSelector, useDispatch } from 'react-redux'
import modalSlice from '../features/modal/modalSlice'
import { Modal } from 'simple-react-modal-library'

function App() {
  const dispatch = useDispatch()
  const modal = useSelector(getModal)

  function hideModal() {
    dispatch(modalSlice.actions.hideModal())
  }

  return (
    <div className='app'>
      <Router />
      <Modal text={modal.text} show={modal.show} hideModal={hideModal} />
    </div>
  )
}

export default App
```
