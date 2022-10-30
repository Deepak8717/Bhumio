import { data } from "./data";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottom: "1px solid black",
    width: "80%",
    margin: "0 auto",
    fontSize: "20px",
  },
});
const MyDocument = () => (
  <Document>
    <Page
      size="A4"
      style={{ textAlign: "center", fontSize: "30px", marginTop: "30px" }}
    >
      <View>
        <Text>Project Details</Text>
      </View>
      <View style={styles.page}>
        <Text style={{ width: "30%", margin: "10px" }}>ProjectID</Text>
        <Text style={{ margin: "10px" }}>Project Name</Text>
        <Text style={{ margin: "10px" }}>Budget Crore</Text>
      </View>
      <View style={{ width: "80%", margin: "10px auto" }}>
        {data.map((project, index) => {
          return (
            <View
              style={{ flexDirection: "row", fontSize: "15px" }}
              key={index}
            >
              <Text style={{ width: "30%" }}>{project.projectId}</Text>
              <Text style={{ width: "40%" }}>{project.projectName}</Text>
              <Text style={{ width: "30%" }}>{project.site.budget}</Text>
            </View>
          );
        })}
      </View>
    </Page>
  </Document>
);
const ProjectDetails = () => {
  return (
    <>
      <div className="project-details-container">
        <h1>Project Details</h1>
        <div className="project-header">
          <div className="project-heading">ProjectID</div>
          <div className="project-heading">Project Name</div>
          <div className="project-heading">Budget ₹ Crore</div>
        </div>
        {data.map((project, index) => {
          return (
            <div className="project-details" key={index}>
              <div>{project.projectId}</div>
              <div>{project.projectName}</div>
              <div>{project.site.budget}</div>
            </div>
          );
        })}
      </div>
      <PDFDownloadLink
        document={<MyDocument />}
        fileName="pdfreport.pdf"
        style={{
          border: "2px solid blueviolet",
          borderRadius: "15px",
          padding: "10px",
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Generate PDF"
        }
      </PDFDownloadLink>
    </>
  );
};

export default ProjectDetails;
