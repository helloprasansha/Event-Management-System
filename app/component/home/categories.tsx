export default function Categories() {
    return (
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Browse by Category</h2>
          <p className="mt-2 text-gray-500">
            Find events based on your interests.
          </p>
        </div>
  
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-2xl border p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl">🎵</div>
            <h3 className="mt-3 font-semibold">Music</h3>
          </div>
  
          <div className="rounded-2xl border p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl">💻</div>
            <h3 className="mt-3 font-semibold">Technology</h3>
          </div>
  
          <div className="rounded-2xl border p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl">🎨</div>
            <h3 className="mt-3 font-semibold">Art</h3>
          </div>
  
          <div className="rounded-2xl border p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl">⚽</div>
            <h3 className="mt-3 font-semibold">Sports</h3>
          </div>
  
          <div className="rounded-2xl border p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl">🍔</div>
            <h3 className="mt-3 font-semibold">Food</h3>
          </div>
  
          <div className="rounded-2xl border p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl">📚</div>
            <h3 className="mt-3 font-semibold">Education</h3>
          </div>
  
          <div className="rounded-2xl border p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl">🎮</div>
            <h3 className="mt-3 font-semibold">Gaming</h3>
          </div>
  
          <div className="rounded-2xl border p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="text-4xl">💼</div>
            <h3 className="mt-3 font-semibold">Business</h3>
          </div>
        </div>
      </section>
    );
  }