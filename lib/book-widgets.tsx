/* eslint @next/next/no-img-element: 0 */
import React from "react";
import { flex } from "./utils";
import Script from "next/script";

export const ReadBooks = () => {
  return (
    <span suppressHydrationWarning={true}>
      <style type="text/css" media="screen">
        {`.gr_custom_container_1625235322 {
    /* customize your Goodreads widget container here*/
    border: 1px solid gray;
    border-radius:10px;
    padding: 10px 5px 10px 5px;
    background-color: transparent;
    color: #FFFFFF;
    width: 350px;
  }
  .gr_custom_header_1625235322 {
    /* customize your Goodreads header here*/
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    font-size: 150%
  }
  .gr_custom_each_container_1625235322 {
    /* customize each individual book container here */
    width: 100%;
    clear: both;
    margin-bottom: 10px;
    overflow: auto;
    padding-bottom: 4px;
    border-bottom: 1px solid #aaa;
  }
  .gr_custom_book_container_1625235322 {
    /* customize your book covers here */
    overflow: hidden;
    height: 60px;
      float: left;
      margin-right: 4px;
      width: 39px;
			display:flex;
			justify-content:center;align-items:center;
  }
  .gr_custom_author_1625235322 {
    /* customize your author names here */
    font-size: 10px;
  }
  .gr_custom_tags_1625235322 {
    /* customize your tags here */
    font-size: 10px;
    color: gray;
  }
  .gr_custom_rating_1625235322 {
    /* customize your rating stars here */
    float: right;
  }
	.gr_custom_title_1625235322 a {
		font-size: 0.9em;
	}
	`}
      </style>

      <div id="gr_custom_widget_1625235322" suppressHydrationWarning={true}>
        <div className="gr_custom_container_1625235322">
          <h2 className="gr_custom_header_1625235322">
            <a
              rel="nofollow"
              href="https://www.goodreads.com/review/list/137184086-denis?shelf=read&amp;utm_medium=api&amp;utm_source=custom_widget"
            >
              What I have read
            </a>
          </h2>
          <div className="gr_custom_each_container_1625235322">
            <div className="gr_custom_book_container_1625235322">
              <a
                title="The Queen's Gambit"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090855613?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="The Queen's Gambit"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388265750l/62022._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625235322">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090855613?utm_medium=api&amp;utm_source=custom_widget"
              >
                The Queen&apos;s Gambit
              </a>
            </div>
            <div className="gr_custom_author_1625235322">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/4448408.Walter_Tevis"
              >
                Walter Tevis
              </a>
            </div>
          </div>
          <div className="gr_custom_each_container_1625235322">
            <div className="gr_custom_book_container_1625235322">
              <a
                title="Little Brother (Little Brother, #1)"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090851845?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="Little Brother"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349673129l/954674._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625235322">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090851845?utm_medium=api&amp;utm_source=custom_widget"
              >
                Little Brother
              </a>
            </div>
            <div className="gr_custom_author_1625235322">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/12581.Cory_Doctorow"
              >
                Cory Doctorow
              </a>
            </div>
          </div>
          <div className="gr_custom_each_container_1625235322">
            <div className="gr_custom_book_container_1625235322">
              <a
                title="Goliath"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090856971?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="Goliath"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1316635957l/105739._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625235322">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090856971?utm_medium=api&amp;utm_source=custom_widget"
              >
                Goliath
              </a>
            </div>
            <div className="gr_custom_author_1625235322">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/61238.Steve_Alten"
              >
                Steve Alten
              </a>
            </div>
          </div>
          <div className="gr_custom_each_container_1625235322">
            <div className="gr_custom_book_container_1625235322">
              <a
                title="Eragon (The Inheritance Cycle, #1)"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090848528?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="Eragon"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1366212852l/113436._SX50_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625235322">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090848528?utm_medium=api&amp;utm_source=custom_widget"
              >
                Eragon
              </a>
            </div>
            <div className="gr_custom_author_1625235322">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/8349.Christopher_Paolini"
              >
                Christopher Paolini
              </a>
            </div>
          </div>
          <div className="gr_custom_each_container_1625235322">
            <div className="gr_custom_book_container_1625235322">
              <a
                title="The Last Thing I Remember (The Homelanders, #1)"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090855191?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="The Last Thing I Remember"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442036225l/6002005._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625235322">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090855191?utm_medium=api&amp;utm_source=custom_widget"
              >
                The Last Thing I Remember
              </a>
            </div>
            <div className="gr_custom_author_1625235322">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/271685.Andrew_Klavan"
              >
                Andrew Klavan
              </a>
            </div>
          </div>
          <br style={{ clear: "both" }} />
          <div className={flex("")}>
            <a rel="nofollow" href="https://www.goodreads.com/">
              <img
                alt="goodreads.com"
                src="https://s.gr-assets.com/images/widget/widget_logo.gif"
              />
            </a>
          </div>
          <noscript>
            Share{" "}
            <a rel="nofollow" href="https://www.goodreads.com/">
              book reviews
            </a>{" "}
            and ratings with Denis, and even join a{" "}
            <a rel="nofollow" href="https://www.goodreads.com/group">
              book club
            </a>{" "}
            on Goodreads.
          </noscript>
        </div>
      </div>
      <Script
        src="https://www.goodreads.com/review/custom_widget/137184086.What%20I%20have%20read?cover_position=left&cover_size=small&num_books=5&order=d&shelf=read&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=rating&widget_bg_color=FFFFFF&widget_bg_transparent=true&widget_border_width=1&widget_id=1625235322&widget_text_color=FFFFFF&widget_title_size=large&widget_width=medium"
        type="text/javascript"
        charSet="utf-8"
        async={true}
      ></Script>
    </span>
  );
};

export const CurrentlyReading = () => {
  return (
    <span suppressHydrationWarning={true}>
      <style type="text/css" media="screen">
        {`.gr_custom_container_1625235374 {
    /* customize your Goodreads widget container here*/
    border: 1px solid gray;
    border-radius:10px;
    padding: 10px 5px 10px 5px;
    background-color: transparent;
    color: #FFFFFF;
    width: 350px;
  }
  .gr_custom_header_1625235374 {
    /* customize your Goodreads header here*/
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    font-size: 150%
  }
  .gr_custom_each_container_1625235374 {
    /* customize each individual book container here */
    width: 100%;
    clear: both;
    margin-bottom: 10px;
    overflow: auto;
    padding-bottom: 4px;
    border-bottom: 1px solid #aaa;
  }
  .gr_custom_book_container_1625235374 {
    /* customize your book covers here */
    overflow: hidden;
    height: 60px;
      float: left;
      margin-right: 4px;
      width: 39px;
			display:flex;
			justify-content:center;align-items:center;
  }
  .gr_custom_author_1625235374 {
    /* customize your author names here */
    font-size: 10px;
  }
  .gr_custom_tags_1625235374 {
    /* customize your tags here */
    font-size: 10px;
    color: gray;
  }
  .gr_custom_rating_1625235374 {
    /* customize your rating stars here */
    float: right;
  }
	.gr_custom_title_1625235374 a {
		font-size: 0.9em;
	}
	`}
      </style>

      <div id="gr_custom_widget_1625235374" suppressHydrationWarning={true}>
        <div className="gr_custom_container_1625235374">
          <h2 className="gr_custom_header_1625235374">
            <a
              rel="nofollow"
              href="https://www.goodreads.com/review/list/137184086-denis?shelf=currently-reading&amp;utm_medium=api&amp;utm_source=custom_widget"
            >
              Currently Reading
            </a>
          </h2>
          <div className="gr_custom_each_container_1625235374">
            <div className="gr_custom_book_container_1625235374">
              <a
                title="1984"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090866543?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="1984"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX50_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625235374">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090866543?utm_medium=api&amp;utm_source=custom_widget"
              >
                1984
              </a>
            </div>
            <div className="gr_custom_author_1625235374">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/3706.George_Orwell"
              >
                George Orwell
              </a>
            </div>
          </div>
          <br style={{ clear: "both" }} />
          <div className={flex("")}>
            <a rel="nofollow" href="https://www.goodreads.com/">
              <img
                alt="goodreads.com"
                src="https://s.gr-assets.com/images/widget/widget_logo.gif"
              />
            </a>
          </div>
          <noscript>
            Share{" "}
            <a rel="nofollow" href="https://www.goodreads.com/">
              book reviews
            </a>{" "}
            and ratings with Denis, and even join a{" "}
            <a rel="nofollow" href="https://www.goodreads.com/group">
              book club
            </a>{" "}
            on Goodreads.
          </noscript>
        </div>
      </div>
      <Script
        src="https://www.goodreads.com/review/custom_widget/137184086.Currently%20Reading?cover_position=left&cover_size=small&num_books=5&order=d&shelf=currently-reading&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=rating&widget_bg_color=FFFFFF&widget_bg_transparent=true&widget_border_width=1&widget_id=1625235374&widget_text_color=FFFFFF&widget_title_size=large&widget_width=medium"
        type="text/javascript"
        charSet="utf-8"
        async={true}
      ></Script>
    </span>
  );
};

export const WantToRead = () => {
  return (
    <span suppressHydrationWarning={true}>
      <style type="text/css" media="screen">
        {`.gr_custom_container_1625238189 {
    /* customize your Goodreads widget container here*/
    border: 1px solid gray;
    border-radius:10px;
    padding: 10px 5px 10px 5px;
    background-color: transparent;
    color: #FFFFFF;
    width: 350px;
  }
  .gr_custom_header_1625238189 {
    /* customize your Goodreads header here*/
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    font-size: 150%
  }
  .gr_custom_each_container_1625238189 {
    /* customize each individual book container here */
    width: 100%;
    clear: both;
    margin-bottom: 10px;
    overflow: auto;
    padding-bottom: 4px;
    border-bottom: 1px solid #aaa;
  }
  .gr_custom_book_container_1625238189 {
    /* customize your book covers here */
    overflow: hidden;
    height: 60px;
      float: left;
      margin-right: 4px;
      width: 39px;
			display:flex;
			justify-content:center;align-items:center;
  }
  .gr_custom_author_1625238189 {
    /* customize your author names here */
    font-size: 10px;
  }
  .gr_custom_tags_1625238189 {
    /* customize your tags here */
    font-size: 10px;
    color: gray;
  }
  .gr_custom_rating_1625238189 {
    /* customize your rating stars here */
    float: right;
  }
	.gr_custom_title_1625238189 a {
		font-size: 0.9em;
	}
	`}
      </style>

      <div id="gr_custom_widget_1625238189" suppressHydrationWarning={true}>
        <div className="gr_custom_container_1625238189">
          <h2 className="gr_custom_header_1625238189">
            <a
              rel="nofollow"
              href="https://www.goodreads.com/review/list/137184086-denis?shelf=to-read&amp;utm_medium=api&amp;utm_source=custom_widget"
            >
              What I want to read
            </a>
          </h2>
          <div className="gr_custom_each_container_1625238189">
            <div className="gr_custom_book_container_1625238189">
              <a
                title="Erebos 2 (Erebos, #2)"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090850868?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="Erebos 2"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557583453l/45718313._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625238189">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090850868?utm_medium=api&amp;utm_source=custom_widget"
              >
                Erebos 2
              </a>
            </div>
            <div className="gr_custom_author_1625238189">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/1050839.Ursula_Poznanski"
              >
                Ursula Poznanski
              </a>
            </div>
          </div>
          <div className="gr_custom_each_container_1625238189">
            <div className="gr_custom_book_container_1625238189">
              <a
                title="Homeland (Little Brother, #2)"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090852502?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="Homeland"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340259004l/12917338._SX50_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625238189">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090852502?utm_medium=api&amp;utm_source=custom_widget"
              >
                Homeland
              </a>
            </div>
            <div className="gr_custom_author_1625238189">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/12581.Cory_Doctorow"
              >
                Cory Doctorow
              </a>
            </div>
          </div>
          <div className="gr_custom_each_container_1625238189">
            <div className="gr_custom_book_container_1625238189">
              <a
                title="The Truth of the Matter (The Homelanders, #3)"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090855254?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="The Truth of the Matter"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1439712407l/7823974._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625238189">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090855254?utm_medium=api&amp;utm_source=custom_widget"
              >
                The Truth of the Matter
              </a>
            </div>
            <div className="gr_custom_author_1625238189">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/271685.Andrew_Klavan"
              >
                Andrew Klavan
              </a>
            </div>
          </div>
          <div className="gr_custom_each_container_1625238189">
            <div className="gr_custom_book_container_1625238189">
              <a
                title="The Bullet Journal Method: Track the Past, Order the Present, Design the Future"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090866757?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="The Bullet Journal Method: Track the Past, Order the Present, Design the Future"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1528909036l/39071691._SX50_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625238189">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090866757?utm_medium=api&amp;utm_source=custom_widget"
              >
                The Bullet Journal Method: Track the Past, Order the Present,
                Design the Future
              </a>
            </div>
            <div className="gr_custom_author_1625238189">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/17732950.Ryder_Carroll"
              >
                Ryder Carroll
              </a>
            </div>
          </div>
          <div className="gr_custom_each_container_1625238189">
            <div className="gr_custom_book_container_1625238189">
              <a
                title="Mortal Engines (The Hungry City Chronicles, #1)"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090867345?utm_medium=api&amp;utm_source=custom_widget"
              >
                <img
                  alt="Mortal Engines"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1352173057l/287861._SY75_.jpg"
                />
              </a>
            </div>
            <div className="gr_custom_title_1625238189">
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/4090867345?utm_medium=api&amp;utm_source=custom_widget"
              >
                Mortal Engines
              </a>
            </div>
            <div className="gr_custom_author_1625238189">
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/27379.Philip_Reeve"
              >
                Philip Reeve
              </a>
            </div>
          </div>
          <br style={{ clear: "both" }} />
          <div className={flex("")}>
            <a rel="nofollow" href="https://www.goodreads.com/">
              <img
                alt="goodreads.com"
                src="https://s.gr-assets.com/images/widget/widget_logo.gif"
              />
            </a>
          </div>
          <noscript>
            Share{" "}
            <a rel="nofollow" href="https://www.goodreads.com/">
              book reviews
            </a>{" "}
            and ratings with Denis, and even join a{" "}
            <a rel="nofollow" href="https://www.goodreads.com/group">
              book club
            </a>{" "}
            on Goodreads.
          </noscript>
        </div>
      </div>
      <Script
        src="https://www.goodreads.com/review/custom_widget/137184086.What%20I%20want%20to%20read?cover_position=left&cover_size=small&num_books=5&order=a&shelf=to-read&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=true&widget_border_width=1&widget_id=1625238189&widget_text_color=FFFFFF&widget_title_size=large&widget_width=medium"
        type="text/javascript"
        charSet="utf-8"
        async={true}
      ></Script>
    </span>
  );
};
