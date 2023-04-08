import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SharedContext from "@assets/Context/sharedContext";

function Register() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [inputRegisterValue, setIinputRegisterValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIinputRegisterValue({
      ...inputRegisterValue,
      [name]: value,
    });
  };
  const [errors, setErrors] = useState([]);
  const { setIsLoading } = useContext(SharedContext);

  /** ****************************************************
Fetch return POST user in user table
firstname varchar
lastname varchar
email varchar
password varchar
************************************************ */

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch(`${baseUrl}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputRegisterValue),
    })
      .then((r) => {
        const contentType = r.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          alert(
            `Bienvenue, ${inputRegisterValue.firstname} ${inputRegisterValue.lastname}, pour valider votre compte veuillez vous connecter `
          );
          navigate("/login");
          return r;
        }

        return r.json();
      })

      .then((r) => {
        if (r && !r.ok) {
          setErrors(r.validationErrors);
          return Promise.reject(new Error("errors http"));
        }
        return r;
      })
      .catch((e) => {
        setIsLoading(false);
        console.error(e);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center pt-[7rem]">
        <div className=" flex flex-col items-center text-center w-3/4 max-w-[450px]">
          <form
            onSubmit={handleSubmit}
            className="shadow-2xl w-full justify-center mb-auto  bg-greySimple-100 p-8 px-8 rounded-xl"
          >
            <h2 className="text-4xl text-blueDuck-100 font-bold text-center">
              Inscription
            </h2>
            <div className="flex flex-col text-dark-100 py-1">
              <label htmlFor="firstname">Prénom</label>
              <input
                className="rounded-lg bg-whiteSimple-100 mt-2 p-2"
                name="firstname"
                type="text"
                value={inputRegisterValue.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-dark-100 py-1">
              <label htmlFor="lastname">Nom</label>
              <input
                className="rounded-lg bg-whiteSimple-100 mt-2 p-2"
                name="lastname"
                type="text"
                value={inputRegisterValue.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-dark-100 py-1">
              <label htmlFor="email">Email</label>
              <input
                className="rounded-lg bg-whiteSimple-100 mt-2 p-2"
                name="email"
                type="email"
                value={inputRegisterValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-dark-100 py-1">
              <label htmlFor="password">Mot de passe</label>
              <input
                className="rounded-lg bg-whiteSimple-100 mt-2 p-2"
                name="password"
                type="password"
                value={inputRegisterValue.password}
                onChange={handleChange}
              />
            </div>
            <ul className="text-red-500 font-semibold">
              {errors && errors.map((error) => <li>{error.msg}</li>)}
            </ul>

            <button
              className="w-full my-5 py-2 bg-teal-500 shadow-lg text-white font-semibold rounded-lg"
              type="submit"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
