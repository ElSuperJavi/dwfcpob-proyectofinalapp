import '../../components/layout/Layout.css'
import '../orden/Orden.css'
export const Gracias=()=>{
  return(
    <>
    <section className="cuerpo">
      <div className="orden-contenedor">
        <div className="orden-container">
          <div className="orden-title">Compra Realizada con Éxito</div>
          <div className="orden-message">
            ¡Gracias por su compra! Tus artículos serán enviados pronto.
            <hr/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}