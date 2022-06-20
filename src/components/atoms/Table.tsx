import React from 'react';

type ObjectArray = Object & { id: string }[];

const formatData = (datas: ObjectArray) => {
  const obj: ObjectArray | {} = {};
  datas.forEach((data) => {
    obj[data.id] = false;
  });

  return obj;
};

const Table = ({
  rowLabels,
  datas,
  redirection,
  setSelected,
  selected,
}: {
  rowLabels: string[];
  datas: ObjectArray;
  redirection: (id: string) => void;
  setSelected: React.Dispatch<string[]>;
  selected: string[];
}) => {
  const [selectAll, setSelectAll] = React.useState<boolean>(false);
  const [selectRow, setSelectRow] = React.useState(formatData(datas));

  const checkAll = () => {
    const obj = {};
    datas.forEach((data) => {
      obj[data.id] = false;
    });

    setSelectRow(obj);
  };

  console.log(selectRow);

  return (
    <div className="">
      <table className="w-full ">
        <thead>
          <tr className="">
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
            {rowLabels.map((label) => {
              return (
                <th className="font-medium tracking-wide px-4 py-4 text-gray-600">
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => {
            return (
              <tr key={index} className="border-b border-gray-400">
                <td className="px-4 py-4 text-center">
                  <input
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
                {Object.keys(data).map((keyData) => {
                  if (keyData !== 'id') {
                    return (
                      <td
                        key={Math.random()}
                        className="px-4 py-4 tracking-wide text-sm text-center"
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
