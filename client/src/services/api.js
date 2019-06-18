const calcularCarnaval = ano =>
  fetch("http://localhost:4009/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/graphql" },
    body: `query{
      carnaval(ano:${ano}){
        ano,
        dtCarnaval
      }
    }`
  })
    .then(response => response.json())
    .then(({ data }) => data.carnaval)
    .catch(err => {
      throw err;
    });

export default {calcularCarnaval}
