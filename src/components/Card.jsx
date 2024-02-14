import React from "react";
import CardItem from "./CardItem.jsx";
import "./Card.css";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
      <CardItem
        title="Lifetime Updates"
        content="The world is constantly evolving, so is your business. Your website should be no different. Enjoy free updates to your website to meet the changing needs of search engines and customers."
        icon="update"
        refType="ref1"
        inViewType="inView1"
        baseClass="card1-section"
      />
      <CardItem
        title="On-page SEO"
        content="Let customers find you organically. Our team will optimize your website's performance and content so you can rank highly on search engines."
        icon="query_stats"
        refType="ref2"
        inViewType="inView2"
        baseClass="card2-section"
      />
      <CardItem
        title="24/7 Support"
        content="Have you ever contacted a support system and got left hanging? Not here. Contact us directly, day or night."
        icon="call"
        refType="ref3"
        inViewType="inView3"
        baseClass="card3-section"
      />
      <CardItem
        title="Mobile-First"
        content="Designing websites for mobile devices is our top priority, followed by ensuring usability across all platforms."
        icon="phone_iphone"
        refType="ref4"
        inViewType="inView4"
        baseClass="card4-section"
      />
    </div>
  );
};

export default Card;
