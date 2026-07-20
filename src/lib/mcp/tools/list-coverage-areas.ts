import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_coverage_areas",
  title: "List coverage areas",
  description:
    "Returns the geographic areas where OpenBlue offers pickup and delivery on the Costa del Sol.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const areas = [
      { name: "Fuengirola", type: "core" },
      { name: "Los Boliches", type: "core" },
      { name: "Torreblanca", type: "core" },
      { name: "Carvajal", type: "core" },
      { name: "Mijas Costa", type: "core" },
      { name: "Benalmádena Costa", type: "extended" },
      { name: "Calahonda", type: "extended" },
      { name: "Elviria", type: "extended" },
      { name: "Marbella", type: "extended" },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(areas, null, 2) }],
      structuredContent: { areas },
    };
  },
});
