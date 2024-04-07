import AppleIcon from '../assets/ios-badge-en.svg.png'
import AndroidIcon from '../assets/android-badge-en.svg.png'

export const MobileAppComponent = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container  grid grid-cols-1 gap-6 mx-auto py-12 sm:py-16 lg:py-24 lg:grid-cols-2  ">
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            {/* mobile mockup */}
            <div className="relative mx-auto border-gray-800  bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img
                  src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?w=1800&t=st=1687027489~exp=1687028089~hmac=159ed7d5a6061d16444940f791fa2d856beb7bd036bf88f3df9e855910c6a6aa"
                  className=" w-[40rem] h-[40rem] object-cover object-center"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Text info for the mobile app */}
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              AppName Mobile Application
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Download the free AppName for expertise you can count on, and
              travel with confidence.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              {/* Apple icon */}
              <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400  ">
                <img src={AppleIcon} alt="Apple Icon" />
              </button>
              {/* Android icon */}
              <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400  ">
                <img src={AndroidIcon} alt="Android Icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MobileAppComponent
