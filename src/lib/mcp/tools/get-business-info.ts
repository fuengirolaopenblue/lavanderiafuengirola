import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_business_info",
  title: "Get business info",
  description:
    "Returns core business information for Lavandería Fuengirola (OpenBlue): address, opening hours, phone, WhatsApp, email and social profiles.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Lavandería Fuengirola — OpenBlue",
      tagline:
        "Lavandería industrial y autoservicio en Fuengirola. Especialistas en alquiler vacacional (Airbnb).",
      address: "Av. de Mijas nº5, Local 2, 29640 Fuengirola, Málaga, España",
      hours: "07:00 – 23:00, 365 días al año",
      phone: "+34 641 819 577",
      whatsapp: "https://wa.me/34641819577",
      email: "info@lavanderiafuengirola.com",
      website: "https://lavanderiafuengirola.com",
      maps: "https://maps.app.goo.gl/bu8z2BPR11gnGxpe6",
      social: {
        instagram: "https://www.instagram.com/openblue_fuengirola/",
        facebook: "https://www.facebook.com/profile.php?id=61575797150377",
      },
      coverage: [
        "Fuengirola",
        "Los Boliches",
        "Torreblanca",
        "Carvajal",
        "Mijas Costa",
        "Benalmádena Costa",
        "Calahonda",
        "Elviria",
        "Marbella",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
