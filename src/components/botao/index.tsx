interface buttonProps {
    first: string;
    second: string;
    col:string;
    px:string;
    index?: number;
}

export default function Botao({first, second, px, col}: buttonProps) {
  return (
    <button 
      className={`bg-[#51A8FF] text-white p-3 rounded-full ${px} items-center flex ${col}`}
    >
    <p>{first} </p>
    <p>{second}</p>
    </button>
  );
}