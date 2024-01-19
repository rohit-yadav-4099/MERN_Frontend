import React from "react";
import './Footer2.css';

const FooterTwo = () => {
    return (
        <>
            <div class="footer_box">
                <div class="footer_flex_container">
                    <div class="footer-social-handles">
                        <div class="footer_title">FOLLOW US</div>
                        <div class="footer_social_icons_container">
                            <a href="https://www.facebook.com/prepbytes0211/" target="_blank">
                                <img loading="lazy" class="footer_social_link_icons" src="\image\facebookicon.svg" />
                            </a>
                            <a href="https://www.instagram.com/prepbytes/" target="_blank">
                            <img loading="lazy" class="footer_social_link_icons" src="\image\ig-instagram-icon.svg" alt="instagram"/>
                                </a> 
                            <a href="https://www.linkedin.com/company/prepbytes/" target="_blank">
                                <img loading="lazy" class="footer_social_link_icons" src="\image\linkedinicon.svg" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC0xGnHDrjUM1pDEK2Ka5imA" target="_blank">
                                <img loading="lazy" class="footer_social_link_icons" src="\image\youtubeicon.svg" />
                            </a>
                        </div>
                        <div class="footer_contact_details">
                            <div class="footer_title">CONTACT US</div>
                            <div>
                                <div>
                                    <span>
                                        <img loading="lazy" class="footer_social_link_icons" src="\image\phoneicon.svg" />
                                    </span>
                                    <span className="contact_style">
                                        <a href="tel:+91-7969 0021 11">+91-7969 0021 11</a>
                                    </span>
                                </div>
                                <div class="alignContactEmail">
                                    <span>
                                        <img loading="lazy" class="footer_social_link_icons" src="\image\msgicon.svg" />
                                    </span>
                                    <span className="contact_style email">
                                        <a href="mailto:support@prepbytes.com">support@prepbytes.com</a>
                                    </span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_articles">
                        <div class="footer_title">LATEST ARTICLES
                            <ul type="none" class="latestArticlesItems top-margin">
                                <a href="https://www.prepbytes.com/blog/html/html-br-tag/" class="latestArticlesItems" target="_blank">
                                    <li>HTML br Tag</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/html/html-frame-tag/" class="latestArticlesItems" target="_blank">
                                    <li>HTML frame Tag</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/html/html-marquee-tag/" class="latestArticlesItems" target="_blank">
                                    <li>HTML Marquee Tag</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/html/html-span-tag/" class="latestArticlesItems" target="_blank">
                                    <li>HTML span tag</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/html/html-blink-tag/" class="latestArticlesItems" target="_blank">
                                    <li>HTML Blink Tag</li>
                                </a>
                            </ul>
                        </div>
                        <div class="footer_title">POPULAR ARTICLES
                            <ul type="none" class="latestArticlesItems top-margin">
                                <a href="https://www.prepbytes.com/blog/?p=18466" class="latestArticlesItems" target="_blank">
                                    <li>Touch Command in Linux with Examples</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/?p=18430" class="latestArticlesItems" target="_blank">
                                    <li>screen Command in Linux with Examples</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/?p=18434" class="latestArticlesItems" target="_blank">
                                    <li>nohup Command in Linux with Examples</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/?p=18412" class="latestArticlesItems" target="_blank">
                                    <li>sort command linuxunix examples</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/?p=18410" class="latestArticlesItems" target="_blank">
                                    <li>wc command linux examples</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div class="footer_margin">
                        <div class="footer_title quick-link-title">QUICK LINKS</div>
                        <a class="footer_links" href="/interview-questions">Interview Notes</a>
                        <a class="footer_links" href="/mock-tests">Mock Tests</a>
                        <a class="footer_links" href="/placement-preparation-program">Placement Programs</a>
                        <a class="footer_links" href="/prepbytes-courses">Coding Courses</a>
                        <a class="footer_links" href="/about">About Us</a>
                        <a class="footer_links" href="/blog">Blog</a>
                    </div>
                </div>
                <hr class="footer_line"></hr>
                <div class="footer_policy_rights">
                    <div>Copyright©2024</div>
                    <div class="Policy">
                        <a className="PolicyName" href="/privacypolicy">Privacy Policy</a>
                        <a className="PolicyName" href="/refundpolicy">Refund Policy</a>
                        <a className="PolicyName" href="/terms-and-conditions">Terms of Use</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FooterTwo;