import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PerguntaScreen() {
  const [getRespostas, setRespostas] = useState({
    curso: "",
    disciplina: "",
    profissional: "",
    trabalhaEm: "",
    comoChama: "",
    gostouDeFazer: "",
    aplicadoNaMateria: "",
    servePara: "",
    dorDeCabeca: "",
    dorDeCabeca2: "",
    faria: ""
  });

  function save(chave, valor) {
    console.log(`Alterar [${chave}]: ${valor}`);
    setRespostas((old) => ({
      ...old,
      [chave]: valor
    }));
  }

  function _buildListaPerguntas() {
    return perguntas.map((item) => {
      return <Component item={item} save={save} get={getRespostas} />;
    });
  }

  return (
    <div>
      <ButtonGerar getRespostas={getRespostas} />
      {_buildListaPerguntas()}
      <ButtonGerar getRespostas={getRespostas} />
    </div>
  );
}

function Component({ item, save, get }) {
  return (
    <section className="px-8">
      <h2 class="w-full text-xl font-bold leading-tight my-2">
        {item.pergunta(get)}
      </h2>
      <div className="flex flex-wrap mb-2">
        <div className="relative w-full appearance-none label-floating">
          <textarea
            className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
            name={item.chave}
            type="text"
            maxLength="100"
            placeholder={item.placeholder}
            value={get[item.chave]}
            onChange={(e) => save(item.chave, e.target.value)}
          ></textarea>
          <label
            for="message"
            className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
          >
            Message...
          </label>
        </div>
      </div>
    </section>
  );
}

function ButtonGerar({ getRespostas }) {
  return (
    <div
      className={`
      flex justify-center p-4
      `}
    >
      <Link
        className={`
          text-blue-500 text-lg 
          hover:bg-blue-500 
          hover:text-gray-100
          focus:border-4 
          focus:border-blue-300
          border-2 border-blue-500
          rounded-lg
        `}
        to={{
          pathname: "/ideias",
          state: { respostas: getRespostas }
        }}
      >
        <button
          className={`
          p-2 pl-3 pr-3
          `}
        >
          Gerar Ideias
        </button>
      </Link>
    </div>
  );
}

const perguntas = [
  // Curso
  {
    chave: "curso",
    placeholder: "Administração",
    pergunta: (r) => "Qual seu curso ?"
  },
  // Disciplina
  {
    chave: "disciplina",
    placeholder: "Marketing",
    pergunta: (r) =>
      "Qual a disciplina do curso " +
      r["curso"] +
      " que você mais se identifica?"
  },
  // Profissional
  {
    chave: "profissional",
    placeholder: "Publicitário",
    pergunta: (r) => "Qual o profissional que lida com " + r["disciplina"] + "?"
  },
  // Trabalha em = B10
  {
    chave: "trabalhaEm",
    placeholder: "Agência de Publicidade",
    pergunta: (r) =>
      "Onde o trabalha " +
      r["profissional"] +
      "? COMPLETE A FRASE: Ele trabalha em..."
  },
  // Como Chama
  {
    chave: "comoChama",
    placeholder: "Empresas",
    pergunta: (r) =>
      "Como se chama o individuo, seja fisica ou juridica que consome produtos ou é atendido pelo " +
      r["profissional"] +
      "? COMPLETE A FRASE: Esse individuo pode ser um(a)..."
  },
  // Gostou de Fazer = B12
  {
    chave: "gostouDeFazer",
    placeholder: "Mudança de Marca",
    pergunta: (r) =>
      "Qual teoria, conceito, ferramenta, método, técnica ou principio que você mais tem conhecimento em " +
      r["disciplina"] +
      " O que você fez em sala que mais gostou de fazer? COMPLETE A FRASE: Eu gostei de fazer..."
  },

  // Aplicado na Matéria = B13
  {
    chave: "aplicadoNaMateria",
    placeholder: "Posicionamento de Mercado",
    pergunta: (r) =>
      "Em qual matéria da disciplina de " +
      r["disciplina"] +
      " " +
      r["gostouDeFazer"] +
      " é aplicado? COMPLETE A FRASE: É aplicado na matéria..."
  },

  // Serve Para
  {
    chave: "servePara",
    placeholder: "Repocionamento de Marca",
    pergunta: (r) =>
      "Para que serve um(a) " +
      r["aplicadoNaMateria"] +
      "? COMPLETE A FRASE: Serve para..."
  },

  // Dor de CabeÃ§a = B15
  {
    chave: "dorDeCabeca",
    placeholder: "Clientes confundindo a marca com outra",
    pergunta: (r) =>
      "A falta de " +
      r["servePara"] +
      " gera qual problema para os(as) " +
      r["comoChama"] +
      " que são clientes do(a) " +
      r["trabalhaEm"] +
      " COMPLETE A FRASE: Vai ter principalmente dor de cabeça com.."
  },

  // Dor de CabeÃ§a 2
  {
    chave: "dorDeCabeca2",
    placeholder: "Reclamações de clientes",
    pergunta: (r) =>
      "Deixe aqui mais um problema relacionado ao " +
      r["profissional"] +
      " COMPLETE A FRASE:...Mais uma dor de cabeça será..."
  },

  // Faria = B17
  {
    chave: "faria",
    placeholder: "Mudança de marca",
    pergunta: (r) =>
      "Qual teoria, conceito, ferramenta, método, técnica ou principio capaz de resolver o problema com " +
      r["dorDeCabeca"] +
      "? O que o " +
      r["profissional"] +
      " precisa fazer para evitar problemas com " +
      r["dorDeCabeca"] +
      "? Imagine que você é um " +
      r["profissional"] +
      " e está com esse problema, se você tivesse que sentar e escrever sobre o que precisa estudar para resolver esse problema, o que seria? COMPLETE A FRASE: Eu faria o(a)..."
  }
];
