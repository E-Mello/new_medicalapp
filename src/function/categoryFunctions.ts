{/*CATEGORIAS*/}
export async function fetchCategoriasData(){
  const response = await fetch(`http://192.168.100.93:8000/categorias`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.status}`);
  }
  return response.json();
}


//mudar o fetch para conectar com o backend