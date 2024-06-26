import "./main.scss";
import illustration from "../assets/illustration-editor-desktop.svg";
import laptop from "../assets/illustration-laptop-desktop.svg";
import phones from "../assets/illustration-phones.svg";
const Main = () => {
  return (
    <div className="main-page">
      <h2>Designed for the future</h2>
      <div className="container00">
        <div className="container-0">
          <div className="container-1">
            <h3>Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="container2">
            <h3>Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <div className="container-3">
          <img src={illustration} alt="no image" className="illustrationImg" />
        </div>
      </div>

      <div className="containerMiddle">
        <div className="middleImg">
          <img src={ phones} alt="no image" className="middleImage" />
        </div>
        <div className="state">
          <h3>State of the Art Infrastructure</h3>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>

      <div className="container000">
        <div className="container-3">
          <img src={laptop} alt="no image" className="laptopImg" />
        </div>
        <div className="container-0">
          <div className="container-1">
            <h3>Free, open, simple</h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="container2">
            <h3>Powerful tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
