import { WithForm, withFormHandler } from '../../hoc/withFormHandler';

const initialFormData={
  name: '',
  email: '',
  message: '',
}
const ContactSection = ({status ,handleSubmit,handleChange,formData}:WithForm) => {
 
  return (
    <section className="py-8 bg-primaryClr" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-8">We would love to hear from you! Please fill out the form below to reach us.</p>

        <form onSubmit={handleSubmit} className="m-4 p-6 rounded-lg shadow-md outline">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-lg font-semibold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-lg font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-lg font-semibold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your message here"
              rows={4}
              required
            ></textarea>
          </div>

          {status && <p className="text-lg mb-4">{status}</p>}

          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const ContactWithForm =withFormHandler(ContactSection,initialFormData)

export default ContactWithForm

 
