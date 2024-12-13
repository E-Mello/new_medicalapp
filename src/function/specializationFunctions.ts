export async function fetchSpecializationData() {
    const response = await fetch(`http://192.168.100.93:8000/medical`);
    if (!response.ok) {
    throw new Error(`erro ao buscar dados: ${response.status}`);
    }
    const data = response.json()
    console.log("Eu sou o Douglas", data)
    return data;
  }