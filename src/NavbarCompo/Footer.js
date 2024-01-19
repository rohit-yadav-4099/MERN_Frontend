import React from "react";
import './Footer.css';
const Footer = () => {
    return (
        <>  <div>
            <div className="footer-box">
                <div className="footer-subbox">
                    {/* <div className="footer-innerbox">
                        <h2>FOLLOW US</h2>
                    </div>
                    <div className="footer-innerbox">
                        <h2>
                            CONTACT US
                        </h2>
                    </div> */}
                    <div class="footer-social-handles">
                        <div class="footer_title">FOLLOW US</div>
                        <div class="footer_social_icons_container">
                            <a href="https://www.facebook.com/prepbytes0211/" target="_blank">
                                <img loading="lazy" class="footer_social_link_icons" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPGcgaWQ9ImZhY2Vib29rIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE0OTgiIGRhdGEtbmFtZT0iUGF0aCAyMTQ5OCIgZD0iTTI4LjM0NCwwSDEuNjU0QTEuNjU2LDEuNjU2LDAsMCwwLDAsMS42NTZWMjguMzQ1QTEuNjU2LDEuNjU2LDAsMCwwLDEuNjU2LDMwSDI4LjM0NEExLjY1NiwxLjY1NiwwLDAsMCwzMCwyOC4zNDVoMFYxLjY1NUExLjY1NiwxLjY1NiwwLDAsMCwyOC4zNDQsMFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjNDI2N2IyIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE0OTkiIGRhdGEtbmFtZT0iUGF0aCAyMTQ5OSIgZD0iTTIxNS40NTEsMTAyLjRWOTAuOTc2aDMuODVsLjU3Ny00LjQ3aC00LjQyN1Y4My42NTljMC0xLjI5MS4zNTgtMi4xNzEsMi4yMS0yLjE3MWgyLjM0N1Y3Ny41YTMxLjU0OCwzMS41NDgsMCwwLDAtMy40MzktLjE3NmMtMy40LDAtNS43MzIsMi4wNzctNS43MzIsNS44OTJ2My4yOUgyMDd2NC40N2gzLjgzNlYxMDIuNFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk0LjcyMyAtNzIuMzk3KSIgZmlsbD0iI2ZmZiIvPg0KICA8L2c+DQo8L3N2Zz4NCg==" />
                            </a>
                            <a href="https://www.linkedin.com/company/prepbytes/" target="_blank">
                                <img loading="lazy" class="footer_social_link_icons" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPHBhdGggaWQ9ImxpbmtlZElOIiBkPSJNMjMuNzUsMEg2LjI1QTYuMjUxLDYuMjUxLDAsMCwwLDAsNi4yNXYxNy41QTYuMjUxLDYuMjUxLDAsMCwwLDYuMjUsMzBoMTcuNUE2LjI1LDYuMjUsMCwwLDAsMzAsMjMuNzVWNi4yNUE2LjI1LDYuMjUsMCwwLDAsMjMuNzUsMFpNMTAsMjMuNzVINi4yNVYxMEgxMFpNOC4xMjUsOC40MTVBMi4yMDUsMi4yMDUsMCwxLDEsMTAuMzEzLDYuMjEsMi4yLDIuMiwwLDAsMSw4LjEyNSw4LjQxNVpNMjUsMjMuNzVIMjEuMjVWMTYuNzQ1YzAtNC4yMS01LTMuODkxLTUsMFYyMy43NUgxMi41VjEwaDMuNzV2Mi4yMDZDMTcuOTk1LDguOTc0LDI1LDguNzM1LDI1LDE1LjNaIiBmaWxsPSIjMDA3N2I3Ii8+DQo8L3N2Zz4NCg==" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC0xGnHDrjUM1pDEK2Ka5imA" target="_blank">
                                <img loading="lazy" class="footer_social_link_icons" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPHBhdGggaWQ9InlvdXR1YmUiIGQ9Ik0xMi41LDExLjY2Nmw2LjY2NiwzLjMyN0wxMi41LDE4LjMzNFpNMzAsNi4yNXYxNy41QTYuMjUsNi4yNSwwLDAsMSwyMy43NSwzMEg2LjI1QTYuMjUxLDYuMjUxLDAsMCwxLDAsMjMuNzVWNi4yNUE2LjI1MSw2LjI1MSwwLDAsMSw2LjI1LDBoMTcuNUE2LjI1LDYuMjUsMCwwLDEsMzAsNi4yNVpNMjUsMTVjLS4wMjUtNS4xNTQtLjQtNy4xMjUtMy42NTQtNy4zNDYtMy0uMjA1LTkuNjkyLS4yLTEyLjY5MSwwQzUuNDA3LDcuODc1LDUuMDI1LDkuODM3LDUsMTVjLjAyNSw1LjE1NC40LDcuMTI1LDMuNjU0LDcuMzQ2LDMsLjIsOS42ODguMiwxMi42OTEsMEMyNC41OTIsMjIuMTI1LDI0Ljk3NSwyMC4xNjIsMjUsMTVaIiBmaWxsPSJyZWQiLz4NCjwvc3ZnPg0K" />
                            </a>
                        </div>
                        <div class="footer_contact_details">
                            <div class="footer_title">CONTACT US</div>
                            <div>
                                <div>
                                    <span>
                                        <img loading="lazy" class="footer_social_link_icons" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNi45OTgiIHZpZXdCb3g9IjAgMCAyNyAyNi45OTgiPg0KICA8ZyBpZD0iY2FsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDMpIj4NCiAgICA8ZyBpZD0iXzAwMy0tLUNhbGwiIGRhdGEtbmFtZT0iMDAzLS0tQ2FsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAzKSI+DQogICAgICA8cGF0aCBpZD0iU2hhcGUiIGQ9Ik0xMi4xNzYsMTUuODQ5YTEwLjksMTAuOSwwLDAsMS0zLjI5LTYuMTg2LjkyNS45MjUsMCwwLDEsLjI2Ni0uNzc0TDExLjIzOCw2LjhhLjkzMS45MzEsMCwwLDAsLjEzMS0xLjE1Mkw4LjA0OS41QS45MzEuOTMxLDAsMCwwLDYuODQzLjE1OGwtNS4zMywyLjUxQS45MjYuOTI2LDAsMCwwLDEsMy41OTNjLjI3OSwyLjY1MywxLjQzNiw5LjE3NSw3Ljg0NSwxNS41ODRzMTIuOTMsNy41NjYsMTUuNTg0LDcuODQ1YS45MjYuOTI2LDAsMCwwLC45MjUtLjUxMmwyLjUxLTUuMzNhLjkzMS45MzEsMCwwLDAtLjMzNy0xLjJsLTUuMTU1LTMuMzE5YS45MzEuOTMxLDAsMCwwLTEuMTUyLjEzbC0yLjA4NCwyLjA4NWEuOTI1LjkyNSwwLDAsMS0uNzc0LjI2NiwxMC45LDEwLjksMCwwLDEtNi4xODYtMy4yOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjk5NyAtMC4wMjkpIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgICA8cGF0aCBpZD0iU2hhcGUtMiIgZGF0YS1uYW1lPSJTaGFwZSIgZD0iTTM3LjgyNywyMC44NjJhMS4wMzQsMS4wMzQsMCwwLDEtMS4wMzQtMS4wMzQsNy43NjcsNy43NjcsMCwwLDAtNy43NTgtNy43NTgsMS4wMzQsMS4wMzQsMCwwLDEsMC0yLjA2OSw5LjgzOCw5LjgzOCwwLDAsMSw5LjgyNyw5LjgyN0ExLjAzNCwxLjAzNCwwLDAsMSwzNy44MjcsMjAuODYyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2LjIyMyAtNS42MzkpIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgICA8cGF0aCBpZD0iU2hhcGUtMyIgZGF0YS1uYW1lPSJTaGFwZSIgZD0iTTQzLDE2LjAzNEExLjAzNCwxLjAzNCwwLDAsMSw0MS45NjUsMTVhMTIuOTQ1LDEyLjk0NSwwLDAsMC0xMi45My0xMi45MywxLjAzNCwxLjAzNCwwLDAsMSwwLTIuMDY5LDE1LjAxNiwxNS4wMTYsMCwwLDEsMTUsMTVBMS4wMzQsMS4wMzQsMCwwLDEsNDMsMTYuMDM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3LjAzNCkiIGZpbGw9IiM0MjQyNDIiLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K" />
                                    </span>
                                    <span class="contact_style">
                                        <a href="tel:">
                                        </a>
                                    </span>
                                </div>
                                <div class="alignContactEmail">
                                    <span>
                                        <img loading="lazy" class="footer_social_link_icons" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyMy42NjUiIHZpZXdCb3g9IjAgMCAyNyAyMy42NjUiPg0KICA8ZyBpZD0ibWVzc2FnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzEuNjIyKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE1MDMiIGRhdGEtbmFtZT0iUGF0aCAyMTUwMyIgZD0iTTE4LjY3LDMxLjYyMkgzLjA1M0EzLjA1NywzLjA1NywwLDAsMCwwLDM0LjY3NVY0OC4zNkEuNzkyLjc5MiwwLDAsMCwxLjI1LDQ5TDUuNiw0NS45YTIuMTI5LDIuMTI5LDAsMCwxLDEuMjQyLS40aDkuNTY1YTMuMDU3LDMuMDU3LDAsMCwwLDMuMDUzLTMuMDUzVjMyLjQxM0EuNzkxLjc5MSwwLDAsMCwxOC42NywzMS42MjJaTTE0LjgyNyw0MS4ySDUuNjg4YS43OTEuNzkxLDAsMSwxLDAtMS41ODJoOS4xMzlhLjc5MS43OTEsMCwxLDEsMCwxLjU4MlptMC0zLjY5MUg1LjY4OGEuNzkxLjc5MSwwLDEsMSwwLTEuNTgyaDkuMTM5YS43OTEuNzkxLDAsMSwxLDAsMS41ODJaIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE1MDQiIGRhdGEtbmFtZT0iUGF0aCAyMTUwNCIgZD0iTTE2Mi40MzEsMTUxLjAxNlYxNjQuN2EuNzkyLjc5MiwwLDAsMS0xLjI1LjY0NGwtNC4zNDktMy4xYTIuMTI5LDIuMTI5LDAsMCwwLTEuMjQyLS40aC05LjU2NWEzLjA1NywzLjA1NywwLDAsMS0zLjA1My0zLjA1NHYtMS41aDguODY4YTQuNjQsNC42NCwwLDAsMCw0LjYzNS00LjYzNXYtNC42OTNoMi45QTMuMDU3LDMuMDU3LDAsMCwxLDE2Mi40MzEsMTUxLjAxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzUuNDMxIC0xMTAuMjA1KSIgZmlsbD0iIzQyNDI0MiIvPg0KICA8L2c+DQo8L3N2Zz4NCg==" />
                                    </span>
                                    <span class="contact_style email">
                                        <a  href="mailto:support@prepbytes.com">support@prepbytes.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="footer-subbox">
                    <div className="footer-innerbox">
                        <div class="footer_title">LATEST ARTICLES
                            <ul type="none" class="latestArticlesItems top-margin">
                                <a href="https://www.prepbytes.com/blog/html/html-blink-tag/" class="latestArticlesItems" target="_blank">
                                    <li>HTML Blink Tag</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/html/how-to-create-time-table-schedule-using-html/" class="latestArticlesItems" target="_blank">
                                    <li>How To Create Time Table Schedule using HTML</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/linux/find-command-in-linux-with-examples/" class="latestArticlesItems" target="_blank">
                                    <li>find Command in Linux with Examples</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/linux/awk-command-in-unix-linux-with-examples/" class="latestArticlesItems" target="_blank">
                                    <li>awk Command in unix/linux with Examples</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/linux/grep-command-in-unix-linux/" class="latestArticlesItems" target="_blank">
                                    <li>grep Command in unix linux</li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-innerbox">
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
                                <a href="https://www.prepbytes.com/blog/?p=18406" class="latestArticlesItems" target="_blank">
                                    <li>echo command in linux with examples</li>
                                </a>
                                <a href="https://www.prepbytes.com/blog/?p=18412" class="latestArticlesItems" target="_blank">
                                    <li>sort command linuxunix examples</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-subbox">
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
            </div>
        </div>

        </>
    )
}

export default Footer;