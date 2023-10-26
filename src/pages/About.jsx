import { BiSolidQuoteRight } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";
export function About() {
  return (
    <>
      <div className="containerAbove">
        <section className="history">
          <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image22.jpg" />
          <div className="text">
            <h3>Since 1982</h3>
            <p>
              With both of our founders, Ricardo & Alberto being the natives of
              the Italian city of Naples, their pizza restaurant is a true
              melting pot of Italian and American culinary traditions.
            </p>
            <p>
              Boasting a huge range of 99+ pizzas, dozens of pasta and 88
              Italian wines, we are the prime destination for all of your
              cravings for a true, delicious Italian dinner!
            </p>
          </div>
        </section>
        <section className="certificate">
          <div className="cardRow">
            <div className="card">
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/images28.png" />
              <p>Certificate of Excellence</p>
              <span>2015</span>
            </div>
          </div>
          <div className="cardRow">
            <div className="card">
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/images25.png" />
              <p>Certificate of Excellence</p>
              <span>2022</span>
            </div>
          </div>
          <div className="cardRow">
            <div className="card">
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/images26.png" />
              <p>Certificate of Excellence</p>
              <span>2016</span>
            </div>
          </div>
          <div className="cardRow">
            <div className="card">
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/images27.png" />
              <p>Certificate of Excellence</p>
              <span>2015</span>
            </div>
          </div>
        </section>
        <section className="team">
          <div className="containerQuote">
            <div className="quote">
              <span>
                <BiSolidQuoteRight />
              </span>
              <p>
                Coming to us for a lunch or a dinner should feel just as
                comfortable, as having one at home. The simplicity, freshness
                and reasonable pricing for our dishes just underline how
                home-like our restaurant is…
              </p>
            </div>
          </div>
          <div className="containerMembers">
            <div className="image">
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image14.jpg" />
            </div>
            <div className="members">
              <h3>Meet our team</h3>
              <p>
                Mia Ittalonni is a family owned restaurant, which treasures the
                atmosphere just as much as the dining menu.
              </p>
              <p>
                We assembled a strong team of professionals, all of whom aspire
                to constantly excel and step it up!
              </p>
            </div>
            <div className="member">
              <div className="container">
                <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image30.jpg" />
                <div className="cardMember">
                  <p className="name">Umberto Vincenzo</p>
                  <p className="post">Chef</p>
                  <p className="description">
                    Umberto is a renowned cook, who’s been working at various
                    Italian restaurants since the ’80s… His immense experience
                    and his talent in mixing miscellaneous ingredients and
                    making brand new, delicious dishes are impressive. He’s
                    presiding over our kitchen for 15 years by now and he always
                    gets a high praise from our clients…
                  </p>
                  <div className="linkMember">
                    <Link to="https://twitter.com/" target="_blank">
                      <span>
                        <BiLogoTwitter />
                      </span>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                      <span>
                        <BiLogoInstagram />
                      </span>
                    </Link>
                    <Link to="https://www.facebook.com" target="_blank">
                      <span>
                        <BiLogoFacebook />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="container">
                <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image29.jpg" />
                <div className="cardMember">
                  <p className="name">Gerald Mackler</p>
                  <p className="post">Chef's assistant</p>
                  <p className="description">
                    In an ironic twist of fate, an Aberdeen native Gerald
                    Mackler has been working at Italian restaurants even in his
                    home country of Scotland. We’re delighted, that as he moved
                    with his family to Boston, MA, he chose to join our big
                    friendly team! Gerald specializes in overseeing and cooking
                    the salads and dishes with seafood.
                  </p>
                  <div className="linkMember">
                    <Link to="https://twitter.com/" target="_blank">
                      <span>
                        <BiLogoTwitter />
                      </span>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                      <span>
                        <BiLogoInstagram />
                      </span>
                    </Link>
                    <Link to="https://www.facebook.com" target="_blank">
                      <span>
                        <BiLogoFacebook />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="container">
                <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image31.jpg" />
                <div className="cardMember">
                  <p className="name">Mary Walnut</p>
                  <p className="post">Desserts Chef</p>
                  <p className="description">
                    Desserts are just something that goes very natural for her…
                    Since her early childhood, Mary has been inventing new sweet
                    recipes for her family. Now, he is the Desserts Chef at our
                    place and she enjoys that very much! Regardless of whether
                    Mary adds nuts, spices or fruits to the desserts she makes,
                    they’re always a guilty pleasure to enjoy, but such a tasty
                    one!
                  </p>
                  <div className="linkMember">
                    <Link to="https://twitter.com/" target="_blank">
                      <span>
                        <BiLogoTwitter />
                      </span>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                      <span>
                        <BiLogoInstagram />
                      </span>
                    </Link>
                    <Link to="https://www.facebook.com" target="_blank">
                      <span>
                        <BiLogoFacebook />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
