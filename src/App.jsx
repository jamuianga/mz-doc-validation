import { Check, RotateCcw } from "lucide-react";
import { useState } from "react";
// import "./App.scss";

function App() {
  const [documento, setDocumento] = useState("1");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [showValidacao, setShowValidacao] = useState(false);
  const [isDocumentoValido, setIsDocumentoValido] = useState(false);

  const validarDocumento = () => {
    let regex = null;

    switch (documento) {
      case "1":
        regex = /^[0-9]{12}[A-Z]{1}$/;
        break;
      case "2":
        regex = /^[0-9]{8}\/[0-9]{1}$/;
        break;
      case "4":
        regex = /^[0-9]{9}$/;
        break;
      default:
        alert("Indique o tipo de documento que pretende validar");
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
    setNumeroDocumento("");
    setShowValidacao(false);
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center flex-col py-8">
      <div className="max-w-md">
        <h1 className="font-bold text-3xl mb-8">Validação de documento</h1>

        <div className="bg-blue-300 p-2 rounded mb-8 shadow-xs">
          <p>
            Validação de documentos (B.I., Carta de condução e NUIT) usando{" "}
            <b>Regular Expression</b>.
          </p>
          <br />
          <p>
            1. Selecione o documento que pretende fazer a validação <br />
            2. Insira o número de docuemento <br />
            3. Clique em validar.
          </p>
          <br />
          <p>
            Encontre o código fonte{" "}
            <a
              href="https://github.com/jamuianga/mz-doc-validation.git"
              className="hover:underline text-blue-500"
            >
              aqui
            </a>
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={`${showValidacao ? "form-validation" : ""} mb-8`}
        >
          <div className="mb-4">
            <label className="block font-medium mb-1">Documento</label>
            <select
              className="rounded bg-blue-300 p-2 w-full shadow-xs outline-0"
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

          <div className={`mb-4 ${isDocumentoValido ? "valid" : "invalid"}`}>
            <label className="block font-medium mb-1">
              Número do documento
            </label>
            <div className="">
              <input
                className="rounded bg-blue-300 p-2 w-full shadow-xs outline-0"
                type="text"
                value={numeroDocumento}
                onChange={(e) => setNumeroDocumento(e.target.value)}
              />
              {showValidacao && (
                <span className={"material-icons"}>
                  {isDocumentoValido ? "done" : "close"}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="flex items-center justify-center bg-blue-300 shadow-xs rounded py-2 px-4 gap-2 cursor-pointer font-medium"
              type="button"
              onClick={validarDocumento}
            >
              <Check size={20} /> Validar
            </button>

            <button
              className="flex items-center justify-center bg-blue-300 shadow-xs rounded py-2 px-4 gap-2 cursor-pointer font-medium"
              type="button"
              onClick={resetForm}
            >
              <RotateCcw size={20} /> Limpar
            </button>
          </div>
        </form>

        <div className="flex items-center gap-4 justify-center">
          <a href="https://github.com/jamuianga" target="_blank">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com/in/jânio-muianga" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
