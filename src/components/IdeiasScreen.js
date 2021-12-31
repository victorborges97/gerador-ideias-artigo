import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function IdeiasScreen() {
  const location = useLocation();
  return (
    <div>
      <ButtonVoltar />
      {location.state?.respostas && (
        <section className="bloco-gerador col-md-12 p-5">
          <div className="textarea col-md-12 form-group">
            <textarea
              name="lista_ideias"
              className="form-control sendo-feito-text"
              id="lista-ideias"
              rows="15"
              readOnly=""
              value={generate(location.state?.respostas)}
            ></textarea>
          </div>
        </section>
      )}
    </div>
  );
}

function ButtonVoltar() {
  return (
    <div className="flex justify-center p-4">
      <Link
        to="perguntas"
        className={`
          text-blue-500 text-lg 
          hover:bg-blue-500 
          hover:text-gray-100
          focus:border-4 
          focus:border-blue-300
          border-2 border-blue-500
          rounded-lg
        `}
      >
        <button className="p-2 pl-3 pr-3">Voltar</button>
      </Link>
    </div>
  );
}

const generate = (respostas) => {
  //var pulaLinha = "\n\n\n";

  var listaDeIdeias = [];

  // 1Âª Ideia (A20)
  listaDeIdeias.push(
    "DE QUE FORMA A APLICAÇÃO DO(A) " +
      respostas["faria"] +
      " PODE REFLETIR OU CONTRIBUIR NO(A) " +
      respostas["gostouDeFazer"] +
      "?"
  );

  // 2Âª Ideia (A22)
  listaDeIdeias.push(
    "QUAIS OS FATORES QUE ESTUDA O(A) " +
      respostas["servePara"] +
      " INFLUENCIA O(A) " +
      respostas["dorDeCabeca"] +
      "?"
  );

  // 3Âª Ideia (A24)
  listaDeIdeias.push(
    "QUAL A IMPORTÂNCIA DO ESTUDO DO(A) " +
      respostas["servePara"] +
      " COMO SOLUÇÃO PARA " +
      respostas["dorDeCabeca"] +
      "?"
  );

  // 4Âª Ideia (A26)
  listaDeIdeias.push(
    "QUAL A IMPORTÂNCIA DA APLICAÇÃO DO(A) " +
      respostas["faria"] +
      " FRENTE A " +
      respostas["dorDeCabeca2"] +
      "?"
  );

  // 5Âª Ideia (A28)
  listaDeIdeias.push(
    "QUAIS OS PROCEDIMENTOS E TECNICAS QUE MELHOR SE ADEQUAM A ANALISE DO(A) " +
      respostas["aplicadoNaMateria"] +
      " COMO SOLUÇÃO PARA " +
      respostas["dorDeCabeca2"] +
      "?"
  );

  // 6Âª Ideia (A30)
  listaDeIdeias.push(
    "QUAIS FATORES DETERMINAM A COMPREENSÃO DO(A) " +
      respostas["servePara"] +
      " PARA " +
      respostas["gostouDeFazer"] +
      " NO(A) " +
      respostas["comoChama"] +
      "?"
  );

  // 7Âª Ideia (A32)
  listaDeIdeias.push(
    "DE QUE FORMA A APLICAÇÃO DO(A) " +
      respostas["faria"] +
      " PARA " +
      respostas["servePara"] +
      " PODE REFLETIR OU CONTRIBUIR NO(A) " +
      respostas["gostouDeFazer"] +
      " DO(A) " +
      respostas["comoChama"] +
      "?"
  );

  // 8Âª Ideia (A34)
  listaDeIdeias.push(
    "QUAIS OS EFEITOS DA APLICAÇÃO DO(A) " +
      respostas["faria"] +
      " PARA " +
      respostas["servePara"] +
      " NO(A) PROCESSSO DE " +
      respostas["gostouDeFazer"] +
      " DO(A) " +
      respostas["comoChama"] +
      "?"
  );

  // 9Âª Ideia (A36)
  listaDeIdeias.push(
    "QUAIS FATORES DETERMINAM A COMPREENSÃO DO(A) " +
      respostas["faria"] +
      " PARA " +
      respostas["servePara"] +
      " COMO SOLUÇÃO DE " +
      respostas["dorDeCabeca"] +
      "?"
  );

  // 10Âª Ideia (A38)
  listaDeIdeias.push(
    "QUAIS OS ASPECTOS DO ESTUDO SOBRE " +
      respostas["faria"] +
      " PARA " +
      respostas["aplicadoNaMateria"] +
      " INFLUENCIA NO(A) " +
      respostas["dorDeCabeca2"] +
      "?"
  );

  // 11Âª Ideia (A40)
  listaDeIdeias.push(
    "QUAIS FATORES DETERMINAM O CONHECIMENTO BÁSICO DAS FERRAMENTAS DO(A) " +
      respostas["faria"] +
      " PARA " +
      respostas["gostouDeFazer"] +
      " COMO SOLUÇÃO FRENTE AO PROBLEMA DE " +
      respostas["dorDeCabeca"] +
      "?"
  );

  // 12Âª Ideia (A42)
  listaDeIdeias.push(
    "QUAIS OS EFEITOS DA ANALISE DA TEORIA DE " +
      respostas["faria"] +
      " COMO MEIO PARA " +
      respostas["gostouDeFazer"] +
      " PODE INFLUENCIAR NO(A) " +
      respostas["dorDeCabeca"] +
      "?"
  );

  // Setar Lista de Ideias
  const res = listaDeIdeias.join("\n\n\n");

  return res.toString();
};
