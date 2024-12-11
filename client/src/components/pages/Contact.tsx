export const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-purple-600">Contact Me</h2>
        <p className="mt-4 text-gray-600">I'd love to connect!</p>
        <a
          href="mailto:sarahczwart@gmail.com"
          className="inline-block px-8 py-3 mt-6 text-white bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};
