export async function CreateJugador(data: any) {
  const res = await fetch("/api/jugadores", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const datos = await res.json();
  console.log(datos);
}
