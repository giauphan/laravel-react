import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination = ({ blogPosts }) => {
    const firstFivePages = blogPosts.links.slice(0, 13);
    return (
        <>
            <nav aria-label="Page navigation w-full">
                <ul className="flex items-center -space-x-px h-8 text-sm min-w-full">
                    <li className={`pagination-item ${blogPosts.current_page === 1 ? 'disabled' : ''}`}>
                        <a className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500  border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href={`/?page=1`} aria-label="PageFirst">
                             First
                        </a>
                    </li>
                    {firstFivePages.map((link, index) => (
                        <PaginationLink key={index} url={link.url} label={link.label} active={link.active} />
                    ))}
                    <li className={`pagination-item ${blogPosts.current_page === blogPosts.last_page ? 'disabled' : ''}`}>
                        <a className="pagination-link flex items-center justify-center px-4 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href={blogPosts.next_page_url} aria-label="Next ">
                            Next 
                        </a>
                    </li>
                    <li className={`pagination-item mx-3  ${blogPosts.current_page === blogPosts.last_page ? 'disabled' : ''}`}>
                        <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" href={`/?page=${blogPosts.last_page}`} aria-label="Pageend">
                             End
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
const PaginationLink = ({ url, label, active }) => {
    return (
        <li className={`pagination-item ${active ? 'active' : ''}`}>
            <a
                className="pagination-link flex items-center justify-center px-4 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href={url}
                dangerouslySetInnerHTML={{ __html: label }}
            />
        </li>
    );
};
export default Pagination;
