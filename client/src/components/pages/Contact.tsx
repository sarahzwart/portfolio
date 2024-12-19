export const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-500">Contact Me</h2>
        <p className="mt-4 text-gray-600">I'd love to connect!</p>
        <a
          href="mailto:sarahczwart@gmail.com"
          className="inline-block px-8 py-3 mt-6 text-white bg-gray-500 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};
