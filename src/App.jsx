import './App.css'
import logo from './assets/becket.jpg'
function App() {
  return (
    <>
      <div className='flex justify-center'>
        <img src={logo} width={200} className='rounded shadow mb-3' />
      </div>
      <h2 className='mb-3'>Formulario de Solicitud de Animación de Fiesta</h2>
      <form>
        <section>
          <h4 className='text-start my-5 text-gray-700' style={{ fontSize: '24px' }}>Información del cliente</h4>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-start ms-3 text-gray-900 dark:text-white">Nombre del padre</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Facundo Perez" required />
            </div>
            <div>
              <label htmlFor="first_name" className="block mb-2 text-start ms-3 text-gray-900 dark:text-white">Nombre del niñ@</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ignacio Perez" required />
            </div>
          </div>
        </section>
        <section>
          <h4 className='text-start my-5 text-gray-700' style={{ fontSize: '24px' }}>Detalles del evento:</h4>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="eventType" className="block mb-2 text-start ms-3 text-gray-900 dark:text-white">Tipo de evento</label>
              <select id="eventType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Elige un evento </option>
                <option value="US">Fiesta infantil</option>
                <option value="CA">Evento Caif</option>
                <option value="FR">Discoteca</option>
                <option value="DE">Animación para adultos</option>
                <option value="ES">Primer añito</option>
              </select>
            </div>
            <div>
              <label htmlFor="eventType" className="block mb-2 text-start ms-3 text-gray-900 dark:text-white">Fecha</label>
              <input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="place" className="block mb-2 text-start ms-3 text-gray-900 dark:text-white">Lugar</label>
              <input type="text" id="place" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Altos de San Juan" required />
            </div>
            <div>
              <label htmlFor="eventType" className="block mb-2 text-start ms-3 text-gray-900 dark:text-white">Amerita transporte</label>
              <div className="flex items-center mb-4 ms-3">
                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">SI</label>
              </div>
              <div className="flex items-center ms-3">
                <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">NO</label>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-start ms-3 text-gray-900 dark:text-white">Información general</label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Indique información adicional sobre el evento"
              ></textarea>
            </div>
          </div>
        </section>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar formulario</button>
      </form>

    </>
  )
}

export default App
