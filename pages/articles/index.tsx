import Header from "@/components/Header";
import Article from "@/components/Article";
import React from "react";
import "@/app/globals.css";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const ArticleSection: React.FC = () => {
    return (
      <div className="">
        <section id="w-full  section-article">
            <Header/>
          <Article/>
          <Subscribe/>
          <Footer/>
        </section>
       
    </div>
  );
};

export default ArticleSection;
