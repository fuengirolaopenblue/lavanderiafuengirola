import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const FORMSPREE_URL = "https://formspree.io/f/xnjbndyz";

export default defineTool({
  name: "submit_b2b_lead",
  title: "Submit B2B quote request",
  description:
    "Submits a B2B quote request (property managers, cleaning agencies, vacation-rental owners) to OpenBlue. The team responds within 24h.",
  inputSchema: {
    name: z.string().describe("Contact person's full name."),
    company: z.string().describe("Company or property-management brand."),
    email: z.string().describe("Contact email address."),
    phone: z.string().describe("Contact phone number, ideally in international format."),
    service: z
      .enum(["laundry", "cleaning", "full"])
      .describe("Service of interest: laundry only, cleaning only, or full pack."),
    zone: z
      .string()
      .describe(
        "Operational area (e.g. Fuengirola, Los Boliches, Mijas Costa, Benalmádena, Calahonda, Elviria, Marbella).",
      ),
    weekly_turnovers: z
      .enum(["1-5", "5-15", "15+"])
      .describe("Estimated weekly property turnovers."),
    notes: z.string().optional().describe("Optional additional details."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async (input) => {
    const payload = {
      tipo: "B2B Quote Request (MCP)",
      nombre: input.name,
      empresa: input.company,
      email: input.email,
      telefono: input.phone,
      servicio: input.service,
      zona: input.zone,
      turnovers: input.weekly_turnovers,
      notas: input.notes ?? "",
      origen: "MCP",
    };

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return {
          content: [
            {
              type: "text",
              text: `Lead submission failed with status ${res.status}. Please try again later or contact +34 641 819 577.`,
            },
          ],
          isError: true,
        };
      }
      return {
        content: [
          {
            type: "text",
            text: "Lead received. The OpenBlue B2B team will reply within 24h.",
          },
        ],
        structuredContent: { ok: true },
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Network error submitting lead: ${(err as Error).message}`,
          },
        ],
        isError: true,
      };
    }
  },
});
