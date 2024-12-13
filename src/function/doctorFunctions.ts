//MEDICAL
export async function fetchMedicalData() {
  const response = await fetch(`http://192.168.100.93:8000/medical`); // Faz a requisição para o endpoint
  if (!response.ok) { // Verifica se a resposta foi bem-sucedida
    throw new Error(`Erro ao buscar dados: ${response.status}`); // Lança erro em caso de falha
  } 
  const data = response.json()
  console.log("Eu sou o goku", data)
  return data  // Retorna os dados no formato JSON
}




export async function fetchMedByName(medical_name: string){
  const doctor_name = encodeURIComponent(medical_name)
  const response = await fetch(`http://192.168.100.93:8000/medical/${doctor_name}`)

  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.status}`);
  }
  const data = response.json()
  return data;
}