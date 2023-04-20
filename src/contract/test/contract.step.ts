import { DataTable, Then, When } from "@cucumber/cucumber";
import { ContractFreakNexusWorld } from "../../global/test/contract-freak-nexus.world";
import {
  Converters,
  cucumberDataTable,
} from "@cucumber-stories/cucumber-datatable";
import { HttpMethodConverter } from "../../global/test/converters/http-method.converter";
import { getContractWorldHelper } from "../../global/test/world-helpers/contract.world-helper";

const getContracts = cucumberDataTable({
  applicationName: { columnName: "Application", converter: Converters.String },
  httpMethod: { columnName: "HTTP Method", converter: HttpMethodConverter },
  endpoint: { columnName: "Endpoint", converter: Converters.String },
  queryParameters: {
    columnName: "Query parameters",
    converter: Converters.ObjectArray({
      key: { position: 0, converter: Converters.String },
      value: { position: 1, converter: Converters.String },
    }),
  },
});

When(
  /^we receive contracts$/,
  function (this: ContractFreakNexusWorld, datatable: DataTable) {
    const contracts = getContracts(datatable);
  }
);

Then(
  /^we store contracts$/,
  function (this: ContractFreakNexusWorld, datatable: DataTable) {
    const expectedContracts = getContracts(datatable);
    const contractWorldHelper = getContractWorldHelper(this);

    expectedContracts.map((expectedContract) => {
      const storedContract = contractWorldHelper.getOrCreate(expectedContract);
    });
  }
);
