import styled from "@emotion/styled"

const Resultados = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img `
    display: block;
    width: 120px;

`

const Texto = styled.p `
    font-size: 15px;
    text-transform: uppercase;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p `
    font-size: 25px;
    text-transform: uppercase;
    span {
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
  
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Resultados>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más Alto del Día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más Bajo del Día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima Actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
      
    </Resultados>
  )
}

export default Resultado
