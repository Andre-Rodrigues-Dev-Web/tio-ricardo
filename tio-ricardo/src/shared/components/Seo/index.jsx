import React from "react";
import { Helmet } from "react-helmet";
// import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ titleSite, descriptionSite, imageSite, urlSite }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{titleSite}</title>
      <meta name="description" content={descriptionSite} />
      <meta
        name="keywords"
        content="Cora e Theo, dupla de irmãos, shows ao vivo, música, paixão pela música, herança musical, irmãos cantores, apresentações musicais, shows de Cora e Theo, história musical, música ao vivo, artistas jovens, dupla musical, música familiar, Bambuí, Minas Gerais, Velance"
      />
      <meta name="author" content="Velance(André Laurentino rodrigues)" />
      <meta name="geo.region" content="BR" />
      <meta name="geo.placename" content="Brasil" />
      <meta name="rating" content="General" />
      <meta name="robot" content="all" />
      <meta name="Robots" content="index, follow" />
      <meta name="googlebot" content="all" />
      <meta name="distribution" content="Global" />
      <meta name="audience" content="all" />
      <meta name="revisit-after" content="3 days" />
      <meta name="image" content={imageSite} />
      {urlSite && <meta property="og:url" content={urlSite} />}
      <meta property="og:title" content={titleSite} />
      <meta property="og:description" content={descriptionSite} />
      <meta property="og:image" content={imageSite} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleSite} />
      <meta name="twitter:description" content={descriptionSite} />
      <meta name="twitter:image" content={imageSite} />
    </Helmet>
  );
};

export default Seo;
