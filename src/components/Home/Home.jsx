function Home() {
  return (
    <>
      {/* Navbar1 Pembuka */}
      <div className="h-screen w-screen bg-gradient-to-r from-black to-blue-900">
        <div className="left-0 right-0">
          <div
            className="
        flex justify-start 
        text-center 
        text-white 
        font-bold 
        text-2xl"
          >
            <div className="ml-[60px] mr-[50px] mt-[25px] mb-[20px] text-[50px] h-[64] w-[64px] cursor-pointer">
              <img src="Intermilan.png" alt="Logo Inter" />
            </div>
            <ul className="flex justify-center">
              <li className="mr-[40px] mt-[30px] text-[20px] cursor-pointer">
                Home
              </li>
              <li className="mr-[40px] mt-[30px] text-[20px] cursor-pointer">
                About Us
              </li>
              <li className="mr-[40px] mt-[30px] text-[20px] cursor-pointer">
                Contact
              </li>

              <button
                type="button"
                className="
                  flex justify-between
                  mr-[40px] 
                  mt-[20px] 
                  ml-[730px]
                  text-[20px] 
                  cursor-pointer
            bg-blue-500
            p-2
            rounded-xl
            font-semibold
            h-[50px]"
              >
                Hire Now!
              </button>
            </ul>
          </div>
        </div>

        <div className="h-screen w-screen">
          <h1
            className="
          flex justify-start
          text-left
          text-white
          font-bold
          text-[50px]
          ml-[40px]
          mt-[150px]"
          >
            Think. Make. <br /> Solve.
          </h1>
          <div className="flex justify-start">
            <p
              className="
          flex justify-start
          text-left
          text-white
          text-[35px]
          ml-[40px]"
            >
              __
            </p>

            <p
              className="
          flex justify-start
          text-left
          text-blue-500
          font-bold
          text-[30px]
          ml-[20px]
          mt-[20px]"
            >
              What We Do
            </p>
          </div>
          <p className="text-white ml-[40px]">
            we enjoy creating delightful, human-centered digital
            <br />
            experiences.
          </p>
        </div>

        <div className="h-screen w-screen">
          <img src="Elfenomeno.jpg" alt="Nazario De Lima" />
        </div>
      </div>
      {/* Navbar1 Penutup */}

      {/* Navbar2 Pembuka */}
      <div className="h-screen w-screen bg-gradient-to-r from-black to-blue-900">
        <div className="left-0 right-0">
          <div
            className="
        flex justify-start
        text-center 
        text-white 
        font-bold 
        text-2xl"
          ></div>
        </div>

        <div className="h-screen w-screen">
          <h1
            className="
          flex justify-center
          text-left
          text-white
          font-bold
          text-[50px]
          ml-[450px]
          mt-[150px]"
          >
            Thinking outside the
            <br />
            square space
          </h1>
          <div className="flex justify-start">
            <p
              className="
          flex justify-start
          text-left
          text-white
          text-[35px]
          ml-[680px]"
            >
              __
            </p>

            <p
              className="
          flex justify-start
          text-left
          text-blue-500
          font-bold
          text-[30px]
          ml-[20px]
          mt-[20px]"
            >
              What We Do
            </p>
          </div>
          <p className="text-white ml-[680px]">
            we enjoy creating delightful, human-centered digital
            <br />
            experiences.
          </p>
        </div>
      </div>
      {/* Navbar2 Penutup */}

      {/* Navbar3 Pembuka */}
      <div className="h-screen w-screen bg-gradient-to-r from-black to-blue-900">
        <div className="left-0 right-0">
          <div
            className="
        flex justify-start 
        text-center 
        text-white 
        font-bold 
        text-2xl"
          ></div>
        </div>

        <div className="h-screen w-screen">
          <h1
            className="
          flex justify-start
          text-left
          text-white
          font-bold
          text-[50px]
          ml-[40px]
          mt-[150px]"
          >
            Web Design
            <br />
          </h1>
          <h2
            className="
          flex justify-start
          text-left
          font-bold
          text-[50px]
          text-white
          ml-[40px]"
          >
            Development
          </h2><br />
          <h2
            className="
          flex justify-start
          text-left
          font-bold
          text-[50px]
          text-white
          ml-[40px]"
          >
            Illustration
          </h2><br />
          <h2
            className="
          flex justify-start
          text-left
          font-bold
          text-[50px]
          text-white
          ml-[40px]"
          >
            Product Design
          </h2><br /> 
          <h2
            className="
          flex justify-start
          text-left
          font-bold
          text-[50px]
          text-white
          ml-[40px]"
          >
            Social Media
          </h2>
        </div>
      </div>
      {/* Navbar3 Penutup */}
    </>
  );
}

export default Home;
