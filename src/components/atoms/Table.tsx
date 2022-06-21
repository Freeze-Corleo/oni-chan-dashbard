import React from 'react';

type ObjectArray = Object & { id: string }[];

export interface ITableProps {
  rowLabels: string[];
  datas: ObjectArray;
  redirection: (id: string) => void;
  setSelected: React.Dispatch<string[]>;
  selected: string[];
  showSelects: boolean;
}

const formatData = (datas: ObjectArray) => {
  const obj: ObjectArray | { [key: string]: any } = {};
  datas.forEach((data) => {
    obj[data.id] = false;
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
  redirection,
  setSelected,
  selected,
  showSelects,
}) => {
  const [selectAll, setSelectAll] = React.useState<boolean>(false);
  const [selectRow, setSelectRow] = React.useState(formatData(datas));

  const checkAll = () => {
    let obj: { [key: string]: boolean } = {};
    datas.forEach((data) => {
      obj = { ...obj, [data.id]: !selectRow[data.id] };
      console.log(obj);
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
                <th className="Table-head font-medium tracking-wide px-4 py-4 text-gray-600">
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
                      name={datas[index].id}
                      checked={selectRow[datas[index].id]}
                      onChange={(e) => {
                        setSelected([...selected, datas[index].id]);
                        setSelectRow({
                          ...selectRow,
                          [e.target.name]: !selectRow[e.target.name],
                        });
                      }}
                    />
                  </td>
                )}
                {Object.keys(data).map((keyData: any) => {
                  if (keyData !== 'id') {
                    return (
                      <td
                        key={Math.random()}
                        className="px-4 py-4 tracking-wide text-sm text-center font-medium"
                      >
                        {data[keyData]}
                      </td>
                    );
                  }
                })}
                <td
                  className="cursor-pointer"
                  onClick={() => {
                    redirection(data.id);
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
