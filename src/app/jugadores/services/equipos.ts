export async function equipos() {
  const res = await fetch("/api/equipos");

  const datos = await res.json();
  return await datos;
}
