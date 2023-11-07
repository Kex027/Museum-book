const IntoRight = ({
  page: {
    fields: { logo, subtitle },
  },
}) => {
  return (
    <div
      style={{
        paddingTop: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "40%",
        }}
      >
        <img src="/The.webp" alt="The" style={{ width: "30%" }} />
        <img src={logo.fields.file.url} alt={logo.fields.title} />
        <img src="/Archives.webp" alt="Archives" style={{ width: "98%" }} />
      </div>

      <h4
        style={{
          width: "70%",
          fontSize: "calc(2 * var(--vh))",
        }}
      >
        {subtitle}
      </h4>
    </div>
  );
};

export default IntoRight;
