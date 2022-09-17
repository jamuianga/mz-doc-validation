import { useState } from 'react';
import './App.scss';

function App() {
  const [documento, setDocumento] = useState(1);
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [showValidacao, setShowValidacao] = useState(false);
  const [isDocumentoValido, setIsDocumentoValido] = useState(false);

  const validarDocumento = () => {
    let regex = null;

    switch (documento) {
      case 1:
        regex = /^[0-9]{12}[A-Z]{1}$/;
        break;
      case 2:
        regex = /[0-9]{8}\/[0-9]{1}/;
        break;
      case '4':
        regex = /^[0-9]{9}$/;
        break;
      default:
        alert('Indique o tipo de documento que pretende validar');
        return;
    }

    if (numeroDocumento.match(regex) != null) {
      setIsDocumentoValido(true);
    } else {
      setIsDocumentoValido(false);
    }

    setShowValidacao(true);
  };

  const resetForm = () => {
    setDocumento(1);
    setNumeroDocumento('');
    setShowValidacao(false);
  };

  return (
    <>
      <h1>Validação de documentos</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`${showValidacao ? 'form-validation' : ''}`}
      >
        <div className="form-input-group">
          <label>Documento</label>
          <select
            className="form-input"
            value={documento}
            onChange={(e) => {
              setDocumento(e.target.value);
            }}
          >
            <option value={1}>Bilhete de identidade</option>
            <option value={2}>Carta de condução</option>
            <option value={3}>Passaporte</option>
            <option value={4}>NUIT</option>
          </select>
        </div>

        <div
          className={`form-input-group ${
            isDocumentoValido ? 'valid' : 'invalid'
          }`}
        >
          <label htmlFor="">Número do documento</label>
          <div className="input-group">
            <input
              className="form-input"
              type="text"
              value={numeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
            />
            {showValidacao && (
              <span className={'material-icons'}>
                {isDocumentoValido ? 'done' : 'close'}
              </span>
            )}
          </div>
        </div>

        <button className="form-btn" type="button" onClick={validarDocumento}>
          Validar
        </button>
        <button className="form-btn" type="button" onClick={resetForm}>
          Repor
        </button>
      </form>
    </>
  );
}

export default App;
