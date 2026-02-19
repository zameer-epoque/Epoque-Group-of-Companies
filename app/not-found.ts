export default function NotFound() {
    return (
        <div
        style= {{
        height: "100vh",
            backgroundColor: "#0B0B0F",
                display: "flex",
                    flexDirection: "column",
                        justifyContent: "center",
                            alignItems: "center",
                                textAlign: "center",
                                    padding: "20px",
                                        color: "#ffffff",
        }
}
      >
    {/* 404 Number */ }
    < h1
style = {{
    fontSize: "120px",
        fontWeight: "700",
            background: "linear-gradient(90deg,#C79A3B,#D45B5B,#7A2E63)",
                WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                        marginBottom: "10px",
          }}
        >
    404
    < /h1>

{/* Title */ }
<h2
          style={
    {
        fontSize: "28px",
            marginBottom: "15px",
                letterSpacing: "1px",
          }
}
        >
    Oops! Page Not Found
        < /h2>

{/* Description */ }
<p
          style={
    {
        fontSize: "16px",
            maxWidth: "500px",
                color: "#bbbbbb",
                    marginBottom: "30px",
          }
}
        >
    The page you are looking for might have been removed,
        renamed, or is temporarily unavailable.
        < /p>

{/* Button */ }
<a
          href="/"
style = {{
    padding: "12px 30px",
        borderRadius: "50px",
            background:
    "linear-gradient(90deg,#C79A3B,#D45B5B,#7A2E63)",
        color: "#ffffff",
            textDecoration: "none",
                fontWeight: "600",
                    transition: "all 0.3s ease",
                        display: "inline-block",
          }}
        >
    Go Back Home
        < /a>
        < /div>
    );
  }
