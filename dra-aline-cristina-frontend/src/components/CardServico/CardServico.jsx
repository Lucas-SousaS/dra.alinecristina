function CardServico({ ulrFoto, titulo, descricao }) {
  return (
    <div className="bg-[#F1F1F1] w-full max-w-sm rounded-xl p-4 md:p-5 flex flex-col gap-4 text-center shadow-sm hover:shadow-md transition">

      {/* imagem */}
      <img
        src={ulrFoto}
        alt={`foto do serviço ${titulo}`}
        className="h-40 sm:h-44 md:h-48 w-full rounded-xl object-cover"
      />

      {/* título */}
      <h2 className="font-serif text-lg md:text-xl min-h-14 flex items-center justify-center">
        {titulo}
      </h2>

      {/* descrição */}
      <p className="text-sm md:text-base text-gray-600 line-clamp-4">
        {descricao}
      </p>
    </div>
  );
}

export default CardServico;
