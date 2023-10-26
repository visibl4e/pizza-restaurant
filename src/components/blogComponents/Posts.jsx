import { Link } from "react-router-dom";
export function Posts() {
  return (
    <>
      <div className="postContainer">
        <article className="post" id="post">
          <header>
            <h3 className="entryTtile">
              <Link to="/">Non-Meat Pizza with Shrimps and Asparagus!</Link>
            </h3>
            <div className="entryMeta">
              <span>
                By <Link to="/">Admin</Link>
              </span>
              <span>
                In <Link to="/">Category</Link>
              </span>
              <span>
                Posted
                <time datetime="2019-04-24T12:47:38+00:00">April 24, 2019</time>
              </span>
            </div>
          </header>
          <figure>
            <Link to="/">
              <img src="https://ld-wp.template-help.com/wordpress_prod-23791/v1/wp-content/uploads/2019/04/image3-1170x520.jpg" />
            </Link>
          </figure>
          <div className="entryContent">
            <p>
              How necessary is it for you to be food compatible with your other?
              Would you break up (okay, too extreme, let’s say fight) with
              someone over pizza toppings? Would you truly be compatible with
              someone if they were an avid meat eater and you were a strict
              vegan? Luckily, Mike and I agree on most food things (aside from
              tofu: I love it, he pretty much doesn’t love it), but I think that
              I would be intrigued if he didn’t like eating the same things as
              me. We actually had a long discussion about it with a friend and
              he and Mike both agreed that they’d find it supremely difficult to
              be with someone who didn’t share their basic taste in food.
            </p>
            <img src="https://www.daisybeet.com/wp-content/uploads/2022/02/Asparagus-Pizza-with-Pesto-2661-1024x1536.jpg" />

            <p>
              I guess it’s possibly true, because a little while ago one of my
              girlfriends started dating someone new and after her new man’s
              true food colors shone through, it was kind of sort of over. It
              went like this: after a couple of months of dates out, they
              planned a romantic dinner in, complete with a movie and delivery
              pizza. The dude ordered a shrimp pizza, which apparently was a
              no-no for my girlfriend. I didn’t really get it though — what’s
              wrong with shrimp on pizza?
            </p>
            <img src="https://www.marchespublics-mtl.com/wp-content/uploads/MPM_Recette_Pizza_Asperges_Crevettes.jpg" />
            <p>
              Apparently there’s something very wrong with it. I guess people
              have food deal breakers because a couple of weeks after the shrimp
              pizza incident, my girlfriend ended it. She claims it had nothing
              to do with the shrimp pizza incident, but it seemed too
              coincidental to me. I actually liked the guy and thought he was a
              good fit for her – it was really too bad. And there’s nothing
              wrong with shrimp on pizza! To prove it to her, I came up with an
              awesome shrimp pizza. It has a mix of spring flavours: crisp
              asparagus, lemon zest and flat leaf parsley. It’s totally
              delicious and would bring anyone over to the shrimp pizza side!
            </p>
            <div className="ingredients">
              <h3 className="entryHeader">INGREDIENTS</h3>
              <ul>
                <li>oil</li>
                <li>2 cloves garlic, sliced</li>
                <li>
                  12 medium shrimp, peeled and deveined, tails left on if
                  preferred
                </li>
                <li>salt and freshly ground pepper</li>
                <li>juice of 1/2 lemon</li>
                <li>1 ball no-knead pizza dough</li>
                <li>1/3-1/2 cup shredded mozzarella cheese</li>
                <li>
                  3-4 stalks asparagus, ends trimmed and cut into 1 inch pieces
                </li>
                <li>crushed red pepper, to taste</li>
                <li>zest of 1 lemon</li>
                <li>1 tablespoon chopped flat leaf parsley</li>
                <li>1 tablespoon parmesan</li>
              </ul>
            </div>
            <div className="recipe"></div>
          </div>
        </article>
      </div>
    </>
  );
}
