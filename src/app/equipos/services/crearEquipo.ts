export async function CreateEquipo(data: any) {
  const res = await fetch("/api/equipos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const datos = await res.json();
  console.log(datos);
}
