import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";

const HomeLayout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default HomeLayout;
