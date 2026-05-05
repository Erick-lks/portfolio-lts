export default function Card({ title, description, imageUrl }) {
  return (
    <div className="bg-amber-50 w-250 pt-10 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-90 grid place-items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Imagem"
          className="w-[600px] h-[520px] object-cover rounded-4xl"
        />
      ) : (
        <div className="w-[500px] h-[420px] bg-gray-200 flex items-center justify-center text-gray-500">
          Imagem indisponivel
        </div>
      )}
      <div className="p-20 text-center">
        {title && (
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        )}
        {description && (
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        )}
      </div>
    </div>
  );
}
