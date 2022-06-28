import React from 'react';
import SVGIconChecked from '../svg/IconChecked';
import SVGIconUnchecked from '../svg/IconUnchecked';

type ObjectArray = Object & { _id: string }[];

export interface ITableProps {
  rowLabels: string[];
  datas: ObjectArray;
  redirection?: (id: string) => void;
  validation?: (state: string, id: string) => void;
  setSelected: React.Dispatch<string[]>;
  selected: string[];
  showSelects: boolean;
}

const formatData = (datas: ObjectArray) => {
  const obj: ObjectArray | { [key: string]: any } = {};
  datas.forEach((data) => {
    obj[data._id] = false;
  });

  return obj;
};

/**
 * This implement a dynamic table for rendering
 * @param param0
 * @returns
 */
const Table: React.FC<ITableProps> = ({
  rowLabels,
  datas,
  redirection = () => {},
  setSelected,
  selected,
  showSelects,
  validation = () => {},
}) => {
  const [selectAll, setSelectAll] = React.useState<boolean>(false);
  const [selectRow, setSelectRow] = React.useState(formatData(datas));

  const checkAll = () => {
    let obj: { [key: string]: boolean } = {};
    datas.forEach((data) => {
      obj = { ...obj, [data._id]: !selectRow[data._id] };
    });
    setSelectRow(obj);
  };

  return (
    <div className="">
      <table className="w-full ">
        <thead>
          <tr className="">
            {showSelects && (
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onClick={() => {
                    setSelectAll(!selectAll);
                    checkAll();
                  }}
                />
              </th>
            )}
            {rowLabels.map((label) => {
              return (
                <th className="px-4 py-4 font-medium tracking-wide text-gray-600 Table-head">
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {datas.map((data: { [key: string]: any }, index) => {
            return (
              <tr key={index} className="border-b border-gray-200">
                {showSelects && (
                  <td className="px-4 py-4 text-center">
                    <input
                      className=""
                      type="checkbox"
                      name={datas[index]._id}
                      checked={selectRow[datas[index]._id]}
                      onChange={(e) => {
                        setSelected([...selected, datas[index]._id]);
                        setSelectRow({
                          ...selectRow,
                          [e.target.name]: !selectRow[e.target.name],
                        });
                      }}
                    />
                  </td>
                )}
                {Object.keys(data).map((keyData: any) => {
                  if (keyData === 'isAvailable') {
                    return (
                      <td
                        key={Math.random()}
                        className="flex justify-center px-4 py-4 text-sm font-medium tracking-wide text-center"
                      >
                        {data[keyData] ? (
                          <SVGIconChecked className="text-green-800 fill-current" />
                        ) : (
                          <SVGIconUnchecked className="text-red-800 fill-current" />
                        )}
                      </td>
                    );
                  }
                  if (keyData !== '_id') {
                    return (
                      <td
                        key={Math.random()}
                        className="px-4 py-4 text-sm font-medium tracking-wide text-center"
                      >
                        {data[keyData]}
                      </td>
                    );
                  }
                })}
                {data.status && data.status === 'pending' ? (
                  <td className="grid space-y-2 place-content-center">
                    <button
                      className="bg-[#24bf60] px-4 rounded-full font-medium hover:bg-[#1a8a45] transition duration-300 linear"
                      onClick={() => {
                        validation('verified', data._id);
                      }}
                    >
                      Accepter
                    </button>
                    <button
                      className="bg-[#f54f4e] px-4 rounded-full font-medium hover:bg-[#bd3e3e] transition duration-300 linear"
                      onClick={() => {
                        validation('refused', data._id);
                      }}
                    >
                      Refuser
                    </button>
                  </td>
                ) : (
                  <td
                    className="cursor-pointer"
                    onClick={() => {
                      redirection(data._id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
