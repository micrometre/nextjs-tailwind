import Layout from "../components/Layout";
import Hero from "../components/Hero"; 
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
function TestPage() {
  return (
    <Layout>
      <Logo/>
      <Navbar />
      <Hero />
    </Layout>
  );
}

export default TestPage;
