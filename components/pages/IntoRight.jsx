const IntoRight = ({
  page: {
    fields: { logo, footer, subtitle },
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
      <img
        src={logo.fields.file.url}
        alt={logo.fields.title}
        style={{
          objectFit: "scale-down",
          widows: "100%",
        }}
      />

      <h4
        style={{
          width: "70%",
          fontSize: "calc(2 * var(--vh))",
        }}
      >
        {subtitle}
      </h4>

      <p
        style={{
          width: "35%",
          fontSize: "calc(2 * var(--vh))",
        }}
      >
        {footer}
      </p>
    </div>
  );
};

export default IntoRight;
