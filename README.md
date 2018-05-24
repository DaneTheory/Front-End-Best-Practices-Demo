# Front-End Best Practices

## How To Run
<ul>
  <li>
    Download or clone this repo
  </li>
  <li>
    <code>cd</code> into the downloaded directory
  </li>
  <li>
    run <code>npm i</code>
  </li>
  <li>
    Allow installation finish
  </li>
  <li>
    run <code>npm start</code>
  </li>
  <li>
    Open your web browser and navigate to <code>http://localhost:8080</code>
  </li>
</ul>

## Challenge
#### Blue Apron Challenge
<p>
  Please use CSS to make the elements located in the div with id=text to like the image below:
</p>
<div class="example">
  <img alt="Lobster Dog solution" src="./client/static/img/example.jpg"/>
</div>
<p>
The html structure is done for you already. If you would like to add additional DOM elements, you can, but know that the image below was built using exactly the DOM structure that I have provided.
</p>
<p>
What you don't see from the image, is that the elements are responsive relative to its containing wrapper. Your implementation needs to be responsive as well so that the 5 images stay inline and shrink and grow as a unit.
</p>
<p>
The images need to be inline, and each be 1/5th of the wrapper. The inner border is 80% of its image size.
</p>

## NOTES
<ul>
  <li>
    Original challenge instructions have been included at <code>http://localhost:8080/</code>
  </li>
  <li>
    I created 5 different versions that provide a solution to this challenge.
      <ul>
        <li>
        VERSION 1: A CSS Friendly Approach. No Manipulation To The Orignal HTML Structure.
        </li>
        <li>
        VERSION 2: Worried About Flexbox Support? Here's An Old School CSS Approach.
        </li>
        <li>
        VERSION 3: T-Cells With LI Styles Feels Dirty. Changing Font Size Is A Better Solution.
        </li>
        <li>
        VERSION 4: No CSS Voodoo Here, Just Classic Floats. Who Doesn't Love The Classics?
        </li>
        <li>
        VERSION 5: Now Let's Have Some Fun. Pretend This Is Going Live. We'll Use Everything But The Kitchen Sink To Make It Production Ready!
        </li>
      </ul>
  </li>
  <li>
  To view version 5, navigate to: <code>http://localhost:8080/optimizedVer.html</code>
  </li>
  <li>
  Version 5 uses the best front end practices to complete this challenge. This includes:
    <ul>
      <li>
      Vendor prefixes added for cross browser compatibilty support.
      </li>
      <li>
      CSS and JavaScript files concatenated/uglyfied/minified to limit HTTP requests.
      </li>
      <li>
      CSS file placed within head tag after calling in external fonts/icons. JavaScript file placed before closing body tag.
      </li>
      <li>
      No jQuery necessary. All vanilla JavaScript here. IIFE with prototypical inheritance for speed, modularity, and no pollution of global namespace.
      </li>
      <li>
      Animation wrangling with CSS3 for cross device support with performance boost.
      </li>
      <li>
      Images optimized via ImageMagick (CLI) and resized for optimum performance across various screen displays.
      </li>
      <li>
      Responsive image handling done via HTML srcset/sizes attributes. When it comes to determining what/when to download, the browser is king.
      </li>
      <li>
      Lazy Loading of image assets. Handled via custom JavaScript. Light as a feather and complimented by CSS sizing units (vw, em).
      </li>
      <li>
      All static assets (images, CSS, JavaScript) served via CDN.
      </li>
    </ul>
  </li>
</ul>
