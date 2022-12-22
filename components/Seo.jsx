import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>Juan Francisco Aguilar Sánchez - Desarrollador Software
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="	cv, portfolio, react nextjs portfolio, resumen"
      />
      <meta
        name="description"
        content="Juan Francisco Aguilar Sánchez - Personal Portfolio"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="Logo.ico" />
    </Head>
  </>
);

export default Seo;
