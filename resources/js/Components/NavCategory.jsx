import React from "react";

const NavCategory = ({ categoryTIN }) => {
    if (!categoryTIN || !Array.isArray(categoryTIN)) {
        // Handle the case when categoryTIN is not defined or not an array
    console.log(categoryTIN);
      }
  return (
    <>
      {categoryTIN.map((item, index) => (
        <a
          key={item.id}
          className="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200"
          data-nc-id="CardCategory1"
          href={`/category/${item.id}`}
        >
          <div>
            <h2 className="text-base nc-card-title text-neutral-900 font-semibold">
              {item.ten}
            </h2>
            {/* <span className="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
              {item.ten}
            </span> */}
          </div>
        </a>
      ))}
    </>
  );
};

export default NavCategory;
