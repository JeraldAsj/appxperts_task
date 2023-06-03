export const SERVERURL = "http://154.26.130.251:127/";

export const TABLE_CUSTOM_STYLING = {
    header: {
      style: {
        minHeight: "auto",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingBottom: "15px",
        paddingTop: "15px",
        backgroundColor: "red",
      },
    },
    headCells: {
      style: {
        textTransform: "uppercase",
        fontSize: "14px",
        fontWeight: "600",
      },
    },
    cells: {
      style: {
        fontSize: ".875rem",
      },
    },
    pagination: {
      style: {
        fontSize: "14px",
        minHeight: "70px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
      pageButtonsStyle: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        padding: "8px",
        margin: "px",
        cursor: "pointer",
        transition: "0.4s",
        backgroundColor: "transparent",
        "&:disabled": {},
        "&:hover:not(:disabled)": {
          backgroundColor: "#48154a",
          fill: "#fff",
        },
        "&:focus": {},
      },
    },
    noData: {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
        padding: "15px",
      },
    },
  };