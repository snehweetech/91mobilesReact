import Header from "@/CommonComponent/header";
import Footer from "@/CommonComponent/footer";
import { Box, Container } from "@mui/material";
export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <Box className="main-content section-bottom-gapping" minHeight={400}>
        <Container>{children}</Container>
      </Box>
      <Footer />
    </>
  );
}
