
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    body: 'I don’t know of another website as comprehensive as this one. They do a really good job.',
    author: {
      name: 'Leslie Alexander',
      position: 'Senior  Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
    },
  },
  {
    body: 'I found that AppName’s website and mobile app were exceptionally easy to use..',
    author: {
      name: 'Leslie Alexander',
      position: ' Backend Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80',
    },
  },
  {
    body: 'App Name leaves room for spontaneity and last minute travel changes.',
    author: {
      name: 'Leslie Alexander',
      position: ' Frontend Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },

  {
    body: 'App Name leaves room for spontaneity and last minute travel changes.',
    author: {
      name: 'Leslie Alexander',
      position: '  App   Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },

  {
    body: 'App Name leaves room for spontaneity and last minute travel changes.',
    author: {
      name: 'Leslie Alexander',
      position: ' UI/UX Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

/**
 * Function to move the  testimonial to the next one
 * @function handleNextTestimonial
 * @returns {void}
 *
 */
const TestimonialComponent = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  function handleNextTestimonial() {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    )
  }

  /**
   * Function to move the  testimonial to the previous one
   * @function handlePreviousTestimonial
   * @returns {void
   *
   */

  function handlePreviousTestimonial() {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    )
  }

  return (
    <section className=" bg-white  flex   sm:flex-col items-center justify-center">
      <div className="">
        <div className="text-center mx-auto py-12">
          {/*  HEADER  */}
          <button
            type="button"
            className="text-Black   bg-white  rounded-3xl  border    font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2"
          >
            Travel bloggers around the world trust AppName
          </button>

          <div className="  sm:mx-auto max-w-7xl px-6 lg:px-8">
            <div className="   rounded-2xl p-2  mx-auto sm:mt-10 lg:mx-0 lg:max-w-none ">
              <div className="grid grid-cols-1  gap-4  sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 rounded-lg">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.author.position}
                    className={`${
                      index >= currentTestimonialIndex &&
                      index < currentTestimonialIndex + 3
                        ? 'block'
                        : 'hidden'
                    }`}
                  >
                    <figure className="bg-white text-lg leading-6  rounded-lg border p-10   ">
                      <blockquote className="text-black   font-medium  ">
                        <p className="text-sm font-medium   ">
                          {testimonial.body}
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10  text-sm rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          {/*  Name */}
                          <div className="text-sm  font-semibold text-black">
                            {testimonial.author.name}
                          </div>
                          {/* position */}
                          <div className="text-primaryMain text-sm ">
                            {testimonial.author.position}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center  gap-14  mt-6">
              <button onClick={handlePreviousTestimonial}>
                <FaChevronLeft />
              </button>
              <button onClick={handleNextTestimonial}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialComponent
