export async function Usuarios() {
  const res = await fetch("/api/usuarios");

  const datos = await res.json();
  return await datos;
}
