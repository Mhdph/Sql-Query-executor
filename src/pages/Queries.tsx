import axios from "axios";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import AddQuery from "../components/AddQuery";
import Header from "../components/Header";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import Sidebar from "../components/Sidebar";

export interface Item {
  connection_name: string;
  query_name: string;
  query: string;
  fileds: string;
  show_type: string;
  id: number;
}

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const connectionPerPage = 6;
  const pagesVisited = pageNumber * connectionPerPage;
  const pageCount = Math.ceil(queries.length / connectionPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getConnections();
  }, []);

  //Get all Conecction
  const getConnections = async () => {
    try {
      const res = await axios.get("http://172.16.1.63:8080/api/queries");
      setQueries(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Connection
  const onDelete = async (e: React.SyntheticEvent) => {
    try {
      const response = await axios.delete(
        `http://172.16.1.63:8080/api/queries/${e.currentTarget.id}`
      );
      setQueries(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AddQuery show={showAdd} setShow={setShowAdd} />
      <AddQuery show={showEdit} setShow={setShowEdit} />
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <div className="flex justify-between items-center mt-6 mb-2">
            <h1 className="text-center ml-20 text-[#112A46] text-3xl font-bold">
              Queries
            </h1>
            <div>
              <button
                onClick={() => setShowAdd(true)}
                type="button"
                className="text-white mr-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2"
              >
                New Queries
              </button>
            </div>
          </div>
          <hr className="border-gray-500 w-[80%] mx-auto border my-0.5" />
          {queries.length === 0 && loading === false && <NotFound />}
          {loading === true && <Loading />}
          <div className="flex justify-around flex-wrap mx-auto w-[80%]">
            {loading === false &&
              queries
                .slice(pagesVisited, pagesVisited + connectionPerPage)
                .map((item: Item, index) => (
                  <div
                    className="w-[26%] bg-[#f3f1f1] shadow-xl  mt-20 rounded-lg"
                    key={index}
                  >
                    <ul className="ml-4">
                      <li className="mt-6 border-b-2  border-gray-200 border-solid w-[80%] text-[#112A46]">
                        Connection Name :
                        <span className="text-[#323436] font-semibold ml-1 ">
                          {item.connection_name}
                        </span>
                      </li>
                      <li className=" mt-4 border-b-2 border-gray-200 border-solid w-[80%] text-[#112A46]">
                        Query Name :
                        <span className="text-[#323436] font-semibold  ml-1">
                          {item.query_name}
                        </span>
                      </li>
                      <li className=" mt-4 border-b-2 border-gray-200 border-solid w-[80%] text-[#112A46]">
                        Query :
                        <span className="text-[#323436] font-semibold  ml-1">
                          {item.query}
                        </span>
                      </li>
                      <li className=" mb-4 mt-4 border-b-2 border-gray-200 border-solid w-[80%] text-[#112A46]">
                        Fields :
                        <span className="text-[#323436] font-semibold  ml-1">
                          {item.fileds}
                        </span>
                      </li>
                      <li className=" mb-4 mt-4 border-b-2 border-gray-200 border-solid w-[80%] text-[#112A46]">
                        Show Type :
                        <span className="text-[#323436] font-semibold  ml-1">
                          {item.show_type}
                        </span>
                      </li>
                    </ul>

                    <div className="flex justify-between pb-4 mx-2 mt-2">
                      <div className="w-full mr-2">
                        <span className="block w-full rounded-md shadow-sm">
                          <button
                            onClick={() => setShowEdit(true)}
                            type="button"
                            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          >
                            Edit
                          </button>
                        </span>
                      </div>{" "}
                      <div className="w-full">
                        <span className="block w-full rounded-md shadow-sm">
                          <button
                            onClick={onDelete}
                            type="button"
                            className="text-white bg-gradient-to-r w-full from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Delete
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <div id="page" className="flex items-center ">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              breakLabel="..."
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Queries;
