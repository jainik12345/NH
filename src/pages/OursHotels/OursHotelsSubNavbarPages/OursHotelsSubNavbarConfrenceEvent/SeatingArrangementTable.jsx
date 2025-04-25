import React from "react";

const SeatingArrangementTable = ({ seatingData }) => {
  if (!seatingData || seatingData.length === 0) return null;

  // Dynamically get all column names from the first item
  const columns = Object.keys(seatingData[0]);

  return (
    <div className="overflow-x-auto py-8">
      <h2 className="text-center text-2xl font-bold text-emerald-800 mb-6">
        Seating Arrangements
      </h2>

      <table className="min-w-full table-auto border-collapse  overflow-hidden">
        <thead className="bg-[#193531] text-white">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-4 py-3 border-2 border-black capitalize text- md:text-[18px]"
              >
                {col.replace(/([A-Z])/g, " $1")}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-center">
          {seatingData.map((item, idx) => (
            <tr key={idx} className="even:bg-emerald-50">
              {columns.map((col, i) => (
                <td
                  key={i}
                  className="px-4 py-3 border-2 border-black text-sm md:text-base"
                >
                  {item[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeatingArrangementTable;
