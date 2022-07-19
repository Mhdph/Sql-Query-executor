import axios from "axios";
import { useRef } from "react";

type EditConcetionProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  getConnections: Function;
  connections: any;
};

const EditConnection = ({
  show,
  setShow,
  getConnections,
  connections,
}: EditConcetionProps) => {
  const name = useRef<HTMLInputElement>(null);
  const host = useRef<HTMLInputElement>(null);
  const database = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const data = connections;

  const setData = () => {
    const editedData = {
      connection_name: name.current?.value,
      host: host.current?.value,
      database_name: database.current?.value,
      username: username.current?.value,
      password: password.current?.value,
    };
    onUpdate(editedData);
  };

  //update connection
  const onUpdate = async (value: any) => {
    try {
      const response = await axios.put(
        `http://172.16.1.63:8080/api/connections/`,
        value
      );
      getConnections();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className={`${
        show ? "flex" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed z-50 w-full justify-center items-center md:inset-0  md:h-full`}
    >
      <div className="relative p-8 w-full max-w-2xl h-full md:h-auto">
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
          <div className="px-4 py-8 sm:px-10">
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>

              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-gray-500 bg-white">
                  Add Connection
                </span>
                <button
                  type="button"
                  className="text-gray-400 relative bottom-10 left-28 hover:bg-red-500 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                  onClick={() => setShow(false)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full space-y-6">
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Connection Name"
                      ref={name}
                      defaultValue={data.connection_name}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="search-form-location"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Host Name"
                      ref={host}
                      defaultValue={data.host}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="search-form-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Database Name"
                      ref={database}
                      defaultValue={data.database_name}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="search-form-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Your name"
                      ref={username}
                      defaultValue={data.username}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="search-form-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Your Password"
                      ref={password}
                      defaultValue={data.password}
                    />
                  </div>
                </div>
                <div>
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      onClick={setData}
                      type="button"
                      className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Add
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditConnection;
