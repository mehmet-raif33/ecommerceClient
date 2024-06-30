import { useDispatch } from "react-redux";
import { login } from "../redux/UserHere/UserHere";

export interface asd {
  maill: string,
  usernamee: string
}

const Login = () => {
    const dispatch = useDispatch();

    const submitForm = async (e) => {
        e.preventDefault();
        

        if (null) {

          const myObject:asd = {
            maill: user?.email ?? '' ,
            usernamee: user?.name ?? ''
          }

          await dispatch(login(myObject))
          
        }
        
    }

  return (
    <div
    className="p-20"
    >
        <form onSubmit={submitForm}
        className="flex flex-col bg-sky-600 p-10 rounded-md"
        >
            <input type="mail" name="mail" placeholder="mail" className="rounded-sm outline-none mb-5 text-[17px] p-2" />
            <input type="password" name="password" placeholder="password"  className="rounded-sm outline-none mb-5 text-[17px] p-2" />
            <input type="submit" value="Login" className="bg-yellow-400 p-2 rounded-md text-lg" />
        </form>
    </div>
  )
}

export default Login