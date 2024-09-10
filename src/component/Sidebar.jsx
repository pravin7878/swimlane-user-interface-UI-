import { Link } from 'react-router-dom'
import '../App.css'

// all icons
import logoIcon from "../assets/logo.png"
import homeIcon from "../assets/home.png"
import listIcon from "../assets/list.png"
import boardIcon from "../assets/kanban-board.png"

export default function Sidebar() {
  return (
    <div className='flex flex-col flex-wrap gap-1'>
      <div className="flex justify-center items-center p-3 rounded-md dark-lg">
        <span className=' w-1/3'>
          <img src={logoIcon} alt="Logo" className='w-full'/>
        </span>
        <span className='shadow-[0px_5px_15px_rgba(0, 0, 0, 0.35)]'>Todo App</span>
      </div>
      <div className="border-0 border-red-600 flex flex-col dark-lg">
        <Link>
          <span>
            <img src={homeIcon} alt="" />
            <h3>Home</h3>
          </span>
        </Link>
        <Link>
          <span>
            <img src={boardIcon} alt="" />
            <h3>Board</h3>
          </span>
        </Link>
        <Link>
          <span>
            <img src={listIcon} alt="" />
            <h3>List</h3>
          </span>
        </Link>
      </div>
    </div>
  )
}
