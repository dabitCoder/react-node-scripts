import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { Loader, Paper } from 'redpoints-front-components/index';

//import {} from '../../../actions/NAME';
//import {} from '../../../reducers/NAME';

import NAMEFilters from './NAMEFilters';
import NAMETable from './NAMETable';

//import { buildPageable } from '../../../helpers/paginationHelper';

class NAMEAll extends PureComponent {
  /**
  async componentDidMount() {
    const {$FETCH_FUNCTION} = this.props;
    const { sortProperty, order } = defaultPageable;
    const pageable = buildPageable({ pageableProps: { sortProperty, order } });
    await $FETCH_FUNCTION(pageable);
  }

  componentWillUnmount() {
    const {$CLEAR_FUNCTION} = this.props;
    $CLEAR_FUNCTION()
  }*/

  render() {
    return (
      <Paper>
        <Loader isLoading={this.props.isLoading}>
          <NAMEFilters />
          <Row span={24}>
            <Col span={24}>
              <NAMETable />
            </Col>
          </Row>
        </Loader>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(
  mapStateToProps,
  { 
    //$FETCH_FUNCTION, 
    //$CLEAR_FUNCTION 
  }
)(NAMEAll);