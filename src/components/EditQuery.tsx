import axios from "axios";
import { useEffect, useRef, useState } from "react";

type EditConcetionProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

interface Item {
  connection_name: string;
}

const EditQuery = ({ show, setShow }: EditConcetionProps) => {
  const [result, setResult] = useState();

  const queryName = useRef<HTMLInputElement>(null);
  const [connections, setConnections] = useState([]);
  const query = useRef<HTMLInputElement>(null);
  const connectionName = useRef<HTMLSelectElement>(null);
  const fields = useRef<HTMLInputElement>(null);
  const data: any = connections[0];

  useEffect(() => {
    getConnections();
  }, []);

  //Get all Conecction
  const getConnections = async () => {
    try {
      const res = await axios.get("http://172.16.1.63:8080/api/connections");
      setConnections(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  function setData() {
    const editedQuery = {
      connection_name: connectionName.current?.value,
      query_name: queryName.current?.value,
      query: query.current?.value,
      fields: fields.current?.value,
      show_type: result,
    };

    onUpdate(editedQuery);
  }

  //update connection
  const onUpdate = async (value: any) => {
    try {
      const response = await axios.put(
        `http://172.16.1.63:8080/api/queries/`,
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
      className=" overflow-y-auto overflow-x-hidden fixed z-50 w-full flex justify-center items-center md:inset-0  md:h-full"
    >
      <div className="relative p-8 w-full max-w-2xl h-full md:h-auto">
        {/* main */}

        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
          <div className="px-4 py-8 sm:px-10">
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>

              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-gray-500 bg-white">Add Query</span>
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
                  <div className="  ">
                    <select
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="cars"
                      id="cars"
                      ref={connectionName}
                    >
                      <option selected disabled hidden>
                        Select an Connection
                      </option>{" "}
                      {connections.map((item: Item, index) => (
                        <option>{item.connection_name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="search-form-location"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Query Name"
                      ref={queryName}
                      defaultValue={data.query_name}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="search-form-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Query"
                      ref={query}
                      defaultValue={data.query}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="search-form-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Fields"
                      ref={fields}
                      defaultValue={data.fields}
                    />
                  </div>
                </div>
                <div className=" mt-3 mr-[-20%]">
                  <span>Output : </span>
                  <label htmlFor="output1" className="ml-5">
                    Table
                  </label>
                  <input
                    type="radio"
                    id="output1"
                    className="bg-gray-600 ml-2 rounded-xl text-white px-3"
                    name="output"
                    value="table"
                    onChange={(e: any) => setResult(e.target.value)}
                  />

                  <label htmlFor="output2" className="ml-9">
                    Number
                  </label>
                  <input
                    type="radio"
                    id="output2"
                    className="bg-gray-600 ml-2 rounded-xl text-white px-3"
                    name="output"
                    value="number"
                    onChange={(e: any) => setResult(e.target.value)}
                  />

                  <label htmlFor="outpu3" className="ml-9">
                    Chart
                  </label>
                  <input
                    type="radio"
                    id="outpu3"
                    className="bg-gray-600 ml-2 rounded-xl text-white px-3"
                    name="output"
                    value="chart"
                    onChange={(e: any) => setResult(e.target.value)}
                  />
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

export default EditQuery;
