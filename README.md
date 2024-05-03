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

Usage example of modal component

```js
import { Modal } from 'simple-react-modal-library'

function ContainerUsingModal() {
  const [text, setText] = useState('')
  const [show, setShow] = useState(false)

  function hideModal() {
    setShow(false)
    setText('')
  }

  return (
    <div>
      <button onClick={setShow(true); setText('Cette modale est visible')}>Show the modal</button>
      <Modal text={modal.text} show={modal.show} hideModal={hideModal} />
    </div>
  )
}

export default App
```
