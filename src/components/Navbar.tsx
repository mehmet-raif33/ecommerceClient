
export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-slate-50 h-[80px] w-[100%] flex justify-center">
      <div className="bg-slate-50 h-[80px] w-[80%] flex justify-between">
        
        <div className="flex flex-col justify-center">
          <a href="" className="flex justify-center">
            <img src="./assets/icon.png" alt="shopaholic"/>
          </a>
        </div>

        <div>
          <ul>
            <li>
              <a href="/homepage" >
                <img width="30" height="30" src="https://img.icons8.com/offices/30/home.png" alt="home"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
