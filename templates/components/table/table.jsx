import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table} from 'redpoints-front-components/index';

//import {$FETCH_FUNCTION} from '../../../actions/NAME';

//import {} from '../../../reducers/NAME';

class NAMETable extends PureComponent {
  render() {
    const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
    return (
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{}}
      />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {
    //$FETCH_FUNCTION,
  }
)(NAMETable);