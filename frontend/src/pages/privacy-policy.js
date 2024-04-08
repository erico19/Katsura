import * as React from "react";
import Layout from "../components/Layout";
import { useI18next } from 'gatsby-plugin-react-i18next'; // Import the useI18next hook

const Privacy = () => {
  const { language } = useI18next(); // Get the current language

  return (
    <Layout>
      <div className="privacy-image" />
      <div className="content-container">
        <div className="max-w-6xl mx-auto text-justify" style={{ color: "black" }}>
          <h1 className="md:text-4xl text-3xl font-bold my-4 md:my-30 py-4 border-b-2" style={{ padding: "60px", backgroundColor: "rgba(128, 0, 0, 2)", fontFamily: "Arial", color: "white", margin: "90px 0 0 0" }}>
            Privacy Policy
          </h1>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 1)", padding: "60px", borderRadius: "5px", margin: "-30px 0 0 0" }}>
            {language === 'en' ? (
              <>
                {/* Privacy policy content in English */}
                <p>
                  <strong>Privacy Policy</strong>
                  <br />
                  This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our services. Your privacy is important to us, and we are committed to protecting your personal data in accordance with applicable laws and regulations.
                  <br />
                  <strong>Information We Collect</strong>
                  <br />
                  We may collect personal information that you voluntarily provide to us when you use our website, sign up for our services, or contact us for support or inquiries. The types of personal information we may collect include name, email address, contact information, and any other information you choose to provide.
                  <br />
                  <strong>How We Use Your Information</strong>
                  <br />
                  We may use the personal information we collect to provide and maintain our services, communicate with you about your account or our services, respond to your inquiries and provide support, improve our services and develop new features, and comply with legal obligations.
                  <br />
                  <strong>Data Security</strong>
                  <br />
                  We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  <br />
                  <strong>Third-Party Services</strong>
                  <br />
                  We may use third-party services, such as analytics tools, that collect, monitor, and analyze information to help us improve our services. These third-party services may have their own privacy policies governing the use of your information.
                  <br />
                  <strong>Your Rights</strong>
                  <br />
                  You have the right to access, update, or delete your personal information, object to the processing of your personal information, and withdraw your consent for the processing of your personal information. If you would like to exercise any of these rights or have any questions about our privacy practices, please contact us using the information provided below.
                  <br />
                  <strong>Changes to This Privacy Policy</strong>
                  <br />
                  We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on our website.
                  <br />
                  <strong>Contact Us</strong>
                  <br />
                  If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp">its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp</a>.
                  <br />
                </p>
              </>
            ) : (
              <>
                {/* Privacy policy content in Japanese */}
                <p>
                  <strong>プライバシーポリシー</strong>
                  <br />
                  このプライバシーポリシーでは、サービスを利用する際に個人情報をどのように収集し、使用し、保護するかを説明します。お客様のプライバシーは私たちにとって重要であり、関連する法律や規制に従って個人データを保護することをお約束します。
                  <br />
                  <strong>収集する情報</strong>
                  <br />
                  ウェブサイトを利用したり、サービスにサインアップしたり、サポートや問い合わせの際に自発的に提供していただいた個人情報を収集する場合があります。収集する個人情報の種類には、名前、メールアドレス、連絡先情報、および提供していただいたその他の情報が含まれる場合があります。
                  <br />
                  <strong>情報の利用方法</strong>
                  <br />
                  収集した個人情報は、サービスの提供と維持、アカウントやサービスに関するお客様とのコミュニケーション、お問い合わせへの対応とサポートの提供、サービスの改善と新機能の開発、法的義務の遵守などに使用することがあります。
                  <br />
                  <strong>データセキュリティ</strong>
                  <br />
                  私たちは、個人情報を未承認のアクセス、使用、または開示から保護するために合理的な注意を払っています。ただし、インターネットを介した送信や電子保存の方法は100%安全ではなく、絶対的なセキュリティを保証することはできません。
                  <br />
                  <strong>第三者サービス</strong>
                  <br />
                  私たちは、サービスの改善を支援するために情報を収集、監視、分析する分析ツールなどの第三者サービスを利用する場合があります。これらの第三者サービスには、情報の使用に関する独自のプライバシーポリシーが適用される場合があります。
                  <br />
                  <strong>お客様の権利</strong>
                  <br />
                  お客様は、個人情報へのアクセス、更新、削除、個人情報の処理に対する異議の申し立て、および個人情報の処理に対する同意の取り消しを行う権利があります。これらの権利を行使したい場合や、プライバシーに関する疑問がある場合は、以下に記載されている情報を使用してお問い合わせください。
                  <br />
                  <strong>このプライバシーポリシーの変更</strong>
                  <br />
                  当社は、このプライバシーポリシーをいつでも更新または変更する権利を留保します。変更がある場合は、更新されたプライバシーポリシーを当社のウェブサイトに掲示することで直ちに効力を発揮します。
                  <br />
                  <strong>お問い合わせ</strong>
                  <br />
                  当社のプライバシーポリシーに関するご質問やご不明な点がございましたら、下記の情報を使用してお問い合わせください。<a href="mailto:its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp">its-katsura-wifi@trans.kuciv.kyoto-u.ac.jp</a>までご連絡ください。
                  <br />
                </p>
              </>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
