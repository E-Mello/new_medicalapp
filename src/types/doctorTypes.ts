export interface Medical {
  id: number;
  name: string;
  avatar_url: string;
  score: number;
  biography: string;
  category_id: number; // O ID da categoria do médico
  specializations: string[]; // Lista de especializações
}
