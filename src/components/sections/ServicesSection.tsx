export default function ServicesSection() {
  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center p-24 bg-gray-100">
      <h2 className="text-5xl font-bold text-center mb-8 font-display text-black">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 font-display">Custom Tattoos</h3>
          <p className="text-gray-700 font-body">Unique designs crafted specifically for you</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 font-display">Cover-ups</h3>
          <p className="text-gray-700 font-body">Transform old tattoos into new masterpieces</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 font-display">Consultations</h3>
          <p className="text-gray-700 font-body">Professional advice for your tattoo journey</p>
        </div>
      </div>
    </section>
  );
}
