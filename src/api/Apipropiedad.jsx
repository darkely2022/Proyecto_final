const mockPropiedades = [
    {
        nombrepropiedad: "",
        direccionpropiedad: "",
        comuna: 0,
        numhabitacion: 0,
        metrospropiedad: 0,
        valorpropiedad: 0

    }
]

export const CrearPropiedadApi = (PropiedadporCrear) => {
    /* const resp = await fetch('/propiedades');
    const data = await resp.json(); */
       
    const{nombrepropiedad,direccionpropiedad,comuna,numhabitacion,metrospropiedad,valorpropiedad}=PropiedadporCrear
    mockPropiedades.push(
      {nombrepropiedad:nombrepropiedad,direccionpropiedad:direccionpropiedad, comuna:comuna,numhabitacion:numhabitacion,metrospropiedad:metrospropiedad,valorpropiedad:valorpropiedad}
    )
    //console.log(PropiedadporCrear) 
    console.log(mockPropiedades)
    //return mockPropiedades;
}

export const ListarpropiedadesApi=()=>{
    console.log(mockPropiedades)
    return mockPropiedades;
}

/*
export const usersListV2 = async () => {
    const resp = await fetch(`${BASE_URL}/users`)
    const data = await resp.json();
    return data;
}*/

