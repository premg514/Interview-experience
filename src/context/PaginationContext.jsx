import { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => { 
    const [pageNum, setPageNum] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    const pagination = {
        pageNum,
        setPageNum,
        pageSize,
        setPageSize
    };
    return (
        <PaginationContext.Provider value={pagination}>
            {children} 
        </PaginationContext.Provider>
    );
};

export const usePaginationContext = () => {
    return useContext(PaginationContext);
};
