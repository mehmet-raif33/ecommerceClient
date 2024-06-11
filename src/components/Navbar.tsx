
export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-slate-50 h-[80px] w-[100%] flex justify-center">
      <div className="bg-slate-50 h-[80px] w-[80%] flex justify-between">
        
        <div className="flex flex-col justify-center">
          <a href="" className="flex justify-center">
            <img 
            src="public/images/website_logo.jpg" 
            alt="asdasd"
            className="w-[250px]"
            />
          </a>
        </div>

        <div className="">
          <ul className="flex flex-row m-3 w-[100%]">
            <li className="mr-3">
              <a href="/homepage" >
                <img width="40" height="40" src="https://img.icons8.com/offices/30/home.png" alt="home"/>
              </a>
            </li>
            <li>
              <a href="/profile" >
                <img width="40" height="40" src="https://img.icons8.com/fluency/96/name--v1.png" alt="home"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
