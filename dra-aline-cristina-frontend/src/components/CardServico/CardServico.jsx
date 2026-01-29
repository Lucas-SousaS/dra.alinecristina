

function CardServico({ulrFoto, titulo, descricao}) {
   
  return (
    <div className="bg-[#F1F1F1] w-72 h-105 p-4 rounded-xl flex flex-col items-center gap-4 text-center">
      <img
        src={ulrFoto}
        alt={`foto do serviço ${titulo}`}
        className="h-40 w-full rounded-xl object-cover"
      />

      <h2 className="font-serif text-xl min-h-14 flex items-center justify-center">
        {titulo}
      </h2>

      <p className="text-sm text-gray-600 line-clamp-4">
        {descricao}
      </p>
    </div>
  );
}

export default CardServico;
