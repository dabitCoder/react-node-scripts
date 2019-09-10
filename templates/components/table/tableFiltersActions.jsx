import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Button } from "redpoints-front-components/index";

/**
import {
  $FETCH_FUNCTION
  NAMEApply,
  NAMEClear,
} from '../../../actions/NAME';
*/

//import {} from '../../../reducers/NAME';
import { translate } from "../../../helpers/languageHelper";
//import { buildPageable } from '../../../helpers/paginationHelper';

class NAMEFiltersActions extends PureComponent {
  constructor(props) {
    super(props);
    this.handleApplyFilter = this.handleApplyFilter.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
  }

  handleApplyFilter() {
    //const { filters, NAMEFiltersApply } = this.props;
    //NAMEFiltersApply(filters);
  }

  handleClearFilter = async () => {
    //const { NAMEFiltersClear } = this.props;
    //await NAMEFiltersClear();
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          className="ant-btn-sm"
          aria-label="apply-button"
          onClick={this.handleApplyFilter}
        >
          Apply
        </Button>
        <Button
          type="secondary"
          className="ant-btn-sm"
          aria-label="clear-button"
        >
          Clear
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(NAMEFiltersActions);
