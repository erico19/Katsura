import * as React from "react";
import Layout from "../components/Layout";
import { useI18next } from 'gatsby-plugin-react-i18next'; // Import the useI18next hook
import sitemap from "../images/sitemap.png";

const Contact = () => {
  const { language } = useI18next(); // Get the current language

  return (
    <Layout>
      <div className="max-w-6xl mx-auto text-justify" style={{ color: "black" }}>
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.0)", padding: "80px", borderRadius: "3px" }}></div>
        <h1 className="md:text-3xl text-2xl font-bold pt-8 pb-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white" }}>
       {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
        </h1>
        <div className="grid gap-4">
          <p className="stretch-p" style={{ padding: "60px", backgroundColor: "rgba(255, 255, 255,1)", borderRadius: "5px", margin: "0", margin: "-40px 0 0 0"}}>
            {language === 'en' ? (
              <>
                (English) This project was funded by "Katsura Campus Empirical Research Promotion Fund". We wish to express our deep appreciation for the financial support. We would also like to thank JRISS (Japan Research Institute for Social Systems) for their support in operating the Wi-Fi sensors.
                <ul>
                  <li>
                    Contact e-mail for questions or comments: <a href="mailto:its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp" style={{textDecoration: 'underline', color: 'blue'}}>its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp</a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                (日本語) 本プロジェクトは、桂キャンパス実証研究促進ファンドの助成を受けたものです。ここに感謝の意を表します。また、株式会社社会システム総合研究所には、WiFiセンサーの運用にあたり、様々なサポートをいただきました。心より感謝申し上げます。
                <ul>
                  <li>
                    質問やコメントのための連絡先メールアドレス: <a href="mailto:its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp" style={{textDecoration: 'underline', color: 'blue'}}>its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp</a>
                  </li>
                </ul>
              </>
            )}
          </p>
        </div>

        <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px", margin: "-20px 0 0 0" }}>
        <img className="flex w-full p-4" src={sitemap} alt="説明" />
      </div>
      </div>

      
      
    </Layout>
  );
};

export default Contact;
