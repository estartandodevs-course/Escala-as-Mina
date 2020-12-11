import { Helmet } from "react-helmet";

export const Head = ({ title }) => {
  return (
    <Helmet>
      <title>Escala as Mina - {title}</title>
    </Helmet>
  );
};
