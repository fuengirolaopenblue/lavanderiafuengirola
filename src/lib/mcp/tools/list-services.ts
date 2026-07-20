import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "Returns the catalogue of services offered: self-service laundry, vacation-rental logistics (Airbnb), residential, and B2B (property managers, cleaning agencies).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = [
      {
        id: "self_service",
        name: "Autoservicio 24h asistido",
        summary:
          "Lavadoras y secadoras Girbau industriales de 8-18 kg. Horario 07:00-23:00, todos los días.",
      },
      {
        id: "vacation_rental",
        name: "Alquiler vacacional / Airbnb",
        summary:
          "Recogida post check-out, desinfección con oxígeno activo, custodia gratuita de ropa limpia y entrega Just-in-Time coordinada con el equipo de limpieza.",
      },
      {
        id: "residential",
        name: "Particulares",
        summary:
          "Colada por kilos, lavado + secado + doblado, tintorería y prendas delicadas.",
      },
      {
        id: "b2b",
        name: "B2B / Property Managers",
        summary:
          "Contratos a medida para agencias de alquiler vacacional, apartamentos turísticos y empresas de limpieza. Facturación mensual y tarifas por volumen.",
      },
      {
        id: "cleaning_360",
        name: "Holiday Cleaning 360°",
        summary:
          "Pack completo: limpieza profesional de la vivienda + lavandería de textiles, coordinado en un solo proveedor.",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
