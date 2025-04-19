import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { HTMLProps, PropsWithChildren, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '@/Core/context/index'
import { createContext } from 'react'

const Navbar = () => {
  const countCountext = useContext(ShoppingCartContext)

  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className="flex justify-between items-center flex-wrap bg-white w-full shadow-xs px-8 py-5 font-light max-md:px-4">
      <MobileButton></MobileButton>
      <ul className="flex max-lg:hidden items-center flex-wrap gap-3">
        <li className=" font-semibold text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronic"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Miscellaneous"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Miscellaneous
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className=" flex items-center flex-wrap gap-3 ">
        <ul className="flex items-center flex-wrap gap-3 max-md:hidden ">
          <li className="text-black/60">correo@correo.com</li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign in
            </NavLink>
          </li>
        </ul>
        <li>
          <div className="flex flex-col-2">
            <ShoppingCartIcon className="h-6 w-6 text-black"></ShoppingCartIcon>
            <div>{countCountext?.count}</div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

function MobileButton() {
  const [openDropdown, setOpenDropdown] = useState(false)

  const activeStyle = 'w-auto px-4 py-1 bg-gray-300 rounded-lg'

  return (
    <div className="min-lg:hidden">
      <button
        onClick={() => setOpenDropdown(value => !value)}
        type="button"
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>

        <svg
          className="block size-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          className="hidden size-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      {/* <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"></div> */}
      {openDropdown ? (
        <Dropdown
          isOpen={openDropdown}
          setIsOpen={setOpenDropdown}
          className="mt-4"
        >
          <ElementDropdown name="Shopi" to="/" activeStyle={activeStyle} />

          <ElementDropdown
            name="Clothes"
            to="/clothes"
            activeStyle={activeStyle}
          />
          <ElementDropdown
            name="Electronic"
            to="/electronic"
            activeStyle={activeStyle}
          />
          <ElementDropdown name="Shoes" to="/shoes" activeStyle={activeStyle} />
          <ElementDropdown
            name="Miscellaneous"
            to="/Miscellaneous"
            activeStyle={activeStyle}
          />
          <ElementDropdown
            name="Others"
            to="/others"
            activeStyle={activeStyle}
          />
          <ElementDropdown
            name="My Orders"
            to="/my-orders"
            className="max-lg:hidden"
            activeStyle={activeStyle}
          />

          {/* <ul className=" flex items-center flex-wrap gap-3 ">
            <li className="text-black/60">correo@correo.com</li>

            <li>
              <NavLink
                to="/my-account"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Sign in
              </NavLink>
            </li>
            <li>
              <div className="flex flex-col-2">
                <ShoppingCartIcon className="h-6 w-6 text-black"></ShoppingCartIcon>
                <div>{countCountext?.count}</div>
              </div>
            </li>
          </ul> */}
        </Dropdown>
      ) : (
        ''
      )}
    </div>
  )
}

interface IDropdownContext {
  isOpen: boolean

  setIsOpen: (value: boolean) => void
}
const DropdonwnContext = createContext<IDropdownContext | null>(null)
function Dropdown({
  className,
  children,
  isOpen,
  setIsOpen,
}: IDropdownContext & PropsWithChildren & HTMLProps<HTMLDivElement>) {
  return (
    <DropdonwnContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      <div
        className={`absolute right-0 z-99 bg-gray-100 h-full w-full flex flex-col overflow-hidden ${className}`}
      >
        {children}
      </div>
    </DropdonwnContext.Provider>
  )
}
interface PropsElementDropdown {
  to: string
  activeStyle: string
  name: string
  className?: string
}

function ElementDropdown({
  to,
  activeStyle,
  name,
  className,
}: PropsElementDropdown) {
  const context = useContext(DropdonwnContext)

  return (
    <div
      onClick={() => context?.setIsOpen(false)}
      className={`${className ? className : ' '} font-semibold text-lg p-1 `}
    >
      <NavLink
        style={{
          width: '100%',
          display: 'block',
        }}
        to={to}
        className={({ isActive }) => {
          return isActive
            ? `${activeStyle} hover:bg-gray-100`
            : 'hover:bg-gray-100  px-4 py-1'
        }}
      >
        {name}
      </NavLink>
    </div>
  )
}
export default Navbar
