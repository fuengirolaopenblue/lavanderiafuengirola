import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getBusinessInfo from "./tools/get-business-info";
import listServices from "./tools/list-services";
import listCoverageAreas from "./tools/list-coverage-areas";
import submitB2bLead from "./tools/submit-b2b-lead";

// Supabase project ref is inlined at build time by Vite (import-safe).
// Fallback keeps the issuer well-formed during the throwaway manifest-extract eval.
const projectRef =
  import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "lavanderia-fuengirola-mcp",
  title: "Lavandería Fuengirola (OpenBlue) MCP",
  version: "0.2.0",
  instructions:
    "Tools for OpenBlue — Lavandería Fuengirola. All calls require a valid Supabase JWT in the Authorization header. Use `get_business_info`, `list_services` and `list_coverage_areas` for business info, hours, contact, services and coverage. Use `submit_b2b_lead` to send a B2B quote request.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
    // Accept regular Supabase user session JWTs (no OAuth client_id claim required),
    // so a service account's access_token works as an "API key".
    requireOAuthClientClaim: false,
  }),
  tools: [getBusinessInfo, listServices, listCoverageAreas, submitB2bLead],
});
