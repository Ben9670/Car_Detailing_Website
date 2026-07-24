import logoImg from '../assets/logo.png'

function Logo() {
  return (
    <div className="fixed top-4 left-4 z-50">
      <img src={logoImg} alt="ShineCar Detailing Logo" className="h-20 w-auto drop-shadow-lg" />
    </div>
  )
}

export default Logo