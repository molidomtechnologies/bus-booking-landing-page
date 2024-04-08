
import ManImage from '../assets/Man.png'
import ManVector from '../assets/ManVector (1).png'
const JoinMobileAppComponent = () => {
  return (
    <>
      <section className="bg-white">
        <div className="bg-Background md:py-20 xl:mx-20 md:mx-20  mx-2    p-5 rounded-2xl">
          <div className="max-w-6xl   lg:p-10   py-10  mx-auto bg-white  rounded-xl grid md:grid-cols-2 gap-4">
            <div className="col-span-1   flex flex-col justify-center px-4">
              <div className="text-black text-3xl font-bold leading-none mb-4">
                Why join AppName?
              </div>
              <div className="text-cyan-900 text-lg font-bold leading-normal mb-4">
                Faster booking and checkout
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="text-cyan-900 text-xl font-normal leading-normal">
                    •
                  </div>
                  <div className="text-cyan-900 text-base font-medium leading-normal">
                    Manage and cancel your trips with ease
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-cyan-900 text-xl font-normal leading-normal">
                    •
                  </div>
                  <div className="text-cyan-900 text-base font-medium leading-normal">
                    Save your payment method and billing information
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-cyan-900 text-xl font-normal leading-normal">
                    •
                  </div>
                  <div className="text-cyan-900 text-base font-medium leading-normal">
                    Save up to 5 passengers to your account!
                  </div>
                </div>
              </div>
              <div className="text-cyan-900 text-lg font-bold leading-normal mt-4">
              Save money on your tickets
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="text-cyan-900 text-xl font-normal leading-normal">
                    •
                  </div>
                  <div className="text-cyan-900 text-base font-medium leading-normal">
                    Earn up to 6% of the value of your ticket in credits
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-cyan-900 text-xl font-normal leading-normal">
                    •
                  </div>
                  <div className="text-cyan-900 text-base font-medium leading-normal">
                    Get access to all your transactions and credits history
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-cyan-900 text-xl font-normal leading-normal">
                    •
                  </div>
                  <div className="text-cyan-900 text-base font-medium leading-normal">
                    Redeem your GO credits anytime during checkout!
                  </div>
                </div>
              </div>
              
            </div>
            <div className="w-full flex justify-center items-center h-full ">
              <div>
                <div className="relative md:p-28 p-40 lg:p-48 xl:p-60;">
                  <img
                    src={ManImage}
                    alt="ManImage"
                    className="absolute inset-0 object-cover object-center w-full max-w-full"
                  />
                  <img
                    src={ManVector}
                    alt="victor"
                    className="absolute inset-0 object-cover object-center w-full max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JoinMobileAppComponent
