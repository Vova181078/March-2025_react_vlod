import {useSearchParams} from "react-router-dom";


const Pagination = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    const maxPage = 7;
    let currentPage = Number(searchParams.get('page') || '1');
    return (
        <div>
             <button onClick={() => {
                 if (currentPage > 1) {

                     setSearchParams({page: (--currentPage).toString()});
                 } else {
                     setSearchParams({page: (currentPage = 1).toString()});

                 }

             }}>prev</button>

             <button onClick={() => {

                 if (currentPage < maxPage) {
                     setSearchParams({ page: (++currentPage).toString() });
                 } else {
                     setSearchParams({ page: (currentPage = maxPage).toString() });
                 }

                 }}>next</button>
        </div>
    );

};

export default Pagination;