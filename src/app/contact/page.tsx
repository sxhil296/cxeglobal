import ContactForm from "../components/ContactForm";

export default function Home() {
    return (
      <main>
        <div
      className='w-full mt-[112px] bg-custom-bg bg-cover bg-center relative'
      style={{ backgroundImage: "url('/connect.png')" }}
    >
        {/* Overlay to maintain the background color */}
        <div className="absolute inset-0 bg-custom-bg opacity-80"></div>

        {/* section 1 */}
        <div className='max-w-[1280px] mx-auto px-2 sm:px-6 py-20 sm:py-[140px] text-center relative'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white mb-4'>Contact CXE Global</h1>
           
        </div>
    </div>
        <ContactForm />
      </main>
    );
  }
  