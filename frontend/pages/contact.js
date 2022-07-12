import Header from "../components/Header";
import navigation from "../data";
import Footer from "../components/Footer";
import Circles from "../components/contact/Circles"

export default function contact() {
  return (
    <div>
     <Header items={navigation} navPosition="right" home={false} />
      <section
        className="py-10 px-4 lg:px-16 overflow-hidden relative z-10"
        data-aos="fade-up"
        id="contact"
      >
        <div className="container">
          <div className=" flex items-center max-w-md">
            <h2 className="text-slate-900  underline underline-offset-4 decoration-yellow-400 text-5xl font-bold font-serif">
              Get In Touch
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-200 lg:justify-between -mx-4">
            <div
              className="w-full lg:w-1/2 xl:w-6/12 px-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <p className="text-3xl   font-serif text-blue-500 mb-4  mx-5">
                  LOCATION
                </p>
                <p className="text-base  font-extrabold text-body-color leading-relaxed mb-9 mx-5">
                  National Institute of Technology Durgapur West Bengal, India
                </p>
                <p className="text-3xl   font-serif text-blue-500 mb-4  mx-5">
                  Contact Info.
                </p>
                <p className="text-base  font-bold text-body-color leading-relaxed   mx-5">
                  Harshit Surana:
                  <span className="font-bold text-blue-600 italic">

                    +91 980-006-2969
                  </span>
                </p>
                <p className="text-base  font-bold leading-relaxed  mb-9 mx-5">
                  Ritabrata Ganguly :
                  <span className="font-bold text-blue-600 italic">

                    +91 980-006-2969
                  </span>
                </p>
                <p className="text-3xl   font-serif text-blue-500 mb-4  mx-5">
                  Mail Info.
                </p>
                <p className="text-base  font-medium text-body-color leading-relaxed mb-9 mx-5">
                  Email : 
                  <span className="font-bold text-green-500 italic">

                   istenitdurgapur@gmail.com
                  </span>
                </p>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 xl:w-5/12 px-4"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <div className="bg-gray-100 border-2 relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
                                    w-full
                                    rounded-md
                                    p-3
                                    text-gray-800
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:ring-2
                                    ring-blue-400
                                    "
                      name="full_name"
                      id="full_name"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="
                      w-full
                      rounded-md
                      p-3
                      text-gray-800
                      outline-none
                      focus-visible:shadow-none
                      focus:ring-2
                      ring-blue-400
                                    "
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      inputMode="numeric"
                      placeholder="Your Phone"
                      className="   w-full
                      rounded-md
                      p-3
                      text-gray-800
                      outline-none
                      focus-visible:shadow-none
                      focus:ring-2
                      ring-blue-400
                                    "
                      name="phone_number"
                      id="phone_number"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      className="   w-full
                      rounded-md
                      p-3
                      text-gray-800
                      outline-none
                      focus-visible:shadow-none
                      focus:ring-2
                      ring-blue-400
                                    "
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className=" w-full text-white font-bold
                                    bg-indigo-700
                                    rounded-full
                                    p-3
                                    transition
                                    ease-in-out
                                    duration-500
                                    hover:bg-indigo-500
                                    shadow-md
                                    "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#FACC15"
                      />
                    </svg>
                  </span>
                  <Circles />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
