import React from "react";
import { Link } from "react-router-dom";

const NewComponent = () => {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Simple Transactional Email</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n@media only screen and (max-width: 620px) {\n  table.body h1 {\n    font-size: 28px !important;\n    margin-bottom: 10px !important;\n  }\n\n  table.body p,\ntable.body ul,\ntable.body ol,\ntable.body td,\ntable.body span,\ntable.body a {\n    font-size: 16px !important;\n  }\n\n  table.body .wrapper,\ntable.body .article {\n    padding: 10px !important;\n  }\n\n  table.body .content {\n    padding: 0 !important;\n  }\n\n  table.body .container {\n    padding: 0 !important;\n    width: 100% !important;\n  }\n\n  table.body .main {\n    border-left-width: 0 !important;\n    border-radius: 0 !important;\n    border-right-width: 0 !important;\n  }\n\n  table.body .btn table {\n    width: 100% !important;\n  }\n\n  table.body .btn a {\n    width: 100% !important;\n  }\n\n  table.body .img-responsive {\n    height: auto !important;\n    max-width: 100% !important;\n    width: auto !important;\n  }\n}\n@media all {\n  .ExternalClass {\n    width: 100%;\n  }\n\n  .ExternalClass,\n.ExternalClass p,\n.ExternalClass span,\n.ExternalClass font,\n.ExternalClass td,\n.ExternalClass div {\n    line-height: 100%;\n  }\n\n  .apple-link a {\n    color: inherit !important;\n    font-family: inherit !important;\n    font-size: inherit !important;\n    font-weight: inherit !important;\n    line-height: inherit !important;\n    text-decoration: none !important;\n  }\n\n  #MessageViewBody a {\n    color: inherit;\n    text-decoration: none;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n\n  .btn-primary table td:hover {\n    background-color: #34495e !important;\n  }\n\n  .btn-primary a:hover {\n    background-color: #34495e !important;\n    border-color: #34495e !important;\n  }\n}\n",
        }}
      />
      <span
        className="preheader"
        style={{
          color: "transparent",
          display: "none",
          height: 0,
          maxHeight: 0,
          maxWidth: 0,
          opacity: 0,
          overflow: "hidden",
          msoHide: "all",
          visibility: "hidden",
          width: 0,
        }}
      >
        This is preheader text. Some clients will show this text as a preview.
      </span>
      <table
        role="presentation"
        className="body"
        style={{
          borderCollapse: "separate",
          msoTableLspace: "0pt",
          msoTableRspace: "0pt",
          backgroundColor: "#f6f6f6",
          width: "100%",
        }}
        width="100%"
        cellSpacing={0}
        cellPadding={0}
        border={0}
        bgcolor="#f6f6f6"
      >
        <tbody>
          <tr>
            <td
              style={{
                fontFamily: "sans-serif",
                fontSize: "14px",
                verticalAlign: "top",
              }}
              valign="top"
            >
              &nbsp;
            </td>
            <td
              className="container"
              style={{
                fontFamily: "sans-serif",
                fontSize: "14px",
                verticalAlign: "top",
                display: "block",
                maxWidth: "580px",
                padding: "10px",
                width: "580px",
                margin: "0 auto",
              }}
              width={580}
              valign="top"
            >
              <div
                className="content"
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "580px",
                  padding: "10px",
                }}
              >
                {/* START CENTERED WHITE CONTAINER */}
                <table
                  role="presentation"
                  className="main"
                  style={{
                    borderCollapse: "separate",
                    msoTableLspace: "0pt",
                    msoTableRspace: "0pt",
                    background: "#ffffff",
                    borderRadius: "3px",
                    width: "100%",
                  }}
                  width="100%"
                >
                  {/* START MAIN CONTENT AREA */}
                  <tbody>
                    <tr>
                      <td
                        className="wrapper"
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: "14px",
                          verticalAlign: "top",
                          boxSizing: "border-box",
                          padding: "20px",
                        }}
                        valign="top"
                      >
                        <table
                          role="presentation"
                          style={{
                            borderCollapse: "separate",
                            msoTableLspace: "0pt",
                            msoTableRspace: "0pt",
                            width: "100%",
                          }}
                          width="100%"
                          cellSpacing={0}
                          cellPadding={0}
                          border={0}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  fontFamily: "sans-serif",
                                  fontSize: "14px",
                                  verticalAlign: "top",
                                }}
                                valign="top"
                              >
                                <p
                                  style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "14px",
                                    fontWeight: "normal",
                                    margin: 0,
                                    marginBottom: "15px",
                                  }}
                                >
                                  Hi steve,
                                </p>
                                <p
                                  style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "14px",
                                    fontWeight: "normal",
                                    margin: 0,
                                    marginBottom: "15px",
                                  }}
                                >
                                  Sometimes you just want to send a simple HTML
                                  email with a simple design and clear call to
                                  action. This is it.
                                </p>
                                <table
                                  role="presentation"
                                  className="btn btn-primary"
                                  style={{
                                    borderCollapse: "separate",
                                    msoTableLspace: "0pt",
                                    msoTableRspace: "0pt",
                                    boxSizing: "border-box",
                                    width: "100%",
                                  }}
                                  width="100%"
                                  cellSpacing={0}
                                  cellPadding={0}
                                  border={0}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          fontFamily: "sans-serif",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          paddingBottom: "15px",
                                        }}
                                        valign="top"
                                        align="left"
                                      >
                                        <table
                                          role="presentation"
                                          style={{
                                            borderCollapse: "separate",
                                            msoTableLspace: "0pt",
                                            msoTableRspace: "0pt",
                                            width: "auto",
                                          }}
                                          cellSpacing={0}
                                          cellPadding={0}
                                          border={0}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style={{
                                                  fontFamily: "sans-serif",
                                                  fontSize: "14px",
                                                  verticalAlign: "top",
                                                  borderRadius: "5px",
                                                  textAlign: "center",
                                                  backgroundColor: "#3498db",
                                                }}
                                                valign="top"
                                                bgcolor="#3498db"
                                                align="center"
                                              >
                                                {" "}
                                                <Link
                                                  to="http://127.0.0.1/shop"
                                                  target="_blank"
                                                  style={{
                                                    border: "solid 1px #3498db",
                                                    borderRadius: "5px",
                                                    boxSizing: "border-box",
                                                    cursor: "pointer",
                                                    display: "inline-block",
                                                    fontSize: "14px",
                                                    fontWeight: "bold",
                                                    margin: 0,
                                                    padding: "12px 25px",
                                                    textDecoration: "none",
                                                    textTransform: "capitalize",
                                                    backgroundColor: "#3498db",
                                                    borderColor: "#3498db",
                                                    color: "#ffffff",
                                                  }}
                                                >
                                                  Call To Action
                                                </Link>{" "}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p
                                  style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "14px",
                                    fontWeight: "normal",
                                    margin: 0,
                                    marginBottom: "15px",
                                  }}
                                >
                                  This is a really simple email template. Its
                                  sole purpose is to get the recipient to click
                                  the button with no distractions.
                                </p>
                                <p
                                  style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "14px",
                                    fontWeight: "normal",
                                    margin: 0,
                                    marginBottom: "15px",
                                  }}
                                >
                                  Good luck! Hope it works.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    {/* END MAIN CONTENT AREA */}
                  </tbody>
                </table>
                {/* END CENTERED WHITE CONTAINER */}
                {/* START FOOTER */}
                <div
                  className="footer"
                  style={{
                    clear: "both",
                    marginTop: "10px",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <table
                    role="presentation"
                    style={{
                      borderCollapse: "separate",
                      msoTableLspace: "0pt",
                      msoTableRspace: "0pt",
                      width: "100%",
                    }}
                    width="100%"
                    cellSpacing={0}
                    cellPadding={0}
                    border={0}
                  >
                    <tbody>
                      <tr>
                        <td
                          className="content-block"
                          style={{
                            fontFamily: "sans-serif",
                            verticalAlign: "top",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                            color: "#999999",
                            fontSize: "12px",
                            textAlign: "center",
                          }}
                          valign="top"
                          align="center"
                        >
                          <span
                            className="apple-link"
                            style={{
                              color: "#999999",
                              fontSize: "12px",
                              textAlign: "center",
                            }}
                          >
                            Company Inc, 3 Abbey Road, San Francisco CA 94102
                          </span>
                          <br /> Don't like these emails?{" "}
                          <a
                            href="http://i.imgur.com/CScmqnj.gif"
                            style={{
                              textDecoration: "underline",
                              color: "#999999",
                              fontSize: "12px",
                              textAlign: "center",
                            }}
                          >
                            Unsubscribe
                          </a>
                          .
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="content-block powered-by"
                          style={{
                            fontFamily: "sans-serif",
                            verticalAlign: "top",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                            color: "#999999",
                            fontSize: "12px",
                            textAlign: "center",
                          }}
                          valign="top"
                          align="center"
                        >
                          Powered by{" "}
                          <a
                            href="http://htmlemail.io"
                            style={{
                              color: "#999999",
                              fontSize: "12px",
                              textAlign: "center",
                              textDecoration: "none",
                            }}
                          >
                            HTMLemail
                          </a>
                          .
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* END FOOTER */}
              </div>
            </td>
            <td
              style={{
                fontFamily: "sans-serif",
                fontSize: "14px",
                verticalAlign: "top",
              }}
              valign="top"
            >
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
