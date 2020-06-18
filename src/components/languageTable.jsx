import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

import ExpandableRowData from '../components/expandable-row.jsx';
import CreateLanguage from './modals/create-language';
import Confirm from './modals/confirm-modal.jsx';

createTheme('solarized', {
  text: {
    primary: '#00000',
    secondary: '#2aa198'
  },
  background: {
    default: '#eee'
  },
  context: {
    background: '#eee',
    text: '#000000'
  },
  divider: {
    default: '#073642'
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)'
  }
});

const LanguageTable = props => {
  const { languages } = props;
  const data = [];
  const columns = [
    {
      name: 'Språk',
      selector: 'name',
      sortable: true
    },
    {
      name: 'Actions',
      sortable: false,
      style: { padding: '0' },
      cell: row => (
        <div>
          <>
            <CreateLanguage language={row} />
            <Confirm
              onConfirm={() => {
                props.deleteLanguage(row.id);
              }}
              body={'Är du säker du vill radera: ' + row.name}
              title="Radera språk"
              confirmText="Radera"
              cancelText="Avbryt"
              buttonText={<i className="fa fa-trash"></i>}
            />
          </>
        </div>
      )
    }
  ];

  languages.forEach(language => {
    data.push({
      id: language.id,
      name: language.name,
      keys: language.keys
    });
  });

  return (
    <div className="mt-3">
      <h5 className="m-0 pb-0 pt-2 px-2" style={{ background: '#eeeeee' }}>
        Språk kontroll <CreateLanguage />
      </h5>
      <DataTable
        noHeader={true}
        columns={columns}
        theme="solarized"
        data={data}
        pagination={true}
        paginationPerPage={10}
        expandableRows
        expandableRowsComponent={<ExpandableRowData data={data.data} />}
      />
    </div>
  );
};

export default LanguageTable;
