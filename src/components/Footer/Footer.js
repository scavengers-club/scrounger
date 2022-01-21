import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="github-wrapper">
        <a href="https://github.com/scavengers-club/scrounger">
          <img src={`${process.env.PUBLIC_URL}/img/github.png`} />
          <p>Find us on GitHub!</p>
        </a>
      </div>
      <div className="icons8-wrapper">
        <span>Icons courtesy of </span>
        <a
          href="https://icons8.com/icons/authors/g26qDX9Ae6NS/icongeek26"
          title="icons8-author-icongeek26"
        >
          icongeek26
        </a>{' '}
        at <a href="https://icons8.com/">icons8.com</a>
      </div>
    </footer>
  );
}
