import '../../styles/home.css'
import '../../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { Bus, IdCard, Plus, Users, X } from 'lucide-react'
import { Notification } from '../../components/notifications';

export function Home() {
  const [isNewBusModalOpen, setIsNewBusModalOpen] = useState(false)
  const [busList, setBusList] = useState([
    {
      name: 'Ônibus 1',
      sign: '173IJA6',
      capacity: 45,
      employeesNumber: 26 
    }
  ])
  const notify = new Notification()

  function openNewBusModal() {
    setIsNewBusModalOpen(true)
  }

  function closeNewBusModal() {
    setIsNewBusModalOpen(false)
  }

  function addNewBus(e) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const busName = data.get('busName')
    const busSign = data.get('busSign')
    const busCapacity = data.get('busCapacity')

    const newBus = {
      name: busName,
      sign: busSign,
      capacity: busCapacity,
    }

    setBusList([...busList, newBus])

    if (!busName || !busSign || !busCapacity) {
      notify.createNotification('error', 'Insira todos os dados!')
      return
    }
    
    notify.createNotification('success', `"${busName}" cadastrado com sucesso!`)
    e.currentTarget.reset()
  }

  return (
    <div>
      <div className='header'>
        <img src="null" alt="" />
        <span className='logo_text'>NoTouchPass</span>
      </div>

      <main className='main'>
        <div className='bus_cards_container'>
          {busList.map(bus => {
            return (
              <button className='card card_bus'>
                <p className='card_bus_title'>{bus.name}</p>
                <div className='separate_bar'></div>
                <p className='card_text'>{bus.employeesNumber ?? 'Nenhum'} funcionário(s) cadastrado(s)</p>
              </button>
            )
          })}
        </div>
        
        <button className='card card_add_bus' onClick={openNewBusModal}>
          <p className='card_text'>Adicionar novo ônibus <Plus size={'30px'}/></p>
        </button>
      </main>

      {isNewBusModalOpen && (
        <div className='new_bus_modal_bg'>
          <form className='new_bus_modal' onSubmit={(e) => addNewBus(e)}>
            <button className='close_new_bus_modal' onClick={closeNewBusModal}>
              <X />
            </button>

            <div className='new_bus_modal_title_div'>
              <h2 className='new_bus_modal_title'>Cadastro de ônibus</h2>
            </div>

            <div className='new_bus_modal_input_div'>
              <input className='new_bus_modal_input' type="text" name="busName" placeholder='Nome de identificação' autoComplete='off' />
              <Bus className='bus_icon' />
            </div>
            <div className='new_bus_modal_input_div'>
              <input className='new_bus_modal_input' type="text" name="busSign" placeholder='Placa do ônibus' autoComplete='off' maxLength={7} />
              <IdCard className='id_icon' />
            </div>
            <div className='new_bus_modal_input_div'>
              <input className='new_bus_modal_input busCapacity' type="number" name="busCapacity" placeholder='Capacidade máxima' autoComplete='off' maxLength={2} />
              <Users className='id_icon' />
            </div>

            <div className='new_bus_modal_input_div'>
              <button type='submit' className='new_bus_modal_button'>Cadastrar</button>
            </div>
          </form>
        </div>
      )}

      <ToastContainer />
    </div>  
  )
}