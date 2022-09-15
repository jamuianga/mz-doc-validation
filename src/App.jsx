import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';

function App() {
  const [msg, setMsg] = useState('');
  const [tipoDoc, setTipoDoc] = useState(0);
  const [doc, setDoc] = useState('');

  const validarDoc = () => {
    let regex = null;
    console.log(tipoDoc);

    switch (tipoDoc) {
      case '1':
        regex = /[0-9]{12}[A-Z]{1}/;
        break;
      case '2':
        regex = /[0-9]{8}\/[0-9]{1}/;
        break;
      default:
        alert('Indique o tipo de documento que pretende validar');
        return;
    }

    if (doc.match(regex) != null) {
      setMsg('Válido!');
    } else {
      setMsg('Inválido!');
    }
  };

  return (
    <div className="App">
      <div className="form-group">
        <select
          onChange={(e) => {
            setTipoDoc(e.target.value);
          }}
        >
          <option value={0}>Tipo de documento</option>
          <option value={1}>Bilhete de identidade</option>
          <option value={2}>Carta de condução</option>
          <option value={3}>Passaporte</option>
          <option value={4}>NUIT</option>
        </select>
        <input
          type="text"
          value={doc}
          onChange={(e) => setDoc(e.target.value)}
        />
        <button onClick={validarDoc}>Validar</button>
        <small>{msg}</small>
      </div>
    </div>
  );
}

export default App;
