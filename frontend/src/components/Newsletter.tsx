function Newsletter() {
    return (
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest updates, articles, and resources delivered straight to your inbox.
          </p>
  
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Optional: handle form submission here
              alert("Subscribed!");
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Newsletter;
  