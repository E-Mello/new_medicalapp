const url = process.env.NEXT_PUBLIC_API_URL;

export async function fetchCategoriasData() {
  console.log("url", url);
  const response = await fetch(`${url}/categorias`);
  console.log("Eu sou o goku", response);
  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.status}`);
  }
  return response.json();
}

//mudar o fetch para conectar com o backend
