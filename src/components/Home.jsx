function Home() {
  return (
    <>
      <div className="2xl:flex justify-between items-center 2xl:w-9/12 2xl:m-auto">
        <div className="2xl:w-7/12">
          <h1 className="gradient-text w-full capitalize px-5 py-5 font-bold text-5xl 2xl:text-5xl 2xl:mt-20">
            Join the world best Move Language developer community at move
            developers DAO.
          </h1>

          <h3 className="gradient-text text-center px-8 py-5 text-2xl xl:text-start 2xl:text-2xl">
            Get resources, tutorials, and upd ates on the latest developments in
            Aptos ecosystem. Start building on <span className="text-orange-500"> #MoveLang today!</span>
          </h3>

          {/* buttons */}

          <div className="w-full text-center my-10">
            <button className="py-2 px-8 rounded-xl mr-8 bg-[#333333ff] text-white">
              Events
            </button>
            <button className="py-2 px-8 rounded-xl bg-[#333333ff] text-white">
              Events
            </button>
          </div>
        </div>

        <div>
          <img
            className="m-auto"
            src="https://movedevelopers.com/03%202.png"
            alt=""
          />
        </div>
      </div>

      {/* next text  */}

      <h2 className="gradient-text text-center text-2xl font-bold py-12 gradient-text">WHAT WE OFFER</h2>

      {/* cards views */}

      <div className="w-10/12 mx-auto h-[35rem] overflow-auto my-12 2xl:flex 2xl:flex-nowrap 2xl:overflow-x-scroll 2xl:touch-auto 2xl:items-start 2xl 2xl:gap-10  ">
        <div className="cards-bg w-10/12 h-[28rem] m-auto mt-14">
          <img
            className="w-48 m-auto relative top-[-3rem]"
            src="https://movedevelopers.com/card1-removebg-preview.png"
            alt=""
          />
          <h3 className="text-center text-xl font-bold ">
            Build DApps on Aptos
          </h3>

          <p className="text-center text-[18px] p-3">
            No more need to build alone, join our community to build alongside
            thousands of other Move developers.
          </p>

          <div className="text-center mt-5 ">
          <div className="text-center mt-20 ">
            <button className="bg-[#333333ff] text-white px-5 py-2">
              Start Building
            </button>
          </div>
        </div>

        <div className="cards-bg w-10/12 h-[28rem] m-auto mt-14">
          <img
            className="w-48 m-auto relative top-[-3rem]"
            src="https://movedevelopers.com/card2-removebg-preview.png"
            alt=""
          />
          <h3 className="text-center text-xl font-bold ">
            Build DApps on Aptos
          </h3>

          <p className="text-center text-[18px] p-3">
            No more need to build alone, join our community to build alongside
            thousands of other Move developers.
          </p>

          <div className="text-center mt-5 ">
          <div className="text-center mt-20 ">
            <button className="bg-[#333333ff] text-white px-5 py-2">
              Start Building
            </button>
          </div>
        </div>

        <div className="cards-bg w-10/12 h-[28rem] m-auto mt-14">
          <img
            className="w-48 m-auto relative top-[-3rem]"
            src="https://movedevelopers.com/card2-removebg-preview.png"
            alt=""
          />
          <h3 className="text-center text-xl font-bold ">
            Build DApps on Aptos
          </h3>

          <p className="text-center text-[18px] p-3">
            No more need to build alone, join our community to build alongside
            thousands of other Move developers.
          </p>

          <div className="text-center mt-5 ">
            <button className="bg-[#333333ff] text-white px-5 py-2">
              Start Building
            </button>
          </div>
        </div>

        <div className="cards-bg w-10/12 h-[28rem] m-auto mt-14">
          <img
            className="w-48 m-auto relative top-[-3rem]"
            src="https://movedevelopers.com/card3-removebg-preview.png"
            alt=""
          />
          <h3 className="text-center text-xl font-bold ">
            Build DApps on Aptos
          </h3>

          <p className="text-center text-[18px] p-3">
            No more need to build alone, join our community to build alongside
            thousands of other Move developers.
          </p>


          <div className="text-center mt-5 ">

          <div className="text-center mt-20 ">
            <button className="bg-[#333333ff] text-white px-5 py-2">
              Start Building
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>

      {/* footer */}

      <h1 className="text-center text-4xl py-10 font-bold gradient-text">BUILD WITH US</h1>
      <div className="flex items-center justify-start gap-5 mx-10 xl:justify-center">
        <img src="https://movedevelopers.com/logo-min%203.png" alt="" />
        <h3 className="text-2xl text-white">Move Developers DAO</h3>
      </div>

      <div className="flex justify-between xl:justify-center xl:gap-28">
        <div className="ml-10 my-10">
          <h3 className="text-xl text-white mb-5 font-semibold">
            Useful Links
          </h3>
          <ul>
            <li className="text-xl text-white">GitBook</li>
            <li className="text-xl text-white">Jobs</li>
            <li className="text-xl text-white">GitHub</li>
          </ul>
        </div>

        <div className="my-10 mr-10">
          <h3 className="text-white text-xl font-semibold ">Follow Us</h3>

          <div className="flex items-center gap-5">
            <div className="text-3xl mt-10 cursor-pointer">
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </div>

            <div className="text-3xl mt-10 cursor-pointer">
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </div>

            <div className="text-3xl mt-10 cursor-pointer">
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home;
