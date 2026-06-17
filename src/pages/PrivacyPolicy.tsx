import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("privacy.backHome", "Volver al inicio")}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Shield className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-display font-bold text-foreground">
              {t("privacy.title", "Política de Privacidad y Protección de Datos")}
            </h1>
          </div>

          <p className="text-sm text-muted-foreground mb-10">
            {t("privacy.lastUpdated", "Última actualización")}: 17/06/2026
          </p>

          <div className="space-y-10 text-foreground/90 leading-relaxed">
            {/* 1. Responsable */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.responsible.title", "1. Responsable del tratamiento")}
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-foreground min-w-[100px]">Razón social:</span>
                  OPEN BLUE LAVANDERÍA S.L. (en constitución)
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium text-foreground min-w-[100px]">Dirección:</span>
                  C. Federico García Lorca, 22, Local 2, 29640 Fuengirola, Málaga
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium text-foreground min-w-[100px]">Email:</span>
                  info@lavanderiafuengirola.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium text-foreground min-w-[100px]">Teléfono:</span>
                  +34 640 59 49 51
                </p>
              </div>
            </section>

            {/* 2. Datos que recopilamos */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.dataCollected.title", "2. Datos personales que recopilamos")}
              </h2>
              <p className="text-muted-foreground mb-3">
                {t("privacy.dataCollected.intro", "Podemos recopilar y tratar los siguientes datos personales en función del servicio que utilices:")}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Formulario de contacto:</strong>{" "}
                  nombre, email, teléfono y contenido del mensaje.
                </li>
                <li>
                  <strong className="text-foreground">WhatsApp / CallMeBot:</strong>{" "}
                  número de teléfono, nombre (si lo proporcionas) y contenido de la conversación.
                </li>
                <li>
                  <strong className="text-foreground">Cookies y navegación:</strong>{" "}
                  dirección IP, tipo de navegador, páginas visitadas y preferencias de idioma (ver nuestra Política de Cookies).
                </li>
                <li>
                  <strong className="text-foreground">Clientes B2B / gestión vacacional:</strong>{" "}
                  nombre de la empresa, dirección fiscal, datos de contacto del representante, direcciones de las propiedades gestionadas y datos de facturación.
                </li>
              </ul>
            </section>

            {/* 3. Finalidad */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.purpose.title", "3. Finalidad del tratamiento")}
              </h2>
              <p className="text-muted-foreground mb-3">
                {t("privacy.purpose.intro", "Tratamos tus datos personales con las siguientes finalidades:")}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Gestionar tus solicitudes de información, presupuestos y reservas de servicio.</li>
                <li>Prestar el servicio de lavandería contratado (recogida, lavado, entrega y facturación).</li>
                <li>Gestionar la relación comercial con propietarios e inmobiliarias (check-ins, stocks de ropa blanca).</li>
                <li>Enviar comunicaciones comerciales relacionadas con nuestros servicios (solo con tu consentimiento previo).</li>
                <li>Cumplir obligaciones legales y fiscales (facturación, contabilidad).</li>
                <li>Mejorar la experiencia de usuario en nuestra web mediante análisis anónimos de tráfico.</li>
              </ul>
            </section>

            {/* 4. Base legal */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.legalBasis.title", "4. Base legal del tratamiento")}
              </h2>
              <p className="text-muted-foreground">
                La base legal para el tratamiento de tus datos es: (a) tu consentimiento expreso al
                contactarnos o contratar nuestros servicios; (b) la ejecución de un contrato o la aplicación
                de medidas precontractuales a tu solicitud; y (c) el cumplimiento de obligaciones legales
                aplicables (fiscalidad, contabilidad).
              </p>
            </section>

            {/* 5. Conservación */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.retention.title", "5. Plazo de conservación")}
              </h2>
              <p className="text-muted-foreground">
                Conservaremos tus datos personales únicamente durante el tiempo necesario para cumplir
                con la finalidad para la que fueron recopilados y para cumplir obligaciones legales. Los
                datos de contacto se conservarán mientras dure la relación comercial y, posteriormente,
                durante los plazos legalmente establecidos para posibles responsabilidades (generalmente
                6 años para documentación mercantil y fiscal).
              </p>
            </section>

            {/* 6. Destinatarios */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.recipients.title", "6. Destinatarios y transferencias")}
              </h2>
              <p className="text-muted-foreground mb-3">
                No vendemos ni alquilamos tus datos personales a terceros. Podemos compartir tus datos
                únicamente con:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Formspree:</strong> para el envío de formularios de
                  contacto (EE.UU. — acogido al Privacy Shield / Cláusulas Contractuales Tipo).
                </li>
                <li>
                  <strong className="text-foreground">Google Analytics 4:</strong> para análisis anónimos
                  de tráfico web (EE.UU. — con anonimización de IP activada).
                </li>
                <li>
                  <strong className="text-foreground">WhatsApp / Meta:</strong> para comunicaciones a
                  través de nuestra línea de atención por WhatsApp Business.
                </li>
                <li>
                  <strong className="text-foreground">Asesoría fiscal y bancaria:</strong> para la
                  gestión contable, fiscal y de cobros/pagos derivada de la relación comercial.
                </li>
              </ul>
            </section>

            {/* 7. Derechos */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.rights.title", "7. Tus derechos")}
              </h2>
              <p className="text-muted-foreground mb-3">
                Como titular de los datos, tienes derecho a:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Acceder a tus datos personales.</li>
                <li>Solicitar la rectificación de datos inexactos.</li>
                <li>Solicitar la supresión de tus datos cuando ya no sean necesarios.</li>
                <li>Oponerte al tratamiento o solicitar la limitación del mismo.</li>
                <li>Solicitar la portabilidad de tus datos.</li>
                <li>Retirar tu consentimiento en cualquier momento.</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Para ejercer estos derechos, escríbenos a{" "}
                <a href="mailto:info@lavanderiafuengirola.com" className="text-primary hover:underline">
                  info@lavanderiafuengirola.com
                </a>{" "}
                o contacta por WhatsApp. También puedes presentar una reclamación ante la{" "}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Agencia Española de Protección de Datos (AEPD)
                </a>.
              </p>
            </section>

            {/* 8. Seguridad */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.security.title", "8. Medidas de seguridad")}
              </h2>
              <p className="text-muted-foreground">
                Aplicamos medidas técnicas y organizativas apropiadas para garantizar la seguridad de tus
                datos personales: conexiones HTTPS/TLS en nuestra web, acceso restringido a la
                información, almacenamiento en servicios cloud con certificaciones de seguridad, y
                revisión periódica de nuestras prácticas de privacidad.
              </p>
            </section>

            {/* 9. Menores */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.minors.title", "9. Menores de edad")}
              </h2>
              <p className="text-muted-foreground">
                Nuestros servicios no están dirigidos a menores de 16 años. No recopilamos
                conscientemente datos personales de menores. Si eres padre/madre o tutor y crees que tu
                hijo nos ha proporcionado datos, contáctanos para proceder a su eliminación.
              </p>
            </section>

            {/* 10. Cambios */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.changes.title", "10. Cambios en esta política")}
              </h2>
              <p className="text-muted-foreground">
                Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en
                nuestras prácticas o por requisitos legales. La fecha de la última actualización aparece
                al inicio del documento. Te recomendamos revisarla periódicamente.
              </p>
            </section>

            {/* 11. Contacto */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {t("privacy.contact.title", "11. Contacto")}
              </h2>
              <p className="text-muted-foreground">
                Si tienes preguntas sobre esta Política de Privacidad o sobre cómo tratamos tus datos,
                contáctanos:
              </p>
              <div className="mt-3 space-y-1 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  info@lavanderiafuengirola.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  +34 640 59 49 51
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
