import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { Select } from 'redpoints-front-components/index';

//import {} from '../../../actions/NAME';

//import {} from '../../../reducers/NAME';

import NAMEFiltersActions from './NAMEFiltersActions';
import { translate } from '../../../helpers/languageHelper';

const NAMEFilters = ({}) => (
  <div>
    <Row gutter={30}>
      <Col span={6}>
        <Select
          label={translate('')}
          onChange={null}
          value={null}
          aria-label=""
        />
      </Col>
      <Col span={6}>
        <Select
          label={translate('')}
          onChange={null}
          value={null}
          aria-label=""
        />
      </Col>
      <Col span={4} align="right">
        <NAMEFiltersActions />
      </Col>
    </Row>
  </div>
);

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(NAMEFilters);