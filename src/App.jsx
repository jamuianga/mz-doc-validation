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
      case '1':
        regex = /^[0-9]{12}[A-Z]{1}$/;
        break;
      case '2':
        regex = /^[0-9]{8}\/[0-9]{1}$/;
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
      <h1>Validação de documento</h1>

      <div className="about">
        Validação de documentos (B.I., Carta de condução e NUIT) usando Regular
        Expression. <br />
        <br />
        1. Selecione o documento que pretende fazer a validação <br />
        2. Insira o número de docuemento <br />
        3. Clique em validar. <br />
        <br />
        Encontre o código fonte{' '}
        <a href="https://github.com/janiodrey/mz-doc-validation.git">aqui</a>
      </div>

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
            {/* <option value={3}>Passaporte</option> */}
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
          <span className="material-icons">check</span> Validar
        </button>

        <button className="form-btn" type="button" onClick={resetForm}>
          <span className="material-icons">refresh</span> Limpar
        </button>
      </form>

      <div className="contact">
        <a href="https://github.com/janiodrey" target="_blank">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://linkedin.com/in/jânio-muianga" target="_blank">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </>
  );
}

export default App;
