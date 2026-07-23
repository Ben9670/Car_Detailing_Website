import bannerImg from '../assets/banner.jpg'
import exteriorImg from '../assets/exterior.jpg'
import interiorImg from '../assets/interior.jpg'
import ceramicImg from '../assets/ceramic.jpg'

function Home() {
  return (
    <div>
    <section
  className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
  style={{ backgroundImage: `url(${bannerImg})` }}
>
  <div className="absolute inset-0 bg-black/40"></div>
  <h1 className="relative text-white text-4xl md:text-5xl font-bold text-center px-4">
    Premium Car Detailing Services
  </h1>

  <div
    className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
    style={{
      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, var(--fade-color) 100%)',
    }}
  ></div>
</section>

    <section className="py-16 px-6 text-center bg-gray-200 dark:bg-gray-900">
  <h2 className="text-3xl font-bold mb-16 text-gray-800 dark:text-white">Our Services</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

    <div
      className="bg-gray-200 dark:bg-gray-800 rounded-3xl p-4 transition-transform duration-300 hover:scale-105"
      style={{
        boxShadow: `
          10px 10px 20px rgba(0, 0, 0, 0.15),
          -10px -10px 20px rgba(255, 255, 255, 0.7),
          inset 1px 1px 2px rgba(255, 255, 255, 0.3)
        `,
      }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          boxShadow: `inset 4px 4px 8px rgba(0, 0, 0, 0.15), inset -4px -4px 8px rgba(255, 255, 255, 0.5)`,
        }}
      >
        <img src={exteriorImg} alt="Exterior wash" className="w-full h-48 object-cover" />
      </div>
      <div className="pt-5 pb-2">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Exterior Wash</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Hand wash, wax, and polish to bring back the shine.</p>
      </div>
    </div>

    <div
      className="bg-gray-200 dark:bg-gray-800 rounded-3xl p-4 transition-transform duration-300 hover:scale-105"
      style={{
        boxShadow: `
          10px 10px 20px rgba(0, 0, 0, 0.15),
          -10px -10px 20px rgba(255, 255, 255, 0.7),
          inset 1px 1px 2px rgba(255, 255, 255, 0.3)
        `,
      }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          boxShadow: `inset 4px 4px 8px rgba(0, 0, 0, 0.15), inset -4px -4px 8px rgba(255, 255, 255, 0.5)`,
        }}
      >
        <img src={interiorImg} alt="Interior detailing" className="w-full h-48 object-cover" />
      </div>
      <div className="pt-5 pb-2">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Interior Detailing</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Deep cleaning of seats, carpets, and dashboard.</p>
      </div>
    </div>

    <div
      className="bg-gray-200 dark:bg-gray-800 rounded-3xl p-4 transition-transform duration-300 hover:scale-105"
      style={{
        boxShadow: `
          10px 10px 20px rgba(0, 0, 0, 0.15),
          -10px -10px 20px rgba(255, 255, 255, 0.7),
          inset 1px 1px 2px rgba(255, 255, 255, 0.3)
        `,
      }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          boxShadow: `inset 4px 4px 8px rgba(0, 0, 0, 0.15), inset -4px -4px 8px rgba(255, 255, 255, 0.5)`,
        }}
      >
        <img src={ceramicImg} alt="Ceramic coating" className="w-full h-48 object-cover" />
      </div>
      <div className="pt-5 pb-2">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Ceramic Coating</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Long-lasting protection with a glass-like finish.</p>
      </div>
    </div>

  </div>
</section>
    </div>
  )
}

export default Home