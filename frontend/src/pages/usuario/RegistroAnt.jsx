export const Registro=()=>{
    return(
        <>
        <form>
            <h1>Registrar</h1>
            <label htmlFor="username">Nombre de usuario</label>
            <input
                type="text"
                id="username"
                className="auth-input"
                placeholder="Ingresa tu nombre de usuario"
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
                type="email"
                id="email"
                className="auth-input"
                placeholder="Ingresa tu correo electrónico"
            />
            <label htmlFor="password">Contraseña</label>
            <input
                type="password"
                id="password"
                className="auth-input"
                placeholder="Ingresa tu contraseña"
            />
            <button type="submit" className="auth-button boton-general">
                Crear
            </button>
        </form>
        </>
    )
}