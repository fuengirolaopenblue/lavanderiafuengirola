import { defineMcp } from "@lovable.dev/mcp-js";
import getBusinessInfo from "./tools/get-business-info";
import listServices from "./tools/list-services";
import listCoverageAreas from "./tools/list-coverage-areas";
import submitB2bLead from "./tools/submit-b2b-lead";

export default defineMcp({
  name: "lavanderia-fuengirola-mcp",
  title: "Lavandería Fuengirola (OpenBlue) MCP",
  version: "0.1.0",
  instructions:
    "Tools for OpenBlue — Lavandería Fuengirola. Use `get_business_info`, `list_services` and `list_coverage_areas` to answer questions about the business, hours, contact, services and coverage on the Costa del Sol. Use `submit_b2b_lead` to send a B2B quote request for property managers, cleaning agencies or vacation-rental owners.",
  tools: [getBusinessInfo, listServices, listCoverageAreas, submitB2bLead],
});
