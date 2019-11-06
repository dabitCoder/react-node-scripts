import chai, { expect } from "chai";
import chaiExclude from "chai-exclude";

import ArrayTestHelper from "../testHelper/ArrayTestHelper";
import AssetDocumentController from "../../src/controller/AssetDocumentController";
import AssetTestData from "../testData/AssetTestData";
import AuthenticationHelper from "../testHelper/AuthenticationHelper";
import CommonTestData from "../testData/CommonTestData";
import ContractTestData from "../testData/ContractTestData";
import CustomerTestData from "../testData/CustomerTestData";
import HttpStatus from "../../src/enumeration/HttpStatus";
import UserTestData from "../testData/UserTestData";

chai.use(chaiExclude);

describe("NAME_OF_YOUR_CONNECTOR", () => {
  it("should fail and get a 401 - Invalid Credentials", async () => {
    context.userToken = null;
    const actual = await NAME_OF_YOUR_CONNECTOR.METHOD_OF_YOUR_CONNECTOR(
      PARAMETERS
    );

    expect(actual).to.not.be.null;
    expect(actual.error).to.not.be.null;
    expect(actual.status).to.be.equal(HttpStatus.UNAUTHORIZED.value);
  });

  it("should fail and get a 403 - Access forbidden", async () => {
    context.userToken = await AuthenticationHelper.getUserToken(
      UserTestData.UTF8_USER
    );
    const actual = await NAME_OF_YOUR_CONNECTOR.METHOD_OF_YOUR_CONNECTOR(
      PARAMETERS
    );

    expect(actual).to.not.be.null;
    expect(actual.error).to.not.be.null;
    expect(actual.status).to.be.equal(HttpStatus.FORBIDDEN.value);
  });

  it("should fail drastically and handle error", async () => {
    context.environment = CommonTestData.INVALID_ENVIRONMENT;
    const actual = await NAME_OF_YOUR_CONNECTOR.METHOD_OF_YOUR_CONNECTOR(
      PARAMETERS
    );

    expect(actual).to.not.be.null;
    expect(actual.error).to.not.be.null;
    expect(actual.status).to.be.equal(HttpStatus.CALL_FAILURE.value);
  });
});
