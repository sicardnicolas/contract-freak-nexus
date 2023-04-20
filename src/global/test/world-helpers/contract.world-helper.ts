import { ContractFreakNexusWorld } from "../contract-freak-nexus.world";

export class ContractWorldHelper {
  getOrCreate();
}

export function getContractWorldHelper(
  world: ContractFreakNexusWorld
): ContractWorldHelper {
  if (!world.contractWorldHelper) {
    world.contractWorldHelper = new ContractWorldHelper();
  }
  return world.contractWorldHelper;
}
