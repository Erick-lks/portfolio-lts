export default function Button(props) {
  return (
    <button
      className="px-6 py-1 bg-slate-500 text-white rounded-full hover:bg-sky-600 transition duration-300 shadow-md"
      {...props}
    ></button>
  );
}
